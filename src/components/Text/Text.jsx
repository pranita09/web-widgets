/* eslint-disable react/prop-types */

export const Text = (props) => {
  const { size, children } = props;
  let fontSize, lineHeight;
  switch (size) {
    case "xs":
      fontSize = "12px";
      lineHeight = "16px";
      break;
    case "sm":
      fontSize = "14px";
      lineHeight = "20px";
      break;
    case "md":
      fontSize = "16px";
      lineHeight = "24px";
      break;
    case "lg":
      fontSize = "18px";
      lineHeight = "28px";
      break;
    case "xl":
      fontSize = "20px";
      lineHeight = "28px";
      break;
    case "2xl":
      fontSize = "24px";
      lineHeight = "32px";
      break;
    case "3xl":
      fontSize = "30px";
      lineHeight = "36px";
      break;
    case "4xl":
      fontSize = "36px";
      lineHeight = "40px";
      break;
    case "5xl":
      fontSize = "48px";
      lineHeight = "1";
      break;
    default:
      fontSize = "16px";
      lineHeight = "16px";
  }
  return (
    <p style={{ fontSize: fontSize, lineHeight: lineHeight }}>{children}</p>
  );
};
