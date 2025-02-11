Autor: Jaynam Übersetzerin: AI Aktualisiert am 27. August 2024

## 2. Einen Blick auf das Programmieren werfen

Willkommen in der faszinierenden Welt der Computer! Bevor wir uns ans Programmieren machen, ist es wichtig, mehr über Computer zu erfahren. Lassen Sie uns einige grundlegende Dinge über Computer im Zusammenhang mit Programmierung erkunden.

### 2.1 Wie ein Computer Informationen verarbeitet

**(1) Einführung in den Binärcode**

Haben Sie sich schon einmal gefragt, wie Ihr Computer, Tablet oder Smartphone so viele coole Dinge tun kann? Es liegt daran, wie er Informationen verarbeitet. Lassen Sie uns die Grundlagen dieses Prozesses untersuchen, beginnend mit etwas, das „Binärcode“ genannt wird. Zuerst sollten wir darüber nachdenken, wie wir Informationen in unserem täglichen Leben darstellen.

**Wege zur Darstellung von Informationen in unserem Alltag**

In unserem Alltag verwenden wir verschiedene Methoden, um Informationen darzustellen und zu teilen. Zum Beispiel:

- Sprachen: Ob geschrieben oder gesprochen, wir können kommunizieren und Informationen durch Symbole wie Buchstaben, Wörter und Klänge teilen. Jeder Buchstabe hat eine bestimmte Form und Bedeutung, und jedes Wort oder jeder Satz, den wir sagen, vermittelt eine spezifische Bedeutung.
- Grafische Symbole und Bilder: Verkehrssymbole, Zeichnungen und Bilder können viele Informationen enthalten.
- Geräusche: Wir verwenden auch verschiedene Geräusche, um Bedeutungen zu übermitteln. Ein Türgong kann uns mitteilen, dass jemand gekommen ist. Ein Alarm gibt uns eine Warnung.

Auf die gleiche Weise benötigt ein Computer ein spezielles System, um Informationen zu verstehen und zu verarbeiten. Dieses System ist der Binärcode, der wie eine universelle Sprache aus nur zwei Symbolen besteht: 0 und 1. Diese Symbole arbeiten zusammen, um alle Arten von Daten darzustellen, von Zahlen und Buchstaben bis hin zu Bildern und Geräuschen. „Binär“ bezieht sich auf das „Binärsystem“, das nur zwei Symbole (0 und 1) verwendet. Und „Code“ beinhaltet die Verwendung eines Satzes von Symbolen oder Regeln, um Informationen zu kodieren, zu dekodieren oder zu kommunizieren, damit sie verständlich oder nutzbar ist, insbesondere im Kontext von Computern und Informationsverarbeitung.

**Das Binärsystem**

Im Alltag verwenden wir normalerweise Zahlen, die auf 10 Ziffern basieren: 0 bis 9. Lassen Sie uns eine einfache Rechnung machen. Wenn Sie 1 zu 0 addieren, erhalten Sie 1. Addieren Sie noch einmal 1, bekommen Sie 2. Wenn wir 1 neunmal zu 0 addieren, nutzen wir alle 10 Ziffern von 0 bis 9. Aber was passiert, wenn wir 1 zehnmal zu 0 addieren? Das Ergebnis ist 10. Wenn wir uns "10" genauer ansehen, besteht es aus "1" und "0", wobei "1" links von "0" steht. Wenn wir die beiden Ziffern von "10" addieren, ergibt das 1 plus 0 gleich 1. Diese einfache Addition erklärt jedoch nicht, wie '10' eine Zahl darstellt, die 10 in unserem Dezimalsystem entspricht.

Im Alltag verwenden wir, wenn nicht anders angegeben, Zahlen, die auf dem "Dezimalsystem" basieren. Das Wort "Dezimal" stammt aus dem lateinischen Wort "decem", was "zehn" bedeutet. Das "Dezimalsystem" bezieht sich auf ein Zahlensystem, das auf Potenzen von zehn basiert. Im Dezimalsystem ist jeder Platzwert zehnmal so groß wie der Platzwert zu seiner rechten Seite. Jede Ziffer in einer Zahl repräsentiert einen unterschiedlichen Platzwert, der im Dezimalsystem eine Potenz von zehn ist.

Zum Beispiel, nehmen wir die Zahl 345:

- Die Ziffer 5 steht an der "Einer"-Stelle (10^0, zehn hoch null), was 5 repräsentiert.
- Die Ziffer 4 steht an der "Zehner"-Stelle (10^1, zehn hoch eins), was 4 × 10 = 40 repräsentiert.
- Die Ziffer 3 steht an der "Hunderter"-Stelle (10^2, zehn hoch zwei), was 3 × 100 = 300 repräsentiert.

Wenn wir diese Werte zusammenzählen (300 + 40 + 5), erhalten wir den Gesamtwert von 345.

Nun wollen wir das Binärsystem erkunden. Im Gegensatz zum Dezimalsystem, das zehn Ziffern verwendet, nutzt das Binärsystem nur zwei Ziffern: 0 und 1. Jede Ziffer in einer Binärzahl repräsentiert eine Potenz von 2, nicht 10.

Zum Beispiel, in der Binärzahl 101:

- Die rechte Ziffer (1) befindet sich an der "Einer"-Stelle (2^0, zwei hoch null), was 1 repräsentiert.
- Die mittlere Ziffer (0) befindet sich an der "Zweier"-Stelle (2^1, zwei hoch eins), was 0 × 2 = 0 repräsentiert.
- Die linke Ziffer (1) befindet sich an der "Vierer"-Stelle (2^2, zwei hoch zwei), was 1 × 4 = 4 repräsentiert.

Um den Dezimalwert der Binärzahl 101 zu finden, addieren Sie diese Werte zusammen: 4 (von der "Vierer"-Stelle) + 0 (von der "Zweier"-Stelle) + 1 (von der "Einer"-Stelle) = 5.

Also entspricht die Binärzahl 101 der Dezimalzahl 5.

**Warum Computer das Binärsystem verwenden**

Das Dezimalsystem ist das am häufigsten verwendete Zahlensystem und wird im Alltag für Zählungen und Berechnungen verwendet. Menschen haben zehn Finger, was das Zählen im Dezimalsystem intuitiv und einfach macht. Diese natürliche Zählweise hat wahrscheinlich die Entwicklung des Dezimalsystems beeinflusst. Während das Dezimalsystem für uns Menschen einfach und praktisch ist, ist es für Computer nicht die beste Wahl. Stattdessen ist das Binärsystem besser für solche elektronischen Geräte geeignet. Der Grund liegt in der "Anatomie" der Computer.

Computer verwenden elektrische Schaltungen, die entweder ein- oder ausgeschaltet sein können. Diese beiden Zustände werden natürlich durch die Binärziffern 0 und 1 dargestellt. Binär ist ideal für Computer, weil es perfekt zu den Ein/Aus-Elektroniksignalen passt. Durch die Verwendung von Binärzahlen können Computer Daten effizient verarbeiten und speichern.

Die CPU, ein wichtiger Bestandteil eines Computers, beruht auf Transistoren als grundlegende Einheiten. Ein Transistor ist ein winziges und einfaches Schaltungselement, das als elektronischer Ein/Aus-Schalter fungieren und schwache elektrische Signale verstärken kann. Moderne CPUs enthalten Milliarden von Transistoren, die als Ein/Aus-Schalter für die Verarbeitung und Speicherung von Daten fungieren. Ebenso verwenden RAM, GPUs und SSDs (Solid State Drives) Transistoren.

In einem Computer arbeiten nahezu alle Transistoren als Ein/Aus-Schalter, was bedeutet, dass sie in nur zwei Zuständen arbeiten: ein und aus. Daher ist es natürlich und einfach, 1 für den "ein"-Zustand und 0 für den "aus"-Zustand zu verwenden.

**(2) Wie der Binärcode Daten darstellt**

Um zu verstehen, wie der Binärcode Daten darstellt, betrachten wir zunächst, wie ein PC Informationen verarbeitet und speichert. Wenn ein Programm läuft, werden seine Anweisungen in den RAM geladen. Neben den Anweisungen anderer Programme werden diese zur Ausführung bereitgestellt. Die CPU holt kontinuierlich eine Anweisung nach der anderen aus dieser Warteschlange. Jedes Mal, wenn die CPU eine Anweisung abruft, liest sie aus dem RAM, und manchmal beinhaltet die Anweisung das Lesen von oder Schreiben auf die Festplatte. Moderne CPUs können bis zu 64 Bit Daten gleichzeitig verarbeiten, während ältere CPUs möglicherweise nur bis zu 32 Bit verarbeiten.

Das wirft mehrere Fragen auf: Wie viele Bit Daten sollte ein Computer auf einmal lesen oder schreiben? Wie viele Bits sollten wir als Basiseinheit verwenden? Wenn eine CPU nur 1 Bit auf einmal lesen oder schreiben würde, wäre das extrem ineffizient und zeitaufwändig aufgrund der hohen Frequenz der erforderlichen Operationen. Daher liest oder schreibt eine 64-Bit-CPU typischerweise 64 Bit Daten auf einmal, und eine 32-Bit-CPU verarbeitet 32 Bit gleichzeitig, um ein Gleichgewicht zwischen Leistung und Effizienz zu finden. Der RAM verwendet typischerweise 8 Bit als Basiseinheit.

Die Wahl der 8-Bit-Einheit für den RAM ist durch historische, technologische und Standardisierungsfaktoren beeinflusst. Frühe Computer verwendeten verschiedene Dateneinheitsgrößen, aber mit dem Fortschritt der Technologie wurde die 8-Bit-Einheit immer üblicher. Diese Größe bietet ein ausgewogenes Verhältnis zwischen Effizienz und Fähigkeit, insbesondere zur Darstellung von Zeichen und Daten.

**ASCII-Code**

ASCII (American Standard Code for Information Interchange) ist ein Zeichencodierungsstandard, der zur Darstellung von Text in Computern und anderen textbasierten Geräten verwendet wird. Er ist die Grundlage vieler moderner Codierungsschemata. ASCII verwendet eine 7-Bit-Binärzahl, was 128 einzigartige Zeichen ermöglicht, mit Codes von 0 bis 127.

Standard-ASCII-Zeichen umfassen:

- Steuerzeichen (0–31):

  Dies sind nicht druckbare Zeichen, die die Textverarbeitung steuern. Beispiele sind:

  - `0` (NUL): Nullzeichen
  - `9` (TAB): Horizontaler Tabulator
  - `10` (LF): Zeilenumbruch (neues Zeilenzeichen)
  - `13` (CR): Wagenrücklauf

- Druckbare Zeichen (32–127):

  Dies sind sichtbare Zeichen wie Buchstaben, Ziffern, Satzzeichen und Symbole. Beispiele sind:

  - `32` (SPACE): Leerzeichen
  - `65` (A): Großbuchstabe A
  - `97` (a): Kleinbuchstabe a
  - `48` (0): Ziffer 0
  - `33` (!): Ausrufezeichen

ASCII-Codes nutzen 7 Bit, die 128 Zeichen codieren können, aber moderne Computer verwenden 8 Bit als grundlegende Dateneinheit. Diese 8-Bit-Einheit, oder Byte, ermöglicht die Codierung von 256 Zeichen, was im Allgemeinen für Englisch und andere westliche Sprachen ausreichend ist. Für komplexere Sprachen werden zusätzliche Bytes verwendet, um Zeichen darzustellen, was eine effiziente Speicher- und Speichernutzung sicherstellt. Obwohl ASCII selbst nur 7 Bit benötigt, ist eine 8-Bit-Darstellung in Computern üblich, wobei das zusätzliche Bit normalerweise auf 0 gesetzt ist. Zum Beispiel ist der ASCII-Code für das Großbuchstaben "A" 65 (dezimal) oder 01000001 (binär), wobei das zusätzliche Bit null ist.

**Mathematische Operatoren-Symbole am Computer**

Auf einer Standard-Tastatur fehlen manchmal einige mathematische Symbole, wie das Multiplikationszeichen (×). Stattdessen verwenden Computer häufig alternative Symbole zur Vereinfachung. Hier sind einige gängige Beispiele:

- Multiplikation: `*`
- Division: `/`
- Modulo (Rest der Division): `%`
- Exponentiation: `**` (häufig in Programmiersprachen wie Python verwendet), und manchmal `^` (in Taschenrechnern üblich).

Diese Symbole werden verwendet, um arithmetische Operationen in verschiedenen Programmierumgebungen und Taschenrechnern durchzuführen.

**Datenmengeneinheiten**

Moderne Computer verwenden 8 Bit als grundlegende Dateneinheit, bekannt als Byte (B). Hier ist ein Überblick über andere gängige Datenmengeneinheiten und deren Umrechnungen:

- Bit (b, in Kleinbuchstaben): Die kleinste Dateneinheit in der Computertechnik. Es repräsentiert eine Binärziffer, die entweder `0` oder `1` sein kann.
- Byte (B, in Großbuchstaben): Die grundlegende Dateneinheit, bestehend aus 8 Bit.

Für größere Messungen werden zwei verschiedene Umrechnungen verwendet: binär und dezimal. Binär-Einheiten basieren auf Potenzen von 2, während dezimale Einheiten Potenzen von 10 verwenden. In der Computertechnik sind binäre Einheiten Standard, während dezimale Einheiten oft in der Werbung verwendet werden. Ab dem Byte ist eine größere binär-basierte Einheit 2^10 (1024) Mal größer als die vorherige kleinere Einheit, während eine größere dezimal-basierte Einheit 10^3 (1000) Mal größer ist.

Binär-basierte Einheiten:

- Kilobyte (KB): 1 KB = 1.024 Byte (2^10 Byte).
- Megabyte (MB): 1 MB = 1.024 KB = 1.048.576 Byte (2^20 Byte).
- Gigabyte (GB): 1 GB = 1.024 MB = 1.073.741.824 Byte (2^30 Byte).
- Terabyte (TB): 1 TB = 1.024 GB = 1.099.511.627.776 Byte (2^40 Byte).

Dezimal-basierte Einheiten:

- Kilobyte (KB): 1 KB = 1.000 Byte (10^3 Byte).
- Megabyte (MB): 1 MB = 1.000 KB = 1.000.000 Byte (10^6 Byte).
- Gigabyte (GB): 1 GB = 1.000 MB = 1.000.000.000 Byte (10^9 Byte).
- Terabyte (TB): 1 TB = 1.000 GB = 1.000.000.000.000 Byte (10^12 Byte).

Um binär-basierte Messungen von dezimal-basierten zu unterscheiden, hat die IEC (International Electrotechnical Commission) das Präfix "bi" für diese Einheiten eingeführt, das für "binär" steht. Diese Einheiten haben denselben Wert wie die binäre Umrechnung, aber deutlichere Namen.

- Kibibyte (KiB): 1 KiB = 1.024 Byte (2^10 Byte).
- Mebibyte (MiB): 1 MiB = 1.024 KiB = 1.048.576 Byte (2^20 Byte).
- Gibibyte (GiB): 1 GiB = 1.024 MiB = 1.073.741.824 Byte (2^30 Byte).
- Tebibyte (TiB): 1 TiB = 1.024 GiB = 1.099.511.627.776 Byte (2^40 Byte).

Dezimalumrechnungen werden oft in der Werbung verwendet, da sie für dieselbe Speicherkapazität größere Zahlen erzeugen. Beispielsweise hat eine Festplatte, die mit 500 GB (dezimal) gekennzeichnet ist, tatsächlich 500.000.000.000 Byte, was ungefähr 465 GiB (binär) entspricht.

**Binäre Darstellungen für verschiedene Datentypen**

Alle Daten, unabhängig von ihrem Typ, werden letztendlich in binärer Form dargestellt. Daten werden als Abfolgen von 0 und 1 in Computern verarbeitet und gespeichert. Um Text, Bilder, Audio oder andere Datentypen zu speichern, müssen wir diese in Binärcode "übersetzen", was als "Kodierung" bezeichnet wird. Wenn wir diese Daten auf eine für Menschen verständliche Weise nutzen möchten, interpretiert die Software den Binärcode und wandelt ihn in Text, Bilder und andere Formate um, die wir verstehen können, was als "Dekodierung" bezeichnet wird.

Hier sind einige Beispiele für die Kodierung verschiedener Datentypen:

- **Text**: Zeichen werden mithilfe von Kodierungsstandards wie ASCII oder Unicode (Universeller Code) dargestellt. Jedes Zeichen erhält einen einzigartigen Binärcode. Zum Beispiel ist der ASCII-Code für 'A' 01000001 im Binärformat.
- **Zahlen**: Zahlen werden in verschiedenen Binärformaten dargestellt, wie Ganzzahlen (Zahlen ohne Bruchteil, z.B. `-3`, `0`) und Fließkommazahlen (Zahlen mit Bruchteil, z.B. `3,14`, `-0,01`). Zum Beispiel ist die Ganzzahl 5 in einer 8-Bit-Binärdarstellung 00000101.
- **Audio**: Audiodaten werden typischerweise als Serie von Proben dargestellt. Diese Proben werden in regelmäßigen Abständen erfasst und in Binärform kodiert. Zum Beispiel könnte eine 16-Bit-Audioprobe als 16-Bit-Binärzahl dargestellt werden.
- **Bilder**: Bilder bestehen aus Pixeln, von denen jeder Farbwerte hat. In einem Graustufenbild könnte jeder Pixel durch eine 8-Bit-Binärzahl dargestellt werden, die seine Intensität angibt. In einem Farbbild wird jeder Pixel normalerweise durch eine Kombination von Binärzahlen dargestellt, die den Rot-, Grün- und Blauanteil seiner Farbe angeben.
- **Video**: Video ist eine Abfolge von Bildern (Frames) und enthält oft Audio. Jedes Bild ist ein in Binärform dargestelltes Bild, und die Bilder werden in schneller Folge angezeigt, um die Illusion von Bewegung zu erzeugen.
- **Dateien und Formate**: Verschiedene Dateiformate (wie JPEG für Bilder, MP3 für Audio, MP4 für Video) definieren spezifische Methoden zur Kodierung von Daten. Diese Formate verwenden Binärcode, um die Daten effizient zu strukturieren und zu komprimieren.

**Datenkompression**

Stellen Sie sich vor, Sie haben einen riesigen Haufen Spielzeug, den Sie in eine kleine Box packen müssen. Datenkompression ist wie das Finden eines Weges, die Spielzeuge so zu arrangieren und zu verkleinern, dass sie alle in die Box passen, ohne dass eines verloren geht. Bei Computern geht es darum, Dateien kleiner zu machen, damit sie weniger Speicherplatz benötigen und schneller gesendet oder gespeichert werden können.

Hier ist ein einfaches Beispiel für den Run-Length-Encoding (RLE)-Algorithmus: Wenn Sie eine Zeichenfolge von englischen Buchstaben wie "AAAAAAADDDDCCVSSSSSSSSS" haben, die 23 Zeichen umfasst und somit 23 Bytes Speicherplatz benötigt, können wir zählen, wie oft jeder Buchstabe sich wiederholt, und diese Buchstaben durch die Anzahl und den Buchstaben selbst ersetzen: "7A4D2C1V9S". Die neue Sequenz besteht aus 5 Zählungen und 5 Buchstaben. Wir können ein Byte verwenden, um jede Zählung darzustellen, und ASCII-Codes für die Buchstaben, was insgesamt 10 Bytes ergibt. Wenn wir die Sequenz wiederherstellen müssen, lesen wir eine Zählung und einen Buchstaben und wiederholen dann den Buchstaben entsprechend der Zählung. Auf diese Weise reduzieren wir die Datenmenge und verwenden weniger Speicherplatz.

Für verschiedene Datentypen wählen wir in der Regel unterschiedliche Kompressionsalgorithmen, da jeder seine eigenen Vorteile und Einschränkungen hat.