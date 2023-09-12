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

export const TextAvatar = (props) => {
  const { firstName, lastName, bgColor, dimension } = props;
  return (
    <div
      className="avatar text-avatar"
      style={{
        width: `${dimension}`,
        height: `${dimension}`,
        backgroundColor: bgColor,
        fontSize: `${dimension * 0.5}px`,
      }}
    >
      {(firstName[0] + lastName[0]).toUpperCase()}
    </div>
  );
};
