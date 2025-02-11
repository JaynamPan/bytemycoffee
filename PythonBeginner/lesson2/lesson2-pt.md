Autor: Jaynam Tradutora: AI Atualizado em 27 de agosto de 2024

## 2. Uma Visão Geral da Programação

Bem-vindo ao incrível mundo dos computadores! Antes de começarmos a programar, é necessário entender um pouco mais sobre como os computadores funcionam. Vamos explorar alguns conceitos básicos relacionados à programação.

### 2.1 Como um computador processa informações

**(1) Introdução ao código binário**

Você já se perguntou como seu computador, tablet ou smartphone sabe como realizar tantas coisas legais? Tudo se resume a como ele processa informações. Vamos começar com o básico desse processo, começando pelo chamado "código binário". Primeiro, vamos pensar em como representamos informações no nosso dia a dia.

**Formas de representar informações no nosso cotidiano**

No nosso dia a dia, usamos diferentes maneiras de representar e compartilhar informações. Por exemplo:

- Linguagens: Seja escrita ou falada, podemos comunicar e compartilhar informações por símbolos baseados em letras, palavras e sons. Cada letra tem uma forma e um significado específicos, e cada palavra ou frase que dizemos transmite um significado específico.
- Símbolos gráficos e imagens: Símbolos de trânsito, desenhos e fotos podem conter muitas informações.
- Sons: Também usamos diferentes sons para transmitir significados. O toque de uma campainha pode nos informar que um visitante chegou. Um alarme de sirene nos dá algum tipo de aviso.

Da mesma forma, os computadores precisam de um sistema especial para entender e processar informações. Esse sistema é o código binário, que é como uma linguagem universal composta por apenas dois símbolos: 0 e 1. Esses símbolos trabalham juntos para representar todo tipo de dado, desde números e letras até imagens e sons. "Binário" refere-se ao "sistema binário", que usa apenas dois símbolos (0 e 1). E "código" envolve usar um conjunto de símbolos ou regras para codificar, decodificar ou comunicar informações de uma forma que a torne compreensível ou utilizável, especialmente no contexto de computadores e processamento de informações.

**O sistema binário**

Na nossa vida cotidiana, geralmente usamos números baseados em 10 dígitos: de 0 a 9. Vamos fazer uma matemática simples. Se você adicionar 1 a 0, o resultado é 1. Adicione 1 novamente e você obtém 2. Se adicionarmos 1 nove vezes a 0, usaremos todos os 10 dígitos de 0 a 9. Mas e se adicionarmos 1 dez vezes a 0? O resultado é 10. Vamos dar uma olhada mais de perto em "10". Ele é composto por "1" e "0", e "1" está à esquerda de "0". Bem, se somarmos os dois dígitos de "10", temos 1 mais 0, que resulta em 1. No entanto, essa simples adição não explica como '10' representa um número que é igual a 10 no nosso sistema decimal.

Na vida cotidiana, a menos que especificado de outra forma, os números que usamos são baseados no "sistema decimal". A palavra "decimal" origina-se do latim "decem", que significa "dez". O "sistema decimal" refere-se a um sistema numérico baseado em potências de dez. No sistema decimal, cada valor de posição é dez vezes o valor da posição à sua direita. Cada dígito em um número representa um valor de posição diferente, que no sistema decimal é uma potência de dez.

Por exemplo, considere o número 345:

- O dígito 5 está na posição das "unidades" (10^0, dez elevado a zero), representando 5.
- O dígito 4 está na posição das "dezenas" (10^1, dez elevado a um), representando 4 × 10 = 40.
- O dígito 3 está na posição das "centenas" (10^2, dez elevado a dois), representando 3 × 100 = 300.

Somando esses valores (300 + 40 + 5), obtemos o valor total de 345.

Agora, vamos explorar o sistema binário. Ao contrário do sistema decimal, que usa dez dígitos, o sistema binário usa apenas dois dígitos: 0 e 1. Cada dígito em um número binário representa uma potência de 2, não de 10.

Por exemplo, no número binário 101:

- O dígito mais à direita (1) está na posição das "unidades" (2^0, dois elevado a zero), que representa 1.
- O dígito do meio (0) está na posição dos "deuses" (2^1, dois elevado a um), que representa 0 × 2 = 0.
- O dígito mais à esquerda (1) está na posição dos "quatro" (2^2, dois elevado a dois), que representa 1 × 4 = 4.

Para encontrar o valor decimal do número binário 101, adicione esses valores: 4 (da posição dos "quatro") + 0 (da posição dos "deuses") + 1 (da posição das "unidades") = 5.

Portanto, o número binário 101 equivale ao número decimal 5.

**Por que os computadores usam o sistema binário**

O sistema decimal é o mais utilizado no cotidiano para contagem e aritmética. Os humanos têm dez dedos, o que torna a contagem em decimal intuitiva e direta. Esse método natural de contagem provavelmente influenciou o desenvolvimento do sistema decimal. Embora o sistema decimal seja simples e conveniente para nós, humanos, não é a melhor escolha para computadores. Em vez disso, o sistema binário é mais adequado para essas máquinas eletrônicas. A razão está na "anatomia" dos computadores.

Os computadores utilizam circuitos elétricos que podem estar ligados ou desligados. Esses dois estados são representados naturalmente pelos dígitos binários 0 e 1. O binário é ideal para os computadores porque se alinha perfeitamente com os sinais elétricos de ligado/desligado. Usando o binário, os computadores podem processar e armazenar dados de maneira eficiente.

O CPU, um componente chave de um computador, depende dos transistores como unidades fundamentais. Um transistor é um pequeno e simples elemento de circuito, que pode funcionar como interruptores eletrônicos ligados/desligados e amplificar sinais elétricos fracos. CPUs modernas contêm bilhões de transistores, que funcionam como interruptores ligados/desligados para processar e armazenar dados. Da mesma forma, a RAM, GPUs e SSDs (Unidades de Estado Sólido) também usam transistores.

Em um computador, quase todos os transistores funcionam como interruptores ligados/desligados, o que significa que operam em apenas dois estados: ligado e desligado. Portanto, é natural e simples usar 1 para o estado "ligado" e 0 para o estado "desligado".

**(2) Como o código binário representa dados**

Para entender como o código binário representa dados, vamos primeiro considerar como um PC processa e armazena informações. Quando um programa está em execução, suas instruções são carregadas na RAM. Juntamente com as instruções de outros programas, essas ficam na fila para execução. O CPU continuamente busca instruções dessa fila, uma de cada vez. Cada vez que o CPU busca uma instrução, ele lê da RAM, e às vezes a instrução envolve ler ou gravar no disco rígido. CPUs modernas podem processar até 64 bits de dados de uma vez, enquanto CPUs mais antigas podem processar apenas até 32 bits.

Isso levanta várias perguntas: Quantos bits de dados um computador deve ler ou gravar da RAM de uma vez? Quantos bits devemos usar como unidade básica? Se um CPU fosse ler ou gravar apenas 1 bit de cada vez, seria extremamente ineficiente e demorado devido à alta frequência de operações necessárias. Assim, um CPU de 64 bits normalmente lê ou grava 64 bits de dados de uma vez, e um CPU de 32 bits processa 32 bits de cada vez para equilibrar desempenho e eficiência. A RAM geralmente usa 8 bits como sua unidade básica.

A escolha de uma unidade de 8 bits para a RAM é influenciada por fatores históricos, tecnológicos e de padronização. Computadores antigos usavam vários tamanhos de unidades de dados, mas à medida que a tecnologia avançou, a unidade de 8 bits se tornou mais comum. Esse tamanho encontrou um equilíbrio entre eficiência e capacidade, particularmente para representar caracteres e dados.

**Código ASCII**

ASCII (Código Padrão Americano para Intercâmbio de Informação) é um padrão de codificação de caracteres usado para representar texto em computadores e outros dispositivos baseados em texto. É fundamental para muitos esquemas de codificação modernos. O ASCII utiliza um número binário de 7 bits, permitindo 128 caracteres únicos, com códigos variando de 0 a 127.

Os caracteres padrão do ASCII incluem:

- Caracteres de Controle (0–31):

  Estes são caracteres não imprimíveis que controlam o processamento de texto. Exemplos incluem:

  - `0` (NUL): Caractere nulo
  - `9` (TAB): Tabulação horizontal
  - `10` (LF): Quebra de linha (nova linha)
  - `13` (CR): Retorno de carro

- Caracteres Imprimíveis (32–127):

  Estes são caracteres visíveis como letras, dígitos, sinais de pontuação e símbolos. Exemplos incluem:

  - `32` (SPACE): Espaço
  - `65` (A): Letra maiúscula A
  - `97` (a): Letra minúscula a
  - `48` (0): Dígito 0
  - `33` (!): Ponto de exclamação

Os códigos ASCII utilizam 7 bits, o que pode codificar 128 caracteres, mas computadores modernos usam 8 bits como unidade básica de dados. Esta unidade de 8 bits, ou byte, permite a codificação de 256 caracteres, o que é geralmente suficiente para o inglês e outras línguas ocidentais. Para idiomas mais complexos, bytes adicionais são usados para representar caracteres, garantindo uso eficiente da memória e do armazenamento. Embora o ASCII em si requeira apenas 7 bits, uma representação de 8 bits é comum em computadores, com o bit extra geralmente definido como zero. Por exemplo, o código ASCII para "A" maiúsculo é 65 (decimal) ou 01000001 (binário), com o bit adicional sendo zero.

**Alguns símbolos de operadores matemáticos em computadores**

Em um teclado padrão, você pode notar a ausência de alguns símbolos matemáticos, como o sinal de multiplicação (×). Em vez disso, os computadores frequentemente usam símbolos alternativos por simplicidade. Aqui estão alguns exemplos comuns:

- Multiplicação: `*`
- Divisão: `/`
- Módulo (restante da divisão): `%`
- Exponenciação: `**` (frequentemente usado em linguagens de programação como Python), e em alguns casos, `^` (comumente usado em calculadoras).

Esses símbolos são usados para realizar operações aritméticas em vários ambientes de programação e calculadoras.

**Unidades de tamanho de dados**

Computadores modernos usam 8 bits como a unidade básica de dados, conhecida como byte (B). Aqui está uma visão das outras unidades comuns de tamanho de dados e suas conversões:

- Bit (b, em minúscula): A menor unidade de dados em computação. Representa um dígito binário, que pode ser `0` ou `1`.
- Byte (B, em maiúscula): A unidade básica de tamanho de dados, consistindo em 8 bits.

Para medições maiores, são usadas duas conversões diferentes: binária e decimal. As unidades binárias são baseadas em potências de 2, enquanto as unidades decimais utilizam potências de 10. Em computação, as unidades binárias são padrão, enquanto as unidades decimais são frequentemente usadas em marketing. Começando pelo byte, uma unidade binária maior é 2^10 (1024) vezes a unidade menor, enquanto uma unidade decimal maior é 10^3 (1000) vezes a unidade menor.

Unidades baseadas em binário:

- Kilobyte (KB): 1 KB = 1.024 bytes (2^10 bytes).
- Megabyte (MB): 1 MB = 1.024 KB = 1.048.576 bytes (2^20 bytes).
- Gigabyte (GB): 1 GB = 1.024 MB = 1.073.741.824 bytes (2^30 bytes).
- Terabyte (TB): 1 TB = 1.024 GB = 1.099.511.627.776 bytes (2^40 bytes).

Unidades baseadas em decimal:

- Kilobyte (KB): 1 KB = 1.000 bytes (10^3 bytes).
- Megabyte (MB): 1 MB = 1.000 KB = 1.000.000 bytes (10^6 bytes).
- Gigabyte (GB): 1 GB = 1.000 MB = 1.000.000.000 bytes (10^9 bytes).
- Terabyte (TB): 1 TB = 1.000 GB = 1.000.000.000.000 bytes (10^12 bytes).

Para distinguir claramente as medições baseadas em binário das baseadas em decimal, a IEC (Comissão Eletrotécnica Internacional) introduziu o prefixo "bi" para essas unidades, que significa "binário". Essas unidades têm os mesmos valores das conversões binárias, mas com nomes mais distintos.

- Kibibyte (KiB): 1 KiB = 1.024 bytes (2^10 bytes).
- Mebibyte (MiB): 1 MiB = 1.024 KiB = 1.048.576 bytes (2^20 bytes).
- Gibibyte (GiB): 1 GiB = 1.024 MiB = 1.073.741.824 bytes (2^30 bytes).
- Tebibyte (TiB): 1 TiB = 1.024 GiB = 1.099.511.627.776 bytes (2^40 bytes).

Conversões decimais são frequentemente usadas em marketing porque produzem números maiores para a mesma capacidade de armazenamento. Por exemplo, um disco rígido rotulado como tendo 500 GB (decimal) é na verdade 500.000.000.000 bytes, o que é aproximadamente 465 GiB (binário).

**Representações binárias para diferentes tipos de dados**

Todos os dados, independentemente de seu tipo, são ultimamente representados em forma binária. Dados são processados e armazenados como sequências de 0s e 1s em computadores. Para armazenar texto, imagens, áudio ou outros tipos de dados, precisamos "traduzir" esses dados em código binário, o que é chamado de "codificação". Quando precisamos usar esses dados de maneira amigável para o ser humano, o software interpreta o código binário para convertê-lo em texto, imagens e outros formatos que podemos entender, o que é chamado de "decodificação".

Aqui estão alguns exemplos de codificação para diferentes tipos de dados:

- **Texto**: Caracteres são representados usando padrões de codificação como ASCII ou Unicode (Código Universal). Cada caractere recebe um código binário único. Por exemplo, o código ASCII para 'A' é 01000001 em binário.
- **Números**: Números são representados usando vários formatos binários, como inteiros (números sem partes fracionárias, como `-3`, `0`) e números de ponto flutuante (números com partes fracionárias, como `3.14`, `-0.01`). Por exemplo, o inteiro 5 é 00000101 em uma representação binária de 8 bits.
- **Áudio**: Dados de áudio são tipicamente representados como uma série de amostras. Essas amostras são capturadas em intervalos regulares e codificadas em binário. Por exemplo, uma amostra de áudio de 16 bits pode ser representada como um número binário de 16 bits.
- **Imagens**: Imagens são compostas por pixels, cada um com valores de cor. Em uma imagem em escala de cinza, cada pixel pode ser representado por um número binário de 8 bits que indica sua intensidade. Em uma imagem colorida, cada pixel é geralmente representado por uma combinação de números binários correspondentes aos componentes de cor vermelho, verde e azul.
- **Vídeo**: Vídeo é uma sequência de imagens (quadros) e frequentemente inclui áudio. Cada quadro é uma imagem representada em binário, e os quadros são exibidos em rápida sucessão para criar a ilusão de movimento.
- **Arquivos e Formatos**: Diferentes formatos de arquivos (como JPEG para imagens, MP3 para áudio, MP4 para vídeo) definem maneiras específicas de codificar dados. Esses formatos usam código binário para estruturar e comprimir os dados de forma eficiente.

**Compressão de Dados**

Imagine que você tem uma enorme pilha de brinquedos que precisa encaixar em uma pequena caixa. A compressão de dados é como encontrar uma maneira de organizar e reduzir o tamanho dos brinquedos para que todos caibam na caixa sem perder nenhum. Em computadores, trata-se de tornar os arquivos menores para que ocupem menos espaço e sejam mais rápidos de enviar ou armazenar.

Aqui está um exemplo simples do algoritmo de Codificação por Comprimento de Execução (RLE): se você tem uma sequência de letras em inglês "AAAAAAADDDDCCVSSSSSSSSS", que tem 23 caracteres e ocupa 23 bytes de espaço. Podemos contar quantas vezes cada letra se repete e substituir essas letras pela contagem e a própria letra: "7A4D2C1V9S". A nova sequência consiste em 5 contagens e 5 letras. Podemos usar um byte para representar cada contagem e usar o código ASCII para as letras, o que totaliza 10 bytes. Quando precisamos descompactar a sequência, lemos uma contagem e uma letra, e então repetimos a letra de acordo com a contagem. Dessa forma, reduzimos o tamanho dos dados e usamos menos espaço.

Para diferentes tipos de dados, geralmente escolhemos diferentes algoritmos de compressão, já que cada um tem suas próprias vantagens e limitações.