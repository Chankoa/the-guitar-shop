import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { guitarList } from '../datas/guitarList';
import '../css/GuitarList.css';

function GuitarSection() {
  useEffect(() => {
    const swiper = new Swiper('.products-swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }, []);

  return (
    <section id="guitares" className="container">
      <header className="section-header">
        <h2>Des <span className="flame-text">guitares</span> de l'espace</h2>
        <p>Une sélection des plus belles guitares du monde.</p>
      </header>
      <div className="swiper products-swiper">
        <div className="swiper-wrapper">
          {guitarList.map(guitar => (
            <div className="swiper-slide" key={guitar.id}>
              <article className="produit">
                <img src={guitar.imageUrl} alt={`Image of ${guitar.name}`} />
                <header className="guitar-item-header">
                  <h3>{guitar.name}</h3>
                  <p>{guitar.category}</p>
                  <h4>{guitar.price}€</h4>
                </header>
              </article>
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default GuitarSection;