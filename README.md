## Kako početi

Ova uputstva će vam omogućiti da preuzmete kopiju projekta i pokrenete je na vašoj lokalnoj mašini za razvoj i testiranje.

### Prethodni zahtevi

Uverite se da imate instaliran sledeći softver na vašoj mašini:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (sa npm)
- [Docker](https://www.docker.com/get-started) (ako koristite Docker)

### Instalacija

1. *Klonirajte repozitorijum:*

    Otvorite vaš terminal i pokrenite:
    sh
    git clone https://github.com/vas-korisnicko-ime/vas-repozitorijum.git
    
    Uđite u direktorijum projekta:
    sh
    cd vas-repozitorijum
    

2. *Instalirajte zavisnosti:*

    Ako projekat koristi Node.js, pokrenite:
    sh
    npm install
    

3. *Pokretanje aplikacije:*

    Pokrenite razvojni server:
    sh
    npm start
    
    ili, ako koristite Docker:
    sh
    docker-compose up
    

Vaša aplikacija bi sada trebalo da radi na http://localhost:3000 (ili na nekom drugom portu ako je drugačije podešeno).

### Pokretanje testova

Da biste pokrenuli testove, koristite:
```sh
npm test

Ovaj projekat je razvijen koristeći moderni JavaScript framework i biblioteku za izgradnju korisničkih interfejsa. U nastavku je objašnjenje tehnologija, biblioteka i dodatnih paketa korišćenih u realizaciji aplikacije.

## Tehnologije

- *TypeScript:* Projekat je napisan u TypeScript-u, koji pruža statičku tipizaciju za JavaScript, što pomaže u sprečavanju grešaka tokom razvoja.
- *React:* Biblioteka za izgradnju korisničkih interfejsa zasnovana na komponentama.
- *Vite:* Alat za izgradnju i razvoj modernih frontend aplikacija koji nudi brzinu i efikasnost u odnosu na tradicionalne alate poput Webpack-a.

## Struktura Projekta

- *src/components:* Sadrži React komponente.
  - MyComponent.tsx: Primer komponente.
  - ComponentWithButton.tsx: Komponenta koja sadrži dugme.
  
- *src/utils:* Pomoćne funkcije i logika.
  - calculate.ts: Primer pomoćne funkcije.

- *src/pages:* Stranice aplikacije.
  - index.tsx: Glavna stranica aplikacije.

- *src/styles:* Stilovi za aplikaciju.
  - globals.css: Globalni CSS stilovi.

- *tests:* Testovi aplikacije.
  - functionality.test.ts: Test funkcionalnosti.
  - Component.test.tsx: Test komponente.
  - ComponentWithMock.test.tsx: Test komponente sa mock-ovima.

- *public:* Javna statička sredstva.

- *node_modules:* Zavisnosti projekta.

- *.gitignore:* Fajl koji specificira koje fajlove Git treba da ignoriše.

- *package.json:* Zavisnosti projekta i skripte za pokretanje.
- *tsconfig.json:* Konfiguracija TypeScript-a.
- *vite.config.ts:* Konfiguracija za Vite.
- *vitest.setup.ts:* Postavke za Vitest.

## Biblioteke i Paketi

- *React:* Glavna biblioteka za izgradnju korisničkih interfejsa.
- *TypeScript:* Staticka tipizacija za JavaScript.
- *Vite:* Alat za razvoj i izgradnju aplikacija.
- *Vitest:* Alat za testiranje sličan Jest-u, ali optimizovan za Vite projekte.
- *React Testing Library:* Biblioteka za testiranje React komponenti koja promoviše najbolje prakse pristupa korisničkom interfejsu.

Univerzitet u Beogradu
Fakultet organizacionih nauka
Katedra za elektronsko poslovanje
Turistička agencija – Roam Rise
Seminarski rad
Ime	Prezime	Broj indeksa
Vukašin	Kovačević	2022/0227
Marko	Stamenković	2022/0282
Anastasija	Terzić	2022/0337
Link ka Github-u	https://github.com/elab-development/klijentske-veb-tehnologije-2024-pravljenje-turisticke-agencije
 
Sadržaj
1	Jasno specificiran i formulisan korisnički zahtev (detaljan opis teme)	3
2	Opis sistema	3
2.1	Opis slučajeva korišćenja	3
2.2	Opis svih funkcionalnosti u aplikaciji	4
2.3	Drvo komponenata (opis i grafički prikaz)	5
3	Opis tehnologije, biblioteka i dodatnih paketa korišćenih u aplikaciji	8
4	Korisničko uputstvo	8
5	Prikaz i objašnjenje reprezentativnih (karakterističnih) delova koda	16

 
1	Jasno specificiran i formulisan korisnički zahtev (detaljan opis teme)

Aplikacija omogućava korisnicima registraciju i prijavu kako bi mogli da koriste sve funkcionalnosti aplikacije. Pretraga i filtriranje aranžmana je osnovna funkcionalnost koja omogućava korisnicima da pronađu aranžmane prema različitim kriterijumima kao što su država, destinacija, vrsta aranžmana, popusti, akcije i last minute ponude. Sistem će pružati opcije za kombinovanje ovih kriterijuma kako bi korisnici mogli da pronađu najprikladnije ponude za smeštaj i prevoz. Pored toga, biće implementirana funkcionalnost prikazivanja detaljnih informacija o svakom aranžmanu, uključujući cene, trajanje, tip smeštaja, prevozna sredstva, aktivnosti i fotografije. Korisnici će imati mogućnost da ocene i ostave recenzije za aranžmane koje su koristili, što će doprineti transparentnosti i kvalitetu ponuda. Aplikacija će takođe podržavati sistem za online rezervacije, omogućavajući korisnicima da direktno rezervišu aranžmane putem veb aplikacije. Biće implementirana i funkcionalnost za upravljanje korisničkim nalozima, uključujući mogućnost promene ličnih podataka, pregleda istorije rezervacija i praćenja statusa rezervacija. Sve ove funkcionalnosti će biti razvijene uz korišćenje modernih veb tehnologija, sa fokusom na intuitivan i responzivan dizajn koji će omogućiti lako korišćenje na različitim uređajima. Ciljna grupa su nam individualni putnici, porodice, poslovni putnici, ali i grupni korisnici, kao što su škole, organizacije...

2	Opis sistema

Web aplikacija za turističku agenciju omogućava korisnicima pretraživanje, rezervaciju i upravljanje turističkim aranžmanima. Sistem je podeljen na klijentsku i serversku stranu. 
Klijentska strana podrazumeva frontend tehnologije (React.js za izradu interaktivnog korisničkog interfejsa), korisnički interfejs (Intuitivan dizajn sa lako dostupnim funkcijama pretrage, pregleda, rezervacije), autentifikacija (Login i registracija novih korisnika), pretraživanje (Filteri za destinacije, datume, tipove aranžmana), pregled detalja (Prikaz informacija o aranžmanima, slikama, recenzijama i cenama).
Serverska strana podrazumeva backend tehnologije (Node.js sa Express frameworkom za rukovanje zahtevima i obradom podataka), API (RESTful API za komunikaciju između frontend i backend delova sistema).
2.1	Opis slučajeva korišćenja

Slučaj korišćenja 1: Registracija novog korisnika
Cilj: Omogućiti novim korisnicima da kreiraju nalog na sajtu.
Preduslovi: Korisnik je na početnoj stranici i nije ulogovan.
Tok događaja:
Korisnik klikne na dugme "Sign up".
Sistem prikazuje formu za registraciju.
Korisnik unosi svoje podatke (ime, email, lozinka).
Korisnik klikne na dugme "Sign up".
Ishod: Novi korisnik uspešno kreira nalog i može koristiti sve funkcionalnosti aplikacije.
Alternativni tokovi: Ako nalog već postoji, može se ići na “Sign in”.
Slučaj korišćenja 2: Pretraživanje i pregled aranžmana
Cilj: Omogućiti korisnicima da pretraže i pregledaju dostupne turističke aranžmane.
Preduvjeti: Korisnik je ulogovan ili gost.
Tok događaja:
Korisnik odlazi na stranicu “Aranžmani”
Sistem prikazuje listu dostupnih aranžmana.
Korisnik klikne na jedan od prikazanih aranžmana.
Korisnik može pregledati slike destinacije i dodatne informacije o aranžmanu.
Ishod: Korisnik dobija sve potrebne informacije o izabranom aranžmanu.
Alternativni tokovi: Na dnu stranice postoji dugme koje vraća na početak stranice. Odlaskom na početnu stranu preko menija, možemo videti takođe aranžmane, skrolovanjem nadole. Pored slika i opisa, možemo videti i cene aranžmana, kao i ocene koje su ostavljali korisnici.
Slučaj korišćenja 3: Rezervacija aranžmana
Cilj: Omogućiti korisnicima da rezervišu izabrani turistički aranžman.
Preduslovi: Korisnik je ulogovan i pregledao detalje izabranog aranžmana.
Tok događaja: Korisnik klikne na dugme "Book now" na početnoj strani, nakon što odabere aranžman koji mu odgovara. Nakon potvrde rezervacije, korisniku se šalje odgovor da je rezervacija potvrđena.
Ishod: Korisnik uspešno rezerviše aranžman.
2.2	Opis svih funkcionalnosti u aplikaciji

Sign in/Sign up: Kreiranje novog korisničkog naloga/prijavljivanje korisnika.
Pretraživanje aranžmana: Filtriranje destinacija, datuma i tipova aranžmana.
Pregled aranžmana: Detaljan prikaz informacija o aranžmanu, uključujući slike, opise, cene i recenzije.
Rezervacija aranžmana: Proces rezervacije sa unosom podataka i plaćanjem.
Upravljanje korisničkim profilom: Pregled i izmena ličnih podataka korisnika.
Korisnička podrška: Integrisani chat sistem za pomoć korisnicima.
Administracija: Dodavanje, ažuriranje i brisanje aranžmana i upravljanje korisničkim rezervacijama.

2.3	Drvo komponenata (opis i grafički prikaz)

Opis komponenata
App: Glavna komponenta koja sadrži sve ostale komponente i menadžeriše rute.
About: Ova komponenta sadrži informacije o turističkoj agenciji.
Blog: Sekcija koja prikazuje članke, vodiče, ili druge vrste sadržaja vezane za putovanja i turizam.
Brands (Brendovi): Prikazuje brendove s kojima turistička agencija surađuje ili koje preporučuje svojim klijentima. Može uključivati partnere za smještaj, prijevoz, aktivnosti i sl.
Common: Komponenta koja sadrži često postavljana pitanja (FAQ), pravila korištenja stranice ili usluga, politike privatnosti i druge informacije koje su važne za korisnike.
Contact: Dio stranice koji omogućuje korisnicima da kontaktiraju turističku agenciju
Features: Prikazuje ključne značajke ili usluge koje turistička agencija nudi svojim klijentima
Header: Navigaciona traka sa linkovima ka različitim delovima sajta (početna, pretraga, profil, itd.).
Footer: Informacije o agenciji, kontakt informacije i linkovi ka društvenim mrežama.
Hero: Prvi vizuelni element koji korisnike dočekuje na vrhu početne stranice. Obično sadrži privlačan naslov, poziv na akciju i atraktivnu sliku destinacije ili ponude.
Pricing: Sekcija koja prikazuje različite cjenovne pakete ili opcije putovanja koje agencija nudi, zajedno s detaljima o tome što je uključeno u svaki paket.
Scroll to Top: Malo dugme koje omogućuje korisnicima da se brzo vrate na vrh stranice, posebno korisno na dugim stranicama ili blogovima.
Testimonials: Sekcija koja prikazuje iskustva i povratne informacije klijenata o uslugama agencije. Uključuje kratke citate, ocjene ili slike zadovoljnih klijenata.
Models: Mogu se odnositi na različite vrste turističkih aranžmana ili paketa koje agencija nudi (npr. porodični odmor, avanturističko putovanje, luksuzni odmor).
Styles: Komponenta koja definiše vizualni izgled web stranice, uključujući boje, fontove, ikone i ostale dizajnerske elemente.
Types: Može se odnositi na različite vrste putovanja ili turističkih usluga koje agencija nudi, kao što su grupna putovanja, individualna putovanja, putovanja na odredišta po izboru itd.
Utils: Ova komponenta može uključivati različite korisne alate ili resurse za korisnike, kao što su konverter valuta, korisnički vodiči...
Grafički prikaz
- Header (Zaglavlje)
  |
  +-- Hero (Glavni dio)
  |
  +-- About (O nama)
  |
  +-- Features (Usluge)
  |
  +-- Models (Modeli)
  |
  +-- Pricing (Cijene)
  |
  +-- Blog
  |
  +-- Testimonials (Preporuke)
  |
  +-- Contact (Kontakt)
  |
  +-- Footer (Podnožje)
       |
       +-- Common (Uobičajeni elementi)
       |
       +-- Brands (Brendovi)
       |
       +-- Utils (Pomoćni alati)

 

3	Opis tehnologije, biblioteka i dodatnih paketa korišćenih u aplikaciji 








4	Korisničko uputstvo

Stranice aplikacije sa različitim sadržajem (Početna, O nama, Aranžmani, Kontakt, Sign up).
Sve strane imaju različite funkcionalnosti. Na svim stranama imamo reusable komponente, kao sto su navigacioni meni, dugme koje vraca na vrh stranice, ikonica sunca koja omogućava prelazak na light mode, kao i različita polja forme.
Početna strana:
 
Početna strana se sastoji iz više delova, o kojima će kasnije biti reči. Na njoj se nalaze primamljive slike i video zapisi za korisnike, najbolje ponude... Takođe nalaze se i delovi koji govore o tome zašto treba baš nas izabrati, recenzije, kao i last minute ponude.
 
Stranica „O nama“ govori nešto više o samoj agenciji. Imamo deo koji se ponavlja sa početne strane (Šest razloga zašto da izaberete nas). Ova stranica igra ključnu ulogu u uspostavljanju povjerenja između agencije i potencijalnih klijenata.
 
Ova stranica obično služi kao centralno mesto gde se detaljno prikazuju sve ponuđene usluge i putnički paketi. Ova stranica igra ključnu ulogu u privlačenju potencijalnih klijenata i informisanju o njihovim mogućnostima za putovanje. Sadrži detaljan prikaz različitih vrsta putovanja i usluga koje agencija nudi.
 
Stranica koja omogućava korisnicima da ostvare kontakt s agencijom. Ova stranica je jednostavna za navigaciju i sadržisve potrebne informacije kako bi posjetitelji mogli lako pronaći način da se obrate agenciji. Sadrži deo za pisanje komentara, subscribe-ovanje, kao i deo za editovanje profila.
 
Stranica koja omogućava registraciju korisnika, kao i logovanje ukoliko korisnik već ima korisnički nalog.


Sledi prikaz funkcionalnosti na sajtu implementiranih korišćenjem TypeScript-a ili TSX-a:
 
Ovde možemo videti deo koji služi za rezervaciju smeštaja. Nakon što korisnik popuni odgovarajuća polja i izabere datum, pritiskom na dugme book now, korisniku se automatski šalje poruka da je rezervacija potvrđena.
Takođe ovde se može videti i ikonica sunca, o kojoj sam već govorila, koja nas prebacuje u dark/light mode.
 
Na slici se može videti deo u kome možemo tražiti putovanja u zavisnosti od toga kakav tip putovanja želimo. Klikom na search i kucanjem željenog tipa putovanja, automatski nam se izlistavaju odgovarajuća putovanja. Takođe, u ovom delu imamo implementiranu i paginaciju.
U donjem desnom uglu se nalazi i dugme sa strelicom nagore, koje nas vraća na početak stranice (ScrollToTop).
 
Klikom na dugme Book Now se bukira željeno putovanje, a korisnik biva obavešten da je bukiranje uspešno završeno.
 
Deo u kome se dobijaju povratne informacije od korisnika, gde unose svoje ime, komentar o agenciji, kao i ocenu na skali od 0 do 5. Pritiskom na dugme Submit Review, korisnik može da vidi objavljen svoj komentar.
  
U ovom delu imamo kartice sa različitim ponudama, na osnovnom, srednjem i lux nivou. Pored cene, opisa, dugmeta za detaljne informacije, imamo i deo koji povećava cenu u odnosu na to da li je broj dana 7 ili 15.
 
U desnom uglu nalazi se deo koji omogućava korisniku da promeni svoj profil, klikom na dugme Edit Profile. Nakon izvršenih promena, potrebno je da sačuva sve klikom na dugme Save.
 
Na početnoj strani se nalazi i video o Tasosu, korisnik se klikom na njega šalje na YouTube, gde se automatski pušta video.


Klase i interfejsi na Home strani:
Prvu klasu predstavljaju turistički paketi, a drugu vodiči.
 
 



5	Prikaz i objašnjenje reprezentativnih (karakterističnih) delova koda
ArragmentList.tsx Componenta
 
Importi i inicijalno podešavanje
import React from 'react'; // Uvozamo samo React
import { useState } from 'react'; // Uvozamo useState hook
import '../styles/globals.css'; // Uvoz globalnog stila

•  React i useState su uvezeni kako bismo koristili funkcionalnosti i hookove iz React-a.
•  globals.css je uvezen za globalne stilove.

Interfejs za Aranžman i Inicijalni Podaci
interface Arrangement {
  id: number;
  title: string;
  description: string;
  price: number;
}

Definiše se interfejs Arrangement koji opisuje strukturu aranžmana sa četiri polja: id, title, description i price.

const ArrangementList: React.FC = () => {

const initialArrangements: Arrangement[] = [
  { id: 1, title: 'Weekend Getaway', description: 'Relaxing weekend in a cozy resort', price: 200 },
  { id: 2, title: 'Adventure Trek', description: 'Exciting trekking adventure in the mountains', price: 300 },
  { id: 3, title: 'City Tour', description: 'Guided tour through historical landmarks', price: 150 },
  { id: 4, title: 'Beach Vacation', description: 'Sun, sand, and relaxation by the beach', price: 250 },
  { id: 5, title: 'Safari Adventure', description: 'Exciting safari in the wild', price: 400 },
  { id: 6, title: 'Cruise Voyage', description: 'Luxurious cruise experience', price: 500 },
  { id: 7, title: 'Mountain Climbing', description: 'Thrilling mountain climbing experience', price: 350 },
  { id: 8, title: 'Desert Expedition', description: 'Adventurous desert expedition', price: 450 },
];

initialArrangements je niz koji sadrži početne podatke o aranžmanima.

Komponenta ArrangementList

const ArrangementList: React.FC = () => {
  const [arrangements, setArrangements] = useState<Arrangement[]>(initialArrangements);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredArrangements, setFilteredArrangements] = useState<Arrangement[]>(initialArrangements);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const arrangementsPerPage = 3;

•  arrangements je stanje koje drži sve aranžmane.
•  searchTerm je stanje za trenutni pretraženi pojam.
•  filteredArrangements je stanje za filtrirane aranžmane.
•  currentPage je stanje za trenutnu stranicu u paginaciji.
•  arrangementsPerPage je konstanta koja definiše koliko aranžmana se prikazuje po stranici.


 

Funkcija za Pretragu
const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    if (term.trim() === '') {
      setFilteredArrangements(arrangements);
    } else {
      const filtered = arrangements.filter(arrangement =>
        arrangement.title.toLowerCase().includes(term) ||
        arrangement.description.toLowerCase().includes(term)
      );
      setFilteredArrangements(filtered);
    }
    setCurrentPage(1);
  };

•  handleSearch funkcija se poziva kada korisnik unese tekst u polje za pretragu.
•  Filtrira aranžmane na osnovu naslova ili opisa i ažurira filteredArrangements.

Paginacija
 const indexOfLastArrangement = currentPage * arrangementsPerPage;
  const indexOfFirstArrangement = indexOfLastArrangement - arrangementsPerPage;
  const currentArrangements = filteredArrangements.slice(indexOfFirstArrangement, indexOfLastArrangement);

  const totalPages = Math.ceil(filteredArrangements.length / arrangementsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

•  indexOfLastArrangement i indexOfFirstArrangement izračunavaju indekse trenutnih aranžmana za prikaz na osnovu trenutne stranice.
•  currentArrangements sadrži aranžmane za trenutnu stranicu.
•  totalPages izračunava ukupan broj stranica.
•  paginate funkcija postavlja trenutnu stranicu na izabranu stranicu.

Renderovanje Komponente
 return (
    <div className="ArrangementList">
      <input
        type="text"
        placeholder="Search by title or description..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {currentArrangements.map(arrangement => (
          <li key={arrangement.id}>
            <div>Title: {arrangement.title}</div>
            <div>Description: {arrangement.description}</div>
            <div>Price: ${arrangement.price}</div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

•  Input polje za pretragu koje poziva handleSearch funkciju na promenu teksta.
•  Lista aranžmana za trenutnu stranicu.
•  Paginacioni dugmići za navigaciju između stranica.

Ovaj kod omogućava pretragu, filtriranje i paginaciju aranžmana.

 
Offers.tsx Starana na kojoj mozemo da vidimo ponude i bookujemo zeljenu ponudu
 

Importi i inicijalni podaci
import React, { useState } from 'react';
import '../styles/Offers.css';

•  React i useState su uvezeni za korišćenje React funkcionalnosti i hook-a.
•  Offers.css je uvezen za stilizaciju ove komponente.

interface Offer {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

Offer interfejs definiše strukturu podataka o ponudama sa poljima: id, title, description, price i imageUrl.

 
const offersData: Offer[] = [
  {
    id: 1,
    title: 'Summer Sale in Greece',
    description: 'Enjoy a wonderful summer vacation in Greece with 20% off!',
    price: '$999',
    imageUrl: 'https://th.bing.com/th/id/OIP.pUke3Mt5Puik7XdTraJnsAHaE7?rs=1&pid=ImgDetMain'
  },
  {
    id: 2,
    title: 'Winter Wonderland in Switzerland',
    description: 'Experience the magic of winter in Switzerland with 15% discount!',
    price: '$1299',
    imageUrl: 'https://th.bing.com/th/id/R.863a75ab8f0c3b11135296ec521d887b?rik=VHvIGoowKbh0sQ&riu=http%3a%2f%2fcdn.theculturetrip.com%2fwp-content%2fuploads%2f2015%2f04%2f18881777463_4174e0e4c5_k.jpg&ehk=jMl08b%2bFIu1H2vw9AVhlTcbzeJVHfJSS88GNbBYuhzE%3d&risl=&pid=ImgRaw&r=0'
  },
  // Add more offers here
];

offersData je niz sa podacima o ponudama, svaka ponuda ima id, title, description, price i imageUrl.
Komponenta Offers
const Offers: React.FC = () => {
  const [notification, setNotification] = useState<string | null>(null);

notification je stanje koje čuva poruku o potvrdi rezervacije.
Funkcija za rezervaciju
  const handleBookNow = (offerTitle: string) => {
    setNotification(`You have booked the offer: ${offerTitle}`);
    setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
  };

handleBookNow funkcija se poziva kada korisnik klikne na dugme "Book Now". Postavlja notification poruku i automatski je uklanja nakon 3 sekunde koristeći setTimeout.

Renderovanje Komponente
return (
    <div className="offers">
      <h2>Special Offers</h2>
      {notification && <div className="notification">{notification}</div>}
      {offersData.map((offer) => (
        <div key={offer.id} className="offer">
          <img src={offer.imageUrl} alt={offer.title} />
          <div className="offer-details">
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <p className="offer-price">{offer.price}</p>
            <button onClick={() => handleBookNow(offer.title)}>Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

•  notification se prikazuje samo ako je postavljena neka poruka.
•  offersData.map prolazi kroz sve ponude i za svaku kreira HTML strukturu sa slikom, detaljima ponude, i dugmetom za rezervaciju koje poziva handleBookNow funkciju.
•  Klasa "offers" se koristi za stilizaciju pomoću CSS-a.


 

Reviews.tsx
 
Importi i inicijalno podešavanje
import React, { useState } from 'react';
import '../styles/Reviews.css';


•  React i useState su uvezeni za korišćenje React funkcionalnosti i hook-ova.
•  Reviews.css je uvezen za stilizaciju ove komponente.

interface Review {
  id: number;
  user: string;
  comment: string;
  rating: number;
}

Review interfejs definiše strukturu podataka o recenziji sa poljima: id, user, comment i rating.
 
Komponenta Reviews
const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

•  reviews je stanje koje čuva sve recenzije.
•  user je stanje za korisničko ime.
•  comment je stanje za korisnički komentar.
•  rating je stanje za korisničku ocenu.

Funkcija za dodavanje recenzije
  const handleAddReview = () => {
    const newReview = { id: Date.now(), user, comment, rating };
    setReviews([...reviews, newReview]);
    setUser('');
    setComment('');
    setRating(0);
  };

•  handleAddReview funkcija kreira novu recenziju sa jedinstvenim ID-em (koristeći Date.now()) i trenutnim vrednostima za korisnika, komentar i ocenu.
•  Dodaje novu recenziju u stanje reviews i resetuje vrednosti za user, comment i rating na podrazumevane vrednosti.
 
Renderovanje komponente
 return (
    <div className="reviews">
      <h2>Reviews</h2>
      <div>
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <h4>{review.user}</h4>
            <p>{review.comment}</p>
            <p className="rating">Rating: {review.rating}</p>
          </div>
        ))}
      </div>
      <div className="add-review">
        <h3>Add a review</h3>
        <input
          type="text"
          placeholder="Your name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <textarea
          placeholder="Your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <input
          type="number"
          max={5}
          min={0}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <button onClick={handleAddReview}>Submit Review</button>
      </div>
    </div>
  );
};

•  reviews se prikazuju u obliku liste pomoću reviews.map metode. Svaka recenzija ima ključ (ID) i prikazuje korisničko ime, komentar i ocenu.
•  add-review deo prikazuje formu za dodavanje nove recenzije, sa poljima za unos imena, komentara i ocene.
•  Kada korisnik klikne na dugme Submit Review, poziva se funkcija handleAddReview koja dodaje novu recenziju u listu.
TravelBooking.tsx
 
Importi i inicijalno podešavanje
import React, { useState } from 'react';
import '../styles/TravelBooking.css';

•  React i useState su uvezeni za korišćenje React funkcionalnosti i hook-ova.
•  TravelBooking.css je uvezen za stilizaciju ove komponente.
Interfejs za recenziju
interface TravelBookingProps {
  destination: string;
}

TravelBookingProps interfejs definiše strukturu propertija koje komponenta očekuje, u ovom slučaju, destination je string koji predstavlja odredište putovanja.
Kompontnte TravelBooking
const TravelBooking: React.FC<TravelBookingProps> = ({ destination }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');


•  name, email i date su stanja koja čuvaju vrednosti unosa za ime, email i datum.
•  destination je proprty koji komponenta prima i koristi za prikazivanje odredišta.
Funkcija za rukovanje rezervacijom
const handleBooking = () => {
    alert(`Booking confirmed for ${name} to ${destination} on ${date}`);
    // Here you would typically send this data to a backend service
  };
•  handleBooking funkcija se poziva kada korisnik klikne na dugme "Book Now". Prikazuje alert sa potvrdom rezervacije koristeći vrednosti iz stanja name, destination i date.
•  U stvarnom scenariju, podaci bi bili poslati backend servisu za dalju obradu.

Renderovanje komponente
 return (
    <div className="travel-booking">
      <h2>Book your trip to {destination}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};
•  destination se prikazuje u naslovu.
•  Tri polja za unos omogućavaju korisnicima da unesu svoje ime, email i datum putovanja. Stanja name, email i date se ažuriraju pomoću onChange događaja.
•  Dugme Book Now poziva funkciju handleBooking kada se klikne.

UserProfile.tsx
 
Importi i inicijalno podešavanje
import React, { useState } from 'react';
import '../styles/UserProfile.css';
•  React i useState su uvezeni za korišćenje React funkcionalnosti i hook-ova.
•  UserProfile.css je uvezen za stilizaciju ove komponente.
Komponenta UserProfile
const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [bio, setBio] = useState('Travel enthusiast. Love exploring new places and cultures.');

•  isEditing je stanje koje prati da li je profil u režimu uređivanja.
•  name, email i bio su stanja koja čuvaju vrednosti za korisničko ime, email i biografiju.

Funkcije za rukovanje uređivanjem

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save the updated profile information
  };

•  handleEditClick postavlja isEditing na true, omogućavajući režim uređivanja.
•  handleSaveClick postavlja isEditing na false, izlazeći iz režima uređivanja. Ova funkcija bi trebalo da sačuva ažurirane informacije o profilu (ovde je samo komentar o tome).
Renderovanje komponente
return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <img src="https://via.placeholder.com/100" alt="User Avatar" />
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <button className="edit-button" onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Bio:</strong> {bio}</p>
          <button className="edit-button" onClick={handleEditClick}>Edit Profile</button>
        </>
      )}
    </div>
  );
};
•  Komponenta prikazuje korisnički profil sa slikom, imenom, emailom i biografijom.
•  Ako je isEditing true, prikazuju se input polja za uređivanje imena, emaila i biografije, kao i dugme za čuvanje promena.
•  Ako je isEditing false, prikazuju se tekstualni podaci o korisniku i dugme za uređivanje profila.

ScrolToTop
import { useEffect, useState } from "react";
useEffect i useState hook-ovi su uvezeni iz React-a. useState se koristi za upravljanje stanjem vidljivosti dugmeta, a useEffect za postavljanje efekata koji će se izvršavati nakon renderovanja komponente.
Definisanje komponente ScrollToTop
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
•  isVisible je stanje koje čuva informaciju o tome da li je dugme za povratak na vrh vidljivo ili ne.
•  setIsVisible je funkcija koja postavlja vrednost stanja isVisible.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
scrollToTop funkcija koristi window.scrollTo metod za skrolovanje na vrh stranice sa glatkim (smooth) prelazom.
 
Efekat za praćenje skrolovanja
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
•  useEffect hook se koristi za dodavanje i uklanjanje event listener-a za skrolovanje.
•  toggleVisibility funkcija postavlja isVisible na true ako je skrolovanje više od 300 piksela, inače postavlja na false.
•  window.addEventListener("scroll", toggleVisibility) dodaje event listener za skrolovanje koji poziva toggleVisibility svaki put kada se stranica skroluje.
•  Povratna funkcija u useEffect uklanja event listener kada se komponenta demontira, kako bi se sprečili curenja memorije.
Renderovanje komponente
  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
        </div>
      )}
    </div>
  );
•  isVisible uslovno prikazuje dugme za povratak na vrh ako je stanje isVisible true.
•  div sa klasama za stilizaciju i onClick događajem koji poziva scrollToTop funkciju kada se klikne.
•  Unutar div elementa je span koji predstavlja strelicu ka vrhu. 
Pricing
 
OfferList komponenta
Ikonice za proveru i krst
a.	const checkIcon = (
b.	  <svg width="8" height="6" viewBox="0 0 8 6" className="fill-current">
c.	    <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" />
d.	  </svg>
e.	);
f.	
g.	const crossIcon = (
h.	  <svg width="7" height="7" viewBox="0 0 8 8" className="fill-current">
i.	    <path d="M7.4499 0.512524C7.1124 0.175024 6.5874 0.175024 6.2499 0.512524L3.9999 2.80002L1.7124 0.512524C1.3749 0.175024 0.849902 0.175024 0.512402 0.512524C0.174902 0.850024 0.174902 1.37502 0.512402 1.71252L2.7999 4.00002L0.512402 6.28752C0.174902 6.62502 0.174902 7.15002 0.512402 7.48752C0.662402 7.63752 0.887402 7.75002 1.1124 7.75002C1.3374 7.75002 1.5624 7.67502 1.7124 7.48752L3.9999 5.20002L6.2874 7.48752C6.4374 7.63752 6.6624 7.75002 6.8874 7.75002C7.1124 7.75002 7.3374 7.67502 7.4874 7.48752C7.8249 7.15002 7.8249 6.62502 7.4874 6.28752L5.1999 4.00002L7.4874 1.71252C7.7874 1.37502 7.7874 0.850024 7.4499 0.512524Z" />
j.	  </svg>
k.	);

•  checkIcon: SVG ikonica za proveru (check mark).
•  crossIcon: SVG ikonica za krst (X mark).
OfferList komponenta
const OfferList = ({
  text,
  status,
}: {
  text: string;
  status: "active" | "inactive";
}) => {
  return (
    <div className="mb-3 flex items-center">
      <span className="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
        {status === "active" ? checkIcon : crossIcon}
      </span>
      <p className="m-0 text-base font-medium text-body-color">{text}</p>
    </div>
  );
};

export default OfferList;
•  text: Tekst ponude.
•  status: Status ponude koji može biti "active" ili "inactive".
•  isVisible: Prikazuje odgovarajuću ikonicu (check ili cross) baziranu na statusu.
 
PricingBox Komponenta
Definisanje PricingBox komponente
const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {

•  price: Cena paketa.
•  duration: Trajanje paketa.
•  packageName: Naziv paketa.
•  subtitle: Podnaslov koji opisuje paket.
•  children: Dodatni sadržaj koji će biti prikazan unutar komponente.
 return (
    <div className="w-full">
      <div className="relative z-10 rounded-sm bg-white px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
        <div className="flex items-center justify-between">
          <h3 className="price mb-2 text-[32px] font-bold text-black dark:text-white">
            $<span className="amount">{price}</span>
            <span className="time text-lg font-medium text-body-color">
              /{duration}
            </span>
          </h3>
          <h4 className="mb-2 text-xl font-bold text-dark dark:text-white">
            {packageName}
          </h4>
        </div>
        <p className="mb-7 text-base text-body-color">{subtitle}</p>
        <div className="mb-8 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">
          <button className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
         Pogledajte ponudu
          </button>
        </div>
        <div>{children}</div>
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

•  h3: Prikazuje cenu i trajanje paketa.
•  h4: Prikazuje naziv paketa.
•  p: Prikazuje podnaslov koji opisuje paket.
•  button: Dugme za pregled ponude.
•  children: Prikazuje dodatni sadržaj koji se prosleđuje kao child elementi.
•  SVG: Pozadinska grafika za stilizaciju.

ChangeTheme Color
 
Import 
import { useTheme } from "next-themes";
 Importuje useTheme 
Menjanje teme na sajtu
const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

Renderovanje
 return (
    <button aria-label='theme toggler'
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center text-black rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg h-9 w-9 dark:text-white md:h-14 md:w-14"
    >
      <svg
        viewBox="0 0 23 23"
        className="w-5 h-5 stroke-current dark:hidden md:h-6 md:w-6"
        fill="none"
      >
        <path
          d="M9.55078 1.5C5.80078 1.5 1.30078 5.25 1.30078 11.25C1.30078 17.25 5.80078 21.75 11.8008 21.75C17.8008 21.75 21.5508 17.25 21.5508 13.5C13.3008 18.75 4.30078 9.75 9.55078 1.5Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden w-5 h-5 dark:block md:h-6 md:w-6"
      >
        <mask id="path-1-inside-1_977:1934" fill="white">
          <path d="M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.65515 20.7559 3.84588 20.7559 4.04475C20.7559 4.24362 20.6769 4.43435 20.5363 4.575L18.4153 6.6975C18.3455 6.76713 18.2628 6.82235 18.1717 6.86C18.0806 6.89765 17.983 6.91699 17.8845 6.91692C17.6855 6.91678 17.4947 6.83758 17.354 6.69675C17.2844 6.62702 17.2292 6.54425 17.1915 6.45318C17.1539 6.36211 17.1345 6.26452 17.1346 6.16597C17.1348 5.96695 17.214 5.77613 17.3548 5.6355L19.4758 3.5145C19.6164 3.3739 19.8072 3.29491 20.006 3.29491C20.2049 3.29491 20.3956 3.3739 20.5363 3.5145ZM6.74678 17.304C6.88738 17.4446 6.96637 17.6354 6.96637 17.8342C6.96637 18.0331 6.88738 18.2239 6.74678 18.3645L4.62578 20.4855C4.48433 20.6221 4.29488 20.6977 4.09823 20.696C3.90158 20.6943 3.71347 20.6154 3.57442 20.4764C3.43536 20.3373 3.35648 20.1492 3.35478 19.9526C3.35307 19.7559 3.42866 19.5665 3.56528 19.425L5.68628 17.304C5.82693 17.1634 6.01766 17.0844 6.21653 17.0844C6.4154 17.0844 6.60614 17.1634 6.74678 17.304ZM20.5363 20.4855C20.3956 20.6261 20.2049 20.7051 20.006 20.7051C19.8072 20.7051 19.6164 20.6261 19.4758 20.4855L17.3548 18.3645C17.2182 18.223 17.1426 18.0336 17.1443 17.8369C17.146 17.6403 17.2249 17.4522 17.3639 17.3131C17.503 17.1741 17.6911 17.0952 17.8877 17.0935C18.0844 17.0918 18.2738 17.1674 18.4153 17.304L20.5363 19.425C20.6769 19.5656 20.7559 19.7564 20.7559 19.9552C20.7559 20.1541 20.6769 20.3449 20.5363 20.4855ZM6.74678 6.6975C6.60614 6.8381 6.4154 6.91709 6.21653 6.91709C6.01766 6.91709 5.82693 6.8381 5.68628 6.6975L3.56528 4.575C3.49365 4.50582 3.43651 4.42306 3.39721 4.33155C3.3579 4.24005 3.33721 4.14164 3.33634 4.04205C3.33548 3.94247 3.35445 3.84371 3.39216 3.75153C3.42988 3.65936 3.48557 3.57562 3.55598 3.5052C3.6264 3.43478 3.71014 3.37909 3.80232 3.34138C3.89449 3.30367 3.99325 3.2847 4.09283 3.28556C4.19242 3.28643 4.29083 3.30712 4.38233 3.34642C4.47384 3.38573 4.5566 3.44287 4.62578 3.5145L6.74678 5.6355C6.81663 5.70517 6.87204 5.78793 6.90985 5.87905C6.94766 5.97017 6.96712 6.06785 6.96712 6.1665C6.96712 6.26515 6.94766 6.36283 6.90985 6.45395C6.87204 6.54507 6.81663 6.62783 6.74678 6.6975Z" />
        </mask>
        <path
          d="M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.65515 20.7559 3.84588 20.7559 4.04475C20.7559 4.24362 20.6769 4.43435 20.5363 4.575L18.4153 6.6975C18.3455 6.76713 18.2628 6.82235 18.1717 6.86C18.0806 6.89765 17.983 6.91699 17.8845 6.91692C17.6855 6.91678 17.4947 6.83758 17.354 6.69675C17.2844 6.62702 17.2292 6.54425 17.1915 6.45318C17.1539 6.36211 17.1345 6.26452 17.1346 6.16597C17.1348 5.96695 17.214 5.77613 17.3548 5.6355L19.4758 3.5145C19.6164 3.3739 19.8072 3.29491 20.006 3.29491C20.2049 3.29491 20.3956 3.3739 20.5363 3.5145ZM6.74678 17.304C6.88738 17.4446 6.96637 17.6354 6.96637 17.8342C6.96637 18.0331 6.88738 18.2239 6.74678 18.3645L4.62578 20.4855C4.48433 20.6221 4.29488 20.6977 4.09823 20.696C3.90158 20.6943 3.71347 20.6154 3.57442 20.4764C3.43536 20.3373 3.35648 20.1492 3.35478 19.9526C3.35307 19.7559 3.42866 19.5665 3.56528 19.425L5.68628 17.304C5.82693 17.1634 6.01766 17.0844 6.21653 17.0844C6.4154 17.0844 6.60614 17.1634 6.74678 17.304ZM20.5363 20.4855C20.3956 20.6261 20.2049 20.7051 20.006 20.7051C19.8072 20.7051 19.6164 20.6261 19.4758 20.4855L17.3548 18.3645C17.2182 18.223 17.1426 18.0336 17.1443 17.8369C17.146 17.6403 17.2249 17.4522 17.3639 17.3131C17.503 17.1741 17.6911 17.0952 17.8877 17.0935C18.0844 17.0918 18.2738 17.1674 18.4153 17.304L20.5363 19.425C20.6769 19.5656 20.7559 19.7564 20.7559 19.9552C20.7559 20.1541 20.6769 20.3449 20.5363 20.4855ZM6.74678 6.6975C6.60614 6.8381 6.4154 6.91709 6.21653 6.91709C6.01766 6.91709 5.82693 6.8381 5.68628 6.6975L3.56528 4.575C3.49365 4.50582 3.43651 4.42306 3.39721 4.33155C3.3579 4.24005 3.33721 4.14164 3.33634 4.04205C3.33548 3.94247 3.35445 3.84371 3.39216 3.75153C3.42988 3.65936 3.48557 3.57562 3.55598 3.5052C3.6264 3.43478 3.71014 3.37909 3.80232 3.34138C3.89449 3.30367 3.99325 3.2847 4.09283 3.28556C4.19242 3.28643 4.29083 3.30712 4.38233 3.34642C4.47384 3.38573 4.5566 3.44287 4.62578 3.5145L6.74678 5.6355C6.81663 5.70517 6.87204 5.78793 6.90985 5.87905C6.94766 5.97017 6.96712 6.06785 6.96712 6.1665C6.96712 6.26515 6.94766 6.36283 6.90985 6.45395C6.87204 6.54507 6.81663 6.62783 6.74678 6.6975Z"
          fill="black"
          stroke="white"
          strokeWidth="2"
          mask="url(#path-1-inside-1_977:1934)"
        />
      </svg>
    </button>
  );
};

UserProfileCars.tsx
 
Importovanje React-a i modela
import React from 'react';
import UserProfile from '@/models/UserProfileCard';

Uvozimo React biblioteku, što je standardno za svaku React komponentu. Takođe uvozimo UserProfile model koji koristimo za tipizaciju propertija user koji se prosleđuje komponenti.
Definicija propertija i props interfejs
interface UserProfileCardProps {
  user: UserProfile;
}

Definišemo propertije koji se očekuju da se prosleđuju komponenti UserProfileCard. U ovom slučaju, očekujemo user objekat koji je tipiziran kao UserProfile.
 
Funkcijska komponenta UserProfileCard
const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <h3>Booking History:</h3>
      <pre>{user.getBookingHistory()}</pre>
    </div>
  );
};

UserProfileCard.tsx
Constructor (constructor method):
  constructor(id: number, name: string, email: string, phone: string, bookingHistory: TourPackage[] = []) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.bookingHistory = bookingHistory;
  }

Konstruktor klase UserProfile inicijalizuje objekat sa osnovnim podacima korisnika kao što su id, name, email, phone, i opcionalno bookingHistory (istorija rezervacija
Metod addBooking za dodavanje rezervacija:
 addBooking(booking: TourPackage): void {
    this.bookingHistory.push(booking);
  }
Metod addBooking dodaje novu rezervaciju (predstavljenu objektom TourPackage) u listu bookingHistory korisnika.
Metod getProfileSummary za dobijanje rezimea profila:
 getProfileSummary(): string {
    return `Name: ${this.name}\nEmail: ${this.email}\nPhone: ${this.phone}`;
  }
Metod getProfileSummary vraća formatiran tekst koji sadrži osnovne informacije o korisniku kao što su ime, email i telefon.
 
Metod getBookingHistory za dobijanje istorije rezervacija:
 getBookingHistory(): string {
    return this.bookingHistory.map(
      (booking, index) => `Booking ${index + 1}: ${booking.getSummary()}`
    ).join('\n');
  }
}
Metod getBookingHistory vraća formatiran tekst koji sadrži sve rezervacije korisnika, numerisane po redu, zajedno sa sažetkom svake rezervacije dobijenom kroz getSummary() metodu objekta TourPackage.

TourPackageCard
 

Import 
import React from 'react';
import TourPackage from '@/models/TourPackage';

import TourPackage from '@/models/TourPackage';: Uvoz modela TourPackage koji se koristi kao tip za prop tourPackage.
 
Interface
interface TourPackageCardProps {
  tourPackage: TourPackage;
}
interface TourPackageCardProps: Deklaracija props interfejsa koji definiše strukturu props-a za TourPackageCard komponentu. Prop tourPackage je tipiziran kao TourPackage.

const TourPackageCard: React.FC<TourPackageCardProps> = ({ tourPackage }) => {
const TourPackageCard: React.FC<TourPackageCardProps> = ({ tourPackage }) => { ... }: Funkcionalna komponenta TourPackageCard koja prima tourPackage kao prop i prikazuje informacije o paketu ture u okviru HTML strukture.

  return (
    <div className="card">
      <img src={tourPackage.imageUrl} alt={tourPackage.name} />
      <h2>{tourPackage.name}</h2>
      <p>{tourPackage.description}</p>
      <p>{tourPackage.getSummary()}</p>
    </div>
  );
};

HTML struktura: Komponenta prikazuje sliku paketa ture (tourPackage.imageUrl) sa odgovarajućim opisom (tourPackage.name, tourPackage.description) i sažetkom (tourPackage.getSummary()).

TourPackage.ts
class TourPackage {
class TourPackage { ... }: Definicija klase TourPackage koja predstavlja turistički paket.
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  destinations: string[];
  imageUrl: string;
Properties (id, name, description, price, duration, destinations, imageUrl): Klasični podaci koji opisuju turistički paket kao što su ID, ime, opis, cena, trajanje, destinacije i URL slike.
 
constructor(id: number, name: string, description: string, price: number, duration: number, destinations: string[], imageUrl: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.duration = duration;
    this.destinations = destinations;
    this.imageUrl = imageUrl;
  }
constructor(id, name, description, price, duration, destinations, imageUrl) { ... }: Konstruktor klase koji inicijalizuje objekat TourPackage sa navedenim parametrima.

  getSummary(): string {
    return `${this.name} - ${this.duration} days for $${this.price}`;
  }
getSummary(): string { ... }: Metoda koja vraća sažetak turističkog paketa u obliku stringa, koji uključuje ime, trajanje i cenu.
 getDetails(): string {
    return `Package: ${this.name}\nDescription: ${this.description}\nPrice: $${this.price}\nDuration: ${this.duration} days\nDestinations: ${this.destinations.join(', ')}`;
  }
}

getDetails(): string { ... }: Metoda koja vraća detaljan opis turističkog paketa, uključujući ime, opis, cenu, trajanje i destinacije, formatiran kao tekstualni string.
