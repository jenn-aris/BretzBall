var app = {
  //position initial du joueur
  player: {
      x: 0,
      y: 0,
      direction: 'right'
    },
  //position de l'objectif a atteindre
  targetCell: {
      x: 5,
      y: 3,
  },
  init: function () {
    console.log('init !');
    //j'execute le dessin de la grille
    app.drawBoard()
    },
  //méthode qui a la responsabilité de dessiner la grille
  drawBoard : function () {
    //je défini les dimensions de ma grille:
    var height = 4;
    var width = 6;
    //on creer une boucle dans une boucle
    for ( var rowCounter = 0 ; rowCounter < height ; rowCounter++) {    
      // dans un premier temps j'ai mis : console.log('je creer une ligne - ligne numéro ' + rowCounter );
      //a présent c'est une vrai methode que je vais exécuter.
      var newRowElement = app.createLine();

      for ( var cellCounter = 0 ; cellCounter < width ; cellCounter++ ) {
      //dans un premier temps j'ai mis : console.log('je creer une case - case numéro ' + cellCounter );
      //a présent c'est une vrai methode que je vais éxécuter.
       app.createCell(newRowElement);
      }
    }
  },
  createLine : function() {
   //je vais créer un élément div pour le document
   var rowElement = document.createElement('div');
   //je lui donne une class
   rowElement.className = 'row' ;
   //on mémorise le parent et on le cible
   var parentElement = document.getElementById('board');
   // l'insufler dans le DOM
   parentElement.appendChild(rowElement);
   //retourner cette ligne nouvellement créer.
   return rowElement;
  },

  createCell : function(parentRowElement) {
    //contrairement a createLine, createCell a besoin d'un paramètre
    // afin de savoir de combien de cellules on aura besoin.
    //on applique la même recette que pour createLine
    //je créer un élément div pour le document
    var cellElement = document.createElement('div');
    //je lui donne une class
    cellElement.className = 'cell';
    //on cible le parent pour lui insufler son enfant.
    parentRowElement.appendChild(cellElement);
  }
}
document.addEventListener('DOMContentLoaded', app.init);




