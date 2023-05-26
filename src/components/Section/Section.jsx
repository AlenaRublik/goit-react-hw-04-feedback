import PropTypes from 'prop-types';
import { Unit } from "./Section.styled.jsx";

function Section({ title, children }) {
  return (
    <Unit>
      <h2>{title}</h2>
      {children}
    </Unit>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
export default Section;
