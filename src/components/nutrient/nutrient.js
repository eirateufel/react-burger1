import PropTypes from 'prop-types';
import nutrientStyles from './nutrient.module.css';

Nutrient.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number
}

export default function Nutrient(props) {
    return (
        <div className={nutrientStyles.nutrientSubsection}>
            <p className={`text text_type_main-default text_color_inactive mb-2 ${nutrientStyles.name}`}>{props.name}</p>
            <p className=" text text_type_digits-default text_color_inactive">{props.number}</p>
        </div>
    )
}