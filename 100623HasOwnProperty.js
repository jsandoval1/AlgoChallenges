/* 
  Recreate Object.entries() method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array

  Bonus: Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
};
// const expected1 = [["name", "Pizza"], ["calories", 9001]];

// for (let someKey in obj1) {
//     console.log(someKey, obj1[someKey])
// }

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 99,
};

const proto = {
    inheritedKey: "inherited value",
    keyOnProto: "value from proto"
};

const obj3 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 99,
});

// 1. DRIVER 🚗
// 2. PRESENTER 👩‍🏫👨‍🏫
// 3. NAVIGATOR 🧭

function entries(someObj) {
    const result = [];
    for (let key in someObj) {
        if (someObj.hasOwnProperty(key)) {
            result.push([key, someObj[key]]);
        }
    }
    return result;
}

console.log(entries(obj1)); // [["name", "Pizza"], ["calories", 9001]]
console.log(entries(obj2)); // [["firstName", "Foo"], ["lastName", "Bar"], ["age", 99]]
console.log(entries(obj3)); // [["firstName", "Foo"], ["lastName", "Bar"], ["age", 99]]