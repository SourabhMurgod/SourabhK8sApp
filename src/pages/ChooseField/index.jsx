// import { Banner } from "../../components/BannerAfterLogin";
import { ChooseLevel } from "../../components/ChooseLevel";
import { Header2 } from "../../components/Header2";
import { useLocation } from 'react-router-dom';
// import { ProductsPreview } from "../../components/ProductsPreview";
import { useEffect, useState } from "react";
import React from "react";
import Battle from "../../assets/images/battle.webp"
import playground from "../../assets/images/playground.gif"
import { useNavigate } from "react-router-dom";



const ChooseField = () => {
    // const dispatch = useDispatch();
    // const products = useSelector(selectAllProducts);
    const [activeTab, setActiveTab] = useState('');
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const location = useLocation();
    const email = location.state.email;
    console.log(email+" successfully reached menue")
    let navigate = useNavigate();


    const onSubmit1 = (data) => {
        navigate('/menu', { state: { email: email } });
        
    }

    const onSubmit2 = (data) => {
         navigate('/menubattleground', { state: { email: email } });

        
    }

    return (
        <>
            {/* <Banner /> */}
            <Header2 email={email}/>
            <div>
            <div class="grid grid-cols-2 gap-4 bg-gray-50">
                <div>
                    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50 ">
                        {/* <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50 "> */}
                        {/* <div class="outline-flex ml-200">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div> */}


                        <div className="h-full w-full px-2 py-4 mt-3 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg hover:scale-105 transition-transform duration-300">
                            <div className="text-sm md:text-lg lg:text-xl">
                                <a href="#">
                                    <h3 className="text-3xl font-bold subpixel-antialiased items-center text-center text-black-500 hover:text-purple-600">
                                        PlayGround
                                    </h3>
                                </a>
                            </div>
                            <br />
                            <article>

                                <h2 className="text-2xl font-bold">Boost your conversion rate</h2>
                                <p className="line-clamp-3">
                                    Coding Play Ground: Unleash your coding potential, collaborate, and grow in an innovative platform that fosters creativity and skill development.
                                </p>

                            </article>

                            <br />
                            <div className="top-0 left-0 w-full h-full flex">
                                <img
                                    src={playground}
                                    alt="GIF Image"
                                    className="w-70 h-96" // Adjust the values as per your requirement
                                />
                            </div>
                            {/* <div> Start explore our playground</div> */}
                            <div className="grid grid-cols-1 items-center justify-center gap-4">
                                <div className="flex items-center mt-4">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={onSubmit1}>
                                        Start Play
                                    </button>

                                </div>
                                {/* <div className="flex items-center mt-4">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                        Submit
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div>

                    <div>
                        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50 ">
                            {/* <div class="outline-flex ml-200">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div> */}


                            <div className="h-full w-full px-2 py-4 mt-3 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg hover:scale-105 transition-transform duration-300">
                                <div className="text-sm md:text-lg lg:text-xl">
                                    <a href="#">
                                        <h3 className="text-3xl font-bold subpixel-antialiased items-center text-center text-black-500 hover:text-purple-600">
                                            Battle Ground
                                        </h3>
                                    </a>
                                </div>
                                <br />
                                <article>
                                    <h2 className="text-2xl font-bold">Start your Battle</h2>
                                    <p className="line-clamp-3 text-left">
                                    Coding Battle Ground is an exhilarating platform for developers to compete in coding contests, sharpen their skills, development, and learn from peers.
                                    </p>
                                </article>
                                <br />
                                <div className="top-0 left-0 w-full h-full flex">
                                    <img
                                        src={Battle}
                                        // src={Battleground}
                                        alt="GIF Image"
                                        className="w-70 h-96" // Adjust the values as per your requirement
                                    />
                                </div>
                                <div className="grid grid-cols-1 items-center justify-center gap-4">
                                    <div className="flex items-center mt-4">
                                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={onSubmit2}>
                                            Start Battle
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
      

}

export default ChooseField;