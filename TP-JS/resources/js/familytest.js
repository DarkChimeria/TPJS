
function Person(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture) {
  var defaut = undefined;
  var man = './resources/imgs/man.png';
  var woman = './resources/imgs/woman.png';
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
if (kind == "H"){
  profilPicture = man;
  this.profilPicture = profilPicture;
}else if (kind == "F"){
  profilPicture = woman;
  this.profilPicture = profilPicture;
}else{
}
this.profession = profession;
this.mother = mother;
this.father = father;
this.brothers = brothers;
this.sisters = sisters;
this.profilPicture = profilPicture;
}
// var grand = new Product('', 'TENDRE FRUIT', '500', 'G', '18', '120', '0', '../img/bonbon.png');
var grandPaA = new Person('grandPaA', 'Dad', '80', 'H', 'Rien', 'Mère', 'père', 'Frère', 'Soeur', 'profilPicture');
var grandMaA = new Person('grandMaA', 'grandMaA Prénom', '82', 'F', 'Rien', 'Mère', 'père', 'Frère', 'Soeur', 'profilPicture');
// alert(grandPaA.name);

// initialisePersonFiche(grandPaA);



var tabFamily = [grandPaA,grandMaA];

var arrayLength = tabFamily.length;
var temp;

for (i = 0; i < arrayLength; i++) {
  temp = document.createElement('div');
  temp.className = 'results';


  // initialisePersonFiche(tabFamily[i]);

  temp.innerHTML = tabFamily[i];
  document.getElementsByTagName('body')[0].appendChild(temp);


  function initialisePersonFiche(param) {

    Object.keys(param).forEach(function (key) {
        // debugger;
       
          var text = undefined != param[key] ? param[key] : "";
          var text = '<p>' + text + '</p>';
          document.getElementById(key).innerHTML = text;
          temp.innerHTML = tabFamily[i];
       
         });
  }


}







