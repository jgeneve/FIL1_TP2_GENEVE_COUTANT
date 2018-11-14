import { Nat } from "../../../session1/td/naturels"

export interface AlgebreNatRecursifSuccesseur extends Nat {
    somme(val : Nat) : Nat;
    zero() : Nat;
    produit(x : Nat) : Nat;
    un() : Nat;
    modulo(x : Nat) : Nat
    div(x: Nat) : Nat;
    estEgal(x : Nat) : boolean;
    representation() : string;
}

export abstract class AlgebreNatRecursifSuccesseur_defaut implements AlgebreNatRecursifSuccesseur {
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
        return this.creerSuccesseur(this.predecesseur().somme(x));
    }

    zero() : Nat {
        return this.creerZero();
    }

    produit(x : Nat) : Nat {
        return x.somme(this.predecesseur().produit(x));
    }

    un() : Nat {
        return this.creerNatAvecValeur(1);
    }

    modulo(x : Nat) : Nat {
        let r = this.predecesseur().modulo(x);
        if(this.creerSuccesseur(r).estEgal(x)) {
            return this.creerZero()
        } else {
            return this.creerSuccesseur(r);
        }
    }

    div(x : Nat) : Nat {
        let r = this.predecesseur().modulo(x);
        let q = this.predecesseur().div(x);
        if (this.creerSuccesseur(r).estEgal(x)) {
            return this.creerSuccesseur(q);
        } else {
            return q;
        }
    }

    estEgal(x : Nat) : boolean {
        if (x.estNul()) 
            return false;
        return this.predecesseur().estEgal(x.predecesseur());
    }

    representation() : string {
        return String(this.val());
    }
}