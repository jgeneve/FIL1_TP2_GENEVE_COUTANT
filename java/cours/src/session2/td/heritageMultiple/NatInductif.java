package session2.td.heritageMultiple;

import session1.td.Nat;

public interface NatInductif extends Nat {
	
	default public Nat creerNatAvecValeur(int val) {
		if (val == 0) {
			return this.creerZero();
		} else {
			return this.creerSuccesseur(this.creerNatAvecValeur(val - 1));
		}
	}
	
	default public Nat creerNatAvecRepresentation(String val) {
		return this.creerNatAvecValeur(Integer.parseInt(val));
	}
}
