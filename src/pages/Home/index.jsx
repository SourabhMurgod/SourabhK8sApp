import { Banner } from "../../components/Banner";
import { About } from "../../components/About";
import { ProductsPreview } from "../../components/ProductsPreview";
import { Header } from "../../components/Header";

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <ProductsPreview />
            <About />
        </>
    )
}

export default Home;