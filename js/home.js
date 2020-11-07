class Home {
   /**
   * Récupère les données du serveur
   *
   * @param   {void}  aucun paramettre
   *
   * @constructor
   */
  constructor() {
    orinoco.dataManager.getData(this.showProducts.bind(this));
  }
   /**
   * envoie chaque produit(objet) au composant affichant les produits, ici Card()
   *
   * @param {objet} données du serveur
   * 
   * @return  {void} 
   */
  showProducts(products){
    console.log(products);
    var myproduct = document.getElementById("main"); 
    while (myproduct.firstChild) { 
        myproduct.removeChild(myproduct.firstChild); 
    } 
    const target = document.querySelector("main");
    for (let i = 0, size = products.length; i < size; i++) {
      new Card(products[i], target);
    }
  }
}