function Unit(type, health, maxHealth, maxDistance) {
  this.type = type;
  this.health = health;
  this.maxHealth = maxHealth;
  this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove = function (distance) {
  return distance <= this.maxDistance;
};

Unit.prototype.isReadyToFight = function () {
  return this.health >= this.maxHealth / 2;
};

Unit.prototype.restore = function () {
  if (this.injures > 0) {
    this.health = this.maxHealth;
  }
  return this.health;
};

Unit.prototype.clone = function () {
  let cloneUnit = new Unit();
  cloneUnit = Object.create(
    Object.getPrototypeOf(this),
    Object.getOwnPropertyDescriptors(this)
  );
  return cloneUnit;
};

function Army(defaultUnits) {
  this.units = [];
  if (defaultUnits) this.combineUnits(defaultUnits);
}

Army.prototype.isReadyToMove = function (distance) {
  return this.units.every(unit => unit.isReadyToMove(distance));
};

Army.prototype.isReadyToFight = function () {
  return this.units.every(unit => unit.isReadyToFight())
};

Army.prototype.restore = function () {
  for (const unit of this.units) {
    if (unit.injures > 0) {
      unit.restore();
    }
  }
};

Army.prototype.getReadyToMoveUnits = function (distance) {
  return this.units.filter(unit => unit.isReadyToMove(distance))
};

Army.prototype.combineUnits = function (newArmy) {
  this.units = this.units.concat(newArmy);
};

Army.prototype.cloneUnit = function (unitNumber) {
  const unit = this.units[unitNumber];
  if (unit !== undefined) {
    return unit.clone();
  }
};



const myArmy = [
  new Unit("пехота", 100, 200, 15),
  new Unit("кавалерия", 20, 100, 30),
  new Unit("артиллерия", 100, 200, 20),
  new Unit("танковые войска", 30, 50, 100),
  new Unit("химические войска", 40, 50, 15)
];


myArmy[1].injures = 1;
myArmy[3].injures = 2;
console.log(`Unit1 is ready to move - ${myArmy[0].isReadyToMove(20)}`);
console.log(`Unit2 is ready to move - ${myArmy[1].isReadyToMove(30)}`);
console.log(`Unit1 is ready to fight - ${myArmy[0].isReadyToFight()}`);
console.log(`Unit2 is ready to fight - ${myArmy[1].isReadyToFight()}`);

myArmy[3].restore();
console.log("Unit4 was restored", myArmy[3]);

const unit6 = myArmy[4].clone()
console.log("Unit6 is a clone of unit5", unit6);


const army = new Army(myArmy);
console.log(`Army is ready to move - ${army.isReadyToMove(30)}`);
console.log(`Army is ready to fight - ${army.isReadyToFight()}`);
army.restore();
console.log(`Is army ready to fight after restore? - ${army.isReadyToFight()}`);
console.log("Who is ready to move?", army.getReadyToMoveUnits(20));

const reinforcement = [
  new Unit("пехота", 100, 200, 15),
  new Unit("кавалерия", 20, 100, 30),
  new Unit("артиллерия", 100, 200, 20),
  new Unit("танковые войска", 30, 50, 100),
  new Unit("химические войска", 40, 50, 15)
];
army.combineUnits(reinforcement);
console.log("Who is ready to move after reinforcement?", army.getReadyToMoveUnits(20));

console.log("This is my army", army)

const newClone = army.cloneUnit(8);
console.log("This is a clone of unit9", newClone);
