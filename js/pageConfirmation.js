class PageConfirmation{
	constructor(commande){
        console.log(commande);
        this.commandeId = commande.orderId;
        this.prixTotal = localStorage.getItem("prixTotal");
        this.render();
        orinoco.panier.content = [];
        this.DOM = document.querySelector("panier");
        this.DOM.innerHTML =  orinoco.panier.content.length;
        sessionStorage.clear();
        localStorage.clear();
	}

	render(){
      document.querySelector("main").innerHTML = `
      <div class='box-message'>
      <p class='message'>Merci d'avoir commandé chez Orinoco !</p>
      <h2>Votre commande est la numéro :${this.commandeId}</h2>
      <h3>Le montant total de votre commande est : ${this.prixTotal} €</h3>
    </div>
      `;
    }
}
