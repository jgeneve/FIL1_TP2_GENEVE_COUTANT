import { Nat } from "../../../session1/td/naturels"

export interface AlgebreNatRecursifZero extends Nat {
    somme(val : Nat) : Nat;
    zero() : Nat;
    produit(x : Nat) : Nat;
    un() : Nat;
    modulo(x : Nat) : Nat
    div(x: Nat) : Nat;
    estEgal(x : Nat) : boolean;
    representation() : string;
}

export abstract class AlgebreNatRecursifZero_defaut implements AlgebreNatRecursifZero {
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
        return x;
    }

    zero() : Nat {
        return this.creerZero();
    }

    produit(x : Nat) : Nat {
        return this.zero();
    }

    un() : Nat {
        return this.creerSuccesseur(this.creerZero());
    }

    modulo(x : Nat) : Nat {
        return this.zero();
    }

    div(x : Nat) : Nat {
        return this.zero();
    }

    estEgal(x : Nat) : boolean {
        return x.estNul();
    }

    representation() : string {
        return "0";
    }
}