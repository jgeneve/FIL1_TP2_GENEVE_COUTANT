import { EtatSucc } from "./EtatSucc";
import { AlgebreNatRecursif, AlgebreNatRecursif_defaut } from "./AlgebreNatRecursif";
import { Nat, FabriqueNat } from "../../../session1/td/naturels";
import { ZeroRecursif } from "./ZeroRecursif";
import { heriterInterfacesConcretes } from "../../../heritageMultiple/heritageInterfacesconcretes";

export class SuccRecursif extends EtatSucc implements AlgebreNatRecursif {
    public static readonly FAB: FabriqueNat<Nat> = new SuccRecursif(new ZeroRecursif());
    
    constructor(_predecesseur : Nat) {super(_predecesseur)}

    creerZero() {
        return new ZeroRecursif;
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
heriterInterfacesConcretes(SuccRecursif, [EtatSucc, AlgebreNatRecursif_defaut])