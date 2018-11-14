import { EtatNaturel } from "./EtatNaturel";
import { FabriqueNat } from "../../../session1/td/naturels";
import { SemiAnneauUnitaireEuclidien } from "../../../structuresAlgebriques/hierarchie";
import { EtatNaturelPur } from "./EtatNaturelPur";

export interface Nat extends EtatNaturel<Nat>, FabriqueNat<Nat>, SemiAnneauUnitaireEuclidien<Nat> {
    creerNatAvecEtat(etat : EtatNaturelPur) : Nat;
    etat() : EtatNaturelPur;
    estEgal(x : Nat) : boolean;
    representation() : string;
}