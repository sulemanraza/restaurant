import React from "react";
 

const Gallerys = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <span>our gallery</span>
        <h3>our untold stories</h3>
      </div>

      <div className="gallery-container">
        {data.map((item, i) => (
          <a key={i} href={item.img} className="box">
            <img src={item.img} alt="" />
            <div className="icon">
              <i className="fas fa-plus"></i>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Gallerys;

const data = [
  {
    img: "images/food-galler-img-1.jpg",
  },
  {
    img: "images/food-galler-img-2.jpg",
  },
  {
    img: "images/food-galler-img-3.jpg",
  },
  {
    img: "images/food-galler-img-4.jpg",
  },
  {
    img: "images/food-galler-img-5.jpg",
  },
  {
    img: "images/food-galler-img-6.jpg",
  },
];
