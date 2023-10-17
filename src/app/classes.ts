// /////////////////////////////// //
// /////////// Classes /////////// //
// /////////////////////////////// //

export let vehiclesArr: any[] = [];
let passengerCarArr: PassengerCar[] = [];
let truckArr: Truck[] = [];
let motorbikeArr: Motorbike[] = [];
let busArr: Bus[] = [];
// console.log(vehiclesArr);
// /////////// Vehicle /////////// //
class Vehicle {
  mark: string;
  model: string;
  color: string;
  mileage: number;
  seatsNumber?: number;
  fuelType: string;
  year: number;
  condition: string;
  consumption: number;
  price: number;
  wheels?: number;
  img: string;

  constructor(
    mark: string,
    model: string,
    color: string,
    mileage: number,
    seatsNumber: number,
    fuelType: string,
    year: number,
    condition: string,
    consumption: number,
    price: number,
    wheels: number,
    img: string
  ) {
    this.mark = mark;
    this.model = model;
    this.color = color;
    this.mileage = mileage;
    this.seatsNumber = seatsNumber;
    this.fuelType = fuelType;
    this.year = year;
    this.condition = condition;
    this.consumption = consumption;
    this.price = price;
    this.wheels = wheels;
    this.img = img;

    vehiclesArr.push(this);
  }

  // shortDescription() {
  //   return `
  //   <ul>
  //   <li>Condition: ${this.condition}</li>
  //   <li>Color: ${this.color}</li>
  //   <li>Mileage: ${this.mileage} km</li>
  //   <li>Year of production: ${this.year}</li>
  //   </ul>
  //   `;
  // }

  // description() {
  //   const func2: any = document.querySelectorAll('.func2');
  //   func2.innerHTML += `
  //   <ul>
  //   <li>number of seats: ${this.seatsNumber}</li>
  //   <li>Fuel type: ${this.fuelType}</li>
  //   <li>Fuel consumption: ${this.consumption} liter/km</li>
  //   </ul>
  //   `;
  // <li>Condition: ${this.condition}</li>
  // <li>Color: ${this.color}</li>
  // <li>Mileage: ${this.mileage}</li>
  // <li>Year of production: ${this.year}</li>
  //   }
}
// /////////// Passenger car /////////// //

class PassengerCar extends Vehicle {
  doors: number;
  drive: string;
  constructor(
    mark: string,
    model: string,
    color: string,
    mileage: number,
    seatsNumber: number,
    fuelType: string,
    year: number,
    condition: string,
    consumption: number,
    price: number,
    wheels: number,
    img: string,
    doors: number,
    drive: string
  ) {
    super(
      mark,
      model,
      color,
      mileage,
      seatsNumber,
      fuelType,
      year,
      condition,
      consumption,
      price,
      wheels,
      img
    );
    this.doors = doors;
    this.drive = drive;

    passengerCarArr.push(this);
  }
}

// /////////// Truck /////////// //

class Truck extends Vehicle {
  type: string;
  capacity: number;
  winches: number;
  constructor(
    mark: string,
    model: string,
    color: string,
    mileage: number,
    seatsNumber: number,
    fuelType: string,
    year: number,
    condition: string,
    consumption: number,
    price: number,
    wheels: number,
    img: string,
    type: string,
    capacity: number,
    winches: number
  ) {
    super(
      mark,
      model,
      color,
      mileage,
      seatsNumber,
      fuelType,
      year,
      condition,
      consumption,
      price,
      wheels,
      img
    );
    this.type = type;
    this.capacity = capacity;
    this.winches = winches;

    truckArr.push(this);
  }
  // override description() {
  //   return `
  //   <ul>
  //   <li>Type: ${this.type}</li>
  //   <li>Capacity: ${this.capacity}</li>
  //   <li>Year of production: ${this.year}</li>
  //   <li>Fuel type: ${this.fuelType}</li>
  //   <li>Winches: ${this.winches}</li>
  //   </ul>
  //   `;
  // <li>Condition: ${this.condition}</li>
  // <li>Mileage: ${this.mileage}</li>
  // }
}

// /////////// Motorbike /////////// //

class Motorbike extends Vehicle {
  // wheels: number;
  drive: string;
  motor: string;
  constructor(
    mark: string,
    model: string,
    color: string,
    mileage: number,
    seatsNumber: number,
    fuelType: string,
    year: number,
    condition: string,
    consumption: number,
    price: number,
    wheels: number,
    img: string,
    drive: string,
    motor: string
  ) {
    super(
      mark,
      model,
      color,
      mileage,
      seatsNumber,
      fuelType,
      year,
      condition,
      consumption,
      price,
      wheels,
      img
    );
    this.drive = drive;
    this.motor = motor;

    motorbikeArr.push(this);
  }
  // override description() {
  //   return `
  //   <ul>
  //   <li>Fuel type: ${this.fuelType}</li>
  //   <li>Тumber of wheels: ${this.wheels}</li>
  //   <li>Drive: ${this.drive}</li>
  //   <li>Motor: ${this.motor}</li>
  //   </ul>
  //   `;
  // <li>Condition: ${this.condition}</li>
  // <li>Mileage: ${this.mileage}</li>
  // <li>Year of production: ${this.year}</li>
  // }
}

// /////////// Bus /////////// //

class Bus extends Vehicle {
  luggageRack: string;
  readingLights: string;
  constructor(
    mark: string,
    model: string,
    color: string,
    mileage: number,
    seatsNumber: number,
    fuelType: string,
    year: number,
    condition: string,
    consumption: number,
    price: number,
    wheels: number,
    img: string,
    luggageRack: string,
    readingLights: string
  ) {
    super(
      mark,
      model,
      color,
      mileage,
      seatsNumber,
      fuelType,
      year,
      condition,
      consumption,
      price,
      wheels,
      img
    );
    this.luggageRack = luggageRack;
    this.readingLights = readingLights;

    busArr.push(this);
  }
  // override description() {
  //   return `
  //   <ul>
  //   <li>number of seats: ${this.seatsNumber}</li>
  //   <li>Luggage rack: ${this.luggageRack}</li>
  //   <li>Reading lights: ${this.readingLights}</li>
  //   </ul>
  //   `;
  // <li>Condition: ${this.condition}</li>
  // <li>Color: ${this.color}</li>
  // <li>Mileage: ${this.mileage}</li>
  // <li>Year of production: ${this.year}</li>
  // }
}

// /////////////////////////////// //
// /////////// Objects /////////// //
// /////////////////////////////// //

// Creating 6 PassengerCar objects
const passengerCar1 = new PassengerCar(
  'Toyota',
  'Camry',
  'Blue',
  50000,
  5,
  'Petrol',
  2019,
  'Used',
  30,
  20000,
  4,
  'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  4,
  'Front-Wheel Drive'
);
const passengerCar2 = new PassengerCar(
  'Honda',
  'Civic',
  'Red',
  40000,
  5,
  'Petrol',
  2018,
  'Used',
  28,
  18000,
  4,
  'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  4,
  'Front-Wheel Drive'
);
const passengerCar3 = new PassengerCar(
  'Ford',
  'Focus',
  'Silver',
  35000,
  5,
  'Petrol',
  2017,
  'Used',
  26,
  16000,
  4,
  'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  4,
  'Front-Wheel Drive'
);
const passengerCar4 = new PassengerCar(
  'Chevrolet',
  'Malibu',
  'Black',
  30000,
  5,
  'Petrol',
  2016,
  'Used',
  25,
  15000,
  4,
  'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  4,
  'Front-Wheel Drive'
);
const passengerCar5 = new PassengerCar(
  'Nissan',
  'Altima',
  'White',
  25000,
  5,
  'Petrol',
  2015,
  'Used',
  24,
  14000,
  4,
  'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  4,
  'Front-Wheel Drive'
);
const passengerCar6 = new PassengerCar(
  'Kia',
  'Optima',
  'Gray',
  20000,
  5,
  'Petrol',
  2014,
  'Used',
  22,
  13000,
  4,
  'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  4,
  'Front-Wheel Drive'
);

// Creating 6 Truck objects
const truck1 = new Truck(
  'Volvo',
  'FH16',
  'Red',
  100000,
  2,
  'Diesel',
  2018,
  'Used',
  12,
  80000,
  8,
  'https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRydWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  'Concrete mixer',
  30000,
  2
);
const truck2 = new Truck(
  'Mercedes-Benz',
  'Actros',
  'Blue',
  90000,
  2,
  'Diesel',
  2017,
  'Used',
  11,
  75000,
  8,
  'https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRydWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  'Truck crane',
  28000,
  1
);
const truck3 = new Truck(
  'Scania',
  'R-series',
  'Green',
  80000,
  2,
  'Diesel',
  2016,
  'Used',
  10,
  70000,
  8,
  'https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRydWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  'Flatbed/Tarpaulin',
  32000,
  0
);
const truck4 = new Truck(
  'MAN',
  'TGX',
  'Yellow',
  70000,
  2,
  'Diesel',
  2015,
  'Used',
  9,
  65000,
  8,
  'https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRydWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  'Other',
  34000,
  0
);
const truck5 = new Truck(
  'Iveco',
  'Stralis',
  'Orange',
  60000,
  2,
  'Diesel',
  2014,
  'Used',
  8,
  60000,
  8,
  'https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRydWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  'Tipper trailers',
  31000,
  2
);
const truck6 = new Truck(
  'Kenworth',
  'W990',
  'Purple',
  50000,
  2,
  'Diesel',
  2013,
  'Used',
  7,
  55000,
  8,
  'https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRydWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  'Flatbed/Tarpaulin',
  30000,
  0
);

// Creating 6 Motorbike objects
const motorbike1 = new Motorbike(
  'Harley-Davidson',
  'Sportster',
  'Black',
  15000,
  2,
  'Petrol',
  2021,
  'New',
  45,
  12000,
  2,
  'https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  'Rear-Wheel Drive',
  'V-twin'
);
const motorbike2 = new Motorbike(
  'Kawasaki',
  'Ninja',
  'Green',
  12000,
  2,
  'Petrol',
  2020,
  'New',
  40,
  11000,
  2,
  'https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  'Rear-Wheel Drive',
  'Inline-four'
);
const motorbike3 = new Motorbike(
  'Ducati',
  'Panigale',
  'Red',
  10000,
  2,
  'Petrol',
  2019,
  'Used',
  35,
  10000,
  2,
  'https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  'Rear-Wheel Drive',
  'V-twin'
);
const motorbike4 = new Motorbike(
  'BMW',
  'S1000RR',
  'Blue',
  8000,
  2,
  'Petrol',
  2018,
  'Used',
  30,
  9500,
  2,
  'https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  'Rear-Wheel Drive',
  'Inline-four'
);
const motorbike5 = new Motorbike(
  'Suzuki',
  'GSX-R1000',
  'Yellow',
  6000,
  2,
  'Petrol',
  2017,
  'Used',
  28,
  9000,
  2,
  'https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  'Rear-Wheel Drive',
  'Inline-four'
);
const motorbike6 = new Motorbike(
  'Yamaha',
  'R1',
  'White',
  4000,
  2,
  'Petrol',
  2016,
  'Used',
  25,
  8500,
  2,
  'https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  'Rear-Wheel Drive',
  'Inline-four'
);

// Creating 6 Bus objects
const bus1 = new Bus(
  'Mercedes-Benz',
  'Sprinter',
  'White',
  80000,
  20,
  'Diesel',
  2017,
  'Used',
  8,
  50000,
  6,
  'https://images.unsplash.com/photo-1596979240348-970331045946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxCdXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  'Yes',
  'Yes'
);
const bus2 = new Bus(
  'Volkswagen',
  'Crafter',
  'Blue',
  75000,
  18,
  'Diesel',
  2016,
  'Used',
  7,
  48000,
  6,
  'https://images.unsplash.com/photo-1596979240348-970331045946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxCdXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  'Yes',
  'Yes'
);
const bus3 = new Bus(
  'Ford',
  'Transit',
  'Green',
  70000,
  16,
  'Diesel',
  2015,
  'Used',
  6,
  45000,
  6,
  'https://images.unsplash.com/photo-1596979240348-970331045946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxCdXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  'Yes',
  'Yes'
);
const bus4 = new Bus(
  'Iveco',
  'Daily',
  'Yellow',
  65000,
  14,
  'Diesel',
  2014,
  'Used',
  5,
  42000,
  6,
  'https://images.unsplash.com/photo-1596979240348-970331045946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxCdXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  'Yes',
  'Yes'
);
const bus5 = new Bus(
  'Renault',
  'Master',
  'Orange',
  60000,
  12,
  'Diesel',
  2013,
  'Used',
  4,
  40000,
  6,
  'https://images.unsplash.com/photo-1596979240348-970331045946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxCdXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  'Yes',
  'Yes'
);
const bus6 = new Bus(
  'Peugeot',
  'Boxer',
  'Purple',
  55000,
  10,
  'Diesel',
  2012,
  'Used',
  3,
  38000,
  6,
  'https://images.unsplash.com/photo-1596979240348-970331045946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxCdXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  'Yes',
  'Yes'
);

// console.log(passengerCar1);

// Gepäcknetze
// Gepäckablage li+re
// Leseleuchten

// Drive chain or belt
// Motor 4-Takt or 2-Takt

// used, Benzin, 0 l/100 km (komb.)*, 170 g/km (komb.)*

// EZ 02/2020
// 245 PS (180kW)
// 36 000 km
// € 39 990,-

// 4WD
// all-wheel drive
// front-wheel drive
// rear-wheel drive

// Getriebe Schaltgetriebe

// moto
// Type:
/// Concrete mixer
/// Truck crane
/// Other
/// Flatbed/Tarpaulin
/// Tipper trailers
