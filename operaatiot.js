/* Tiia Rautavesi */

var fs = require('fs');
var path = require('path');


//readDatabase: lukee aineiston muistiin, JSON-objektiksi
//  parametrina luettavan tiedoston nimi (merkkijono)

function readDatabase(filename) {
    //1.lue tiedosto levyltä
    //2.tallenna sisältö muuttujaan (JSON.parse(tiedostonSisalto))
    var pathToFile = path.join(__dirname, filename);
    fs.readFile(pathToFile, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        toVariable = JSON.parse(data);
        console.log("1) Tiedoston nimi: "+filename);
        console.log("2) Tietueiden lukumäärä: "+size());
        console.log("3) a) Löytyyko Jaska-niminen henkilö?: "+containsPerson('Jaska'));
        console.log("3) b) Löytyyko Sarita-niminen henkilö?: "+containsPerson('Sarita'));
        console.log("4) Mikä tietue vastaa tätä hakua?: "+search('Tiia', '','','','','')+". tietue\n"); 
        console.log(toVariable[search('Tiia', '','','','','')]);
    })
}


//size: palauttaa tietokannassa olevien tietueiden lukumäärän
//      ei parametrejä
//      palauttaa kokonaisluvun

function size() {
    return toVariable.length;
}

//containsPerson: etsii henkilöä nimen perusteella tietokannasta
//      parametri: etsittävän henkilön nimi (merkkijono)
//      palauttaa true tai false, true jos henkilö löytyi

function containsPerson(name) {
name = name.toLowerCase();
// iterate over each element in the array
for (var i = 0; i < toVariable.length; i++){
  // look for the entry with a matching `code` value
  if (toVariable[i].name.toLowerCase().includes(name)){
     // we found it
    // obj[i].name is the matched result
    return name+" löytyy";
  }
}
return name+" ei löydy";
}

/*  search: palauttaa kaikki tietueet, jotka täsmäävät ehtoihin
*   parametri 1, name: etsittävän henkilön nimi
*   parametri 2, gender: etsittävän henkilön sukupuoli (arvot: male, female, other)
*   parametri 3, music: etsittävä musiikki
*   parametri 4, tv: etsittävä TV-ohjelma
*   parametri 5, movies: etsittävä elokuva
*   parametri 6, restaurants: etsittävä ravintolan nimi
*/

function search(name, gender, music, tv, movies, restaurants) {
    name = name.toLowerCase();
    gender = gender.toLowerCase();
    music = music.toLowerCase();
    tv = tv.toLowerCase();
    movies = movies.toLowerCase();
    restaurants = restaurants.toLowerCase();

    for (var i = 0; i < toVariable.length; i++){
        // look for the entry with a matching `code` value
        if (toVariable[i].name.toLowerCase().includes(name) && toVariable[i].gender.toLowerCase().includes(gender)){ //Jostain syystä muut parametrit eivät toimineet
            // we found it
            // obj[i].name is the matched result
            //return "\nName: "+name+"\nGender: "+gender+"\nMusic: "+music+"\nTV: "+tv+"\nMovies: "+movies+"\nRestaurants: "+restaurants+"\n---------------\nTässä on hakutulos: \n";
            return i;
    }
    }
    return "Antamillasi tiedoilla ei löydy yhtään tietuetta";
}

readDatabase('datat.json');