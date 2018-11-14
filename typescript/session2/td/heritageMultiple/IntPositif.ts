import { Nat } from "../../../session1/td/naturels";

export abstract class IntPositif implements Nat {
    abstract creerNatAvecValeur(valeur: number) : Nat;
    abstract somme(x : Nat) : Nat;
    abstract produit(x : Nat) : Nat;
    abstract div(x : Nat) : Nat;
    abstract modulo(x : Nat) : Nat;
    abstract estEgal(x : Nat) : boolean;
    abstract zero() : Nat;
    abstract un() : Nat;
    abstract representation() : string;

    constructor(private valeur : number) {
    }

    creerZero() : Nat {
        return this.creerNatAvecRepresentation("0");
    }

    creerSuccesseur(predecesseur : Nat) : Nat {
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    }

    creerNatAvecRepresentation(repDecimale : string) : Nat {
        return this.creerNatAvecValeur(Number(repDecimale))
    }

    val() : number {
        return this.valeur;
    }

    estNul() : boolean {
        return this.val() === 0;
    }

    predecesseur() : Nat {
        if(this.estNul()) {
            throw new Error("Pas de predecesseur");
        }
        return this.creerNatAvecValeur(this.val() - 1);
    }

    chiffre(i : number) : number {
		return (i == 0) ? this.val()%10 : (this.creerNatAvecValeur(this.val()/10)).chiffre(i-1);
    }

    taille() {
		return (this.val() < 10) ? 1 : 1 + (this.creerNatAvecValeur(this.val() / 10)).taille();
    }
}