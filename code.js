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
    main.append(this.image)

  }
}
// somes instances of Flowers class

for (let i = 0; i < 15; i++) {
  let Flower1 = new Flowers()
  Flower1.displaying()
  Flower1.growingFlowers()
}


//Pokemon class
class Pokemon {
  constructor(pokemonContainer) {
    this.pokeImage = document.querySelector('img');
    this.imagesContainer = ['images/pokeball.png', ...pokemonContainer];
    this.index = 0;
    this.pokeballBroken = 0;
    this.ballAlreadyBroken = false;
  }

  growingPokemon() {
    this.pokeImage.addEventListener('click', function (event) {
      this.pokeballBroken = Math.round(Math.random());

      if (this.pokeballBroken === 1 && (!this.ballAlreadyBroken || this.ballAlreadyBroken)) {

        if (this.index < this.imagesContainer.length - 1) {
          this.index++;
          this.pokeImage = event.target
          this.pokeImage.src = this.imagesContainer[this.index]
        } else if (this.index > this.imagesContainer.length - 1) {
          this.index = this.imagesContainer.length - 1
          this.pokeImage = event.target
          this.pokeImage.src = this.imagesContainer[this.index]
        }
        this.ballAlreadyBroken = true
      } else if (this.pokeballBroken === 0 && this.ballAlreadyBroken === false) {
        this.pokeImage = event.target
        this.pokeImage.src = this.imagesContainer[this.index]
        this.toggleShake(this.pokeImage)

      } else if (this.pokeballBroken === 0 && this.ballAlreadyBroken === true) {

        if (this.index < this.imagesContainer.length - 1) {
          this.index++;
          this.pokeImage = event.target
          this.pokeImage.src = this.imagesContainer[this.index]
        } else if (this.index > this.imagesContainer.length - 1) {
          this.index = this.imagesContainer.length - 1
          this.pokeImage = event.target
          this.pokeImage.src = this.imagesContainer[this.index]
        }
      }

    }.bind(this));
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
  displayingPokeball() {

    this.pokeImage.src = this.imagesContainer[this.index]
  }
}

// charmander displaying
const charmander = ['images/charmander/charmander0.png', 'images/charmander/charmander1.png', 'images/charmander/charmander2.png'];

let charmanderGroup = document.createElement('div')
charmanderGroup.setAttribute('class', 'charmanderGroup')

//some instance of charmanader  Pokemon
for (let j = 0; j < 3; j++) {
  let CharmanderClass = new Pokemon(charmander)
  CharmanderClass.displayingPokeball()
  CharmanderClass.growingPokemon()
  CharmanderClass.pokeImage.setAttribute('class', 'charmander')

  charmanderGroup.append(CharmanderClass.pokeImage)
  document.body.append(charmanderGroup)
  console.log(CharmanderClass.pokeImage)
}

//eevee displaying
const eevee = ['images/eevee/eevee0.png', 'images/eevee/eevee1.png', 'images/eevee/eevee2.png', 'images/eevee/eevee3.png', 'images/eevee/eevee4.png', 'images/eevee/eevee5.png', 'images/eevee/eevee6.png', 'images/eevee/eevee7.png', 'images/eevee/eevee8.png']

let eeveeGroup = document.createElement('div')
eeveeGroup.setAttribute('class', 'eeveeGroup')

class EeveeClass extends Pokemon {
  constructor() {
    super(eevee)
    this.randomIndex = Math.round(Math.random())
    this.eeveeImage = document.createElement('img')

  }
  displayInitialForm = () => {
    // super.displayingPokeball()
    this.eeveeImage.src = this.imagesContainer[this.index]
  }

  changeForm() {
    // super.growingPokemon()
    this.eeveeImage.addEventListener('click', function (event) {
      this.pokeballBroken = Math.round(Math.random());

      if (this.pokeballBroken === 1 && (!this.ballAlreadyBroken || this.ballAlreadyBroken)) {

        if (this.index < this.imagesContainer.length - 1) {
          this.index++;
          this.eeveeImage = event.target
          this.eeveeImage.src = this.imagesContainer[this.index]
        } else if (this.index > this.imagesContainer.length - 1) {
          this.index = this.imagesContainer.length - 1
          this.eeveeImage = event.target
          this.eeveeImage.src = this.imagesContainer[this.index]
        }
        this.ballAlreadyBroken = true
      } else if (this.pokeballBroken === 0 && this.ballAlreadyBroken === false) {
        this.eeveeImage = event.target
        this.eeveeImage.src = this.imagesContainer[this.index]
        this.toggleShake(this.eeveeImage)

      } else if (this.pokeballBroken === 0 && this.ballAlreadyBroken === true) {

        if (this.index < this.imagesContainer.length - 1) {
          this.index++;
          this.eeveeImage = event.target
          this.eeveeImage.src = this.imagesContainer[this.index]
        } else if (this.index > this.imagesContainer.length - 1) {
          this.index = this.imagesContainer.length - 1
          this.eeveeImage = event.target
          this.eeveeImage.src = this.imagesContainer[this.index]
        }
      }

    }.bind(this));
  }
}

const EeveeInstance = new EeveeClass()
EeveeInstance.displayInitialForm()
EeveeInstance.changeForm()
EeveeInstance.eeveeImage.setAttribute('class', 'eeveeForms')

EeveeInstance.eeveeImage.setAttribute('class', 'eeveeForms')

eeveeGroup.append(EeveeInstance.eeveeImage)
document.body.append(eeveeGroup)

console.log(Pokemon instanceof Flowers)
// console.log(EeveeInstance.displayingPokeball())

// let eeveeGroup = document.createElement('div')
// eeveeGroup.setAttribute('class', 'eeveeGroup')

// //some instance of eevee Pokemon
// for (let j = 0; j < 3; j++) {
//   let EeveeClass = new Pokemon(eevee)
//   EeveeClass.displayingPokeball()
//   EeveeClass.growingPokemon()
//   EeveeClass.pokeImage.setAttribute('class', 'eeveeForms')

//   eeveeGroup.append(EeveeClass.pokeImage)
//   document.body.append(eeveeGroup)
//   console.log(EeveeClass.pokeImage)

// }

// console.log(document.body.children)
