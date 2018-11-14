import { AlgebreNatParInt, AlgebreNatParInt_defaut } from "./AlgebreNatParInt";
import { Nat, FabriqueNat } from "../../../session1/td/naturels";
import { ZeroParInt } from "./ZeroParInt";
import { EtatSucc } from "./EtatSucc";
import { heriterInterfacesConcretes } from "../../../heritageMultiple/heritageInterfacesconcretes";

export class SuccParInt extends EtatSucc implements AlgebreNatParInt {
    public static readonly FAB: FabriqueNat<Nat> = new SuccParInt(new ZeroParInt());

    constructor(_predecesseur : Nat) {
        super(_predecesseur)
    }

    creerZero() : Nat {
        return new ZeroParInt;
    }

    creerSuccesseur(predecesseur : Nat) : Nat {
        return new SuccParInt(predecesseur);
    }

    estEgal(x : Nat) {
        return x.representation() === this.representation()
    }

    representation() : string {
        return String(this.val())
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
    creerNatAvecValeur: (x: number) => Nat;
    creerNatAvecRepresentation: (repDecimal: string) => Nat;
}

heriterInterfacesConcretes(SuccParInt, [EtatSucc, AlgebreNatParInt_defaut])