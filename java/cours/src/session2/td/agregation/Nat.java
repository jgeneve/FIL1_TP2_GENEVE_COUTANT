package session2.td.agregation;

import hierarchie.SemiAnneauUnitaireEuclidien;
import session1.td.FabriqueNaturels;

public interface Nat extends EtatNaturel<Nat>, FabriqueNaturels<Nat>, SemiAnneauUnitaireEuclidien<Nat> {
	Nat creerNatAvecEtat(EtatNaturelPur etat);
	EtatNaturelPur etat();
}
