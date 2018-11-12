package session2.td.heritageMultiple;

import session1.td.Nat;

public abstract class EtatSucc implements NatInductif {

	private Nat predecesseur;
	
	public EtatSucc(Nat val) {
		this.predecesseur = val;
	}
	
	public int val() {
		return this.predecesseur.val();
	}
	
	public boolean estNul() {
		return this.val() == 0;
	}
	
	public Nat predecesseur() {
		if(this.estNul())
			throw new UnsupportedOperationException("Pas de prédécesseur.");
		return this.creerNatAvecValeur(this.val() - 1);
	}
	
	public int chiffre(int i) {
		return (i == 0) ? this.val()%10 : (this.creerNatAvecValeur(this.val()/10)).chiffre(i-1);
	}
	
	public int taille() {
		return (this.val() < 10) ? 1 : 1 + (this.creerNatAvecValeur(this.val() / 10)).taille();
	}

}
