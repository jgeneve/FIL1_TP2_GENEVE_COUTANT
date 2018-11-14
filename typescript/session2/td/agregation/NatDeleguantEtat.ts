import { Nat } from "./Nat";
import { EtatNaturelPur } from "./EtatNaturelPur";

export abstract class NatDeleguantEtat implements Nat {
    constructor(private _etat : EtatNaturelPur) {}

    etat(): EtatNaturelPur {
        return this._etat;
    }

    val(): number {
        return this.etat().val()
    }

    estNul(): boolean {
        return this.val() === 0;
    }

    predecesseur(): Nat {
        if(this.estNul())
            throw new Error("Pas de prédécesseur.");
        return this.creerNatAvecValeur(this.val() - 1);
    }

    chiffre(i: number): number {
		return (i == 0) ? this.val() % 10 : (this.creerNatAvecValeur(this.val() / 10)).chiffre(i - 1);
    }

    taille(): number {
		return (this.val() < 10) ? 1 : 1 + (this.creerNatAvecValeur(this.val() / 10)).taille();
    }
    
    creerNatAvecValeur(valeur: number): Nat {
        return this.creerNatAvecEtat(this.etat().creerNatAvecValeur(valeur));
    }
    creerZero(): Nat {
        return this.creerNatAvecEtat(this.etat().creerZero());
    }
    creerSuccesseur(predecesseur: Nat): Nat {
        return this.creerNatAvecEtat(this.etat().creerSuccesseur(predecesseur));
    }
    creerNatAvecRepresentation(repDecimale: string): Nat {
        return this.creerNatAvecEtat(this.etat().creerNatAvecRepresentation(repDecimale));
    }

    abstract creerNatAvecEtat(etat: EtatNaturelPur): Nat;
    abstract somme(x: Nat): Nat;
    abstract zero(): Nat;
    abstract produit(x: Nat): Nat;
    abstract un(): Nat;
    abstract modulo(x: Nat): Nat;
    abstract div(x: Nat): Nat;
    abstract estEgal(x : Nat) : boolean;
    abstract representation() : string;
}