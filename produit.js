var request = new XMLHttpRequest();

request.onreadystatechange = function() {
	var response;
	var name = localStorage.getItem('name_produit');
	var price = localStorage.getItem('price_produit');
	var couleur = JSON.parse(localStorage.getItem('couleur_produit'));

	if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
			response = JSON.parse(this.response);



			const main = document.querySelector('main');

			const fiche = document.createElement('article');

			const lien = document.createElement('a');
			lien.classList.add('champ_produit');

			const contener_image = document.createElement('div');
			contener_image.classList.add('image_produit');

			const image = document.createElement('img');
			image.setAttribute("src", localStorage.getItem('image_produit'));
			image.setAttribute("alt", "ours en pelluche couleur chocolat");
			image.setAttribute("height", "400");

			const info_produit = document.createElement('div');

			const nom_produit = document.createElement('h2');
			nom_produit.innerText = name/*response[3].name*/;

			const prix = document.createElement('p');
			prix.innerText = 'prix : ' + price/*response[3].price*/;

			const formulaire = document.createElement('form');
			formulaire.setAttribute("method", "post");
			const bloc = document.createElement('p');
			const label = document.createElement('label');
			label.setAttribute("for", "couleur");
			const select = document.createElement('select');
			select.setAttribute("name", "couleur");
			select.setAttribute("id", "couleur");
			bloc.append(label);
			bloc.append(select);
			for(var i in couleur){
				const option = document.createElement('option');
				option.setAttribute("value", couleur[i]);
				option.innerText = couleur[i];
				select.append(option);
				console.log(i);
			}
			

			const description_produit = document.createElement('p');
			description_produit.innerText = 'description : ' + response[3].description;

			const ajouter_pannier = document.createElement('p');
			ajouter_pannier.setAttribute("id", "panier");
			ajouter_pannier.classList.add('button-panier');
			ajouter_pannier.innerText = 'Ajouter au panier';

			
			contener_image.append(image);


			formulaire.append(bloc);
			info_produit.append(nom_produit);
			info_produit.append(prix);
			info_produit.append(formulaire);
			info_produit.append(description_produit);
			info_produit.append(ajouter_pannier);
			lien.append(contener_image);
			lien.append(info_produit);
			fiche.append(lien);
			main.append(fiche);


			const elt = document.getElementById('panier');
			elt.addEventListener('click', function(){ 
				localStorage.setItem('produit', 'True');
				localStorage.setItem('name_panier', name);
				localStorage.setItem('price_panier', price);
				localStorage.setItem('image_panier', localStorage.getItem('image_produit'));

			});
	}
};

request.open("GET", "http://localhost:3000/api/teddies");
request.send();