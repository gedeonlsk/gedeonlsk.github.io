// Fonction pour ajouter un article à la facture
function addItem() {
    const article1 = document.getElementById('article1').value;
    const price1 = parseFloat(document.getElementById('price1').value);
    const quantity1 = parseInt(document.getElementById('quantity1').value);

    const article2 = document.getElementById('article2').value;
    const price2 = parseFloat(document.getElementById('price2').value);
    const quantity2 = parseInt(document.getElementById('quantity2').value);

    const article3 = document.getElementById('article3').value;
    const price3 = parseFloat(document.getElementById('price3').value);
    const quantity3 = parseInt(document.getElementById('quantity3').value);

    // Validation de l'entrée
    if (article1 && !isNaN(price1) && !isNaN(quantity1) && article2 && !isNaN(price2) && !isNaN(quantity2) && article3 && !isNaN(price3) && !isNaN(quantity3)) {
        // Ajout des articles à la facture
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${article1}</td>
            <td>${price1.toFixed(2)} €</td>
            <td>${quantity1}</td>
            <td>${(price1 * quantity1).toFixed(2)} €</td>
            <td><button class="delete-btn" onclick="deleteItem(this)">Supprimer</button></td>
        `;
        document.getElementById('invoice-items').appendChild(tableRow);

        // Répéter pour les autres articles
        const tableRow2 = document.createElement('tr');
        tableRow2.innerHTML = `
            <td>${article2}</td>
            <td>${price2.toFixed(2)} €</td>
            <td>${quantity2}</td>
            <td>${(price2 * quantity2).toFixed(2)} €</td>
            <td><button class="delete-btn" onclick="deleteItem(this)">Supprimer</button></td>
        `;
        document.getElementById('invoice-items').appendChild(tableRow2);

        const tableRow3 = document.createElement('tr');
        tableRow3.innerHTML = `
            <td>${article3}</td>
            <td>${price3.toFixed(2)} €</td>
            <td>${quantity3}</td>
            <td>${(price3 * quantity3).toFixed(2)} €</td>
            <td><button class="delete-btn" onclick="deleteItem(this)">Supprimer</button></td>
        `;
        document.getElementById('invoice-items').appendChild(tableRow3);

        // Mise à jour du total
        updateTotal();

        // Réinitialiser les champs
        resetForm();
    } else {
        alert('Veuillez remplir tous les champs correctement.');
    }
}

// Fonction pour supprimer un article
function deleteItem(button) {
    const row = button.parentElement.parentElement;
    row.remove();
    updateTotal();
}

// Fonction pour mettre à jour le total
function updateTotal() {
    let total = 0;
    const rows = document.querySelectorAll('#invoice-items tr');
    rows.forEach(row => {
        const totalCell = row.cells[3].textContent;
        total += parseFloat(totalCell.replace(' €', ''));
    });
    document.getElementById('total-price').textContent = total.toFixed(2);
}

// Fonction pour réinitialiser la facture
function resetForm() {
    document.getElementById('article1').value = '';
    document.getElementById('price1').value = '';
    document.getElementById('quantity1').value = '';
    document.getElementById('article2').value = '';
    document.getElementById('price2').value = '';
    document.getElementById('quantity2').value = '';
    document.getElementById('article3').value = '';
    document.getElementById('price3').value = '';
    document.getElementById('quantity3').value = '';
}
