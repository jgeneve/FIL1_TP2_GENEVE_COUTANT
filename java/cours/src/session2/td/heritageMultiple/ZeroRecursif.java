package session2.td.heritageMultiple;

import session1.td.Nat;

public class ZeroRecursif extends EtatZero implements AlgebreNatRecursif {

	public ZeroRecursif() { }
	
	public Nat creerZero() {
		return new ZeroParInt();
	}
	
	public Nat creerSuccesseur(Nat predecesseur) {
		return this.creerNatAvecValeur(predecesseur.val() + 1);
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
