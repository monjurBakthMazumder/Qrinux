
import PropTypes from "prop-types";

const BreadcrumbContainer = ({ children }) => {
  return (
    <div className="text-center py-10 px-4 sm:px-6 md:px-10 bg-secondary">
      {children}
    </div>
  );
};

BreadcrumbContainer.propTypes = {
  children: PropTypes.string,
};

export default BreadcrumbContainer;
