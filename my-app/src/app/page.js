import Image from "next/image";
import Navbar from "../components/navbar";
import Swipeer from "../components/swipeer";
import Swipeer_two from "../components/swipeer2";
import Swipeer_three from "../components/swipeer3";
import Four_labels from "../components/four_labels";
import Two_labels from "../components/two_labels";
import Products from "../components/products";
import Product from "../components/product";
import Header from "@/components/big_swiber";

export default function Home() {
  return (
    <>
      <Header />
      <Four_labels />
      <Products />
      <Two_labels />
    </>
  );
}
