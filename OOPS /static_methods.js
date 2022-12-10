class User {
    static id = 1;
    constructor(name, age) {
        (this.name = name), (this.age = age), (this.id = User.id); //User.id ++ to increase id in every instance created.
    }
    static compareByAge(user1, user2) {
        return user1.age - user2.age;
    }
}
const user1 = new User('Harsh', 21);
const user2 = new User('John Doe', 14);
const user3 = new User('Zen Doe', 24);
// Static methods and Instance don't have any direct relation.
// We can access static methods or properties.
const users = [user1, user2, user3];
users.sort(User.compareByAge);
console.log(users);
