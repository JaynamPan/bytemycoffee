Forfatter: Jaynam Oversetter: AI Oppdatert 27. august 2024

## 2. Ta et glimt av programmering

Velkommen til den fantastiske verden av datamaskiner! Før vi begynner å programmere, er det nødvendig å lære mer om datamaskiner. La oss utforske noen grunnleggende ting om datamaskiner relatert til programmering.

### 2.1 Hvordan en datamaskin behandler informasjon

**(1) Introduksjon til binærkode**

Har du noen gang lurt på hvordan datamaskinen, nettbrettet eller smarttelefonen din vet hvordan den skal gjøre så mange kule ting? Det hele handler om hvordan den behandler informasjon. La oss dykke inn i det grunnleggende av denne prosessen, som starter med noe som kalles "binærkode". Først, la oss tenke på hvordan vi representerer informasjon i vår daglige verden.

**Måter å representere informasjon i vår daglige verden**

I vår daglige verden bruker vi forskjellige måter å representere og dele informasjon på. For eksempel:

- Språk: Enten det er skriftlig eller muntlig, kan vi kommunisere og dele informasjon gjennom symboler basert på bokstaver, ord og lyder. Hver bokstav har en spesifikk form og betydning, og hvert ord eller setning vi sier, formidler en spesifikk mening.
- Grafiske symboler og bilder: Trafikkskilt, tegninger og bilder kan inneholde mye informasjon.
- Lyder: Vi bruker også forskjellige lyder for å formidle betydninger. En dørklokke kan fortelle oss at en besøkende har kommet. En sirene gir oss en advarsel.

På samme måte trenger datamaskiner et spesielt system for å forstå og behandle informasjon. Dette systemet er binærkode, som er som et universelt språk laget av bare to symboler: 0 og 1. Disse symbolene fungerer sammen for å representere all slags data, fra tall og bokstaver til bilder og lyder. "Binær" refererer til "binærsystemet", som bruker kun to symboler (0 og 1). Og "kode" innebærer å bruke et sett med symboler eller regler for å kode, dekode eller kommunisere informasjon på en måte som gjør den forståelig eller brukbar, spesielt i konteksten av datamaskiner og informasjonsbehandling.

**Det binære systemet**

I hverdagen bruker vi vanligvis tall basert på 10 sifre: 0 til 9. La oss gjøre litt enkel matematikk. Hvis du legger til 1 til 0, blir resultatet 1. Legg til 1 igjen, og du får 2. Hvis vi legger til 1 ni ganger til 0, bruker vi alle 10 sifrene fra 0 til 9. Men hva skjer hvis vi legger til 1 ti ganger til 0? Resultatet er 10. La oss se nærmere på "10". Det er laget av "1" og "0", og "1" er til venstre for "0". Hvis vi legger sammen de to sifrene i "10", blir det 1 pluss 0, som er 1. Imidlertid forklarer ikke denne enkle tilleggsmåten hvordan '10' representerer et tall som tilsvarer 10 i vårt desimalsystem.

I hverdagen, med mindre annet er spesifisert, bruker vi tall basert på det "desimale systemet". Ordet "desimal" stammer fra det latinske ordet "decem" som betyr "ti". "Desimalt system" refererer til et tallsystem basert på potenser av ti. I det desimale systemet er hver plassverdi ti ganger verdien av plassen til høyre for den. Hvert siffer i et tall representerer en annen plassverdi, som i det desimale systemet er en potens av ti.

For eksempel, ta tallet 345:

- Sifferet 5 er i "enheter"-plassen (10^0, ti til den nullte potens), som representerer 5.
- Sifferet 4 er i "ti"-plassen (10^1, ti til den første potens), som representerer 4 × 10 = 40.
- Sifferet 3 er i "hundre"-plassen (10^2, ti til den andre potens), som representerer 3 × 100 = 300.

Legg disse verdiene sammen (300 + 40 + 5) for å få den totale verdien 345.

Nå, la oss utforske det binære systemet. I motsetning til det desimale systemet, som bruker ti sifre, bruker det binære systemet kun to sifre: 0 og 1. Hvert siffer i et binært tall representerer en potens av 2, ikke 10.

For eksempel, i det binære tallet 101:

- Det høyre sifferet (1) er i "enheter"-plassen (2^0, to til den nullte potens), som representerer 1.
- Det midterste sifferet (0) er i "toer"-plassen (2^1, to til den første potens), som representerer 0 × 2 = 0.
- Det venstre sifferet (1) er i "fire"-plassen (2^2, to til den andre potens), som representerer 1 × 4 = 4.

For å finne den desimale verdien av det binære tallet 101, legger du sammen disse verdiene: 4 (fra "fire"-plassen) + 0 (fra "toer"-plassen) + 1 (fra "enheter"-plassen) = 5.

Så, det binære tallet 101 tilsvarer det desimale tallet 5.

**Hvorfor bruker datamaskiner det binære systemet**

Det desimale systemet er det mest brukte tallsystemet og benyttes i daglig telling og aritmetikk. Mennesker har ti fingre, noe som gjør telling i det desimale systemet intuitivt og enkelt. Denne naturlige tellemetoden har sannsynligvis påvirket utviklingen av det desimale systemet. Selv om det desimale systemet er enkelt og praktisk for oss mennesker, er det ikke det beste valget for datamaskiner. I stedet er det binære systemet mer egnet for slike elektroniske enheter. Grunnen ligger i "anatomien" til datamaskiner.

Datamaskiner bruker elektriske kretser som kan være enten på eller av. Disse to tilstandene representeres naturlig av de binære sifrene 0 og 1. Binært system er ideelt for datamaskiner fordi det passer perfekt med deres på/av elektriske signaler. Ved å bruke binær, kan datamaskiner effektivt behandle og lagre data.

CPU-en, en viktig komponent i en datamaskin, er avhengig av transistorer som grunnleggende enheter. En transistor er en miniatyr og enkel kretskomponent som kan fungere som elektroniske på/av-brytere og forsterke svake elektriske signaler. Moderne CPU-er inneholder milliarder av transistorer som fungerer som på/av-brytere for behandling og lagring av data. På samme måte bruker RAM, GPU-er og SSD-er (Solid State Drives) også transistorer.

I en datamaskin fungerer nesten alle transistorer som på/av-brytere, noe som betyr at de opererer i bare to tilstander: på og av. Så det er naturlig og enkelt å bruke 1 for "på"-tilstanden og 0 for "av"-tilstanden.

**(2) Hvordan binær kode representerer data**

For å forstå hvordan binær kode representerer data, la oss først se på hvordan en PC behandler og lagrer informasjon. Når et program kjører, lastes en serie med instruksjoner inn i RAM. Sammen med instruksjoner fra andre programmer, blir disse køet for utførelse. CPU-en henter kontinuerlig instruksjoner fra denne køen, én om gangen. Hver gang CPU-en henter en instruksjon, leser den fra RAM, og noen ganger involverer instruksjonen lesing fra eller skriving til harddisken. Moderne CPU-er kan behandle opptil 64 biter med data samtidig, mens eldre CPU-er kan ha håndtert opptil 32 biter.

Dette reiser flere spørsmål: Hvor mange biter med data bør en datamaskin lese eller skrive fra RAM om gangen? Hvor mange biter bør vi bruke som den grunnleggende enheten? Hvis en CPU skulle lese eller skrive bare 1 bit om gangen, ville det vært ekstremt ineffektivt og tidkrevende på grunn av det høye antallet operasjoner som kreves. Derfor leser eller skriver en 64-bits CPU vanligvis 64 biter med data om gangen, og en 32-bits CPU behandler 32 biter av gangen for å balansere ytelse og effektivitet. RAM bruker vanligvis 8 biter som sin grunnleggende enhet.

Valget av en 8-bits enhet for RAM påvirkes av historiske, teknologiske og standardiseringsfaktorer. Tidlige datamaskiner brukte forskjellige størrelser på dataenheter, men etter hvert som teknologien utviklet seg, ble 8-bits enheten mer vanlig. Denne størrelsen fant en balanse mellom effektivitet og kapasitet, spesielt for å representere tegn og data.

**ASCII-kode**

ASCII (American Standard Code for Information Interchange) er en tegnkodingstandard som brukes til å representere tekst i datamaskiner og andre tekstbaserte enheter. Det er grunnleggende for mange moderne kodingsskjemaer. ASCII bruker en 7-biters binærkode, som gir 128 unike tegn med koder som varierer fra 0 til 127.

Standard ASCII-tegn inkluderer:

- Kontrolltegn (0–31):

  Dette er ikke-utskriftbare tegn som styrer tekstbehandling. Eksempler inkluderer:

  - `0` (NUL): Null-tegn
  - `9` (TAB): Horisontal tabulator
  - `10` (LF): Linjeskift (ny linje)
  - `13` (CR): Tilbakeføring

- Utskriftbare tegn (32–127):

  Dette er synlige tegn som bokstaver, sifre, skilletegn og symboler. Eksempler inkluderer:

  - `32` (SPACE): Mellomrom
  - `65` (A): Store A
  - `97` (a): Lille a
  - `48` (0): Siffer 0
  - `33` (!): Utropstegn

ASCII-koder bruker 7 biter, som kan kode 128 tegn, men moderne datamaskiner bruker 8 biter som grunnleggende datamengde. Denne 8-biters enheten, eller byte, tillater koding av 256 tegn, noe som vanligvis er tilstrekkelig for engelsk og andre vestlige språk. For mer komplekse språk brukes ekstra byte til å representere tegn, noe som sikrer effektiv bruk av minne og lagring. Selv om ASCII i seg selv krever bare 7 biter, er en 8-biters representasjon vanlig i datamaskiner, med den ekstra biten som vanligvis er satt til 0. For eksempel, ASCII-koden for store "A" er 65 (desimal) eller 01000001 (binær), med den ekstra biten som er null.

**Noen matematiske operatorers symboler på datamaskinen**

På et standard tastatur legger du kanskje merke til fraværet av noen matematiske symboler, som multiplikasjonstegnet (×). I stedet bruker datamaskiner ofte alternative symboler for enkelhets skyld. Her er noen vanlige eksempler:

- Multiplikasjon: `*`
- Divisjon: `/`
- Modulo (rest etter divisjon): `%`
- Eksponentiering: `**` (ofte brukt i programmeringsspråk som Python), og i noen tilfeller, `^` (vanlig brukt i kalkulatorer).

Disse symbolene brukes til å utføre aritmetiske operasjoner i forskjellige programmeringsmiljøer og kalkulatorer.

**Dataenhetsstørrelser**

Moderne datamaskiner bruker 8 biter som den grunnleggende dataenheten, kjent som en byte (B). Her er en oversikt over andre vanlige dataenhetsstørrelser og deres konverteringer:

- Bit (b, med små bokstaver): Den minste datamengden i databehandling. Den representerer en binær digit, som kan være enten `0` eller `1`.
- Byte (B, med store bokstaver): Den grunnleggende dataenheten, som består av 8 biter.

For større målinger brukes to forskjellige konverteringer: binære og desimale. Binære enheter er basert på potenser av 2, mens desimale enheter bruker potenser av 10. I databehandling er binære enheter standard, mens desimale enheter ofte brukes i markedsføring. Startende fra byte, er en større binær-basert enhet 2^10 (1024) ganger av den første mindre enheten, mens en større desimal-basert enhet er 10^3 (1000) ganger av den første mindre enheten.

Binær-basert enheter:

- Kilobyte (KB): 1 KB = 1.024 bytes (2^10 bytes).
- Megabyte (MB): 1 MB = 1.024 KB = 1.048.576 bytes (2^20 bytes).
- Gigabyte (GB): 1 GB = 1.024 MB = 1.073.741.824 bytes (2^30 bytes).
- Terabyte (TB): 1 TB = 1.024 GB = 1.099.511.627.776 bytes (2^40 bytes).

Desimal-basert enheter:

- Kilobyte (KB): 1 KB = 1.000 bytes (10^3 bytes).
- Megabyte (MB): 1 MB = 1.000 KB = 1.000.000 bytes (10^6 bytes).
- Gigabyte (GB): 1 GB = 1.000 MB = 1.000.000.000 bytes (10^9 bytes).
- Terabyte (TB): 1 TB = 1.000 GB = 1.000.000.000.000 bytes (10^12 bytes).

For å tydelig skille binær-baserte målinger fra desimal-baserte, introduserte IEC (International Electrotechnical Commission) "bi" prefiks for disse enhetene, som står for "binær". Disse enhetene har de samme verdiene som binær konvertering, men med mer gjenkjennelige navn.

- Kibibyte (KiB): 1 KiB = 1.024 bytes (2^10 bytes).
- Mebibyte (MiB): 1 MiB = 1.024 KiB = 1.048.576 bytes (2^20 bytes).
- Gibibyte (GiB): 1 GiB = 1.024 MiB = 1.073.741.824 bytes (2^30 bytes).
- Tebibyte (TiB): 1 TiB = 1.024 GiB = 1.099.511.627.776 bytes (2^40 bytes).

Desimal konverteringer brukes ofte i markedsføring fordi de gir større tall for den samme lagringskapasiteten. For eksempel, en harddisk merket med 500 GB (desimal) er faktisk 500.000.000.000 bytes, som er omtrent 465 GiB (binær).

**Binære representasjoner for ulike datatyper**

All data, uansett type, blir til slutt representert i binær form. Data behandles og lagres som sekvenser av 0 og 1 i datamaskiner. For å lagre tekst, bilder, lyd eller annen type data, må vi "oversette" dem til binærkode, noe som kalles "enkoding". Når vi trenger å bruke disse dataene på en måte som er vennlig for mennesker, tolker programvare binærkoden for å konvertere den til tekst, bilder og andre formater som vi kan forstå, noe som kalles "dekoding".

Her er noen eksempler på enkoding av forskjellige datatyper:

- **Tekst**: Tegn blir representert ved hjelp av kodestandarder som ASCII eller Unicode (Universal Code). Hvert tegn tildeles en unik binærkode. For eksempel er ASCII-koden for 'A' 01000001 i binær form.
- **Tall**: Tall representeres ved hjelp av forskjellige binære formater, som heltall (tall uten desimaler, for eksempel `-3`, `0`) og flyttallsnummer (tall med desimaler, for eksempel `3.14`, `-0.01`). For eksempel er heltallet 5 representert som 00000101 i en 8-bits binær representasjon.
- **Lyd**: Lyddata blir typisk representert som en serie med prøver. Disse prøvene blir fanget med jevne mellomrom og kodet i binær form. For eksempel kan en 16-bits lydprøve være representert som et 16-bits binært tall.
- **Bilder**: Bilder er sammensatt av piksler, hver med fargeverdier. I et gråskala-bilde kan hver piksel være representert med et 8-bits binært tall som indikerer intensiteten. I et fargebilde blir hver piksel vanligvis representert med en kombinasjon av binære tall som tilsvarer de røde, grønne og blå fargekomponentene.
- **Video**: Video er en sekvens av bilder (rammer) og inkluderer ofte lyd. Hver ramme er et bilde representert i binær form, og rammene vises i rask rekkefølge for å skape illusjonen av bevegelse.
- **Filer og formater**: Ulike filformater (som JPEG for bilder, MP3 for lyd, MP4 for video) definerer spesifikke måter å kode data på. Disse formatene bruker binærkode for å strukturere og komprimere dataene effektivt.

**Data Compression**

Tenk deg at du har en stor mengde leker som du må pakke ned i en liten eske. Datakomprimering er som å finne en måte å organisere og krympe lekene på, slik at alle får plass i esken uten å miste noen av dem. På datamaskiner handler det om å gjøre filer mindre, slik at de tar opp mindre plass og blir raskere å sende eller lagre.

Her er et enkelt eksempel på Run-Length Encoding (RLE) algoritmen: Hvis du har en sekvens av engelske bokstaver som "AAAAAAADDDDCCVSSSSSSSSS", som er 23 tegn og tar 23 byte plass. Vi kan telle hvor mange ganger hver bokstav gjentar seg og erstatte de bokstavene med antallet og bokstaven selv: "7A4D2C1V9S". Den nye sekvensen består av 5 antall og 5 bokstaver. Vi kan bruke én byte for å representere hvert antall og bruke ASCII-kode for bokstavene, som totalt utgjør 10 byte. Når vi trenger å dekomprimere sekvensen, leser vi et antall og en bokstav, og gjentar bokstaven i henhold til antallet. På denne måten reduserer vi datastørrelsen og bruker mindre plass.

For ulike datatyper velger vi vanligvis forskjellige komprimeringsalgoritmer, da hver har sine egne fordeler og begrensninger.