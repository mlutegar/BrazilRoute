import Base from "./Base"
import Banner from "../components/Banner/Banner";
import IsMoreThan from "../components/IsMoreThan/IsMoreThan";
import WhatsSets from "../components/WhatsSets/WhatsSets";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import WhyBrazil from "../components/WhyBrazil/WhyBrazil";
import KeyFacts from "../components/KeyFacts/KeyFacts";
import KeyBenefits from "../components/KeyBenefits/KeyBenefits";
import ReadTo from "../components/ReadyTo/ReadyTo";
import OurServices from "../components/OurServices/OurServices";

const Home = () => {
  return (
    <Base>
        <Banner/>
        <IsMoreThan/>
        <WhatsSets/>
        <WhyChoose/>
        <WhyBrazil/>
        <OurServices/>
        <KeyBenefits/>
        <KeyFacts/>
        <ReadTo/>
    </Base>
  )
}

export default Home