import React from "react";
import { Link } from "react-router-dom";
import classes from "./PageHeader.module.css"

function PageHeader() {
    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li><Link to="/">О нас</Link></li>
                    <li><Link to="/advantages">Преимущества</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                    <li><Link to="/products">Услуги/товары</Link></li>
                    <li><Link to="/discountes">Скидки и акции</Link></li>
                    <li><Link to="/reviews">Отзывы</Link></li>
                </ul>
                
            </nav>
        </header>
    );
}

export default PageHeader;