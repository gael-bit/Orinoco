var request = new XMLHttpRequest();

request.onreadystatechange = function() {
	var produit = localStorage.getItem('produit');
	var name = localStorage.getItem('name_panier');
	var price = localStorage.getItem('price_panier');

	if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {

		if(produit != 'True'){
			const main = document.querySelector('main');

			const bloc = document.createElement('div');
			bloc.classList.add('box-message');
			const texte_message = document.createElement('p');
			texte_message.classList.add('message');
			texte_message.innerText = "Vous n'avez encore rien ajouté à votre panier !";

			bloc.append(texte_message);
			main.append(bloc);
		}
		else{
			const main = document.querySelector('main');

			const article_produit = document.createElement('article');
			article_produit.classList.add('champ_produit');

			const contener_image = document.createElement('div');
			contener_image.classList.add('image_produit');

			const image = document.createElement('img');
			image.setAttribute("src", localStorage.getItem('image_panier'));
			image.setAttribute("alt", "ours en pelluche couleur chocolat");
			image.setAttribute("height", "180");

			const info_produit = document.createElement('div');

			const nom_produit = document.createElement('h2');
			nom_produit.innerText = name/*response[3].name*/;

			const prix = document.createElement('p');
			prix.innerText = 'prix : ' + price/*response[3].price*/;


			const retirer_produit = document.createElement('p');
			retirer_produit.classList.add('button-supprimer');
			retirer_produit.innerText = 'Supprimer produit';
			
			const formulaire = document.createElement('form');
			formulaire.setAttribute("method", "post");

			const bloc = document.createElement('div');
			bloc.classList.add("form-group");

			const label = document.createElement('label');
			label.setAttribute("for", "prenom");
			label.innerText = 'Prenom';
			const input = document.createElement('input');
			input.setAttribute("name", "prenom");
			input.setAttribute("id", "prenom");
			input.setAttribute("type", "text");

			const bloc1 = document.createElement('div');
			bloc1.classList.add("form-group");

			const label1 = document.createElement('label');
			label1.setAttribute("for", "nom");
			label1.innerText = 'Nom';
			const input1 = document.createElement('input');
			input1.setAttribute("name", "nom");
			input1.setAttribute("id", "nom");
			input1.setAttribute("type", "text");

			const bloc2 = document.createElement('div');
			bloc2.classList.add("form-group");

			const label2 = document.createElement('label');
			label2.setAttribute("for", "adresse");
			label2.innerText = 'Adresse ';
			const input2 = document.createElement('input');
			input2.setAttribute("name", "adresse");
			input2.setAttribute("id", "adresse");
			input2.setAttribute("type", "text");

			const bloc3 = document.createElement('div');
			bloc3.classList.add("form-group");

			const label3 = document.createElement('label');
			label3.setAttribute("for", "ville");
			label3.innerText = 'Ville ';
			const input3 = document.createElement('input');
			input3.setAttribute("name", "ville");
			input3.setAttribute("id", "ville");
			input3.setAttribute("type", "text");

			const bloc4 = document.createElement('div');
			bloc4.classList.add("form-group");

			const label4 = document.createElement('label');
			label4.setAttribute("for", "adresse mail");
			label4.innerText = 'Adresse mail ';
			const input4 = document.createElement('input');
			input4.setAttribute("name", "adresse mail");
			input4.setAttribute("id", "adresse mail");
			input4.setAttribute("type", "email");

			const passe_commande = document.createElement('button');
			passe_commande.classList.add('button-commande');
			passe_commande.innerText = 'Passer commande';
			passe_commande.setAttribute('type', 'submit');

			bloc.append(label);
			bloc.append(input);
			bloc1.append(label1);
			bloc1.append(input1);
			bloc2.append(label2);
			bloc2.append(input2);
			bloc3.append(label3);
			bloc3.append(input3);
			bloc4.append(label4);
			bloc4.append(input4);
			formulaire.append(bloc);
			formulaire.append(bloc1);
			formulaire.append(bloc2);
			formulaire.append(bloc3);
			formulaire.append(bloc4);
			formulaire.append(passe_commande);
			contener_image.append(image);
			info_produit.append(nom_produit);
			info_produit.append(prix);
			article_produit.append(contener_image);
			article_produit.append(info_produit);
			article_produit.append(retirer_produit);
			main.append(article_produit);
			main.append(formulaire);

			/*for (var i = 0; i < localStorage.length; i++) {
			   console.log(localStorage.getItem(localStorage.key(i)));
			}*/
		}
	


	}
};





request.open("GET", "http://localhost:3000/api/teddies");
request.send();