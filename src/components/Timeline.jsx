export default function Timeline() {
  return (
    <section id="timeline" className="section">
      <div className="container">
        <header className="section-header">
          <h2>Rozwój czołgów – chronologia</h2>
        </header>

        <div className="timeline">
          <article className="timeline-item">
            <h3>1939–1941</h3>
            <p>Dominacja czołgów lekkich i średnich (Pz.Kpfw. II, III) wspierających szybkie operacje lądowe.</p>
          </article>

          <article className="timeline-item">
            <h3>1941–1943</h3>
            <p>Pojawienie się T-34 i KW-1 wymusza na inżynierach Rzeszy projektowanie cięższych maszyn.</p>
          </article>

          <article className="timeline-item">
            <h3>1943–1945</h3>
            <p>Bitwa na Łuku Kurskim. Czas ciężkich czołgów takich jak Pantera, Tygrys czy radziecki IS-2.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
