// filepath: d:\WebWorks\Learn\React\the-guitar-shop\src\components\Button.js
import './css/Button.css';

// Import useState from React
import { useState } from 'react';

// Button component
function Button({ label, onClick }) {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
        if (onClick) {
            onClick();
        }
    }

    return (
        <button onClick={handleClick} className="btn">
            {label} (Clicked {count} times)
        </button>
    );
}

export default Button;