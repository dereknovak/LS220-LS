/*

You have been given a JSON object that contains keys in 4 cases 
(camelCase, snake_case, PascalCase, kebab-case). Your task is to 
implement a function that will normalize all the keys to camelCase.

Write a function `normalizeKeys(jsonObject)` that takes a JSON object 
as input and returns a new JSON object with all keys converted to 
camelCase. You can assume that the input JSON object only contains 
string keys, string values, and nested JSON objects as values (no arrays 
or other types).

Notes
The function should maintain the structure of the input JSON while changing the keys.
You can assume that the input JSON is well-formed and the keys properly follow one of the 4 
casing conventions (camelCase, snake_case, PascalCase, kebab-case).

Constraints:
The input JSON object will have at most 100 keys.
The input JSON object will be limited to a depth of 5.
The length of each key is at most 50 characters.
Don’t use regex - this makes the problem more challenging which results in better practice.


input:
{
"first_name": "John",
"last_name": "Doe",
"contact_info": {
"email_address": "john@example.com",
"phone_number": "123-456-7890"
}
}

output:
{
"firstName": "John",
"lastName": "Doe",
"contactInfo": {
"emailAddress": "john@example.com",
"phoneNumber": "123-456-7890"
}
}
*/

function normalizeKeys(obj) {
  const newObj = {};

  for (let key in obj) {
    let newKey = convertToCamel(key);
    let val = obj[key];

    newObj[newKey] = typeof val === 'object' ? normalizeKeys(val) : val;
  }

  return newObj;
}

function convertToCamel(string) {
  const words = string.includes('-') ? string.split('-') : string.split('_');

  return words.map((word, idx) => {
    if (idx > 0) {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      return word[0].toLowerCase() + word.slice(1);
    }
  }).join('');
}

let p = console.log;

console.log('snake_case');
p(
  normalizeKeys({
    first_name: "John",
    last_name: "Doe",
    contact_info: {
      email_address: "john@example.com",
      phone_number: "123-456-7890",
    },
  }),
); // test snake_case
p('');

console.log('kebab-case');
p(
  normalizeKeys({
    "first-name": "John",
    "last-name": "Doe",
    "contact-info": {
      "email-address": "john@example.com",
      "phone-number": "123-456-7890",
    },
  }),
); // test kebab-case
console.log('');

console.log('camelCase');
p(
  normalizeKeys({
    firstName: "John",
    lastName: "Doe",
    contactInfo: {
      emailAddress: "john@example.com",
      phoneNumber: "123-456-7890",
    },
  }),
); // test: if already camelCase, leave as is
p('');

console.log('PascalCase and Deep nest');
p(
  normalizeKeys({
    FirstName: "John",
    LastName: "Doe",
    ContactInfo: {
      EmailAddress: "john@example.com",
      PhoneNumber: "123-456-7890",
    },
    DeeplyNested: {
      FirstObj: {
        SecondObj: {
          ThirdObj: "done",
        },
      },
    },
  }),
); // test PascalCase & a deeply nested obj