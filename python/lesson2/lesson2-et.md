Autor: Jaynam, Tõlkija: AI, Uuendatud: 27. august 2024

## 2. Uurime arvutite maailma

Tere tulemast arvutite imelistesse maailmadesse! Enne kui hakkame programmeerimisega tegelema, on vajalik rohkem teada saada arvutitest. Alustame mõningate arvutitega seotud põhiliste asjade uurimist.

### 2.1 Kuidas arvuti töötleb teavet

**(1) Sissejuhatus binaarkoodi**

Kas oled kunagi mõelnud, kuidas sinu arvuti, tahvelarvuti või nutitelefon teab, kuidas teha nii palju ägedaid asju? Kõik käib selle kaudu, kuidas nad teavet töötlevad. Alustame selle protsessi põhitõdedest, alustades asjast, mida kutsutakse "binaarkoodiks". Mõelgem kõigepealt, kuidas me esindame teavet igapäevaelus.

**Teabe esindamise viisid igapäevaelus**

Igapäevaelus kasutame erinevaid viise teabe esindamiseks ja jagamiseks. Näiteks:

- Keeled: Kirjalikult või suuliselt saame suhelda ja teavet jagada sümbolite kaudu, mis põhinevad kirjutatud tähtedel, sõnadel ja helidel. Igal tähel on konkreetne kuju ja tähendus ning iga meie öeldud sõna või lause edastab teatud tähenduse.
- Graafilised sümbolid ja pildid: Liiklusmärgid, joonistused ja pildid võivad sisaldada palju teavet.
- Helid: Kasutame ka erinevaid helisid mõistete edastamiseks. Ukselingi heli võib meelde tuletada, et külastaja tuli. Signaali häire annab meile mõningaid hoiatusi.

Sama moodi vajavad arvutid erilist süsteemi, et mõista ja töödelda teavet. See süsteem on binaarkood, mis on nagu universaalne keel, mis koosneb ainult kahest sümbolist: 0 ja 1. Need sümbolid töötavad koos, et esindada erinevat tüüpi andmeid, alates numbritest ja tähtedest kuni piltide ja helideni. "Binaarne" viitab "binaarsüsteemile", mis kasutab ainult kahte sümbolit (0 ja 1). Ja "kood" hõlmab sümbolite või reeglite komplekti kasutamist, et kodeerida, dekodeerida või edastada teavet viisil, mis teeb selle arusaadavaks või kasutatavaks, eriti arvutite ja teabe töötlemise kontekstis.

**Binaarsüsteem**

Igapäevaelus kasutame tavaliselt kümnendsüsteemi, kus on 10 erinevat numbrit: 0 kuni 9. Teeme lihtsat matemaatikat. Kui liidame 0-le 1, saame tulemuseks 1. Kui lisame 1 veel kord, saame 2. Kui lisame 1 kokku 9 korda, kasutame kõiki kümmet numbrit 0-st 9-ni. Aga mis juhtub, kui lisame 1 kümme korda? Tulemuseks on 10. Kui vaatame lähemalt numbrit "10", siis see koosneb "1"-st ja "0"-st, kus "1" on "0" vasakul. Kui liidame "10" kaks numbrit, saame 1 plus 0, mis on 1. Kuid see lihtne liitmine ei selgita, kuidas "10" esindab arvu, mis meie kümnendsüsteemis on 10.

Igapäevaelus, kui pole täpsustatud teisiti, kasutame me kümnendsüsteemi. Sõna "kümnendsüsteem" tuleneb ladina sõnast "decem", mis tähendab "kümme". "Kümnendsüsteem" viitab numbrisüsteemile, mis põhineb kümnendikeelsetel väärtustel. Kümnendsüsteemis on iga positsiooni väärtus kümme korda suurem kui selle paremal olev positsioon. Iga number esindab erinevat positsiooniväärtust, mis kümnendsüsteemis on kümne astme võim.

Näiteks numbris 345:

- Number 5 on "ühikute" kohal (10^0, kümme astmes null), mis esindab 5.
- Number 4 on "kümnete" kohal (10^1, kümme astmes üks), mis esindab 4 × 10 = 40.
- Number 3 on "sajandite" kohal (10^2, kümme astmes kaks), mis esindab 3 × 100 = 300.

Liites need väärtused kokku (300 + 40 + 5), saame kogu väärtuseks 345.

Nüüd vaatame binaarsüsteemi. Erinevalt kümnendsüsteemist, mis kasutab kümmet numbrit, kasutab binaarsüsteem ainult kahte numbrit: 0 ja 1. Iga binaarnumbri digitaalne positsioon esindab 2 astme võimu, mitte 10.

Näiteks binaarnumberis 101:

- Äärmuslik vasakpoolne number (1) on "neljade" kohal (2^2, kaks astmes kaks), mis esindab 1 × 4 = 4.
- Keskmine number (0) on "kaheteiste" kohal (2^1, kaks astmes üks), mis esindab 0 × 2 = 0.
- Äärmuslik parempoolne number (1) on "ühikute" kohal (2^0, kaks astmes null), mis esindab 1.

Kümnendsüsteemi väärtuse leidmiseks binaar numberist 101, liidame need väärtused kokku: 4 (neljade kohal) + 0 (kaheteiste kohal) + 1 (ühikute kohal) = 5.

Seega binaar number 101 võrdub kümnendsüsteemi arvuga 5.

**Miks arvutid kasutavad binaarsüsteemi**

Decimal-süsteem on kõige enam kasutatav arvutussüsteem, mida kasutatakse igapäevases lugemises ja arvutustes. Inimestel on kümme sõrme, mis muudab kümnend-süsteemis arvestamise intuitiivseks ja lihtsaks. See loomulik arvestusmeetod tõenäoliselt mõjutas kümnend-süsteemi arengut. Kuigi kümnend-süsteem on inimeste jaoks lihtne ja mugav, ei ole see arvutitele kõige sobivam. Selle asemel on binaarsüsteem arvutitele paremini sobiv. Põhjus peitub arvutite "anatoomias".

Arvutid kasutavad elektroonilisi vooluringe, mis võivad olla kas sisse lülitatud või välja lülitatud. Neid kahte olekut esindavad loomulikult binaarsed numbrid 0 ja 1. Binaar on arvutitele ideaalne, kuna see sobib hästi nende sisse/välja elektriliste signaalidega. Binaari kasutamine võimaldab arvutitel andmeid tõhusalt töödelda ja salvestada.

Protsessor, mis on arvuti peamine komponent, toetub transistori põhielementidele. Transistor on väike ja lihtne vooluringi element, mis toimib elektrooniliste sisse/välja lülititena ja võimendab nõrku elektrilisi signaale. Kaasaegsed protsessorid sisaldavad miljardeid transistore, mis toimivad sisse/välja lülititena andmete töötlemiseks ja salvestamiseks. Samuti kasutavad RAM-id, GPU-d ja SSD-d (Solid State Drive) transistore.

Arvutis töötavad praktiliselt kõik transistorid sisse/välja lülititena, mis tähendab, et nad töötavad vaid kahes olekus: sisse ja välja. Seega on loomulik ja lihtne kasutada 1 tähistamiseks "sisse" olekut ja 0 tähistamiseks "välja" olekut.

**(2) Kuidas binaarkood esindab andmeid**

Kuna saame aru, kuidas binaarkood esindab andmeid, vaatame esmalt, kuidas arvuti töötleb ja salvestab teavet. Kui programm töötab, laaditakse selle käsud RAM-i. Koos teiste programmide käskudega järgitakse neid täitmiseks. Protsessor tõmbab pidevalt käske sellest järjekorrast, üks kord korraga. Iga kord, kui protsessor käsku tõmbab, loeb ta RAM-ist, ja mõnikord võib käsk tähendada lugemist või kirjutamist kõvakettale. Kaasaegsed protsessorid saavad töödelda kuni 64 bitti andmeid korraga, samas kui vanemad protsessorid võivad töödelda ainult kuni 32 bitti.

See tõstatab mitmeid küsimusi: kui palju bitte peaks arvuti korraga RAM-ist lugema või kirjutama? Kui palju bitte peaksime kasutama põhielemendina? Kui protsessor loeks või kirjutaks ainult 1 bitti korraga, oleks see äärmiselt ebaefektiivne ja aeganõudev, kuna toimingute sagedus oleks väga kõrge. Seetõttu loeb või kirjutab 64-bitine protsessor tavaliselt korraga 64 bitti andmeid ja 32-bitine protsessor töödelda 32 bitti korraga, et tasakaalustada jõudlust ja efektiivsust. RAM kasutab tavaliselt 8 biti põhielemendina.

8-bitise üksuse valik RAM-is on mõjutatud ajaloolistest, tehnoloogilistest ja standardiseerimisfaktorist. Varasemad arvutid kasutasid erinevaid andmeühikute suurusi, kuid tehnoloogia arenedes sai 8-bitine üksus üha tavalisemaks. See suurus pakkus tasakaalu efektiivsuse ja võimekuse vahel, eriti tähemärkide ja andmete esitlemiseks.

**ASCII Kood**

ASCII (Ameerika Standardkood Infovahetuseks) on märgistusstandard, mida kasutatakse teksti esitlemiseks arvutites ja muudes teksti põhistes seadmetes. See on paljude kaasaegsete kodeerimiskeemide aluseks. ASCII kasutab 7-bitist binaarkoodi, võimaldades 128 unikaalset sümbolit, mille koodid jäävad vahemikku 0 kuni 127.

Standard ASCII sümbolid sisaldavad:

- Kontrollkarakterid (0–31):

  Need on mitteprinditavad karakterid, mis kontrollivad teksti töötlemist. Näited:

  - `0` (NUL): Null karakter
  - `9` (TAB): Horisontaalne tabulaator
  - `10` (LF): Ridade vahetus (uus rida)
  - `13` (CR): Rea tagasiviimine

- Prinditavad karakterid (32–127):

  Need on nähtavad sümbolid nagu tähed, numbrid, kirjavahemärgid ja sümbolid. Näited:

  - `32` (SPACE): Tühik
  - `65` (A): Suur A
  - `97` (a): Väike a
  - `48` (0): Number 0
  - `33` (!): Hüüumärk

ASCII koodid kasutavad 7 bitti, mis võimaldab kodeerida 128 sümbolit, kuid kaasaegsed arvutid kasutavad 8 bitti kui põhikandjat. See 8-bitine ühik, või bait, võimaldab kodeerida 256 sümbolit, mis on üldiselt piisav inglise ja teiste läänemerede keeltele. Keerukamate keelte jaoks kasutatakse täiendavaid bitte sümbolite esitlemiseks, tagades efektiivse mälu ja salvestuse kasutamise. Kuigi ASCII ise vajab ainult 7 bitti, on 8-bitine esitus arvutites tavaline, kus lisabit on tavaliselt seatud nulliks. Näiteks, ASCII kood suurtele "A" jaoks on 65 (decimal) või 01000001 (binaarne), kus lisabit on null.

**Mõned matemaatiliste operaatorite sümbolid arvutites**

Tavalisel klaviatuuril võib märgata, et mõned matemaatiliste sümbolite, nagu korrutamismärk (×), puuduvad. Selle asemel kasutavad arvutid sageli lihtsustamiseks alternatiivseid sümboleid. Siin on mõned tavalised näited:

- Korrutamine: `*`
- Jagamine: `/`
- Modulo (jääk jagamisel): `%`
- Eksponentatsioon: `**` (tavaliselt kasutatud programmeerimiskeeltes nagu Python), ja mõnel juhul `^` (tavaliselt kalkulaatorites).

Need sümbolid on kasutusel arvutusoperatsioonide tegemiseks erinevates programmeerimis- ja kalkulaatorikeskkondades.

**Andmeüksused**

Kaasaegsed arvutid kasutavad 8 bitti kui põhilist andmeüksust, mida nimetatakse baitiks (B). Siin on ülevaade muudest tavalistest andmeüksustest ja nende konversioonidest:

- Bit (b, väikeste tähtedega): Kõige väiksem andmeüksus arvutites. Esindab binaarset numbrit, mis võib olla kas `0` või `1`. 
- Bait (B, suurte tähtedega): Põhiline andmeüksus, mis koosneb 8 bitist. 

Suuremate mõõtmete puhul kasutatakse kahte erinevat konversiooni: binaarset ja dekreetset. Binaarsed ühikud põhinevad 2 võimetel, samas kui dekreetsed ühikud kasutavad 10 võimet. Arvutites on binaarsed ühikud standardiks, samas kui dekreetseid ühikuid kasutatakse sageli turunduses. Alates baitist on suurem binaarset mõõtmeteühik 2^10 (1024) korda väiksemast ühikust, samas kui suurem dekreetne mõõtühik on 10^3 (1000) korda väiksemast ühikust.

Binaarsed mõõtühikud:

- Kilobait (KB): 1 KB = 1 024 bait (2^10 baiti).
- Megabait (MB): 1 MB = 1 024 KB = 1 048 576 baiti (2^20 baiti).
- Gigabait (GB): 1 GB = 1 024 MB = 1 073 741 824 baiti (2^30 baiti).
- Terabait (TB): 1 TB = 1 024 GB = 1 099 511 627 776 baiti (2^40 baiti).

Dekreetilised mõõtühikud:

- Kilobait (KB): 1 KB = 1 000 baiti (10^3 baiti).
- Megabait (MB): 1 MB = 1 000 KB = 1 000 000 baiti (10^6 baiti).
- Gigabait (GB): 1 GB = 1 000 MB = 1 000 000 000 baiti (10^9 baiti).
- Terabait (TB): 1 TB = 1 000 GB = 1 000 000 000 000 baiti (10^12 baiti).

Selge erinevuse tegemiseks binaarsete ja dekreetsete mõõtmiste vahel tutvustas IEC (Rahvusvaheline Elektrotehnika Komisjon) "bi" eesliidet, mis tähistab "binaarset". Need ühikud on sama väärtusega nagu binaarne konversioon, kuid neil on eristatavamad nimed.

- Kibibait (KiB): 1 KiB = 1 024 baiti (2^10 baiti).
- Mebibait (MiB): 1 MiB = 1 024 KiB = 1 048 576 baiti (2^20 baiti).
- Gibibait (GiB): 1 GiB = 1 024 MiB = 1 073 741 824 baiti (2^30 baiti).
- Tebibait (TiB): 1 TiB = 1 024 GiB = 1 099 511 627 776 baiti (2^40 baiti).

Dekreetilisi konversioone kasutatakse sageli turunduses, kuna need annavad sama salvestusvõimekuse jaoks suuremaid numbreid. Näiteks kõvaketas, mille maht on 500 GB (dekreetne), on tegelikult 500 000 000 000 baiti, mis on umbes 465 GiB (binaarne).

**Andmete erinevate tüüpide binaarväljaesitus**

Kõik andmed, sõltumata nende tüübist, on lõppkokkuvõttes esindatud binaarvormis. Andmed töödeldakse ja salvestatakse arvutites 0-de ja 1-de järjestustena. Teksti, pilti, heli või muid andmeid salvestades peame need "tõlkima" binaarkoodiks, mida nimetatakse "kodeerimiseks". Kui me peame neid andmeid kasutama inimeste sõbralikus vormis, tõlgendab tarkvara binaarkoodi, et muuta see tekstiks, pildiks ja muudele arusaadavatele formaatidele, mida nimetatakse "dekodeerimiseks".

Siin on mõned näited erinevate andmeliikide kodeerimisest:

- **Tekst**: Tähemärgid esindatakse kodeerimisstandardite, nagu ASCII või Unicode, abil. Iga tähemärkidele on omistatud ainulaadne binaarkood. Näiteks on ASCII kood 'A' jaoks 01000001 binaarvormingus.
- **Numbrid**: Numbrid esindatakse erinevates binaarformaatides, nagu täisarvud (numbrid ilma fraktsiooniliste osadega, näiteks `-3`, `0`) ja ujukkomad (numbrid fraktsiooniliste osadega, näiteks `3.14`, `-0.01`). Näiteks on täisarv 5 esindatud 8-bitises binaarvormingus kui 00000101.
- **Heli**: Helidata esitatakse tavaliselt järjestikku näidistena. Need näidised salvestatakse regulaarsetel vahemaadel ja kodeeritakse binaariks. Näiteks võib 16-bitine helinäidis olla esindatud 16-bitises binaarnumbris.
- **Pildid**: Pildid koosnevad pikslitest, millel on värvi väärtused. Halltoonis pildil võib iga piksel olla esindatud 8-bitises binaarnumbris, mis näitab selle intensiivsust. Värvipildil on iga piksel tavaliselt esindatud kombinatsioonina binaarnumbritest, mis vastavad punase, rohelise ja sinise värvikoostisosadele.
- **Video**: Video on järjestus piltidest (kaadritest) ja sisaldab sageli ka heli. Iga kaader on pilt, mis on esindatud binaarselt, ja kaadrid kuvatakse kiiresti järjestikku, et luua liikumise illusioon.
- **Failid ja formaadid**: Erinevad failiformaadid (nt JPEG piltide jaoks, MP3 heli jaoks, MP4 video jaoks) määratlevad spetsiifilised viisid andmete kodeerimiseks. Need formaadid kasutavad binaarkoodi, et andmeid efektiivselt struktureerida ja tihendada.

**Andmete tihendamine**

Kujutage ette, et teil on suur hunnik mänguasju, mida peate pakkima väikese kasti. Andmete tihendamine on nagu leidmine, kuidas mänguasju korralikult paigutada ja kokku suruda, et kõik mahuks kasti, ilma et midagi kaotataks. Arvutites tähendab see failide suuruse vähendamist, et need võtaksid vähem ruumi ja oleksid kiiremad edastamiseks või salvestamiseks.

Siin on lihtne näide Run-Length Encoding (RLE) algoritmist: kui teil on ingliskeelsete tähtede jada "AAAAAAADDDDCCVSSSSSSSSS", mis koosneb 23 tähemärgist ja võtab ruumi 23 bait. Saame lugeda, mitu korda iga täht kordub, ja asendada need tähed loendiga ja vastava tähega: "7A4D2C1V9S". Uus jada koosneb 5 loendist ja 5 tähest. Me saame kasutada ühe baitina esindamiseks iga loendit ja kasutada tähti ASCII-koodis, mis kokku annab 10 baiti. Kui me peame jada dekompresseerima, loeme loendi ja tähe ning kordame seejärel tähte vastavalt loendile. Sel viisil vähendame andme suurust ja kasutame vähem ruumi.

Erinevate andmetüüpide jaoks valime tavaliselt erinevad tihendamisalgoritmid, kuna igal ühel neist on omad eelised ja piirangud.