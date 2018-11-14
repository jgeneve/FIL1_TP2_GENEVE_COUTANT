import { EtatZero } from "./EtatZero";
import { AlgebreNatRecursif, AlgebreNatRecursif_defaut } from "./AlgebreNatRecursif";
import { Nat, FabriqueNat } from "../../../session1/td/naturels";
import { heriterInterfacesConcretes } from "../../../heritageMultiple/heritageInterfacesconcretes";
import { SuccRecursif } from "./SuccRecursif";

export class ZeroRecursif extends EtatZero implements AlgebreNatRecursif {
    public static readonly FAB: FabriqueNat<Nat> = new ZeroRecursif();
    
    constructor() {super()}

    creerZero() {
        return this;
    }

    creerSuccesseur(x : Nat) : Nat {
        return new SuccRecursif(x);
    }

    estEgal(x : Nat) {
        return this.val() === x.val();
    }

    representation() : string {
        return String(this.val());
    }

    somme: (x: Nat) => Nat;
    produit: (x: Nat) => Nat;
	div: (x: Nat) => Nat;
	modulo: (x: Nat) => Nat;
	zero: () => Nat;
    un: () => Nat;
    val: () => number;
    estNul: () => boolean;
    predecesseur: () => Nat;
    taille: () => number;
    chiffre: (i: number) => number;
    creerNatAvecValeur: (valeur: number) => Nat;
    creerNatAvecRepresentation: (repDecimal: string) => Nat;
}

heriterInterfacesConcretes(ZeroRecursif, [EtatZero, AlgebreNatRecursif_defaut]);