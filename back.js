const sqlite3 = require('sqlite3').verbose();
const fr = require('fs');

const express = require('express');
const app = express();
const cors = require('cors');

const dbFile = 'test.db';
const db = new sqlite3.Database(dbFile);
app.use(cors());

// sans db.realize.
// les operations sont lancées en même temps.
// le INSERT risque d'etre executé.
// avant que la creation de la table soit finie. 

db.serialize( () => {
    //if ( !fs.existsSync(dbFile) ) {
        console.log("WebPage");
          db.run('CREATE TABLE IF NOT EXISTS clothes (clothes_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price NUMBER, like BOOLEAN, images TEXT, description TEXT)');

          db.run('INSERT INTO clothes (name, price, like, images, description) VALUES (?, ?, ?, ?, ?)', 'bag', 40, true, "bag.jpg", "Traveling handbag");
          db.run('INSERT INTO clothes (name, price, like, images, description) VALUES (?, ?, ?, ?, ?)', 'shirt', 40, true, "shirt.jpg", "Three shirts for men ");
          db.run('INSERT INTO clothes (name, price, like, images, description) VALUES (?, ?, ?, ?, ?)', 'shoes', 40, true, "shoes.jpg", "street shoes Timberland");
          db.run('INSERT INTO clothes (name, price, like, images, description) VALUES (?, ?, ?, ?, ?)', 'purses', 40, true, "purses.jpeg", "Party purse");
          db.run('INSERT INTO clothes (name, price, like, images, description) VALUES (?, ?, ?, ?, ?)', 'dress', 40, true, "dress.jpeg", "Summer dress");
          db.run('INSERT INTO clothes (name, price, like, images, description) VALUES (?, ?, ?, ?, ?)', 'coat', 40, true, "coat.jpeg", "Winter coat");
          db.run('INSERT INTO clothes (name, price, like, images, description) VALUES (?, ?, ?, ?, ?)', 'jeans', 40, true, "jeans.jpeg", "Levi's Jeans");
    
   // }
    // POUR CREER UNE FOREIGN KEY 
    // 1-Créer une colonne pour la receptionner -> student Id INTEGER 
    // 2-Définir cette colonne comme foreign key -> FOREIGN KEY (studnt Id)
    // 3-indiquer à quelle table et quelle colonne fat reference cette foreign Key 
    // -> ReFERENCE students id

    db.run('CREATE TABLE IF NOT EXISTS BRANDS (BRANDS INTEGER PRIMARY KEY AUTOINCREMENT, brands_name TEXT UNIQUE, type TEXT UNIQUE, clothes_id INTEGER, FOREIGN KEY(clothes_id) REFERENCES clothes(id) )');
    
    db.run('INSERT INTO brands (brands_name, type, clothes_id) VALUES (?, ?, ?)', 'bag', 'burberry', 1);
    db.run('INSERT INTO brands (brands_name, type, clothes_id) VALUES (?, ?, ?)', 'shirt', 'A.P.C', 2);
    db.run('INSERT INTO brands (brands_name, type, clothes_id) VALUES (?, ?, ?)', 'shoes', 'timberland', 3);
    db.run('INSERT INTO brands (brands_name, type, clothes_id) VALUES (?, ?, ?)', 'purses', 'chanel', 4);
    db.run('INSERT INTO brands (brands_name, type, clothes_id) VALUES (?, ?, ?)', 'dress', 'princes tam tam', 5);
    db.run('INSERT INTO brands (brands_name, type, clothes_id) VALUES (?, ?, ?)', 'coat', 'uniqlo', 6);
    db.run('INSERT INTO brands (brands_name, type, clothes_id) VALUES (?, ?, ?)', 'jeans', 'levis', 7);
    
    //db.all('SELECT * FROM animals NATURAL JOIN students', function (error, data) {
    // if(!error) console.log(data);
    //});

    db.run('CREATE TABLE IF NOT EXISTS quality(quality_id INTEGER PRIMARY KEY AUTOINCREMENT, quality_name TEXT)');

    db.run('INSERT INTO quality (quality_name) VALUES (?)', 'goat leather');
    db.run('INSERT INTO quality (quality_name) VALUES (?)', 'organic cotton');
    db.run('INSERT INTO quality (quality_name) VALUES (?)', 'leather');
    db.run('INSERT INTO quality (quality_name) VALUES (?)', 'lambskin');
    db.run('INSERT INTO quality (quality_name) VALUES (?)', 'viscose');
    db.run('INSERT INTO quality (quality_name) VALUES (?)', 'laine');
    db.run('INSERT INTO quality (quality_name) VALUES (?)', 'cotton');


    db.run('CREATE TABLE IF NOT EXISTS clothes_to_quality (clothes_to_quality_id INTEGER PRIMARY KEY AUTOINCREMENT, quality_id INTEGER, clothes_id INTEGER, FOREIGN KEY (quality_id) REFERENCES qualities(quality_id), FOREIGN KEY (clothes_id) REFERENCES clothes(clothes_id))');

    db.run('INSERT INTO clothes_to_quality (clothes_id, quality_id) VALUES (?,?)', 1, 1);
    db.run('INSERT INTO clothes_to_quality (clothes_id, quality_id) VALUES (?,?)', 2, 2);
    db.run('INSERT INTO clothes_to_quality (clothes_id, quality_id) VALUES (?,?)', 3, 3);
    db.run('INSERT INTO clothes_to_quality (clothes_id, quality_id) VALUES (?,?)', 4, 4);
    db.run('INSERT INTO clothes_to_quality (clothes_id, quality_id) VALUES (?,?)', 5, 5);
    db.run('INSERT INTO clothes_to_quality (clothes_id, quality_id) VALUES (?,?)', 6, 6);
    db.run('INSERT INTO clothes_to_quality (clothes_id, quality_id) VALUES (?,?)', 7, 7);

    db.all('SELECT * FROM quality NATURAL JOIN clothes_to_quality NATURAL JOIN clothes NATURAL JOIN brands', function (error, data) {
      if(!error) console.log(data);
      else console.log(error);
    });

});

app.get("/", function (req, res) {
  db.all('SELECT * FROM clothes', function (error, data) {
    response.send(data);
    if(!error) res.send(data);
    else console.log(error);
  });
});

app.listen(3000, function (error) {
  if (!error) console.log('app listening port 3000');
});















