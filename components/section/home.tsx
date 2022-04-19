import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
 
import { Navigation } from "swiper";

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="swiper home-slider">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="swiper-slide slide" style={{ backgroundImage: `url("${item.img}")`,}}>
                <div className="content">
                  <span>{item.subtitle}</span>
                  <h3>{item.title}</h3>
                  <a href="#" className="btn">get started</a>
                </div>
             </div>
         </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;

const data = [
  {
    img: "herobg/bg1.jpg",
    title: "delicious cooking",
    subtitle: "outstanding food",
  },
  {
    img: "herobg/bg2.jpg",
    title: "morning moment",
    subtitle: "outstanding food",
  },
  {
    img: "herobg/bg3.jpg",
    title: "authentic kitchen",
    subtitle: "outstanding food",
  },
];
