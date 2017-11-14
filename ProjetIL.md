# ShortenerGui
But du projet : créer une petite interface pour consommer les services fournis par http://cnt.wkil.pw/

1ere étape : Créer un composant qui affiche la liste des url
Pour le moment, vous disposez d'un service (dataRetriever) qui va récupérer des informations dans un fichier en dur (assets/sample.json)

* Se familiariser avec Angular CLI
* Créer un composant qui affiche le résultat fourni par la méthode getAll du service
* Modifier la partie html du composant pour présenter les retours sous forme d'une table
  * URL
  * Service de raccourci
  * raccourci (balise href avec en nom le nom du racourci en href l'url raccourcie)
  * nombre de hit enregistrés
