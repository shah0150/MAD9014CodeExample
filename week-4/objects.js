
// JavaScript objects are used to store and organize data in key-value pairs, making them a fundamental data structure in software development.

// Purpose: Objects in JavaScript are like containers that allow you to group related data and functions together. They are used to represent real-world entities or concepts.

// Visualization Idea: Think of an object as a backpack. Inside this backpack, you can store various items, and each item has a label or tag that helps you identify it.

const users = {
    fullName: "Adesh Shah",
    email: "shaha@algonquincollege.com",
    birthdate: "1985-03-25",
    isAdmin: true
}

console.table(users);

const productInformation = {
    name: "Macbook Pro",
    price: 2000,
    description: "MADD forced us to buy MacBooks",
    ratings: 4.5,
    imageUrl: 'macbook.jpeg'
}

console.table(productInformation);

// Settings configuration for mobile application. Create an object that stores themes, langauge, and notifications. (Dylan)

const settings = {
    themes: "Dark mode",
    language: "english-ca",
    notifications: false
}
console.table(settings)

// You are developing a task management application for Apple Reminder app, create a object to store task details: title, dueDate, priority and completedStatus (Sayed)
const appleReminderApp = {
    title: "iphone 15 discounte",
    dueDate: "2023-12-31",
    priority: "students",
    completedStatus: "completed"

}
console.table(appleReminderApp)

// You are working for Google Maps, your manager wants you to create an object for location data that takes in lat, long, city, timeZone (Aman)
const location = {
    lat: 45,
    long: -75,
    city: "ottawa",
    timeZone: "GMT",
}
console.table(location)