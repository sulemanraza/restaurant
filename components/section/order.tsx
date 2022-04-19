import React from 'react'

const Order = () => {
  return (
    <section className="order" id="order">

   <div className="heading">
      <span>order now</span>
      <h3>fast home delivery</h3>
   </div>

   <form action="">
      <div className="box-container">
         <div className="box">
            <div className="inputBox">
               <span>full name</span>
               <input type="text" placeholder="enter your name"/>
            </div>
            <div className="inputBox">
               <span>food name</span>
               <input type="text" placeholder="food you want"/>
            </div>
            <div className="inputBox">
               <span>order details</span>
               <input type="text" placeholder="specifics with food"/>
            </div>
            <div className="inputBox">
               <span>your address</span>
               <textarea name="" placeholder="enter your address" id=""   cols={30} rows={10}></textarea>
            </div>
         </div>
         <div className="box">
            <div className="inputBox">
               <span>number</span>
               <input type="number" placeholder="enter your number"/>
            </div>
            <div className="inputBox">
               <span>how much</span>
               <input type="number" placeholder="how many you want"/>
            </div>
            <div className="inputBox">
               <span>when you want</span>
               <input type="datetime-local"/>
            </div>
            <div className="inputBox">
               <span>our address</span>
               <iframe className="map" src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=08923+(Restaurant)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"  loading="lazy"></iframe>
            </div>
         </div>
      </div>
      <input type="submit" value="order now" className="btn"/>
   </form>
   
</section>
  )
}

export default Order