package session2.td.heritageMultiple;

import session1.td.Nat;

public interface AlgebreNatRecursif extends AlgebreNatRecursifSuccesseur, AlgebreNatRecursifZero {

	default public Nat somme(Nat val) {
		if(this.estNul()) { 
			return val;
		}
		return this.creerSuccesseur(this.predecesseur().somme(val));
	}
	
	default public Nat zero() {
		return this.creerZero();
	}
	
	default public Nat produit(Nat val) {
		if(this.estNul()) { 
			return this.creerZero();
		}
		return val.somme(this.predecesseur().produit(val));
	}
	
	default Nat un() {
		return this.creerNatAvecValeur(1);
	}
	
	default public Nat modulo(Nat val) {
		if(this.estNul()) { 
			return this.creerZero();
		}
		Nat r = this.predecesseur().modulo(val);
		return this.creerSuccesseur(r).equals(val) ? this.creerZero() : this.creerSuccesseur(r);
	}
	
	default public Nat div(Nat val) {
		if(this.estNul()) { 
			return this.creerZero();
		}
		Nat r = this.predecesseur().modulo(val);
		Nat q = this.predecesseur().div(val);
		return this.creerSuccesseur(r).equals(val) ? this.creerSuccesseur(q) : q;
	}
	
	default public boolean estEgal(Object o) {
		if(!(o instanceof Nat))
			return false;
		Nat x = (Nat)o;
		if(x.estNul())
			return false;
		return this.predecesseur().equals(x.predecesseur());
	} 	
}
