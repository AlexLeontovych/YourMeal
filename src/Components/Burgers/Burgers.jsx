import React from 'react';
import styles from './burgers.module.css'
import Container from "../Container/container"
import Basket from "../Basket/Basket";




const Burgers = () => {
    return (
        <div className={styles.burgers}>
            <div className={styles.basketContainer}>
                <Basket/>
            </div>
            <Container />
        </div>
    );
};

export default Burgers;