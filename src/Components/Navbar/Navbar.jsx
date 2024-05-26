import React from 'react';
import styles from './Navbar.module.css'
import info from "../../data/Info";
import Menu from "../Menu/Menu";


const Navbar = () => {
    return (
        <div className={styles.NavbarBox}>
                {info.map(info => (
                    <Menu key={info.id} info={info} title={info.title} link={info.link}/>
                ))}
        </div>
    );
};

export default Navbar;