// import { Banner } from "../../components/BannerAfterLogin";
import { ChooseLevel } from "../../components/ChooseLevel";
import { Header2 } from "../../components/Header2";
import { useLocation } from 'react-router-dom';
// import { ProductsPreview } from "../../components/ProductsPreview";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../stores/menu/productsSlice";
import ProductDetailCard from "../../components/ProductDetailCard";
import { Tabs } from "../../components/Tabs";
import { addToCart } from "../../stores/cart/cartSlice";

const Menu = () => {
    // const dispatch = useDispatch();
    // const products = useSelector(selectAllProducts);
    const [activeTab, setActiveTab] = useState('');
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const location = useLocation();
    const email = location.state.email;
    console.log(email+" successfully reached menue")

    // useEffect(() => {
    //     dispatch(fetchProducts())
    // }, [])

    // const onAddProduct = (product) => {
    //     dispatch(addToCart(product))
    // }

    // const onTabSwitch = (newActiveTab) => {
    //     setActiveTab(newActiveTab);
    //     let categories = products.products.map((product) => product.name.name);
    //     let index = categories.findIndex(category => newActiveTab === category);
    //     console.log(index);
    //     if (index > -1) {
    //         setActiveTabIndex(index);
    //     } else {
    //         setActiveTabIndex(0);
    //     }
    // }

    return (
        <>
            {/* <Banner /> */}
            <Header2 email={email}/>
            {/* <ProductsPreview /> */}
            <ChooseLevel email={email}/>
        </>
    )
      

}

export default Menu;