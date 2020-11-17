class PageConfirmation{
	constructor(commande){
    this.commandeId = commande.orderId;
    this.render();
    orinoco.panier.content = [];
    sessionStorage.clear();
    localStorage.clear();
	}

	render(){
      document.querySelector("main").innerHTML = `
      <div class='box-message'>
      <p class='message'>Merci d'avoir commandé chez Orinoco !</p>
      <h2>Votre commande est la numéro :${this.commandeId}</h2>
    </div>
      `;
    }
}