package session2.td.heritageMultiple;

import session1.td.Nat;

public abstract class IntPositif implements Nat {
	
	private int val;

	public IntPositif(int val){
		if(val < 0)
			throw new IllegalArgumentException("Pas de Nat à patir d'un int négatif.");
		this.val = val;
	}	
	
	public Nat creerZero() {
		return this.creerZero();
	}
	
	public Nat creerSuccesseur(Nat predecesseur) {
		return this.creerNatAvecValeur(predecesseur.val() + 1);
	}
	
	public Nat creerNatAvecRepresentation(String repDecimal) {
		return this.creerNatAvecValeur(Integer.parseInt(repDecimal));
	}
	
	public int val() {
		return this.val;
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