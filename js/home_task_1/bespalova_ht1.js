console.log ('Hello!');
console.group ('Console methods');
console.error ('Error!');
console.warn ('Warning!');
console.info ('Some text');
console.groupEnd ();

let person = {
  info : { 
    age: 32,
    name: 'Marianna',
    surname: 'Bespalova'
  },
  contacts: {
    phone: '+380631230467',
    address: 'Kanatnaya, 22'
  }
}

console.table (person);
console.clear();



var result = prompt ("как звать?");
console.log (result, typeof result);

let isGreater = 4>1;

console.log (typeof isGreater);


let a = 1;
a = 2;
alert (a)