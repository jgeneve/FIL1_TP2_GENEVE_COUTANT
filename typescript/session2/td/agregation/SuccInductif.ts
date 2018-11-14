import { NaturelInductif, NaturelInductif_defaut } from "./NaturelInductif";
import { EtatNaturelPur } from "./EtatNaturelPur";
import { heriterInterfacesConcretes } from "../../../heritageMultiple/heritageInterfacesconcretes";

export class SuccInductif implements NaturelInductif {
    constructor(private _predecesseur : EtatNaturelPur) {}
    
    val(): number {
        return this.predecesseur().val() + 1;
    }

    estNul(): boolean {
        return false;
    }

    predecesseur(): EtatNaturelPur {
        return this._predecesseur;
    }

    chiffre(i: number): number {
		return (i == 0) ? this.val()%10 : (this.creerNatAvecValeur(this.val()/10)).chiffre(i-1);
    }

    taille(): number {
		return (this.val() < 10) ? 1 : 1 + (this.creerNatAvecValeur(this.val() / 10)).taille();
    }

    representation() : string {
        return String(this.val());
    }

    estEgal(x : EtatNaturelPur) {
        return x.val() === this.val();
    }

    creerZero : () => EtatNaturelPur;   
    creerSuccesseur : (predecesseur : EtatNaturelPur) => EtatNaturelPur; 
    creerNatAvecValeur : (valeur : number) => EtatNaturelPur; 
    creerNatAvecRepresentation : (repDecimal : string) => EtatNaturelPur;   
}

heriterInterfacesConcretes(SuccInductif, [NaturelInductif_defaut])
