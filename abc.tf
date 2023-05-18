provider "aws" {
  region = "ap-south-1"
  version = "~> 3.0"
}

# Create an S3 bucket for the static website
resource "aws_s3_bucket" "website_bucket" {
  bucket = "your-bucket-name"  # Replace with your desired bucket name
  acl    = "private"

  website {
    index_document = "index.html"  # Replace with your desired index file
    error_document = "error.html"  # Replace with your desired error file
  }
}

# Create an S3 bucket policy to allow public access for hosting
resource "aws_s3_bucket_policy" "website_bucket_policy" {
  bucket = aws_s3_bucket.website_bucket.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "${aws_s3_bucket.website_bucket.arn}/*"
    }
  ]
}
EOF
}

# Create a CloudFront distribution for the static website
resource "aws_cloudfront_distribution" "website_distribution" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Static website distribution"
  price_class         = "PriceClass_100"  # Adjust as per your preference
  default_root_object = "index.html"  # Replace with your desired default index file

  # Define the S3 origin for the distribution
  origin {
    domain_name = aws_s3_bucket.website_bucket.website_endpoint
    origin_id   = "S3-${aws_s3_bucket.website_bucket.id}"
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  # Define the default cache behavior
  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.website_bucket.id}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  # Specify the default SSL/TLS certificate to use
  viewer_certificate {
    cloudfront_default_certificate = true
  }

  # Add restrictions to the distribution
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

# Create a WebACL to restrict IP addresses
resource "aws_wafv2_web_acl" "example_web_acl" {
  name        = "example-web-acl"
  description = "Example Web ACL"

  scope = "REGIONAL"

  default_action {
    allow {}
  }

  rule {
    name     = "IPRestrictionRule"
    priority = 1

    statement {
      byte_match_statement {
        field_to_match {
          single_header {
            name = "X-Forwarded-For"
          }
        }

        positional_constraint = "EXACTLY"
        search_string         = "192.0.2.0/24"  # Replace with your desired IP address or CIDR range
        text_transformations {
          priority = 0
          type     = "NONE"
        }
      }
    }

    action {
      block {}
    }
  }
}

# Associate the WebACL with the CloudFront distribution
resource "aws_cloudfront_distribution_web_acl_association" "web_acl_association" {
  distribution_id = aws_cloudfront_distribution.website_distribution.id
  web_acl_id      = aws_wafv2_web_acl.example_web_acl.id
}
