import PropTypes from 'prop-types';
import { Button, Div } from "./Controls.styled.jsx";
import { BiCoffeeTogo } from "react-icons/bi";

function Controls({ options, onLeaveFeedBack }) {
  return (
    <Div>
      {options.map(option => {
        return (
          <Button
            type="button"
            key={option}
            onClick={() => onLeaveFeedBack(option)}
          >
            {option}
            <BiCoffeeTogo />
          </Button>
        );
      })}
    </Div>
  );
}

Controls.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedBack: PropTypes.func.isRequired,
};

export default Controls;
