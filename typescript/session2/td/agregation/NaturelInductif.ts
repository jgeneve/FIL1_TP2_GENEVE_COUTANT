import { EtatNaturelPur } from "./EtatNaturelPur";
import { SuccInductif } from "./SuccInductif";
import { ZeroInductif } from "./ZeroInductif";
import { heriterInterfacesConcretes } from "../../../heritageMultiple/heritageInterfacesconcretes";
import { NatInductif_defaut } from "../heritageMultiple/NatInductif";

export interface NaturelInductif extends EtatNaturelPur {
    creerZero() : EtatNaturelPur;
    creerSuccesseur(predecesseur : EtatNaturelPur) : EtatNaturelPur;
    creerNatAvecValeur(valeur : number) : EtatNaturelPur;
}

export abstract class NaturelInductif_defaut implements EtatNaturelPur{
    creerNatAvecValeur(valeur : number) : EtatNaturelPur {
		if (valeur === 0)
			return this.creerZero();
		return this.creerSuccesseur(this.creerNatAvecValeur(valeur - 1));
	}
	creerZero() : EtatNaturelPur {
		return new ZeroInductif();
	}
	creerSuccesseur(predecesseur : EtatNaturelPur ) : EtatNaturelPur {
		return new SuccInductif(predecesseur);
    }
    
    abstract creerNatAvecRepresentation(repDecimal: string): EtatNaturelPur;
    abstract estNul(): boolean;
    abstract predecesseur(): EtatNaturelPur;
    abstract chiffre(i: number): number;
    abstract taille(): number;
    abstract val(): number;
}

heriterInterfacesConcretes(NaturelInductif_defaut, [NatInductif_defaut])
