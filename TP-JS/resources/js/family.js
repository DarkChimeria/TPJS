var tabFamily = [];
var tabParents = [];
function Person(profilPicture,name, firstname, age, kind, profession, mother, father, brothers, sisters) {
  var defaut = undefined;
  var man = './resources/imgs/man.png';
  var woman = './resources/imgs/woman.png';

  if (kind == "H"){
    profilPicture = man;
    this.profilPicture = profilPicture;
  }else if (kind == "F"){
    profilPicture = woman;
    this.profilPicture = profilPicture;
  }else{
  }

  if (name == undefined ||name == ""){
   this.name = defaut;
 }else{
  this.name = name;
}
if (firstname == undefined || firstname == ""){
  firstname = prompt('Veuillez saisir un prénom :');
  this.firstname = firstname;
}else{
  this.firstname = firstname;
}
this.age = age;
this.kind = kind;

this.profilPicture = profilPicture;
this.profession = profession;
this.mother = mother;
this.father = father;
this.brothers = brothers;
this.sisters = sisters;

this.addBrother = function(profilPicture,name, firstname, age, kind, profession, mother, father, brothers, sisters) {

  this.brothers.push(new Person(profilPicture,name, firstname, age, kind, profession, mother, father, brothers, sisters));
  tabFamily.push(this.brothers);

};

this.addSister = function(profilPicture,name, firstname, age, kind, profession, mother, father, brothers, sisters) {

  this.sisters.push(new Person(profilPicture,name, firstname, age, kind, profession, mother, father, brothers, sisters));
  // tabFamily.push(this.sisters);

};

this.addMother = function(profilPicture,name, firstname, age, kind, profession, mother, father, brothers, sisters) {

  this.mother.push(new Person(profilPicture,name, firstname, age, kind, profession, mother, father, brothers, sisters));
  // tabFamily.push(this.mother);

};

this.addFather = function(profilPicture,name, firstname, age, kind, profession, mother, father, brothers, sisters) {

  this.father.push(new Person(profilPicture,name, firstname, age, kind, profession, mother, father, brothers, sisters));
  // tabFamily.push(this.father);

};

}



var enfant1 = new Person(profilPicture, 'Honore', 'Brunault', '50', 'H', 'Rien', [], [], [], []);
tabFamily.push(enfant1);

var enfant2 = new Person(profilPicture, 'Honore', 'huguette', '54', 'F', 'Rien', [], [], [], []);
tabFamily.push(enfant2);







enfant1.addFather(profilPicture, 'Boivin', 'Jeoffroi', '80', 'H', 'Rien', [], [], [], 'Soeur');

enfant1.addMother(profilPicture, 'Dulin', 'Manon', '80', 'H', 'Rien', [], [], [], 'Soeur');

var arrayLength = tabFamily.length;
var arrayLength2 = tabParents.length;
// var arrayLengthenfant = enfant1.mother.length;

// Object.keys(tabFamily).forEach(function(key) {
//     console.log(key + ': ' + tabFamily.name);
// });



    
    console.log(tabFamily[0]);


for (property in tabFamily) {
  // console.log(property, '= ', tabFamily[property]);
}

// ENFANTS
for (i = 0; i < arrayLength; i++) {
  var div = document.createElement("div");
  div.setAttribute("class", "personne col-md-3 thumbnail");
  initialisePersonFiche(tabFamily[i],div);

  function initialisePersonFiche(param,div) {

    Object.keys(param).forEach(function (key) {


        

        if ("profilPicture" != key) {

          var text = undefined != param[key] ? param[key] : "";

          if(param[key] == 'mother'){
            var mother = 'mother';
            console.log(tabFamily[0].mother[0]);
          }


          var innerDiv = document.createElement("div");
          innerDiv.setAttribute("class", key + " col-md-3");
          var span = document.createElement("span");
          span.innerHTML = text;
          if(key != 'addBrother' && key != 'addSister' && key != 'addFather' && key != 'addMother'){
            innerDiv.innerHTML = key + ' : ';
            innerDiv.appendChild(span);
            div.appendChild(innerDiv);
            document.getElementById("affichage").appendChild(div);
        }
      } else {

        var innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", key + " img-responsive");
        var img = document.createElement("img");
        img.setAttribute("width","10%");
        img.src = param[key];
        innerDiv.appendChild(img);
        div.appendChild(innerDiv);
        document.getElementById("affichage").appendChild(div);
      }
    });
  }

}


// PREVU POUR AFFICHAGE MERE PERE FRERES SOEURS

// for (j = 0; j < arrayLength2; j++) {
//   var div = document.createElement("div");
//   div.setAttribute("class", "personne col-md-3 thumbnail");
//   initialisePersonFiche(tabParents[j],div);

//   function initialisePersonFiche(param,div) {

//     Object.keys(param).forEach(function (key) {

//         if ("profilPicture" != key) {

//           var text = undefined != param[key] ? param[key] : "";

//           // if(param[key] == 'mother'){
//           //   var mother = 'mother';
//           //   console.log(tabParents[0].mother[0]);
//           // }


//           var innerDiv = document.createElement("div");
//           innerDiv.setAttribute("class", key + " col-md-3");
//           var span = document.createElement("span");
//           span.innerHTML = text;
//           if(key != 'addBrother' && key != 'addSister' && key != 'addFather' && key != 'addMother'){
//             innerDiv.innerHTML = key + ' : ';
//             innerDiv.appendChild(span);
//             div.appendChild(innerDiv);
//             document.getElementById("affichage").appendChild(div);
//         }
//       } else {

//         var innerDiv = document.createElement("div");
//         innerDiv.setAttribute("class", key + " img-responsive");
//         var img = document.createElement("img");
//         img.setAttribute("width","10%");
//         img.src = param[key];
//         innerDiv.appendChild(img);
//         div.appendChild(innerDiv);
//         document.getElementById("affichage").appendChild(div);
//       }
//     });
//   }

// }
