CPU CISC

Premier bit indique si l'instruction a besion d'une suivante

exemple : 

-1xxxxxxx-	indique au CPU qu'il a besion de lire une instruction en plus

-0xxxxxxx-	indique au CPU qu'il faut executé cette instruction

Deux format d'instruction : 

-0-4upcode-3arg-  ou -1-4upcode-3arg- -0-3arg-3arg-1option-

/!\ option est un bit permettant d'activé ou non la mise a jour des FLAGS

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

 

 # taille 2 octet

-10000_arg- -0_arg_arg_o- : ADD  arg1 = arg2 + arg3
-10001_arg- -0_arg_arg_o- : SUBI arg1 = arg2 - arg3
-10010_arg- -0_arg_arg_o- : SUBU arg1 = arg2 - arg3
-10011_arg- -0_arg_xxxx- : MOV  arg1 = arg2 
-10100_arg- -0_arg_arg_o- : AND	arg1 = arg2 & arg3
-10101_arg- -0_arg_arg_o- : OR	arg1 = arg2 ^ arg3
-10110_arg- -0_arg_xxxx- : NOT  arg1 = NOT arg2











