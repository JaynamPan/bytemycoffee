Tekijä: Jaynam Kääntäjä: AI Päivitetty 27. elokuuta 2024

## 2. Kurkistus ohjelmointiin

Tervetuloa tietokoneiden ihmeelliseen maailmaan! Ennen kuin ryhdymme ohjelmointityöhön, on tärkeää oppia lisää tietokoneista. Tutkitaanpa joitain perusasioita, jotka liittyvät tietokoneisiin ja ohjelmointiin.

### 2.1 Kuinka tietokone käsittelee tietoa

**(1) Johdatus binäärikoodiin**

Oletko koskaan miettinyt, kuinka tietokoneesi, tablettisi tai älypuhelimesi tietää, miten tehdä niin monia hienoja asioita? Kaikki liittyy siihen, kuinka se käsittelee tietoa. Aloitetaan perusasioista, kuten "binäärikoodista". Ensin mietitään, kuinka edustamme tietoa päivittäisessä elämässämme.

**Tietojen esittämistavat päivittäisessä maailmassa**

Päivittäisessä elämässämme käytämme erilaisia tapoja tietojen esittämiseen ja jakamiseen. Esimerkiksi:

- Kielillä: Olipa kyseessä kirjoitettu tai puhuttu kieli, voimme kommunikoida ja jakaa tietoa symboleilla, jotka perustuvat kirjainmuotoihin, sanoihin ja ääniin. Jokaisella kirjaimella on oma muotonsa ja merkityksensä, ja jokainen sanamme tai lauseemme välittää tietyn merkityksen.
- Graafiset symbolit ja kuvat: Liikennemerkit, piirrokset ja kuvat voivat sisältää paljon tietoa.
- Äänet: Käytämme myös erilaisia ääniä merkitysten välittämiseen. Esimerkiksi ovikellon sointi voi kertoa, että vieras on saapunut. Hälytyssireeni antaa meille varoituksia.

Samaan tapaan tietokoneet tarvitsevat erityisen järjestelmän ymmärtääkseen ja käsitelläkseen tietoa. Tämä järjestelmä on binäärikoodi, joka on kuin universaali kieli, joka koostuu vain kahdesta symbolista: 0 ja 1. Nämä symbolit toimivat yhdessä edustamaan kaikenlaista dataa, numeroista ja kirjaimista kuviin ja ääniin. "Binäärinen" viittaa "binäärijärjestelmään", joka käyttää vain kahta symbolia (0 ja 1). Ja "koodi" tarkoittaa symbolien tai sääntöjen sarjaa, jota käytetään tiedon koodaamiseen, purkamiseen tai viestimiseen tavalla, joka tekee siitä ymmärrettävää tai käyttökelpoista, erityisesti tietokoneiden ja tiedonkäsittelyn kontekstissa.

**Binaarijärjestelmä**

Päivittäisessä elämässämme käytämme yleensä kymmenen numeron järjestelmää: 0–9. Tehdäänpä yksinkertaista matematiikkaa. Kun lisäät 1:stä 0:aan, tulos on 1. Kun lisäät 1:n uudelleen, saat 2. Jos lisäät 1:n yhdeksän kertaa 0:aan, käytämme kaikkia 10 numeroa, 0:sta 9:ään. Mutta mitä tapahtuu, jos lisäät 1:n kymmenen kertaa 0:aan? Tulos on 10. Tarkastellaanpa tarkemmin "10":tä. Se koostuu "1":stä ja "0":sta, ja "1" on vasemmalla "0":sta. Jos lisäämme nämä kaksi numeroa, saamme 1 plus 0, joka on 1. Tämä yksinkertainen yhteenlasku ei kuitenkaan selitä, miten '10' edustaa numeroa, joka vastaa kymmentä meidän desimaalijärjestelmässämme.

Päivittäisessä elämässämme, ellei toisin mainita, käyttämämme numerot perustuvat "desimaalijärjestelmään". Sana "desimaali" tulee latinankielisestä sanasta "decem", joka tarkoittaa "kymmentä". "Desimaalijärjestelmä" viittaa numerojärjestelmään, joka perustuu kymmenen potensseihin. Desimaalijärjestelmässä jokaisen paikan arvo on kymmenen kertaa suurempi kuin sen oikealla puolella olevan paikan arvo. Kukin numero edustaa eri paikka-arvoa, joka desimaalijärjestelmässä on kymmenen potenssi. 

Esimerkiksi, otetaan luku 345:

- Numero 5 on "ykkösten" paikalla (10^0, kymmenen potenssiin nolla), joka edustaa 5:ttä.
- Numero 4 on "kymppien" paikalla (10^1, kymmenen potenssiin yksi), joka edustaa 4 × 10 = 40.
- Numero 3 on "satojen" paikalla (10^2, kymmenen potenssiin kaksi), joka edustaa 3 × 100 = 300.

Kun lisäämme nämä arvot yhteen (300 + 40 + 5), saamme kokonaisarvoksi 345.

Nyt tutkimme binaarijärjestelmää. Toisin kuin desimaalijärjestelmä, joka käyttää kymmentä numeroa, binaarijärjestelmä käyttää vain kahta numeroa: 0 ja 1. Jokainen binaariluvun numero edustaa kahden potenssia, ei kymmenen.

Esimerkiksi binaariluvussa 101:

- Oikeanpuoleisin numero (1) on "ykkösten" paikalla (2^0, kaksi potenssiin nolla), joka edustaa 1:stä.
- Keskimmäinen numero (0) on "kakkosten" paikalla (2^1, kaksi potenssiin yksi), joka edustaa 0 × 2 = 0.
- Vasemmanpuoleisin numero (1) on "nelosten" paikalla (2^2, kaksi potenssiin kaksi), joka edustaa 1 × 4 = 4.

Jotta löydämme binaariluvun 101 desimaalimuotoisen arvon, lisäämme nämä arvot yhteen: 4 (nelosten paikasta) + 0 (kakkosten paikasta) + 1 (ykkösten paikasta) = 5.

Näin ollen binaariluku 101 vastaa desimaalilukua 5.

**Miksi tietokoneet käyttävät binaarijärjestelmää**

Desimaalijärjestelmä on yleisimmin käytetty numerointijärjestelmä ja sitä käytetään päivittäisessä laskennassa ja aritmeettisessa toiminnassa. Ihmisillä on kymmenen sormea, mikä tekee desimaalijärjestelmästä intuitiivisen ja suoraviivaisen. Tämä luonnollinen laskentamenetelmä on todennäköisesti vaikuttanut desimaalijärjestelmän kehitykseen. Vaikka desimaalijärjestelmä on meille ihmisille yksinkertainen ja kätevä, se ei ole paras valinta tietokoneille. Sen sijaan binaarijärjestelmä on paremmin sopiva tällaisille elektronisille koneille. Syynä on tietokoneiden "anatomia".

Tietokoneet käyttävät sähköpiirejä, jotka voivat olla joko päällä tai pois päältä. Nämä kaksi tilaa on luonnollisesti edustettu binaariluvuilla 0 ja 1. Binaarijärjestelmä on ihanteellinen tietokoneille, koska se sopii täydellisesti niiden päällä/pois -sähkösignaaleihin. Käyttämällä binaaria tietokoneet voivat tehokkaasti käsitellä ja tallentaa tietoja.

CPU, tietokoneen keskeinen komponentti, perustuu transistoreihin perusyksiköinä. Transistori on pieni ja yksinkertainen piirielementti, joka voi toimia elektronisena päällä/pois -kytkimenä ja vahvistaa heikkoja sähköisiä signaaleja. Nykyaikaisissa CPU:issa on miljardeja transistoreita, jotka toimivat päällä/pois -kytkiminä tietojen käsittelyssä ja tallentamisessa. Samalla tavalla RAM-muistit, GPU:t ja SSD:t (Solid State Drive) käyttävät myös transistoreita.

Tietokoneessa lähes kaikki transistoreista toimivat päällä/pois -kytkiminä, mikä tarkoittaa, että ne toimivat vain kahdessa tilassa: päällä ja pois päältä. On siis luontevaa ja yksinkertaista käyttää 1:tä "päällä"-tilalle ja 0:aa "pois päältä"-tilalle.

**(2) Kuinka binaarikoodeilla edustetaan tietoja**

Ymmärtääksemme kuinka binaarikoodeilla edustetaan tietoja, katsotaanpa ensin, kuinka tietokone käsittelee ja tallentaa tietoja. Kun ohjelma on käynnissä, sen ohjeiden sarja ladataan RAM-muistiin. Ohjeet muista ohjelmista ovat jonossa odottamassa suoritusta. CPU noutaa jatkuvasti ohjeita tästä jonosta, yksi kerrallaan. Jokaisella kerralla, kun CPU noutaa ohjeen, se lukee RAM-muistista, ja joskus ohje voi vaatia lukemista tai kirjoittamista kovalevylle. Nykyajan CPU:t voivat käsitellä jopa 64 bittiä tietoa kerrallaan, kun taas vanhemmat CPU:t saattavat käsitellä vain 32 bittiä.

Tämä herättää useita kysymyksiä: Kuinka monta bittiä tietoa tietokoneen tulisi lukea tai kirjoittaa RAM-muistista kerrallaan? Kuinka monta bittiä meidän tulisi käyttää perusyksikkönä? Jos CPU lukisi tai kirjoittaisi vain 1 bitin kerrallaan, se olisi äärimmäisen tehottomaa ja aikaa vievää korkeiden operaatioiden taajuuden vuoksi. Siksi 64-bittinen CPU yleensä lukee tai kirjoittaa 64 bittiä tietoa kerrallaan, ja 32-bittinen CPU käsittelee 32 bittiä kerrallaan tasapainottaakseen suorituskyvyn ja tehokkuuden. RAM-muistit käyttävät tyypillisesti 8 bittiä perusyksikkönä.

8-bittisen yksikön valinta RAM-muistille on saanut vaikutteita historiallisista, teknologisista ja standardointitekijöistä. Varhaiset tietokoneet käyttivät erilaisia datakokoyksiköitä, mutta teknologian kehittyessä 8-bittinen yksikköstä tuli yleisempi. Tämä koko löysi tasapainon tehokkuuden ja kyvykkyyden välillä, erityisesti merkkien ja tietojen edustamisessa.

**ASCII Koodi**

ASCII (American Standard Code for Information Interchange) on merkintästandardi, jota käytetään tekstin esittämiseen tietokoneissa ja muissa tekstipohjaisissa laitteissa. Se on perustana monille nykyaikaisille koodausmenetelmille. ASCII käyttää 7-bittistä binaarikoodia, mikä mahdollistaa 128 ainutlaatuisen merkin koodaamisen, koodit vaihtelevat 0:sta 127:ään.

Standardoitu ASCII-merkit sisältävät:

- Ohjausmerkit (0–31):

  Nämä ovat ei-tulostettavia merkkejä, jotka hallitsevat tekstinkäsittelyä. Esimerkkejä:

  - `0` (NUL): Nollamerkki
  - `9` (TAB): Vaakasuuntainen tabulaattori
  - `10` (LF): Rivinvaihto (newline)
  - `13` (CR): Palautusmerkki

- Tulostettavat merkit (32–127):

  Nämä ovat näkyviä merkkejä, kuten kirjaimia, numeroita, välimerkkejä ja symboleja. Esimerkkejä:

  - `32` (SPACE): Väli
  - `65` (A): Suurilla kirjaimilla A
  - `97` (a): Pienillä kirjaimilla a
  - `48` (0): Numero 0
  - `33` (!): Huutomerkki

ASCII-koodit käyttävät 7 bittiä, mikä voi koodata 128 merkkiä, mutta nykyaikaiset tietokoneet käyttävät 8 bittiä perusyksikkönä. Tämä 8-bittinen yksikkö, tai tavu, mahdollistaa 256 merkin koodaamisen, mikä riittää yleensä englannille ja muille lännen kielille. Monimutkaisempien kielten kohdalla käytetään lisäbytejä merkkien esittämiseen, mikä varmistaa tehokkaan muistinkäytön ja tallennustilan. Vaikka ASCII itse vaatii vain 7 bittiä, 8-bittinen esitys on yleinen tietokoneissa, lisäbitti on yleensä asetettu nollaksi. Esimerkiksi suurilla kirjaimilla "A" ASCII-koodi on 65 (desimaali) tai 01000001 (binaari), lisäbitti on nolla.

**Matemaattisten operaattorien symbolit tietokoneissa**

Tavallisessa näppäimistössä saatat huomata joidenkin matemaattisten symbolien puuttuvan, kuten kertolaskun merkin (×). Sen sijaan tietokoneet käyttävät usein vaihtoehtoisia symboleja yksinkertaisuuden vuoksi. Tässä on joitakin yleisiä esimerkkejä:

- Kertolasku: `*`
- Jakolasku: `/`
- Jäännös (jakolaskun jälkeen jäävä osa): `%`
- Potenssi: `**` (käytetään usein ohjelmointikielissä kuten Pythonissa), ja joissakin tapauksissa `^` (yleisesti käytetty laskimissa).

Nämä symbolit ovat käytössä aritmeettisten operaatioiden suorittamiseen eri ohjelmointiympäristöissä ja laskimissa.

**Tietokannan koko-yksiköt**

Nykyisin tietokoneet käyttävät 8 bittiä perusyksikkönä, jota kutsutaan tavaksi tavuiksi (B). Tässä katsaus muihin yleisiin tietokannan koko-yksiköihin ja niiden muunnoksiin:

- Bitti (b, pienellä kirjaimella): Pienin tietokannan yksikkö. Se edustaa binaarista numeroa, joka voi olla joko `0` tai `1`.
- Tavu (B, isolla kirjaimella): Perusyksikkö, joka koostuu 8 bitistä.

Suurimmille mittauksille käytetään kahta erilaista muunnosta: binaarista ja desimaalista. Binaariset yksiköt perustuvat kahden potensseihin, kun taas desimaaliset yksiköt käyttävät kymmenen potensseja. Tietojenkäsittelyssä binaariset yksiköt ovat standardi, kun taas desimaaliset yksiköt ovat usein käytössä markkinoinnissa. Aloittaen tavusta, suurempi binaarinen yksikkö on 2^10 (1024) kertaa edellistä pienempi yksikkö, kun taas suurempi desimaalinen yksikkö on 10^3 (1000) kertaa edellistä pienempi yksikkö.

Binaaripohjaiset yksiköt:

- Kilotavu (KB): 1 KB = 1,024 tavua (2^10 tavua).
- Megatavu (MB): 1 MB = 1,024 KB = 1,048,576 tavua (2^20 tavua).
- Gigatavu (GB): 1 GB = 1,024 MB = 1,073,741,824 tavua (2^30 tavua).
- Teratavu (TB): 1 TB = 1,024 GB = 1,099,511,627,776 tavua (2^40 tavua).

Desimaalipohjaiset yksiköt:

- Kilotavu (KB): 1 KB = 1,000 tavua (10^3 tavua).
- Megatavu (MB): 1 MB = 1,000 KB = 1,000,000 tavua (10^6 tavua).
- Gigatavu (GB): 1 GB = 1,000 MB = 1,000,000,000 tavua (10^9 tavua).
- Teratavu (TB): 1 TB = 1,000 GB = 1,000,000,000,000 tavua (10^12 tavua).

Binaaristen mittausten erottamiseksi desimaalimitoista, IEC (Kansainvälinen sähkötekniikan komissio) on esitellyt "bi"-etuliitteen näille yksiköille, joka tarkoittaa "binaarista". Näillä yksiköillä on samat arvot kuin binaarimuunnoksissa, mutta ne ovat erottuvampia nimiä.

- Kibitavu (KiB): 1 KiB = 1,024 tavua (2^10 tavua).
- Mebitavu (MiB): 1 MiB = 1,024 KiB = 1,048,576 tavua (2^20 tavua).
- Gibitavu (GiB): 1 GiB = 1,024 MiB = 1,073,741,824 tavua (2^30 tavua).
- Tebitavu (TiB): 1 TiB = 1,024 GiB = 1,099,511,627,776 tavua (2^40 tavua).

Desimaalimuunnoksia käytetään usein markkinoinnissa, koska ne tuottavat suurempia lukuja samalle tallennuskapasiteetille. Esimerkiksi kiintolevy, joka on merkitty 500 GB (desimaalina), on itse asiassa 500,000,000,000 tavua, mikä on noin 465 GiB (binaarimuunnoksella).

**Binääriesitykset eri tietotyypeille**

Kaikki tiedot, riippumatta niiden tyypistä, esitetään lopulta binäärimuodossa. Tietokoneet käsittelevät ja tallentavat dataa nollien ja ykkösten sekvensseinä. Tekstin, kuvan, äänen tai muiden tietotyyppien tallentamiseksi meidän on "käännettävä" ne binäärikoodiksi, jota kutsutaan "koodaukseksi". Kun tarvitsemme näitä tietoja ihmisystävällisessä muodossa, ohjelmistot tulkitsevat binäärikoodin ja muuntavat sen tekstiksi, kuvaksi ja muiksi ymmärrettäviksi muodoiksi, mitä kutsutaan "dekoodaamiseksi".

Tässä on esimerkkejä eri tietotyyppien koodauksista:

- **Teksti**: Merkit esitetään koodausstandardeilla, kuten ASCII tai Unicode. Jokaiselle merkille annetaan ainutlaatuinen binäärikoodi. Esimerkiksi ASCII-koodi 'A':lle on 01000001 binäärimuodossa.
- **Numerot**: Numerot esitetään eri binääriformaateissa, kuten kokonaislukuina (numerot ilman murto-osia, esimerkiksi `-3`, `0`) ja liukulukuina (numerot murto-osilla, kuten `3.14`, `-0.01`). Esimerkiksi kokonaisluku 5 on 00000101 8-bittisessä binäärimuodossa.
- **Ääni**: Äänidata esitetään tyypillisesti sarjana näytteitä. Nämä näytteet otetaan säännöllisin välein ja koodataan binäärimuotoon. Esimerkiksi 16-bittinen ääninäyte voi olla 16-bittinen binääriluku.
- **Kuvat**: Kuvat koostuvat pikseleistä, joilla on väriarvot. Harmaasävykuvassa kukin pikseli voi olla 8-bittinen binääriluku, joka ilmaisee sen kirkkauden. Väri-kuvassa kukin pikseli esitetään yleensä yhdistelmänä binäärilukuja, jotka vastaavat sen punaisen, vihreän ja sinisen värikomponentteja.
- **Video**: Video on kuvien (kehysten) sarja ja usein sisältää ääntä. Kukin kehys on kuva, joka on esitetty binäärimuodossa, ja kehykset näytetään nopeasti peräkkäin luodakseen liikkeen illuusion.
- **Tiedostot ja formaatit**: Erilaiset tiedostomuodot (kuten JPEG kuville, MP3 äänelle, MP4 videolle) määrittelevät tavat koodata dataa. Nämä muodot käyttävät binäärikoodia datan rakenteen ja pakkaamisen tehokkuuden varmistamiseksi.

**Tietojen pakkaaminen**

Kuvittele, että sinulla on valtava määrä leluja, jotka sinun täytyy pakata pieneen laatikkoon. Tietojen pakkaaminen on kuin lelujen järjestämistä ja pienentämistä, jotta kaikki mahtuvat laatikkoon menettämättä yhtään niistä. Tietokoneissa tämä tarkoittaa tiedostojen pienentämistä niin, että ne vievät vähemmän tilaa ja niitä on nopeampi lähettää tai tallentaa.

Tässä on yksinkertainen esimerkki Run-Length Encoding (RLE) -algoritmista: jos sinulla on englanninkielinen merkkijono "AAAAAAADDDDCCVSSSSSSSSS", joka on 23 merkkiä ja vie 23 tavua tilaa. Voimme laskea, kuinka monta kertaa kukin kirjain toistuu ja korvata nämä kirjaimet laskemalla ja itse kirjaimella: "7A4D2C1V9S". Uusi merkkijono koostuu 5 laskusta ja 5 kirjaimesta. Voimme käyttää yhtä tavua esittämään kunkin laskennan ja ASCII-koodia kirjaimille, mikä yhteensä vie 10 tavua. Kun meidän tarvitsee purkaa merkkijono, luemme laskennan ja kirjaimen, ja toistamme kirjaimen laskennan mukaan. Näin pienennämme tiedon kokoa ja käytämme vähemmän tilaa.

Eri tietotyyppien kanssa käytämme yleensä erilaisia pakkausalgoritmeja, sillä jokaisella on omat etunsa ja rajoituksensa.