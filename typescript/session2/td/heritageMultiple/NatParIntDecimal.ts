import { IntPositif } from "./IntPositif";
import { AlgebreNatParInt, AlgebreNatParInt_defaut } from "./AlgebreNatParInt";
import { Nat, FabriqueNat } from "../../../session1/td/naturels"
import { heriterInterfacesConcretes } from "../../../heritageMultiple/heritageInterfacesconcretes";

export class NatParIntDecimal extends IntPositif implements AlgebreNatParInt {
    public static readonly FAB: FabriqueNat<Nat> = new NatParIntDecimal(1);
    
    constructor(valeur : number) {
        super(valeur)
    }

    creerNatAvecValeur(x : number) : Nat {
        return new NatParIntDecimal(x);
    }

    representation() : string {
        return String(this.val());
    }

    estEgal(x : Nat) : boolean {
        return x.val() === this.val();
    }

    somme: (pNat: Nat) => Nat;
    produit: (pNat: Nat) => Nat;
	div: (pNat: Nat) => Nat;
	modulo: (pNat: Nat) => Nat;
	zero: () => Nat;
    un: () => Nat;
    val: () => number;
    estNul: () => boolean;
    predecesseur: () => Nat;
    taille: () => number;
    chiffre: (i: number) => number;
    creerZero: () => Nat;
    creerNatAvecRepresentation: (pNombre: string) => Nat;
    creerSuccesseur: (pNat: Nat) => Nat;
 }

heriterInterfacesConcretes(NatParIntDecimal, [IntPositif, AlgebreNatParInt_defaut]);
