import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center"> {text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

// popup positions
const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center
    neo-brutalism-blue py-4 px-8 text-white mx-5"
    >
      Hi, I am <span className="font-semibold">Rubin</span>👋
      <br />A MERN Developer from India
    </h1>
  ),
  2: (
    <InfoBox
      text="As a versatile Full Stack Developer, I specialize in building robust web applications with seamless front-end and back-end integration."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects with good implementations.Curious Abt? "
      link="/projects"
      btnText="Visit"
    />
  ),
  4: (
    <InfoBox
      text="Need a good resource or looking for? just few keystrokes away"
      link="/contact"
      btnText="Let's connect 😊"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
