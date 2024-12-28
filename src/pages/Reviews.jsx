import React from "react";
import classes from "./Reviews.module.css";
import formClasses from "./Form.module.css";
import man1 from "./images/man1sq.jpg";
import man2 from "./images/man2sq.jpg";
import man3 from "./images/man3sq.jpg";
import {useState} from "react";
import 'animate.css';

let prop1 = {
    Pic: man1,
    Name: "Супер крутой модельер из Милана",
    Comment: "Хороший результат и приятное общение гарантированы. Однозначно буду покупать еще",
}
let prop2 = {
    Pic: man2,
    Name: "Типичный житель урфушного общежития",
    Comment: "Качество пошива на высшем уровне, а индивидуальный подход делает каждую вещь уникальной. Я определенно рекомендую этот магазин всем, кто ищет что-то особенное и хочет подчеркнуть свой стиль.",
}
let prop3 = {
    Pic: man3,
    Name: "Агуга",
    Comment: "Кто я? Пуки каки или каки пуки?",
}
function Comment(prop){
    return(
        <div className={classes.Comment}>
            <div>
                <img src={prop.prop.Pic} alt=""/>
            </div>
            <div>
                <p>
                    {prop.prop.Comment}
                </p>
                <h6>
                    {prop.prop.Name}
                </h6>
            </div>
        </div>
    )
}
function Reviews() {
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [TitleMessage, setTitleMessage] = useState('');
    const [EmailMessage, setEmailMessage] = useState('');
    const [isTitleValid, setIsTitleValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);


    // Функция для проверки имени
    const checkTitle = (value) => {
        const regex = /^[а-яА-Я\s]{1,20}$/; 
        if (regex.test(value)) {
            setTitleMessage("Имя введено корректно :)");
            setIsTitleValid(true);
        } else {
            setTitleMessage("Пожалуйста, напишите имя русскими буквами");
            setIsTitleValid(false);
        }
    };

    // Функция для проверки E-mail
    const checkEmail = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(value)) { 
            setEmailMessage("E-mail введен корректно :)");
            setIsEmailValid(true);
        } else {
            setEmailMessage("Неправильный ввод E-mail");
            setIsEmailValid(false);
        }
    };

    // Обработчик изменения ввода
    const handleChange = (e) => {
        const { name, value } = e.target; // Получаем имя и значение поля
        if (name === 'title') {
            setTitle(value); // Обновляем состояние имени
            checkTitle(value); // Проверяем имя
        } else if (name === 'email') {
            setEmail(value); // Обновляем состояние телефона
            checkEmail(value); // Проверяем телефон
        } 
    };
    

      // Обработчик отправки формы
      const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем стандартное поведение формы
        if (isTitleValid && isEmailValid) {
            alert(`Здравствуйте ${title}!\nСпасибо за отзыв!\n` +
                `Ваш E-mail: ${email}\n` +
                `Мы ценим ваше мнение и постараемся сделать наш сервис еще лучше!`);
            }
    };
    return (
        <div className={classes.PageBody}>
            <h1>Отзывы о нашей работе</h1>
            <div className={classes.CommentContainer}>
                <Comment prop={prop1} />
                <Comment prop={prop2} />
                <Comment prop={prop3} />
            </div>
            <div className={classes.ButtonContainer}>
                <button>Оставить отзыв</button>
            </div>
            <div className={formClasses.Form}>
                <h2>Форма для отзывов</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder="Имя" value={title} onChange={handleChange} onBlur={() => checkTitle(title)} required />
                    {TitleMessage && <span className={isTitleValid ? classes.valid : classes.invalid}>{TitleMessage}</span>} <br />
                    <input type="text" name="email" placeholder="E-mail" value={email} onChange={handleChange} onBlur={() => checkEmail(email)} required />
                    {EmailMessage && <span className={isEmailValid ? classes.valid : classes.invalid}>{EmailMessage}</span>}<br />
                    <textarea placeholder="Ваш отзыв"></textarea>
                    <button type="submit" disabled={!(isTitleValid && isEmailValid)}>Отправить</button>
                </form>
            </div>
        </div>
    );   
}
export default Reviews;