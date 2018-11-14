export interface EtatNaturel<T> {
    estNul() : boolean;
    predecesseur() : T;
    chiffre(i : number) : number;
    taille() : number;
    val() : number;
}