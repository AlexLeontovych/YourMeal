import React from 'react';
import styles from './Header.module.css'
import images from "../../data/data";

const Header = () => {
    return (
        <div className={styles.header}>
        <div className={styles.headerlogo}>
            <p>YourMeal</p>
            <img src={images.logo} className={styles.headerlogo_image}/>
        </div>
            <div className={styles.HeaderMain}>
                <img src={images.headerburger} className={styles.headerburger_image}/>
                <div>
                    <p className={styles.headerMain_FirstText}>Только самые</p>
                    <p className={styles.headerMain_SecondText}>сочные бургеры!</p>
                    <p className={styles.headerMain_discount}>Бесплатная доставка от 599₴ </p>
                </div>
            </div>
        </div>
    );
};

export default Header;