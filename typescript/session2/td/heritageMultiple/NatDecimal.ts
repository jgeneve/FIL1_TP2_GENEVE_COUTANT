import { Nat, FabriqueNat } from "../../../session1/td/naturels";
import { NombreDecimal } from "./NombreDecimal";
import { AlgebreNatDecimal, AlgebreNatDecimal_defaut } from "./AlgebreNatDecimal";
import { assembleurString } from "../../../bibliotheque/assembleurChaine";
import { heriterInterfacesConcretes } from "../../../heritageMultiple/heritageInterfacesconcretes";

function nettoyage(s: string): string {
    const a = assembleurString(s);
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "0") {
            a.retirerCaractereDebut();
        } else {
            break;
        }
    }
    return a.chaine();
}

export class NatDecimal extends NombreDecimal implements AlgebreNatDecimal {
    public static readonly FAB : FabriqueNat<Nat> = new NatDecimal("1");
    
    constructor(repDecimal : string) {
        super(repDecimal);
    }

    creerNatAvecRepresentation(repDecimale: string): Nat {
        if (repDecimale.search(/^d/) !== -1) {
            throw new Error("* Erreur : représentation non décimale.");
        }
        repDecimale = nettoyage(repDecimale);
        if (repDecimale === "") {
            repDecimale = "0";
        }
        return new NatDecimal(repDecimale);
    }

    estEgal(n : Nat) : boolean {
        return this.representation() === n.representation();
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
    creerSucc: (x: Nat) => Nat;
    creerZero: () => Nat;
}

heriterInterfacesConcretes(NatDecimal, [NombreDecimal, AlgebreNatDecimal_defaut])