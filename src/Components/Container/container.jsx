import React, { useState, useEffect } from 'react';
import styles from './container.module.css';
import firebaseConfig from '../../firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);


const Container = () => {
    const [burgers, setBurgers] = useState([]);

    useEffect(() => {
        const getBurgersFromFirestore = async () => {
            const firestore = getFirestore(app);
            try {
                const burgersCollection = collection(firestore, 'burgers');
                const querySnapshot = await getDocs(burgersCollection);
                const burgersList = querySnapshot.docs.map(doc => doc.data());
                setBurgers(burgersList);
            } catch (error) {
                console.error('Error getting burgers:', error);
            }
        };

        getBurgersFromFirestore();
    }, []);

    return (
        <div className={styles.container}>
            {burgers.map((burger, index) => (
                <div key={index} className={styles.burgerCard}>
                    <h1>{burger.name}</h1>
                    <img src={burger.photo}/>
                    <p>{burger.description}</p>
                    <p>Price: {burger.price} руб</p>
                    <p>Weight: {burger.weight}</p>
                </div>
            ))}
        </div>
    );
};

export default Container;
