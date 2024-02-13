import React from "react";
import Footer from "../Components/Footer";


function About() {
  {
    return (
      <>
        <Abouthero1 />
      </>
    );
  }
}

const Abouthero1 = () => {
  const Aboutleftside = () => {
    return (
      <div className="aboutleft-wrapper">
        <div className="leftWriteup">
          <h1 className="about aboutus">About Us</h1>
          <h1 className="we ">
            We are building the future of easy Land acquisition for everyone
          </h1>
          <h1 className="with">
            With Alanda Opportunity is made easy in Land Aquisition, as we
            provide affordable lands and flexible payment structures
          </h1>
        </div>
      </div>
    );
  };

  const Aboutrightside = () => {
    return (
      <div className="aboutright-wrapper">
        <div className="aboutpic1"></div>
        <div className="aboutpic2"></div>
        <div className="aboutpic3"></div>
      </div>
    );
  };

  const Team = () => {
    return (
      <div className="team-wrapper">
        <h1 className="teamAlanda">Team Alanda</h1>
        <h1 className="what">
          We are a developing a diverse team of vibrant individuals.{" "}
        </h1>
        <div className="first4pic">
          {/* first two start  */}

          <div className="leftdiv">
            <div className="firstfounder"></div>
            <div className="secondfounder"></div>
          </div>

          {/* second set  */}
          <div className="rightdiv">
            <div className="thirdfounder"></div>
            <div className="fourthfounder"></div>
          </div>
        </div>

        {/* detail  */}
        <div className="info ">
          <div className="leftinfo">
            <div>
              <h1 className="name anthony">Uebari Anthony Dornu</h1>
              <h1 className="position a">Team Lead/ Backend Engineer</h1>
            </div>
            <div>
              <h1 className="name chibuike">Chibuike Amadi</h1>
              <h1 className="position b">Product Designer</h1>
            </div>
          </div>

          {/* second two set  */}
          <div className="rightinfo">
            <div>
              <h1 className="name emmy">Emediong Godwin</h1>
              <h1 className="position c">Product Designer</h1>
            </div>
            <div>
              <h1 className="name lois">Lois Oyinyechi</h1>
              <h1 className="position d">
                Brand Identity Designer/ Creative Director
              </h1>
            </div>
          </div>
        </div>

        {/* last three pic  */}

        <div className="first3pic">
          {/* first two start  */}

          <div className="secondset-leftdiv">
            <div className="fifthfounder"></div>
            <div className="sixthfounder"></div>
          </div>

          {/* second set  */}
          <div className="secondset-rightdiv">
            <div className="seventhfounder"></div>
          </div>
        </div>

        {/* detail  */}
        <div className="info ">
          <div className="leftinfo">
            <div>
              <h1 className="name pamela">Bobmanuel O. Pamela</h1>
              <h1 className="position e">Front-End Engineer</h1>
            </div>
            <div>
              <h1 className="name queen">Queen Abigail</h1>
              <h1 className="position f">Product Designer</h1>
            </div>
          </div>

          {/* second two set  */}
          <div className="rightinfo">
            <div>
              <h1 className="name success">Nwoko Success</h1>
              <h1 className="position g">Data Analyst</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="AboutWrapper">
      <div className="aboutfirstheroWrapper">
        <Aboutleftside />
        <Aboutrightside />
      </div>
      <div className="aboutsecondheroWrapper">
        <Team />
      </div>
      

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default About;
