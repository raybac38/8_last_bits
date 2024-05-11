Lire en format RAW sur github

CPU CISC

Premier bit indique si l'instruction a besion d'une suivante

exemple : 

-1xxxxxxx-	indique au CPU qu'il a besion de lire une instruction en plus

-0xxxxxxx-	indique au CPU qu'il faut executé cette instruction

Deux format d'instruction : 

-0-4upcode-3arg-  ou -1-4upcode-3arg- -3arg-3arg-2free-

/!\La présente d'un bit o signifie la présence d'une option permettant d'activé ou non la mise a jour des FLAGS

8 registre 8 bit généraux utilisable directement 
r0-7

registre utilisable indirectement

IR - instruction register
CP - programme counter - adresse de la prochaine instruction
SP - stack pointer - adresse de la pile

Jeu d'instruction

# taille 1 octet

-00000_arg- : NOP - Aucune opération 
-00001_arg- : BR  - Branchement vers r
-00010_xxx- : RET - Retour 
-00011_arg- : PUSH- Empile arg1
-00100_arg- : PULL- Dépile arg1
-00101_arg- : BUSW- Ecriture dans le bus une donnée
-00110_arg- : BUSR- Lecture du bus de donnée
-00111_arg- : JUMP_REL - saut relatif (utilisation de relatif)
-01000_arg- : INCR  Incrémentation de 1 de arg1
-01001_arg- : DECR  Décrémentation de 1 de arg1
-01010_arg- : BUSS  Mettre l'adress du bus a la valeur de ARG

# taille 2 octet

-10000_arg- -arg_arg_xo- : ADD   arg1 = arg2 + arg3
-10001_arg- -arg_arg_xo- : SUB   arg1 = arg2 - arg3
-10010_arg- -arg_arg_xo- : COMPL arg1 = complément a 2 de arg2
-10011_arg- -arg_xxx xx- : MOV   arg1 = arg2 
-10100_arg- -arg_arg_xo- : AND	 arg1 = arg2 & arg3
-10101_arg- -arg_arg_xo- : OR	 arg1 = arg2 ^ arg3
-10110_arg- -arg_xxx_xx- : NOT   arg1 = NOT arg2
-10111_arg- -arg_d_aa_xo-: LSH	 arg1 = arg2 logical shift
-11000_arg- -arg_d_aa_xo-: ASH   arg1 = arg2 artimetic shift
-11001_arg- -arg_d_aa_xo-: RSH	 arg1 = arg2 rotate shift
	=> d  = direction 0:gauche, 1:droite
	=> aa = nombre de décalage
-11010_arg- -arg_arg_xx- : JUMP_ABS - saut absolut arg1 = condition, arg2arg3 = adress
-11011_arg- -iiiiiiii-	 : SET	- arg1 = iiiiiiii
-11111_arg- -arg_xxxxx - : COMPC arg1-arg2 avec mise a jours des FLAGS













