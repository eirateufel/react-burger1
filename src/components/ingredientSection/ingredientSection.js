import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import IngredientCard from '../ingredientCard/ingredientCard';
import ingredientSectionStyles from './ingredientSection.module.css'

IngredientSection.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        image_large: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        calories: PropTypes.number,
        carbohydrates: PropTypes.number,
        fat: PropTypes.number,
        proteins: PropTypes.number,
    })),
    header: PropTypes.string
}

export default function IngredientSection(props) {
    const [subSections, setSubSections] = React.useState();

    useEffect(() => {
        setSubSections(
            props.ingredients.map((ingredient, index) => {
                return (
                    <IngredientCard 
                        key={`${ingredient.name}section${index}`}
                        imgSrc={ingredient.image}
                        name={ingredient.name}
                        price={ingredient.price}
                        imgSrcLarge={ingredient.image_large}
                        calories={ingredient.calories}
                        carbohydrates={ingredient.carbohydrates}
                        fat={ingredient.fat}
                        proteins={ingredient.proteins}
                    />
                )
            })
        )
    }, [])

    return (
        <div className={ingredientSectionStyles.mainSection}>
            <h3 className="text text_type_main-medium">{props.header}</h3>
            <div className={`ml-2 mr-2 ${ingredientSectionStyles.subSections}`}>
                {subSections}
            </div>
        </div>
    )
}
