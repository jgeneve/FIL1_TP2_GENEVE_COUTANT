import { NaturelInductif, NaturelInductif_defaut } from "./NaturelInductif";
import { EtatNaturelPur } from "./EtatNaturelPur";
import { heriterInterfacesConcretes } from "../../../heritageMultiple/heritageInterfacesconcretes";

export class ZeroInductif implements NaturelInductif {
    constructor() {}
    
    val(): number {
        return 0;
    }

    estNul(): boolean {
        return true;
    }

    predecesseur(): EtatNaturelPur {
        throw new Error("Pas de prédécesseur.");
    }

    chiffre(i: number): number {
        return 0;
    }

    taille(): number {
        return 1;
    }

    representation() : string {
        return "0";
    }

    estEgal(x : EtatNaturelPur) {
        return x.estNul();
    }

    creerZero : () => EtatNaturelPur;   
    creerSuccesseur : (predecesseur : EtatNaturelPur) => EtatNaturelPur; 
    creerNatAvecValeur : (valeur : number) => EtatNaturelPur; 
    creerNatAvecRepresentation : (repDecimal : string) => EtatNaturelPur; 
}

heriterInterfacesConcretes(ZeroInductif, [NaturelInductif_defaut]);