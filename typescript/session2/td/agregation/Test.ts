import { FabriqueNat } from "../../../session1/td/naturels";
import { Nat } from "./Nat";
import { NatCalculantAvecDesNombresDecimaux } from "./NatCalculantAvecDesNombresDecimaux";
import { IntPositif } from "./IntPositif";

function test(fab : FabriqueNat<Nat>) : void {
    console.log("==============================")
    let zero = fab.creerNatAvecValeur(0);
    console.log("0 ? " + zero.representation())
    console.log("true ? " + zero.estEgal(zero.zero()))

    const un = fab.creerSuccesseur(zero);
    console.log("1 ? " + un.representation());
    
    zero = un.predecesseur();
    console.log("0 ? " + zero.representation());
    console.log("true ? " + un.estEgal(un.un()));

    let cinq = fab.creerNatAvecValeur(5);
    console.log("5 ? " + cinq.representation());

    let six = fab.creerNatAvecValeur(6);
    console.log("11 ? " + cinq.somme(six).representation());
    console.log("30 ? " + cinq.produit(six).representation());
    console.log("3 ? " + cinq.produit(six).somme(six.div(un.somme(un))).modulo(six).representation());
    console.log("5 ? " + cinq.produit(six).somme(six.div(un.somme(un))).div(six).representation());
}

test(new NatCalculantAvecDesNombresDecimaux(new IntPositif(0)))