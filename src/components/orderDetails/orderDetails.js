
import PropTypes from 'prop-types';
import orderDetailsStyles from './orderDetails.module.css';
import orderReadyImage from '../../images/order-ready.svg'

OrderDetails.propTypes = {
    orderNumber: PropTypes.string
}

export default function OrderDetails(props) {
    
    return (
        <div className={`mt-4 mr-15 mb-15 ml-15 ${orderDetailsStyles.content}`}>
            <p className={`text text_type_digits-large ${orderDetailsStyles.orderNumber}`}>{props.orderNumber}</p> {
            // В макете не указан размер шрифта номера заказа, так или иначе он сильно больше чем библиотечный large, подобран "на глаз"
            }
            <p className={`text text_type_main-medium mt-8`}>идентификатор заказа</p>
            <img alt="checkmark" className={`mt-15 mb-15 ${orderDetailsStyles.picture}`} src={orderReadyImage}></img>
            <p className={`text text_type_main-default mb-2`}>Ваш заказ начали готовить</p>
            <p className={`text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}