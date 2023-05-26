
const main = document.querySelector("main");

// Your Code Here

class Flowers {
  constructor() {

    this.image = document.createElement('img');
    this.imagePaths = ['images/flower/flower0.png', 'images/flower/flower1.png', 'images/flower/flower2.png'];
    this.index = 0;
    this.lastTransformation = false;
    this.ballAlreadyBroken = false;
    main.append(this.image)
  }

  flowerIsGrowing() {
    this.image.addEventListener('click', (event) => {

      if (this.index < this.imagePaths.length - 1) {

        this.index++
        this.image = event.target
        this.image.src = this.imagePaths[this.index]

      } else if (this.index > this.imagePaths.length - 1) {

        this.index = this.imagePaths.length - 1
        this.image = event.target
        this.image.src = this.imagePaths[this.index]

      }
    })
  }

  displayingFlowers() {
    this.image.src = this.imagePaths[this.index]
    this.image.setAttribute('class', 'flowers')
  }

  toggleShake(element) {
    // Animations only occur when a new class is added to the element.
    // Since we want this to happen every time, we can switch between two different animations
    if (element.classList.contains("shake1")) {
      element.classList.remove("shake1");
      element.classList.add("shake2")
    } else {
      element.classList.remove("shake2");
      element.classList.add("shake1")
    }
  }
}

// somes instances of Flowers class
for (let i = 0; i < 20; i++) {
  let Flower = new Flowers()
  Flower.displayingFlowers()
  Flower.flowerIsGrowing()
};

//Pokemon class Flowers's child
class Pokemon extends Flowers {
  constructor(characterImages) {

    super()
    this.currentPokemonImage = document.querySelector('img');
    this.pokemonTransformationImages = ['images/pokeball.png', ...characterImages];
    this.newTransformation = 0; 
    this.indexPokemonImage = 0;
    this.currentPokemonImage.setAttribute('class', 'pokemon');
    pokemonSection.append(this.currentPokemonImage)

  }

  pokemonIsGrowing() {
    this.currentPokemonImage.addEventListener('click', function (event) {
      this.newTransformation = Math.round(Math.random());

      if (this.newTransformation === 1 && (!this.ballAlreadyBroken || this.ballAlreadyBroken) ) {

        if (this.indexPokemonImage < this.pokemonTransformationImages.length - 1) {
          this.indexPokemonImage++;
          this.currentPokemonImage = event.target
          this.currentPokemonImage.src = this.pokemonTransformationImages[this.indexPokemonImage]
          this.toggleShake(this.currentPokemonImage)

        } else if (this.indexPokemonImage >= this.pokemonTransformationImages.length - 1) {
          this.indexPokemonImage = this.pokemonTransformationImages.length - 1
          this.currentPokemonImage = event.target
          this.currentPokemonImage.src = this.pokemonTransformationImages[this.indexPokemonImage]
          this.lastTransformation = true
        }
        this.ballAlreadyBroken = true

      } else if (this.newTransformation === 0 && this.ballAlreadyBroken === false ) {

        this.currentPokemonImage = event.target
        this.currentPokemonImage.src = this.pokemonTransformationImages[this.indexPokemonImage]
        this.toggleShake(this.currentPokemonImage)

      } else if (this.newTransformation === 0 && this.ballAlreadyBroken === true ) {

        if (this.indexPokemonImage < this.pokemonTransformationImages.length - 1) {

          this.currentPokemonImage = event.target
          this.currentPokemonImage.src = this.pokemonTransformationImages[this.indexPokemonImage]
          this.toggleShake(this.currentPokemonImage)

        } else if (this.indexPokemonImage >= this.pokemonTransformationImages.length - 1) {
          this.indexPokemonImage = this.pokemonTransformationImages.length - 1
          this.currentPokemonImage = event.target
          this.currentPokemonImage.src = this.pokemonTransformationImages[this.indexPokemonImage]
        }
      }
    }.bind(this));
  }

  displayingPokemonBall() {
    this.currentPokemonImage.src = this.pokemonTransformationImages[this.indexPokemonImage]
  }
}

// Pokemon displaying
const pokemonSection = document.createElement('section')
pokemonSection.setAttribute('class', 'pokemonContainer')
document.body.append(pokemonSection)

//some instances of Pokemon
//charmander
const charmanderImages = ['images/charmander/charmander0.png', 'images/charmander/charmander1.png', 'images/charmander/charmander2.png'];
const Charmander = new Pokemon(charmanderImages)
Charmander.displayingPokemonBall()
Charmander.pokemonIsGrowing()

//pikachu
const pikachuImages = ['images/pikachu/pikachu0.png', 'images/pikachu/pikachu1.png', 'images/pikachu/pikachu2.png', 'images/pikachu/pikachu3.png',]
const Pikachu = new Pokemon(pikachuImages)
Pikachu.displayingPokemonBall()
Pikachu.pokemonIsGrowing()

//mankey
const mankeyImages = ['images/mankey/mankey0.png', 'images/mankey/mankey1.png', 'images/mankey/mankey2.png']
const Mankey = new Pokemon(mankeyImages)
Mankey.displayingPokemonBall()
Mankey.pokemonIsGrowing()

//cyndaquil
const cyndaquilImages = ['images/cyndaquil/quivala0.png', 'images/cyndaquil/quivala1.png', 'images/cyndaquil/quivala2.png', 'images/cyndaquil/quivala3.png']
const Cyndaquil = new Pokemon(cyndaquilImages)
Cyndaquil.displayingPokemonBall()
Cyndaquil.pokemonIsGrowing()

//Eevee class Flowers's child
class EeveeClass extends Flowers {
  constructor() {

    super()
    this.eeveeCurrentImage = document.createElement('img')
    this.eeveeTransformationImages = ['images/pokeball.png', 'images/eevee/eevee0.png', 'images/eevee/eevee1.png', 'images/eevee/eevee2.png', 'images/eevee/eevee3.png', 'images/eevee/eevee4.png', 'images/eevee/eevee5.png', 'images/eevee/eevee6.png', 'images/eevee/eevee7.png', 'images/eevee/eevee8.png'];
    this.transformation = 0;
    this.nextTransformation = 0; 
    this.eeveeCurrentImage.setAttribute('class', 'eevee');
    eeveeSection.append(this.eeveeCurrentImage)
  }

  eeveeIsGrowing() {
    super.flowerIsGrowing()
    this.eeveeCurrentImage.addEventListener('click', (event) => {
      this.transformation = Math.round(Math.random());
    
      if (this.transformation ===  1 && !this.ballAlreadyBroken && !this.lastTransformation ) {

        this.eeveeCurrentImage = event.target
        this.eeveeCurrentImage.src = this.eeveeTransformationImages[this.transformation]
        this.toggleShake(this.eeveeCurrentImage)
        this.ballAlreadyBroken = true

      } else if (this.transformation === 1 && this.ballAlreadyBroken && !this.lastTransformation) {

        this.nextTransformation = Math.floor(Math.random() * 8) + 2
        this.eeveeCurrentImage = event.target
        this.eeveeCurrentImage.src = this.eeveeTransformationImages[this.nextTransformation]
        this.toggleShake(this.eeveeCurrentImage)
        this.lastTransformation = true;
       
      } else if (this.transformation === 0 && (!this.ballAlreadyBroken || this.ballAlreadyBroken) && !this.lastTransformation){

        this.eeveeCurrentImage = event.target
        this.toggleShake(this.eeveeCurrentImage)
      }
    });
  }

  eeveePokemonBall() {
    super.displayingFlowers()
    this.eeveeCurrentImage.src = this.eeveeTransformationImages[this.index]
  }
}

// Eevee displaying
const eeveeSection = document.createElement('section')
eeveeSection.setAttribute('class', 'eeveeContainer')
document.body.append(eeveeSection)

//some instances of eevee  Pokemon
//eevee1
const Eevee1 = new EeveeClass()
Eevee1.eeveePokemonBall()
Eevee1.eeveeIsGrowing()

//eevee2
const Eevee2 = new EeveeClass()
Eevee2.eeveePokemonBall()
Eevee2.eeveeIsGrowing()

//eevee3
const Eevee3 = new EeveeClass()
Eevee3.eeveePokemonBall()
Eevee3.eeveeIsGrowing()

//eevee4
const Eevee4 = new EeveeClass()
Eevee4.eeveePokemonBall()
Eevee4.eeveeIsGrowing()
 

