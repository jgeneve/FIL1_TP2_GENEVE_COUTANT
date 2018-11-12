package session2.td.heritageMultiple;

import session1.td.Nat;

public interface NatInductif extends Nat {
	
	default public Nat creerNatAvecValeur(int val) {
		return new NatParInt(val);
	}
	
	default public Nat creerNatAvecRepresentation(String val) {
		return new NatDecimal(val);
	}
}
