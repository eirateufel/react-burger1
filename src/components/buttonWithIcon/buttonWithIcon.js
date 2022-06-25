import PropTypes from 'prop-types';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import buttonStyles from './buttonWithIcon.module.css';

ButtonWithIcon.propTypes = {
    iconType: PropTypes.oneOf(["BurgerIcon", "ListIcon", "ProfileIcon"]),
    buttonType: PropTypes.oneOf(["primary", "secondary"]),
    text: PropTypes.string
}

export default function ButtonWithIcon(props) {
    
    return (
        <button className={`mt-4 mb-4 ${buttonStyles.buttonBody}`}>
            <div className={`pl-5 pr-5 ${buttonStyles.wrapper}`}>
                <div>
                {
                    (props.iconType === "BurgerIcon" && <BurgerIcon type={props.buttonType}/>) ||
                    (props.iconType === "ListIcon" && <ListIcon type={props.buttonType}/>) ||
                    (props.iconType === "ProfileIcon" && <ProfileIcon type={props.buttonType}/>)
                }
                </div>
                <p  className={`text text_type_main-default ml-2 ${buttonStyles.buttonName}`}>{props.text}</p>
            </div>
        </button>
    )
}