var request = new XMLHttpRequest();

request.onreadystatechange = function() {
	var response;
	
	if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
		console.log(request);
		response = JSON.parse(this.response);
		console.log(response);

		const main = document.querySelector('main');

		for(var i in response){
			var lier = "lien" + i;
			const fiche = document.createElement('article');
			const lien = document.createElement('a');
			lien.classList.add('champ_produit');
			
			lien.setAttribute("id",lier);
			

			lien.setAttribute("href", "produit.html");
			const contener_image = document.createElement('div');
			contener_image.classList.add('image_produit');
			const image = document.createElement('img');
			image.setAttribute("src", response[i].imageUrl);
			image.setAttribute("alt", "ours en pelluche couleur chocolat");
			image.setAttribute("height", "230");
			const info_produit = document.createElement('div');
			const nom_produit = document.createElement('h2');
			nom_produit.innerText = response[i].name;
			const prix = document.createElement('p');
			prix.innerText = 'prix : ' + response[i].price;
			const description_produit = document.createElement('p');
			description_produit.innerText = 'description : ' + response[i].description;

			contener_image.append(image);
			info_produit.append(nom_produit);
			info_produit.append(prix);
			info_produit.append(description_produit);
			lien.append(contener_image);
			lien.append(info_produit);
			fiche.append(lien);
			main.append(fiche);
		}
		
		
		/*localStorage.setItem('name', response[0].name);*/
		const elt = document.getElementById('lien0');  
		elt.addEventListener('click', function() {    
			localStorage.setItem('name_produit', response[0].name);
			localStorage.setItem('price_produit', response[0].price);
			localStorage.setItem('image_produit', response[0].imageUrl);
			localStorage.setItem('couleur_produit', JSON.stringify(response[0].colors));
		});

		const elt2 = document.getElementById('lien1');
		elt2.addEventListener('click', function() {    
			localStorage.setItem('name_produit', response[1].name);
			localStorage.setItem('price_produit', response[1].price);
			localStorage.setItem('image_produit', response[1].imageUrl);
			localStorage.setItem('couleur_produit', JSON.stringify(response[1].colors));
		});

		const elt3 = document.getElementById('lien2');
		elt3.addEventListener('click', function() {    
			localStorage.setItem('name_produit', response[2].name);
			localStorage.setItem('price_produit', response[2].price);
			localStorage.setItem('image_produit', response[2].imageUrl);
			localStorage.setItem('couleur_produit', JSON.stringify(response[2].colors));
		});

		const elt4 = document.getElementById('lien3');
		elt4.addEventListener('click', function() {    
			localStorage.setItem('name_produit', response[3].name);
			localStorage.setItem('price_produit', response[3].price);
			localStorage.setItem('image_produit', response[3].imageUrl);
			localStorage.setItem('couleur_produit', JSON.stringify(response[3].colors));
		});
		const elt5 = document.getElementById('lien4');
		elt5.addEventListener('click', function() {    
			localStorage.setItem('name_produit', response[4].name);
			localStorage.setItem('price_produit', response[4].price);
			localStorage.setItem('image_produit', response[4].imageUrl);
			localStorage.setItem('couleur_produit', JSON.stringify(response[4].colors));
		});
	}



};

request.open("GET", "http://localhost:3000/api/teddies");
request.send();

/*class produit{
	constructor(name, id, price, color, description){
		this.name = name;
		this.id = id;
		this.price = price;
		this.color = color;
		this.description = description;
	}
}*/

/*for(let product of request){

}*/
