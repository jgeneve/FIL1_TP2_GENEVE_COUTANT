package session2.td.heritageMultiple;

import session1.td.Nat;

public class SuccRecursif extends EtatSucc implements AlgebreNatRecursif {

	public SuccRecursif(Nat val) {
		super(val);
	}
	
	public Nat creerZero() {
		return new ZeroParInt();
	}
	
	public Nat creerSuccesseur(Nat predecesseur) {
		return new SuccRecursif(predecesseur);
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
