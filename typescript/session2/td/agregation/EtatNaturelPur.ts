import { EtatNaturel } from "./EtatNaturel";
import { FabriqueNat } from "../../../session1/td/naturels";
import { IntPositif } from "./IntPositif";

export interface EtatNaturelPur extends EtatNaturel<EtatNaturelPur>, FabriqueNat<EtatNaturelPur> {
    creerZero() : EtatNaturelPur;
    creerSuccesseur(predecesseur : EtatNaturelPur) : EtatNaturelPur;
    creerNatAvecValeur(valeur : number) : EtatNaturelPur;
    creerNatAvecRepresentation(repDecimal : string) : EtatNaturelPur;
}

export abstract class EtatNaturelPur_defaut implements EtatNaturelPur {
    creerZero(): EtatNaturelPur {
        return this.creerNatAvecValeur(0);
    }    
    creerSuccesseur(predecesseur : EtatNaturelPur): EtatNaturelPur {
        return this.creerNatAvecValeur(predecesseur.val() + 1)
    }
    creerNatAvecValeur(valeur : number): EtatNaturelPur {
        if(this.val() < 0) {
            throw new Error("Nat inferieur a zero");
        }
        return new IntPositif(valeur);
    }
    creerNatAvecRepresentation(repDecimal : string): EtatNaturelPur {
        return this.creerNatAvecValeur(Number(repDecimal));
    }
    abstract estNul(): boolean;
    abstract predecesseur(): EtatNaturelPur;
    abstract chiffre(i: number): number;
    abstract taille(): number;
    abstract val(): number;

}