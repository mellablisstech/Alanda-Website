import React, { useState } from "react";
import Footer from "../Components/Footer";
function Home() {
  return (
    <>
      <Hero1 />
    </>
  );
}

const Hero1 = () => {
  const LeftSide = () => {
    return (
      <div className="left-wrapper">
        <h1 className="writeup">
          Na your turn to buy land <span className="writeup2">with ease</span>
        </h1>

        <p className="writeup3">
          With Alanda everyone get's the opportunity to <br />
          buy plots and become Landlords and with Us
          <br /> your journey starts Here.
        </p>
        <div className="searchandbutton">
          <input
            className="heroinput"
            placeholder="Where would you love to Buy"
            type="text"
          />
          <a href="/SignUp">
            <button className=" btn signupbtn w3-hide-small">Search</button>
          </a>
        </div>
      </div>
    );
  };

  const RightSide = () => {
    return (
      <div className="land">
        <div className="landPic"></div>
        <div style={{ display: "flex" }}>
          <div>
            <h1 className="number1">250+</h1>
            <h4 className="users">Users</h4>
          </div>
          <div>
            <h1 className="number2">75+</h1>
            <h4 className="plots1">Plots Ready</h4>
          </div>
          <div>
            <h1 className="number3">14+</h1>
            <h4 className="plots3">Plots Sold</h4>
          </div>
        </div>
      </div>
    );
  };
  const Upside = () => {
    return (
      <div className="SecondheroTop">
        <h1>Why Alanda?</h1>
      </div>
    );
  };

  const DownSide = () => {
    return (
      <div className="SecondheroBottom">
        <div className="boxWrapper">
          <div className="box1">
            <div className="box1pic"></div>
            <h1>Flexible Payment</h1>
            <h3>
              Alanda offers you different payment plan which includes Daily,
              Weekly, Quarterly or 6 Months Plan, depending on which options
              suits you.
            </h3>
          </div>
          {/* end box 1  */}

          <div className="box1 box2">
            <div className="box2pic"></div>
            <h1>Secured Lands</h1>
            <h3>
              Our Plots are secured and safe as we,ve taken measures to
              safeguard your lands even after making payments.
            </h3>
          </div>
          {/* end of box two  */}
          <div className="box1 box3">
            <div className="box3pic"></div>
            <h1>No Hidden Charges</h1>
            <h3>
              With Alanda there are no hidden fees as your payment covers all
              expenses of your lands and documents.
            </h3>
          </div>
          {/* end of box three  */}
          <div className="box1 box4">
            <div className="box4pic"></div>
            <h1>Approved Documentation</h1>
            <h3>
              All documents are legal and approved by state laws, so you fit
              carry your lawyer follow body check am, We Legit
            </h3>
          </div>
        </div>
      </div>
    );
  };

  const ThirdUp = () => {
    return (
      <div className="ThirdheroTop">
        <h1>
          Oga Investor let’s explore locations with fast developments in Rivers
          state
        </h1>
      </div>
    );
  };

  const LandHero = () => {
    return (
      <div className="ThirdheroBottom">
        <div className="thirdbox1">
          <div className="land1">
            <img className="land1pic"></img>
          </div>
          <div className="land1writeup">
            <div className="landfirstwriteup">
              <h3>
                Omagwa is located in Ikwerre local government of Rivers state
                and has landmarks such as the Port Harcourt international
                airport
              </h3>
              <button className=" btn landbtn w3-hide-small">Read More</button>
            </div>
          </div>
        </div>
        {/* end of first box  */}
        <div className="thirdbox2">
          <div className="land2writeup">
            <div className="landfirstwriteup">
              <h3>
                Abara etche is a fast developing area with organizations such as
                the Rivers State University Etche Campus, Youth With a Mission
                University, Tacell Polytechnic, and Stella Maris University.{" "}
              </h3>
              <button className=" btn landbtn w3-hide-small">Read More</button>
            </div>
          </div>
          <div className="land2">
            <img className="land2pic"></img>
          </div>
        </div>
        {/* end of secnd boxx  */}
        <div className="thirdbox3">
          <div className="land3">
            <img className="land3pic"></img>
          </div>
          <div className="land1writeup">
            <div className="landfirstwriteup">
              <h3>
                Oyigbo is one of the fastest developing local government in
                Rivers state. It shares a boundary with Abia state, and houses
                the Afam Power Station.{" "}
              </h3>
              <button className=" btn landbtn w3-hide-small">Read More</button>
            </div>
          </div>
        </div>
        {/* end third box  */}
        <button className=" btn seeMore w3-hide-small">
          See More Locations
        </button>
        <secondherotop />
      </div>
    );
  };
  const FAQ = () => {
    const [accordian, setAccordian] = useState(null);

    const toggleQuestion = (index) => {
      setAccordian((prevIndex) => (prevIndex === index ? null : index));
    };

    const  frequentlyAskQuestion = [
      {
        question: "How does Alanda work?",
        answer: `Ans: Alanda Is an Online Real Estate Platform, which is built for users to be able to purchase
        properties online and also get easy payment plans and options for everyone.`,
        
      },

      { 
        question: "Can I see my Property?",
        answer: `Ans: Yes, U have the right to view and see the property you wish for as all properties have their locations which you can verify.`,
      },

      {
        question: "How do i get my Documents?",
        answer: `Ans: All documents are available and you can get them at when you fufill the terms of your payment plans.`,
      },
    ];

    return (
      <div className="FAQsession FAQhero">
        <h1>Frequently Asked Questions</h1>
        <h4>
          Get quick answers to any of your Alanda and Alanda Properties
          questions and concerns.
        </h4>
        <h4 className="second">
          Whether you are a customer or simply a guest, we will have an answer
          ready for you.
        </h4>
        {frequentlyAskQuestion.map((ques, index) => (
          <div className="accordian-container" key={index}>
            <div className="questionsTag">
              <p className="question"> {ques.question}</p>
              <p
                onClick={() => toggleQuestion(index)}
                className={`arrow ${accordian === index ? "buttonActive" : ""}`}
                >
                ^
              </p>
            </div>
            <p
              className={`answer ${accordian === index ? "buttonActive" : ""}`}
            >
              {ques.answer}
            </p>
          </div>
        ))}
      </div>
    );
  };

  
  return (
    <div className="Wrapper">
      <div className="firstWrapper">
        <LeftSide />
        <RightSide />
      </div>
      <div className="secondWrapper">
        <Upside />
        <DownSide />
      </div>
      <div className="thirdWrapper">
        <ThirdUp />
        <LandHero />
      </div>
      <div>
        <FAQ />
      </div>
      <div className="homefooter">
        <Footer />
      </div>
    </div>
  );
};
export default Home;
