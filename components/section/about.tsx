

const About = () => {
   return (
      <section className="about" id="about">

         <div className="image">
            <img src="images/about-img.png" alt=""/>
         </div>

         <div className="content">
            <h3 className="title">welcome to our restaurant</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio at, saepe accusamus dolorum, quos eos nesciunt amet exercitationem illum quis nostrum, repellat quaerat eum debitis fugit alias magnam omnis!</p>
            <a href="#" className="btn">read more</a>
            <div className="icons-container">
               <div className="icons">
                  <img src="images/about-icon-1.png" alt=""/>
                     <h3>quality food</h3>
               </div>
               <div className="icons">
                  <img src="images/about-icon-2.png" alt=""/>
                     <h3>food & drinks</h3>
               </div>
               <div className="icons">
                  <img src="images/about-icon-3.png" alt=""/>
                     <h3>expert chefs</h3>
               </div>
            </div>
         </div>

      </section>
   )
}

export default About