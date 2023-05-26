import PropTypes from 'prop-types';
import { TbMoodSmileBeam } from "react-icons/tb";
import { CgSmileNeutral, CgSmileSad } from "react-icons/cg";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p>
        <TbMoodSmileBeam /> <span>{good}</span>
      </p>
      <p><CgSmileNeutral /> {neutral}</p>
      <p><CgSmileSad /> {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
