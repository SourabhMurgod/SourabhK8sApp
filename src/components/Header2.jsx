import foody from "../assets/images/foody.png";
import ct from "../assets/images/ct.png";
import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import { useEffect, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';

export const Header2 = ({ email }) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [showEmail, setShowEmail] = useState(false);

    const handleLogout = () => {
        fetch('https://rdg67uiw75.execute-api.ap-south-1.amazonaws.com?user='+email)
              .then(response => response.json())
              .then(data => console.log(data))
              .catch(error => console.error(error));
        navigate("/");
    }

    

    return (
        <nav id="header" className="bg-black text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        <img src={ct} alt="logo" className="w-40 h-40 object-cover"/>
                    </Link>
                </div>
                {/* <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-xl">Home</Link>
                    <Link to="#about" className="text-xl">About</Link>
                </div> */}
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10"> 
                    <Link to="/" className="text-xl hover:outline-none hover:text-white hover:border-b-4 hover:border-white transition-transform transform hover:scale-110" > 
                        Home 
                    </Link> 
                    <Link to="#about" className="text-xl hover:outline-none hover:text-white hover:border-b-4 hover:border-white transition-transform transform hover:scale-110" > 
                        About 
                    </Link> 
                </div>
                <div className="flex items-center justify-center space-x-4">
                    {/* display email id */}
                    {/* <Link to="/cart" className="mr-4 relative">
                        <Link to="#about" className="text-xl">{email}</Link>
                    </Link> */}
                    <div 
                        className="relative" 
                        onMouseEnter={() => setShowEmail(true)} 
                        onMouseLeave={() => setShowEmail(false)} 
                    > 
                    <Link to="/cart" className="mr-4"> 
                        <PersonIcon style={{ height: '70px', width: '45px' }} /> 
                    </Link> 
                    {showEmail && ( 
                        <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-white py-2 px-4 rounded-md shadow-md"> 
                            <p className="text-gray-600 text-sm font-bold">{email}</p> 
                        </div> 
                    )} 
                    </div>

                    {
                        isLoggedIn ? 
                        <Button onClick={handleLogout}>Log Out</Button> : 
                        (
                            <>
                             <Link to="/login">Log In</Link>
                             <Link to="/register">Sign Up</Link>
                            </>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}