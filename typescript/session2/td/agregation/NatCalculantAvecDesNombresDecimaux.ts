import { NatDeleguantEtat } from "./NatDeleguantEtat";
import { EtatNaturelPur } from "./EtatNaturelPur";
import { Nat } from "./Nat";

export class NatCalculantAvecDesNombresDecimaux extends NatDeleguantEtat {
    constructor(_etat : EtatNaturelPur) {
        super(_etat);
    }

    creerNatAvecEtat(etat : EtatNaturelPur) : Nat {
        return new NatCalculantAvecDesNombresDecimaux(etat);
    }

    somme(x: Nat): Nat {
        const t = this.taille() < x.taille() ? x.taille() : this.taille();
        const rep: string[] = [];
        let retenue = 0;
        for (let i = 0; i < t; i++) {
            let chiffre = this.chiffre(i) + x.chiffre(i) + retenue;
            if (chiffre > 9) {
                chiffre = chiffre - 10;
                retenue = 1;
            } else {
                retenue = 0;
            }
            rep.push(chiffre.toString());
        }
        if (retenue === 1) {
            rep.push("1");
        }
        return this.creerNatAvecRepresentation(rep.reverse().join(""));
    }

    zero(): Nat {
        return this.creerZero();
    }

    produit(x: Nat): Nat {
        if (x.estEgal(this.creerNatAvecRepresentation("10"))) {
            return this.creerNatAvecRepresentation(this.representation() + "0");
        }
        let res = this.zero();
        let index = this.zero();
        while (!index.estEgal(x)) {
            res = res.somme(this);
            index = this.creerSuccesseur(index);
        }
        return res;
    }

    un(): Nat {
        return this.creerNatAvecRepresentation("1");
    }

    modulo(x: Nat): Nat {
        if (x.estEgal(this.creerNatAvecRepresentation("10"))) {
            return this.creerNatAvecValeur(this.chiffre(0));
        }
        let courant = this.zero();
        let r = this.zero();
        while (!courant.estEgal(this)) {
            r = this.creerSuccesseur(r);
            if (r.estEgal(x)) {
                r = this.zero();
            }
            courant = this.creerSuccesseur(courant);
        }
        return r;
    }

    div(x: Nat): Nat {
        if (x.estEgal(this.creerNatAvecRepresentation("10"))) {
            if (this.taille() == 1)
                return this.zero();
            return this.creerNatAvecRepresentation(
                this.representation().substring(0, this.taille() - 1));
        }
        let courant = this.zero();
        let q = this.zero();
        let r = this.zero();
        while (!courant.estEgal(this)) {
            r = this.creerSuccesseur(r);
            if (r.estEgal(x)) {
                r = this.zero();
                q = this.creerSuccesseur(q);
            }
            courant = this.creerSuccesseur(courant);
        }
        return q;
    }

    representation(): string {
        return String(this.val());
    }

    estEgal(n: Nat): boolean {
        return this.representation() === n.representation();
    }
}