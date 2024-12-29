import React from "react";
import classes from "./Form.module.css"
import { useState } from "react";

function Form() {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [adress, setAdress] = useState('');
    const [size, setSize] = useState('');
    const [model, setModel] = useState('');
    const [NameMessage, setNameMessage] = useState('');
    const [TelMessage, setTelMessage] = useState('');
    const [AdressMessage, setAdressMessage] = useState('');
    const [SizeMessage, setSizeMessage] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [isTelValid, setIsTelValid] = useState(false);
    const [isAdressValid, setIsAdressValid] = useState(false);
    const [isSizeValid, setIsSizeValid] = useState(false);

    // Функция для проверки имени
    const checkName = (value) => {
        const regex = /^[а-яА-Я\s]{3,60}$/; 
        if (regex.test(value)) {
            setNameMessage("Имя введено корректно :)");
            setIsNameValid(true);
        } else {
            setNameMessage("Пожалуйста, введите 3-60 символов");
            setIsNameValid(false);
        }
    };

    //Функция для проверки телефона
    const checkTel =  (value) => {
        const regex = /^\d{3}-\d{3}-\d{2}-\d{2}$/;
        if (regex.test(value)) { 
            setTelMessage("Телефон введен корректно :)");
            setIsTelValid(true);
        } else {
            setTelMessage("Неправильный ввод");
            setIsTelValid(false);
        }
    };

    //Функция для проверки адреса
    const checkAddress = (value) => {
        const regex = /^[а-яА-Я0-9\s.,-]{5,200}$/;
        if (regex.test(value)) { 
            setAdressMessage("Адрес введен корректно :)");
            setIsAdressValid(true);
        } else {
            setAdressMessage("Неправильный ввод, пожалуйста укажите: улицу, дом, квартиру");
            setIsAdressValid(false);
        }
    };

    //Функция для проверки размера одежды
    const checkSize = (value) => {
        const regex = /^(100|[1-9][0-9])$/;
        if (regex.test(value)) { 
            setSizeMessage("Размер введен корректно :)");
            setIsSizeValid(true);
        } else {
            setSizeMessage("Неправильный ввод, пожалуйста введите двухзначное число");
            setIsSizeValid(false);
        }
    };

    // Обработчик изменения ввода
    const handleChange = (e) => {
        const { name, value } = e.target; // Получаем имя и значение поля
        if (name === 'name') {
            setName(value); // Обновляем состояние имени
            checkName(value); // Проверяем имя
        } else if (name === 'tel') {
            setTel(value); // Обновляем состояние телефона
            checkTel(value); // Проверяем телефон
        } else if (name === 'adress') {
            setAdress(value); 
            checkAddress(value); 
        } else if (name === 'size') {
            setSize(value); 
            checkSize(value); 
        } else if (name === 'model') {
            setModel(value); 
        }
    };
    

      // Обработчик отправки формы
      const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем стандартное поведение формы
        if (isNameValid && isTelValid && isAdressValid && isSizeValid) {
            alert(`Здравствуйте ${name}!\nСпасибо, что выбрали нас! Ваши данные для заказа:\n` +
            `ФИО: ${name}\n` +
            `Телефон: ${tel}\n` +
            `Адрес: ${adress}\n` +
            `Размер: ${size}\n` +
            `Модель одежды: ${model}\n` +
            `Если все верно, мы готовы приступать к созданию вашей уникальной вещи. Мы сделаем все возможное, чтобы вы остались довольны! 💖`);
        }
    };

    return(
        <>
            <div className={classes.Form}>
            <h2>Форма заказа</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="ФИО" value={name} onChange={handleChange} onBlur={() => checkName(name)} // Проверяем имя при потере фокуса 
                    required />
                    {NameMessage && <span className={isNameValid ? classes.valid : classes.invalid}>{NameMessage}</span>} {/* Отображаем сообщение о валидности */} <br/>

                    <input type="tel" name="tel" placeholder="Телефон xxx-xxx-xx-xx" value={tel} onChange={handleChange} onBlur={() => checkTel(tel)} required />
                    {TelMessage && <span className={isTelValid ? classes.valid : classes.invalid}>{TelMessage}</span>} <br/>

                    <input type="text" name="adress" placeholder="Адрес" value={adress} onChange={handleChange} onBlur={() => checkAddress(adress)} required/>
                    {AdressMessage && <span className={isAdressValid ? classes.valid : classes.invalid}>{AdressMessage}</span>} <br/>

                    <input type="text" name="size" placeholder="Размер одежды"  value={size} onChange={handleChange} onBlur={() => checkSize(size)} required/>
                    {SizeMessage && <span className={isSizeValid ? classes.valid : classes.invalid}>{SizeMessage}</span>}<br/>

                    <select name="model" value={model} onChange={handleChange} required>
                        <option value="" disabled>Модель товара</option>
                        <option value="Звездная ночь">Звездная ночь</option>
                        <option value="Темный путь">Темный путь</option>
                        <option value="Индивидуальный заказ">Индивидуальная модель на заказ</option>
                    </select><br/>
                    <button type="submit" disabled={!(isNameValid && isTelValid && isAdressValid && isSizeValid)}>Отправить</button>
                </form>
            </div>
        </>
    );
}

export default Form;