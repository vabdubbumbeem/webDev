import React from "react";
import classes from "./Reviews.module.css";
import formClasses from "./Form.module.css";
import man1 from "./images/man1sq.jpg";
import man2 from "./images/man2sq.jpg";
import man3 from "./images/man3sq.jpg";

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
function Form() {
    return(
        <>
        </>
    )
}

function Reviews(){
    return(
        <div className={classes.PageBody}>
            <h1>Отзывы о нашей работе</h1>
            <div className={classes.CommentContainer}>
                <Comment prop={prop1}/>
                <Comment prop={prop2}/>
                <Comment prop={prop3}/>
            </div>
            <div className={classes.ButtonContainer}>
                <button>Оставить отзыв</button>
            </div>
            <div className={formClasses.Form}>
                <h2>Форма для отзывов</h2>
                <input type="text" placeholder="Имя" required/><br/>
                <input type="text" placeholder="E-mail" required/><br/>
                <textarea placeholder="Ваш отзыв"></textarea>
                <button type="submit">Отправить</button>
            </div>
        </div>
    )
}

export default Reviews;