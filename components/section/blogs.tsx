import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Pagination } from "swiper";

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        <span>our blogs</span>
        <h3>our latest posts</h3>
      </div>

      <div className="swiper blogs-slider">
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
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <SwiperSlide key={i}>
              <div className="swiper-slide slide">
                <div className="image">
                  <img src={`images/blog-img-${item}.jpg`} alt="" />
                  <span>burger</span>
                </div>
                <div className="content">
                  <div className="icon">
                    <a href="#">
                      <i className="fas fa-calendar"></i> 21st may, 2022
                    </a>
                    <a href="#">
                      <i className="fas fa-user"></i> by admin
                    </a>
                  </div>
                  <a href="#" className="title">
                    blog title goes here
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi, reprehenderit!
                  </p>
                  <a href="#" className="btn">
                    read more
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blogs;

const BlogData = [
  {
    img: "images/blog-img-1.jpg",
    title: "blog title goes here",
    slug: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, reprehenderit!",
    author: "admin",
    date: "21st may, 2022",
  },
  {
    img: "images/blog-img-2.jpg",
    title: "blog title goes here",
    slug: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, reprehenderit!",
    author: "admin",
    date: "21st may, 2022",
  },
  {
    img: "images/blog-img-3.jpg",
    title: "blog title goes here",
    slug: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, reprehenderit!",
    author: "admin",
    date: "21st may, 2022",
  },
  {
    img: "images/blog-img-4.jpg",
    title: "blog title goes here",
    slug: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, reprehenderit!",
    author: "admin",
    date: "21st may, 2022",
  },
  {
    img: "images/blog-img-5.jpg",
    title: "blog title goes here",
    slug: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, reprehenderit!",
    author: "admin",
    date: "21st may, 2022",
  },
  {
    img: "images/blog-img-6.jpg",
    title: "blog title goes here",
    slug: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, reprehenderit!",
    author: "admin",
    date: "21st may, 2022",
  },
];
