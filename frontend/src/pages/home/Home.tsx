import Banner from "./components/banner/Banner";
import Brands from "./components/brands/Brands";
import Features from "./components/features/Features";
import Rewards from "./components/rewards/Rewards";
import Cta from "./components/cta/Cta";
import Slider from "./components/slider/Slider";
import Invitation from "./components/invitation/Invitation";
import Blog from "./components/blog/Blog";
import Download from "./components/download/Download"

const Home = () => {
    return (
        <>
            <Banner />
            <Brands />
            <Features />
            <Rewards />
            <Cta />
            <Slider />
            <Invitation />
            <Blog />
            <Download />
        </>
    )
}
export default Home