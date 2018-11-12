package session2.td.heritageMultiple;

import session1.td.Nat;

public abstract class EtatZero implements NatInductif {
	
	public EtatZero() {	}
	
	public int val() {
		return 0;
	}
	
	public boolean estNul() {
		return true;
	}
	
	public Nat predecesseur() {
		throw new UnsupportedOperationException("Pas de prédécesseur.");
	}
	
	public int chiffre(int i) {
		return 0;
	}
	
	public int taille() {
		return 1;
	}

}
