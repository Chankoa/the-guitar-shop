
function AmplifierSection() {
  return (
    <section id="amplis" className="container">
      <h2>Des <span className="golden-text">amplis</span> pour décoller le papier peint</h2>
      <div className="grid-produits">
        <article className="produit">
          <picture>
            <source srcset="/img/marshall.webp" type="image/webp" />
            <img 
              src="/img/marshall.jpg" 
              alt="Marshall JCM800" 
              loading="lazy" 
              width="300" 
              height="300" 
            />
          </picture>
          <h3>Marshall JCM800</h3>
          <p>Ampli à lampes 100W</p>
          <span className="prix">2299.99 €</span>
          <button className="btn">Ajouter au panier</button>
        </article>
      </div>
    </section>
  );
}

export default AmplifierSection;