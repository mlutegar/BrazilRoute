import Base from "./Base"
import Banner from "../components/Banner/Banner";
import IsMoreThan from "../components/IsMoreThan/IsMoreThan";
import WhatsSets from "../components/WhatsSets/WhatsSets";
import WhyChoose from "../components/WhyChoose/WhyChoose";

const Home = () => {
  return (
    <Base>
        <Banner/>
        <IsMoreThan/>
        <WhatsSets/>
        <WhyChoose/>
    </Base>
  )
}

export default Home