import { Nat } from "../../../session1/td/naturels"
import { AlgebreNatRecursifSuccesseur } from "./AlgebreNatRecursifSuccesseur";
import { AlgebreNatRecursifZero } from "./AlgebreNatRecursifZero";

export interface AlgebreNatRecursif extends AlgebreNatRecursifSuccesseur, AlgebreNatRecursifZero {
    somme(val : Nat) : Nat;
    zero() : Nat;
    produit(x : Nat) : Nat;
    un() : Nat;
    modulo(x : Nat) : Nat
    div(x: Nat) : Nat;
    estEgal(x : Nat) : boolean;
    representation() : string;
}

export abstract class AlgebreNatRecursif_defaut implements AlgebreNatRecursif {
    abstract creerNatAvecValeur(valeur: number) : Nat;
    abstract creerNatAvecRepresentation(repDecimale : String) : Nat;
    abstract val() : number;
    abstract estNul() : boolean;
    abstract predecesseur() : Nat;
    abstract taille() : number;
    abstract chiffre(i : number) : number;
    abstract creerZero() : Nat;
    abstract creerSuccesseur(predecesseur : Nat) : Nat;
    
    somme(x : Nat) : Nat{
		if(this.estNul()) { 
			return x;
		}
		return this.creerSuccesseur(this.predecesseur().somme(x));
	}
	
	zero() : Nat{
		return this.creerZero();
	}
	
	produit(x : Nat) : Nat {
		if(this.estNul()) { 
			return this.creerZero();
		}
		return x.somme(this.predecesseur().produit(x));
	}
	
	un() : Nat {
		return this.creerNatAvecValeur(1);
	}
	
	modulo(x : Nat) : Nat{
		if(this.estNul()) { 
			return this.creerZero();
		}
		let r = this.predecesseur().modulo(x);
		return this.creerSuccesseur(r).estEgal(x) ? this.creerZero() : this.creerSuccesseur(r);
	}
	
	div(x : Nat) : Nat{
		if(this.estNul()) { 
			return this.creerZero();
		}
		let r = this.predecesseur().modulo(x);
		let q = this.predecesseur().div(x);
		return this.creerSuccesseur(r).estEgal(x) ? this.creerSuccesseur(q) : q;
	}
	
	estEgal(x : Nat) : boolean {
		return this.val() === x.val();
    }
    
    representation() : string {
        return String(this.val());
    }
}