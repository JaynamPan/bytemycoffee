作者: Jaynam 译者: Jaynam 更新于 2024年8月27日
## 2. 初识程序与编程

欢迎来到计算机的奇妙世界！在我们开始动手编程之前，有必要了解更多关于计算机的基础知识。让我们探索一些与编程相关的计算机基本知识。

### 2.1 计算机如何处理信息

**（1）二进制代码简介**

你是否曾想过你的计算机、平板电脑或智能手机是如何做到如此多的酷炫功能的？这都与它如何处理信息有关。让我们从“二进制代码”这一基本概念开始探讨这个过程。首先，我们来思考一下在日常生活中我们如何表示信息。

**在我们日常生活中表示信息的方式**

在日常生活中，我们通过不同的方式来表示和传递信息。例如：

- 语言：无论是书面还是口头，我们可以通过基于字母、词汇和声音的符号进行交流和分享信息。每个字母都有特定的形状和意义，每句我们说的话或写的句子都传达着特定的含义。
- 图形符号和图片：交通标志、绘画和图片可以包含大量信息。
- 声音：我们还使用不同的声音传达一些意义。门铃的响声可以告诉我们有访客来了，警报声则会发出警告。

计算机也需要一种特殊的系统来理解和处理信息，这种系统就是“二进制代码”。二进制代码就像一种通用语言，由两个符号组成：0 和 1。这些符号共同作用，用来表示各种数据，从数字和字母到图片和声音。“二进制”指的是使用仅两个符号（0 和 1）的“二进制系统”。而“代码”则涉及使用一组符号或规则来编码、解码或传达信息，使其在计算机和信息处理的背景下变得可理解或可用。

**二进制系统（Binary System）**

在我们的日常生活中，我们通常使用基于10个数字的系统：`0`到`9`。让我们做一个简单的数学练习。如果你将`1`加到`0`，结果是`1`。再加`1`，你得到`2`。如果我们将`1`加到`0`九次，我们将用完所有从`0`到`9`的10个数字。但是，如果我们给0加上十次1，结果是10。仔细看看“10”。它由“1”和“0”组成，“1”在“0”的左边。然而，如果我们将“10”的两个数字相加，即1加0等于1。然而，这个简单的加法并不能解释“10”如何表示我们十进制系统中的10这个数字。

在日常生活中，除非特别说明，否则我们使用的数字系统是“十进制系统（Decimal System）”。“十进制”这个词源于拉丁语“decem”，意思是“十”。“十进制系统”指的是基于十的幂的数字系统。在十进制系统中，每个位置的值是其右侧位置值的十倍。十进制系统中的每个数字表示不同的位值，这个位值是十的一个幂。

例如，考虑数字345：

- 数字5在“个位”位置（10^0，十的零次方），表示5。
- 数字4在“十位”位置（10^1，十的第一方），表示4 × 10 = 40。
- 数字3在“百位”位置（10^2，十的第二方），表示3 × 100 = 300。

将这些值加在一起（300 + 40 + 5）得到总值345。

现在，让我们探讨二进制系统。与使用十个数字的十进制系统不同，二进制系统只使用两个数字：0和1。二进制数中的每个数字表示2的幂，而不是10。

例如，在二进制数字101中：

- 最右边的数字（1）位于“个位”位置（2^0，二的零次方），表示1。
- 中间的数字（0）位于“二位”位置（2^1，二的一次方），表示0 × 2 = 0。
- 最左边的数字（1）位于“四位”位置（2^2，二的二次方），表示1 × 4 = 4。

要得到二进制数字101的十进制值，需要将这些值相加：4（来自“四位”位置）+ 0（来自“二位”位置）+ 1（来自“个位”位置）= 5。

因此，二进制数字101等于十进制数字5。

**为什么计算机使用二进制系统**

十进制系统是最常用的数字系统，适用于日常计数和运算。人类有十个手指，这使得十进制系统对我们来说直观且简单。然而，计算机并不使用十进制系统。计算机内部的电路只能处于开（1）或关（0）两种状态，这自然地与二进制数字0和1相对应。因此，二进制系统最适合计算机，因为它完美地符合计算机的开/关电信号。使用二进制，计算机能够高效地处理和存储数据。

计算机的核心组件CPU依赖于晶体管作为基本单元。晶体管是一种微小的电路元件，可以作为电子开关并放大微弱的电信号。现代CPU包含数十亿个晶体管，这些晶体管作为开/关开关来处理和存储数据。RAM、GPU和SSD（固态硬盘）也同样使用晶体管。

在计算机中，几乎所有的晶体管都作为“开/关”开关工作，这意味着它们只在两种状态下操作：开和关。因此，使用1表示“开”状态，0表示“关”状态是自然且简单的选择。

**（2）二进制代码如何表示数据**

要理解二进制代码如何表示数据，首先需要了解计算机如何处理和存储信息。当程序运行时，它的指令序列被加载到RAM中。与其他程序的指令一起，这些指令排队等待执行。CPU不断从这个队列中逐个提取指令。每次CPU提取指令时，它会从RAM中读取，有时这些指令还涉及从硬盘读取或写入数据。现代CPU一次可以处理多达64位的数据，而旧款CPU则可能处理最多32位的数据。

这引发了几个问题：计算机应该一次读取或写入多少位数据？我们应该用多少位作为基本单位？如果CPU每次只读取或写入1位数据，这将极其低效，因为需要频繁的操作。因此，64位CPU通常一次读取或写入64位数据，32位CPU处理32位数据，以平衡性能和效率。RAM通常使用8位作为其基本单位。

RAM使用8位作为基本单位是受历史、技术和标准化因素的影响。早期计算机使用不同的数据单位大小，但随着技术的进步，8位单位变得更为普遍。这种大小在效率和能力之间达到了平衡，特别是在表示字符和数据方面。

**ASCII 码**

ASCII（美国标准信息交换码）是一种字符编码标准，用于在计算机和其他文本设备中表示文本。它是许多现代编码方案的基础。ASCII 使用 7 位二进制数，允许表示 128 个独特的字符，编码范围从 0 到 127。

标准 ASCII 字符包括：

- 控制字符（0–31）：

  这些是不可打印的字符，用于控制文本处理。例如：

  - `0`（NUL）：空字符
  - `9`（TAB）：水平制表符
  - `10`（LF）：换行符
  - `13`（CR）：回车符

- 可打印字符（32–127）：

  这些是可见字符，如字母、数字、标点符号和符号。例如：

  - `32`（SPACE）：空格字符
  - `65`（A）：大写字母 A
  - `97`（a）：小写字母 a
  - `48`（0）：数字 0
  - `33`（!）：感叹号

ASCII 码使用 7 位，可以编码 128 个字符，但现代计算机使用 8 位作为基本数据单位。这种 8 位单位或字节，允许编码 256 个字符，通常足以满足英语和其他西方语言的需求。对于更复杂的语言，则使用额外的字节来表示字符，以确保内存和存储的高效使用。虽然 ASCII 本身只需 7 位，但计算机中通常使用 8 位表示，其中额外的一位通常设为 0。例如，大写字母 "A" 的 ASCII 码是 65（十进制）或 01000001（二进制），额外的位为零。

**计算机中的数学运算符符号**

在标准键盘上，你可能会发现一些数学符号的缺失，比如乘法符号（×）。相反，计算机通常使用其他符号以简化操作。以下是一些常见的示例：

- 乘法：`*`
- 除法：`/`
- 取模（除法的余数）：`%`
- 指数：`**`（在像 Python 这样的编程语言中常用），有时也用 `^`（通常在计算器中使用）。

这些符号在各种编程环境和计算器中用于执行算术操作。

**数据大小单位**

现代计算机使用 8 位作为基本数据单位，称为字节（B）。以下是其他常见数据大小单位及其转换：

- 位（b，小写）：计算中的最小数据单位，表示一个二进制数字，值为 `0` 或 `1`。
- 字节（B，大写）：基本数据单位，由 8 位组成。

对于更大的测量单位，使用了两种不同的转换方式：二进制和十进制。二进制单位基于 2 的幂，而十进制单位使用 10 的幂。在计算中，二进制单位是标准的，而十进制单位通常用于市场营销。从字节开始，二进制基础单位比前一个小单位大 2^10（1024）倍，而十进制基础单位比前一个小单位大 10^3（1000）倍。

二进制单位：

- 千字节（KB）：1 KB = 1,024 字节（2^10 字节）。
- 兆字节（MB）：1 MB = 1,024 KB = 1,048,576 字节（2^20 字节）。
- 吉字节（GB）：1 GB = 1,024 MB = 1,073,741,824 字节（2^30 字节）。
- 太字节（TB）：1 TB = 1,024 GB = 1,099,511,627,776 字节（2^40 字节）。

十进制单位：

- 千字节（KB）：1 KB = 1,000 字节（10^3 字节）。
- 兆字节（MB）：1 MB = 1,000 KB = 1,000,000 字节（10^6 字节）。
- 吉字节（GB）：1 GB = 1,000 MB = 1,000,000,000 字节（10^9 字节）。
- 太字节（TB）：1 TB = 1,000 GB = 1,000,000,000,000 字节（10^12 字节）。

为了清楚区分二进制测量和十进制测量，国际电工委员会（IEC）引入了“bi”前缀来标识这些单位，表示“二进制”。这些单位的值与二进制转换相同，但名称更具辨识度。

- 千比特字节（KiB）：1 KiB = 1,024 字节（2^10 字节）。
- 兆比特字节（MiB）：1 MiB = 1,024 KiB = 1,048,576 字节（2^20 字节）。
- 吉比特字节（GiB）：1 GiB = 1,024 MiB = 1,073,741,824 字节（2^30 字节）。
- 太比特字节（TiB）：1 TiB = 1,024 GiB = 1,099,511,627,776 字节（2^40 字节）。

十进制转换通常用于市场营销，因为它们会为相同的存储容量产生更大的数字。例如，一个标称为 500 GB（十进制）的硬盘实际上是 500,000,000,000 字节，大约为 465 GiB（以二进制为基础）。

**不同数据类型的二进制表示**

所有数据，无论其类型如何，最终都以二进制形式表示。数据在计算机中作为0和1的序列进行处理和存储。为了存储文本、图像、音频或其他类型的数据，我们需要将它们“翻译”成二进制代码，这被称为“编码”。当我们需要以人类友好的方式使用这些数据时，软件会解读二进制代码，将其转换成文本、图像和其他我们可以理解的格式，这被称为“解码”。

以下是不同数据类型的编码示例：

- **文本**：字符通过编码标准如ASCII或Unicode（通用编码）表示。每个字符分配一个唯一的二进制代码。例如，ASCII编码中的‘A’是01000001。
- **数字**：数字使用各种二进制格式表示，如整数（没有小数部分的数字，如`-3`、`0`）和浮点数（有小数部分的数字，如`3.14`、`-0.01`）。例如，整数5在8位二进制表示中为00000101。
- **音频**：音频数据通常表示为一系列样本。这些样本在固定间隔内捕获并以二进制编码。例如，16位音频样本可能表示为16位二进制数。
- **图像**：图像由像素组成，每个像素都有颜色值。在灰度图像中，每个像素可能由一个8位的二进制数表示其强度。在彩色图像中，每个像素通常由对应红、绿、蓝颜色组件的二进制数的组合表示。
- **视频**：视频是图像（帧）的序列，并且通常包括音频。每一帧都是用二进制表示的图像，这些帧迅速依次显示以产生运动的幻觉。
- **文件和格式**：不同的文件格式（如JPEG用于图像，MP3用于音频，MP4用于视频）定义了编码数据的特定方式。这些格式使用二进制代码高效地结构化和压缩数据。

**数据压缩**

想象一下你有一大堆玩具需要装进一个小箱子里。数据压缩就像是找到一种方法来安排和缩小这些玩具，使它们都能装进箱子里而不丢失任何一个。在计算机中，数据压缩是为了使文件变得更小，以便占用更少的空间，并且更快地发送或存储。

下面是一个简单的例子，展示了游程编码（Run-Length Encoding, RLE）算法：如果你有一个字符序列 "AAAAAAADDDDCCVSSSSSSSSS"，这个序列有23个字符，占用23字节的空间。我们可以统计每个字母重复的次数，然后用次数和字母本身替换这些字母： "7A4D2C1V9S"。新的序列包含了5个次数和5个字母。我们可以用一个字节来表示每个次数，并使用ASCII码来表示字母，总共需要10字节。当我们需要解压这个序列时，我们读取次数和字母，然后根据次数重复字母。通过这种方式，我们减少了数据的大小，占用更少的空间。

对于不同的数据类型，我们通常选择不同的压缩算法，因为每种算法都有其自身的优缺点。