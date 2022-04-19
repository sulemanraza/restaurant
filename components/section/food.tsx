import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination } from "swiper";

const food = () => {
  return (
    <section className="food" id="food">
      <div className="heading">
        <span>popular dishes</span>
        <h3>our delicious food</h3>
      </div>

      <div className="swiper food-slider">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          centeredSlides={true}
 
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          loop={true}
        >
          {[1, 2, 3, 4, 5, 5 ].map((item, i) => (
            <SwiperSlide key={i}>
              <div className="swiper-slide slide" data-name={`food-${item}`}>
                <img src={`images/food-img-${item}.png`} alt="" />
                <h3>delicious food</h3>
                <div className="price">$49.99</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default food;
