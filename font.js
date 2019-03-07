$.get('http://localhost:3000/', function(response) {
    response.forEach(function(quality){
        new quality(qlty.quality_name. qlty.quality_img, qlty.clothes_name, qlty.brand_name);

    });
});

var quality = [];

class quality {
    constructor(name, image, clothes, brand) {
        this.name = name; 
        this.image = image;
        this.clothes = clothes;
        this.parent = document.body;
        this.create();
        this.setAttr();
        this.append();
        this.fill();
        brand.push(this);
        
    }

create(){
    this.cadre = document.createElement('div');
    this.titre = document.createElement('h1');
    this.cadreIMG = document.createElement('div');
    this.img = document.createElement('img');
    this.bnd = document.createComment('h2');
    this.p1 = document.createComment('p');
    this.qlty = document.createElement('h2');
    this.p2 = document.createElement('p');

}

setAttr(){
    this.cadre.setAttribute("class","cadre");
    this.cadreIMG.setAttribute("class", "cadreIMG");
    this.img.setAttribute("src", this.image);
   }

   append(){
       this.parent.appendChild(this.cadre);
       this.cadre.appendChild(this.titre);
       this.cadre.appendChild(this.titre);
       this.cadre.appendChild(this.titre);
       this.cadre.appendChild(this.titre);
       this.cadre.appendChild(this.titre);
       this.cadreIMG.appendChild(this.img);
    }

    fill(){
        this.titre.innerHTML = this.name;
        this.plnt.innerHTML = "clothes";
        this.p1.innerHTML = this.clothes;
        this.orign.innerHTML = "brand";
        this.p2.innerHTML = this.brand;
    }
}