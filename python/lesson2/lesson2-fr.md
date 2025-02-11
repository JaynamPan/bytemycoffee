Auteur : Jaynam Traductrice : AI Mis à jour le 27 août 2024

## 2. Un aperçu de la programmation

Bienvenue dans le monde fascinant des ordinateurs ! Avant de plonger dans la programmation, il est essentiel de mieux comprendre les ordinateurs. Explorons quelques notions de base liées aux ordinateurs et à la programmation.

### 2.1 Comment un ordinateur traite l'information

**(1) Introduction au code binaire**

Vous êtes-vous déjà demandé comment votre ordinateur, tablette ou smartphone accomplit toutes ces choses incroyables ? Tout repose sur la manière dont il traite l'information. Commençons par les bases de ce processus, en explorant le "code binaire". D'abord, réfléchissons à la manière dont nous représentons l'information dans notre quotidien.

**Moyens de représenter l'information dans notre vie quotidienne**

Dans notre quotidien, nous utilisons différentes manières de représenter et de partager l'information. Par exemple :

- Langues : Que ce soit à l'écrit ou à l'oral, nous communiquons et partageons des informations par des symboles basés sur des lettres écrites, des mots et des sons. Chaque lettre a une forme et un sens spécifiques, et chaque mot ou phrase que nous disons transmet un sens précis.
- Symboles graphiques et images : Les panneaux de signalisation, les dessins et les images peuvent contenir beaucoup d'informations.
- Sons : Nous utilisons également différents sons pour transmettre des significations. Le carrefour du portail nous informe qu'un visiteur est arrivé. Une sirène d'alarme nous avertit d'un danger.

De la même manière, les ordinateurs ont besoin d'un système spécial pour comprendre et traiter l'information. Ce système est le code binaire, qui est comme un langage universel composé de seulement deux symboles : 0 et 1. Ces symboles travaillent ensemble pour représenter toutes sortes de données, des chiffres et lettres aux images et sons. Le terme "binaire" fait référence au "système binaire", qui utilise uniquement deux symboles (0 et 1). Et "code" implique l'utilisation d'un ensemble de symboles ou de règles pour coder, décoder ou communiquer des informations de manière à les rendre compréhensibles ou utilisables, surtout dans le contexte des ordinateurs et du traitement de l'information.

**Le système binaire**

Dans notre vie quotidienne, nous utilisons généralement des nombres basés sur 10 chiffres : de 0 à 9. Faisons un peu de mathématiques simples. Si vous ajoutez 1 à 0, le résultat est 1. Ajoutez encore 1, et vous obtiendrez 2. Si nous ajoutons 1 neuf fois à 0, nous aurons utilisé tous les 10 chiffres de 0 à 9. Mais que se passe-t-il si nous ajoutons 1 dix fois à 0 ? Le résultat est 10. Regardons de plus près "10". Il est composé de "1" et "0", et "1" est à gauche de "0". Eh bien, si nous additionnons les deux chiffres de "10", c'est 1 plus 0, ce qui donne 1. Cependant, cette simple addition n'explique pas comment '10' représente un nombre qui équivaut à 10 dans notre système décimal.

Dans la vie quotidienne, à moins que cela ne soit spécifié autrement, les nombres que nous utilisons sont basés sur le "système décimal". Le mot "décimal" vient du mot latin "decem" qui signifie "dix". Le "système décimal" fait référence à un système numérique basé sur les puissances de dix. Dans le système décimal, chaque valeur de position est dix fois la valeur de la position à sa droite. Chaque chiffre dans un nombre représente une valeur de position différente, qui dans le système décimal est une puissance de dix.

Par exemple, prenons le nombre 345 :

- Le chiffre 5 est dans la position des "unités" (10^0, dix à la puissance zéro), représentant 5.
- Le chiffre 4 est dans la position des "dizaines" (10^1, dix à la puissance un), représentant 4 × 10 = 40.
- Le chiffre 3 est dans la position des "centaines" (10^2, dix à la puissance deux), représentant 3 × 100 = 300.

En additionnant ces valeurs (300 + 40 + 5), nous obtenons la valeur totale de 345.

Maintenant, explorons le système binaire. Contrairement au système décimal, qui utilise dix chiffres, le système binaire utilise seulement deux chiffres : 0 et 1. Chaque chiffre dans un nombre binaire représente une puissance de 2, et non de 10.

Par exemple, dans le nombre binaire 101 :

- Le chiffre le plus à droite (1) est dans la position des "unités" (2^0, deux à la puissance zéro), ce qui représente 1.
- Le chiffre du milieu (0) est dans la position des "deux" (2^1, deux à la puissance un), ce qui représente 0 × 2 = 0.
- Le chiffre le plus à gauche (1) est dans la position des "quatres" (2^2, deux à la puissance deux), ce qui représente 1 × 4 = 4.

Pour trouver la valeur décimale du nombre binaire 101, additionnez ces valeurs : 4 (de la position des "quatres") + 0 (de la position des "deux") + 1 (de la position des "unités") = 5.

Ainsi, le nombre binaire 101 équivaut au nombre décimal 5.

**Pourquoi les ordinateurs utilisent-ils le système binaire ?**

Le système décimal est le système de numérotation le plus couramment utilisé et il est utilisé dans les comptages et les calculs quotidiens. Les humains ayant dix doigts, le comptage en système décimal est intuitif et direct. Cette méthode de comptage naturelle a probablement influencé le développement du système décimal. Bien que le système décimal soit simple et pratique pour nous les humains, ce n'est pas le meilleur choix pour les ordinateurs. Au lieu de cela, le système binaire est plus adapté à ces machines électroniques. La raison réside dans l’« anatomie » des ordinateurs.

Les ordinateurs utilisent des circuits électriques qui peuvent être soit allumés, soit éteints. Ces deux états sont naturellement représentés par les chiffres binaires 0 et 1. Le binaire est idéal pour les ordinateurs car il s’aligne parfaitement avec leurs signaux électriques allumés/éteints. En utilisant le binaire, les ordinateurs peuvent traiter et stocker les données de manière efficace.

Le CPU, un composant clé d'un ordinateur, repose sur des transistors comme unités fondamentales. Un transistor est un petit élément de circuit simple, qui peut agir comme un interrupteur électronique marche/arrêt et amplifier les signaux électriques faibles. Les CPU modernes contiennent des milliards de transistors, qui fonctionnent comme des interrupteurs marche/arrêt pour le traitement et le stockage des données. De même, les RAM, les GPU et les SSD (disques à état solide) utilisent également des transistors.

Dans un ordinateur, presque tous les transistors fonctionnent comme des interrupteurs marche/arrêt, ce qui signifie qu'ils fonctionnent dans seulement deux états : allumé et éteint. Il est donc naturel et simple d’utiliser 1 pour l’état « allumé » et 0 pour l’état « éteint ».

**(2) Comment le code binaire représente les données**

Pour comprendre comment le code binaire représente les données, considérons d’abord comment un PC traite et stocke l’information. Lorsqu'un programme s'exécute, sa série d'instructions est chargée dans la RAM. En parallèle des instructions d'autres programmes, celles-ci sont mises en attente pour exécution. Le CPU récupère continuellement les instructions de cette file, une à la fois. Chaque fois que le CPU récupère une instruction, il lit depuis la RAM, et parfois l'instruction implique de lire ou d'écrire sur le disque dur. Les CPUs modernes peuvent traiter jusqu'à 64 bits de données à la fois, tandis que les anciens CPUs pouvaient traiter seulement jusqu'à 32 bits.

Cela soulève plusieurs questions : Combien de bits de données un ordinateur doit-il lire ou écrire depuis la RAM à la fois ? Combien de bits devons-nous utiliser comme unité de base ? Si un CPU devait lire ou écrire seulement 1 bit à la fois, cela serait extrêmement inefficace et chronophage en raison de la fréquence élevée des opérations requises. Ainsi, un CPU 64 bits lit ou écrit typiquement 64 bits de données à la fois, et un CPU 32 bits traite 32 bits à la fois pour équilibrer performance et efficacité. La RAM utilise généralement 8 bits comme unité de base.

Le choix de l'unité de 8 bits pour la RAM est influencé par des facteurs historiques, technologiques et de normalisation. Les premiers ordinateurs utilisaient diverses tailles d'unités de données, mais à mesure que la technologie a progressé, l'unité de 8 bits est devenue plus courante. Cette taille a trouvé un équilibre entre efficacité et capacité, en particulier pour représenter des caractères et des données.

**Code ASCII**

Le code ASCII (American Standard Code for Information Interchange) est une norme de codage de caractères utilisée pour représenter du texte dans les ordinateurs et autres dispositifs basés sur le texte. C'est fondamental pour de nombreux schémas de codage modernes. L'ASCII utilise un nombre binaire de 7 bits, permettant 128 caractères uniques, avec des codes allant de 0 à 127.

Les caractères ASCII standard comprennent :

- Caractères de Contrôle (0–31) :

  Ce sont des caractères non imprimables qui contrôlent le traitement du texte. Exemples :

  - `0` (NUL) : Caractère nul
  - `9` (TAB) : Tabulation horizontale
  - `10` (LF) : Saut de ligne (newline)
  - `13` (CR) : Retour chariot

- Caractères Imprimables (32–127) :

  Ce sont des caractères visibles tels que les lettres, les chiffres, les signes de ponctuation et les symboles. Exemples :

  - `32` (SPACE) : Caractère espace
  - `65` (A) : Majuscule A
  - `97` (a) : Minuscule a
  - `48` (0) : Chiffre 0
  - `33` (!) : Point d'exclamation

Les codes ASCII utilisent 7 bits, ce qui permet de coder 128 caractères, mais les ordinateurs modernes utilisent 8 bits comme unité de base. Cette unité de 8 bits, ou octet, permet de coder 256 caractères, ce qui est généralement suffisant pour l'anglais et d'autres langues occidentales. Pour les langues plus complexes, des octets supplémentaires sont utilisés pour représenter les caractères, garantissant une utilisation efficace de la mémoire et du stockage. Bien que l'ASCII nécessite seulement 7 bits, une représentation en 8 bits est courante dans les ordinateurs, le bit supplémentaire étant généralement mis à 0. Par exemple, le code ASCII pour la majuscule "A" est 65 (décimal) ou 01000001 (binaire), avec le bit supplémentaire étant zéro.

**Certains symboles d'opérateurs mathématiques sur les ordinateurs**

Sur un clavier standard, vous pourriez remarquer l'absence de certains symboles mathématiques, tels que le signe de multiplication (×). Au lieu de cela, les ordinateurs utilisent souvent des symboles alternatifs pour plus de simplicité. Voici quelques exemples courants :

- Multiplication : `*`
- Division : `/`
- Modulo (reste de la division) : `%`
- Exponentiation : `**` (souvent utilisé dans les langages de programmation comme Python), et parfois `^` (commonly utilisé dans les calculatrices).

Ces symboles sont utilisés pour effectuer des opérations arithmétiques dans divers environnements de programmation et calculatrices.

**Unités de taille de données**

Les ordinateurs modernes utilisent 8 bits comme unité de base des données, connue sous le nom de octet (B). Voici un aperçu d'autres unités de taille de données courantes et leurs conversions :

- Bit (b, en minuscule) : L'unité de données la plus petite en informatique. Il représente un chiffre binaire, qui peut être soit `0` soit `1`.
- Octet (B, en majuscule) : L'unité de base des données, constituée de 8 bits.

Pour les mesures plus grandes, deux conversions différentes sont utilisées : binaire et décimale. Les unités binaires sont basées sur des puissances de 2, tandis que les unités décimales utilisent des puissances de 10. En informatique, les unités binaires sont standard, tandis que les unités décimales sont souvent utilisées dans le marketing. À partir de l'octet, une unité plus grande basée sur le binaire est 2^10 (1024) fois la première unité plus petite, tandis qu'une unité plus grande basée sur le décimal est 10^3 (1000) fois la première unité plus petite.

Unités basées sur le binaire :

- Kilooctet (Ko) : 1 Ko = 1 024 octets (2^10 octets).
- Mégaoctet (Mo) : 1 Mo = 1 024 Ko = 1 048 576 octets (2^20 octets).
- Gigaoctet (Go) : 1 Go = 1 024 Mo = 1 073 741 824 octets (2^30 octets).
- Tétraoctet (To) : 1 To = 1 024 Go = 1 099 511 627 776 octets (2^40 octets).

Unités basées sur le décimal :

- Kilooctet (Ko) : 1 Ko = 1 000 octets (10^3 octets).
- Mégaoctet (Mo) : 1 Mo = 1 000 Ko = 1 000 000 octets (10^6 octets).
- Gigaoctet (Go) : 1 Go = 1 000 Mo = 1 000 000 000 octets (10^9 octets).
- Tétraoctet (To) : 1 To = 1 000 Go = 1 000 000 000 000 octets (10^12 octets).

Pour distinguer clairement les mesures basées sur le binaire des mesures basées sur le décimal, la CEI (Commission Électrotechnique Internationale) a introduit le préfixe "bi" pour ces unités, qui signifie "binaire". Ces unités ont les mêmes valeurs que celles basées sur le binaire, mais des noms plus distinctifs.

- Kibioctet (Kio) : 1 Kio = 1 024 octets (2^10 octets).
- Mébioctet (Mio) : 1 Mio = 1 024 Kio = 1 048 576 octets (2^20 octets).
- Gibioctet (Gio) : 1 Gio = 1 024 Mio = 1 073 741 824 octets (2^30 octets).
- Tébioctet (Tio) : 1 Tio = 1 024 Gio = 1 099 511 627 776 octets (2^40 octets).

Les conversions décimales sont souvent utilisées dans le marketing car elles produisent des nombres plus grands pour la même capacité de stockage. Par exemple, un disque dur étiqueté comme ayant 500 Go (décimal) est en réalité de 500 000 000 000 octets, ce qui équivaut approximativement à 465 Gio (binaire).

**Représentation binaire pour différents types de données**

Toutes les données, quel que soit leur type, sont ultimement représentées sous forme binaire. Les données sont traitées et stockées comme des séquences de 0 et de 1 dans les ordinateurs. Pour stocker du texte, des images, de l'audio ou d'autres types de données, nous devons les "traduire" en code binaire, ce qui est appelé "encodage". Lorsque nous devons utiliser ces données de manière compréhensible pour les humains, le logiciel interprète le code binaire pour le convertir en texte, en image et dans d'autres formats que nous pouvons comprendre, ce qui est appelé "décodage".

Voici quelques exemples d'encodage pour différents types de données :

- **Texte** : Les caractères sont représentés en utilisant des normes d'encodage telles que ASCII ou Unicode (Code Universel). Chaque caractère se voit attribuer un code binaire unique. Par exemple, le code ASCII pour 'A' est 01000001 en binaire.
- **Nombres** : Les nombres sont représentés en utilisant divers formats binaires, comme les entiers (nombres sans parties fractionnelles, tels que `-3`, `0`) et les nombres à virgule flottante (nombres avec parties fractionnelles, tels que `3.14`, `-0.01`). Par exemple, l'entier 5 est 00000101 en représentation binaire sur 8 bits.
- **Audio** : Les données audio sont généralement représentées comme une série d'échantillons. Ces échantillons sont capturés à intervalles réguliers et encodés en binaire. Par exemple, un échantillon audio sur 16 bits peut être représenté par un nombre binaire de 16 bits.
- **Images** : Les images sont composées de pixels, chacun ayant des valeurs de couleur. Dans une image en niveaux de gris, chaque pixel peut être représenté par un nombre binaire de 8 bits indiquant son intensité. Dans une image en couleur, chaque pixel est généralement représenté par une combinaison de nombres binaires correspondant à ses composants de couleur rouge, verte et bleue.
- **Vidéo** : La vidéo est une séquence d'images (images fixes) et inclut souvent de l'audio. Chaque image est une image représentée en binaire, et les images sont affichées en succession rapide pour créer l'illusion du mouvement.
- **Fichiers et Formats** : Différents formats de fichiers (comme JPEG pour les images, MP3 pour l'audio, MP4 pour la vidéo) définissent des façons spécifiques d'encoder les données. Ces formats utilisent le code binaire pour structurer et compresser les données de manière efficace.

**Compression de données**

Imaginez que vous avez une énorme pile de jouets que vous devez ranger dans une petite boîte. La compression de données, c'est comme trouver un moyen d'arranger et de réduire la taille des jouets pour qu'ils tiennent tous dans la boîte sans en perdre un seul. En informatique, il s'agit de réduire la taille des fichiers pour qu'ils prennent moins de place et soient plus rapides à envoyer ou à stocker.

Voici un exemple simple de l'algorithme de codage par longueur d'exécution (RLE) : si vous avez une séquence de lettres anglaises "AAAAAAADDDDCCVSSSSSSSSS", qui fait 23 caractères occupant 23 octets d'espace. Nous pouvons compter combien de fois chaque lettre se répète et remplacer ces lettres par le nombre et la lettre elle-même : "7A4D2C1V9S". La nouvelle séquence se compose de 5 nombres et 5 lettres. Nous pouvons utiliser un octet pour représenter chaque nombre et utiliser le code ASCII pour les lettres, ce qui donne un total de 10 octets. Lorsque nous devons décompresser la séquence, nous lisons un nombre et une lettre, puis répétons la lettre en fonction du nombre. De cette manière, nous réduisons la taille des données et utilisons moins d'espace.

Pour différents types de données, nous choisissons généralement différents algorithmes de compression, chacun ayant ses propres avantages et limitations.