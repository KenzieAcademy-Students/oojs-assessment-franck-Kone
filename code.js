// This function is provided to shake an image.  Use it every time the user clicks on a pokemon.
// Feel free to delete this function and include it as a method within your classes...
// const toggleShake = function (element) {
//   // Animations only occur when a new class is added to the element.
//   // Since we want this to happen every time, we can switch between two different animations
//   if (element.classList.contains("shake1")) {
//     element.classList.remove("shake1");
//     element.classList.add("shake2")
//   } else {
//     element.classList.remove("shake2");
//     element.classList.add("shake1")
//   }
// }

const main = document.querySelector("main");

// Your Code Here

class Flowers {
  constructor() {
    this.image = document.createElement('img');
    this.imagePaths = ['images/flower/flower0.png', 'images/flower/flower1.png', 'images/flower/flower2.png'];
    this.index = 0;
    this.lastTransformation = false;
    main.append(this.image)

  }
  growingFlowers() {
    this.image.addEventListener('click', function (event) {

      if (this.index < this.imagePaths.length - 1) {
        this.index++
        this.image = event.target
        this.image.src = this.imagePaths[this.index]

      } else if (this.index > this.imagePaths.length - 1) {
        this.index = this.imagePaths.length - 1

        this.image = event.target
        this.image.src = this.imagePaths[this.index]

      }
    }.bind(this))
  }
  displaying() {
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

// 20 instances of Flowers class
for (let i = 0; i < 20; i++) {
  let Flower2 = new Flowers()
  Flower2.displaying()
  Flower2.growingFlowers()
};


//Pokemon class
class Pokemon extends Flowers {
  constructor(characterImages) {
    super()
    this.pokeImage = document.querySelector('img');
    this.imagesContainer = ['images/pokeball.png', ...characterImages];
    this.nextTransformation = 0;
    this.ballAlreadyBroken = false;
    this.pokeImage.setAttribute('class', 'charmander');

    charmanaderDiv.append(this.pokeImage)
  }
  growingPokemon() {
    super.growingFlowers()

    this.pokeImage.addEventListener('click', function (event) {
      this.nextTransformation = Math.round(Math.random());
      console.log(event.offsetTop)

      if (this.nextTransformation === 1 && (!this.ballAlreadyBroken || this.ballAlreadyBroken) && !this.lastTransformation) {

        if (this.index < this.imagesContainer.length - 1) {
          this.index++;
          this.pokeImage = event.target
          this.pokeImage.src = this.imagesContainer[this.index]
          this.toggleShake(this.pokeImage)

        } else if (this.index > this.imagesContainer.length - 1) {
          this.index = this.imagesContainer.length - 1
          this.pokeImage = event.target
          this.pokeImage.src = this.imagesContainer[this.index]
          this.lastTransformation = true
        }
        this.ballAlreadyBroken = true
      } else if (this.nextTransformation === 0 && this.ballAlreadyBroken === false && !this.lastTransformation) {
        this.pokeImage = event.target
        this.pokeImage.src = this.imagesContainer[this.index]
        this.toggleShake(this.pokeImage)

      } else if (this.nextTransformation === 0 && this.ballAlreadyBroken === true && !this.lastTransformation) {

        if (this.index < this.imagesContainer.length - 1) {

          this.pokeImage = event.target
          this.pokeImage.src = this.imagesContainer[this.index]
          this.toggleShake(this.pokeImage)

        } else if (this.index > this.imagesContainer.length - 1) {
          this.index = this.imagesContainer.length - 1
          this.pokeImage = event.target
          this.pokeImage.src = this.imagesContainer[this.index]
          this.lastTransformation = true

        }
      }

    }.bind(this));
  }

  displayingPokeball() {
    super.displaying()
    this.pokeImage.src = this.imagesContainer[this.index]
  }
}


// Pokemon displaying

const charmanaderDiv = document.createElement('section')
charmanaderDiv.setAttribute('class', 'charmanderContainer')
document.body.append(charmanaderDiv)

//some instance of Pokemon
//charmander
const charmanderImages = ['images/charmander/charmander0.png', 'images/charmander/charmander1.png', 'images/charmander/charmander2.png'];
const Charmander = new Pokemon(charmanderImages)
Charmander.displayingPokeball()
Charmander.growingPokemon()

//pikachu
const pikachuImages = ['images/pikachu/pikachu0.png', 'images/pikachu/pikachu1.png', 'images/pikachu/pikachu2.png', 'images/pikachu/pikachu3.png',]
const pikachu = new Pokemon(pikachuImages)
pikachu.displayingPokeball()
pikachu.growingPokemon()

//mankey
const mankeyImages = ['images/mankey/mankey0.png', 'images/mankey/mankey1.png', 'images/mankey/mankey2.png']
const Charmander3 = new Pokemon(mankeyImages)
Charmander3.displayingPokeball()
Charmander3.growingPokemon()

//cyndaquil
const cyndaquilImages = ['images/cyndaquil/quivala0.png', 'images/cyndaquil/quivala1.png', 'images/cyndaquil/quivala2.png', 'images/cyndaquil/quivala3.png']
const Charmander4 = new Pokemon(cyndaquilImages)
Charmander4.displayingPokeball()
Charmander4.growingPokemon()

// let eeveeCharacter = ['images/pokeball.png', 'images/charmander/charmander0.png', 'images/charmander/charmander1.png', 'images/charmander/charmander2.png'];

//eevee displaying
class EeveeClass extends Flowers {
  constructor() {
    super()
    this.eeveeImage = document.createElement('img')
    this.eeveeContainer = ['images/pokeball.png', 'images/eevee/eevee0.png', 'images/eevee/eevee1.png', 'images/eevee/eevee2.png', 'images/eevee/eevee3.png', 'images/eevee/eevee4.png', 'images/eevee/eevee5.png', 'images/eevee/eevee6.png', 'images/eevee/eevee7.png', 'images/eevee/eevee8.png']
    this.transformation = 0;
    this.nextTransformation = 0;
    this.ballAlreadyBroken = false;
    this.eeveeImage.setAttribute('class', 'eevee');

    eeveeDiv.append(this.eeveeImage)
  }

  growingEevee() {
    super.growingFlowers()

    this.eeveeImage.addEventListener('click', function (event) {
      this.transformation = Math.round(Math.random());
      this.nextTransformation = Math.floor(Math.random()*8) + 2
      // console.log(this.transformation)
      

      if (this.transformation ===  1 && !this.ballAlreadyBroken && !this.lastTransformation ) {

        this.eeveeImage = event.target
        this.eeveeImage.src = this.eeveeContainer[this.transformation]
        this.toggleShake(this.eeveeImage)

        this.ballAlreadyBroken = true
      } else if (this.transformation === 1 && this.ballAlreadyBroken && !this.lastTransformation) {
        this.eeveeImage = event.target
        this.eeveeImage.src = this.eeveeContainer[this.nextTransformation]
        this.toggleShake(this.eeveeImage)

        this.lastTransformation = true;
       

      } else if (this.transformation === 0 && (!this.ballAlreadyBroken || this.ballAlreadyBroken) && !this.lastTransformation){
        this.eeveeImage = event.target
        this.toggleShake(this.eeveeImage)
      }

    }.bind(this));
  }

  displayingPokeball() {
    super.displaying()
    this.eeveeImage.src = this.eeveeContainer[this.index]
  }
}


// eevee displaying
const eeveeDiv = document.createElement('section')
eeveeDiv.setAttribute('class', 'eeveeDiv')
document.body.append(eeveeDiv)

//some instance of eevee  Pokemon
//eevee1
const eevee1 = new EeveeClass()
eevee1.displayingPokeball()
eevee1.growingEevee()

//eevee2
const eevee2 = new EeveeClass()
eevee2.displayingPokeball()
eevee2.growingEevee()

//eevee3
const eevee3 = new EeveeClass()
eevee3.displayingPokeball()
eevee3.growingEevee()

//eevee4
const eevee4 = new EeveeClass()
eevee4.displayingPokeball()
eevee4.growingEevee()
 

