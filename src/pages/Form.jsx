import React from "react";
import classes from "./Form.module.css"

function Form(){
    return(
        <>
            <div className={classes.Form}>
                <h2>Форма заказа</h2>
                <input type="text" placeholder="ФИО" required/><br/>
                <input type="tel" placeholder="Телефон" required/><br/>
                <input type="text" placeholder="Адрес" required/><br/>
                <input type="text" placeholder="Размер одежды" required/><br/>
                <input type="text" placeholder="Модель товара" required/><br/>
                <button type="submit">Отправить</button>
            </div>
        </>
    )
}

export default Form;