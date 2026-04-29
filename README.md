# Czołgi II Wojny Światowej – projekt zaliczeniowy

Strona internetowa prezentująca najważniejsze czołgi II wojny światowej. Projekt wykonany w React jako strona jednostronicowa (SPA).

---

## Analiza UX

### Potrzeba użytkownika
Użytkownicy (uczniowie, pasjonaci historii, gracze) potrzebują szybkiego i przejrzystego przeglądu czołgów II wojny światowej – bez rozproszonych, przegadanych artykułów.

### Grupa docelowa
- Uczniowie szkół podstawowych i średnich – zwięzła wiedza do nauki/prezentacji
- Pasjonaci historii wojskowości – szybkie przypomnienie kluczowych danych
- Gracze gier wojennych (np. World of Tanks) – realne odpowiedniki czołgów z gry

### Struktura strony
Strona prowadzi użytkownika krok po kroku: od wprowadzenia (Hero), przez kontekst (Przegląd), przez konkretne czołgi, po chronologię. Kontakt na końcu umożliwia zadanie pytania.

### Kolorystyka i układ
- **Ciemne gradientowe tło** – oddaje ciężki klimat wojny, jednocześnie zapewnia kontrast dla tekstu
- **Pomarańczowy akcent** – przyciąga wzrok do przycisków i ważnych elementów
- **Karty i siatki** – grupują informacje w małe, strawne porcje
- **Responsywność** – na desktop 3 kolumny (porównanie), na mobile 1 kolumna (wygodne przewijanie)

---

## Dokumentacja techniczna (krótko)

### Struktura folderów



### Podział plików HTML, CSS i JS

| Typ | Pliki | Rola |
|-----|-------|------|
| HTML | `public/index.html` | Tylko `<div id="root">` – resztę generuje React |
| CSS | `src/App.css` | Wszystkie style w jednym pliku (zmienne, layout, responsywność) |
| JS/JSX | `src/App.js` + `components/*` | Logika, struktura, interakcje (menu mobilne) |

### Główne komponenty

| Komponent | Co robi |
|-----------|---------|
| `Header` | Sticky nawigacja, logo, menu hamburger na mobile |
| `Hero` | Sekcja powitalna, tytuł, przyciski, zdjęcie Tigera |
| `Overview` | Trzy karty – rola czołgów w wojnie |
| `Tanks` | Galeria 3 czołgów (T-34, Sherman, Tiger I) |
| `Timeline` | Oś czasu (1939–1945) |
| `Resources` | Formularz kontaktowy (UI, brak wysyłki) |
| `Footer` | Stopka i link "Powrót na górę" |

### Przygotowanie pod backend

Obecnie strona używa **danych statycznych** (teksty i obrazy na sztywno w komponentach). Aby podłączyć backend:

**Formularz** – dodać wysyłkę POST do `/api/contact`

### Uruchomienie projektu:

npm install   
npm start     