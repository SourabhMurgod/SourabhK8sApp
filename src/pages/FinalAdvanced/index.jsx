import { Banner } from "../../components/BannerAfterLogin";
import { Header2 } from "../../components/Header2";
import Button from "../../components/elements/Button";
import tg from "../../assets/images/terminalimg.png";
import { ChooseLevel } from "../../components/ChooseLevel";
import { Header } from "../../components/Header";
import { ProductsPreview } from "../../components/ProductsPreview";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../stores/menu/productsSlice";
import ProductDetailCard from "../../components/ProductDetailCard";
import { Tabs } from "../../components/Tabs";
import { addToCart } from "../../stores/cart/cartSlice";
import { useLocation } from 'react-router-dom';

const FinalAdvanced = () => {

    const location = useLocation();
    const email = location.state.email;
    

    return (
        <>
            <Header2 email={email}/>
            <Banner />
            <div className="bg-white">
            <div className="p-5 grid grid-cols-2    ">
                <div className="">
                <h3 className="text-s font-small">Note:  <br />Please use your login credentials as<br /> your terminal credentials.<br /></h3><br />
                    <h2 className="text-2xl font-small">Try these commands</h2>
                    <p className="text-sm">
                    <br />Create a simple pod using nginx image <br />
        Kubectl run nginx --image=nginx <br /><br />

        Run a command to see detailed info. of pod <br />
        Kubectl get pods -A -owide <br /><br />

        Perform a Command to describe pod <br />
        kubectl describe pod pod_name <br /><br />

        Write a command to create Namespace <br />
        kubectl create namespace namespace_name <br />
                    </p>
                </div>
                <div className="" style={{ position: 'relative', top: '5px', left: '-330px' }}>
    <iframe
        id="iFrameExample"
        title="iFrame Example"
        src="http://3.111.143.152:4200"
        width="155%"
        height="500"
    ></iframe>
</div>

                
                {/* <div className="flex items-center justify-center" style={{ marginLeft: '6rem' }}>
                    <img src={aboutImage2} alt="" className="w-[440px] h-[300px] object-cover" />
                </div> */}
                
            </div>
            
            {/* <div className="btn-container" style={{marginLeft: '170px',marginTop: '-70px'}}>
                    <Button style={{backgroundColor: 'black'}}>Open Terminal</Button>
                    <a href="/menu" className="text-black-400 hover:text-black-500 font-bold text-decoration-line px-3">
                        
                    </a>
                </div> */}

                <div className="">
                    <p className="text-lg">
                    < br/>
                    </p>
                </div>
                
        </div>
        </>
    )
      

}

export default FinalAdvanced;