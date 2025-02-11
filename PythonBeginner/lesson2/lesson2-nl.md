Auteur: Jaynam Vertaler: AI Bijgewerkt op 27 augustus 2024

## 2. Een kijkje in de wereld van programmeren

Welkom in de fantastische wereld van computers! Voordat we aan de slag gaan met programmeren, is het belangrijk om meer te leren over computers. Laten we enkele basisaspecten van computers in relatie tot programmeren verkennen.

### 2.1 Hoe een computer informatie verwerkt

**(1) Introductie tot binaire code**

Heb je je ooit afgevraagd hoe jouw computer, tablet of smartphone zoveel coole dingen kan doen? Het draait allemaal om hoe deze apparaten informatie verwerken. Laten we beginnen met de basis van dit proces, te beginnen met iets dat "binaire code" wordt genoemd. Laten we eerst nadenken over hoe we informatie in ons dagelijks leven vertegenwoordigen.

**Manieren om informatie in onze dagelijkse wereld te vertegenwoordigen**

In ons dagelijks leven gebruiken we verschillende manieren om informatie te vertegenwoordigen en te delen. Bijvoorbeeld:

- Talen: Of het nu geschreven of gesproken is, we kunnen communiceren en informatie delen door symbolen gebaseerd op letters, woorden en geluiden. Elke letter heeft een specifieke vorm en betekenis, en elke zin die we zeggen, draagt specifieke informatie over.
- Grafische symbolen en afbeeldingen: Verkeersborden, tekeningen en afbeeldingen kunnen veel informatie bevatten.
- Geluiden: We gebruiken ook verschillende geluiden om bepaalde betekenissen over te brengen. Een deurbel kan ons vertellen dat er een bezoeker is. Een sirene kan ons waarschuwen voor gevaar.

Op dezelfde manier hebben computers een speciaal systeem nodig om informatie te begrijpen en te verwerken. Dit systeem is binaire code, wat een universele taal is die bestaat uit slechts twee symbolen: 0 en 1. Deze symbolen werken samen om allerlei soorten gegevens voor te stellen, van nummers en letters tot afbeeldingen en geluiden. "Binair" verwijst naar het "binaire systeem", dat alleen twee symbolen (0 en 1) gebruikt. En "code" betreft het gebruik van een set symbolen of regels om informatie te coderen, decoderen of te communiceren op een manier die begrijpelijk of bruikbaar is, vooral in de context van computers en informatieverwerking.

**Het binaire systeem**

In ons dagelijks leven gebruiken we meestal getallen op basis van 10 cijfers: 0 tot 9. Laten we wat simpele wiskunde doen. Als je 1 optelt bij 0, krijg je 1. Tel je opnieuw 1 op, dan krijg je 2. Als we 1 negen keer bij 0 optellen, gebruiken we alle 10 cijfers van 0 tot 9. Maar wat als we 1 tien keer bij 0 optellen? Het resultaat is 10. Laten we eens goed kijken naar "10". Het bestaat uit "1" en "0", waarbij "1" links van "0" staat. Als we de twee cijfers van "10" bij elkaar optellen, is 1 plus 0 gelijk aan 1. Deze simpele optelling legt echter niet uit hoe '10' een getal vertegenwoordigt dat gelijk is aan 10 in ons decimale systeem.

In het dagelijks leven gebruiken we, tenzij anders aangegeven, getallen op basis van het "decimale systeem". Het woord "decimaal" komt van het Latijnse woord "decem", wat "tien" betekent. Het "decimale systeem" verwijst naar een getalssysteem op basis van machten van tien. In het decimale systeem is elke plaatswaarde tien keer de waarde van de plaats rechts ervan. Elk cijfer in een getal vertegenwoordigt een andere plaatswaarde, die in het decimale systeem een macht van tien is.

Bijvoorbeeld, neem het getal 345:

- Het cijfer 5 staat op de "eenzamen" plaats (10^0, tien tot de macht nul), wat 5 vertegenwoordigt.
- Het cijfer 4 staat op de "tientallen" plaats (10^1, tien tot de macht één), wat 4 × 10 = 40 vertegenwoordigt.
- Het cijfer 3 staat op de "honderdtallen" plaats (10^2, tien tot de macht twee), wat 3 × 100 = 300 vertegenwoordigt.

Door deze waarden bij elkaar op te tellen (300 + 40 + 5) krijgen we de totale waarde van 345.

Laten we nu het binaire systeem verkennen. In tegenstelling tot het decimale systeem, dat tien cijfers gebruikt, gebruikt het binaire systeem slechts twee cijfers: 0 en 1. Elk cijfer in een binair getal vertegenwoordigt een macht van 2, niet 10.

Bijvoorbeeld, in het binaire getal 101:

- Het rechtercijfer (1) staat op de "eenheden" plaats (2^0, twee tot de macht nul), wat 1 vertegenwoordigt.
- Het middelste cijfer (0) staat op de "tweeën" plaats (2^1, twee tot de macht één), wat 0 × 2 = 0 vertegenwoordigt.
- Het linkercijfer (1) staat op de "vieren" plaats (2^2, twee tot de macht twee), wat 1 × 4 = 4 vertegenwoordigt.

Om de decimale waarde van het binaire getal 101 te vinden, tel je deze waarden bij elkaar op: 4 (van de "vieren" plaats) + 0 (van de "tweeën" plaats) + 1 (van de "eenheden" plaats) = 5.

Dus, het binaire getal 101 komt overeen met het decimale getal 5.

**Waarom gebruiken computers het binaire systeem**

Het decimale systeem is het meest gebruikte getalsysteem en wordt gebruikt bij dagelijks tellen en rekenen. Mensen hebben tien vingers, wat het tellen in het decimale systeem intuïtief en eenvoudig maakt. Deze natuurlijke telmethode heeft waarschijnlijk de ontwikkeling van het decimale systeem beïnvloed. Terwijl het decimale systeem eenvoudig en handig is voor ons mensen, is het niet de beste keuze voor computers. Het binaire systeem is geschikter voor elektronische machines. De reden ligt in de "anatomie" van computers.

Computers gebruiken elektrische circuits die aan of uit kunnen zijn. Deze twee toestanden worden natuurlijk weergegeven door de binaire cijfers 0 en 1. Binaire codering is ideaal voor computers omdat het perfect aansluit bij hun aan/uit elektrische signalen. Door binaire codering kunnen computers gegevens efficiënt verwerken en opslaan.

De CPU, een belangrijk onderdeel van een computer, vertrouwt op transistors als fundamentele eenheden. Een transistor is een klein en eenvoudig circuitonderdeel dat fungeert als elektronische aan/uit schakelaars en zwakke elektrische signalen kan versterken. Moderne CPU's bevatten miljarden transistors, die functioneren als aan/uit schakelaars voor gegevensverwerking en -opslag. Evenzo gebruiken RAM, GPU's en SSD's (Solid State Drives) ook transistors.

In een computer functioneren bijna alle transistors als aan/uit schakelaars, wat betekent dat ze opereren in slechts twee toestanden: aan en uit. Het is dus natuurlijk en eenvoudig om 1 te gebruiken voor de "aan" toestand en 0 voor de "uit" toestand.

**(2) Hoe binaire code gegevens vertegenwoordigt**

Om te begrijpen hoe binaire code gegevens vertegenwoordigt, moeten we eerst kijken naar hoe een pc informatie verwerkt en opslaat. Wanneer een programma draait, worden de reeks instructies geladen in het RAM. Samen met instructies van andere programma's worden deze in de wachtrij gezet voor uitvoering. De CPU haalt continu instructies uit deze wachtrij, één voor één. Elke keer dat de CPU een instructie ophaalt, leest hij uit het RAM, en soms houdt de instructie in dat er gelezen of geschreven wordt naar de harde schijf. Moderne CPU's kunnen tot 64 bits aan gegevens tegelijk verwerken, terwijl oudere CPU's mogelijk slechts tot 32 bits verwerken.

Dit roept verschillende vragen op: Hoeveel bits gegevens moet een computer tegelijkertijd lezen of schrijven vanuit het RAM? Hoeveel bits moeten we gebruiken als de basiseenheid? Als een CPU slechts 1 bit tegelijk zou lezen of schrijven, zou dit extreem inefficiënt en tijdrovend zijn door de hoge frequentie van de benodigde bewerkingen. Daarom leest of schrijft een 64-bit CPU doorgaans 64 bits aan gegevens tegelijk, en een 32-bit CPU verwerkt 32 bits tegelijk om prestaties en efficiëntie te balanceren. RAM gebruikt doorgaans 8 bits als basis eenheid.

De keuze voor een 8-bits eenheid voor RAM wordt beïnvloed door historische, technologische en standaardiseringsfactoren. Vroege computers gebruikten verschillende groottes voor gegevensunits, maar naarmate de technologie vorderde, werd de 8-bits eenheid gebruikelijker. Deze grootte vond een balans tussen efficiëntie en mogelijkheden, vooral voor het vertegenwoordigen van tekens en gegevens.

**ASCII-code**

ASCII (American Standard Code for Information Interchange) is een tekencoderingstandaard die wordt gebruikt om tekst in computers en andere tekstgebaseerde apparaten weer te geven. Het is de basis voor veel moderne coderingsschema's. ASCII gebruikt een 7-bit binair nummer, wat ruimte biedt voor 128 unieke tekens, met codes variërend van 0 tot 127.

Standaard ASCII-tekens omvatten:

- Controle Tekens (0–31):

  Dit zijn niet-afdrukbare tekens die tekstverwerking controleren. Voorbeelden zijn:

  - `0` (NUL): Null-tekens
  - `9` (TAB): Horizontale tab
  - `10` (LF): Line feed (nieuwe regel)
  - `13` (CR): Carriage return

- Afdrukbare Tekens (32–127):

  Dit zijn zichtbare tekens zoals letters, cijfers, leestekens en symbolen. Voorbeelden zijn:

  - `32` (SPACE): Spatieteken
  - `65` (A): Hoofdletter A
  - `97` (a): Kleine letter a
  - `48` (0): Cijfer 0
  - `33` (!): Uitroepteken

ASCII-codes maken gebruik van 7 bits, wat 128 tekens kan coderen, maar moderne computers gebruiken 8 bits als de basisgegevens eenheid. Deze 8-bit eenheid, of byte, maakt het mogelijk om 256 tekens te coderen, wat over het algemeen voldoende is voor het Engels en andere Westerse talen. Voor complexere talen worden extra bytes gebruikt om tekens weer te geven, wat zorgt voor efficiënte geheugengebruik en opslag. Hoewel ASCII zelf slechts 7 bits vereist, is een 8-bit representatie gebruikelijk in computers, waarbij de extra bit meestal op 0 staat. Bijvoorbeeld, de ASCII-code voor hoofdletter "A" is 65 (decimaal) of 01000001 (binair), waarbij de extra bit nul is.

**Enkele wiskundige operator-symbolen op de computer**

Op een standaardtoetsenbord merk je misschien de afwezigheid op van sommige wiskundige symbolen, zoals het vermenigvuldigteken (×). In plaats daarvan gebruiken computers vaak alternatieve symbolen voor eenvoud. Hier zijn enkele veelvoorkomende voorbeelden:

- Vermenigvuldiging: `*`
- Deel: `/`
- Modulo (rest van de deling): `%`
- Exponentiatie: `**` (vaak gebruikt in programmeertalen zoals Python), en in sommige gevallen, `^` (meestal gebruikt in rekenmachines).

Deze symbolen worden gebruikt om rekenkundige bewerkingen uit te voeren in verschillende programmeeromgevingen en rekenmachines.

**Gegevensgrootte-eenheden**

Moderne computers gebruiken 8 bits als de basiseenheid voor gegevens, bekend als een byte (B). Hier is een overzicht van andere gangbare gegevensgrootteeenheden en hun conversies:

- Bit (b, in kleine letters): De kleinste gegevensunit in de informatica. Het vertegenwoordigt een binaire cijfer, dat `0` of `1` kan zijn.
- Byte (B, in hoofdletters): De basiseenheid voor gegevens, bestaande uit 8 bits.

Voor grotere metingen worden twee verschillende conversies gebruikt: binair en decimaal. Binaire eenheden zijn gebaseerd op machten van 2, terwijl decimale eenheden machten van 10 gebruiken. In de informatica zijn binaire eenheden standaard, terwijl decimale eenheden vaak in marketing worden gebruikt. Vanaf de byte is een grotere binaire eenheid 2^10 (1024) keer de eerste kleinere eenheid, terwijl een grotere decimale eenheid 10^3 (1000) keer de eerste kleinere eenheid is.

Binaire eenheden:

- Kilobyte (KB): 1 KB = 1.024 bytes (2^10 bytes).
- Megabyte (MB): 1 MB = 1.024 KB = 1.048.576 bytes (2^20 bytes).
- Gigabyte (GB): 1 GB = 1.024 MB = 1.073.741.824 bytes (2^30 bytes).
- Terabyte (TB): 1 TB = 1.024 GB = 1.099.511.627.776 bytes (2^40 bytes).

Decimale eenheden:

- Kilobyte (KB): 1 KB = 1.000 bytes (10^3 bytes).
- Megabyte (MB): 1 MB = 1.000 KB = 1.000.000 bytes (10^6 bytes).
- Gigabyte (GB): 1 GB = 1.000 MB = 1.000.000.000 bytes (10^9 bytes).
- Terabyte (TB): 1 TB = 1.000 GB = 1.000.000.000.000 bytes (10^12 bytes).

Om binaire metingen duidelijk te onderscheiden van decimale, heeft de IEC (International Electrotechnical Commission) de "bi" prefix geïntroduceerd voor die eenheden, wat staat voor "binaire". Deze eenheden hebben dezelfde waarden als de binaire conversie, maar met duidelijkere namen.

- Kibibyte (KiB): 1 KiB = 1.024 bytes (2^10 bytes).
- Mebibyte (MiB): 1 MiB = 1.024 KiB = 1.048.576 bytes (2^20 bytes).
- Gibibyte (GiB): 1 GiB = 1.024 MiB = 1.073.741.824 bytes (2^30 bytes).
- Tebibyte (TiB): 1 TiB = 1.024 GiB = 1.099.511.627.776 bytes (2^40 bytes).

Decimale conversies worden vaak in marketing gebruikt omdat ze grotere cijfers produceren voor dezelfde opslagcapaciteit. Bijvoorbeeld, een harde schijf die wordt aangeduid met 500 GB (decimaal) is in werkelijkheid 500.000.000.000 bytes, wat ongeveer 465 GiB (binair) is.

**Binaire representaties voor verschillende gegevenssoorten**

Alle gegevens, ongeacht hun type, worden uiteindelijk in binaire vorm weergegeven. Gegevens worden verwerkt en opgeslagen als reeksen van 0’s en 1’s in computers. Om tekst, afbeeldingen, audio of andere soorten gegevens op te slaan, moeten we deze "vertalen" naar binaire code, wat "codering" wordt genoemd. Wanneer we deze gegevens op een manier moeten gebruiken die voor mensen begrijpelijk is, interpreteert software de binaire code om deze om te zetten in tekst, afbeeldingen en andere formaten die we kunnen begrijpen, wat "decodering" wordt genoemd.

Hier zijn enkele voorbeelden van het coderen van verschillende gegevenssoorten:

- **Tekst**: Tekens worden weergegeven met behulp van coderingsnormen zoals ASCII of Unicode (Universele Code). Elk teken krijgt een unieke binaire code. Bijvoorbeeld, de ASCII-code voor 'A' is 01000001 in binaire vorm.
- **Getallen**: Getallen worden weergegeven met behulp van verschillende binaire formaten, zoals gehele getallen (getallen zonder fracties, zoals `-3`, `0`) en drijvende-kommagetallen (getallen met fracties, zoals `3.14`, `-0.01`). Bijvoorbeeld, het gehele getal 5 is 00000101 in een 8-bits binaire representatie.
- **Audio**: Audiogegevens worden doorgaans weergegeven als een reeks samples. Deze samples worden op regelmatige intervallen vastgelegd en gecodeerd in binaire vorm. Bijvoorbeeld, een 16-bits audio sample kan worden weergegeven als een 16-bits binaire getal.
- **Afbeeldingen**: Afbeeldingen bestaan uit pixels, elk met kleurwaarden. In een grijswaarde-afbeelding kan elke pixel worden weergegeven door een 8-bits binaire getal die zijn intensiteit aangeeft. In een kleurafbeelding wordt elke pixel meestal weergegeven door een combinatie van binaire getallen die de rode, groene en blauwe kleurcomponenten vertegenwoordigen.
- **Video**: Video is een reeks afbeeldingen (frames) en bevat vaak audio. Elk frame is een afbeelding die in binaire vorm wordt weergegeven, en de frames worden snel achter elkaar weergegeven om de illusie van beweging te creëren.
- **Bestanden en Indelingen**: Verschillende bestandsindelingen (zoals JPEG voor afbeeldingen, MP3 voor audio, MP4 voor video) definiëren specifieke manieren om gegevens te coderen. Deze formaten gebruiken binaire code om de gegevens efficiënt te structureren en te comprimeren.

**Gegevenscompressie**

Stel je voor dat je een enorme stapel speelgoed hebt die je in een kleine doos moet pakken. Gegevenscompressie is alsof je een manier zoekt om het speelgoed te rangschikken en in te krimpen zodat alles in de doos past zonder iets te verliezen. In computers gaat het erom bestanden kleiner te maken zodat ze minder ruimte innemen en sneller verzonden of opgeslagen kunnen worden.

Hier is een eenvoudig voorbeeld van het Run-Length Encoding (RLE) algoritme: als je een reeks Engelse letters hebt zoals "AAAAAAADDDDCCVSSSSSSSSS", die 23 tekens bevat en 23 bytes ruimte in beslag neemt. We kunnen tellen hoe vaak elke letter herhaald wordt en deze letters vervangen door de telling en de letter zelf: "7A4D2C1V9S". De nieuwe reeks bestaat uit 5 tellingen en 5 letters. We kunnen één byte gebruiken om elke telling weer te geven en de ASCII-code voor de letters gebruiken, wat in totaal 10 bytes maakt. Wanneer we de reeks moeten decomprimeren, lezen we een telling en een letter, en herhalen we de letter volgens de telling. Op deze manier verkleinen we de gegevensomvang en gebruiken we minder ruimte.

Voor verschillende gegevenssoorten kiezen we meestal verschillende compressie-algoritmen, omdat elk zijn eigen voordelen en beperkingen heeft.