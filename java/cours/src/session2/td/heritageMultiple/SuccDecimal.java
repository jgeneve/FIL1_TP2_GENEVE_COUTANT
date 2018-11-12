package session2.td.heritageMultiple;

import session1.td.Nat;

public class SuccDecimal extends EtatSucc implements AlgebreNatDecimal {

	public SuccDecimal(Nat val) {
		super(val);
	}
	
	public Nat creerZero() {
		return this.creerZero();
	}
	
	public Nat creerSuccesseur(Nat predecesseur) {
		return new SuccDecimal(predecesseur);
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
