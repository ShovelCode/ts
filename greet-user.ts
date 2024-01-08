function greet(name: string, age: number): string {
    return `Hello, ${name}. You are ${age} years old.`;
}

const user = {
    name: "Alice",
    age: 30
};

console.log(greet(user.name, user.age));
