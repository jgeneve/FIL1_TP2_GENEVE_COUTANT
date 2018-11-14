import {Nat} from "../../../session1/td/naturels"

export interface AlgebreNatParInt extends Nat {
    somme(val : Nat) : Nat;
    zero() : Nat;
    produit(x : Nat) : Nat;
    un() : Nat;
    modulo(x : Nat) : Nat
    div(x: Nat) : Nat;
    estEgal(x : Nat) : boolean;
    representation() : string;
}

export abstract class AlgebreNatParInt_defaut implements AlgebreNatParInt {
    abstract creerNatAvecValeur(valeur: number) : Nat;
    abstract creerNatAvecRepresentation(repDecimale : String) : Nat;
    abstract val() : number;
    abstract estNul() : boolean;
    abstract predecesseur() : Nat;
    abstract taille() : number;
    abstract chiffre(i : number) : number;
    abstract creerZero() : Nat;
    abstract creerSuccesseur(predecesseur : Nat) : Nat;

    somme(x : Nat) : Nat {
        return this.creerNatAvecValeur(x.val() + this.val());
    }

    zero() : Nat {
        return this.creerNatAvecValeur(0);
    }

    produit(x : Nat) : Nat {
        return this.creerNatAvecValeur(x.val() * this.val());
    }

    un() : Nat {
        return this.creerNatAvecValeur(1);
    }

    modulo(x : Nat) : Nat {
        return this.creerNatAvecValeur(this.val() % x.val());
    }

    div(x : Nat) : Nat {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    }

    estEgal(n : Nat) : boolean {
        return this.representation() === n.representation();
    }

    representation() : string {
        return String(this.val())
    }
}