const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: 'AIzaSyB3I8sBayixeR9yQFYLQML_5O6bGZqb0HI', // for the purposes of demoing, I've left the API key public
    projectId: 'projectdougscore'
});

const collection = firebase.firestore().collection('vehicles');

const MIN_YEAR = 2014;
const MAX_YEAR = 2019;

const MIN_PRICE = 79.99;
const MAX_PRICE = 99.99;

const COLORS = [
    "red",
    "blue",
    "silver",
    "yellow",
    "grey",
    "green",
    "black",
    "white"
];

const CARS = {
    "Land Rover": ["Evoque", "Range Rover", "Discovery"],
    "Lamborghini": ["Huracan", "Urus", "Aventador"],
    "Porsche": ["Cayenne", "911", "Panamera"],
    "BMW": ["i8", "M3", "Z4"],
    "McLaren": ["P1", "570S", "720S"],
};

function getRandRange(minNum, maxNum) {
    const min = Math.ceil(minNum);
    const max = Math.floor(maxNum);
    return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
}

function getYear() {
    return getRandRange(MIN_YEAR, MAX_YEAR);
}

function getColor() {
    const index = Math.floor(Math.random() * COLORS.length);
    return COLORS[index];
}

function getCar() {
    const carsAsArray = Object.keys(CARS);
    const makeIndex = Math.floor(Math.random() * carsAsArray.length);
    const make = carsAsArray[makeIndex];
    const modelIndex = Math.floor(Math.random() * CARS[make].length);
    model = CARS[make][modelIndex]

    return [make, model]
}

function getPrice() {
    const min = Math.ceil(MIN_PRICE);
    const max = Math.floor(MAX_PRICE);
    return (Math.random() * (max - min) + min).toFixed(2);
}

function generateLicensePlate() {
    const text = generateRandomString(4);
    const number = getRandRange(100, 999);
    return `${text} ${number}`;
}

function generateRandomString(length){
    let randomString = '';
    let randomAscii;
    let asciiLow = 65;
    let asciiHigh = 90
    for(let i = 0; i < length; i++) {
        randomAscii = Math.floor((Math.random() * (asciiHigh - asciiLow)) + asciiLow);
        randomString += String.fromCharCode(randomAscii)
    }
    return randomString
}
// def generate_license_plate() -> str:
//     text = "".join(random.choice(string.ascii_uppercase) for _ in range(4))
//     number = random.randint(100, 999)
//     return "{} {}".format(text, number)

async function generateVehicles(amount) {
    for (var i = 0; i < amount; i++) {
        const year = getYear();
        const color = getColor();
        const price = getPrice();
        const [make, model] = getCar();
        const licensePlate = generateLicensePlate();
        const description = `A ${year} ${color} ${make} ${model} with lp ${licensePlate}`;

        const data = {
            year,
            color,
            price,
            make,
            model,
            licensePlate,
            description,
        }

        await collection.add(data);
    }
}

generateVehicles(10);
