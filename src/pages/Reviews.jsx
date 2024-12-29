import React from "react";
import {motion, AnimatePresence} from 'framer-motion';
import classes from "./Reviews.module.css";
import formClasses from "./Form.module.css";
import man1 from "./images/man1sq.jpg";
import man2 from "./images/man2sq.jpg";
import man3 from "./images/man3sq.jpg";
import {useState} from "react";
//import 'animate.css';

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
    Name: "Сережа",
    Comment: "Всё очень классно парик очень понравился :^D",
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
const Collapsible = (props) => {
    const {
        title = "click me",
        children,
    } = props
    const [isVisible, setVisible] = useState(false);
    const handleVisibility = () => setVisible(!isVisible);
    return(
        <>
            <button className={classes.ButtonContainer}
                onClick={handleVisibility}
            >
                {title}
            </button>
            <AnimatePresence>{
                isVisible &&
                <motion.div
                    style={{background: "none", overflow: 'hidden'}}
                    initial={{height: 0, opacity: 0}}
                    animate={{height: 'auto', opacity: 1}}
                    exit={{height: 0, opacity: 0}}
                >
                    {children}
                </motion.div>
            }
            </AnimatePresence>
        </>
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

            <Collapsible title="Оставить отзыв">
            <div className={formClasses.Form} style={{borderRadius: "10px",}}>
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
            </Collapsible>
        </div>
    );   
}
export default Reviews;