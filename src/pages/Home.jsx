import Base from "./Base"
import Banner from "../components/Banner/Banner";
import IsMoreThan from "../components/IsMoreThan/IsMoreThan";
import WhatsSets from "../components/WhatsSets/WhatsSets";

const Home = () => {
  return (
    <Base>
        <Banner/>
        <IsMoreThan/>
        <WhatsSets/>
    </Base>
  )
}

export default Home