// filepath: d:\WebWorks\Learn\React\the-guitar-shop\src\components\GuitarList.js
import React from 'react';
import { guitarList } from '../datas/guitarList';
import '../css/GuitarList.css';

function GuitarList() {
    const listItems = guitarList.map(guitar => (
        <li className="guitar-item" key={guitar.id}>
            <img src={guitar.imageUrl} alt={`Image of ${guitar.name}`} />
            <header className="guitar-item-header">
                <h3>{guitar.name}</h3>
                <p>{guitar.category}</p>
                <h4>{guitar.price}€</h4>
            </header>
        </li>
    ));

    return (
        <article>
            <ul className="guitar-list">
                {listItems}
            </ul>
        </article>
    );
}

export default GuitarList;