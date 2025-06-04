import { useState } from 'react';

function EffectsSection() {
  const [effects] = useState([
    {
      id: 1,
      name: "Boss DS-1",
      description: "Pédale de distortion légendaire",
      price: 59.99,
      image: "/img/ds1.jpg"
    },
    {
      id: 2,
      name: "Strymon BigSky",
      description: "Reverb professionnelle",
      price: 479.99,
      image: "/img/bigsky.jpg"
    }
  ]);

  return (
    <section id="produits" className="container">
      <h2>Des <span className="golden-text">effets</span> de malade</h2>

      <div className="grid-produits">
        {effects.map(effect => (
          <article key={effect.id} className="produit">
            <picture>
              <img 
                src={effect.image} 
                alt={effect.name}
                loading="lazy"
                width="200"
                height="200"
              />
            </picture>
            <h3>{effect.name}</h3>
            <p>{effect.description}</p>
            <span className="prix">{effect.price} €</span>
            <button className="btn">Ajouter au panier</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EffectsSection;