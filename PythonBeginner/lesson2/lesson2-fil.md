May-akda: Jaynam Tagasalin: AI Nai-update noong 27 ng Agosto, 2024

## 2. Tingnan ang Programming

Maligayang pagdating sa kamangha-manghang mundo ng mga computer! Bago tayo mag-umpisa sa paggawa ng programming, mahalagang malaman ang ilang mga pangunahing bagay tungkol sa computer. Tuklasin natin ang ilang mga pangunahing aspeto ng isang computer na may kinalaman sa programming.

### 2.1 Paano Nagproseso ng Impormasyon ang Computer

**(1) Panimula sa Binary Code**

Nais mo bang malaman kung paano nalalaman ng iyong computer, tablet, o smartphone kung paano gumawa ng maraming kahanga-hangang bagay? Lahat ito ay tungkol sa kung paano nito pinoproseso ang impormasyon. Simulan natin sa isang bagay na tinatawag na "binary code". Una, isipin natin kung paano natin kinakatawan ang impormasyon sa ating pang-araw-araw na buhay.

**Mga Paraan ng Pagtatanghal ng Impormasyon sa Ating Pang-araw-araw na Buhay**

Sa ating pang-araw-araw na buhay, gumagamit tayo ng iba't ibang paraan upang ipakita at ibahagi ang impormasyon. Halimbawa:

- Wika: Kung ito man ay nakasulat o sinasalita, maaari tayong makipagkomunikasyon at magbahagi ng impormasyon sa pamamagitan ng mga simbolo batay sa mga nakasulat na letra, salita, at tunog. Ang bawat letra ay may tiyak na anyo at kahulugan, at bawat salita o pangungusap na sinasabi natin ay nagdadala ng tiyak na kahulugan.
- Mga Simbolo at Larawan: Ang mga simbolo sa trapiko, mga guhit, at mga larawan ay maaaring maglaman ng maraming impormasyon.
- Tunog: Gumagamit din tayo ng iba't ibang tunog upang ipahayag ang ilang kahulugan. Ang tunog ng doorbell ay maaaring magpahiwatig na may dumating na bisita. Ang tunog ng siren ay nagbibigay ng ilang babala.

Sa parehong paraan, kailangan ng mga computer ng isang espesyal na sistema upang maunawaan at maproseso ang impormasyon. Ang sistemang ito ay binary code, na parang unibersal na wika na binubuo lamang ng dalawang simbolo: 0 at 1. Ang "binary" ay tumutukoy sa "binary system," na gumagamit lamang ng dalawang simbolo (0 at 1). At ang "code" ay nagsasangkot ng paggamit ng isang set ng mga simbolo o patakaran upang i-encode, i-decode, o i-komunika ang impormasyon sa isang paraan na nagiging nauunawaan o magagamit, lalo na sa konteksto ng mga computer at pagproseso ng impormasyon.

**Ang Sistema ng Binaryo**

Sa ating pang-araw-araw na buhay, karaniwan nating ginagamit ang mga numero batay sa 10 na mga digit: 0 hanggang 9. Tingnan natin ang isang simpleng matematika. Kapag nagdagdag ka ng 1 sa 0, ang resulta ay 1. Dagdagan mo pa ng isa, makakakuha ka ng 2. Kung magdadagdag ka ng 1 siyam na beses sa 0, magagamit mo ang lahat ng 10 na digit mula 0 hanggang 9. Pero paano kung magdagdag ka ng 1 sampung beses sa 0? Ang resulta ay 10. Tingnan natin nang mabuti ang "10". Ito ay binubuo ng "1" at "0", at ang "1" ay nasa kaliwa ng "0". Gayunpaman, kung idagdag natin ang dalawang digit ng "10", magiging 1 plus 0 na katumbas ng 1. Ngunit, ang simpleng pagdaragdag na ito ay hindi nagpapaliwanag kung paano ang '10' ay kumakatawan sa isang numero na katumbas ng 10 sa ating decimal na sistema.

Sa pang-araw-araw na buhay, maliban kung ipinaliwanag nang iba, ang mga numerong ginagamit natin ay batay sa "decimal na sistema". Ang salitang "decimal" ay nagmula sa Latin na salita na "decem" na nangangahulugang "sampu". Ang "decimal na sistema" ay tumutukoy sa isang sistema ng numero na batay sa mga kapangyarihan ng sampu. Sa decimal na sistema, bawat lugar ng halaga ay sampung beses na mas mataas kaysa sa lugar sa kanan nito. Bawat digit sa isang numero ay kumakatawan sa iba't ibang lugar ng halaga, na sa decimal na sistema ay isang kapangyarihan ng sampu.

Halimbawa, tingnan natin ang numero 345:

- Ang digit na 5 ay nasa "units" na lugar (10^0, sampu sa kapangyarihan ng zero), na kumakatawan sa 5.
- Ang digit na 4 ay nasa "tens" na lugar (10^1, sampu sa kapangyarihan ng isa), na kumakatawan sa 4 × 10 = 40.
- Ang digit na 3 ay nasa "hundreds" na lugar (10^2, sampu sa kapangyarihan ng dalawa), na kumakatawan sa 3 × 100 = 300.

Ang pagdaragdag ng mga halagang ito (300 + 40 + 5) ay nagbibigay ng kabuuang halaga ng 345.

Ngayon, tuklasin natin ang sistema ng binaryo. Hindi tulad ng decimal na sistema, na gumagamit ng sampung digit, ang binaryo na sistema ay gumagamit lamang ng dalawang digit: 0 at 1. Bawat digit sa isang binaryong numero ay kumakatawan sa isang kapangyarihan ng 2, hindi 10.

Halimbawa, sa binaryong numero 101:

- Ang kanang digit (1) ay nasa "ones" na lugar (2^0, dalawa sa kapangyarihan ng zero), na kumakatawan sa 1.
- Ang gitnang digit (0) ay nasa "twos" na lugar (2^1, dalawa sa kapangyarihan ng isa), na kumakatawan sa 0 × 2 = 0.
- Ang kaliwang digit (1) ay nasa "fours" na lugar (2^2, dalawa sa kapangyarihan ng dalawa), na kumakatawan sa 1 × 4 = 4.

Upang malaman ang decimal na halaga ng binaryong numero 101, idagdag ang mga halagang ito: 4 (mula sa "fours" na lugar) + 0 (mula sa "twos" na lugar) + 1 (mula sa "ones" na lugar) = 5.

Kaya, ang binaryong numero 101 ay katumbas ng decimal na numero 5.

**Bakit gumagamit ng binary system ang mga computer?**

Ang decimal system ang pinaka-karaniwang ginagamit na sistema ng numero at ito ang ginagamit sa pang-araw-araw na pagbibilang at aritmetika. May sampung daliri ang mga tao, kaya’t natural na gumagamit tayo ng decimal system. Bagaman madali at maginhawa ito para sa atin, hindi ito ang pinakamainam para sa mga computer. Sa halip, mas angkop ang binary system para sa mga elektronikong makina. Ang dahilan nito ay nakasalalay sa “anatomya” ng mga computer.

Gumagamit ang mga computer ng mga electrical circuits na maaaring nasa estado ng on o off. Ang dalawang estadong ito ay natural na kinakatawan ng binary digits na 0 at 1. Ang binary ay ideal para sa mga computer dahil perpektong tumutugma ito sa on/off electrical signals. Sa paggamit ng binary, epektibong napoproseso at naitatago ng mga computer ang data.

Ang CPU, isang pangunahing bahagi ng computer, ay umaasa sa mga transistor bilang mga pangunahing unit. Ang transistor ay isang maliit at simpleng bahagi ng circuit, na maaaring kumilos bilang electronic on/off switches at palakasin ang mahihinang electrical signals. Ang mga modernong CPU ay naglalaman ng bilyong transistor, na gumagana bilang on/off switches para sa pagpoproseso at pag-iimbak ng data. Gayundin, ang RAM, GPU, at SSD (Solid State Drive) ay gumagamit din ng mga transistor.

Sa isang computer, halos lahat ng transistor ay gumagana bilang on/off switches, na nangangahulugang nag-ooperate lamang sila sa dalawang estado: on at off. Kaya’t natural at simple na gamitin ang 1 para sa "on" state at 0 para sa "off" state.

**(2) Paano nire-represent ng binary code ang data**

Upang maunawaan kung paano nire-represent ng binary code ang data, isaalang-alang muna natin kung paano pinoproseso at iniimbak ng PC ang impormasyon. Kapag tumatakbo ang isang programa, ang serye ng mga instruksyon nito ay iniloload sa RAM. Kasama ng mga instruksyon mula sa iba pang mga programa, ang mga ito ay inihahanay para sa pagpapatupad. Patuloy na kinukuha ng CPU ang mga instruksyon mula sa queue, isa-isa. Bawat pagkakataon na kinukuha ng CPU ang isang instruksyon, ito ay nagbabasa mula sa RAM, at kung minsan ang instruksyon ay kinabibilangan ng pagbabasa mula o pagsusulat sa hard drive. Ang mga modernong CPU ay maaaring magproseso ng hanggang 64 bits ng data sa isang pagkakataon, samantalang ang mga mas lumang CPU ay maaaring magproseso ng hanggang 32 bits lamang.

Ito ay nagbubukas ng ilang mga tanong: Gaano karaming bits ng data ang dapat basahin o isulat ng computer mula sa RAM sa isang pagkakataon? Gaano karaming bits ang dapat gamitin bilang pangunahing yunit? Kung ang CPU ay babasa o magsusulat lamang ng 1 bit sa isang pagkakataon, magiging napaka-inefficient at magtatagal dahil sa dami ng operasyon na kinakailangan. Kaya’t ang 64-bit CPU ay karaniwang nagbabasa o sumusulat ng 64 bits ng data sa isang pagkakataon, at ang 32-bit CPU ay nagpoproseso ng 32 bits sa isang pagkakataon upang mapanatili ang balanse ng performance at efficiency. Karaniwan, ang RAM ay gumagamit ng 8 bits bilang pangunahing yunit.

Ang pagpili ng 8-bit na yunit para sa RAM ay naapektuhan ng mga historical, technological, at standardization factors. Ang mga maagang computer ay gumagamit ng iba't ibang laki ng data unit, ngunit habang umuunlad ang teknolohiya, ang 8-bit na yunit ay naging mas karaniwan. Ang sukat na ito ay bumalanse sa efficiency at kakayahan, partikular para sa pagrepresenta ng mga karakter at data.

**ASCII Code**

Ang ASCII (American Standard Code for Information Interchange) ay isang pamantayan sa pag-encode ng mga karakter na ginagamit upang i-representa ang teksto sa mga computer at iba pang text-based na aparato. Ito ay pundasyon para sa maraming modernong mga scheme ng pag-encode. Gumagamit ang ASCII ng 7-bit na binary na numero, na nagpapahintulot para sa 128 natatanging mga karakter, na may mga code na mula 0 hanggang 127.

Ang mga standard na ASCII na karakter ay kinabibilangan ng:

- Mga Control Characters (0–31):

  Ito ay mga hindi-nakikita na karakter na nagkokontrol sa pagproseso ng teksto. Mga halimbawa ay:

  - `0` (NUL): Null na karakter
  - `9` (TAB): Pahalang na tab
  - `10` (LF): Line feed (newline)
  - `13` (CR): Carriage return

- Mga Printable Characters (32–127):

  Ito ay mga nakikitang karakter tulad ng mga letra, digit, punctuation marks, at mga simbolo. Mga halimbawa ay:

  - `32` (SPACE): Space na karakter
  - `65` (A): Malaking titik na A
  - `97` (a): Maliit na titik na a
  - `48` (0): Digit na 0
  - `33` (!): Exclamation mark

Ang mga ASCII code ay gumagamit ng 7 bits, na maaaring mag-encode ng 128 na mga karakter, ngunit ang mga modernong computer ay gumagamit ng 8 bits bilang pangunahing unit ng data. Ang 8-bit unit, o byte, ay nagbibigay-daan para sa pag-encode ng 256 na mga karakter, na karaniwang sapat para sa Ingles at iba pang mga westerng wika. Para sa mga mas kumplikadong wika, karagdagang bytes ang ginagamit upang i-representa ang mga karakter, tinitiyak ang mahusay na paggamit ng memorya at imbakan. Bagaman ang ASCII ay nangangailangan lamang ng 7 bits, ang 8-bit na representasyon ay karaniwan sa mga computer, kung saan ang karagdagang bit ay karaniwang nakatakda sa 0. Halimbawa, ang ASCII code para sa malaking titik na "A" ay 65 (decimal) o 01000001 (binary), na may karagdagang bit na zero.

**Iba't ibang mga simbolo ng operasyong matematika sa computer**

Sa isang karaniwang keyboard, maaaring mapansin mong wala ang ilang mga simbolo ng matematika, tulad ng simbolo ng multiplikasyon (×). Sa halip, madalas na gumagamit ang mga computer ng mga alternatibong simbolo para sa simplisidad. Narito ang ilang mga karaniwang halimbawa:

- Multiplikasyon: `*`
- Paghahati: `/`
- Modulo (natitirang bahagi ng paghahati): `%`
- Eksponentiyasyon: `**` (madalas na ginagamit sa mga programming language tulad ng Python), at sa ilang mga kaso, `^` (karaniwang ginagamit sa mga kalkulador).

Ginagamit ang mga simbolong ito upang magsagawa ng mga operasyong aritmetika sa iba't ibang kapaligiran ng programming at kalkulador.

**Mga yunit ng laki ng data**

Ang mga modernong computer ay gumagamit ng 8 bits bilang pangunahing yunit ng data, na kilala bilang byte (B). Narito ang isang pagtingin sa iba pang mga karaniwang yunit ng laki ng data at ang kanilang mga conversion:

- Bit (b, sa maliit na titik): Ang pinakamaliit na yunit ng data sa computing. Kumakatawan ito sa isang binary digit, na maaaring `0` o `1`.
- Byte (B, sa malaking titik): Ang pangunahing yunit ng laki ng data, na binubuo ng 8 bits.

Para sa mas malalaking pagsukat, dalawang magkaibang conversion ang ginagamit: binary at decimal. Ang mga binary na yunit ay batay sa mga kapangyarihan ng 2, habang ang mga decimal na yunit ay gumagamit ng mga kapangyarihan ng 10. Sa computing, ang mga binary na yunit ay pamantayan, habang ang mga decimal na yunit ay madalas na ginagamit sa marketing. Mula sa byte, ang isang mas malaking binary-based na yunit ay 2^10 (1024) beses ng mas maliit na yunit habang ang isang mas malaking decimal-based na yunit ay 10^3 (1000) beses ng mas maliit na yunit.

Binary-based na Mga Yunit:

- Kilobyte (KB): 1 KB = 1,024 bytes (2^10 bytes).
- Megabyte (MB): 1 MB = 1,024 KB = 1,048,576 bytes (2^20 bytes).
- Gigabyte (GB): 1 GB = 1,024 MB = 1,073,741,824 bytes (2^30 bytes).
- Terabyte (TB): 1 TB = 1,024 GB = 1,099,511,627,776 bytes (2^40 bytes).

Decimal-based na Mga Yunit:

- Kilobyte (KB): 1 KB = 1,000 bytes (10^3 bytes).
- Megabyte (MB): 1 MB = 1,000 KB = 1,000,000 bytes (10^6 bytes).
- Gigabyte (GB): 1 GB = 1,000 MB = 1,000,000,000 bytes (10^9 bytes).
- Terabyte (TB): 1 TB = 1,000 GB = 1,000,000,000,000 bytes (10^12 bytes).

Upang malinaw na ihiwalay ang mga binary-based na sukat mula sa decimal-based na mga sukat, ipinakilala ng IEC (International Electrotechnical Commission) ang "bi" prefix para sa mga yunit na iyon, na nangangahulugang "binary". Ang mga yunit na ito ay may parehong halaga tulad ng binary conversion, ngunit may mas madaling makilala na mga pangalan.

- Kibibyte (KiB): 1 KiB = 1,024 bytes (2^10 bytes).
- Mebibyte (MiB): 1 MiB = 1,024 KiB = 1,048,576 bytes (2^20 bytes).
- Gibibyte (GiB): 1 GiB = 1,024 MiB = 1,073,741,824 bytes (2^30 bytes).
- Tebibyte (TiB): 1 TiB = 1,024 GiB = 1,099,511,627,776 bytes (2^40 bytes).

Ang mga decimal na conversion ay madalas na ginagamit sa marketing dahil nagreresulta ito sa mas malalaking numero para sa parehong kapasidad ng imbakan. Halimbawa, ang isang hard drive na tinukoy na may 500 GB (decimal) ay talagang 500,000,000,000 bytes, na tinatayang 465 GiB (binary).

**Mga Pagsasalin ng Binary para sa Iba't Ibang Uri ng Datos**

Ang lahat ng datos, anuman ang uri nito, ay sa huli ay kinakatawan sa anyong binary. Ang datos ay pinoproseso at iniimbak bilang mga sunud-sunod na 0s at 1s sa mga computer. Upang mag-imbak ng teksto, larawan, tunog o iba pang uri ng datos, kailangan nating "i-encode" ito sa binary code, na tinatawag na "encoding". Kapag kailangan nating gamitin ang mga datos sa isang paraang madaling maintindihan ng tao, ang software ay nag-i-interpret ng binary code upang i-convert ito sa teksto, larawan, at iba pang mga format na ating nauunawaan, na tinatawag na "decoding".

Narito ang ilang halimbawa ng encoding ng iba't ibang uri ng datos:

- **Teksto**: Ang mga karakter ay kinakatawan gamit ang mga encoding standards tulad ng ASCII o Unicode (Universal Code). Ang bawat karakter ay binibigyan ng natatanging binary code. Halimbawa, ang ASCII code para sa 'A' ay 01000001 sa binary.
- **Mga Numero**: Ang mga numero ay kinakatawan gamit ang iba't ibang binary formats, tulad ng mga integer (mga numerong walang bahagi ng fraction, tulad ng `-3`, `0`) at mga floating-point na numero (mga numerong may bahagi ng fraction, tulad ng `3.14`, `-0.01`). Halimbawa, ang integer na 5 ay 00000101 sa 8-bit binary representation.
- **Audio**: Ang datos ng audio ay karaniwang kinakatawan bilang serye ng mga sample. Ang mga sample na ito ay kinukuha sa regular na pagitan at ine-encode sa binary. Halimbawa, ang isang 16-bit audio sample ay maaaring kinakatawan bilang isang 16-bit binary number.
- **Mga Larawan**: Ang mga larawan ay binubuo ng mga pixel, bawat isa ay may kulay na halaga. Sa isang grayscale na larawan, ang bawat pixel ay maaaring kinakatawan ng isang 8-bit binary number na nagpapakita ng intensity nito. Sa isang kulay na larawan, ang bawat pixel ay karaniwang kinakatawan ng kumbinasyon ng binary numbers na tumutukoy sa pula, berde, at asul na mga bahagi ng kulay nito.
- **Video**: Ang video ay isang serye ng mga larawan (mga frame) at madalas ay kasama ang audio. Ang bawat frame ay isang larawan na kinakatawan sa binary, at ang mga frame ay ipinapakita ng mabilis na sunud-sunod upang lumikha ng ilusyon ng galaw.
- **Mga File at Format**: Ang iba't ibang mga format ng file (tulad ng JPEG para sa mga larawan, MP3 para sa audio, MP4 para sa video) ay nagtatakda ng mga tiyak na paraan ng pag-encode ng datos. Ang mga format na ito ay gumagamit ng binary code upang istruktura at i-compress ang datos nang epektibo.

**Pag-compress ng Data**

Isipin mong may napakaraming laruan kang kailangang ilagay sa isang maliit na kahon. Ang pag-compress ng data ay parang paghahanap ng paraan upang maayos at mapaliit ang mga laruan para magkasya lahat sa kahon nang hindi nawawala ang kahit isa. Sa mga computer, ito ay tungkol sa paggawa ng mga file na mas maliit upang mas mabilis silang ipadala o i-store.

Narito ang isang simpleng halimbawa ng Run-Length Encoding (RLE) algorithm: kung mayroon kang isang sunud-sunod na hanay ng mga titik na "AAAAAAADDDDCCVSSSSSSSSS", na may 23 karakter na nangangailangan ng 23 bytes ng espasyo. Maaari nating bilangin kung gaano karaming beses inuulit ang bawat titik at palitan ang mga titik na ito ng bilang at ng mismong titik: "7A4D2C1V9S". Ang bagong hanay ay binubuo ng 5 bilang at 5 titik. Maaari nating gamitin ang isang byte para kumatawan sa bawat bilang at gamitin ang ASCII code para sa mga titik, na umaabot sa 10 bytes sa kabuuan. Kapag kailangan nating i-decompress ang sequence, binabasa natin ang isang bilang at isang titik, pagkatapos ay inuulit ang titik ayon sa bilang. Sa ganitong paraan, pinapaliit natin ang laki ng data at gumagamit ng mas kaunting espasyo.

Para sa iba't ibang uri ng data, kadalasang pumipili tayo ng iba't ibang algorithm sa compression dahil bawat isa ay may sariling mga pakinabang at limitasyon.