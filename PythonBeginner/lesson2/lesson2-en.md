Author: Jaynam  Updated On 27th-August-2024

## 2. Take a glimpse at programming

Welcome to the amazing world of computers! Before we get our hands dirty and do some programming work, it's necessary to learn more about computers. Let's explore some basic things of a computer related to programming.

### 2.1  How a computer process information

**(1) Introduction to binary code**

Have you ever wondered how your computer, tablet, or smartphone knows how to do so many cool things? It’s all about how it processes information. Let's dive into the basics of this process, starting with something called "binary code". First, let's think about how we represent information in our daily lives.

**Ways to represent information in our daily world**

In our daily lives, we use different ways to represent and share information. For example:

- Languages: Whether it's written or spoken, we can communicate and share information by symbols based on written letters, word and sound. Each letter has a specific shape and meaning and each word or sentence we say out conveys specific meaning.
- Graphic symbols and pictures: Traffic symbols, drawings, and pictures can contain much information.
- Sounds: We also use different sounds to convey some meanings. A door bell ring can tell us a visitor came. A siren alarm gives us some warnings.

In the same way, computers need a special system to understand and process information. This system is binary code, which is like a universal language made up of just two symbols: 0 and 1. These symbols work together to represent all sorts of data, from numbers and letters to pictures and sounds. "Binary" refers to the "binary system", which uses only two symbols (0 and 1). And "code" involves using a set of symbols or rules to encode, decode, or communicate information in a way that makes it understandable or usable, especially in in the context of computers and information processing.

**The binary system**

In our everyday lives, we usually use numbers based on 10 digits: 0 to 9. Let's do a bit simple math. If you add 1 to 0, the result is 1. Add 1 again, and you get 2. If we add 1 nine times to 0, we will use all 10 digits from 0 to 9. But what if we add 1 ten times to 0? The result is 10. Let's take a closer look at "10". It's made of "1" and "0", and "1" is to the left of  "0". Well, if we add the two digits of "10", that's 1 plus 0 equals to 1. However, this simple addition does not explain how '10' represents a number that equals 10 in our decimal system. 

In everyday life, unless specified otherwise, the numbers we use are based on the "decimal system". The word "decimal" originates from Latin word "decem" which means "ten". "Decimal system" refers to a number system based on powers of ten. In the decimal system, each place value is ten times the value of the place to its right. Each digit in a number represents a different place value, which in decimal system is a power of ten. 

For example, take the number 345:

- The digit 5 is in the "units" place (10^0, ten to the power of zero), representing 5.
- The digit 4 is in the "tens" place (10^1, ten to the power of one), representing 4 × 10 = 40.
- The digit 3 is in the "hundreds" place (10^2, ten to the power of two), representing 3 × 100 = 300.

Adding these values together (300 + 40 + 5) gives us the total value of 345.

Now, let’s explore the binary system. Unlike the decimal system, which uses ten digits, the binary system uses only two digits: 0 and 1. Each digit in a binary number represents a power of 2, not 10.

For example, in the binary number 101:

- The rightmost digit (1) is in the "ones" place (2^0, two to the power of zero), which represents 1.
- The middle digit (0) is in the "twos" place (2^1, two to the power of one), which represents 0 × 2 = 0.
- The leftmost digit (1) is in the "fours" place (2^2,  two to the power of two), which represents 1 × 4 = 4.

To find the decimal value of the binary number 101, add these values together: 4 (from the "fours" place) + 0 (from the "twos" place) + 1 (from the "ones" place) = 5.

So, the binary number 101 equals the decimal number 5.

**Why does computers use binary system**

The decimal system is the most commonly used number system and it is used in everyday counting and arithmetic. Humans have ten fingers, which makes counting in decimal system intuitive and straightforward. This natural counting method likely influenced the development of the decimal system. While decimal system is simple and convenient for us human, it's not the best choice for computers. Instead, binary system is more suitable for such electronic machines. The reason lies in the "anatomy" of computers.

Computers use electrical circuits that can either be on or off. These two states are naturally represented by the binary digits 0 and 1. Binary is ideal for computers because it aligns perfectly with their on/off electrical signals. By using binary, computers can efficiently process and store data. 

The CPU, a key component of a computer, relies on transistors as fundamental units. A transistor is a minuscule and simple circuit element, which can act as electronic on/off switches and amplify weak electrical signals. Modern CPUs contain billions of transistors, which function as on/off switches for processing and storing data.  Similarly RAMs, GPUs, and SSDs(Solid State Drive) also use transistors.

 In a computer, nearly all transistors are functioning as on/off switches, which means they operate in just two states: on and off. So it's natural and simple to use 1 for the "on" state and 0 for the "off" state.

**(2) How binary code represents data**

To understand how binary code represents data, let's first consider how a PC processes and stores information. When a program is running, its series of instructions are loaded into RAM. Alongside instructions from other programs, these are queued for execution. The CPU continuously fetches instructions from this queue, one at a time. Each time the CPU fetches an instruction, it reads from RAM, and sometimes the instruction involves reading from or writing to the hard drive. Modern CPUs can process up to 64 bits of data at a time, while older CPUs might process only up to 32 bits.

This raises several questions: How many bits of data should a computer read or write from RAM at a time? How many bits should we use as the basic unit? If a CPU were to read or write only 1 bit at a time, it would be extremely inefficient and time-consuming due to the high frequency of operations required. Thus, a 64-bit CPU typically reads or writes 64 bits of data at once, and a 32-bit CPU processes 32 bits at a time to balance performance and efficiency. RAM typically uses 8 bits as its basic unit.

The choice of an 8-bit unit for RAM is influenced by historical, technological, and standardization factors. Early computers used various data unit sizes, but as technology advanced, the 8-bit unit became more common. This size struck a balance between efficiency and capability, particularly for representing characters and data.

**ASCII Code**

ASCII (American Standard Code for Information Interchange) is a character encoding standard used to represent text in computers and other text-based devices. It is foundational for many modern encoding schemes. ASCII uses a 7-bit binary number, allowing for 128 unique characters, with codes ranging from 0 to 127.

Standard ASCII characters include:

- Control Characters (0–31):
  
   These are non-printable characters that control text processing. Examples include:
  
  - `0` (NUL): Null character
  - `9` (TAB): Horizontal tab
  - `10` (LF): Line feed (newline)
  - `13` (CR): Carriage return
- Printable Characters (32–127):

   These are visible characters like letters, digits, punctuation marks, and symbols. Examples include:

  - `32` (SPACE): Space character
  - `65` (A): Uppercase A
  - `97` (a): Lowercase a
  - `48` (0): Digit 0
  - `33` (!): Exclamation mark

ASCII codes utilize 7 bits, which can encode 128 characters, but modern computers use 8 bits as the basic data unit. This 8-bit unit, or byte, allows for encoding 256 characters, which is generally sufficient for English and other Western languages. For more complex languages, additional bytes are used to represent characters, ensuring efficient memory and storage usage. Although ASCII itself requires only 7 bits, an 8-bit representation is common in computers, with the extra bit typically set to 0. For example, the ASCII code for uppercase "A" is 65 (decimal) or 01000001 (binary), with the additional bit being zero.

**Some math operators' symbols in computer**

On a standard keyboard, you might notice the absence of some mathematical symbols, such as the multiplication sign (×). Instead, computers often use alternative symbols for simplicity. Here are some common examples:

- Multiplication: `*`
- Division: `/`
- Modulo (remainder of division): `%`
- Exponentiation: `**` (often used in programming languages like Python), and in some cases, `^` (commonly used in calculators).

These symbols are used to perform arithmetic operations in various programming environments and calculators.

**Data size units**

Modern computers use 8 bits as the basic data unit, known as a byte (B). Here’s a look at other common data size units and their conversions:

- Bit (b, in the lower case): The smallest unit of data in computing. It represents a binary digit, which can be either `0` or `1`. 
- Byte (B, in the upper case): The basic data size unit , consisting of 8 bits. 

For larger measurements, two different conversions are used: binary and decimal. Binary units are based on powers of 2, while decimal units use powers of 10. In computing, binary units are standard, while decimal units are often used in marketing. Starting from byte, a larger binary-based unit is 2^10 (1024) times of the first smaller unit while a larger decimal-based unit is 10^3 (1000) times of the first smaller unit.

Binary-based Units:

- Kilobyte (KB): 1 KB = 1,024 bytes (2^10 bytes).
- Megabyte (MB): 1 MB = 1,024 KB = 1,048,576 bytes (2^20 bytes).
- Gigabyte (GB): 1 GB = 1,024 MB = 1,073,741,824 bytes (2^30 bytes).
- Terabyte (TB): 1 TB = 1,024 GB = 1,099,511,627,776 bytes (2^40 bytes).

Decimal-based Units:

- Kilobyte (KB): 1 KB = 1,000 bytes (10^3 bytes).
- Megabyte (MB): 1 MB = 1,000 KB = 1,000,000 bytes (10^6 bytes).
- Gigabyte (GB): 1 GB = 1,000 MB = 1,000,000,000 bytes (10^9 bytes).
- Terabyte (TB): 1 TB = 1,000 GB = 1,000,000,000,000 bytes (10^12 bytes).

To clearly distinguish binary-based measurements from decimal-based ones, IEC (International Electrotechnical Commission) introduced "bi" prefix for those units, which stands for "binary". These units have same values as binary conversion, but more distinguishable names. 

- Kibibyte (KiB): 1 KiB = 1,024 bytes (2^10 bytes).
- Mebibyte (MiB): 1 MiB = 1,024 KiB = 1,048,576 bytes (2^20 bytes).
- Gibibyte (GiB): 1 GiB = 1,024 MiB = 1,073,741,824 bytes (2^30 bytes).
- Tebibyte (TiB): 1 TiB = 1,024 GiB = 1,099,511,627,776 bytes (2^40 bytes).

Decimal conversions are often used in marketing because they produce larger numbers for the same storage capacity. For example, a hard drive labeled as having 500 GB (decimal) is actually 500,000,000,000 bytes, which is approximately 465 GiB (binary).

**Binary representations for different data types** 

All data, regardless of its type, is ultimately represented in binary form. Data is processed and stored as sequences of 0s and 1s in computers. To store text, image, audio or other type of data, we need to "translate" them into binary code, which is called "encoding". When we need to use these data in a human-friendly way, software interprets binary code to convert it into text, image and other formats that we can understand, which is called "decoding". 

Here are some examples of encoding different data types:

- **Text**: Characters are represented using encoding standards like ASCII or Unicode(Universal Code). Each character is assigned a unique binary code. For example, the ASCII code for 'A' is 01000001 in binary.
- **Numbers**: Numbers are represented using various binary formats, such as integers( numbers without fractional parts, such as `-3`, `0`) and floating-point numbers(numbers with fractional parts, such as `3.14`, `-0.01` ). For example, the integer 5 is 00000101 in an 8-bit binary representation.
- **Audio**: Audio data is typically represented as a series of samples. These samples are captured at regular intervals and encoded in binary. For example, a 16-bit audio sample might be represented as a 16-bit binary number.
- **Images**: Images are composed of pixels, each with color values. In a grayscale image, each pixel might be represented by an 8-bit binary number indicating its intensity. In a color image, each pixel is usually represented by a combination of binary numbers corresponding to its red, green, and blue color components.
- **Video**: Video is a sequence of images (frames) and often includes audio. Each frame is an image represented in binary, and the frames are displayed in rapid succession to create the illusion of motion.
- **Files and Formats**: Different file formats (such as  JPEG for images, MP3 for audio, MP4 for video) define specific ways of encoding data. These formats use binary code to structure and compress the data efficiently. 

**Data compression**

Imagine you have a huge pile of toys that you need to pack into a small box. Data compression is like finding a way to arrange and shrink the toys so they all fit into the box without losing any of them. In computers, it’s about making files smaller so they take up less space and are quicker to send or store. 

Here's a simple example of the Run-Length Encoding (RLE) algorithm: if you have a sequence of English letters "AAAAAAADDDDCCVSSSSSSSSS", which is 23 characters taking 23 bytes of space. We can count how many times each letter repeats and replace those letters with the count and the letter itself: "7A4D2C1V9S". The new sequence consists of 5 counts and 5 letters. We can use one byte to represent each count and use ASCII code for the letters, which adds up to 10 bytes in total. When we need to decompress the sequence, we read a count and a letter, then repeat the letter according to the count. In this way, we reduce the data size and use less space.

For different data types, we usually choose different compression algorithms as each has its own advantages and limitations.