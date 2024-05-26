import React from 'react';
import {Link} from "react-router-dom";
import styles from './menu.module.css'

const Menu = ({info}) => {
    return (
        <Link to={`/${info.link}`} className={styles.MenuContainers}>
            <img src={info.image} alt={info.title} />
            {info.title}
        </Link>
    );
};

export default Menu;