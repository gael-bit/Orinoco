class PagePanier{
	constructor(identifiant, ours){
		if(identifiant === undefined && ours === undefined){
			this.main = document.querySelector("main");
			this.tabPanier = JSON.parse(localStorage.getItem('panier'));
			var price = 0;

			if(localStorage.getItem('panier') == null){// message indiquant que rien ne se trouve dans le panier
				this.renderWithoutArticle();
			}
			else{
				for(var i = 0; i < this.tabPanier.length; i++){// affiche les article contenu dans le tableau panier
					this.article = document.createElement("card");
		     		this.main.appendChild(this.article);
					this.render(i);
					price = price + this.tabPanier[i].price;
				}

				this.prixTotal(price);
				new Formulaire(this.main); // une fois que tout les articles sont affichés, on affiche le formulaire
			}

		}
		else{
			this.ours = ours;
			this.identifiant = identifiant;
			this.addPanier();
		}
		
	}

	// calcule le prix total de tout les articles present dans le panier
	prixTotal(price){
		var prix = document.createElement("p");
		prix.classList.add('prixTotal');
		prix.innerText = 'Prix Total : ' + price;
		this.main.appendChild(prix);
	}

	renderWithoutArticle(){
		this.main.innerHTML = `<div class='box-message'><p class='message'>Vous n'avez encore rien ajouté à votre panier !</p></div>`;
	}

	render(index){
		console.log(this.tabPanier);
	    this.article.innerHTML = 
	    `<div class="image_produit"><img src='${this.tabPanier[index].image}' height ="155"/></div>
	    <div><h2>${this.tabPanier[index].name}</h2>
	     <price>${this.tabPanier[index].price}</price>
	     <button class="button-supprimer" >Retirer article</button>
	     </div>   
	    `;//  onclick="${this.removePanier(this.tabPanier[index].id)}"
    }

    // ajoute un article dans le panier
  	addPanier(){                                
	  	this.tabPanier = JSON.parse(localStorage.getItem('panier'));
	  	for(var i = 0; i < this.tabPanier.length; i++){
	  		if(this.tabPanier[i].id == this.identifiant){
	  			return;
	  		}
	  	}
	  	this.tabPanier.push(this.ours);
	  	localStorage.setItem('panier', JSON.stringify(this.tabPanier));
	}

	// supprime un article dans le panier
  	removePanier(id){                           
  		for(var i = 0; i < this.tabPanier.length; i++){
  			if(id == this.tabPanier[i].id){
  				this.tabPanier.splice(i,1);
  			}
  		}
  		localStorage.setItem('panier', JSON.stringify(this.tabPanier));
  	}
}