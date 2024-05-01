


class Prossésseur
{

    constructor()
    {
        /// Registre non accéssible
        this.intruction_register = null;    //registre stockant l'instruction

        this.programme_counter_high = null; //registre comptabilisant l'adresse de la prochaine instruction
        this.programme_counter_low = null;

        this.stack_pointer_high = null;     //registre du pointeur de pile 
        this.stack_pointer_low = null;

        //////////////////////////////////////////

        /// Registre accéssible

        this.registre_000 = null;
        this.registre_001 = null;
        this.registre_010 = null;
        this.registre_011 = null;
        this.registre_100 = null;
        this.registre_101 = null;
        this.registre_110 = null;
        this.registre_111 = null;

    }




}