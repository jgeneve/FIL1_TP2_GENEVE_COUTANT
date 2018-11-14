import { IntPositif } from "./IntPositif";
import { AlgebreNatParInt, AlgebreNatParInt_defaut } from "./AlgebreNatParInt";
import { Nat, FabriqueNat } from "../../../session1/td/naturels"
import { heriterInterfacesConcretes } from "../../../heritageMultiple/heritageInterfacesconcretes";

export class NatParInt extends IntPositif implements AlgebreNatParInt {
    public static readonly FAB: FabriqueNat<Nat> = new NatParInt(1);
    
    constructor(valeur : number) {
        super(valeur)
    }

    creerNatAvecValeur(x : number) : Nat {
        return new NatParInt(x);
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

heriterInterfacesConcretes(NatParInt, [AlgebreNatParInt_defaut]);
