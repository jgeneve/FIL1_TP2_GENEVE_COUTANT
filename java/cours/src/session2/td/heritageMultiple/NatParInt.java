package session2.td.heritageMultiple;

import session1.td.Nat;

public class NatParInt extends IntPositif implements AlgebreNatParInt {

	public NatParInt(int val){
		super(val);
	}
	
	public Nat creerNatAvecValeur(int val) {
		if (val == 0) {
			return this.creerZero();
		} else {
			return new NatParInt(val);
		}
	}
	
	public String toString() {
		return Integer.toString(this.val());
	}
	
	public boolean equals(Object obj) {
		if(!(obj instanceof Nat))
			return false;
		Nat x = (Nat)obj;
		return this.val() == x.val();
	}
}