import { EtatNaturelPur, EtatNaturelPur_defaut } from "./EtatNaturelPur";
import { heriterInterfacesConcretes } from "../../../heritageMultiple/heritageInterfacesconcretes";

export class IntPositif implements EtatNaturelPur {
    constructor(private valeur : number) {
        if (valeur < 0){
            throw new Error("Pas de Nat a partir d'un int negatif");
        }
    }

    val() : number {
        return this.valeur;
    }

    estNul() : boolean {
        return this.val() === 0;
    }

    predecesseur() : EtatNaturelPur {
        if(this.estNul) {
            throw new Error("Pas de prédécesseur");
        }
        return this.creerNatAvecValeur(this.val() - 1);
    }

    chiffre(i : number) : number{
		return (i == 0) ? this.val()%10 : (this.creerNatAvecValeur(this.val()/10)).chiffre(i-1);
    }

    taille() : number {
		return (this.val() < 10) ? 1 : 1 + (this.creerNatAvecValeur(this.val() / 10)).taille();
    }

    creerNatAvecValeur(valeur : number) : EtatNaturelPur {
        return new IntPositif(valeur);
    }

    representation() : string {
        return String(this.val());
    }

    estEgal(x : EtatNaturelPur) : boolean {
        return x.val() === this.val();
    }

    creerZero : () => EtatNaturelPur;
    creerSuccesseur : (predecesseur : EtatNaturelPur) => EtatNaturelPur;
    creerNatAvecRepresentation : (repDecimal : string) => EtatNaturelPur;
}

heriterInterfacesConcretes(IntPositif, [EtatNaturelPur_defaut])