import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) =>{
	return (
		<button className={props.buttonName} onClick={props.onClick}>{props.name}</button>
	);
}

export default Button;

Button.propTypes = {
	name: PropTypes.string,
	buttonName: PropTypes.string
};