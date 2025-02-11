Autor: Jaynam Traductor: AI Actualizado el 27 de agosto de 2024

## 2. Echa un vistazo a la programación

¡Bienvenido al asombroso mundo de las computadoras! Antes de ensuciarnos las manos y hacer algo de programación, es necesario aprender más sobre las computadoras. Vamos a explorar algunas cosas básicas relacionadas con las computadoras y la programación.

### 2.1 Cómo procesa la información una computadora

**(1) Introducción al código binario**

¿Alguna vez te has preguntado cómo sabe tu computadora, tableta o teléfono inteligente cómo hacer tantas cosas geniales? Todo se trata de cómo procesa la información. Empecemos con algo llamado "código binario". Primero, pensemos en cómo representamos la información en nuestra vida diaria.

**Formas de representar la información en nuestro mundo cotidiano**

En nuestra vida diaria, usamos diferentes maneras de representar y compartir información. Por ejemplo:

- Idiomas: Ya sea escrito o hablado, podemos comunicarnos y compartir información mediante símbolos basados en letras, palabras y sonidos. Cada letra tiene una forma y un significado específico, y cada palabra o frase que decimos transmite un significado concreto.
- Símbolos gráficos e imágenes: Los símbolos de tráfico, los dibujos y las imágenes pueden contener mucha información.
- Sonidos: También usamos diferentes sonidos para transmitir significados. El timbre de una puerta puede indicarnos que ha llegado una visita. Una sirena de alarma nos da una advertencia.

De la misma manera, las computadoras necesitan un sistema especial para entender y procesar la información. Este sistema es el código binario, que es como un lenguaje universal compuesto por solo dos símbolos: 0 y 1. Estos símbolos trabajan juntos para representar todo tipo de datos, desde números y letras hasta imágenes y sonidos. "Binario" se refiere al "sistema binario", que utiliza solo dos símbolos (0 y 1). Y "código" implica usar un conjunto de símbolos o reglas para codificar, decodificar o comunicar información de una manera que la haga comprensible o utilizable, especialmente en el contexto de las computadoras y el procesamiento de información.

**El sistema binario**

En nuestra vida cotidiana, generalmente usamos números basados en 10 dígitos: del 0 al 9. Hagamos un poco de matemáticas simples. Si sumas 1 a 0, el resultado es 1. Si sumas 1 nuevamente, obtienes 2. Si sumas 1 nueve veces a 0, utilizas todos los 10 dígitos del 0 al 9. Pero, ¿qué pasa si sumas 1 diez veces a 0? El resultado es 10. Vamos a analizar más de cerca "10". Está compuesto por "1" y "0", y "1" está a la izquierda de "0". Bueno, si sumamos los dos dígitos de "10", es decir, 1 más 0, obtenemos 1. Sin embargo, esta simple suma no explica cómo '10' representa un número que equivale a 10 en nuestro sistema decimal.

En la vida cotidiana, a menos que se indique lo contrario, los números que usamos se basan en el "sistema decimal". La palabra "decimal" proviene del latín "decem", que significa "diez". El "sistema decimal" se refiere a un sistema numérico basado en potencias de diez. En el sistema decimal, cada valor de lugar es diez veces el valor del lugar a su derecha. Cada dígito en un número representa un valor de lugar diferente, que en el sistema decimal es una potencia de diez.

Por ejemplo, tomemos el número 345:

- El dígito 5 está en el lugar de las "unidades" (10^0, diez elevado a la potencia de cero), representando 5.
- El dígito 4 está en el lugar de las "decenas" (10^1, diez elevado a la potencia de uno), representando 4 × 10 = 40.
- El dígito 3 está en el lugar de las "centenas" (10^2, diez elevado a la potencia de dos), representando 3 × 100 = 300.

Sumando estos valores (300 + 40 + 5) obtenemos el valor total de 345.

Ahora, exploremos el sistema binario. A diferencia del sistema decimal, que utiliza diez dígitos, el sistema binario usa solo dos dígitos: 0 y 1. Cada dígito en un número binario representa una potencia de 2, no de 10.

Por ejemplo, en el número binario 101:

- El dígito más a la derecha (1) está en el lugar de las "unidades" (2^0, dos elevado a la potencia de cero), lo que representa 1.
- El dígito del medio (0) está en el lugar de las "dos" (2^1, dos elevado a la potencia de uno), lo que representa 0 × 2 = 0.
- El dígito más a la izquierda (1) está en el lugar de los "cuatros" (2^2, dos elevado a la potencia de dos), lo que representa 1 × 4 = 4.

Para encontrar el valor decimal del número binario 101, suma estos valores: 4 (del lugar de los "cuatros") + 0 (del lugar de las "dos") + 1 (del lugar de las "unidades") = 5.

Entonces, el número binario 101 equivale al número decimal 5.

**Por qué las computadoras usan el sistema binario**

El sistema decimal es el sistema de numeración más comúnmente utilizado y es el que empleamos en el conteo y la aritmética diaria. Los humanos tenemos diez dedos, lo que hace que contar en decimal sea intuitivo y sencillo. Este método de conteo natural probablemente influyó en el desarrollo del sistema decimal. Aunque el sistema decimal es simple y conveniente para nosotros, los seres humanos, no es la mejor opción para las computadoras. En cambio, el sistema binario es más adecuado para estas máquinas electrónicas. La razón radica en la "anatomía" de las computadoras.

Las computadoras utilizan circuitos eléctricos que pueden estar encendidos o apagados. Estos dos estados se representan naturalmente mediante los dígitos binarios 0 y 1. El sistema binario es ideal para las computadoras porque se alinea perfectamente con las señales eléctricas de encendido/apagado. Al usar binario, las computadoras pueden procesar y almacenar datos de manera eficiente.

El CPU, un componente clave de una computadora, se basa en transistores como unidades fundamentales. Un transistor es un elemento de circuito minúsculo y simple, que puede actuar como interruptores electrónicos de encendido/apagado y amplificar señales eléctricas débiles. Los CPUs modernos contienen miles de millones de transistores, que funcionan como interruptores de encendido/apagado para procesar y almacenar datos. De manera similar, las RAM, GPUs y SSDs (Unidades de Estado Sólido) también utilizan transistores.

En una computadora, casi todos los transistores funcionan como interruptores de encendido/apagado, lo que significa que operan en solo dos estados: encendido y apagado. Por lo tanto, es natural y simple usar 1 para el estado "encendido" y 0 para el estado "apagado".

**(2) Cómo el código binario representa datos**

Para entender cómo el código binario representa datos, primero consideremos cómo una PC procesa y almacena información. Cuando se está ejecutando un programa, sus series de instrucciones se cargan en la RAM. Junto con instrucciones de otros programas, estas se encolan para su ejecución. El CPU recupera continuamente instrucciones de esta cola, una a la vez. Cada vez que el CPU recupera una instrucción, lee de la RAM, y a veces la instrucción implica leer o escribir en el disco duro. Los CPUs modernos pueden procesar hasta 64 bits de datos a la vez, mientras que los CPUs más antiguos podrían procesar solo hasta 32 bits.

Esto plantea varias preguntas: ¿Cuántos bits de datos debería leer o escribir una computadora de la RAM a la vez? ¿Cuántos bits deberíamos usar como unidad básica? Si un CPU leyera o escribiera solo 1 bit a la vez, sería extremadamente ineficiente y lento debido a la alta frecuencia de operaciones requeridas. Por lo tanto, un CPU de 64 bits típicamente lee o escribe 64 bits de datos a la vez, y un CPU de 32 bits procesa 32 bits a la vez para equilibrar el rendimiento y la eficiencia. La RAM generalmente usa 8 bits como su unidad básica.

La elección de una unidad de 8 bits para la RAM está influenciada por factores históricos, tecnológicos y de estandarización. Las primeras computadoras usaban tamaños de unidad de datos variados, pero a medida que la tecnología avanzó, la unidad de 8 bits se hizo más común. Este tamaño logró un equilibrio entre eficiencia y capacidad, particularmente para representar caracteres y datos.

**Código ASCII**

ASCII (Código Estándar Americano para el Intercambio de Información) es un estándar de codificación de caracteres utilizado para representar texto en computadoras y otros dispositivos basados en texto. Es fundamental para muchos esquemas de codificación modernos. ASCII utiliza un número binario de 7 bits, permitiendo 128 caracteres únicos, con códigos que van del 0 al 127.

Los caracteres estándar de ASCII incluyen:

- **Caracteres de Control (0–31):**

  Estos son caracteres no imprimibles que controlan el procesamiento del texto. Ejemplos incluyen:

  - `0` (NUL): Carácter nulo
  - `9` (TAB): Tabulación horizontal
  - `10` (LF): Salto de línea (nuevo renglón)
  - `13` (CR): Retorno de carro

- **Caracteres Imprimibles (32–127):**

  Estos son caracteres visibles como letras, dígitos, signos de puntuación y símbolos. Ejemplos incluyen:

  - `32` (SPACE): Espacio
  - `65` (A): Letra mayúscula A
  - `97` (a): Letra minúscula a
  - `48` (0): Dígito 0
  - `33` (!): Signo de exclamación

Los códigos ASCII utilizan 7 bits, que pueden codificar 128 caracteres, pero las computadoras modernas utilizan 8 bits como la unidad básica de datos. Esta unidad de 8 bits, o byte, permite codificar 256 caracteres, lo cual es generalmente suficiente para el inglés y otros idiomas occidentales. Para lenguajes más complejos, se utilizan bytes adicionales para representar caracteres, asegurando un uso eficiente de la memoria y el almacenamiento. Aunque ASCII en sí mismo requiere solo 7 bits, una representación de 8 bits es común en las computadoras, con el bit adicional normalmente configurado en 0. Por ejemplo, el código ASCII para la "A" mayúscula es 65 (decimal) o 01000001 (binario), siendo el bit adicional cero.

**Símbolos de operadores matemáticos en computación**

En un teclado estándar, puede notar la ausencia de algunos símbolos matemáticos, como el signo de multiplicación (×). En su lugar, las computadoras a menudo utilizan símbolos alternativos por simplicidad. Aquí hay algunos ejemplos comunes:

- Multiplicación: `*`
- División: `/`
- Módulo (resto de la división): `%`
- Exponenciación: `**` (frecuentemente utilizado en lenguajes de programación como Python), y en algunos casos, `^` (comúnmente utilizado en calculadoras).

Estos símbolos se utilizan para realizar operaciones aritméticas en diversos entornos de programación y calculadoras.

**Unidades de tamaño de datos**

Las computadoras modernas usan 8 bits como la unidad básica de datos, conocida como byte (B). Aquí hay una mirada a otras unidades de tamaño de datos comunes y sus conversiones:

- Bit (b, en minúscula): La unidad más pequeña de datos en computación. Representa un dígito binario, que puede ser `0` o `1`.
- Byte (B, en mayúscula): La unidad básica de tamaño de datos, compuesta por 8 bits.

Para medidas más grandes, se utilizan dos conversiones diferentes: binaria y decimal. Las unidades binarias se basan en potencias de 2, mientras que las unidades decimales utilizan potencias de 10. En computación, las unidades binarias son estándar, mientras que las unidades decimales a menudo se utilizan en marketing. A partir del byte, una unidad binaria mayor es 2^10 (1024) veces la primera unidad menor, mientras que una unidad decimal mayor es 10^3 (1000) veces la primera unidad menor.

Unidades basadas en el sistema binario:

- Kilobyte (KB): 1 KB = 1.024 bytes (2^10 bytes).
- Megabyte (MB): 1 MB = 1.024 KB = 1.048.576 bytes (2^20 bytes).
- Gigabyte (GB): 1 GB = 1.024 MB = 1.073.741.824 bytes (2^30 bytes).
- Terabyte (TB): 1 TB = 1.024 GB = 1.099.511.627.776 bytes (2^40 bytes).

Unidades basadas en el sistema decimal:

- Kilobyte (KB): 1 KB = 1.000 bytes (10^3 bytes).
- Megabyte (MB): 1 MB = 1.000 KB = 1.000.000 bytes (10^6 bytes).
- Gigabyte (GB): 1 GB = 1.000 MB = 1.000.000.000 bytes (10^9 bytes).
- Terabyte (TB): 1 TB = 1.000 GB = 1.000.000.000.000 bytes (10^12 bytes).

Para distinguir claramente las mediciones basadas en binario de las basadas en decimal, la IEC (Comisión Electrotécnica Internacional) introdujo el prefijo "bi" para esas unidades, que significa "binario". Estas unidades tienen los mismos valores que la conversión binaria, pero nombres más distinguibles.

- Kibibyte (KiB): 1 KiB = 1.024 bytes (2^10 bytes).
- Mebibyte (MiB): 1 MiB = 1.024 KiB = 1.048.576 bytes (2^20 bytes).
- Gibibyte (GiB): 1 GiB = 1.024 MiB = 1.073.741.824 bytes (2^30 bytes).
- Tebibyte (TiB): 1 TiB = 1.024 GiB = 1.099.511.627.776 bytes (2^40 bytes).

Las conversiones decimales a menudo se usan en marketing porque producen números más grandes para la misma capacidad de almacenamiento. Por ejemplo, un disco duro etiquetado como teniendo 500 GB (decimal) es en realidad 500.000.000.000 bytes, lo que equivale aproximadamente a 465 GiB (binario).

**Representaciones binarias para diferentes tipos de datos**

Todos los datos, independientemente de su tipo, se representan finalmente en forma binaria. Los datos se procesan y almacenan como secuencias de 0s y 1s en los ordenadores. Para almacenar texto, imágenes, audio u otro tipo de datos, necesitamos "traducirlos" a un código binario, lo que se llama "codificación". Cuando necesitamos usar estos datos de manera amigable para los humanos, el software interpreta el código binario para convertirlo en texto, imágenes y otros formatos que podemos entender, lo que se llama "decodificación".

Aquí algunos ejemplos de cómo se codifican diferentes tipos de datos:

- **Texto**: Los caracteres se representan mediante estándares de codificación como ASCII o Unicode. Cada carácter se asigna un código binario único. Por ejemplo, el código ASCII para 'A' es 01000001 en binario.
- **Números**: Los números se representan utilizando varios formatos binarios, tales como enteros (números sin partes fraccionarias, como `-3`, `0`) y números en punto flotante (números con partes fraccionarias, como `3.14`, `-0.01`). Por ejemplo, el entero 5 se representa como 00000101 en una representación binaria de 8 bits.
- **Audio**: Los datos de audio se representan típicamente como una serie de muestras. Estas muestras se capturan a intervalos regulares y se codifican en binario. Por ejemplo, una muestra de audio de 16 bits podría representarse como un número binario de 16 bits.
- **Imágenes**: Las imágenes están compuestas por píxeles, cada uno con valores de color. En una imagen en escala de grises, cada píxel podría representarse mediante un número binario de 8 bits que indica su intensidad. En una imagen a color, cada píxel generalmente se representa mediante una combinación de números binarios correspondientes a los componentes de color rojo, verde y azul.
- **Video**: El video es una secuencia de imágenes (fotogramas) e incluye a menudo audio. Cada fotograma es una imagen representada en binario, y los fotogramas se muestran en rápida sucesión para crear la ilusión de movimiento.
- **Archivos y formatos**: Diferentes formatos de archivo (como JPEG para imágenes, MP3 para audio, MP4 para video) definen formas específicas de codificar datos. Estos formatos utilizan código binario para estructurar y comprimir los datos de manera eficiente.

**Compresión de datos**

Imagina que tienes una gran pila de juguetes que necesitas meter en una caja pequeña. La compresión de datos es como encontrar una forma de organizar y reducir el tamaño de los juguetes para que todos quepan en la caja sin perder ninguno. En los ordenadores, se trata de hacer que los archivos sean más pequeños para que ocupen menos espacio y se envíen o almacenen más rápido.

Aquí tienes un ejemplo sencillo del algoritmo de Codificación por Longitud de Ejecutoria (RLE, por sus siglas en inglés): si tienes una secuencia de letras en inglés "AAAAAAADDDDCCVSSSSSSSSS", que son 23 caracteres ocupando 23 bytes de espacio. Podemos contar cuántas veces se repite cada letra y reemplazar esas letras con el conteo y la letra misma: "7A4D2C1V9S". La nueva secuencia consta de 5 conteos y 5 letras. Podemos usar un byte para representar cada conteo y el código ASCII para las letras, lo que suma un total de 10 bytes. Cuando necesitamos descomprimir la secuencia, leemos un conteo y una letra, y luego repetimos la letra según el conteo. De esta manera, reducimos el tamaño de los datos y usamos menos espacio.

Para diferentes tipos de datos, usualmente elegimos diferentes algoritmos de compresión, ya que cada uno tiene sus propias ventajas y limitaciones.

