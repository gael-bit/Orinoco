class LocalStorage{
	constructor(keep){
		this.article = { // creation d'unu objet (produit) dans le localStorage
			name : orinoco.components[keep].name,
			price : orinoco.components[keep].price,
			colors : JSON.stringify(orinoco.components[keep].colors),
			description : orinoco.components[keep].description,
			image : orinoco.components[keep].imageUrl,
			id : keep
				
		};

		if(localStorage.getItem('produit') === null){ // initialisation du tableau panier
			console.log('NULL !');
			var tab = [];
			localStorage.setItem('panier', JSON.stringify(tab));
		}
		
		localStorage.setItem('produit', JSON.stringify(this.article));
		localStorage.setItem("id", keep);
		
		
	}

	/*getStorageElement(property){
		if(property === 'couleur'){
			return JSON.parse(localStorage.getItem(property));
		}
		else{
			return localStorage.getItem(property);
		}	
	}

	clearStorage(){
		localStorage.clear();
	}*/
}