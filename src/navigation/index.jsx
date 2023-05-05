import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import ChooseLevel from "../components/ChooseLevel";
import PaymentSuccess from "../pages/PaymentSuccess";
import FinalBeginier from "../pages/FinalBeginer";
import FinalPractice from "../pages/FinalPractice";
import FinalIntermediate from "../pages/FinalIntermediate";
import FinalAdvanced from "../pages/FinalAdvanced";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";
import { Footer } from "../components/Footer";

const Navigation = () => {
    const productsInCart = useSelector(cartProducts);

    return (
        <BrowserRouter>
            <Header cartCount={productsInCart ? productsInCart.length : 0}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/chooselevel" element={<ChooseLevel />} />
                <Route path="/finalbeginer" element={<FinalBeginier />} />
                <Route path="/finalpractice" element={<FinalPractice />} />
                <Route path="/finalintermediate" element={<FinalIntermediate />} />
                <Route path="/finaladvanced" element={<FinalAdvanced />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Navigation;