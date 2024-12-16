import "./Logo.css";
import Tilt from "react-parallax-tilt";

const Logo = () => {
  return (
    <div className="logo">
      <Tilt>
        <img src="https://img.icons8.com/ios/452/brain.png" alt="brain logo" />
      </Tilt>
    </div>
  );
};

export default Logo;
