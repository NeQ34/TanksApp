export default function Resources() {
  return (
    <section id="resources" className="section section-alt">
      <div className="container">
        <header className="section-header">
          <h2>Kontakt</h2>
          <p>Masz pytania dotyczące archiwów technicznych? Napisz do nas.</p>
        </header>

        <div className="contact-form card">
          <form>
            <div className="form-group">
              <label htmlFor="name">Imię</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Wprowadź swoje imię"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Adres e-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="twoj@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Wiadomość</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Twoje pytanie dotyczące czołgów..."
                required
              ></textarea>
            </div>

            <button type="submit" id="submit-btn" className="btn btn-primary">
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
