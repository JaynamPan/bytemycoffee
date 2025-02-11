Forfatter: Jaynam Oversætter: AI Opdateret den 27. august 2024

## 2. Tag et kig på programmering

Velkommen til den fantastiske verden af computere! Før vi dykker ned i programmering, er det nødvendigt at lære lidt mere om, hvordan computere fungerer. Lad os udforske nogle grundlæggende ting om computere i relation til programmering.

### 2.1 Hvordan en computer behandler information

**(1) Introduktion til binær kode**

Har du nogensinde undret dig over, hvordan din computer, tablet eller smartphone ved, hvordan den skal udføre alle de fantastiske funktioner? Det handler om, hvordan den behandler information. Lad os dykke ned i grundlæggende om denne proces, begyndende med noget, der kaldes "binær kode". Først skal vi overveje, hvordan vi repræsenterer information i vores daglige liv.

**Måder at repræsentere information i vores daglige liv**

I vores daglige liv bruger vi forskellige måder at repræsentere og dele information på. For eksempel:

- Sprog: Uanset om det er skriftligt eller mundtligt, kan vi kommunikere og dele information ved hjælp af symboler baseret på bogstaver, ord og lyde. Hvert bogstav har en specifik form og betydning, og hvert ord eller sætning, vi siger, formidler en bestemt mening.
- Grafiske symboler og billeder: Trafikskilt, tegninger og billeder kan indeholde meget information.
- Lyde: Vi bruger også forskellige lyde til at formidle nogle betydninger. En dørklokke kan fortælle os, at en besøgende er ankommet. En sirene advarer os om noget.

På samme måde har computere brug for et specielt system til at forstå og behandle information. Dette system er binær kode, som er som et universelt sprog, der består af kun to symboler: 0 og 1. Disse symboler arbejder sammen for at repræsentere alle slags data, fra tal og bogstaver til billeder og lyde. "Binær" henviser til "det binære system", som bruger kun to symboler (0 og 1). Og "kode" indebærer brugen af et sæt symboler eller regler til at kode, dekode eller kommunikere information på en måde, der gør det forståeligt eller anvendeligt, især i konteksten af computere og informationbehandling.

**Det binære system**

I vores hverdag bruger vi normalt tal baseret på 10 cifre: 0 til 9. Lad os tage et simpelt matematisk eksempel. Hvis du lægger 1 til 0, får du 1. Lægger du 1 til igen, får du 2. Hvis vi lægger 1 til 9 gange, bruger vi alle 10 cifre fra 0 til 9. Men hvad sker der, hvis vi lægger 1 til 10 gange? Resultatet er 10. Lad os kigge nærmere på "10". Det består af "1" og "0", og "1" er til venstre for "0". Hvis vi lægger de to cifre i "10" sammen, får vi 1 plus 0, hvilket er 1. Men denne enkle addition forklarer ikke, hvordan '10' repræsenterer et tal, der svarer til 10 i vores decimale system.

I hverdagen, medmindre andet er angivet, bruger vi tal baseret på det "decimale system". Ordet "decimal" stammer fra det latinske ord "decem", som betyder "ti". "Decimalt system" refererer til et talsystem baseret på potenser af ti. I det decimale system er hver pladsværdi ti gange værdien af pladserne til højre. Hvert ciffer i et tal repræsenterer en forskellig pladsværdi, som i det decimale system er en potens af ti.

For eksempel, tag tallet 345:

- Cifret 5 er i "enheder"-pladsen (10^0, ti til nulte magt), som repræsenterer 5.
- Cifret 4 er i "tiers"-pladsen (10^1, ti til første magt), som repræsenterer 4 × 10 = 40.
- Cifret 3 er i "hundreders"-pladsen (10^2, ti til anden magt), som repræsenterer 3 × 100 = 300.

Ved at lægge disse værdier sammen (300 + 40 + 5) får vi den samlede værdi af 345.

Nu lad os udforske det binære system. I modsætning til det decimale system, som bruger ti cifre, bruger det binære system kun to cifre: 0 og 1. Hvert ciffer i et binært tal repræsenterer en potens af 2, ikke 10.

For eksempel, i det binære tal 101:

- Det højre ciffer (1) er i "enheder"-pladsen (2^0, to til nulte magt), hvilket repræsenterer 1.
- Det midterste ciffer (0) er i "toers"-pladsen (2^1, to til første magt), hvilket repræsenterer 0 × 2 = 0.
- Det venstre ciffer (1) er i "fire"-pladsen (2^2, to til anden magt), hvilket repræsenterer 1 × 4 = 4.

For at finde den decimale værdi af det binære tal 101, læg disse værdier sammen: 4 (fra "fire"-pladsen) + 0 (fra "toers"-pladsen) + 1 (fra "enheder"-pladsen) = 5.

Så det binære tal 101 svarer til det decimale tal 5.

**Hvorfor bruger computere det binære talsystem**

Det decimale talsystem er det mest almindeligt anvendte talsystem og bruges i daglig tælling og matematik. Mennesker har ti fingre, hvilket gør tælling i det decimale system intuitivt og ligetil. Denne naturlige tællemetode har sandsynligvis påvirket udviklingen af det decimale system. Selvom det decimale system er enkelt og praktisk for os mennesker, er det ikke den bedste løsning for computere. I stedet er det binære system mere egnet til sådanne elektroniske maskiner. Årsagen ligger i computernes "anatomi".

Computere bruger elektriske kredsløb, der enten kan være tændt eller slukket. Disse to tilstande repræsenteres naturligt af de binære cifre 0 og 1. Det binære system er ideelt for computere, fordi det passer perfekt til deres tænd/sluk elektriske signaler. Ved at bruge binært system kan computere effektivt behandle og opbevare data.

CPU'en, en vigtig komponent i en computer, er afhængig af transistorer som grundlæggende enheder. En transistor er et lille og simpelt kredsløbs-element, der kan fungere som elektroniske tænd/sluk-kontakter og forstærke svage elektriske signaler. Moderne CPU'er indeholder milliarder af transistorer, som fungerer som tænd/sluk-kontakter til behandling og opbevaring af data. På samme måde bruger RAM, GPU'er og SSD'er (Solid State Drives) også transistorer.

I en computer fungerer næsten alle transistorer som tænd/sluk-kontakter, hvilket betyder, at de opererer i blot to tilstande: tændt og slukket. Så det er naturligt og enkelt at bruge 1 for den "tændte" tilstand og 0 for den "slukkede" tilstand.

**(2) Hvordan det binære kode repræsenterer data**

For at forstå, hvordan det binære kode repræsenterer data, lad os først overveje, hvordan en pc behandler og opbevarer information. Når et program kører, bliver dets række af instruktioner indlæst i RAM. Sammen med instruktioner fra andre programmer bliver disse køet til udførelse. CPU'en henter konstant instruktioner fra denne kø, én ad gangen. Hver gang CPU'en henter en instruktion, læser den fra RAM, og nogle gange involverer instruktionen at læse fra eller skrive til harddisken. Moderne CPU'er kan behandle op til 64 bit data ad gangen, mens ældre CPU'er måske kun kan behandle op til 32 bit.

Dette rejser flere spørgsmål: Hvor mange bit data bør en computer læse eller skrive fra RAM ad gangen? Hvor mange bit bør vi bruge som grundlæggende enhed? Hvis en CPU kun skulle læse eller skrive 1 bit ad gangen, ville det være ekstremt ineffektivt og tidskrævende på grund af den høje frekvens af operationer, der kræves. Derfor læser eller skriver en 64-bit CPU typisk 64 bit data ad gangen, og en 32-bit CPU behandler 32 bit ad gangen for at balancere ydeevne og effektivitet. RAM bruger typisk 8 bit som sin grundlæggende enhed.

Valget af en 8-bit enhed til RAM er påvirket af historiske, teknologiske og standardiseringsfaktorer. Tidlige computere brugte forskellige datastørrelser, men efterhånden som teknologien udviklede sig, blev 8-bit enheden mere almindelig. Denne størrelse ramte en balance mellem effektivitet og kapabilitet, især til repræsentation af tegn og data.

**ASCII Kode**

ASCII (American Standard Code for Information Interchange) er en tegnkodningsstandard, der bruges til at repræsentere tekst i computere og andre tekstbaserede enheder. Det er grundlæggende for mange moderne kodningssystemer. ASCII bruger et 7-bit binært nummer, hvilket muliggør 128 unikke tegn med koder, der spænder fra 0 til 127.

Standard ASCII-tegn inkluderer:

- Kontroltegn (0–31):

  Disse er ikke-printbare tegn, der styrer tekstbehandling. Eksempler omfatter:

  - `0` (NUL): Null-tegn
  - `9` (TAB): Horisontal tabulator
  - `10` (LF): Linjeskift (ny linje)
  - `13` (CR): Retur

- Printbare tegn (32–127):

  Disse er synlige tegn som bogstaver, cifre, tegnsætningstegn og symboler. Eksempler omfatter:

  - `32` (SPACE): Mellemrumstegn
  - `65` (A): Store A
  - `97` (a): Lille a
  - `48` (0): Ciffer 0
  - `33` (!): Udråbstegn

ASCII-koder bruger 7 bit, som kan kode 128 tegn, men moderne computere bruger 8 bit som den grundlæggende datastørrelse. Denne 8-bit enhed, eller byte, tillader kodning af 256 tegn, hvilket generelt er tilstrækkeligt til engelsk og andre vestlige sprog. For mere komplekse sprog bruges yderligere bytes til at repræsentere tegn, hvilket sikrer effektiv hukommelses- og lagerudnyttelse. Selvom ASCII i sig selv kun kræver 7 bit, er en 8-bit repræsentation almindelig i computere, hvor den ekstra bit typisk er sat til 0. For eksempel er ASCII-koden for store "A" 65 (decimalt) eller 01000001 (binært), med den ekstra bit som 0.

**Nogle matematiske operatorers symboler på computeren**

På et standardtastatur bemærker du måske fraværet af nogle matematiske symboler, såsom multiplikationstegnet (×). I stedet bruger computere ofte alternative symboler for enkelhed. Her er nogle almindelige eksempler:

- Multiplikation: `*`
- Division: `/`
- Modulo (rest ved division): `%`
- Eksponentiation: `**` (ofte brugt i programmeringssprog som Python), og i nogle tilfælde `^` (ofte brugt i regnemaskiner).

Disse symboler bruges til at udføre aritmetiske operationer i forskellige programmeringsmiljøer og regnemaskiner.

**Dataenheds størrelser**

Moderne computere bruger 8 bit som den grundlæggende dataenhed, kendt som en byte (B). Her er et kig på andre almindelige dataenheds størrelser og deres konverteringer:

- Bit (b, med lille bogstav): Den mindste dataenhed i computing. Den repræsenterer en binær digit, som kan være enten `0` eller `1`.
- Byte (B, med stort bogstav): Den grundlæggende dataenhed, bestående af 8 bit.

For større målinger anvendes to forskellige konverteringer: binære og decimale. Binære enheder er baseret på potenser af 2, mens decimale enheder bruger potenser af 10. I computing er binære enheder standard, mens decimale enheder ofte bruges i markedsføring. Fra byte, er en større binær-baseret enhed 2^10 (1024) gange af den første mindre enhed, mens en større decimale-baseret enhed er 10^3 (1000) gange af den første mindre enhed.

Binære baserede enheder:

- Kilobyte (KB): 1 KB = 1.024 bytes (2^10 bytes).
- Megabyte (MB): 1 MB = 1.024 KB = 1.048.576 bytes (2^20 bytes).
- Gigabyte (GB): 1 GB = 1.024 MB = 1.073.741.824 bytes (2^30 bytes).
- Terabyte (TB): 1 TB = 1.024 GB = 1.099.511.627.776 bytes (2^40 bytes).

Decimale baserede enheder:

- Kilobyte (KB): 1 KB = 1.000 bytes (10^3 bytes).
- Megabyte (MB): 1 MB = 1.000 KB = 1.000.000 bytes (10^6 bytes).
- Gigabyte (GB): 1 GB = 1.000 MB = 1.000.000.000 bytes (10^9 bytes).
- Terabyte (TB): 1 TB = 1.000 GB = 1.000.000.000.000 bytes (10^12 bytes).

For klart at skelne mellem binære målinger og decimale, har IEC (International Electrotechnical Commission) introduceret "bi" præfikset til disse enheder, som står for "binær". Disse enheder har samme værdier som binær konvertering, men med mere skelnelige navne.

- Kibibyte (KiB): 1 KiB = 1.024 bytes (2^10 bytes).
- Mebibyte (MiB): 1 MiB = 1.024 KiB = 1.048.576 bytes (2^20 bytes).
- Gibibyte (GiB): 1 GiB = 1.024 MiB = 1.073.741.824 bytes (2^30 bytes).
- Tebibyte (TiB): 1 TiB = 1.024 GiB = 1.099.511.627.776 bytes (2^40 bytes).

Decimale konverteringer bruges ofte i markedsføring, fordi de giver større tal for den samme lagerkapacitet. For eksempel, en harddisk mærket som 500 GB (decimalt) er faktisk 500.000.000.000 bytes, hvilket er cirka 465 GiB (binært).

**Binære repræsentationer for forskellige datatyper**

Alle data, uanset hvilken type det er, bliver i sidste ende repræsenteret i binær form. Data behandles og opbevares som sekvenser af 0'er og 1'er i computere. For at gemme tekst, billeder, lyd eller andre typer data, skal vi "oversætte" dem til binær kode, hvilket kaldes "kodning". Når vi skal bruge disse data på en menneskevenlig måde, fortolker software den binære kode for at konvertere den til tekst, billeder og andre formater, som vi kan forstå, hvilket kaldes "afkodning".

Her er nogle eksempler på kodning af forskellige datatyper:

- **Tekst**: Tegn repræsenteres ved hjælp af kodningsstandarder som ASCII eller Unicode (Universal Code). Hvert tegn får en unik binær kode. For eksempel er ASCII-koden for 'A' 01000001 i binær form.
- **Numre**: Numre repræsenteres ved hjælp af forskellige binære formater, såsom heltal (numre uden brøkdele, som f.eks. `-3`, `0`) og flydende tal (numre med brøkdele, som f.eks. `3.14`, `-0.01`). For eksempel er heltallet 5 repræsenteret som 00000101 i en 8-bit binær form.
- **Lyd**: Lyddata repræsenteres typisk som en række af prøver. Disse prøver fanges med jævne mellemrum og kodificeres i binær form. For eksempel kan en 16-bit lydprøve repræsenteres som et 16-bit binært tal.
- **Billeder**: Billeder består af pixel, hver med farveværdier. I et gråskala-billede kan hver pixel være repræsenteret ved et 8-bit binært tal, der angiver dens intensitet. I et farvebillede er hver pixel normalt repræsenteret ved en kombination af binære tal, der svarer til dens røde, grønne og blå farvekomponenter.
- **Video**: Video er en sekvens af billeder (rammer) og inkluderer ofte lyd. Hver ramme er et billede repræsenteret i binær form, og rammerne vises hurtigt efter hinanden for at skabe illusionen af bevægelse.
- **Filer og Formater**: Forskellige filformater (som JPEG for billeder, MP3 for lyd, MP4 for video) definerer specifikke måder at kode data på. Disse formater bruger binær kode til at strukturere og komprimere data effektivt.

**Data kompression**

Forestil dig, at du har en kæmpe bunke legetøj, som du skal pakke ned i en lille kasse. Data kompression er som at finde en måde at arrangere og presse legetøjet sammen, så det hele passer ned i kassen uden at miste nogen af dem. I computere handler det om at gøre filer mindre, så de fylder mindre plads og er hurtigere at sende eller opbevare.

Her er et simpelt eksempel på Run-Length Encoding (RLE) algoritmen: Hvis du har en sekvens af engelske bogstaver "AAAAAAADDDDCCVSSSSSSSSS", som er 23 tegn og tager 23 bytes plads. Vi kan tælle, hvor mange gange hver bogstav gentages, og erstatte disse bogstaver med tælleren og bogstavet selv: "7A4D2C1V9S". Den nye sekvens består af 5 tællere og 5 bogstaver. Vi kan bruge én byte til at repræsentere hver tæller og bruge ASCII-koden til bogstaverne, hvilket samlet bliver 10 bytes i alt. Når vi skal dekomprimere sekvensen, læser vi en tæller og et bogstav, og gentager bogstavet i henhold til tælleren. På denne måde reducerer vi data størrelsen og bruger mindre plads.

For forskellige datatyper vælger vi ofte forskellige kompressionsalgoritmer, da hver har sine egne fordele og begrænsninger.