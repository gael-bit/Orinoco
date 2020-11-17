var orinoco = {
  components: {},
  dataManager: new DataManager("http://localhost:3000/api/teddies"),
  page: null,
  formulaire: null
};
/**
  * affiche la page d'accueil avec tous les produits
  *
  * @param {void} 
  * 
  * @return  {void} 
  */
function initPage() {
  if (orinoco.panier === undefined) orinoco.panier = new Panier(document.querySelector("nav"));
  new Home();
}
/**
  * affiche la page sur lequel l'utilisateur à cliquer
  *
  * @param {string, string} prenimer "STRING" correspond au nom de la page et deuxième "STRING" correspond au nom du produit si l'utilisateur clique sur la page produit
  * 
  * @return  {void} 
  */
function changePage(newPage, argument = null) {
  switch (newPage) {
    case "home":
      window.history.pushState("accueil", "Bienvenue | orinoco", "index.html");
      new Home();
      break;
    case "produit":
      var nameProduct = localStorage.getItem("name");
      window.history.pushState("accueil", "Bienvenue | orinoco", "produit" + nameProduct + ".html");
      if (argument == null) {
        console.log("hello!!");
        new pageProduit();
      }
      break;
    case "panier":
      window.history.pushState("accueil", "Bienvenue | orinoco", "panier.html");
      break;
    case "confirmation":
      window.history.pushState("Merci pouyr votre commande", "Merci pouyr votre commande", "confirmation.html");
      new PageConfirmation(argument);
      break;
    default:
      console.error("page non définie");
      break;
  }
}