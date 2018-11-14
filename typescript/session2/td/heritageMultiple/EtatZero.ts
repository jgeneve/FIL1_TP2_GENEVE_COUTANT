import { NatInductif, NatInductif_defaut } from "./NatInductif";
import { Nat } from "../../../session1/td/naturels";
import { heriterInterfacesConcretes } from "../../../heritageMultiple/heritageInterfacesconcretes";

export abstract class EtatZero implements NatInductif {
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

    constructor() {

    }

    val() : number {
        return 0;
    }

    estNul() : boolean {
        return true;
    }

    predecesseur() : Nat {
        throw new Error("Pas de predecesseur.")
    }

    chiffre(i : number) {
        return 0;
    }

    taille() : number {
        return 1
    }
}

heriterInterfacesConcretes(EtatZero, [NatInductif_defaut])