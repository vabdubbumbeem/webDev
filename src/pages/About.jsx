import React from "react";
import classes from "./About.module.css"
import backgroundimg from "./images/About.background.jpg";
import KatyaBorn from "./images/KatyaBornMod.png";
import { Link } from "react-router-dom";

function About(){
    return(
        <>
        <div className={classes.offer}>
            <img src={backgroundimg} alt="background"></img>
            <div>
                <h1 className={classes.title}>ПЭЧ</h1>
                <h2 className={classes.subtitle}>Дизайнерская одежда на заказ. Эксклюзивные модели, созданные специально для вас!<br/><br/>
                <Link to="/form" className={classes.order}>Заказать сейчас</Link></h2>
            </div>
        </div>
        
        <div className={classes.KatyaFrame}>
            <div className={classes.TextFrame}>
                <h1>Я родился!</h1>
                <p>Привет! Меня зовут Катя, и я занимаюсь главным содержанием этого проекта — созданием одежды. Наш магазин называется «ПЭЧ», по факту, это транскрипция английского слова «patch», означающего «лоскут».
Лоскуты ткани для нас, как палитра для художника-живописца. Мы, подобно картинам, создаем наши вещи, поэтому у нас не бывает идентичных повторов.
Цель нашей одежды — передавать эмоции и переживания, поэтому мы кропотливо подбираем ткани, чтобы максимально точно выразить то, что иногда сложно описать даже словами.
Мой швейный путь начался на школьных уроках технологии, а позже также привел меня к олимпиадам. На региональном этапе я познакомилась с Лёвой, а через год стала призером Всероссийской этапа.
Лёва тот человек, который восхищается тем, что я создаю, поэтому с искренним рвением помогает распространить и показать нужным людям мои изделия. Вы — одни из них. Мы предлагаем вам оценить плоды нашего созидания и «посетить» нас магазинчик.</p>
            </div>

            <div className={classes.PicFrame}>
                <img src={KatyaBorn} alt="KatyaBorn"/>
            </div>
        </div>
        </>
    )
}

export default About;
