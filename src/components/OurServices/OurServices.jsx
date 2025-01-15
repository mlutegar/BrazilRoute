import React from "react";
import Style from "./OurServicesStyle";
import Card from "./Card";

const OurServices = () => {
  return (
    <Style>
      <section className="secao">
        <div className="titulo">Our Services for Tech Companies</div>

        <div className="grupo">
          <div className="link">
            <span>Market Entry</span>
            <img src="/path/to/arrow.svg" alt="Arrow" className="link-icone" />
          </div>
          <div className="grupo-cards">
            <Card
              icone="🏢"
              titulo="Company Formation in Brazil"
              descricao="We guide you through the process of establishing a legal entity specifically tailored for technology companies."
              cor="#4876A6"
            />
            <Card
              icone="📜"
              titulo="Regulatory Compliance"
              descricao="We ensure compliance with Brazil's specific regulations for technology businesses, including data privacy and cybersecurity laws."
              cor="#4876A6"
            />
            <Card
              icone="💸"
              titulo="Tax Incentives for Tech"
              descricao="We help you take advantage of the various tax incentives and benefits available to technology companies in Brazil."
              cor="#4876A6"
            />
          </div>
        </div>

        <div className="grupo">
          <div className="link">
            <span>Business Growth</span>
            <img src="/path/to/arrow.svg" alt="Arrow" className="link-icone" />
          </div>
          <div className="grupo-cards">
            <Card
              icone="🚀"
              titulo="Go-to-Market Strategy"
              descricao="We develop a tailored go-to-market strategy to help you effectively launch and scale your products or services in Brazil."
              cor="#4DAE89"
            />
            <Card
              icone="🤝"
              titulo="Partner Ecosystem"
              descricao="We connect you with key partners, investors, and customers to accelerate your growth."
              cor="#4DAE89"
            />
            <Card
              icone="📈"
              titulo="Digital Marketing and Sales"
              descricao="We implement effective digital marketing campaigns and sales strategies to reach your target audience."
              cor="#4DAE89"
            />
          </div>
        </div>
      </section>
    </Style>
  );
};

export default OurServices;