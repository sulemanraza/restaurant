import type { NextPage } from "next";
import About from "../components/section/about";
import Blogs from "../components/section/blogs";
import Food from "../components/section/food";
import Gallerys from "../components/section/gallery";
import Hero from "../components/section/home";
import Menu from "../components/section/menu";
import Order from "../components/section/order";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About/>
      <Food/>
      <Gallerys/>
      <Menu/>
      <Order/>
      <Blogs/>
    </>
  );
};

export default Home;
