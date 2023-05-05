import { Banner } from "../../components/BannerAfterLogin";
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

const FinalIntermediate = () => {
    

    return (
        <>
            <Banner />
            <div className="bg-white">
            <div className="p-5 grid grid-cols-2    ">
                <div className="">
                <h3 className="text-s font-small">Note:  <br />Please use your login credentials as<br /> your terminal credentials.<br /></h3><br />z
                    <h2 className="text-2xl font-small">Try these commands</h2>
                    <p className="text-sm">
                    <br />Find nodes that are ready and taints not <br /> set as NoSchedule <br />
                    kubectl describe nodes | grep Taints <br /><br />

                    Create deployment with 3 replicas by using <br /> nginx image with port 80 <br />
                    kubectl create deployment mydedep <br /> --image=nginx --replicas=3 --port 80 <br /><br />

                    Add the env variable to the container in the <br /> previously created deployment. <br />
                    kubectl edit deployment deployment-name <br /><br />

                    Create and deploy a new pod.yaml and Add <br /> capabilities to the containers like <br /> SYS_TIME and NET_ADMIN <br />
                    kubectl run mypod --image=nginx <br /> --dry-run=client -o yaml pod.yaml <br /><br />

                    Edit pod.yaml and add in "securityContext" <br /> parameter <br />
                    Create Role, RoleBinding, Service Accounts  <br />
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

export default FinalIntermediate;