/* eslint-disable react/prop-types */
import "./Image.css";

export const Image = (props) => {
  const { srcImg, altText } = props;
  return <img src={srcImg} alt={altText} className="resp-img" />;
};

export const RoundImage = (props) => {
  const { srcImg, altText } = props;
  return <img src={srcImg} alt={altText} className="round-img" />;
};
