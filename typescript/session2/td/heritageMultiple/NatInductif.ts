import { Nat } from "../../../session1/td/naturels"
import { NatParInt } from "./NatParInt";

export interface NatInductif extends Nat {
    creerNatAvecValeur(val : number) : Nat;
}

export abstract class NatInductif_defaut implements NatInductif {
    abstract val(): number;
	abstract estNul(): boolean;
	abstract predecesseur(): Nat;
	abstract taille(): number;
	abstract chiffre(i: number): number;
	abstract somme(pNat: Nat): Nat;
	abstract creerZero(): Nat;
	abstract creerSuccesseur(pNat: Nat): Nat;
	abstract produit(pNat: Nat): Nat;
	abstract div(pNat: Nat): Nat;
	abstract modulo(pNat: Nat): Nat;
	abstract zero(): Nat;
	abstract un(): Nat;
	abstract estEgal(pNat: Nat): boolean;
    abstract representation(): string;

    creerNatAvecValeur(val : number) : Nat {
        if (val === 0)
            return this.creerZero();
        return this.creerSuccesseur(this.creerNatAvecValeur(val - 1));
    }

    creerNatAvecRepresentation(repDecimale : string) : Nat {
        return this.creerNatAvecValeur(Number(repDecimale));
    }
}