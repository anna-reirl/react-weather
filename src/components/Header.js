import React, {useState} from "react";
import "../styles/Header.css";
import Button from "react-bootstrap/Button";

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Header(props) {
    const [clButton, changeclButton] = useState(false);

    return (
        <header>Прогноз погоды
            {clButton ?
                <Button style={{ background: getRandomColor(), position: "absolute", top: "10px", right: "10px" }} onClick={() => changeclButton(false)}>{props.buttonName}</Button>:
                <Button style={{ background: getRandomColor(), position: "absolute", top: "10px", right: "10px" }} onClick={() => changeclButton(true)}>{props.buttonName}</Button>
            }
        </header>
    )
}

export default Header;