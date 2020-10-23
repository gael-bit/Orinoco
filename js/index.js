var orinoco = {
  components : {},
  dataManager : new DataManager("http://localhost:3000/api/teddies"),
  page : null
};

function initPage(page){
  if (orinoco.panier === undefined) orinoco.panier = new Panier(document.querySelector("nav"));
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