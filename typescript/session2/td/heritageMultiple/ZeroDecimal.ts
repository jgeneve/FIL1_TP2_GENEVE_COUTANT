import { EtatZero } from "./EtatZero";
import { AlgebreNatParInt, AlgebreNatParInt_defaut } from "./AlgebreNatParInt";
import { FabriqueNat, Nat } from "../../../session1/td/naturels";
import { heriterInterfacesConcretes } from "../../../heritageMultiple/heritageInterfacesconcretes";
import { SuccDecimal } from "./SuccDecimal";

export class ZeroDecimal extends EtatZero implements AlgebreNatParInt {
    public static readonly FAB: FabriqueNat<Nat> = new ZeroDecimal();

    constructor(){
        super()
    }

    creerZero() : Nat{
        return this;
    }

    creerSuccesseur(predecesseur : Nat) : Nat {
        return new SuccDecimal(this);
    }

    estEgal(x : Nat) : boolean {
        return x.estNul();
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
    creerNatAvecValeur: (x: number) => Nat;
    creerNatAvecRepresentation: (repDecimal: string) => Nat;
}

heriterInterfacesConcretes(ZeroDecimal, [EtatZero, AlgebreNatParInt_defaut])