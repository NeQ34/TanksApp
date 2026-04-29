import tiger from "../assets/tiger.webp";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <h1>Czołgi II Wojny Światowej</h1>
          <p>
            Odkryj fascynującą historię inżynierii pancernej, która zdefiniowała przebieg największego konfliktu w dziejach ludzkości. Od lekkich maszyn zwiadowczych po stalowe kolosy dominujące na polach bitew.
          </p>
          <a href="#tanks" className="btn btn-primary">Poznaj czołgi</a>
          <a href="#overview" className="btn btn-secondary">Zobacz kontekst</a>
        </div>

        <figure className="hero-image">
          <img src={tiger} alt="Czołg Tiger I" loading="lazy" />
          <figcaption>Tiger I – symbol niemieckich wojsk pancernych.</figcaption>
        </figure>
      </div>
    </section>
  );
}
