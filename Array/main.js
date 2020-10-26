//Arrays Exercise1

let genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
let crud = [...genes]
crud[2] = genes[4]
crud[4] = genes[2]
crud.splice(3,1)
crud.push(genes[3])
crud.push(genes[3])
crud.unshift('FXT')
console.log(crud)

//Objects Exrcise1
let p1 = {
    name: "Peter",
    age: 28,
    city: 'New york'
}
let p2 = {
    name: "Paula",
    age: 28,
    city: 'Tel Aviv'
} 
if (p1.age == p2.age && p1.city == p2.city) { console.log(p1.name + ' wanted to date ' + p2.name) }
else if (p1.age == p2.age && p1.city !== p2.city) {
    console.log(p1.name + ' wanted to date ' + p2.name + ',but couldn"t')
}

//Exercise 2
let myList = [
    { name: 'flat1',
      size: 50 },
    { name: 'flat2',
      size: 90 }
]
myList[0].size = 75
myList.splice(1,1)
console.log(myList)

//Exercise 3
let yourList = [
    { name: 'flat4',
      size: 60 },
    { name: 'flat3',
      size: 35 }

]
myList.push(...yourList)
console.log(myList)

//Exercise4
let library = {
    books: [ { title:'One Hundred Years of Solitude',
               author: 'Gabriel García Márquez' }, 
             { title: 'Invisible Man',
                author: 'Ralph Ellison' } ]
}
console.log(library)
myList.push(library.books)
console.log(myList)

//Exercise5
const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  };

  const name = prompt('Please enter the name for your reservation');
  name.toLowerCase()
if (reservations[name] && !reservations[name].claimed) {
    console.log('Welcome ' + name) }
    else if (reservations[name] && reservations[name].claimed) {
        console.log("Hmm, someone already claimed this reservation")
    } else if (!reservations[name]) {
        console.log('You have no reservation')
        reservations[name] = { claimed:true }
       
    }
 
 //Extensions
 const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false,
    fridge: {
        price: 500,
        works: false,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
const dateRaddish = kitchen.fridge.items[1].expiryDate
if (date - dateRaddish == 1 && kitchen.hasOven && kitchen.fridge.works) {  
    console.log('You have an oven to cook the raddish in') }
else if (date - dateRaddish == 1 && !kitchen.hasOven && kitchen.fridge.works)
 { console.log('Too bad she doesn"t have an oven to cook the raddish in.') }
else if (date - dateRaddish == 1 && kitchen.hasOven && !kitchen.fridge.works)
{ console.log(' Luckily, you have an oven to cook the raddish in. And you will have to pay ' +  kitchen.fridge.price/2 + ' to fix the fridge.')}
else if (date - dateRaddish == 1 && !kitchen.hasOven && !kitchen.fridge.works) {
    console.log(' Too bad, you do not have an oven to cook the raddish in. And you will have to pay ' +  kitchen.fridge.price/2 + ' to fix the fridge.')
}
