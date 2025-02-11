Yazar: Jaynam Çevirmen: AI Güncelleme: 27 Ağustos 2024

## 2. Bilgisayar Programlamasına Bir Göz Atın

Bilgisayarların harika dünyasına hoş geldiniz! Programlamaya başlamadan önce, bilgisayarlarla ilgili bazı temel bilgileri öğrenmek önemlidir. Bilgisayarların bilgi işleme şekillerine bir göz atalım.

### 2.1 Bilgisayarın Bilgi İşleme Şekli

**(1) İkili Kodun Tanıtımı**

Bilgisayarınızın, tabletinizin veya akıllı telefonunuzun nasıl bu kadar çok şeyi yapabildiğini hiç merak ettiniz mi? Her şey, bilgisayarların bilgiyi nasıl işlediğiyle ilgilidir. Bu sürecin temellerine, "ikili kod" denilen bir kavramla başlayalım. Öncelikle, günlük yaşamda bilgiyi nasıl temsil ettiğimize bakalım.

**Günlük Hayatta Bilgi Temsil Yöntemleri**

Günlük yaşamda, bilgiyi temsil ve paylaşmak için farklı yollar kullanırız. Örneğin:

- Diller: Yazılı veya sözlü olarak, harfler, kelimeler ve sesler aracılığıyla iletişim kurar ve bilgi paylaşırız. Her harf belirli bir şekil ve anlama sahiptir ve söylediğimiz her kelime ya da cümle belirli bir anlamı ifade eder.
- Grafik Semboller ve Resimler: Trafik sembolleri, çizimler ve resimler çok fazla bilgi içerebilir.
- Sesler: Farklı sesler de bazı anlamları iletebilir. Bir kapı zili, bir ziyaretçinin geldiğini bize bildirir. Bir siren alarmı bize bazı uyarılar verir.

Aynı şekilde, bilgisayarlar da bilgiyi anlamak ve işlemek için özel bir sisteme ihtiyaç duyar. Bu sistem "ikili kod" olarak adlandırılır ve yalnızca iki sembolden oluşan evrensel bir dil gibidir: 0 ve 1. Bu semboller birlikte çalışarak sayılardan harflere, resimlerden seslere kadar her türlü veriyi temsil eder. "İkili" terimi, yalnızca iki sembol (0 ve 1) kullanan "ikili sistem"i ifade eder. Ve "kod" ise, bilgiyi anlaşılır veya kullanılabilir bir şekilde kodlamak, çözmek veya iletmek için kullanılan sembol veya kurallar setini içerir, özellikle bilgisayarlar ve bilgi işleme bağlamında.

**İkili Sistem**

Günlük hayatımızda genellikle 0'dan 9'a kadar olan 10 basamağı kullandığımız sayılarla ilgileniriz. Basit bir matematik yapalım. 0'a 1 eklediğimizde sonuç 1 olur. 1 eklemeye devam edersek, 9 kez 0'a eklediğimizde 10 basamağı kullanmış oluruz. Peki, 0'a 10 kez 1 eklersek ne olur? Sonuç 10’dur. Şimdi "10"u daha yakından inceleyelim. "10"un içinde "1" ve "0" var ve "1" solda, "0" sağda. "10"un iki basamağını topladığımızda, 1 artı 0, 1 eder. Ancak bu basit toplama, "10"un onluk sistemde nasıl 10’u temsil ettiğini açıklamaz.

Günlük hayatta, aksi belirtilmedikçe, kullandığımız sayılar "onluk sistem"e dayanır. "Onluk" kelimesi, Latincede "on" anlamına gelen "decem" kelimesinden türetilmiştir. "Onluk sistem" ise 10'un güçlerine dayanan bir sayı sistemini ifade eder. Onluk sistemde, her basamağın değeri, sağındaki basamağın değerinin on katıdır. Bir sayıdaki her rakam, onluk sistemde bir onluk güçünü temsil eder.

Örneğin, 345 sayısını ele alalım:

- 5 rakamı "birler" basamağında (10^0, sıfırıncı kuvvet), 5'i temsil eder.
- 4 rakamı "onlar" basamağında (10^1, birinci kuvvet), 4 × 10 = 40'ı temsil eder.
- 3 rakamı "yüzler" basamağında (10^2, ikinci kuvvet), 3 × 100 = 300'ü temsil eder.

Bu değerleri topladığınızda (300 + 40 + 5), toplam değer 345 olur.

Şimdi, ikili sistemi inceleyelim. Onluk sistemin aksine, ikili sistem sadece iki rakam kullanır: 0 ve 1. İkili sistemde, her rakam bir 2'nin kuvvetini temsil eder, 10'un değil.

Örneğin, ikili sayı 101'de:

- Sağdaki rakam (1) "birler" basamağındadır (2^0, sıfırıncı kuvvet), 1'i temsil eder.
- Ortadaki rakam (0) "ikiler" basamağındadır (2^1, birinci kuvvet), 0 × 2 = 0'ı temsil eder.
- Soldaki rakam (1) "dörtlüler" basamağındadır (2^2, ikinci kuvvet), 1 × 4 = 4'ü temsil eder.

İkili sayı 101'in onluk sistemdeki değerini bulmak için bu değerleri toplarız: 4 (dörtlüler basamağından) + 0 (ikiler basamağından) + 1 (birler basamağından) = 5.

Dolayısıyla, ikili sayı 101, onluk sistemdeki 5'e eşittir.

**Bilgisayarlar Neden İkili Sistem Kullanır?**

Onluk sistem günlük hesaplamalarda en yaygın kullanılan sayı sistemidir ve on parmağımız olması bu sistemin bize oldukça sezgisel ve basit gelmesini sağlar. Ancak, bilgisayarlar için onluk sistem en iyi seçenek değildir. Bunun yerine, bilgisayarlar ikili sistem kullanır. Bunun nedeni bilgisayarların "anatomi"sindedir.

Bilgisayarlar, açma veya kapama durumlarında olan elektrik devrelerini kullanır. Bu iki durum, ikili rakamlar 0 ve 1 ile doğal olarak temsil edilir. İkili sistem, bilgisayarların açma/kapama elektrik sinyalleriyle mükemmel uyum sağlar. Bu sayede bilgisayarlar verileri verimli bir şekilde işleyebilir ve depolayabilir.

Bilgisayarın temel bileşenlerinden biri olan CPU, transistörleri temel birimler olarak kullanır. Transistör, elektronik açma/kapama anahtarları olarak işlev görebilen ve zayıf elektrik sinyallerini artırabilen küçük ve basit bir devre elemanıdır. Modern CPU'lar, veri işleme ve depolama için bu transistörlerin milyarlarcasını içerir. Benzer şekilde, RAM'ler, GPU'lar ve SSD'ler (Katı Hal Sürücüleri) de transistörleri kullanır.

Bir bilgisayarda, neredeyse tüm transistörler açma/kapama anahtarları olarak çalışır, yani sadece iki durumda faaliyet gösterir: açık ve kapalı. Bu nedenle, "açık" durumu için 1 ve "kapalı" durumu için 0 kullanmak doğaldır.

**(2) İkili Kod Verileri Nasıl Temsil Eder?**

İkili kodun verileri nasıl temsil ettiğini anlamak için, bir bilgisayarın bilgileri nasıl işlediğini ve depoladığını düşünelim. Bir program çalışırken, talimat serileri RAM'e yüklenir. Diğer programlardan gelen talimatlarla birlikte bu talimatlar, işlem sırasına alınır. CPU bu sıradaki talimatları sürekli olarak, birer birer getirir. CPU her talimatı getirdiğinde, RAM'den okur ve bazen talimat, sabit diske okuma veya yazma işlemlerini içerir. Modern CPU'lar bir seferde 64 bit veri işleyebilirken, eski CPU'lar yalnızca 32 bit işleyebilir.

Bu birkaç soruyu gündeme getirir: Bilgisayar bir seferde RAM'den veya sabit diskten kaç bit veri okumalı veya yazmalıdır? Bir CPU yalnızca 1 bit işlese, yüksek işlem frekansı nedeniyle son derece verimsiz ve zaman alıcı olurdu. Bu nedenle, 64-bit CPU'lar genellikle bir seferde 64 bit veri okur veya yazar, 32-bit CPU'lar ise performans ve verimlilik arasında bir denge sağlamak için 32 bit işler. RAM genellikle 8 bitlik bir birim kullanır.

RAM için 8 bitlik bir birim seçimi tarihsel, teknolojik ve standartlaştırma faktörlerinden etkilenmiştir. Erken bilgisayarlar çeşitli veri birimi boyutları kullanmış, ancak teknoloji ilerledikçe 8-bit birim daha yaygın hale gelmiştir. Bu boyut, özellikle karakterleri ve verileri temsil etmede verimlilik ve kapasite arasında bir denge sağlar.

**ASCII Kodu**

ASCII (Amerikan Standart Bilgi Değişim Kodu), bilgisayarlar ve diğer metin tabanlı cihazlarda metni temsil etmek için kullanılan bir karakter kodlama standardıdır. Modern kodlama şemalarının temelini oluşturur. ASCII, 7-bitlik ikili sayı kullanarak 128 benzersiz karakter temsil eder ve kod aralığı 0'dan 127'ye kadar uzanır.

Standart ASCII karakterleri şunları içerir:

- Kontrol Karakterleri (0–31):

  Bunlar metin işleme işlemlerini kontrol eden yazdırılamayan karakterlerdir. Örnekler şunlardır:

  - `0` (NUL): Null karakter
  - `9` (TAB): Yatay sekme
  - `10` (LF): Satır sonu (yeni satır)
  - `13` (CR): Carriage return (satır başı)

- Yazdırılabilir Karakterler (32–127):

  Bunlar harfler, rakamlar, noktalama işaretleri ve semboller gibi görünür karakterlerdir. Örnekler şunlardır:

  - `32` (SPACE): Boşluk karakteri
  - `65` (A): Büyük A
  - `97` (a): Küçük a
  - `48` (0): Rakam 0
  - `33` (!): Ünlem işareti

ASCII kodları 7 bit kullanır, bu da 128 karakter kodlayabilir, ancak modern bilgisayarlar temel veri birimi olarak 8 bit kullanır. Bu 8-bit birim, ya da byte, 256 karakter kodlamak için genellikle yeterlidir, bu da İngilizce ve diğer Batı dilleri için genellikle yeterlidir. Daha karmaşık diller için ek baytlar kullanılır, böylece bellek ve depolama kullanımı daha verimli olur. ASCII'nin kendisi yalnızca 7 bit gerektirirken, bilgisayarlarda 8-bitlik bir temsil yaygındır ve ekstra bit genellikle sıfır olarak ayarlanır. Örneğin, büyük "A" karakterinin ASCII kodu 65 (ondalık) veya 01000001 (ikili) olup, ek bit sıfır olarak ayarlanmıştır.

**Bilgisayardaki Matematiksel Operatörlerin Sembolleri**

Standart bir klavyede bazı matematiksel sembollerin eksikliğini görebilirsiniz, örneğin çarpma işareti (×). Bunun yerine bilgisayarlar genellikle basit alternatif semboller kullanır. İşte bazı yaygın örnekler:

- Çarpma: `*`
- Bölme: `/`
- Mod (bölme kalanı): `%`
- Üs alma: `**` (Python gibi bazı programlama dillerinde kullanılır), ve bazı durumlarda `^` (genellikle hesap makinesi kullanımlarında).

Bu semboller, çeşitli programlama ortamlarında ve hesap makinelerinde aritmetik işlemleri gerçekleştirmek için kullanılır.

**Veri Boyutları**

Modern bilgisayarlar, temel veri birimi olarak 8 biti, yani bir baytı (B) kullanır. İşte diğer yaygın veri boyutu birimleri ve dönüşümleri:

- Bit (b, küçük harfle): Bilgisayarda en küçük veri birimidir. `0` veya `1` olan ikili bir basamağı temsil eder.
- Bayt (B, büyük harfle): 8 bitten oluşan temel veri boyutu birimidir.

Daha büyük ölçümler için iki farklı dönüşüm kullanılır: ikili ve ondalıklı. İkili birimler 2'nin kuvvetlerine, ondalıklı birimler ise 10'un kuvvetlerine dayanır. Bilgisayarlarda ikili birimler standarttır, ancak ondalıklı birimler genellikle pazarlamada kullanılır. Bayttan başlayarak, daha büyük ikili tabanlı birimler, ilk küçük birimin 2^10 (1024) katı iken, daha büyük ondalıklı tabanlı birimler, ilk küçük birimin 10^3 (1000) katıdır.

İkili Tabanlı Birimler:

- Kilobayt (KB): 1 KB = 1.024 bayt (2^10 bayt).
- Megabayt (MB): 1 MB = 1.024 KB = 1.048.576 bayt (2^20 bayt).
- Gigabayt (GB): 1 GB = 1.024 MB = 1.073.741.824 bayt (2^30 bayt).
- Terabayt (TB): 1 TB = 1.024 GB = 1.099.511.627.776 bayt (2^40 bayt).

Ondalıklı Tabanlı Birimler:

- Kilobayt (KB): 1 KB = 1.000 bayt (10^3 bayt).
- Megabayt (MB): 1 MB = 1.000 KB = 1.000.000 bayt (10^6 bayt).
- Gigabayt (GB): 1 GB = 1.000 MB = 1.000.000.000 bayt (10^9 bayt).
- Terabayt (TB): 1 TB = 1.000 GB = 1.000.000.000.000 bayt (10^12 bayt).

Binary tabanlı ölçümleri ondalıklı tabanlı ölçümlerden ayırt etmek için, IEC (Uluslararası Elektroteknik Komisyonu) "bi" önekini tanıttı, bu "ikili" anlamına gelir. Bu birimler aynı değerlere sahiptir, ancak daha belirgin adlara sahiptir.

- Kibibayt (KiB): 1 KiB = 1.024 bayt (2^10 bayt).
- Mebibayt (MiB): 1 MiB = 1.024 KiB = 1.048.576 bayt (2^20 bayt).
- Gibibayt (GiB): 1 GiB = 1.024 MiB = 1.073.741.824 bayt (2^30 bayt).
- Tebibayt (TiB): 1 TiB = 1.024 GiB = 1.099.511.627.776 bayt (2^40 bayt).

Ondalıklı dönüşümler pazarlamada sıkça kullanılır çünkü aynı depolama kapasitesi için daha büyük sayılar üretir. Örneğin, 500 GB (ondalıklı) olarak etiketlenen bir sabit disk, aslında 500.000.000.000 bayt olup, yaklaşık 465 GiB (ikili) olacaktır.

**Farklı Veri Türleri İçin İkili Temsiller**

Tüm veriler, türü ne olursa olsun, nihayetinde ikili formda temsil edilir. Bilgisayarlar, verileri 0 ve 1'lerin dizileri olarak işler ve depolar. Metin, görüntü, ses veya diğer veri türlerini saklamak için bu verileri "ikili koda" çevirmemiz gerekir ki buna "kodlama" denir. Verileri insan dostu bir biçimde kullanmamız gerektiğinde, yazılım bu ikili kodu yorumlar ve metin, görüntü veya diğer anlaşılır formatlara dönüştürür ki buna da "açıklama" denir.

İşte farklı veri türlerinin kodlanmasına bazı örnekler:

- **Metin**: Karakterler, ASCII veya Unicode (Evrensel Kod) gibi kodlama standartları kullanılarak temsil edilir. Her karaktere benzersiz bir ikili kod atanır. Örneğin, ASCII kodlamasında 'A' karakterinin karşılığı 01000001'dir.
- **Sayılar**: Sayılar, çeşitli ikili formatlarla temsil edilir, örneğin tam sayılar (kesirli olmayan sayılar, örneğin `-3`, `0`) ve kayan nokta sayıları (kesirli sayılar, örneğin `3.14`, `-0.01`). Örneğin, 5 sayısı 8-bit ikili temsilde 00000101 olarak gösterilir.
- **Ses**: Ses verileri genellikle bir dizi örnek olarak temsil edilir. Bu örnekler belirli aralıklarla yakalanır ve ikili olarak kodlanır. Örneğin, 16-bit bir ses örneği 16-bit ikili bir sayı olarak temsil edilebilir.
- **Görüntüler**: Görüntüler, renk değerlerine sahip piksellerden oluşur. Bir gri tonlamalı görüntüde, her pikselin yoğunluğu 8-bit ikili bir sayı ile temsil edilebilir. Renkli bir görüntüde ise her piksel genellikle kırmızı, yeşil ve mavi renk bileşenlerine karşılık gelen ikili sayıların bir kombinasyonu ile temsil edilir.
- **Video**: Video, bir dizi görüntüden (kareler) oluşur ve genellikle ses içerir. Her kare bir görüntü olarak ikili biçimde temsil edilir ve bu kareler hızlı bir şekilde ardışık olarak gösterilir, böylece hareket illüzyonu oluşturulur.
- **Dosyalar ve Formatlar**: Farklı dosya formatları (örneğin, görüntüler için JPEG, ses için MP3, video için MP4) veriyi kodlama, yapılandırma ve sıkıştırma yöntemlerini tanımlar. Bu formatlar, veriyi verimli bir şekilde ikili kod kullanarak düzenler.

**Veri Sıkıştırma**

Düşünün ki büyük bir oyuncak yığınınız var ve bunları küçük bir kutuya sığdırmanız gerekiyor. Veri sıkıştırma, oyuncakları kutuya sığacak şekilde düzenlemek ve küçültmek gibidir; hiçbiri kaybolmadan tüm oyuncakları yerleştirmek anlamına gelir. Bilgisayarlarda, dosyaları daha küçük hale getirerek daha az yer kaplamalarını ve daha hızlı gönderilmesini veya saklanmasını sağlamaktır.

Basit bir örnek olarak Run-Length Encoding (RLE) algoritmasını ele alalım: "AAAAAAADDDDCCVSSSSSSSSS" şeklinde bir İngilizce harf diziniz olduğunu düşünün, bu 23 karakter ve 23 bayt yer kaplar. Harflerin kaç kez tekrarlandığını sayabilir ve bu harfleri sayı ve harfle değiştirebiliriz: "7A4D2C1V9S". Yeni dizide 5 adet sayı ve 5 adet harf bulunur. Her sayıyı bir bayt ile temsil edebilir ve harfler için ASCII kodu kullanabiliriz, bu da toplamda 10 bayt eder. Sıkıştırılmış diziyi tekrar eski haline getirmek için, bir sayıyı ve bir harfi okur, ardından harfi sayıya göre tekrarlarız. Bu şekilde veri boyutunu azaltır ve daha az yer kaplar.

Farklı veri türleri için genellikle farklı sıkıştırma algoritmaları seçilir çünkü her birinin kendine has avantajları ve sınırlamaları vardır.