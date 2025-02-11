Autor: Jaynam Překladatel: AI Aktualizováno 27. srpna 2024

## 2. Podívejme se na programování

Vítejte ve fascinujícím světě počítačů! Než se pustíme do programování, je důležité se seznámit s tím, jak počítače fungují. Pojďme se podívat na některé základní aspekty, které souvisejí s programováním.

### 2.1 Jak počítač zpracovává informace

**(1) Úvod do binárního kódu**

Zajímalo vás někdy, jak váš počítač, tablet nebo chytrý telefon ví, jak vykonávat tolik skvělých věcí? Je to všechno o tom, jak zpracovává informace. Začněme tím, že se podíváme na základní proces, který se nazývá "binární kód". Nejprve si představme, jak v našem každodenním životě reprezentujeme informace.

**Způsoby, jak reprezentujeme informace v našem každodenním světě**

Ve svém každodenním životě používáme různé způsoby, jak reprezentovat a sdílet informace. Například:

- Jazyky: Ať už je to psané nebo mluvené, můžeme komunikovat a sdílet informace pomocí symbolů založených na písmenech, slovech a zvucích. Každé písmeno má konkrétní tvar a význam a každé slovo nebo věta, kterou říkáme, nese specifický význam.
- Grafické symboly a obrázky: Dopravní značky, kresby a obrázky mohou obsahovat mnoho informací.
- Zvuky: Používáme také různé zvuky k vyjádření určitých významů. Zvonek u dveří nám může oznámit příchod návštěvy. Siréna nám dává nějaké varování.

Podobně počítače potřebují speciální systém, aby rozuměly a zpracovávaly informace. Tento systém je binární kód, což je univerzální jazyk složený pouze ze dvou symbolů: 0 a 1. Tyto symboly spolupracují na reprezentaci různých dat, od čísel a písmen až po obrázky a zvuky. "Binární" odkazuje na "binární systém", který používá pouze dva symboly (0 a 1). A "kód" zahrnuje používání souboru symbolů nebo pravidel k zakódování, dekódování nebo komunikaci informací způsobem, který ji činí pochopitelnou nebo použitelnou, zejména v kontextu počítačů a zpracování informací.

**Binární systém**

V každodenním životě obvykle používáme čísla založená na 10 číslicích: 0 až 9. Pojďme se na to podívat z trochu jiného úhlu. Pokud přidáme 1 k 0, výsledek je 1. Pokud přidáme 1 znovu, dostaneme 2. Pokud přidáme 1 devětkrát k 0, použijeme všech 10 číslic od 0 do 9. Ale co když přidáme 1 desetkrát k 0? Výsledek bude 10. Podívejme se blíže na „10“. Je složen z „1“ a „0“, a „1“ je vlevo od „0“. Když sečteme dvě číslice „10“, dostaneme 1 plus 0, což je 1. Tento jednoduchý součet však nevysvětluje, jak „10“ reprezentuje číslo, které je v našem desetinném systému rovno 10.

V běžném životě, pokud není specifikováno jinak, používáme čísla založená na „desetinném systému“. Slovo „desetinný“ pochází z latinského slova „decem“, což znamená „deset“. „Desetinný systém“ odkazuje na číselný systém založený na mocninách deseti. V desetinném systému má každé místo hodnotu desetkrát vyšší než místo vpravo od něj. Každá číslice v čísle představuje jinou hodnotu místa, která je v desetinném systému mocninou deseti.

Například číslo 345:

- Číslice 5 je na místě „jednotek“ (10^0, deset na nultou mocninu), což představuje 5.
- Číslice 4 je na místě „desítek“ (10^1, deset na první mocninu), což představuje 4 × 10 = 40.
- Číslice 3 je na místě „stovek“ (10^2, deset na druhou mocninu), což představuje 3 × 100 = 300.

Sečtením těchto hodnot (300 + 40 + 5) dostaneme celkovou hodnotu 345.

Nyní se podívejme na binární systém. Na rozdíl od desetinného systému, který používá deset číslic, binární systém používá pouze dvě číslice: 0 a 1. Každá číslice v binárním čísle představuje mocninu 2, ne 10.

Například v binárním čísle 101:

- Nejpravější číslice (1) je na místě „jedniček“ (2^0, dva na nultou mocninu), což představuje 1.
- Prostřední číslice (0) je na místě „dvojek“ (2^1, dva na první mocninu), což představuje 0 × 2 = 0.
- Nejlevější číslice (1) je na místě „čtyřek“ (2^2, dva na druhou mocninu), což představuje 1 × 4 = 4.

Pro zjištění desítkové hodnoty binárního čísla 101 sečtěte tyto hodnoty dohromady: 4 (z místa „čtyřek“) + 0 (z místa „dvojek“) + 1 (z místa „jedniček“) = 5.

Takže binární číslo 101 odpovídá desítkovému číslu 5.

**Proč počítače používají binární systém**

Desetinný systém je nejběžněji používaný číselný systém a používá se v každodenním počítání a aritmetice. Lidé mají deset prstů, což činí desetinný systém intuitivním a přímým. Tento přirozený způsob počítání pravděpodobně ovlivnil vznik desetinného systému. I když je desetinný systém jednoduchý a pohodlný pro nás, lidi, není nejlepší volbou pro počítače. Místo toho je binární systém pro tyto elektronické přístroje vhodnější. Důvod spočívá v „anatomii“ počítačů.

Počítače používají elektrické obvody, které mohou být zapnuté nebo vypnuté. Tyto dva stavy jsou přirozeně reprezentovány binárními číslicemi 0 a 1. Binární systém je ideální pro počítače, protože se perfektně shoduje s jejich elektrickými signály zapnuto/vypnuto. Používáním binárního systému mohou počítače efektivně zpracovávat a ukládat data.

CPU, klíčová součást počítače, se spoléhá na tranzistory jako na základní jednotky. Tranzistor je miniaturní a jednoduchý obvodový prvek, který může fungovat jako elektronický vypínač a zesilovat slabé elektrické signály. Moderní CPU obsahují miliardy tranzistorů, které fungují jako vypínače pro zpracování a ukládání dat. Podobně RAM, GPU a SSD (Solid State Drive) také používají tranzistory.

V počítači téměř všechny tranzistory fungují jako vypínače, což znamená, že pracují pouze ve dvou stavech: zapnuto a vypnuto. Je tedy přirozené a jednoduché používat 1 pro „zapnuto“ a 0 pro „vypnuto“.

**(2) Jak binární kód reprezentuje data**

Abychom pochopili, jak binární kód reprezentuje data, podívejme se nejprve na to, jak počítač zpracovává a ukládá informace. Když program běží, jeho série instrukcí se načítá do RAM. Spolu s instrukcemi z jiných programů jsou tyto instrukce připraveny k vykonání. CPU neustále načítá instrukce z této fronty, jednu po druhé. Každý čas, kdy CPU načte instrukci, čte z RAM a někdy instrukce zahrnují čtení nebo zápis na pevný disk. Moderní CPU může zpracovávat až 64 bitů dat najednou, zatímco starší CPU mohou zpracovávat pouze až 32 bitů.

To vyvolává několik otázek: Kolik bitů dat by měl počítač číst nebo zapisovat z RAM najednou? Kolik bitů bychom měli použít jako základní jednotku? Kdyby CPU čtlo nebo zapisovalo pouze 1 bit najednou, bylo by to extrémně neefektivní a časově náročné kvůli vysoké frekvenci operací. Proto 64bitové CPU obvykle čte nebo zapisuje 64 bitů dat najednou a 32bitové CPU zpracovává 32 bitů najednou, aby se vyvážila výkonnost a efektivita. RAM obvykle používá 8 bitů jako základní jednotku.

Volba 8bitové jednotky pro RAM je ovlivněna historickými, technologickými a standardizačními faktory. Rané počítače používaly různé velikosti datových jednotek, ale jak technologie pokročila, 8bitová jednotka se stala běžnější. Tato velikost našla rovnováhu mezi efektivitou a schopností, zejména při reprezentaci znaků a dat.

**ASCII Kód**

ASCII (American Standard Code for Information Interchange) je standard kódování znaků používaný k reprezentaci textu v počítačích a jiných textových zařízeních. Je základem mnoha moderních kódovacích schémat. ASCII používá 7-bitové binární číslo, což umožňuje 128 unikátních znaků, s kódy v rozmezí 0 až 127.

Standardní ASCII znaky zahrnují:

- Řídicí znaky (0–31):

  Jedná se o neviditelné znaky, které řídí zpracování textu. Příklady zahrnují:

  - `0` (NUL): Null znak
  - `9` (TAB): Horizontální tabulátor
  - `10` (LF): Zalamování řádku (nový řádek)
  - `13` (CR): návrat kurzoru

- Tisknutelné znaky (32–127):

  To jsou viditelné znaky jako písmena, číslice, interpunkční znaménka a symboly. Příklady zahrnují:

  - `32` (SPACE): Mezera
  - `65` (A): Velké písmeno A
  - `97` (a): Malé písmeno a
  - `48` (0): Číslice 0
  - `33` (!): Vykřičník

ASCII kódy využívají 7 bitů, což může kódovat 128 znaků, ale moderní počítače používají 8 bitů jako základní datovou jednotku. Tato 8-bitová jednotka, nebo byte, umožňuje kódování 256 znaků, což je obvykle dostatečné pro angličtinu a další západní jazyky. Pro složitější jazyky se používají další byty k reprezentaci znaků, což zajišťuje efektivní využití paměti a úložného prostoru. I když ASCII samotné vyžaduje pouze 7 bitů, 8-bitové zastoupení je běžné v počítačích, kde je další bit obvykle nastaven na 0. Například ASCII kód pro velké písmeno "A" je 65 (desítkově) nebo 01000001 (binárně), přičemž další bit je nula.

**Některé matematické operátory na počítači**

Na standardní klávesnici si můžete všimnout, že některé matematické symboly, jako je znak násobení (×), chybí. Místo toho počítače často používají alternativní symboly pro jednoduchost. Zde jsou některé běžné příklady:

- Násobení: `*`
- Dělení: `/`
- Modulo (zbytek po dělení): `%`
- Exponentace: `**` (často používané v programovacích jazycích jako Python), a v některých případech `^` (běžně používané v kalkulačkách).

Tyto symboly se používají k provádění aritmetických operací v různých programovacích prostředích a kalkulačkách.

**Jednotky velikosti dat**

Moderní počítače používají 8 bitů jako základní jednotku dat, známou jako byte (B). Zde je přehled dalších běžných jednotek velikosti dat a jejich převodů:

- Bit (b, malým písmenem): Nejmenší jednotka dat v informatice. Představuje binární číslici, která může být buď `0`, nebo `1`. 
- Byte (B, velkým písmenem): Základní jednotka velikosti dat, skládající se z 8 bitů. 

Pro větší měření se používají dva různé převody: binární a desetinný. Binární jednotky jsou založeny na mocninách 2, zatímco desetinné jednotky používají mocniny 10. V informatice jsou standardem binární jednotky, zatímco desetinné jednotky se často používají v marketingu. Od bytu je větší binární jednotka 2^10 (1024) krát větší než předchozí menší jednotka, zatímco větší desetinná jednotka je 10^3 (1000) krát větší než předchozí menší jednotka.

Binární jednotky:

- Kilobyte (KB): 1 KB = 1 024 byte (2^10 byte).
- Megabyte (MB): 1 MB = 1 024 KB = 1 048 576 byte (2^20 byte).
- Gigabyte (GB): 1 GB = 1 024 MB = 1 073 741 824 byte (2^30 byte).
- Terabyte (TB): 1 TB = 1 024 GB = 1 099 511 627 776 byte (2^40 byte).

Desetinné jednotky:

- Kilobyte (KB): 1 KB = 1 000 byte (10^3 byte).
- Megabyte (MB): 1 MB = 1 000 KB = 1 000 000 byte (10^6 byte).
- Gigabyte (GB): 1 GB = 1 000 MB = 1 000 000 000 byte (10^9 byte).
- Terabyte (TB): 1 TB = 1 000 GB = 1 000 000 000 000 byte (10^12 byte).

Aby se jasně odlišily binární měření od desetinných, IEC (Mezinárodní elektrotechnická komise) zavedla předponu "bi", která znamená "binární". Tyto jednotky mají stejné hodnoty jako binární převod, ale jejich názvy jsou rozlišitelnější.

- Kibibyte (KiB): 1 KiB = 1 024 byte (2^10 byte).
- Mebibyte (MiB): 1 MiB = 1 024 KiB = 1 048 576 byte (2^20 byte).
- Gibibyte (GiB): 1 GiB = 1 024 MiB = 1 073 741 824 byte (2^30 byte).
- Tebibyte (TiB): 1 TiB = 1 024 GiB = 1 099 511 627 776 byte (2^40 byte).

Desetinné převody se často používají v marketingu, protože produkují větší čísla pro stejnou kapacitu úložiště. Například pevný disk označený jako 500 GB (desetinný) má ve skutečnosti 500 000 000 000 byte, což je přibližně 465 GiB (binární).

**Binární reprezentace různých datových typů**

Všechna data, bez ohledu na jejich typ, jsou nakonec reprezentována v binární formě. Data jsou zpracovávána a ukládána jako sekvence 0 a 1 v počítačích. Abychom uložili text, obrázek, zvuk nebo jiný typ dat, musíme je "přeložit" do binárního kódu, což se nazývá "kódování". Když potřebujeme tato data používat v lidsky srozumitelné podobě, software interpretuje binární kód, aby je převedl na text, obrázek a další formáty, které rozumíme, což se nazývá "dekódování".

Zde jsou příklady kódování různých typů dat:

- **Text**: Znaky jsou reprezentovány pomocí kódovacích standardů jako ASCII nebo Unicode (Univerzální kód). Každý znak je přiřazen jedinečný binární kód. Například kód ASCII pro 'A' je 01000001 v binární formě.
- **Čísla**: Čísla jsou reprezentována různými binárními formáty, jako jsou celá čísla (čísla bez desetinných míst, například `-3`, `0`) a čísla s pohyblivou řádovou čárkou (čísla s desetinnými místy, například `3.14`, `-0.01`). Například celé číslo 5 je 00000101 v 8bitové binární reprezentaci.
- **Zvuk**: Zvuková data jsou obvykle reprezentována jako série vzorků. Tyto vzorky jsou zaznamenávány v pravidelných intervalech a kódovány v binárním formátu. Například 16bitový zvukový vzorek může být reprezentován jako 16bitové binární číslo.
- **Obrázky**: Obrázky jsou složeny z pixelů, z nichž každý má hodnoty barev. V černobílém obrázku může být každý pixel reprezentován 8bitovým binárním číslem, které udává jeho intenzitu. V barevném obrázku je každý pixel obvykle reprezentován kombinací binárních čísel odpovídajících jeho červené, zelené a modré složce.
- **Video**: Video je sekvence obrázků (snímků) a často obsahuje zvuk. Každý snímek je obrázek reprezentovaný v binární podobě a snímky jsou zobrazovány rychle za sebou, aby vytvořily iluzi pohybu.
- **Soubory a formáty**: Různé formáty souborů (jako JPEG pro obrázky, MP3 pro zvuk, MP4 pro video) definují specifické způsoby kódování dat. Tyto formáty používají binární kód k efektivnímu strukturování a kompresi dat.

**Kompresování dat**

Představte si, že máte obrovskou hromadu hraček, kterou potřebujete zabalit do malé krabice. Kompresování dat je jako nalezení způsobu, jak uspořádat a zmenšit hračky tak, aby se všechny vešly do krabice, aniž byste některé ztratili. V počítačích jde o to, jak zmenšit velikost souborů, aby zabíraly méně místa a byly rychleji odesílány nebo ukládány.

Zde je jednoduchý příklad algoritmu Run-Length Encoding (RLE): pokud máte posloupnost anglických písmen "AAAAAAADDDDCCVSSSSSSSSS", která má 23 znaků a zabírá 23 bajtů místa, můžeme spočítat, kolikrát se každé písmeno opakuje, a nahradit tato písmena počtem a písmenem samotným: "7A4D2C1V9S". Nová sekvence se skládá z 5 počtů a 5 písmen. Můžeme použít jeden bajt na každý počet a použít ASCII kód pro písmena, což dává dohromady 10 bajtů. Když potřebujeme sekvenci dekomprimovat, přečteme počet a písmeno a poté opakujeme písmeno podle počtu. Tímto způsobem zmenšujeme velikost dat a používáme méně místa.

Pro různé typy dat obvykle vybíráme různé kompresní algoritmy, protože každý má své výhody a omezení.