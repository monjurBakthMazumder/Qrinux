import PropTypes from "prop-types";

const SubHeading = ({ children }) => {
  return <p className="text-xl font-jost text-warning">{children}</p>;
};

SubHeading.propTypes = {
  children: PropTypes.string,
};

export default SubHeading;
