import { NatInductif, NatInductif_defaut } from "./NatInductif";
import { Nat } from "../../../session1/td/naturels";
import { heriterInterfacesConcretes } from "../../../heritageMultiple/heritageInterfacesconcretes";

export abstract class EtatSucc implements NatInductif {
    abstract creerNatAvecValeur(valeur: number) : Nat;
    abstract creerZero() : Nat;
    abstract creerSuccesseur(predecesseur : Nat) : Nat;
    abstract creerNatAvecRepresentation(repDecimal : string) : Nat;
    abstract somme(x : Nat) : Nat;
    abstract produit(x : Nat) : Nat;
    abstract div(x : Nat) : Nat;
    abstract modulo(x : Nat) : Nat;
    abstract estEgal(x : Nat) : boolean;
    abstract zero() : Nat;
    abstract un() : Nat;
    abstract representation() : string;

    constructor(private _predecesseur : Nat) {
    }

    val() : number {
        return this._predecesseur.val() + 1;
    }

    estNul() : boolean {
        return false;
    }

    predecesseur() : Nat {
        return this._predecesseur;
    }

    chiffre(i : number) {
        return (i == 0) ? this.val()%10 : (this.creerNatAvecValeur(this.val()/10)).chiffre(i-1);
    }

    taille() : number {
        return (this.val() < 10) ? 1 : 1 + (this.creerNatAvecValeur(this.val() / 10)).taille();
    }
}

heriterInterfacesConcretes(EtatSucc, [NatInductif_defaut])