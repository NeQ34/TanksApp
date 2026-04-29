import t34 from "../assets/t34.webp";
import sherman from "../assets/sherman.webp";
import tiger1 from "../assets/tiger1.webp";

export default function Tanks() {
  return (
    <section id="tanks" className="section section-alt">
      <div className="container">
        <header className="section-header">
          <h2>Najsłynniejsze czołgi</h2>
          <p>Wybrane konstrukcje, które miały największy wpływ na przebieg wojny.</p>
        </header>

        <div className="tank-grid">
          <article className="tank-card">
            <figure>
              <img src={t34} alt="T-34" loading="lazy" />
              <figcaption>T-34 – ZSRR</figcaption>
            </figure>
            <p>Radziecka konstrukcja, która zaskoczyła Niemców w 1941 roku. Idealny balans między pancerzem, mobilnością i siłą ognia.</p>
          </article>

          <article className="tank-card">
            <figure>
              <img src={sherman} alt="M4 Sherman" loading="lazy" />
              <figcaption>M4 Sherman – USA</figcaption>
            </figure>
            <p>Koń roboczy aliantów zachodnich. Ceniony za niezawodność, łatwość produkcji i wszechstronność na polu bitwy.</p>
          </article>

          <article className="tank-card">
            <figure>
              <img src={tiger1} alt="Tiger I" loading="lazy" />
              <figcaption>Tiger I – Niemcy</figcaption>
            </figure>
            <p>Niemieckie potwory pancerne. Ich pancerz był niemal nie do przebicia, a działo budziło strach wśród wszystkich załóg.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
