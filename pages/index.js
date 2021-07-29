import HomeTestimonial from "../component/home-testimonial";
import HomeWidget from "../component/home-widget";
import MainLayout from "../component/main-layout";
import ProductSlider from "../component/product-slider";
import Slider from "../component/slider";

export default function Home() {
  return (
    <>
      <MainLayout title="Home">
        <Slider />
        <ProductSlider />
        <HomeWidget />
        <HomeTestimonial />
      </MainLayout>
    </>
  );
}
