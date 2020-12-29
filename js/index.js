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
  definePage();
}
/**
  * affiche la page sur lequel l'utilisateur à cliquer
  *
  * @param {string, string} prenimer "STRING" correspond au nom de la page et deuxième "STRING" correspond au nom du produit si l'utilisateur clique sur la page produit
  * 
  * @return  {void} 
  */
function showPage(newPage, argument = null) {
  switch (newPage) {
    case "index":
      new Home();
      break;
    case "produit":
      new pageProduit();
      break;
    case "panier":
      
      break;
    case "confirmation":
      new PageConfirmation(argument);
      break;
    default:
      console.error("page non définie");
      break;
  }
}

function changePage(newPage, argument = null) {
  switch (newPage) {
    case "index":
      window.history.pushState("accueil", "Bienvenue | orinoco", "index.html");
      showPage("index");
      break;
    case "produit":
      var nameProduct = localStorage.getItem("name");
      window.history.pushState("accueil", "Bienvenue | orinoco", "produit" + nameProduct + ".html");
      if (argument == null) {
        console.log("hello!!");
        showPage("produit")
      }
      break;
    case "panier":
      window.history.pushState("accueil", "Bienvenue | orinoco", "panier.html");
      break;
    case "confirmation":
      window.history.pushState("Merci pour votre commande", "Merci pour votre commande", "confirmation.html");
      showPage(newPage, argument);
      break;
    default:
      console.error("page non définie");
      break;
    }
}

function definePage(){
  let slug = window.location.href.split("/");
  slug= slug.pop().slice(0, -5);
  if (slug.slice(0, 7) === "produit") slug = "produit";
  showPage(slug);

}

window.onpopstate= definePage;
initPage();
