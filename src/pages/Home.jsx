import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import BannerImg from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import mainVideo from "../assets/video/afr.mp4";
import NatureVid from "../assets/video/main.mp4";

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const video = mainVideo; // Choisissez la vidéo principale à afficher

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div>
      <div className="hero-video-container h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={video} type="video/mp4" />
        </video>
        <Hero />
      </div>
      <Places handleOrderPopup={handleOrderPopup} />
      <BannerPic img={BannerImg} />
      <BlogsComp />
      <Banner />
      <BannerPic img={Banner2} />
      <Testimonial />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default Home;
