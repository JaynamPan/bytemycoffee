Autore: Jaynam Traduttore: AI Aggiornato il 27 agosto 2024

## 2. Scoprire il mondo della programmazione

Benvenuto nel fantastico mondo dei computer! Prima di mettere mano alla programmazione, è importante conoscere meglio i computer. Esploriamo alcune nozioni base relative ai computer e alla programmazione.

### 2.1 Come un computer elabora le informazioni

**(1) Introduzione al codice binario**

Ti sei mai chiesto come fa il tuo computer, tablet o smartphone a fare così tante cose interessanti? Tutto si basa su come elabora le informazioni. Iniziamo con una panoramica di questo processo, partendo dal "codice binario". Prima di tutto, pensiamo a come rappresentiamo le informazioni nella vita quotidiana.

**Modi di rappresentare le informazioni nel nostro mondo quotidiano**

Nella nostra vita quotidiana, usiamo diversi modi per rappresentare e condividere le informazioni. Ad esempio:

- Lingue: Che siano scritte o parlate, possiamo comunicare e condividere informazioni tramite simboli basati su lettere scritte, parole e suoni. Ogni lettera ha una forma e un significato specifici e ogni parola o frase che diciamo trasmette un significato preciso.
- Simboli grafici e immagini: I simboli stradali, i disegni e le immagini possono contenere molte informazioni.
- Suoni: Usando diversi suoni, possiamo comunicare dei significati. Ad esempio, il suono di un campanello può indicarci l’arrivo di un visitatore, mentre una sirena può darci un avviso.

Allo stesso modo, i computer necessitano di un sistema speciale per comprendere e elaborare le informazioni. Questo sistema è il codice binario, che è come un linguaggio universale composto da soli due simboli: 0 e 1. Questi simboli lavorano insieme per rappresentare ogni tipo di dato, dai numeri e dalle lettere alle immagini e ai suoni. "Binario" si riferisce al "sistema binario", che utilizza solo due simboli (0 e 1). E "codice" implica l'uso di un insieme di simboli o regole per codificare, decodificare o comunicare informazioni in un modo che le renda comprensibili o utilizzabili, specialmente nel contesto dei computer e dell'elaborazione delle informazioni.

**Il sistema binario**

Nella vita quotidiana, usiamo solitamente numeri basati su 10 cifre: 0 a 9. Facciamo un po' di matematica semplice. Se aggiungi 1 a 0, il risultato è 1. Aggiungi 1 di nuovo e ottieni 2. Se aggiungi 1 nove volte a 0, utilizzi tutte le 10 cifre da 0 a 9. Ma cosa succede se aggiungi 1 dieci volte a 0? Il risultato è 10. Guardiamo più da vicino "10". È composto da "1" e "0", e "1" è a sinistra di "0". Tuttavia, se sommi le due cifre di "10", cioè 1 più 0, ottieni 1. Tuttavia, questa semplice somma non spiega come '10' rappresenti un numero che equivale a 10 nel nostro sistema decimale.

Nella vita quotidiana, a meno che non sia specificato diversamente, i numeri che usiamo sono basati sul "sistema decimale". La parola "decimale" deriva dalla parola latina "decem" che significa "dieci". "Sistema decimale" si riferisce a un sistema numerico basato sulle potenze di dieci. Nel sistema decimale, ogni valore di posto è dieci volte il valore del posto a destra. Ogni cifra in un numero rappresenta un valore di posto diverso, che nel sistema decimale è una potenza di dieci.

Ad esempio, prendi il numero 345:

- La cifra 5 è nel posto delle "unità" (10^0, dieci elevato a zero), rappresentando 5.
- La cifra 4 è nel posto delle "decine" (10^1, dieci elevato a uno), rappresentando 4 × 10 = 40.
- La cifra 3 è nel posto delle "centinaia" (10^2, dieci elevato a due), rappresentando 3 × 100 = 300.

Somma questi valori insieme (300 + 40 + 5) e ottieni il valore totale di 345.

Ora, esploriamo il sistema binario. A differenza del sistema decimale, che usa dieci cifre, il sistema binario usa solo due cifre: 0 e 1. Ogni cifra in un numero binario rappresenta una potenza di 2, non 10.

Ad esempio, nel numero binario 101:

- La cifra più a destra (1) è nel posto delle "unità" (2^0, due elevato a zero), che rappresenta 1.
- La cifra centrale (0) è nel posto delle "due" (2^1, due elevato a uno), che rappresenta 0 × 2 = 0.
- La cifra più a sinistra (1) è nel posto delle "quattro" (2^2, due elevato a due), che rappresenta 1 × 4 = 4.

Per trovare il valore decimale del numero binario 101, somma questi valori insieme: 4 (dal posto delle "quattro") + 0 (dal posto delle "due") + 1 (dal posto delle "unità") = 5.

Quindi, il numero binario 101 è equivalente al numero decimale 5.

**Perché i computer utilizzano il sistema binario**

Il sistema decimale è il sistema numerico più comunemente usato e viene impiegato nel conteggio e nell'aritmetica quotidiana. Gli esseri umani hanno dieci dita, il che rende il sistema decimale intuitivo e semplice. Questo metodo di conteggio naturale ha probabilmente influenzato lo sviluppo del sistema decimale. Anche se il sistema decimale è semplice e conveniente per noi umani, non è la scelta migliore per i computer. Al contrario, il sistema binario è più adatto per tali macchine elettroniche. La ragione risiede nell'“anatomia” dei computer.

I computer utilizzano circuiti elettrici che possono essere accesi o spenti. Questi due stati sono naturalmente rappresentati dai numeri binari 0 e 1. Il binario è ideale per i computer perché si allinea perfettamente con i segnali elettrici accesi/spenti. Utilizzando il binario, i computer possono elaborare e memorizzare i dati in modo efficiente.

La CPU, un componente chiave di un computer, si basa sui transistor come unità fondamentali. Un transistor è un minuscolo e semplice elemento di circuito, che può agire come un interruttore elettronico acceso/spento e amplificare segnali elettrici deboli. Le CPU moderne contengono miliardi di transistor, che funzionano come interruttori acceso/spento per elaborare e memorizzare dati. Allo stesso modo, la RAM, la GPU e gli SSD (unità a stato solido) utilizzano anch'essi transistor.

In un computer, quasi tutti i transistor funzionano come interruttori acceso/spento, il che significa che operano in soli due stati: acceso e spento. Quindi è naturale e semplice utilizzare 1 per lo stato “acceso” e 0 per lo stato “spento”.

**(2) Come il codice binario rappresenta i dati**

Per capire come il codice binario rappresenta i dati, consideriamo prima come un PC elabora e memorizza le informazioni. Quando un programma è in esecuzione, le sue istruzioni vengono caricate nella RAM. Insieme alle istruzioni di altri programmi, queste vengono messe in coda per l'esecuzione. La CPU recupera continuamente le istruzioni da questa coda, una alla volta. Ogni volta che la CPU recupera un'istruzione, legge dalla RAM e, a volte, l'istruzione prevede la lettura o la scrittura sull'hard disk. Le CPU moderne possono elaborare fino a 64 bit di dati alla volta, mentre le CPU più vecchie possono elaborare solo fino a 32 bit.

Questo solleva diverse domande: Quanti bit di dati dovrebbe leggere o scrivere un computer dalla RAM alla volta? Quanti bit dovremmo utilizzare come unità di base? Se una CPU leggesse o scrivesse solo 1 bit alla volta, sarebbe estremamente inefficiente e dispendiosa in termini di tempo a causa dell'alta frequenza di operazioni richieste. Pertanto, una CPU a 64 bit tipicamente legge o scrive 64 bit di dati alla volta, e una CPU a 32 bit elabora 32 bit alla volta per bilanciare prestazioni ed efficienza. La RAM utilizza tipicamente 8 bit come unità di base.

La scelta di un'unità di 8 bit per la RAM è influenzata da fattori storici, tecnologici e di standardizzazione. I primi computer utilizzavano diverse dimensioni delle unità di dati, ma con il progredire della tecnologia, l'unità da 8 bit è diventata più comune. Questa dimensione ha trovato un equilibrio tra efficienza e capacità, particolarmente per rappresentare caratteri e dati.

**Codice ASCII**

L'ASCII (American Standard Code for Information Interchange) è uno standard di codifica dei caratteri utilizzato per rappresentare il testo nei computer e in altri dispositivi basati su testo. È fondamentale per molti schemi di codifica moderni. L'ASCII utilizza un numero binario a 7 bit, che consente di rappresentare 128 caratteri unici, con codici che vanno da 0 a 127.

I caratteri standard ASCII includono:

- Caratteri di Controllo (0–31):

  Questi sono caratteri non stampabili che controllano l'elaborazione del testo. Esempi includono:

  - `0` (NUL): Carattere nullo
  - `9` (TAB): Tabulazione orizzontale
  - `10` (LF): Alimentazione di linea (a capo)
  - `13` (CR): Ritorno a capo

- Caratteri Stampabili (32–127):

  Questi sono caratteri visibili come lettere, numeri, segni di punteggiatura e simboli. Esempi includono:

  - `32` (SPACE): Carattere spazio
  - `65` (A): Maiuscola A
  - `97` (a): Minuscola a
  - `48` (0): Cifra 0
  - `33` (!): Punto esclamativo

I codici ASCII utilizzano 7 bit, che possono codificare 128 caratteri, ma i computer moderni usano 8 bit come unità di base dei dati. Questa unità a 8 bit, o byte, consente di codificare 256 caratteri, generalmente sufficiente per l'inglese e altre lingue occidentali. Per lingue più complesse, si usano byte aggiuntivi per rappresentare i caratteri, garantendo un uso efficiente della memoria e dello spazio di archiviazione. Sebbene l'ASCII richieda solo 7 bit, una rappresentazione a 8 bit è comune nei computer, con il bit extra solitamente impostato a 0. Ad esempio, il codice ASCII per la maiuscola "A" è 65 (decimale) o 01000001 (binario), con il bit aggiuntivo a zero.

**Alcuni simboli degli operatori matematici nei computer**

Su una tastiera standard, potresti notare l'assenza di alcuni simboli matematici, come il segno della moltiplicazione (×). Invece, i computer spesso usano simboli alternativi per semplicità. Ecco alcuni esempi comuni:

- Moltiplicazione: `*`
- Divisione: `/`
- Modulo (resto della divisione): `%`
- Esponenziazione: `**` (spesso usato nei linguaggi di programmazione come Python), e in alcuni casi, `^` (comunemente usato nelle calcolatrici).

Questi simboli vengono utilizzati per eseguire operazioni aritmetiche in vari ambienti di programmazione e calcolatrici.

**Unità di misura della dimensione dei dati**

I computer moderni utilizzano 8 bit come unità di base dei dati, nota come byte (B). Ecco uno sguardo ad altre unità di misura comuni e alle loro conversioni:

- Bit (b, in minuscolo): L'unità di dati più piccola in informatica. Rappresenta una cifra binaria, che può essere `0` o `1`.
- Byte (B, in maiuscolo): L'unità di misura dei dati di base, composta da 8 bit.

Per misurazioni più grandi, vengono utilizzate due conversioni diverse: binaria e decimale. Le unità binarie sono basate su potenze di 2, mentre quelle decimali usano potenze di 10. Nell'informatica, le unità binarie sono standard, mentre le unità decimali sono spesso utilizzate nel marketing. A partire dal byte, un'unità più grande basata sul sistema binario è 2^10 (1024) volte l'unità più piccola, mentre un'unità più grande basata sul sistema decimale è 10^3 (1000) volte l'unità più piccola.

Unità basate sul sistema binario:

- Kilobyte (KB): 1 KB = 1.024 byte (2^10 byte).
- Megabyte (MB): 1 MB = 1.024 KB = 1.048.576 byte (2^20 byte).
- Gigabyte (GB): 1 GB = 1.024 MB = 1.073.741.824 byte (2^30 byte).
- Terabyte (TB): 1 TB = 1.024 GB = 1.099.511.627.776 byte (2^40 byte).

Unità basate sul sistema decimale:

- Kilobyte (KB): 1 KB = 1.000 byte (10^3 byte).
- Megabyte (MB): 1 MB = 1.000 KB = 1.000.000 byte (10^6 byte).
- Gigabyte (GB): 1 GB = 1.000 MB = 1.000.000.000 byte (10^9 byte).
- Terabyte (TB): 1 TB = 1.000 GB = 1.000.000.000.000 byte (10^12 byte).

Per distinguere chiaramente le misurazioni basate sul sistema binario da quelle basate sul sistema decimale, la IEC (Commissione Elettrotecnica Internazionale) ha introdotto il prefisso "bi" per queste unità, che sta per "binario". Queste unità hanno gli stessi valori delle conversioni binarie, ma nomi più distintivi.

- Kibibyte (KiB): 1 KiB = 1.024 byte (2^10 byte).
- Mebibyte (MiB): 1 MiB = 1.024 KiB = 1.048.576 byte (2^20 byte).
- Gibibyte (GiB): 1 GiB = 1.024 MiB = 1.073.741.824 byte (2^30 byte).
- Tebibyte (TiB): 1 TiB = 1.024 GiB = 1.099.511.627.776 byte (2^40 byte).

Le conversioni decimali sono spesso utilizzate nel marketing perché producono numeri più grandi per la stessa capacità di archiviazione. Ad esempio, un disco rigido etichettato come avente 500 GB (decimale) è in realtà 500.000.000.000 byte, che è circa 465 GiB (binario).

**Rappresentazioni binarie per diversi tipi di dati**

Tutti i dati, indipendentemente dal loro tipo, sono infine rappresentati in forma binaria. I dati vengono elaborati e memorizzati come sequenze di 0 e 1 nei computer. Per memorizzare testi, immagini, audio o altri tipi di dati, è necessario "tradurli" in codice binario, chiamato "codifica". Quando dobbiamo utilizzare questi dati in una forma comprensibile per l'uomo, il software interpreta il codice binario per convertirlo in testo, immagini e altri formati che possiamo comprendere, chiamato "decodifica".

Ecco alcuni esempi di codifica di diversi tipi di dati:

- **Testo**: I caratteri sono rappresentati usando standard di codifica come ASCII o Unicode (Codice Universale). Ogni carattere è assegnato a un codice binario unico. Ad esempio, il codice ASCII per 'A' è 01000001 in binario.
- **Numeri**: I numeri sono rappresentati usando vari formati binari, come interi (numeri senza parti frazionarie, come `-3`, `0`) e numeri in virgola mobile (numeri con parti frazionarie, come `3,14`, `-0,01`). Ad esempio, l'intero 5 è 00000101 in una rappresentazione binaria a 8 bit.
- **Audio**: I dati audio sono tipicamente rappresentati come una serie di campioni. Questi campioni vengono acquisiti a intervalli regolari e codificati in binario. Ad esempio, un campione audio a 16 bit potrebbe essere rappresentato come un numero binario a 16 bit.
- **Immagini**: Le immagini sono composte da pixel, ognuno con valori di colore. In un'immagine in scala di grigi, ogni pixel potrebbe essere rappresentato da un numero binario a 8 bit che indica la sua intensità. In un'immagine a colori, ogni pixel è solitamente rappresentato da una combinazione di numeri binari corrispondenti ai suoi componenti di colore rosso, verde e blu.
- **Video**: Il video è una sequenza di immagini (fotogrammi) e spesso include audio. Ogni fotogramma è un'immagine rappresentata in binario, e i fotogrammi vengono visualizzati in rapida successione per creare l'illusione del movimento.
- **File e Formati**: I diversi formati di file (come JPEG per le immagini, MP3 per l'audio, MP4 per il video) definiscono modi specifici di codificare i dati. Questi formati usano il codice binario per strutturare e comprimere i dati in modo efficiente.

**Compressione dei dati**

Immagina di avere un enorme mucchio di giocattoli che devi mettere in una piccola scatola. La compressione dei dati è come trovare un modo per sistemare e ridurre i giocattoli in modo che entrino tutti nella scatola senza perderne nessuno. Nei computer, si tratta di rendere i file più piccoli in modo che occupino meno spazio e siano più veloci da inviare o memorizzare.

Ecco un esempio semplice dell'algoritmo di Codifica a Lunghezza di Run (RLE): se hai una sequenza di lettere inglesi "AAAAAAADDDDCCVSSSSSSSSS", che è lunga 23 caratteri e occupa 23 byte di spazio. Possiamo contare quante volte ogni lettera si ripete e sostituire quelle lettere con il conteggio e la lettera stessa: "7A4D2C1V9S". La nuova sequenza è composta da 5 conteggi e 5 lettere. Possiamo usare un byte per rappresentare ogni conteggio e il codice ASCII per le lettere, che somma un totale di 10 byte. Quando dobbiamo decomprimere la sequenza, leggiamo un conteggio e una lettera, poi ripetiamo la lettera secondo il conteggio. In questo modo, riduciamo la dimensione dei dati e utilizziamo meno spazio.

Per diversi tipi di dati, solitamente scegliamo algoritmi di compressione differenti, poiché ognuno ha i propri vantaggi e limitazioni.