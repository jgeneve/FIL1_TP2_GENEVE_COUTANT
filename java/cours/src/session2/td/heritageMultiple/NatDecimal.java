package session2.td.heritageMultiple;

import session1.td.Nat;

public class NatDecimal extends NombreDecimal implements AlgebreNatDecimal {
		
	public NatDecimal(String rep) {
		super(rep);
	}
	
	public Nat creerNatAvecRepresentation(String repDecimal) {
		StringBuilder repMutable = new StringBuilder(repDecimal);
		repDecimal = new String(repMutable);
		if(repDecimal.equals("")){
			repDecimal = "0";
		}
		char min = Character.forDigit(0, 10);
		char max = Character.forDigit(9, 10);
		for(int i = 0; i < repDecimal.length(); i++){
			char c = repDecimal.charAt(i);
			if(c < min)	throw new IllegalArgumentException();
			if(c > max) throw new IllegalArgumentException();
		}
		return new NatDecimal(repDecimal);
	}
	
	public boolean equals(Object obj) {
		if(!(obj instanceof Nat))
			return false;
		Nat x = (Nat)obj;
		return this.val() == x.val();
	}

    public String toString() {
    	return String.valueOf(super.val());
    }
}
