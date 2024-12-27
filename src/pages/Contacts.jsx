import React from "react";
import map from "./images/map.jpg";
import classes from "./Contacts.module.css"

function Contacts(){
    return(
        <div className={classes.PageContainer}>
            <div className={classes.TextContainer}>
                <h1>ПЭЧ Дизайнерская одежда</h1>
                <p>улица Карла Либкнехта, д.131, 127018 Екатеринбург, Россия</p>
                <h2>Пн-Сб: 9:00-21:00</h2>
                <h2>Вс: 10:00-20:00</h2>
                <h2>Прием заявок КРУГЛОСУТОЧНО!</h2>
                <h2>Звоните</h2>
                <p>+7(912)583-65-95</p>
                <p>pech@gmail.com</p>
            </div>
            <div  className={classes.MapContainer}style={{position: 'relative', overflow: 'hidden'}}><a href="https://yandex.ru/maps/org/uralskiy_federalny_universitet_imeni_pervogo_prezidenta_rossii_b_n_yeltsina/1054173545/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}>Уральский федеральный университет имени первого Президента России Б.Н.Ельцина</a><a href="https://yandex.ru/maps/54/yekaterinburg/category/university/184106140/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>ВУЗ в Екатеринбурге</a><iframe src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=60.651847%2C56.837304&mode=poi&poi%5Bpoint%5D=60.653987%2C56.844014&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1054173545&z=15.28" width="560" height="400" frameborder="1" allowfullscreen="true" style={{position: 'relative'}}></iframe></div>
        </div>
    )
}

export default Contacts;