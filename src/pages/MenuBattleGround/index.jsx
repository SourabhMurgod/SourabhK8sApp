// import { Banner } from "../../components/BannerAfterLogin";
import { ChooseEvent } from "../../components/ChooseEvent";
import { Header2 } from "../../components/Header2";
import { useLocation } from 'react-router-dom';
// import { ProductsPreview } from "../../components/ProductsPreview";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../stores/menu/productsSlice";
import ProductDetailCard from "../../components/ProductDetailCard";
import { Tabs } from "../../components/Tabs";
import { addToCart } from "../../stores/cart/cartSlice";

const MenuBattleGround = () => {
    // const dispatch = useDispatch();
    // const products = useSelector(selectAllProducts);
    const [activeTab, setActiveTab] = useState('');
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const location = useLocation();
    const email = location.state.email;
    console.log(email+" successfully reached menue")

    return (
        <>
            {/* <Banner /> */}
            <Header2 email={email}/>
            {/* <ProductsPreview /> */}
            <ChooseEvent email={email}/>
        </>
    )
      

}

export default MenuBattleGround;