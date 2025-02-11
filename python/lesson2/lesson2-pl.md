Autor: Jaynam Tłumacz: AI Zaktualizowano 27 sierpnia 2024

## 2. Zajdźmy do świata programowania

Witaj w niesamowitym świecie komputerów! Zanim zabierzemy się do pracy z programowaniem, warto poznać podstawy działania komputerów. Zaczniemy od podstawowych informacji związanych z komputerami.

### 2.1 Jak komputer przetwarza informacje

**(1) Wprowadzenie do kodu binarnego**

Czy kiedykolwiek zastanawiałeś się, jak twój komputer, tablet czy smartfon wykonuje tak wiele fajnych rzeczy? Wszystko sprowadza się do tego, jak przetwarza informacje. Zacznijmy od podstaw tego procesu, zaczynając od czegoś, co nazywamy "kodem binarnym". Najpierw pomyślmy, jak przedstawiamy informacje w naszym codziennym życiu.

**Sposoby przedstawiania informacji w naszym codziennym świecie**

W naszym codziennym życiu używamy różnych sposobów na przedstawianie i dzielenie się informacjami. Na przykład:

- Języki: Czy to w formie pisemnej, czy ustnej, komunikujemy się i dzielimy informacjami za pomocą symboli opartych na literach, słowach i dźwiękach. Każda litera ma określony kształt i znaczenie, a każde słowo czy zdanie, które wypowiadamy, przekazuje konkretne znaczenie.
- Symbole graficzne i obrazki: Znaki drogowe, rysunki i zdjęcia mogą zawierać wiele informacji.
- Dźwięki: Używamy także różnych dźwięków, aby przekazać pewne znaczenia. Dźwięk dzwonka do drzwi może oznaczać, że odwiedza nas gość. Dźwięk syreny ostrzega nas przed zagrożeniem.

W podobny sposób komputery potrzebują specjalnego systemu, aby zrozumieć i przetworzyć informacje. Tym systemem jest kod binarny, który jest jak uniwersalny język zbudowany z tylko dwóch symboli: 0 i 1. Te symbole współpracują ze sobą, aby reprezentować różne dane, od liczb i liter po obrazki i dźwięki. "Binarny" odnosi się do "systemu binarnego", który używa tylko dwóch symboli (0 i 1). A "kod" oznacza użycie zestawu symboli lub reguł do kodowania, dekodowania lub komunikowania informacji w sposób, który sprawia, że jest ona zrozumiała lub użyteczna, szczególnie w kontekście komputerów i przetwarzania informacji.

**System binarny**

W codziennym życiu zazwyczaj używamy liczb opartych na 10 cyfrach: 0 do 9. Zróbmy trochę prostych obliczeń. Jeśli dodasz 1 do 0, wynikiem jest 1. Dodaj 1 jeszcze raz, otrzymujesz 2. Jeśli dodasz 1 dziewięć razy do 0, użyjesz wszystkich 10 cyfr od 0 do 9. Ale co się stanie, jeśli dodasz 1 dziesięć razy do 0? Wynik to 10. Przyjrzyjmy się bliżej "10". Składa się z "1" i "0", a "1" jest po lewej stronie "0". Cóż, jeśli dodamy dwie cyfry liczby "10", to 1 plus 0 daje 1. Jednak to proste dodawanie nie wyjaśnia, jak '10' reprezentuje liczbę równą 10 w naszym systemie dziesiętnym.

W codziennym życiu, chyba że określono inaczej, liczby, których używamy, są oparte na "systemie dziesiętnym". Słowo "dziesiętny" pochodzi od łacińskiego słowa "decem", które oznacza "dziesięć". "System dziesiętny" odnosi się do systemu liczbowego opartego na potęgach dziesięciu. W systemie dziesiętnym każda wartość miejsca jest dziesięć razy większa od wartości miejsca po prawej stronie. Każda cyfra w liczbie reprezentuje inną wartość miejsca, która w systemie dziesiętnym jest potęgą dziesięciu.

Na przykład liczba 345:

- Cyfra 5 znajduje się w miejscu "jedności" (10^0, dziesięć do potęgi zerowej), reprezentując 5.
- Cyfra 4 znajduje się w miejscu "dziesiątek" (10^1, dziesięć do potęgi pierwszej), reprezentując 4 × 10 = 40.
- Cyfra 3 znajduje się w miejscu "setek" (10^2, dziesięć do potęgi drugiej), reprezentując 3 × 100 = 300.

Dodając te wartości razem (300 + 40 + 5) otrzymujemy całkowitą wartość 345.

Teraz przyjrzyjmy się systemowi binarnemu. W przeciwieństwie do systemu dziesiętnego, który używa dziesięciu cyfr, system binarny używa tylko dwóch cyfr: 0 i 1. Każda cyfra w liczbie binarnej reprezentuje potęgę 2, a nie 10.

Na przykład, w liczbie binarnej 101:

- Najbardziej prawostronna cyfra (1) znajduje się w miejscu "jedności" (2^0, dwa do potęgi zerowej), co reprezentuje 1.
- Środkowa cyfra (0) znajduje się w miejscu "dwójek" (2^1, dwa do potęgi pierwszej), co reprezentuje 0 × 2 = 0.
- Najbardziej lewostronna cyfra (1) znajduje się w miejscu "czwórek" (2^2, dwa do potęgi drugiej), co reprezentuje 1 × 4 = 4.

Aby znaleźć wartość dziesiętną liczby binarnej 101, dodajemy te wartości razem: 4 (z miejsca "czwórek") + 0 (z miejsca "dwójek") + 1 (z miejsca "jedności") = 5.

Tak więc liczba binarna 101 odpowiada liczbie dziesiętnej 5.

**Dlaczego komputery używają systemu binarnego**

System dziesiętny jest najczęściej stosowanym systemem liczbowym i jest używany w codziennym liczeniu oraz arytmetyce. Ludzie mają dziesięć palców, co sprawia, że liczenie w systemie dziesiętnym jest intuicyjne i proste. Ta naturalna metoda liczenia prawdopodobnie wpłynęła na rozwój systemu dziesiętnego. Chociaż system dziesiętny jest prosty i wygodny dla ludzi, nie jest najlepszym wyborem dla komputerów. Zamiast tego, system binarny jest bardziej odpowiedni dla takich urządzeń elektronicznych. Powód tkwi w "anatomii" komputerów.

Komputery używają obwodów elektronicznych, które mogą być w stanie włączonym lub wyłączonym. Te dwa stany są naturalnie reprezentowane przez cyfry binarne 0 i 1. System binarny jest idealny dla komputerów, ponieważ doskonale pasuje do ich sygnałów elektrycznych włączonych/wyłączonych. Dzięki użyciu systemu binarnego, komputery mogą efektywnie przetwarzać i przechowywać dane.

CPU, kluczowy element komputera, opiera się na tranzystorach jako podstawowych jednostkach. Tranzystor to maleńki i prosty element obwodu, który może działać jako elektroniczny włącznik/wyłącznik oraz wzmacniać słabe sygnały elektryczne. Nowoczesne CPU zawierają miliardy tranzystorów, które pełnią funkcję włączników/wyłączników do przetwarzania i przechowywania danych. Podobnie RAM, GPU i SSD (dyski półprzewodnikowe) również wykorzystują tranzystory.

W komputerze prawie wszystkie tranzystory działają jako włączniki/wyłączniki, co oznacza, że działają w tylko dwóch stanach: włączonym i wyłączonym. Dlatego naturalne jest używanie 1 dla stanu "włączonego" i 0 dla stanu "wyłączonego".

**(2) Jak kod binarny reprezentuje dane**

Aby zrozumieć, jak kod binarny reprezentuje dane, przyjrzyjmy się, jak komputer przetwarza i przechowuje informacje. Gdy program jest uruchomiony, jego instrukcje są ładowane do RAM. Obok instrukcji z innych programów są one kolejno wykonywane. CPU nieprzerwanie pobiera instrukcje z tej kolejki, jedna po drugiej. Za każdym razem, gdy CPU pobiera instrukcję, odczytuje ją z RAM, a czasami instrukcja obejmuje odczyt lub zapis na dysku twardym. Nowoczesne CPU mogą przetwarzać do 64 bitów danych na raz, podczas gdy starsze CPU mogą przetwarzać tylko do 32 bitów.

Rodzi to kilka pytań: Ile bitów danych komputer powinien odczytać lub zapisać z RAM na raz? Ile bitów powinno być używane jako podstawowa jednostka? Jeśli CPU miałoby odczytywać lub zapisywać tylko 1 bit na raz, byłoby to niezwykle nieefektywne i czasochłonne z powodu wysokiej częstotliwości operacji. Dlatego 64-bitowy CPU zazwyczaj odczytuje lub zapisuje 64 bity danych na raz, a 32-bitowy CPU przetwarza 32 bity na raz, aby zrównoważyć wydajność i efektywność. RAM zazwyczaj używa 8 bitów jako swojej podstawowej jednostki.

Wybór jednostki 8-bitowej dla RAM jest wynikiem czynników historycznych, technologicznych i standaryzacyjnych. Wczesne komputery używały różnych rozmiarów jednostek danych, ale w miarę rozwoju technologii jednostka 8-bitowa stała się bardziej powszechna. Ten rozmiar znalazł równowagę między wydajnością a zdolnością, szczególnie w reprezentacji znaków i danych.

**Kod ASCII**

ASCII (American Standard Code for Information Interchange) to standard kodowania znaków używany do reprezentowania tekstu w komputerach i innych urządzeniach tekstowych. Jest podstawą wielu nowoczesnych schematów kodowania. ASCII używa 7-bitowej liczby binarnej, co pozwala na reprezentację 128 unikalnych znaków, z kodami w zakresie od 0 do 127.

Standardowe znaki ASCII obejmują:

- Znaki kontrolne (0–31):

  Są to znaki niewidoczne, które kontrolują przetwarzanie tekstu. Przykłady obejmują:

  - `0` (NUL): Znak null
  - `9` (TAB): Tabulacja pozioma
  - `10` (LF): Przesunięcie w dół (nowa linia)
  - `13` (CR): Powrót karetki

- Znaki drukowalne (32–127):

  Są to widoczne znaki, takie jak litery, cyfry, znaki interpunkcyjne i symbole. Przykłady obejmują:

  - `32` (SPACJA): Znak spacji
  - `65` (A): Duża litera A
  - `97` (a): Mała litera a
  - `48` (0): Cyfra 0
  - `33` (!): Wykrzyknik

Kody ASCII wykorzystują 7 bitów, co pozwala na kodowanie 128 znaków, ale nowoczesne komputery używają 8 bitów jako podstawowej jednostki danych. Ta jednostka 8-bitowa, czyli bajt, pozwala na kodowanie 256 znaków, co jest zazwyczaj wystarczające dla języka angielskiego i innych języków zachodnich. Dla bardziej złożonych języków używa się dodatkowych bajtów do reprezentacji znaków, zapewniając efektywne wykorzystanie pamięci i przechowywania. Choć sam ASCII wymaga tylko 7 bitów, reprezentacja 8-bitowa jest powszechna w komputerach, z dodatkowym bitem zazwyczaj ustawionym na 0. Na przykład, kod ASCII dla dużej litery "A" to 65 (dziesiętnie) lub 01000001 (binarnie), przy czym dodatkowy bit jest zerowy.

**Niektóre symbole operatorów matematycznych w komputerach**

Na standardowej klawiaturze możesz zauważyć brak niektórych symboli matematycznych, takich jak znak mnożenia (×). Zamiast tego komputery często używają alternatywnych symboli dla uproszczenia. Oto kilka powszechnie stosowanych przykładów:

- Mnożenie: `*`
- Dzielenie: `/`
- Modulo (reszta z dzielenia): `%`
- Potęgowanie: `**` (często używane w językach programowania, takich jak Python), a w niektórych przypadkach `^` (często używane w kalkulatorach).

Te symbole są używane do wykonywania operacji arytmetycznych w różnych środowiskach programistycznych i kalkulatorach.

**Jednostki rozmiaru danych**

Nowoczesne komputery używają 8 bitów jako podstawowej jednostki danych, znanej jako bajt (B). Oto przegląd innych powszechnie używanych jednostek rozmiaru danych i ich konwersji:

- Bit (b, mała litera): Najmniejsza jednostka danych w komputerach. Reprezentuje cyfrę binarną, która może być `0` lub `1`.
- Bajt (B, wielka litera): Podstawowa jednostka danych, składająca się z 8 bitów.

Dla większych miar używane są dwie różne konwersje: binarne i dziesiętne. Jednostki binarne opierają się na potęgach liczby 2, podczas gdy jednostki dziesiętne używają potęg liczby 10. W komputerach standardowo stosuje się jednostki binarne, podczas gdy jednostki dziesiętne są często używane w marketingu. Rozpoczynając od bajta, większa jednostka oparta na systemie binarnym jest 2^10 (1024) razy większa od mniejszej jednostki, podczas gdy większa jednostka oparta na systemie dziesiętnym jest 10^3 (1000) razy większa od mniejszej jednostki.

Jednostki oparte na systemie binarnym:

- Kilobajt (KB): 1 KB = 1 024 bajty (2^10 bajtów).
- Megabajt (MB): 1 MB = 1 024 KB = 1 048 576 bajtów (2^20 bajtów).
- Gigabajt (GB): 1 GB = 1 024 MB = 1 073 741 824 bajty (2^30 bajtów).
- Terabajt (TB): 1 TB = 1 024 GB = 1 099 511 627 776 bajtów (2^40 bajtów).

Jednostki oparte na systemie dziesiętnym:

- Kilobajt (KB): 1 KB = 1 000 bajtów (10^3 bajtów).
- Megabajt (MB): 1 MB = 1 000 KB = 1 000 000 bajtów (10^6 bajtów).
- Gigabajt (GB): 1 GB = 1 000 MB = 1 000 000 000 bajtów (10^9 bajtów).
- Terabajt (TB): 1 TB = 1 000 GB = 1 000 000 000 000 bajtów (10^12 bajtów).

Aby wyraźnie rozróżnić jednostki oparte na systemie binarnym od jednostek dziesiętnych, IEC (Międzynarodowa Komisja Elektrotechniczna) wprowadziła prefiks „bi”, który oznacza „binarny”. Te jednostki mają takie same wartości jak jednostki binarne, ale bardziej wyróżniające się nazwy.

- Kibibajt (KiB): 1 KiB = 1 024 bajty (2^10 bajtów).
- Mebibajt (MiB): 1 MiB = 1 024 KiB = 1 048 576 bajtów (2^20 bajtów).
- Gibibajt (GiB): 1 GiB = 1 024 MiB = 1 073 741 824 bajty (2^30 bajtów).
- Tebibajt (TiB): 1 TiB = 1 024 GiB = 1 099 511 627 776 bajtów (2^40 bajtów).

Konwersje dziesiętne są często używane w marketingu, ponieważ produkują większe liczby dla tej samej pojemności pamięci. Na przykład, dysk twardy oznaczony jako mający 500 GB (dziesiętnie) ma rzeczywiście 500 000 000 000 bajtów, co jest w przybliżeniu 465 GiB (binarne).

**Reprezentacje binarne dla różnych typów danych**

Wszystkie dane, niezależnie od ich typu, są ostatecznie reprezentowane w formie binarnej. Dane są przetwarzane i przechowywane jako sekwencje zer i jedynek w komputerach. Aby przechowywać tekst, obraz, dźwięk lub inne typy danych, musimy je "przetłumaczyć" na kod binarny, co nazywamy "kodowaniem". Kiedy potrzebujemy używać tych danych w formie przyjaznej dla człowieka, oprogramowanie interpretuje kod binarny, aby przekształcić go w tekst, obraz i inne formaty, które możemy zrozumieć, co nazywamy "dekodowaniem".

Oto kilka przykładów kodowania różnych typów danych:

- **Tekst**: Znaki są reprezentowane przy użyciu standardów kodowania takich jak ASCII lub Unicode (Uniwersalny Kod). Każdemu znakowi przypisywany jest unikalny kod binarny. Na przykład kod ASCII dla 'A' to 01000001 w postaci binarnej.
- **Liczby**: Liczby są reprezentowane przy użyciu różnych formatów binarnych, takich jak liczby całkowite (liczby bez części ułamkowej, takie jak `-3`, `0`) oraz liczby zmiennoprzecinkowe (liczby z częścią ułamkową, takie jak `3.14`, `-0.01`). Na przykład liczba całkowita 5 jest reprezentowana jako 00000101 w 8-bitowej postaci binarnej.
- **Dźwięk**: Dane dźwiękowe są zazwyczaj reprezentowane jako seria próbek. Próbki te są rejestrowane w regularnych odstępach czasu i kodowane w postaci binarnej. Na przykład, próbka dźwięku o 16-bitowej precyzji może być reprezentowana jako 16-bitowa liczba binarna.
- **Obrazy**: Obrazy składają się z pikseli, z których każdy ma wartości kolorów. W obrazie w odcieniach szarości każdy piksel może być reprezentowany przez 8-bitową liczbę binarną wskazującą jego intensywność. W obrazie kolorowym każdy piksel jest zazwyczaj reprezentowany przez kombinację liczb binarnych odpowiadających jego składnikom kolorów: czerwony, zielony i niebieski.
- **Wideo**: Wideo to sekwencja obrazów (klatek) i często zawiera dźwięk. Każda klatka to obraz reprezentowany w postaci binarnej, a klatki są wyświetlane w szybkim tempie, aby stworzyć iluzję ruchu.
- **Pliki i formaty**: Różne formaty plików (takie jak JPEG dla obrazów, MP3 dla dźwięku, MP4 dla wideo) definiują specyficzne sposoby kodowania danych. Te formaty używają kodu binarnego do strukturyzowania i kompresji danych w sposób efektywny.

**Kompresja danych**

Wyobraź sobie, że masz ogromny stos zabawek, które musisz spakować do małego pudełka. Kompresja danych jest jak znalezienie sposobu na uporządkowanie i skurczenie zabawek, aby wszystkie zmieściły się w pudełku bez utraty żadnej z nich. W komputerach chodzi o zmniejszenie rozmiaru plików, aby zajmowały mniej miejsca i były szybsze do wysłania lub przechowywania.

Oto prosty przykład algorytmu kodowania długości biegu (RLE): jeśli masz sekwencję liter angielskich "AAAAAAADDDDCCVSSSSSSSSS", która składa się z 23 znaków i zajmuje 23 bajty miejsca. Możemy policzyć, ile razy każda litera się powtarza i zastąpić te litery liczbą i samą literą: "7A4D2C1V9S". Nowa sekwencja składa się z 5 liczb i 5 liter. Możemy użyć jednego bajta do reprezentowania każdej liczby i kodu ASCII dla liter, co razem daje 10 bajtów. Kiedy musimy dekompresować sekwencję, odczytujemy liczbę i literę, a następnie powtarzamy literę zgodnie z liczbą. W ten sposób redukujemy rozmiar danych i używamy mniej miejsca.

Dla różnych typów danych zazwyczaj wybieramy różne algorytmy kompresji, ponieważ każdy z nich ma swoje zalety i ograniczenia.