let totalPrice = 0;

function addItem() {
    // Récupérer les valeurs des champs
    const article = document.getElementById('article').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    // Vérifier que les données sont valides
    if (!article || isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) {
        alert("Veuillez remplir tous les champs correctement.");
        return;
    }

    // Calculer le total de la ligne
    const totalItem = price * quantity;

    // Ajouter une nouvelle ligne dans le tableau
    const tbody = document.getElementById('invoice-items');
    const row = document.createElement('tr');
    row.classList.add('table-row');
    
    row.innerHTML = `
        <td>${article}</td>
        <td>${price.toFixed(2)} €</td>
        <td>${quantity}</td>
        <td>${totalItem.toFixed(2)} €</td>
    `;

    tbody.appendChild(row);

    // Mise à jour du total général
    totalPrice += totalItem;
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);

    // Réinitialiser les champs
    document.getElementById('article').value = '';
    document.getElementById('price').value = '';
    document.getElementById('quantity').value = '';
}
