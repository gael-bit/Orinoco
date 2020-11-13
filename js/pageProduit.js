class pageProduit{ 
  /**
   * affiche le produit sélectionné sur sa page corespondante
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

      for (const [key, value] of Object.entries(orinoco.components)){
        orinoco.components[key].die();
      }

      const produit = JSON.parse(localStorage.getItem("produit"));
      for (const [key, value] of Object.entries(produit)) {
        this[key] = value;
      }

      orinoco.components[this._id.trim()] = this;
      this.render();
    }

    else {
      orinoco.dataManager.setLocalStorage("currentProduct", keep);
      orinoco.dataManager.setLocalStorage('produit',JSON.stringify(orinoco.components[keep]));
      for (const [key, value] of Object.entries(orinoco.components)){
        if (key !== keep){
         orinoco.components[key].die();
        }
      }
    }   
  }
  /**
   * convertie le prix en euro
   *
   * @param {void} aucun paramettre
   * 
   * @return  {integer} prix réel en euro
   */
  showPrice(){
    return this.price/100;
  }

  /**
   * affiche les infomations du produit(Nom, Prix, Couleurs) et un bouton permettant d'ajouter au panier
   *
   * @param {void} aucun paramettre
   * 
   * @return  {void}  
   */
  render(){
     this.article.innerHTML = 
     `<div class="image_produit"><img src='${this.imageUrl}' height ="215"/></div>
     <div><h2>${this.name}</h2>
      <price>${this.showPrice()} €</price>
      <form method="post">
        <p>
          <label for="couleur"></label>
          <select name = "couleur" id = "couleur">
            <option value = "${this.colors[0]}">${this.colors[0]}</option>
            <option value = "${this.colors[1]}">${this.colors[1]}</option>
            <option value = "${this.colors[2]}">${this.colors[2]}</option>
          </select>
        </p>
      </form> 
      <button class="button-panier" onclick="orinoco.components['${this._id}'].addToCart()">Ajouter au panier</button> </div>`  
    ;
    
  }
  /**
   * ajoute le produit au panier
   *
   * @param {void} aucun paramettre
   * 
   * @return  {void}  
   */
  addToCart(){
    orinoco.panier.add({
      "id"   : this._id,
      "image": this.imageUrl,
      "name" : this.name,
      "price": this.price,
    });
  }
  /**
   * supprime tous les produits present sur la page avant de changer de page
   *
   * @param {void} aucun paramettre
   * 
   * @return  {void}  
   */
  die(){
    this.article.parentNode.removeChild(this.article); // on supprime l'element du parent mais le parent c'est lui même, nan?
    delete(orinoco.components[this._id.trim()]);
  }
}