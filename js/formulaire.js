class Formulaire{
	/**
   * construit le formulaire à remplir par l'utilisateur
   *
   * @param {void} aucun paramettre
   * 
   * @return  {void} 
   */
	constructor(target){
		this.formulaire = document.createElement('form');
		target.append(this.formulaire);
		this.render();
	}
	/**
   * affiche le formulaire à remplir par l'utilisateur
   *
   * @param {void} aucun paramettre
   * 
   * @return  {void} 
   */
	render(){ 
		this.formulaire.innerHTML = `
		<div class="form-group">
			<label for="prenom">Prenom</label>
			<input name="prenom" id="prenom" type="text" autofocus="true" required="true" placeholder = "EX : maxime" pattern = "[A-Za-zëçéèà]{3,10}">
		</div>
		<div class="form-group">
			<label for="nom">Nom</label>
			<input name="nom" id="nom" type="text" required="true" placeholder = "EX : Bon" pattern = "[A-Za-zëçéàè-]{3,15}">
		</div>
		<div class="form-group">
			<label for="adresse">Adresse </label>
			<input name="adresse" id="adresse" type="text" placeholder = "EX : 5 allée du muguet" required="true" pattern = "[0-9][ ]([Rr]ue|[Bb]oulevard|[Aa]ll[ée]e|[Aa]venue|[Cc]arrefour)[ ][A-Za-zëçéèà -]+" >
		</div>
		<div class="form-group">
			<label for="ville">Ville </label>
			<input name="ville" id="ville" type="text" required="true"placeholder = "EX : Paris" pattern = "[A-Za-zëçéàè]{3,15}">
		</div>
		<div class="form-group">
			<label for="adresse mail">Adresse mail </label>
			<input name="adresse mail" id="mail" type="email" placeholder = "EX : maxime.bon@gmail.com" required="true" formcontrolname="email" pattern="[A-Za-zëçéèà.]{3,20}[@][A-Za-zëçéèà]{3,20}.[.]com">
		</div>
		<input onclick = " orinoco.formulaire.takeData()" class="button-commande" value="Passer commande"  type="submit" >`;
	}
	/**
   * verifie que les données rentrées par l'utilisateur sont corecte avant de les envoyer au serveur
   *
   * @param {void} aucun paramettre
   * 
   * @return  {void} 
   */
	takeData(){
		var prenom = document.getElementById('prenom').value;
		var prenomValid = /[A-Za-zëçéèà]{3,10}/;
		var nom = document.getElementById('nom').value;
		var nomValid = /[A-Za-zëçéàè-]{3,15}/;
		var adresse = document.getElementById('adresse').value;
		var adresseValid = /[0-9][ ]([Rr]ue|[Bb]oulevard|[Aa]ll[ée]e|[Aa]venue|[Cc]arrefour)[ ][A-Za-zëçéèà -]+/;
		var ville = document.getElementById('ville').value;
		var villeValid = /[A-Za-zëçéàè]{3,15}/;
		var mail = document.getElementById('mail').value;
		var mailValid = /[A-Za-zëçéèà.]{3,20}[@][A-Za-zëçéèà]{3,20}.[.]com/;
		if(prenomValid.test(prenom) == false){ 
			alert("Remplissez correctement le champ Prenom!!");
			return;
		}	
		else if(nomValid.test(nom) == false){
			alert("Remplissez correctement le champ Nom!!");
			return;
		}
		else if(adresseValid.test(adresse) == false){ 
			alert("Remplissez correctement le champ Adresse!!");
			return;
		}
		else if(villeValid.test(ville) == false){ 
			alert("Remplissez correctement le champ Ville!!");
			return;
		}		
		else if(mailValid.test(mail) == false){ 
			alert("Remplissez correctement le champ Adresse mail!!");
			return;
		}
		
		orinoco.dataManager.sendData(prenom, nom, adresse, ville, mail);
	}
}
