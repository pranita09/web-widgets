import "./SectionHeader.css";

// eslint-disable-next-line react/prop-types
export const SectionHeader = ({ title, description }) => {
  return (
    <div className="section-header-container">
      <h1 className="section-title">{title}</h1>
      <p className="section-description">{description}</p>
    </div>
  );
};
