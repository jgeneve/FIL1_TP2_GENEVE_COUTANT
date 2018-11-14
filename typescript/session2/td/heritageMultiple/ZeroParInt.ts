import { EtatZero } from "./EtatZero";
import { AlgebreNatParInt, AlgebreNatParInt_defaut } from "./AlgebreNatParInt";
import { FabriqueNat, Nat } from "../../../session1/td/naturels";
import { SuccParInt } from "./SuccParInt";
import { heriterInterfacesConcretes } from "../../../heritageMultiple/heritageInterfacesconcretes";

export class ZeroParInt extends EtatZero implements AlgebreNatParInt {
    public static readonly FAB: FabriqueNat<Nat> = new ZeroParInt();

    constructor(){
        super()
    }

    creerZero() : Nat{
        return this;
    }

    creerSuccesseur(predecesseur : Nat) : Nat {
        return new SuccParInt(this);
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

heriterInterfacesConcretes(ZeroParInt, [EtatZero, AlgebreNatParInt_defaut])