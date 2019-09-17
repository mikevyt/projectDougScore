import random
import string
# TODO: Define firestore

MIN_YEAR = 2014
MAX_YEAR = 2019

MIN_PRICE = 79.99
MAX_PRICE = 99.99

COLORS = [
    u"red",
    u"blue",
    u"silver",
    u"yellow",
    u"grey",
    u"green",
    u"black",
    u"white"
]

CARS = {
    u"Land Rover": [u"Evoque", u"Range Rover", u"Discovery"],
    u"Lamborghini": [u"Huracan", u"Urus", u"Aventador"],
    u"Porsche": [u"Cayenne", u"911", u"Panamera"],
    u"BMW": [u"i8", u"M3", u"Z4"],
    u"McLaren": [u"P1", u"570S", u"720S"],
}

def get_year() -> int:
    return random.randint(MIN_YEAR, MAX_YEAR)

def get_color() -> str:
    random_index = random.randrange(len(COLORS) - 1)
    return COLORS[random_index]

def get_car() -> (str, str):
    make = random.choice(list(CARS))
    random_model_index = random.randrange(len(CARS[make]) - 1)
    model = CARS[make][random_model_index]

    return (make, model)

def get_price() -> float:
    return round(random.uniform(MIN_PRICE, MAX_PRICE), 2)

def generate_license_plate() -> str:
    text = u"".join(random.choice(string.ascii_uppercase) for _ in range(4))
    number = random.randint(100, 999)
    return u"{} {}".format(text, number)

def generate_vehicles(amount: int):
    for _ in range(amount):
        year = get_year()
        color = get_color()
        price = get_price()
        make, model = get_car()
        license_plate = generate_license_plate()
        description = "A {} {} {} {} with lp {}.".format(color, year, make, model, license_plate)

        data = {
            "licensePlate": license_plate,
            "year": year,
            "make": make,
            "model": model,
            "color": color,
            "rentalPrice": price,
            "description": description
        }

        print(data)

generate_vehicles(20)
