//Sets

let mySet = new Set()

//add values
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(1) //Ignore because duplicate

console.log(mySet);

//Maps

let myMap = new Map()
myMap.set('name', 'Rikin')
myMap.set('age', 35)
myMap.set('isStudent', true)
myMap.set('isStudent', false)

console.log(myMap);

// Set to store a unique list of values and a Map to associate additional information with those values

let uniqueNumbers = new Set()

uniqueNumbers.add(1)
uniqueNumbers.add(2)
uniqueNumbers.add(3)

let numberInfo = new Map()

numberInfo.set(1, 'One')
numberInfo.set(2, 'Two')
numberInfo.set(3, "Three")

for (let number of uniqueNumbers){
    console.log(`${number}: ${numberInfo.get(number)}`);
}


