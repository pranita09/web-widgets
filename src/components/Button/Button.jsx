/* eslint-disable react/prop-types */
import "./Button.css";

export const PrimaryButton = (props) => {
  const { children, bgColor } = props;
  return (
    <button
      className="btn"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = (props) => {
  const { children, bgColor } = props;
  return (
    <button
      className="btn"
      style={{
        border: `2px solid ${bgColor}`,
        color: bgColor,
        backgroundColor: "transparent",
      }}
    >
      {children}
    </button>
  );
};

export const LinkButton = ({ children }) => {
  return <button className="link-btn">{children}</button>;
};

export const IconButton = (props) => {
  const { icon, children } = props;
  return (
    <button className="icon-btn">
      {icon}
      <span>{children}</span>
    </button>
  );
};

export const FloatingButton = (props) => {
  const { icon } = props;
  return <button className="floating-btn">{icon}</button>;
};
