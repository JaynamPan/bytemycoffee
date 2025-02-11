Höfundur: Jaynam Þýðandi: AI Uppfært 27. ágúst 2024

## 2. Kynning á forritun

Velkomin í stórkostlega heim tölva! Áður en við förum að grípa í forritun, er nauðsynlegt að kynnast betur tölvum. Við skulum skoða nokkur grunnatriði sem tengjast tölvum í samhengi við forritun.

### 2.1 Hvernig tölva vinnur úr upplýsingum

**(1) Kynning á tvíundakerfi**

Hefur þú einhvern tíma velt því fyrir þér hvernig tölva, spjaldtölva eða snjallsími veit hvernig á að gera svona margar flotta hluti? Það snýst allt um hvernig hún vinnur úr upplýsingum. Við byrjum á grunnatriðinu sem kallast "tvíundakerfi". Fyrst skulum við hugsa um hvernig við táknum upplýsingar í daglegu lífi okkar.

**Hvernig við táknum upplýsingar í daglegu lífi okkar**

Í daglegu lífi notum við ýmsar aðferðir til að tákna og deila upplýsingum. Til dæmis:

- Tungumál: Hvort sem það er skrifað eða talað, getum við miðlað upplýsingum með táknum sem byggjast á skriflegum stöfum, orðum og hljóðum. Hver stafur hefur ákveðna mynd og merkingu, og hver setning sem við segjum ber ákveðna merkingu.
- Myndtákn og myndir: Umferðartákn, teikningar og myndir geta haft mikið af upplýsingum.
- Hljóð: Við notum einnig mismunandi hljóð til að miðla merkingu. Hljóð í dyrabjöllu getur sagt okkur að gestur sé kominn. Hljóð í viðvörunarbjöllu gefur okkur tilkynningu um hættu.

Á sama hátt þarf tölvur sérstakt kerfi til að skilja og vinna úr upplýsingum. Þetta kerfi er tvíundakerfi, sem er eins konar alheims tungumál samsett af aðeins tveimur táknum: 0 og 1. Þessi tákn vinna saman til að tákna alls konar gögn, frá tölum og stöfum til mynda og hljóða. "Tvíundakerfi" vísar til kerfis sem notar aðeins tvö tákn (0 og 1). "Kóði" felur í sér notkun tákna eða reglna til að kóða, afkóða eða miðla upplýsingum á þann hátt að þær séu skiljanlegar eða nothæfar, sérstaklega í samhengi tölva og upplýsingavinnslu.

**Tvíundakerfið**

Í daglegu lífi okkar notum við venjulega tölur byggðar á 10 tölustöfum: 0 til 9. Við skulum gera smá reikning. Ef þú bætir 1 við 0, verður útkoman 1. Bætir þú aftur 1, færðu 2. Ef við bætum 1 níu sinnum við 0, notum við öll 10 tölustafina frá 0 til 9. En hvað ef við bætum 1 tíu sinnum við 0? Útkoman er 10. Tökum betur til skoðunar „10“. Það er gert úr „1“ og „0“, þar sem „1“ er vinstra megin við „0“. Hins vegar útskýrir þessi einföldu viðbót ekki hvernig „10“ táknar töluna 10 í okkar tugakerfi.

Í daglegu lífi, nema annað sé tekið fram, eru tölurnar sem við notum byggðar á „tugakerfi“. Orðið „tugakerfi“ kemur frá latneska orðinu „decem“ sem þýðir „tíu“. „Tugakerfi“ vísar til talnakerfis sem byggir á veldum af tíu. Í tugakerfinu er hver staða tíu sinnum meira virði en staðan til hægri við hana. Hver tölustafur í tölu táknar mismunandi staðgildi, sem í tugakerfinu er veldi af tíu.

Tökum dæmi með töluna 345:

- Tölustafurinn 5 er í „einingar“ stað (10^0, tíu til veldis núlls), sem táknar 5.
- Tölustafurinn 4 er í „tíundir“ stað (10^1, tíu til veldis eitt), sem táknar 4 × 10 = 40.
- Tölustafurinn 3 er í „hundruðum“ stað (10^2, tíu til veldis tveggja), sem táknar 3 × 100 = 300.

Ef við leggjum þessar tölur saman (300 + 40 + 5) fáum við heildarverðið 345.

Nú skulum við skoða tvíundakerfið. Á meðan tugakerfið notar tíu tölustafi, notar tvíundakerfið aðeins tvo tölustafi: 0 og 1. Hver tölustafur í tvíundatölu táknar veldi af 2, ekki 10.

Tökum dæmi með tvíundatöluna 101:

- Hægri tölustafurinn (1) er í „einingar“ stað (2^0, tvö til veldis núlls), sem táknar 1.
- Mið tölustafurinn (0) er í „tvíundir“ stað (2^1, tvö til veldis eitt), sem táknar 0 × 2 = 0.
- Vinstra tölustafurinn (1) er í „fjórundir“ stað (2^2, tvö til veldis tveggja), sem táknar 1 × 4 = 4.

Til að finna tugagildi tvíundatölunnar 101, leggjum við þessar tölur saman: 4 (frá „fjórundum“ stað) + 0 (frá „tvíundum“ stað) + 1 (frá „einingum“ stað) = 5.

Þannig að tvíundatalan 101 er jöfn tugatölunni 5.

**Hvers vegna nota tölvur tvíundakerfið?**

Decimalkerfið er það talnakerfi sem mest er notað og það er það sem við notum í daglegu talningu og reikningi. Við höfum tíu fingur, sem gerir tölurnar í decimalkerfinu auðveldar að nota og eðlilegar fyrir okkur. Þessi náttúrulegi talningaraðferð hefur líklega haft áhrif á þróun decimalkerfisins. Þó að decimalkerfið sé einfalt og þægilegt fyrir okkur menn, er það ekki besta valkosturinn fyrir tölvur. Þess í stað hentar tvíundakerfið betur fyrir slíka raftæki. Ástæðan liggur í "líffræði" tölvunnar.

Tölvur nota rafrásir sem geta annaðhvort verið kveiktar eða slökkt á. Þessir tveir ríkjandi stöður eru náttúrulega táknaðir með tvíundatölunum 0 og 1. Tvíundakerfið er kjörið fyrir tölvur vegna þess að það passar fullkomlega við rafmerki þeirra sem eru kveikt eða slökkt. Með því að nota tvíundakerfið getur tölvan unnið úr og geymt gögn á skilvirkan hátt.

CPU, sem er lykilhluti tölvunnar, byggir á transistorum sem grundvallareiningar. Transistor er lítill og einfaldur hringrásareining sem getur virkað sem rafrænir kveikjarar/slökkvarar og magnar veik rafmerki. Nútíma CPUs innihalda milljarða transistora, sem virka sem kveikjarar/slökkvarar fyrir úrvinnslu og geymslu gagna. Líkt og RAM, GPU og SSD (Solid State Drive) nota einnig transistora.

Í tölvu eru næstum allir transistorar að virka sem kveikjarar/slökkvarar, sem þýðir að þeir starfa í tveimur ríkjandi stöðum: kveikt og slökkt. Þannig er náttúrulegt og einfalt að nota 1 fyrir "kveikt" ástandið og 0 fyrir "slökkt" ástandið.

**(2) Hvernig tvíundakóðinn táknar gögn**

Til að skilja hvernig tvíundakóðinn táknar gögn, skulum við fyrst skoða hvernig PC vinnur úr og geymir upplýsingar. Þegar forrit keyrir eru fyrirmæli þess lesin inn í RAM. Meðal annars eru fyrirmæli annarra forrita einnig sett í biðröð til úrvinnslu. CPU dregur stöðugt fyrirmæli úr þessari biðröð, eitt í einu. Hvert sinn sem CPU dregur fyrirmæli les hún úr RAM, og stundum krafst fyrirmælanna að lesa úr eða skrifa á harða diskinn. Nútíma CPUs geta unnið með allt að 64 bita gögn í einu, á meðan eldri CPUs gætu aðeins unnið með allt að 32 bita.

Þetta vekur nokkur spurningar: Hversu marga bita gögn ætti tölvan að lesa eða skrifa úr RAM í einu? Hversu marga bita ættum við að nota sem grunnstærð? Ef CPU væri að lesa eða skrifa aðeins 1 bit í einu, væri það mjög óhagkvæmt og tímafrekt vegna mikillar tíðni aðgerða sem krafist væri. Því les 64-bita CPU venjulega eða skrifar 64 bita gögn í einu, og 32-bita CPU vinnur með 32 bita í einu til að jafna árangur og skilvirkni. RAM notar venjulega 8 bita sem grunnstærð.

Val á 8-bita einingu fyrir RAM er undir áhrifum sögulegra, tæknilegra og staðfestingarþátta. Fyrstu tölvur notuðu mismunandi stærðir gagnastærða, en með þróun tækni varð 8-bita einingin algengari. Þessi stærð fann jafnvægi milli skilvirkni og getu, sérstaklega fyrir táknun stafrófa og gagna.

**ASCII Kóði**

ASCII (American Standard Code for Information Interchange) er stöðluð tákngervingarstöð sem notuð er til að tákna texta í tölvum og öðrum textamiðlum. Það er grundvallarlegur hluti margra nútímakóðunarkerfa. ASCII notar 7 bita tvíundakerfi, sem gerir kleift að tákna 128 einstaka tákn, með kóðunum á milli 0 og 127.

Staðlaðir ASCII tákn fela í sér:

- Stýritákn (0–31):

  Þetta eru ósýnileg tákn sem stjórna textaúrvinnslu. Dæmi um þau eru:

  - `0` (NUL): Núll tákn
  - `9` (TAB): Láréttur tab
  - `10` (LF): Lína fóðrun (nýlína)
  - `13` (CR): Kassa til baka

- Sýnileg tákn (32–127):

  Þetta eru sýnileg tákn eins og bókstafir, tölustafir, punkta- og táknmörk. Dæmi um þau eru:

  - `32` (SPACE): Rými tákn
  - `65` (A): Stór A
  - `97` (a): Lítill a
  - `48` (0): Tölustafur 0
  - `33` (!): Útropstákn

ASCII kóðar nota 7 bita, sem geta táknað 128 tákn, en nútíma tölvur nota 8 bita sem grunntákneiningu. Þessi 8-bita eining, eða byte, gerir kleift að tákna 256 tákn, sem er almennt nægjanlegt fyrir ensku og aðrar vestrænar tungumál. Fyrir flóknari tungumál eru notaðir auka bita til að tákna tákn, sem tryggir árangursríka minni- og geymslu nýtingu. Þó að ASCII sjálft krafist aðeins 7 bita, er 8-bita táknun algeng í tölvum, með auka bitanum venjulega stilltum á 0. Til dæmis, ASCII kóðinn fyrir stórt "A" er 65 (desímalt) eða 01000001 (tvíund), með auka bitanum sem núll.

**Sumir tölfræðimerkja í tölvum**

Á staðlaðri lyklaborði gæti þú tekið eftir fjarveru sumra stærðfræðimerkja, eins og margföldunarmerki (×). Í staðinn nota tölvur oft aðra tákn til einföldunar. Hér eru nokkur dæmi um algeng merki:

- Margföldun: `*`
- Deiling: `/`
- Modúlo (afgangur eftir deilingu): `%`
- Rofmargföldun: `**` (notað oft í forritunarmálum eins og Python), og í sumum tilfellum, `^` (algengt í reiknivélum).

Þessi tákn eru notuð til að framkvæma stærðfræðilega útreikninga í ýmsum forritunarmiljöum og reiknivélum.

**Stærð einingar í tölvum**

Nútímatölvur nota 8 bita sem grunn einingu fyrir gögn, sem kallast byte (B). Hér er yfirlit yfir aðrar algengar stærð einingar og umbreytingar þeirra:

- Bit (b, í lágstöfum): Minsta eining fyrir gögn í tölvum. Það táknar tvíundar tölustaf, sem getur verið annað hvort `0` eða `1`.
- Byte (B, í hástöfum): Grunn stærð eining fyrir gögn, sem samanstendur af 8 bitum.

Fyrir stærri mælingar eru tvær mismunandi umbreytingar notaðar: tvíund og tugabundnar. Tvíund einingar eru byggðar á veldum af 2, á meðan tugabundnar einingar nota veldi af 10. Í tölvum eru tvíund einingar staðlaðar, á meðan tugabundnar einingar eru oft notaðar í markaðssetningu. Frá byte, stærri tvíund-bundnar einingar eru 2^10 (1024) sinnum stærri en fyrri eining, á meðan stærri tugabundnar einingar eru 10^3 (1000) sinnum stærri en fyrri eining.

Tvíund-bundnar einingar:

- Kilobyte (KB): 1 KB = 1,024 bytes (2^10 bytes).
- Megabyte (MB): 1 MB = 1,024 KB = 1,048,576 bytes (2^20 bytes).
- Gigabyte (GB): 1 GB = 1,024 MB = 1,073,741,824 bytes (2^30 bytes).
- Terabyte (TB): 1 TB = 1,024 GB = 1,099,511,627,776 bytes (2^40 bytes).

Tugabundnar einingar:

- Kilobyte (KB): 1 KB = 1,000 bytes (10^3 bytes).
- Megabyte (MB): 1 MB = 1,000 KB = 1,000,000 bytes (10^6 bytes).
- Gigabyte (GB): 1 GB = 1,000 MB = 1,000,000,000 bytes (10^9 bytes).
- Terabyte (TB): 1 TB = 1,000 GB = 1,000,000,000,000 bytes (10^12 bytes).

Til að greina tvíund-bundnar mælingar frá tugabundnum var IEC (International Electrotechnical Commission) kynnt „bi“ forskeytið fyrir þessar einingar, sem stendur fyrir „tvíund“. Þessar einingar hafa sömu gildi og tvíund umbreytingin, en eru með meira aðgreinanleg nöfn.

- Kibibyte (KiB): 1 KiB = 1,024 bytes (2^10 bytes).
- Mebibyte (MiB): 1 MiB = 1,024 KiB = 1,048,576 bytes (2^20 bytes).
- Gibibyte (GiB): 1 GiB = 1,024 MiB = 1,073,741,824 bytes (2^30 bytes).
- Tebibyte (TiB): 1 TiB = 1,024 GiB = 1,099,511,627,776 bytes (2^40 bytes).

Tugabundnar umbreytingar eru oft notaðar í markaðssetningu vegna þess að þær gefa stærri tölur fyrir sama geymslugetu. Til dæmis, harður diskur merktur með 500 GB (tugabundið) er í raun 500,000,000,000 bytes, sem er um það bil 465 GiB (tvíund).

**Tvíundafylgni fyrir mismunandi gagnategundir**

Öll gögn, óháð gerð þeirra, eru að lokum táknuð í tvíundafylgni. Gögn eru unnin og geymd sem raðir af 0 og 1 í tölvum. Til að geyma texta, myndir, hljóð eða aðrar tegundir gagna þurfum við að "þýða" þau í tvíundakóða, sem kallast "kóðun". Þegar við þurfum að nota þessi gögn á mannvænlegan hátt túlkar hugbúnaður tvíundakóðann til að umbreyta honum í texta, myndir og aðrar tegundir sem við getum skilið, sem kallast "afkóðun".

Hér eru nokkur dæmi um kóðun mismunandi gagnategunda:

- **Texti**: Stafir eru táknaðir með kóðunarskönnunum eins og ASCII eða Unicode (Alheimskóði). Sérhver stafur fær einstakt tvíundakóðann. Til dæmis er ASCII kóðinn fyrir 'A' 01000001 í tvíundafylgni.
- **Tölur**: Tölur eru táknaðar með mismunandi tvíundafylgni, eins og heiltölur (tölur án brota, eins og `-3`, `0`) og fljótandi punktar (tölur með brotum, eins og `3.14`, `-0.01`). Til dæmis er heiltalan 5 táknuð sem 00000101 í 8-bit tvíundafylgni.
- **Hljóð**: Hljóðgögn eru venjulega táknuð sem röð sýna. Þessar sýni eru tekin á reglulegum millibilum og kóðuð í tvíundafylgni. Til dæmis gæti 16-bit hljóðsýn verið táknuð sem 16-bit tvíundatalna.
- **Myndir**: Myndir eru samsettar úr pixlum, hver með litargildum. Í grámskalamynd gæti hver píxel verið táknaður með 8-bit tvíundatali sem gefur til kynna birtustig þess. Í litamynd er hver píxel venjulega táknaður með samsetningu tvíundatalna sem samsvara rauðu, grænu og bláu litabætum.
- **Myndbönd**: Myndbönd eru raðir af myndum (rammar) og innihalda oft hljóð. Hver rammar er mynd táknuð í tvíundafylgni, og myndrammarnir eru sýndir í hröðum röð til að búa til blekkingu hreyfingar.
- **Fjölbreytni og Formöt**: Mismunandi skráarsnið (eins og JPEG fyrir myndir, MP3 fyrir hljóð, MP4 fyrir myndbönd) skilgreina sérstakar leiðir til að kóða gögn. Þessi snið nota tvíundakóða til að byggja upp og þjappa gögnunum á skilvirkan hátt.

**Gagnastyrming**

Ímyndaðu þér að þú sért með stóran haug af leikföngum sem þú þarft að pakka í litla kassa. Gagnastyrming er eins og að finna leið til að raða og minnka leikföngin svo þau passi öll í kassann án þess að missa neitt af þeim. Í tölvum er þetta um að gera skrár minni svo þær taki upp minna pláss og séu fljótlegri í sendingu eða geymslu.

Hér er einfalt dæmi um Run-Length Encoding (RLE) reikniregluna: ef þú ert með röð af enska stöfum "AAAAAAADDDDCCVSSSSSSSSS", sem eru 23 stafaðar og taka 23 bita af plássi. Við getum talið hversu oft hver stafur endurtekur sig og skipt út stöfunum fyrir fjöldann og stafinn sjálfan: "7A4D2C1V9S". Nýja röðin inniheldur 5 fjölda og 5 stafi. Við getum notað einn bita til að tákna hverja tölu og ASCII kóðann fyrir stafina, sem nemur samtals 10 bita. Þegar við þurfum að endurheimta röðina, lesum við fjöldann og stafinn, og endurtökum stafinn samkvæmt fjöldanum. Á þennan hátt minnkum við stærð gagnanna og notum minna pláss.

Fyrir mismunandi gagnategundir veljum við venjulega mismunandi stöðvunaraðferðir þar sem hver hefur sína kosti og takmarkanir.