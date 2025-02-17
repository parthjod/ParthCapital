import React from "react";
import Hero from "./Hero";
import LeftComp from "./LeftComp";
import RightComp from "./RightComp";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftComp
        imageURL="media\Zassets\kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightComp
        imageURL="media\Zassets\console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      />
      <LeftComp
        imageURL="media\Zassets\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightComp
        imageURL="media\Zassets\kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      />
      <LeftComp
        imageURL="media\Zassets\varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center fs-4" style={{marginTop: "120px"}}>
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;
