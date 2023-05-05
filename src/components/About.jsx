import aboutImage from "../assets/images/about-image.png";
import aboutImage2 from "../assets/images/about-image2.png";
import aboutImage3 from "../assets/images/about-image3.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    Cloudthat is focused on quickly empowering IT professionals and organizations with leveraging Cloud and Big Data. Founded by Bhavesh Goswami, an ex-Amazonian who was part of the AWS product development team and Himanshu Mody, who brings in 17 years of experience in IT Training and Consulting business allows us to deliver high quality training with best practices. We have presence in Mumbai, Bengaluru, USA & UK, but offer on-site and pre-scheduled public batches in different IT centric cities of India and Overseas.
                    </p>
                </div>
                <div className="flex items-center justify-center" style={{ marginLeft: '6rem' }}>
                    <img src={aboutImage2} alt="" className="w-[440px] h-[300px] object-cover" />
                </div>
            </div>
        </div>
    )
}