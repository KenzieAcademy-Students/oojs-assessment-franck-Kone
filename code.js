// This function is provided to shake an image.  Use it every time the user clicks on a pokemon.
// Feel free to delete this function and include it as a method within your classes...
const toggleShake = function (element) {
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

const main = document.querySelector("main");

// Your Code Here
// let image = document.createElement('img')
// image.src = 'images/pokeball.png'
// image.setAttribute('style', 'width: 300px; height:300px')
// toggleShake(image)
// main.append(image)

class Flowers {
  constructor() {
    this.image = document.createElement('img');
    this.imagePaths = ['images/flower/flower0.png', 'images/flower/flower1.png', 'images/flower/flower2.png'];
    this.index = 0;

  }

  growingFlowers() {
    this.image.addEventListener('click', function(){
    if(this.index < this.imagePaths.length-1){
      this.index++
      this.image.src = this.imagePaths[this.index]

    } else if (this.index > this.imagePaths.length -1){
      this.index = this.imagePaths.length -1
      this.image.src = this.imagePaths[this.index]
    }
      console.log(this.index)

    }.bind(this))
    main.append(this.image)
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
  displaying() {
    this.image.src = this.imagePaths[this.index]
    main.append(this.image)
  }
}
const CreateFlower = new Flowers()
CreateFlower.displaying()
CreateFlower.growingFlowers()
