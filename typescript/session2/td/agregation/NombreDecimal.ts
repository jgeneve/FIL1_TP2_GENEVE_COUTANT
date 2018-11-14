import { EtatNaturelPur, EtatNaturelPur_defaut } from "./EtatNaturelPur";
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

export class NombreDecimal implements EtatNaturelPur {
    constructor(private chiffres : string) {
    }

    val() : number {
        return Number(this.chiffres);
    }

    estNul() : boolean {
        return this.val() === 0;
    }

    predecesseur() : EtatNaturelPur {
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

    creerNatAvecRepresentation(repDecimale : string) : EtatNaturelPur {
        if (repDecimale.search(/^d/) !== -1) {
            throw new Error("* Erreur : représentation non décimale.");
        }
        repDecimale = nettoyage(repDecimale);
        if (repDecimale === "") {
            repDecimale = "0";
        }
        return new NombreDecimal(repDecimale);
    }

    chiffre(i : number) : number{
		if (i < this.taille()) {
            return parseInt(this.chiffres.charAt(this.taille() - 1 - i));
        }
        return 0;
    }

    taille() : number {
        return this.chiffres.length;
    }
    
    representation() : string {
        return String(this.val());
    }
    
    estEgal(x : EtatNaturelPur) : boolean {
        return x.val() === this.val();
    }
    
    creerZero : () => EtatNaturelPur;
    creerSuccesseur : (predecesseur : EtatNaturelPur) => EtatNaturelPur;
    creerNatAvecValeur: (valeur : number) => EtatNaturelPur;
}

heriterInterfacesConcretes(NombreDecimal, [EtatNaturelPur_defaut]);