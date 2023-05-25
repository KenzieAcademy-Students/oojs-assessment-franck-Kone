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
  constructor() {
    super()
    this.pokeImage = document.querySelector('img');
    this.imagesContainer = ['images/pokeball.png', 'images/charmander/charmander0.png', 'images/charmander/charmander1.png', 'images/charmander/charmander2.png'];
    this.pokeballBroken = 0;
    this.ballAlreadyBroken = false;
    this.pokeImage.setAttribute('class', 'charmander');

    charmanaderDiv.append(this.pokeImage)
  }
  growingPokemon() {
    super.growingFlowers()

    this.pokeImage.addEventListener('click', function (event) {
      this.pokeballBroken = Math.round(Math.random());

      if (this.pokeballBroken === 1 && (!this.ballAlreadyBroken || this.ballAlreadyBroken)) {

        if (this.index < this.imagesContainer.length - 1) {
          this.index++;
          this.pokeImage = event.target
          this.pokeImage.src = this.imagesContainer[this.index]
          this.toggleShake(this.pokeImage)

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
          this.toggleShake(this.pokeImage)

        } else if (this.index > this.imagesContainer.length - 1) {
          this.index = this.imagesContainer.length - 1
          this.pokeImage = event.target
          this.pokeImage.src = this.imagesContainer[this.index]
        }
      }

    }.bind(this));
  }
 
  displayingPokeball() {
    super.displaying()
    this.pokeImage.src = this.imagesContainer[this.index]
  }
}

// charmander displaying
const charmanaderDiv = document.createElement('div')
charmanaderDiv.setAttribute('class', 'charmanderContainer')
document.body.append(charmanaderDiv)

//some instance of charmanader  Pokemon
//charmander1
const Charmander1 = new Pokemon()
Charmander1.displayingPokeball()
Charmander1.growingPokemon()

//charmander2
const Charmander2 = new Pokemon()
Charmander2.displayingPokeball()
Charmander2.growingPokemon()

//charmander3
const Charmander3 = new Pokemon()
Charmander3.displayingPokeball()
Charmander3.growingPokemon()





//eevee displaying


class EeveeClass extends Flowers {
  constructor() {
    super()
    this.eeveeImage = document.createElement('img')
    this.eeveeContainer = ['images/pokeball.png', 'images/eevee/eevee0.png', 'images/eevee/eevee1.png', 'images/eevee/eevee2.png', 'images/eevee/eevee3.png', 'images/eevee/eevee4.png', 'images/eevee/eevee5.png', 'images/eevee/eevee6.png', 'images/eevee/eevee7.png', 'images/eevee/eevee8.png']
    this.pokeballBroken = 0;
    this.ballAlreadyBroken = false;
    this.eeveeImage.setAttribute('class', 'eevee');

    eeveeDiv.append(this.eeveeImage)
  }
  growingEevee() {
    super.growingFlowers()

    this.eeveeImage.addEventListener('click', function (event) {
      this.pokeballBroken = Math.round(Math.random());

      if (this.pokeballBroken === 1 && (!this.ballAlreadyBroken || this.ballAlreadyBroken)) {

        if (this.index < this.eeveeContainer.length - 1) {
          this.index++;
          this.eeveeImage = event.target
          this.eeveeImage.src = this.eeveeContainer[this.index]
          this.toggleShake(this.eeveeImage)

        } else if (this.index > this.eeveeContainer.length - 1) {
          this.index = this.eeveeContainer.length - 1
          this.eeveeImage = event.target
          this.eeveeImage.src = this.eeveeContainer[this.index]
        }
        this.ballAlreadyBroken = true
      } else if (this.pokeballBroken === 0 && this.ballAlreadyBroken === false) {
        this.eeveeImage = event.target
        this.eeveeImage.src = this.eeveeContainer[this.index]
        this.toggleShake(this.eeveeImage)

      } else if (this.pokeballBroken === 0 && this.ballAlreadyBroken === true) {

        if (this.index < this.eeveeContainer.length - 1) {
          this.index++;
          this.eeveeImage = event.target
          this.eeveeImage.src = this.eeveeContainer[this.index]
          this.toggleShake(this.eeveeImage)

        } else if (this.index > this.eeveeContainer.length - 1) {
          this.index = this.eeveeContainer.length - 1
          this.eeveeImage = event.target
          this.eeveeImage.src = this.eeveeContainer[this.index]
        }
      }

    }.bind(this));
  }

  displayingPokeball() {
    super.displaying()
    this.eeveeImage.src = this.eeveeContainer[this.index]
  }
}

const eeveeDiv = document.createElement('div')
eeveeDiv.setAttribute('class', 'eeveeDiv')
document.body.append(eeveeDiv)


const eevee1 = new EeveeClass()
eevee1.displayingPokeball()
eevee1.growingEevee()

const eevee2 = new EeveeClass()
eevee2.displayingPokeball()
eevee2.growingEevee()

const eevee3 = new EeveeClass()
eevee3.displayingPokeball()
eevee3.growingEevee()
// let eeveeGroup = document.createElement('div')
// eeveeGroup.setAttribute('class', 'eeveeGroup')

// class EeveeClass extends Pokemon {
//   constructor() {
//     super()
//     this.randomIndex = Math.round(Math.random())
//     this.eeveeImage = document.createElement('img')
//     this.eeveeContainer = ['images/pokeball.png', 'images/eevee/eevee0.png', 'images/eevee/eevee1.png', 'images/eevee/eevee2.png', 'images/eevee/eevee3.png', 'images/eevee/eevee4.png', 'images/eevee/eevee5.png', 'images/eevee/eevee6.png', 'images/eevee/eevee7.png', 'images/eevee/eevee8.png']

//   }
//   displayInitialForm = () => {
//     // super.displayingPokeball()
//     this.eeveeImage.src = this.imagesContainer[this.index]
//   }

//   changeForm() {
//     // super.growingPokemon()
//     this.eeveeImage.addEventListener('click', function (event) {
//       this.pokeballBroken = Math.round(Math.random());

//       if (this.pokeballBroken === 1 && (!this.ballAlreadyBroken || this.ballAlreadyBroken)) {

//         if (this.index < this.imagesContainer.length - 1) {
//           this.index++;
//           this.eeveeImage = event.target
//           this.eeveeImage.src = this.imagesContainer[this.index]
//         } else if (this.index > this.imagesContainer.length - 1) {
//           this.index = this.imagesContainer.length - 1
//           this.eeveeImage = event.target
//           this.eeveeImage.src = this.imagesContainer[this.index]
//         }
//         this.ballAlreadyBroken = true
//       } else if (this.pokeballBroken === 0 && this.ballAlreadyBroken === false) {
//         this.eeveeImage = event.target
//         this.eeveeImage.src = this.imagesContainer[this.index]
//         this.toggleShake(this.eeveeImage)

//       } else if (this.pokeballBroken === 0 && this.ballAlreadyBroken === true) {

//         if (this.index < this.imagesContainer.length - 1) {
//           this.index++;
//           this.eeveeImage = event.target
//           this.eeveeImage.src = this.imagesContainer[this.index]
//         } else if (this.index > this.imagesContainer.length - 1) {
//           this.index = this.imagesContainer.length - 1
//           this.eeveeImage = event.target
//           this.eeveeImage.src = this.imagesContainer[this.index]
//         }
//       }

//     }.bind(this));
//   }
// }


// const EeveeInstance = new EeveeClass()
// EeveeInstance.displayInitialForm()
// EeveeInstance.changeForm()
// EeveeInstance.eeveeImage.setAttribute('class', 'eeveeForms')

// EeveeInstance.eeveeImage.setAttribute('class', 'eeveeForms')

// eeveeGroup.append(EeveeInstance.eeveeImage)
// document.body.append(eeveeGroup)

// console.log(Pokemon instanceof Flowers)

