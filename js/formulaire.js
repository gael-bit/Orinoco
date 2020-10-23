class Formulaire{
	constructor(target){
		this.formulaire = document.createElement('form');
		target.append(this.formulaire);
		this.render();
	}

	// Creation d'un formulaire dans la page panier
	render(){ 
		this.formulaire.innerHTML = `
		<div class="form-group">
			<label for="prenom">Prenom</label>
			<input name="prenom" id="prenom" type="text" autofocus="true" required="true">
		</div>
		<div class="form-group">
			<label for="nom">Nom</label>
			<input name="nom" id="nom" type="text" required="true">
		</div>
		<div class="form-group">
			<label for="adresse">Adresse </label>
			<input name="adresse" id="adresse" type="text" required="true">
		</div>
		<div class="form-group">
			<label for="ville">Ville </label>
			<input name="ville" id="ville" type="text" required="true">
		</div>
		<div class="form-group">
			<label for="adresse mail">Adresse mail </label>
			<input name="adresse mail" id="adresse mail" type="email" required="true">
		</div>
		<input class="button-commande" value="Passer commande" type="submit">`;
	}
}