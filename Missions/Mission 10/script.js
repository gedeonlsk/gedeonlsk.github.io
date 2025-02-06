function calculer() {
    let sousTotal = 0;
    const lignes = document.querySelectorAll("#table_inv tbody tr:not(#lastLigne)");

    lignes.forEach(ligne => {
        const qte = parseInt(ligne.querySelector(".qte").value) || 0;
        const prix = parseFloat(ligne.querySelector(".prix").value) || 0;
        const total = qte * prix;
        ligne.querySelector(".total").value = total.toFixed(2);
        sousTotal += total;
    });

    const remise = parseFloat(document.getElementById("remise").value) || 0;
    const taxe = parseFloat(document.getElementById("taxe").value) || 0;
    const expedition = parseFloat(document.getElementById("expedition").value) || 0;

    const sousTotalRemise = sousTotal - (sousTotal * remise / 100);
    const taxeTotale = sousTotalRemise * taxe / 100;
    const solde = sousTotalRemise + taxeTotale + expedition;

    document.getElementById("sousTotal").textContent = sousTotal.toFixed(2);
    document.getElementById("sousTotalRemise").textContent = sousTotalRemise.toFixed(2);
    document.getElementById("taxeTotale").textContent = taxeTotale.toFixed(2);
    document.getElementById("solde").textContent = solde.toFixed(2);
}