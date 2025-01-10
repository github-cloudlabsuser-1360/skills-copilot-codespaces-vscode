const data = [
    [
        { name: "John", age: 28 },
        { name: "Jane", age: 32 }
    ],
    [
        { name: "Bob", age: 24 }
        { name: "Alice", age: 29 }
    ]
];

const names = data.flatMap(array => array.map(person => person.name));

console.log(names); // Output: ['John', 'Jane', 'Bob', 'Alice']