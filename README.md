# Javascript Introduktion 3 (Repetition) - Events og Operatorer

Du skal i dag øve dig i at bruge JavaScript operatorer (lig med, større end, assignments osv.), samt DOM Events. Events er hvad der gør at vi kan få ting til at ske når brugeren trykker, holder musen over et element eller sender en form.

## Øvelsesopgave 3.1 - Submit Events:

Du skal i denne opgave lave valideringen til en signup form. Formen er allerede skrevet og din opgave bliver at tage imod de værdier brugeren indtaster og validere at de er korrekte.
Herefter skal der vises en tekst streng i p-tagget med id "userMessage", der giver brugeren feedback på deres indtastning.

### Opgavekravene er:

- Start med at deklarer en variabel til formen. Hent den ind med getElementById metoden.
- Tilføj herefter en eventlistener der lytter efter "input" events
- Tjek at email er korrekt indtastet ved at bruge den medfølgelde regex
- Tjek at password er mindst 8 bogstaver langt
- Tjek at værdien i det andet password felt er den samme som i det første
- Hvis brugeren har indtastet noget forkert skal der vises en tilsvarende fejl besked i DOM´en
- Ellers vises en besked om at brugeren har tilmeldt sig

## Øvelsesopgave 3.2 - onClick Events

Du skal i denne opgave øve dig i at opsætte et onClick event der tæller hvor mange gange knappen er blevet klikket på. Knappens innerText skal opdateres med den nye værdi hver gang du har klikket på knappen.

### Opgavekravene er:

- Start med at deklarere en variabel til knappen og hent den ind i dit JS.
- Tilføj en eventListener til knappen der lytter efter "click" events
- Lav en ny variabel i globalt scope til at holde styr på antal klik
- Tilføj 1 til din "count" variabel hver gang der klikkes og vis dette i knappens innerHTML med en string, så der står: "Du har klikket X gange".

## Øvelsesopgave 3.3 - Større end eller mindre end spillet

Du skal i denne opgave bygge et lille terninge spil, der går ud på at gætte om det næste tal bliver større eller mindre end det sidste tal. UI delen af spillet er helt op til dig. Brug gerne billeder, tekst og stylede elementer til at lave et passende UI.

### Opgavekravene er:

- **Spillet skal kunne følgende**:

  - Start værdien er altid 3 når man åbner spillet og dette skal vises for brugeren.
  - Når man trykker på enten "større end", eller "mindre end" knappen, skal der vises et tilfældigt tal, mellem 1 og 6. Brug Math.random() til at generere et tilfældigt tal.
  - Alt efter om det nye tal var større end, eller mindre end det tidligere tal, skal der vises en besked til brugeren, om de har vundet eller tabt.
  - Der skal også optræde en "win counter" der tæller hvor mange gange man har gættet korrekt og denne skal vises for brugeren.
  - Du skal i denne opgave selv opbygge HTML strukturen og give de elementer du skal bruge et tilsvarende ID

  **Bonus**:
  Hvis du når at blive færdig kan du se om du kan finde en måde at vise en terning til brugerem med det tilsvarende antal øjne til brugerens "slag".

# Javascript_intro_3
