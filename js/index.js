var orinoco = {
  components : {},
  dataManager : new DataManager("http://localhost:3000/api/teddies"),
  page : null
};

function initPage(page){
  orinoco.panier = new Panier(document.querySelector("header"));
  switch(page){
    case "home" : 
      new Home();
      break;
  	case "produit" :
  	  new pageProduit();
  	  break;
  	case "panier" :
  	  new PagePanier();
  	  break;
  }
}