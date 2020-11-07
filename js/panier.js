class Panier{
   /**
   * Construit un panier
   *
   * @param   {element}  element bar <nav>
   *
   * @constructor
   */
  constructor(DomTarget){
    // localStorage.clear();
     this.DOM = document.createElement("panier");
     this.DOM.className = "panier";
     this.domTarget = DomTarget;
     this.domTarget.appendChild(this.DOM);
     this.detailed = false;
     this.content = [];
     this.render();
     this.DOM.onclick= this.changeView.bind(this);

  }
  /**
   * appel la fonction d'affichage du panier et indique le nombre de produit dans le panier
   *
   * @param   {void}  aucun paramettre
   *
   * @return  {void} 
   */
  render(){
    this.DOM.innerHTML = this.resumeTemplate;
    if (this.detailed) this.detailedTemplate();
  }
   /**
   * affiche tous les produits dans le fanier
   *
   * @param   {void}  aucun paramettre
   *
   * @return  {void} 
   */
  detailedTemplate(){
    this.modal = document.createElement("modal");
    this.DOM.appendChild(this.modal);
    this.modalContent = document.createElement("modalContent");
    this.modal.appendChild(this.modalContent);
    let content = "";

    for(let i=0, size=this.content.length; i < size; i++){
      content += `
      <article>
        <div class="image_produit">
          <img src="${this.content[i].image}" height="155" />
        </div>
        <div>
          <h2>${this.content[i].name}</h2>
          <price>${this.content[i].price}</price>
          <button class="button-supprimer" onclick="orinoco.panier.remove(${i})">
            Supprimer
          </button>
        </div>
      </article>`
    }
    this.modalContent.innerHTML = content;
    orinoco.formulaire = new Formulaire(this.modalContent);
  }
   /**
   * donne le nombre de produits présent dans le tableau
   *
   * @param   {void}  aucun paramettre
   *
   * @return  {integer} nombre de produit dans le panier(taille du tableau)
   */
  get resumeTemplate(){
    return this.content.length;
  }

  /**
   * ajoute un produit dans le panier
   *
   * @param   {void}  aucun paramettre
   *
   * @return  {void} 
   */
  add(product){
    this.content.push(product);
    this.render();
  }
  /**
   * supprime le produit sélectionné dans le panier
   *
   * @param {void} aucun paramettre
   * 
   * @return  {void}  
   */
  remove(id){              
    console.log("---",id)             
    this.modalContent.parentNode.removeChild(this.modalContent);
    this.content.splice(id,1);
    this.DOM.innerHTML = this.resumeTemplate;
  }
  /**
   * affiche le panier
   *
   * @param {void} aucun paramettre
   * 
   * @return  {void}  
   */
  changeView(){
    if (this.content.length === 0) return;// lorsqu'on clique sur le côté on repasse vers cette fonction. ça t'aidera à trouver 
    changePage("panier");                //  comment maintenir le modal pour qu'il ne disparaisse pas
    this.detailed = !this.detailed;
    this.render();
  }
}