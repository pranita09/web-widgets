/* eslint-disable react/prop-types */
import "./Avatar.css";

export const ImageAvatar = (props) => {
  const { srcImg, altText, dimension } = props;
  return (
    <div className="avatar" style={{ width: dimension, height: dimension }}>
      <img src={srcImg} alt={altText} className="avatar-img" />
    </div>
  );
};

export const TextAvatar = () => {
  return (
    <div>
      <img />
    </div>
  );
};
