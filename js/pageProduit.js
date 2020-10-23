class pageProduit{ //comment la classe produit est capable de lire la fonction die() ?
  /**
   * [constructor description]
   *
   * @param   {string}  keep  id du produit à afficher
   *
   * @constructor
   */
  constructor(keep){
    if (keep === undefined) {

      this.main = document.querySelector("main");
      this.article = document.createElement("card");
      this.main.appendChild(this.article);

      this.id = localStorage.getItem('id');
      this.produit = JSON.parse(localStorage.getItem('produit')); // creation de du produit
      this.render();

    }

    else {
      orinoco.dataManager.setLocalStorage("currentProduct", keep);
      orinoco.dataManager.setLocalStorage('panier',[])
      for (const [key, value] of Object.entries(orinoco.components)){
        if (key !== keep){
         orinoco.components[key].die();
        }
      }
    }   
  }

  /**
   * au clic sur le boutton "Ajouter au panier" on ajoute le produit dans le panier
   *
   * @return  {void}  appel la page panier
   */
  click(){
    alert("ùmldùflsdlfsdlf");
    new PagePanier(this.id, this.produit);
  }

  // on affiche le contenu du produit
  render(){
     this.article.innerHTML = 
     `<div class="image_produit"><img src='${this.produit.image}' height ="215"/></div>
     <div><h2>${this.produit.name}</h2>
      <price>${this.produit.price}</price>
      <form method="post">
        <p>
          <label for="couleur"></label>
          <select name = "couleur" id = "couleur">
            <option value = "${JSON.parse(this.produit.colors)[0]}">${JSON.parse(this.produit.colors)[0]}</option>
            <option value = "${JSON.parse(this.produit.colors)[1]}">${JSON.parse(this.produit.colors)[1]}</option>
            <option value = "${JSON.parse(this.produit.colors)[2]}">${JSON.parse(this.produit.colors)[2]}</option>
          </select>
        </p>
      </form> 
      <button class="button-panier" onclick="${this.click}">Ajouter au panier</button> </div>`   
    ;
  }
}