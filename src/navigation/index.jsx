import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Header2 } from "../components/Header2";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Menu from "../pages/Menu";
import MenuBattleGround from "../pages/MenuBattleGround";
import Cart from "../pages/Cart";
import ChooseLevel from "../components/ChooseLevel";
import ChooseEvent from "../components/ChooseEvent";
import EventTemp1 from "../components/EventComponents/EventTempF1";
import EventTemp2 from "../components/EventComponents/EventTempF2";
import EventTemp3 from "../components/EventComponents/EventTempF3";
import EventTemp4 from "../components/EventComponents/EventTempF4";
import EventTemp5 from "../components/EventComponents/EventTempF5";
import EventTemp6 from "../components/EventComponents/EventTempF6";
import EventTemp7 from "../components/EventComponents/EventTempF7";
import EventTemp8 from "../components/EventComponents/EventTempF8";
import ChooseField from "../pages/ChooseField";
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
            {/* <Header cartCount={productsInCart ? productsInCart.length : 0}/> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/menubattleground" element={<MenuBattleGround />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/chooselevel" element={<ChooseLevel />} />
                <Route path="/chooseevent" element={<ChooseEvent />} />
                <Route path="/eventtemp1" element={<EventTemp1 />} />
                <Route path="/eventtemp2" element={<EventTemp2 />} />
                <Route path="/eventtemp3" element={<EventTemp3 />} />
                <Route path="/eventtemp4" element={<EventTemp4 />} />
                <Route path="/eventtemp5" element={<EventTemp5 />} />
                <Route path="/eventtemp6" element={<EventTemp6 />} />
                <Route path="/eventtemp7" element={<EventTemp7 />} />
                <Route path="/eventtemp8" element={<EventTemp8 />} />
                <Route path="/choosefield" element={<ChooseField />} />
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