import Banner from "../components/Banner";
import BannerReverse from "../components/BannerReverse";
import BrewConnect from "../components/Categories-pages/BrewConnect";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import ProudProducts from "../components/ProudProducts";
import TrendingSlider from "../components/TrendingSlider";
import Banner1 from "../img/banner/banner1.jpg";
import Banner2 from "../img/banner/banner2.jpg";

function Home() {
  return (
    <>
      <Hero />
      <BrewConnect />
      <ProudProducts />
      <Banner
        title="Passionate People Make Great Coffee"
        text="Sip by sip, we're here to make your coffee moments an offer you can't refuse."
        img={Banner1}
      />
      <TrendingSlider />
      <BannerReverse
        title="Indulge in the Artistry of BrewFather"
        text="Our coffee blends are carefully crafted to awaken your senses, inviting you to create your own symphony of flavors."
        img={Banner2}
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
