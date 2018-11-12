package session2.td.heritageMultiple;

import session1.td.Nat;

public class ZeroParInt extends EtatZero implements AlgebreNatParInt {

	public ZeroParInt() { }
	
	public Nat creerZero() {
		return this;
	}
	
	public Nat creerSuccesseur(Nat predecesseur) {
		throw new UnsupportedOperationException("Pas de prédécesseur.");
	}
	
	public String toString() {
		return String.valueOf(super.val());
	}
	
	public boolean equals(Object obj) {
		if (!(obj instanceof Nat))
			return false;
		Nat x = (Nat) obj;
		return this.val() == x.val();
	}
	
	
}