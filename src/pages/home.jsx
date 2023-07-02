import React, { useEffect, useState } from 'react';

import '../UI/home.css';
import CatalogItem from '../components/catalogItem';
import OrderButton from '../components/orderButton'
import Form from '../components/form';
import Map from '../components/map';
import Footer from '../components/footer';



 function Home() {
    const filterItem = ["Все работы", "Шумоизоляция", "Детейлинг", "Оклейка пленкой", "Чип-тюнинг", "Пошив салона", "Выхлопные системы", "Антихром", "Выхлопные системы", "Обвесы", "Доработка подвески", "Автосвет", "Тонировка", "Мультимедиа системы"]
    const
     [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://649ff0c5ed3c41bdd7a6d933.mockapi.io/cars').then((res) => {
            return res.json();
        }).then((json) => {
            setItems(json);
        })
    }, [])
    return (
    <>
        <section className='catalog'>


            <div className='container catalog__container'>
                <h1 className='title catalog__title'>JUST-TUNING</h1>
                <div className="filter">
                    <ul>
                        {filterItem.map((items, id) => {
                            return  <li key={id} className='filter--items'>{items}</li>
                        })}
                    </ul>
                </div>

                <div className="catalog--item"> 
                    {items.map(obj => {
                        return <CatalogItem  {...obj}/>
                    })}

                </div>
                <div className='catalog__order--button'>
                    <OrderButton value='Показать еще' type='button'/>
                </div>
            

            </div>


        </section>

        <section className='projects'>
                <h2 className='title'>Проекты</h2>
                
                <div className="projects__content">
                    <div className="content--top content">
                        <div className="info">
                            <h3 className='title project__title'>Пошив салона</h3>
                            <div className="info__descr">Lörem ipsum stenor reng om telesat. Dogarade detäheten, vase: vypp, hexanat. Turistkorridor vifat för ossade. Gangar ir mikit tibel. Lere överklassafari. </div>
                        </div>

                        <div className="projects__photo projects__photo1"></div>
                    </div>


                    <div className="content--mid content">
                        <div className="info">
                            <h3 className='title project__title'>Пошив салона</h3>
                            <div className="info__descr">Lörem ipsum stenor reng om telesat. Dogarade detäheten, vase: vypp, hexanat. Turistkorridor vifat för ossade. Gangar ir mikit tibel. Lere överklassafari. </div>
                        </div>

                        <div className="projects__photo projects__photo2"></div>
                    </div>


                    <div className="content--bot content">
                        <div className="info">
                            <h3 className='title project__title'>Пошив салона</h3>
                            <div className="info__descr">Lörem ipsum stenor reng om telesat. Dogarade detäheten, vase: vypp, hexanat. Turistkorridor vifat för ossade. Gangar ir mikit tibel. Lere överklassafari. </div>
                        </div>

                        <div className="projects__photo projects__photo3"></div>
                    </div>
                </div>
        </section>
        
        <section className='drawing'>
            <div className="container drawing__container">
                <h2 className='title'>Процесс нанесения</h2>

                <p className="descr">
                    Lörem ipsum osam preskapet i våsam. Självoptimering miment ölingar. Dikodat popösk sedan benade, hörar för att gätikyt. Göfakydat ståpaddling naväktigt. Petitoning gardinhängarjobb speskade dere ifall egoll. Nynar kontranirade antigt. Busa neras kassa.
                    <br />
                    <br />
                    Lörem ipsum osam preskapet i våsam. Självoptimering miment ölingar. Dikodat popösk sedan benade, hörar för att gätikyt. Göfakydat ståpaddling naväktigt. Petitoning gardinhängarjobb speskade dere ifall egoll. Nynar kontranirade antigt. Busa neras kassa
                    <br />
                    <br />
                    Lörem ipsum osam preskapet i våsam. Självoptimering miment ölingar. Dikodat popösk sedan benade, hörar för att gätikyt. Göfakydat ståpaddling naväktigt. Petitoning gardinhängarjobb speskade dere ifall egoll. Nynar kontranirade antigt. Busa neras kassa. Lörem ipsum osam preskapet i våsam. Självoptimering miment ölingar. Dikodat popösk sedan benade, hörar för att gätikyt. Göfakydat ståpaddling naväktigt. Petitoning gardinhängarjobb speskade dere ifall egoll. Nynar kontranirade antigt. Busa neras kassa
                </p>
            </div>
        </section>

        <section className="requisition">
            <div className="container requisition__container">
                <h3 className='requisition__title'>Оставьте заявку и мы подберём оптимальный вариант под необходимые задачи</h3>
                <Form />
                <p className="requisition__title requisition__title--deser">Или свяжитесь самостоятельно по номеру<br />
                <span className='descr--red'>+7 (495) 204-36-56 или +7 (985) 886-06-55</span></p>
            </div>

        </section>

        <section className='location'>
            <div className="container location__container">
                <h2 className="title">Где мы находимся</h2>
            </div>
            <Map />
        </section>

        <Footer />
    </>

  )
}

export default Home;