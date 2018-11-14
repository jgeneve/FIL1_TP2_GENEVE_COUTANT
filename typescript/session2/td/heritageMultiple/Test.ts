import {
    FabriqueNat, Nat
} from "../../../session1/td/naturels"
import { NatParInt } from "./NatParInt";
import { SuccParInt } from "./SuccParInt";
import { NatParIntRecursif } from "./NatParIntRecursif";
import { SuccRecursif } from "./SuccRecursif";
import { NatDecimal } from "./NatDecimal";
import { NatDecimalParInt } from "./NatDecimalParInt";
import { NatDecimalRecursif } from "./NatDecimalRecursif";
import { NatParIntDecimal } from "./NatParIntDecimal";
import { SuccDecimal } from "./SuccDecimal";

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

let fab = new NatParInt(1);
test(NatParInt.FAB);
test(NatParIntRecursif.FAB);
test(NatParIntDecimal.FAB);

test(SuccParInt.FAB);
test(SuccRecursif.FAB);
test(SuccDecimal.FAB);

test(NatDecimalParInt.FAB);
test(NatDecimalRecursif.FAB);
test(NatDecimal.FAB);