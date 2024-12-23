function openTab(event, tabId) {
    // Masquer tous les contenus des onglets
    const tabContents = document.querySelectorAll('.image-group1');
    tabContents.forEach(content => content.style.display = 'none');

    // Supprimer la classe "active" de tous les boutons
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('active'));

    // Afficher le contenu correspondant à l'onglet cliqué
    document.getElementById(tabId).style.display = 'block';

    // Ajouter la classe "active" au bouton cliqué
    event.currentTarget.classList.add('active');
}
