// Scope - Exercise
//===================================================================================
//Section 1
//===================================================================================
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}


//console.log("Damn, you see this gal? She ran " + distance + " miles")    
    //===================================================================================//Section 2//===================================================================================
if (13 == "space") {
    let cowSound = "moo"
}
else {
   // console.log("Cow says " + cowSound)
}

//===================================================================================
//Section 3
//===================================================================================
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)

//===================================================================================
//Section 4
//===================================================================================
const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + getSeed + " inside a " + pot)
}

plant()

//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    let found
    for (let u of users) {
        
        if (u.name == name) {
            found = true
        }
    }
    return found  
}


const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}

//===================================================================================
//Section 6 - Optional (if you have time)
//===================================================================================
let isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 4; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}


// JS this

//Exercise1

const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        this.hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }
  
  person.feed() //should alert "I'm no longer hungry"

  //Exercise2

  const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have  liters: ', garage.car2.liters);

  //Exercise 3

  const pumpFuel = function (plane) {
    plane.fuel += 1;
  };

  const airplane = {
      fuel: 0,
      fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
 
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());

  //Exercise4

  
  
  //Exercise5

  const revealSecret = function () {
    return this.secret;
  };
  
  const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " + result);
  };
  
  const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
  };
  
  const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret); 

  //Exercise6

  const coffeeShop = {
    beans: 40,
    money: 15,
  
    drinkRequirements: {
      latte: {beanRequirement: 10, price: 10},
      americano: {beanRequirement: 5, price: 5},
      doubleShot: {beanRequirement: 15, price: 15},
      frenchPress: {beanRequirement: 12, price: 12}
    },
  
    
  };
 
  const isAvailable = function(drinkType){
     let drinks = Object.keys(this.drinkRequirements);
     for(let drink of drinks) {
      if(drink === drinkType){
          return true
      }
  }


  return false
};

const hasEnoughBeans =  function(drinkType) {
  if(this.beans > this.drinkRequirements[drinkType].beanRequirement) {
      return true
  } else {return false}
};
const useBeans = function(drinkType) {
  this.beans -= this.drinkRequirements[drinkType].beanRequirement;
	    
};
const makeDrink = function (drinkType) {
   if (!this.hasenoughBeans(drinkType)) {
    alert('Sorry, we are all out of beans');
  } else { this.useBeans(drinkType); }
};

const buyDrink = function (drinkType) {
  if(this.hasDrink(drinkType)) {rhis.money += this.drinkRequirements[drinkType].price
  this.makeDrink(drinkType) } else {alert('Sorry, we dont`t make' + drinkType) }
};

  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"


