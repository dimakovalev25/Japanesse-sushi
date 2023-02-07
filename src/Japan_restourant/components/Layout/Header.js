import React from "react";
import sushiImg from '../../assets/suwuu.jpg'
import styles from './Header.module.css'
import {HeaderCartButton} from "./HeaderCartButton";

export const Header = function () {


    return (
        <React.Fragment>

            <header className={styles.header}>
                <h1>Japanesse sushi さかな </h1>
                <HeaderCartButton/>
            </header>
            <div className={styles['main-image']}>
                <img src={sushiImg} alt={'sushi'}></img>
            </div>

        </React.Fragment>
    )
}