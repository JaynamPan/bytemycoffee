Autors: Jaynam Tulkoja: AI Atjaunots 27. augustā, 2024. gadā

## 2. Iepazīšanās ar programmēšanu

Laipni lūdzam brīnišķīgajā datoru pasaulē! Pirms ķermies klāt programmēšanai, ir svarīgi uzzināt vairāk par datoriem. Izpētīsim dažas pamata lietas, kas saistītas ar programmēšanu.

### 2.1 Kā dators apstrādā informāciju

**(1) Ievads binārajā kodā**

Vai esi kādreiz domājis, kā tava dators, planšetdators vai viedtālrunis zina, kā darīt tik daudz interesantu lietu? Tas viss ir par to, kā tie apstrādā informāciju. Sāksim ar pamatiem, sākot no "binārā koda". Pirmkārt, padomāsim, kā mēs ikdienā attēlojam informāciju.

**Informācijas attēlošanas veidi mūsu ikdienā**

Mūsu ikdienā mēs izmantojam dažādus veidus, kā attēlot un dalīties ar informāciju. Piemēram:

- Valodas: Neatkarīgi no tā, vai tās ir rakstītas vai izrunātas, mēs varam sazināties un dalīties ar informāciju, izmantojot simbolus, kas balstīti uz rakstītām burtiem, vārdiem un skaņām. Katram burtam ir konkrēta forma un nozīme, un katrs vārds vai teikums, ko sakām, izsaka konkrētu nozīmi.
- Grafiskie simboli un attēli: Satiksmes simboli, zīmējumi un attēli var ietvert daudz informācijas.
- Skaņas: Mēs arī izmantojam dažādas skaņas, lai izteiktu nozīmi. Durvju zvans var mums norādīt, ka kāds ir ieradies. Sirēna signalizē brīdinājumu.

Līdzīgi, datori izmanto īpašu sistēmu, lai saprastu un apstrādātu informāciju. Šī sistēma ir binārais kods, kas ir universāla valoda, kas sastāv tikai no diviem simboliem: 0 un 1. Šie simboli darbojas kopā, lai attēlotu visdažādākos datus, sākot no skaitļiem un burtiem līdz attēliem un skaņām. "Binārais" attiecas uz "bināro sistēmu", kas izmanto tikai divus simbolus (0 un 1). Un "kods" nozīmē simbolu vai noteikumu kopumu, lai kodētu, dekodētu vai sazinātos ar informāciju tādā veidā, kas padara to saprotamu vai izmantojamu, īpaši datoru un informācijas apstrādes kontekstā.

**Binārā sistēma**

Ikdienā mēs parasti izmantojam skaitļus, balstoties uz 10 cipariem: no 0 līdz 9. Veiksim vienkāršu matemātiku. Ja pievienojam 1 pie 0, rezultāts ir 1. Pievienojot vēlreiz 1, iegūstam 2. Ja mēs pievienojam 1 deviņas reizes pie 0, mēs izmantojam visus 10 ciparus no 0 līdz 9. Bet, ja mēs pievienojam 1 desmit reizes pie 0? Rezultāts ir 10. Apskatīsim tuvāk “10”. Tas sastāv no “1” un “0”, un “1” ir pa kreisi no “0”. Tomēr, ja mēs saskaitām abu ciparus “10”, tas ir 1 plus 0, iegūstam 1. Šī vienkāršā saskaitīšana neskaidro, kāpēc '10' pārstāv skaitli, kas ir 10 mūsu decimālajā sistēmā.

Ikdienā, ja vien nav norādīts citādi, skaitļus, ko izmantojam, balstās uz “decimālo sistēmu”. Vārds “decimāls” nāk no latīņu vārda “decem”, kas nozīmē “desmit”. “Decimālā sistēma” ir skaitļu sistēma, kas balstās uz desmitām. Decimālajā sistēmā katra vietas vērtība ir desmit reizes lielāka nekā vieta tās labajā pusē. Katrs cipars skaitlī pārstāv dažādu vietas vērtību, kas decimālajā sistēmā ir desmit reizinājums.

Piemēram, ņemsim skaitli 345:

- Cipars 5 atrodas “vienību” vietā (10^0, desmit pakāpe nulle), pārstāv 5.
- Cipars 4 atrodas “desmitu” vietā (10^1, desmit pakāpe viens), pārstāv 4 × 10 = 40.
- Cipars 3 atrodas “simtu” vietā (10^2, desmit pakāpe divi), pārstāv 3 × 100 = 300.

Saskaitot šīs vērtības (300 + 40 + 5), iegūstam kopējo vērtību 345.

Tagad aplūkosim bināro sistēmu. Atšķirībā no decimālās sistēmas, kas izmanto desmit ciparus, binārā sistēma izmanto tikai divus ciparus: 0 un 1. Katrs cipars binārā skaitlī pārstāv 2 pakāpes, nevis 10.

Piemēram, binārajā skaitlī 101:

- Labākais cipars (1) atrodas “viens” vietā (2^0, divi pakāpe nulle), kas pārstāv 1.
- Vidējais cipars (0) atrodas “divu” vietā (2^1, divi pakāpe viens), kas pārstāv 0 × 2 = 0.
- Kreisais cipars (1) atrodas “četru” vietā (2^2, divi pakāpe divi), kas pārstāv 1 × 4 = 4.

Lai atrastu decimālo vērtību binārajā skaitlī 101, saskaitām šīs vērtības: 4 (no “četru” vietas) + 0 (no “divu” vietas) + 1 (no “viens” vietas) = 5.

Tātad, binārais skaitlis 101 ir vienāds ar decimālo skaitli 5.

**Kāpēc datoros tiek izmantots binārais sistēmas**

Desmitnieku sistēma ir visbiežāk izmantotā skaitļu sistēma, un tā tiek lietota ikdienas skaitīšanā un aritmētikā. Cilvēkiem ir desmit pirksti, kas padara desmitnieku sistēmu intuitīvu un vieglu lietošanā. Šī dabiskā skaitīšanas metode, iespējams, ietekmēja desmitnieku sistēmas attīstību. Lai gan desmitnieku sistēma ir vienkārša un ērta mums, cilvēkiem, tā nav vispiemērotākā datoriem. Tā vietā binārā sistēma ir labāk piemērota šādām elektroniskām iekārtām. Iemesls ir datoru "anatomijā".

Datori izmanto elektriskos ķēdes, kas var būt vai nu ieslēgtas, vai izslēgtas. Šie divi stāvokļi dabiski tiek attēloti ar binārajiem cipariem 0 un 1. Binārais kods ir ideāli piemērots datoriem, jo tas perfekti sakrīt ar to ieslēgšanas/izslēgšanas elektriskajiem signāliem. Izmantojot bināro sistēmu, datoriem ir efektīvāk apstrādāt un glabāt datus.

Centrālā procesora (CPU) – svarīgākā datora sastāvdaļa – balstās uz tranzistoriem kā pamatelementiem. Tranzistors ir ļoti maza un vienkārša ķēdes sastāvdaļa, kas var darboties kā elektronisks ieslēgšanas/izslēgšanas slēdzis un pastiprināt vājus elektriskos signālus. Mūsdienu CPU satur miljardiem tranzistoru, kas darbojas kā ieslēgšanas/izslēgšanas slēdži datu apstrādei un glabāšanai. Līdzīgi RAM, GPU un SSD (Solid State Drive) arī izmanto tranzistorus.

Datorā gandrīz visi tranzistori darbojas kā ieslēgšanas/izslēgšanas slēdži, kas nozīmē, ka tie darbojas tikai divos stāvokļos: ieslēgts un izslēgts. Tādēļ ir dabiski un vienkārši izmantot 1 kā "ieslēgts" stāvokli un 0 kā "izslēgts" stāvokli.

**(2) Kā binārais kods attēlo datus**

Lai saprastu, kā binārais kods attēlo datus, vispirms jāapsver, kā dators apstrādā un glabā informāciju. Kad programma darbojas, tās instrukciju virkne tiek ielādēta RAM atmiņā. Līdzās instrukcijām no citām programmām tās tiek rindotas izpildei. CPU nepārtraukti iegūst instrukcijas no šīs rindas, vienu pēc otra. Katru reizi, kad CPU iegūst instrukciju, tas lasa no RAM, un dažreiz instrukcija ietver lasīšanu vai rakstīšanu uz cieto disku. Mūsdienu CPU spēj apstrādāt līdz 64 bitiem datu vienlaicīgi, kamēr vecāki CPU var apstrādāt tikai līdz 32 bitiem.

Tas rada vairākus jautājumus: cik daudz bitu datu datoram vajadzētu lasīt vai rakstīt no RAM vienlaicīgi? Cik daudz bitu būtu jāizmanto kā pamata vienība? Ja CPU lasītu vai rakstītu tikai 1 bitu vienlaicīgi, tas būtu ļoti neefektīvi un laikietilpīgi, ņemot vērā augsto operāciju biežumu. Tādēļ 64 bitu CPU parasti lasa vai raksta 64 bitus datu vienlaicīgi, un 32 bitu CPU apstrādā 32 bitus vienlaicīgi, lai saglabātu līdzsvaru starp veiktspēju un efektivitāti. RAM parasti izmanto 8 bitu kā pamata vienību.

Izvēle izmantot 8 bitu vienību RAM ir ietekmēta no vēsturiskajiem, tehnoloģiskajiem un standartizācijas faktoriem. Agrīnie datori izmantoja dažādas datu vienību izmērus, bet tehnoloģijas attīstības gaitā 8 bitu vienība kļuva izplatītāka. Šis izmērs bija optimāls līdzsvars starp efektivitāti un spēju, īpaši raksturojot simbolus un datus.

**ASCII Kods**

ASCII (Amerikāņu Standarta Kods Informācijas Apmaiņai) ir rakstzīmju kodēšanas standarts, kas tiek izmantots tekstu attēlošanai datoros un citās tekstbalstītās ierīcēs. Tas ir pamats daudzām mūsdienu kodēšanas shēmām. ASCII izmanto 7 bitu bināro skaitli, kas ļauj attēlot 128 unikālas rakstzīmes, ar kodiem, kas svārstās no 0 līdz 127.

Standarta ASCII rakstzīmes ietver:

- Kontroles Rakstzīmes (0–31):

  Šīs ir neizdrukājamas rakstzīmes, kas kontrolē teksta apstrādi. Piemēri ietver:

  - `0` (NUL): Nulles rakstzīme
  - `9` (TAB): Horizontālais tabulators
  - `10` (LF): Jaunlīnija
  - `13` (CR): Kursora atgriešanās

- Izdrukājamās Rakstzīmes (32–127):

  Šīs ir redzamās rakstzīmes, piemēram, burti, cipari, pieturzīmes un simboli. Piemēri ietver:

  - `32` (SPACE): Atstarpe
  - `65` (A): Lielais burts A
  - `97` (a): Mazais burts a
  - `48` (0): Cipars 0
  - `33` (!): Izsaukuma zīme

ASCII kodi izmanto 7 bitus, kas var kodēt 128 rakstzīmes, bet mūsdienu datori izmanto 8 bitus kā pamata datu vienību. Šī 8 bitu vienība, jeb bytes, ļauj kodēt 256 rakstzīmes, kas parasti ir pietiekami angļu un citu rietumu valodu rakstzīmēm. Sarežģītākām valodām tiek izmantoti papildu byti rakstzīmju attēlošanai, nodrošinot efektīvu atmiņas un uzglabāšanas lietojumu. Lai gan ASCII pati prasa tikai 7 bitus, 8 bitu attēlojums ir izplatīts datoros, ar papildu bitu parasti iestatītu uz 0. Piemēram, ASCII kods lielajam "A" ir 65 (decimāli) vai 01000001 (bināri), ar papildu bitu, kas ir nulle.

**Dažādi matemātisko operatoru simboli datoros**

Standarta tastatūrā var pamanīt, ka trūkst dažādu matemātisko simbolu, piemēram, reizināšanas zīmes (×). Tā vietā datori bieži izmanto alternatīvus simbolus vienkāršības labad. Šeit ir daži bieži sastopami piemēri:

- Reizināšana: `*`
- Dalīšana: `/`
- Modulo (atlikums no dalīšanas): `%`
- Eksponentācija: `**` (bieži izmantots programmēšanas valodās kā Python), un dažkārt `^` (parasti izmantots kalkulatoros).

Šie simboli tiek izmantoti aritmētisko operāciju veikšanai dažādās programmēšanas vidēs un kalkulatoros.

**Datu lieluma vienības**

Mūsdienu datoros pamata datu vienība ir 8 biti, ko sauc par baitu (B). Šeit ir citi bieži izmantoti datu lieluma vienību nosaukumi un to pārvēršanas:

- Bits (b, mazos burtiem): Mazākais datu vienības elements datorikā. Tas pārstāv bināro ciparu, kas var būt `0` vai `1`.
- Baits (B, lielajiem burtiem): Pamata datu lieluma vienība, kas sastāv no 8 bitiem.

Lielākiem mērījumiem tiek izmantoti divi dažādi pārvēršanas veidi: binārie un decimālie. Binārie vienumi balstās uz 2 pakāpēm, kamēr decimālie vienumi izmanto 10 pakāpes. Datorikā binārie vienumi ir standarts, kamēr decimālie vienumi bieži tiek izmantoti mārketingā. Sākot no baitiem, lielāks binārais vienums ir 2^10 (1024) reizes lielāks par iepriekšējo vienumu, kamēr lielāks decimālais vienums ir 10^3 (1000) reizes lielāks par iepriekšējo vienumu.

Binārie vienumi:

- Kilobaits (KB): 1 KB = 1 024 baitus (2^10 baitus).
- Megabaits (MB): 1 MB = 1 024 KB = 1 048 576 baitus (2^20 baitus).
- Gigabaits (GB): 1 GB = 1 024 MB = 1 073 741 824 baitus (2^30 baitus).
- Terabaits (TB): 1 TB = 1 024 GB = 1 099 511 627 776 baitus (2^40 baitus).

Decimālie vienumi:

- Kilobaits (KB): 1 KB = 1 000 baitus (10^3 baitus).
- Megabaits (MB): 1 MB = 1 000 KB = 1 000 000 baitus (10^6 baitus).
- Gigabaits (GB): 1 GB = 1 000 MB = 1 000 000 000 baitus (10^9 baitus).
- Terabaits (TB): 1 TB = 1 000 GB = 1 000 000 000 000 baitus (10^12 baitus).

Lai skaidri atšķirtu bināros mērījumus no decimālajiem, IEC (Starptautiskā elektrotehniskā komisija) ieviesa "bi" prefiksu šiem vienumiem, kas apzīmē "bināro". Šiem vienumiem ir tādas pašas vērtības kā binārajā pārvēršanā, bet ar vairāk atšķirīgiem nosaukumiem.

- Kibibaits (KiB): 1 KiB = 1 024 baitus (2^10 baitus).
- Mebibaits (MiB): 1 MiB = 1 024 KiB = 1 048 576 baitus (2^20 baitus).
- Gibibaits (GiB): 1 GiB = 1 024 MiB = 1 073 741 824 baitus (2^30 baitus).
- Tebibaits (TiB): 1 TiB = 1 024 GiB = 1 099 511 627 776 baitus (2^40 baitus).

Decimālie pārvēršanas bieži tiek izmantoti mārketingā, jo tie dod lielākus skaitļus tādai pašai uzglabāšanas kapacitātei. Piemēram, cietais disks, kas apzīmēts ar 500 GB (decimāli), faktiski ir 500 000 000 000 baitus, kas ir aptuveni 465 GiB (bināri).

**Bināro reprezentāciju dažādiem datu tipiem**

Visi dati, neatkarīgi no to veida, gal最终 tiek pārstāvēti bināra formā. Dati tiek apstrādāti un uzglabāti kā secības 0 un 1 datoros. Lai uzglabātu tekstu, attēlus, audio vai citus datu tipus, mums jāveic "tulkošana" bināra koda formātā, ko sauc par "kodēšanu". Kad mēs vēlamies izmantot šos datus cilvēkam saprotamā veidā, programmatūra interpretē bināro kodu, lai pārvērstu to tekstā, attēlā un citos formātos, ko mēs varam saprast, kas tiek saukts par "dekodēšanu".

Šeit ir daži piemēri dažādu datu tipu kodēšanai:

- **Teksts**: Rakstzīmes tiek pārstāvētas, izmantojot kodēšanas standartus, piemēram, ASCII vai Unicode (Universālā Kods). Katrai rakstzīmei tiek piešķirts unikāls binārais kods. Piemēram, ASCII kods 'A' ir 01000001 bināra formā.
- **Skaitļi**: Skaitļi tiek pārstāvēti, izmantojot dažādus bināros formātus, piemēram, veselie skaitļi (skaitļi bez frakcionālām daļām, piemēram, `-3`, `0`) un peldošā punkta skaitļi (skaitļi ar frakcionālām daļām, piemēram, `3.14`, `-0.01`). Piemēram, veselo skaitli 5 var pārstāvēt kā 00000101 8-bit binārā formā.
- **Audio**: Audio dati parasti tiek pārstāvēti kā paraugu sērija. Šie paraugi tiek ierakstīti regulāros intervālos un kodēti bināri. Piemēram, 16-bit audio paraugs var būt pārstāvēts kā 16-bit binārais skaitlis.
- **Attēli**: Attēli sastāv no pikseļiem, katrs ar krāsas vērtībām. Pelēktoņu attēlā katrs pikselis var būt pārstāvēts ar 8-bit bināru skaitli, kas norāda tā intensitāti. Krāsu attēlā katrs pikselis parasti tiek pārstāvēts ar bināro skaitļu kombināciju, kas attiecas uz tā sarkano, zaļo un zilo krāsas komponentiem.
- **Video**: Video ir attēlu (rāmju) secība un bieži ietver audio. Katrs rāmis ir attēls, kas pārstāvēts bināri, un rāmji tiek rādīti ātrā secībā, lai radītu kustības ilūziju.
- **Faili un formāti**: Dažādi failu formāti (piemēram, JPEG attēliem, MP3 audio, MP4 video) nosaka specifiskas datu kodēšanas metodes. Šie formāti izmanto bināro kodu, lai strukturētu un saspiestu datus efektīvi.

**Datu saspiešana**

Iedomājieties, ka jums ir milzīgs rotaļlietu kaudze, kuru jāiepako mazā kastītē. Datu saspiešana ir līdzīga veidam, kā sakārtot un samazināt rotaļlietas, lai tās visas ietilptu kastītē, nezaudējot nevienu no tām. Datoros tas ir process, kā padarīt failus mazākus, lai tie aizņemtu mazāk vietas un tos varētu ātrāk nosūtīt vai uzglabāt.

Šeit ir vienkāršs piemērs ar Run-Length Encoding (RLE) algoritmu: ja jums ir rakstzīmju secība "AAAAAAADDDDCCVSSSSSSSSS", kas sastāv no 23 rakstzīmēm un aizņem 23 baitus vietas. Mēs varam saskaitīt, cik reizes katra rakstzīme atkārtojas, un aizvietot tās ar skaitu un pašu rakstzīmi: "7A4D2C1V9S". Jaunā secība sastāv no 5 skaitļiem un 5 rakstzīmēm. Mēs varam izmantot vienu baitus, lai attēlotu katru skaitli, un ASCII kodu rakstzīmēm, kas kopā ir 10 baitus. Kad mums jādekompresē secība, mēs izlasām skaitli un rakstzīmi, pēc tam atkārtojam rakstzīmi atbilstoši skaitlim. Šādā veidā mēs samazinām datu lielumu un izmantojam mazāk vietas.

Dažādiem datu veidiem parasti izvēlamies dažādus saspiešanas algoritmus, jo katram no tiem ir savas priekšrocības un ierobežojumi.