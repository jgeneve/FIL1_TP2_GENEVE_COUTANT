import { Nat } from "../../../session1/td/naturels";
import { assembleurString } from "../../../bibliotheque/assembleurChaine";

export abstract class NombreDecimal implements Nat {
    abstract creerNatAvecRepresentation(rep: string): Nat;
    abstract somme(x: Nat): Nat;
    abstract produit(x: Nat): Nat;
	abstract div(x: Nat): Nat;
	abstract modulo(x: Nat): Nat;
	abstract zero(): Nat;
	abstract un(): Nat;
	abstract estEgal(x: Nat): boolean;
    abstract representation(): string;

    constructor(private chiffres: string) { }

    creerNatAvecValeur(valeur: number): Nat {
        return this.creerNatAvecRepresentation(String(valeur));
    }

    creerZero(): Nat {
        return this.creerNatAvecRepresentation("0")
    }

    creerSuccesseur(predecesseur: Nat): Nat {
        let t = predecesseur.taille();
        const a = assembleurString("");
        let retenue = 1;
        for (let i = 0; i < t; i++) {
            let chiffre = predecesseur.chiffre(i) + retenue;
            if (chiffre > 9) {
                chiffre = chiffre - 10;
                retenue = 1;
            } else {
                retenue = 0;
            }
            a.ajouterCaractereDebut(chiffre.toString());
        }
        if (retenue === 1) {
            a.ajouterCaractereDebut("1");
        }
        return this.creerNatAvecRepresentation(a.chaine());
    }

    val(): number {
        return parseInt(this.chiffres);
    }

    estNul(): boolean {
        return this.val() == 0;
    }

    predecesseur(): Nat {
        if (this.estNul()) {
            throw new Error("* Erreur : naturel nul sans prédécesseur.");
        }
        const t = this.taille();
        const rep: string[] = [];
        let retenue = -1;
        for (let i = 0; i < t; i++) {
            let chiffre = this.chiffre(i) + retenue;
            if (chiffre === -1) {
                chiffre = 9;
                retenue = -1;
            } else {
                retenue = 0;
            }
            rep.push(chiffre.toString());
        }
        return this.creerNatAvecRepresentation(rep.reverse().join(""));
    }

    taille(): number {
        return this.chiffres.length;
    }

    chiffre(i: number): number {
        if (i < this.taille()) {
            return parseInt(this.chiffres.charAt(this.taille() - 1 - i));
        }
        return 0;
    }
}