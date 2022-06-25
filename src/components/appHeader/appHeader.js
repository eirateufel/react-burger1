import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import ButtonWithIcon from '../buttonWithIcon/buttonWithIcon';

import headerStyles from './appHeader.module.css';


export default function AppHeader() {
    
    return (
        <header className={headerStyles.header}>
            <div className={`${headerStyles.headerButtonModule} ${headerStyles.left}`}>
                <ButtonWithIcon text={"Конструктор"} iconType={"BurgerIcon"} buttonType={"primary"} chosen={true}/>
                <ButtonWithIcon text={"Лента заказов"} iconType={"ListIcon"} buttonType={"secondary"} chosen={false}/>
            </div>
            <div className={headerStyles.logoWrap}><Logo/></div>
            <div className={`${headerStyles.headerButtonModule} ${headerStyles.right}`}>
                <ButtonWithIcon text={"Личный кабинет"} iconType={"ProfileIcon"} buttonType={"secondary"} chosen={false}/>
            </div>
            
        </header>
    )
}