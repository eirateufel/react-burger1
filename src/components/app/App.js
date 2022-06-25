import React, { useEffect } from 'react';
import AppHeader from '../appHeader/appHeader';
import BurgerConstructor from '../burgerConstructor/burgerConstructor'; 
import BurgerIngredience from '../burgerIngredients/burgerIngredience';
import apiSrc from '../apiSrc/apiSrc';

import appStyles from './app.module.css';

/* 
  Пожалуйста, по возмжности не обращайте внимания на адаптивную вёрстку; насколько я знаю, она
  не обязательна для прохождения этого спринта. Я начала её делать и не успела закончить. :(
  Кроме того непонятно, как не-костыльно управлять размерами сложных элементов из библиотеки
  (куратор на этот вопрос не отвечает). Основная вёрстка выполнялась при размере экрана
  от 1400px в ширину.
*/

function App() {
  const [ingredients, setIngredients] = React.useState({});

  useEffect(() => {
    fetch(apiSrc)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          const buns = data.data.filter((element) => element.type === "bun");
          const mains = data.data.filter((element) => element.type === "main");
          const sauces = data.data.filter((element) => element.type === "sauce");
          return {buns, mains, sauces}
        }
        else {
          throw new Error ("Request failed")
        }
      })
      .then(data => setIngredients(data))
      .catch(err => {
        console.log("Can't get ingredients", err);
      })
  }, [])

  return (
    <div className={appStyles.app}>
      <AppHeader/>
      <div className={appStyles.body}>
        <BurgerConstructor ingredients={ingredients}/>
        <BurgerIngredience ingredients={ingredients}/>
      </div>
    </div>
  );
}

export default App;
