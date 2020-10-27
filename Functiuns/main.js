

  //Exercise 1

const calcAge = function(curYear,birthYear) {
    return curYear - birthYear
}

  const age = calcAge(2017, 1989)
  console.log(age)

  //Exercise 2

  const calcAge2 = function(curYear,birthYear) {
      let older = curYear - birthYear
      let yonger = curYear - birthYear -1
      console.log(`You are either ${older} or ${yonger} years old`)
  }
  const age = calcAge2(2018,2015)

 //Exercise 3

 const isEven = function (number) {
     if (number % 2 == 0)
     { return true } else { return false }
 }
 const num = isEven(28)
 console.log(num)

 //Exercise 4
const findOddNumbers = function(numbers) {
  let n = []
    for (let number of numbers) { if
      (isEven(number) == false) { n.push(number) }
  }
  return n
}

 const nums = [2, 4, 5, 11, 7]
 const oddNumbers = findOddNumbers(nums)
 console.log(oddNumbers);

 //Exercise 5

 const checkExist = function (arr,num) {
    for (let n in arr) {
        if (arr[n] == num) {return true} else {return false}
    } }
   
 const array = [5, 10,36,3,8]

 const check2 = checkExist(array,4)
 console.log(check2)

 //Exercise 6

 const calculator = {
     add: function (a,b) { return a+b },
     cubstract: function (a,b) { return a-b }
    }
    const result1 = calculator.add(41,2)
    const result2 = calculator.cubstract(36,3)
    console.log(result1)
    console.log(result2)

//Exercise 7

const increaseByNameLength = function(money,name) {
    return money*name.length
}
const makeRegal = function(name) {
    let regal = 'His Royal Highness ' + name
    return regal
}
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100)

//Extension - Splice Challenge

/*const splice = function(arr,start,deleteCount, ...itemsToAdd) {
const arrayToReturn = []
    if (satrt>arr.length) {
     return arrayToReturn.push(...items)
  } else if (arr.lenght>start) { */

//  }
// pitaron 1 = []
// const arrayToReturn = []
// for ..
// pitaron 2

// if ( itemsToAdd.length > 0 ){
//     console.log(' replace 1 element');
// }
// if ( itemsToAdd[0] < 0){
//     console.log('add 2 elements');
// }
//}

// Functions Optional

people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]
  const capitalize = function(str){
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); 
    capitalizedStr += str.slice(1) 
    return capitalizedStr
  }
  const getAge = function(age) {
      if (age < 21) {return ' an Underage'} else if (age > 55) {
          return '55+'
      } else { return age }
  }
 

  const getSummary = function(person){
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} ` 
    summary += capitalize(person.profession)
    summary += ` from ${capitalize(person.country)}, ${capitalize(person.city)}.`
    summary += capitalize(person.name)
    summary += ` loves to say ${capitalize(person.catchphrase)}`
 return summary }

   

    for (let p of people_info) {
        console.log (getSummary(p))
    }

    //next
    const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
    const specialChars = [",", ".", "'", '"',"?", "!", ";"]
    const wordCounts = {}