import React from "react";
import classes from "./Products.module.css"
import DarkWay from "./images/DarkWay.jpg";
import StarNight from "./images/StarNight.jpg";
let prop1 = {
    ProdImage: StarNight,
    Price: "14200",
    Name: "Звёздная ночь",
    Description: "Изначально вдохновение на этот костюм привела песня pyrokinesis - ветрянка. О силе и ранах любви. Такой смысл я вкладывала в лучи, отходящие от сердца. А слегка мотоциклетный вайб придает скорости и легкости этому костюму. Вы можете увидеть в этой композиции другой, более глубокий и значащий смысл.",
    FullDescription: "Образ состоит из куртки и брюк. Куртка на молнии до линии середины или конца ягодиц, с завязкой на поясе и манжетами с оборками, собранными на резинке. Состоит из двух слоев: пэчворк-композиции и подклада.Брюки джоггеры на резинке с завязками, манжетами, совпадающими с манжетами куртки. Состоят из одного слоя — пэчворк-композиции.",
}
let prop2 = {
    ProdImage: DarkWay,
    Price: "7800",
    Name: "Темный путь",
    Description: "Эти стильные джоггеры из темных ласкутов ткани — идеальный выбор для тех, кто ценит комфорт и современный стиль. Изготовленные из мягкого и эластичного материала, они обеспечивают свободу движений и приятные ощущения на коже. Глубокий темный оттенок легко сочетается с различными топами и обувью, придавая вашему образу утонченность.",
    FullDescription: "Джоггеры выполнены из мягкого и эластичного материала, имеют эластичный пояс с завязками для регулировки и манжеты на щиколотках, что обеспечивает идеальную посадку и комфорт при движении. Дизайн включает в себя стильные карманы по бокам и аккуратные строчки, подчеркивающие современный крой. Подходит для  любителей черного.",
}

function Product(prop){
    return(
        <div className={classes.ProductContainer}>
                <div>
                        <img src={prop.prop.ProdImage} alt="prop.prop.ProdImage"/>
                </div>

                <div>
                    <h3>{prop.prop.Name} <span>{prop.prop.Price} ₽</span></h3>
                        <p>
                        {prop.prop.Description}
                        </p>
                        <button>Детали</button>
                        <p>
                        {prop.prop.FullDescription}
                        </p>
                    </div>
                    
                </div>
    )
}
function Products(){
    return(
            <div className={classes.PageBody}>
                <h1>Наши лучшие товары</h1>
                <Product prop={prop1}/>
                <Product prop={prop2}/>
            </div>

    )
}

export default Products;