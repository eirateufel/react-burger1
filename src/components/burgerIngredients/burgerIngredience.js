import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {ConstructorElement, DragIcon, CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredienceStyles from './burgerIngredience.module.css';
import Modal from '../modal/modal';
import OrderDetails from '../orderDetails/orderDetails';

BurgerIngredience.propTypes = {
    ingredients: PropTypes.shape({
        buns: PropTypes.arrayOf(PropTypes.shape({
            image: PropTypes.string,
            image_large: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            calories: PropTypes.number,
            carbohydrates: PropTypes.number,
            fat: PropTypes.number,
            proteins: PropTypes.number,
        })),
        mains: PropTypes.arrayOf(PropTypes.shape({
            image: PropTypes.string,
            image_large: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            calories: PropTypes.number,
            carbohydrates: PropTypes.number,
            fat: PropTypes.number,
            proteins: PropTypes.number,
        })),
        sauces: PropTypes.arrayOf(PropTypes.shape({
            image: PropTypes.string,
            image_large: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            calories: PropTypes.number,
            carbohydrates: PropTypes.number,
            fat: PropTypes.number,
            proteins: PropTypes.number,
        }))
    })
}

export default function BurgerIngredience({ingredients}) {
    const [burgerWrapper, setBurgerWrapper] = React.useState();
    const [burgerMiddle, setBurgerMiddle] = React.useState();
    const [modalMounted, setModalMountedState] = React.useState(false)
    const [totalPrice, setTotalPrice] = React.useState(0);
    useEffect(() => {
        Promise.resolve()
            .then(() => {
                if (ingredients.buns && ingredients.mains && ingredients.sauces) {
                    let price = ingredients.buns[0].price;
                    ingredients.mains.forEach(element => price += element.price);
                    ingredients.sauces.forEach(element => price += element.price);
                    return price;
                }
                else throw new Error("No ingredients")
            })
            .then(price => setTotalPrice(price))
            .catch(err => console.log(err))
    }, [ingredients])

    useEffect(() => {
        setBurgerWrapper(ingredients.buns ? {
            top: <ConstructorElement
                type="top"
                isLocked={true}
                text={`${ingredients.buns[0].name} (верх)`}
                price={ingredients.buns[0].price}
                thumbnail={ingredients.buns[0].image_mobile}
                key="top"
            />,
            bottom: <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${ingredients.buns[0].name} (низ)`}
                price={ingredients.buns[0].price}
                thumbnail={ingredients.buns[0].image_mobile}
                key="bottom"
            />
        } : false);
        const middles = ingredients.mains ? ingredients.mains.map((ingredient, index) => buildIngredient(ingredient, index)) : [];
        const sauces = ingredients.sauces ? ingredients.sauces.map((ingredient, index) => buildIngredient(ingredient, index)) : [];
        setBurgerMiddle([...middles, ...sauces]);
    },
    [ingredients])

    const buildIngredient = (ingredient, index) => {
        return (
            <div className={`mr-2 ml-10 pl-4 ${burgerIngredienceStyles.burgerMiddle}`} key={`${ingredient.type}${index}`}>
                <div className="mr-2">
                    <DragIcon type="primary"/>
                </div>
                <ConstructorElement
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image_mobile}
                />
            </div>
            
        )
    }

    const mountModal = () => {
        setModalMountedState(true)
    }

    const unmountModal = () => {
        setModalMountedState(false);
    }

    return (
        <div className={burgerIngredienceStyles.mainSection}>
            <div className="mt-25 mr-4 ml-20 pl-2">
                {burgerWrapper && burgerWrapper.top}
            </div>
            <div className={burgerIngredienceStyles.scrollSection}>
                <div className={burgerIngredienceStyles.middleSection}>
                    {burgerMiddle && burgerMiddle}
                </div>
            </div>
            <div className="mr-4 mb-10 ml-20 pl-2">
                {burgerWrapper && burgerWrapper.bottom}
            </div>
            <div className={burgerIngredienceStyles.orderButtonBlock}>
                <p className={`text text_type_digits-medium ${burgerIngredienceStyles.price}`}>{totalPrice}</p>
                <div className={`ml-2 mr-10 ${burgerIngredienceStyles.currencyIcon}`}>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button type="primary" size="medium" onClick={mountModal}>Оформить заказ</Button>
            </div>
            { modalMounted && 
                <Modal unmountModal={unmountModal}>
                    <OrderDetails orderNumber={"034536"}/>
                </Modal>
            }
        </div>
    )
}