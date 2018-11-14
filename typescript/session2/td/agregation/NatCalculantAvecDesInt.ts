import { NatDeleguantEtat } from "./NatDeleguantEtat";
import { EtatNaturelPur } from "./EtatNaturelPur";
import { Nat } from "./Nat";

export class NatCalculantAvecDesInts extends NatDeleguantEtat {
    constructor(_etat : EtatNaturelPur) {
        super(_etat);
    }
    
    creerNatAvecEtat(etat: EtatNaturelPur) : Nat {
        return new NatCalculantAvecDesInts(etat)
    }    
    somme(x: Nat) : Nat {
        return this.creerNatAvecValeur(this.val() + x.val())
    }
    zero(): Nat {
        return this.creerNatAvecValeur(0);
    }
    produit(x: Nat) : Nat {
        return this.creerNatAvecValeur(this.val() * x.val())
    }
    un(): Nat {
        return this.creerNatAvecValeur(1);
    }
    modulo(x: Nat) : Nat {
        return this.creerNatAvecValeur(this.val() % x.val())
    }
    div(x: Nat) : Nat {
        return this.creerNatAvecValeur(this.val() / x.val())
    }
    estEgal(x: Nat): boolean {
        return this.val() === x.val();
    }
    representation(): string {
        return String(this.val());
    }
}