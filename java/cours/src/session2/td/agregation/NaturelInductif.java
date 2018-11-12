package session2.td.agregation;

public interface NaturelInductif extends EtatNaturelPur {
	
	default public EtatNaturelPur creerZero() {
		return new ZeroInductif();
	}
	
	default public EtatNaturelPur creerSuccesseur(EtatNaturelPur val) {
		return this.creerNatAvecValeur(val.val() - 1);
	}
	
	default public EtatNaturelPur creerNatAvecValeur(int val) {
		if (val < 0) {
			throw new UnsupportedOperationException();
		}else if (val == 0) {
			return new ZeroInductif();
		} else {
			return new IntPositif(val);		
		}
	}	
}
