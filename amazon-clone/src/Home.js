import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://amazon-clone-with-stripe-payment.netlify.app/images/banner.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="467357"
            title="Flexnest Adjustable Iron Dumbbell, Designed-in-Germany, Easy Weight Adjustment (2.5kg to 24kg), Home Workout, Gym Exercise Set For Men And Women, 24Kg, Set of 1 (Black)"
            price={8999}
            image="https://ae01.alicdn.com/kf/H89fd49c14a3f401c8c7d4b55248ace25H.jpg_640x640Q90.jpg_.webp"
            rating={5}
          />
          <Product
            id="114743"
            title="Nivia ESTADIO Football Stud/Sports and Soccer Shoe/Comfortable and Lightweight"
            price={1599}
            image="https://m.media-amazon.com/images/I/61VU8OTosJL._AC_UY1000_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="857853"
            title="Dennis Lingo Men's Striped Slim Fit Cotton Casual Shirt"
            price={749}
            image="https://www.fastemi.com/uploads/fastemicom/products/dennis-lingo-menamp039s-striped-slim-fit-cotton-casual-shirt-608860_l.jpg"
            rating={3}
          />
          <Product
            id="905736"
            title="FORSINING Automatic Mechanical Skeleton Transparent Analog Mesh Steel Band Men's Watch - FSG8181"
            price={15999}
            image="https://m.media-amazon.com/images/I/61AVptz3GBL._SX425_.jpg"
            rating={4}
          />
          <Product
            id="965379"
            title="Zixer Demon High Ankle Casual Shoes for Men Chunky Fashion Sneakers for Boys| Dancing Shoes High Tops for Men"
            price={1999}
            image="https://m.media-amazon.com/images/I/71iMnYojNcL._SY395_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="857356"
            title="VW 80 cm (32 inches) Frameless Series HD Ready Android Smart LED TV VW32S (Black)"
            price={15999}
            image="https://m.media-amazon.com/images/I/717oSOB4hCL._SX355_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="857356"
            title="Boldfit Adjustable Hand Grip Strengthener, Hand Gripper for Men & Women for Gym Workout Hand Exercise Equipment to Use in Home for Forearm Exercise Finger Exercise Power Gripper"
            price={499}
            image="https://m.media-amazon.com/images/I/71PXHvmjz1L._SY355_.jpg"
            rating={3}
          />
          <Product
            id="857356"
            title="Redgear Cosmo 7,1 Usb Gaming Wired Over Ear Headphones With Mic With Virtual Surround Sound,50Mm Driver, Rgb Leds & Remote Control(Black)"
            price={1399}
            image="https://m.media-amazon.com/images/I/71PhCZEGH7L._SY450_.jpg"
            rating={3}
          />
          <Product
            id="857356"
            title="ASIAN Men's WATERPROOF-05 Sports Running,Walking & Gym Shoes with Extra Cushion Lightweight Lace-Up Casual Sneaker Shoes for Men's & Boy's"
            price={1299}
            image="https://m.media-amazon.com/images/I/61q3AiXCZ8L._SY500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
