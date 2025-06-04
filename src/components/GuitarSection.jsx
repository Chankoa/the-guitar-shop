import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

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
          <div className="swiper-slide">
            <article className="produit"></article>
          </div>
          <div className="swiper-slide">
            <article className="produit"></article>
          </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default GuitarSection;