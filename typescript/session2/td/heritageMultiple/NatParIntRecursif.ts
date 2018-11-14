import { IntPositif } from "./IntPositif";
import { AlgebreNatRecursif, AlgebreNatRecursif_defaut } from "./AlgebreNatRecursif";
import { Nat, FabriqueNat } from "../../../session1/td/naturels";
import { heriterInterfacesConcretes } from "../../../heritageMultiple/heritageInterfacesconcretes";

export class NatParIntRecursif extends IntPositif implements AlgebreNatRecursif {
    public static readonly FAB: FabriqueNat<Nat> = new NatParIntRecursif(1);
    
    constructor(valeur : number) {
        super(valeur);
    }

    creerNatAvecValeur(val : number) : Nat {
        return new NatParIntRecursif(val);
    }

    representation() : string {
        return String(this.val());
    }

    estEgal(x : Nat) : boolean {
        return this.val() === x.val();
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
    creerNatAvecRepresentation: (repDecimal: string) => Nat;
}

heriterInterfacesConcretes(NatParIntRecursif, [IntPositif, AlgebreNatRecursif_defaut])