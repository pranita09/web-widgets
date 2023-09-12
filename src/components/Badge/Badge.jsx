/* eslint-disable react/prop-types */
import { ImageAvatar } from "../.";
import "./Badge.css";

export const IconBadge = (props) => {
  const { children, count, iconSize } = props;
  return (
    <div className="icon-badge">
      <span className="icon">
        <span style={{ fontSize: `${iconSize}px` }}>{children}</span>
        <span className="badge">{count}</span>
      </span>
    </div>
  );
};

export const StatusBadge = (props) => {
  const { status, srcImg, altText, dimension } = props;
  let bgColor;
  switch (status) {
    case "online":
      bgColor = "#00af00";
      break;
    case "offline":
      bgColor = "#808080";
      break;
    case "dnd":
      bgColor = "#ff0000";
      break;
    default:
      bgColor = "#f2f2f2";
  }
  return (
    <div className="status-badge">
      <ImageAvatar srcImg={srcImg} altText={altText} dimension={dimension} />
      <span className="badge-dot" style={{ backgroundColor: bgColor }}></span>
    </div>
  );
};
