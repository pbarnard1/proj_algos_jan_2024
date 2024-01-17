class Cookie {
    // Blueprints for the cookie
    constructor(shape, size, flavor, isCrunchy = false) {
        this.shape = shape
        this.size = size
        this.flavor = flavor
        this.isCrunchy = isCrunchy
    }

    // Methods for cookies
    cook() {
        console.log("Cookie is now ready to be eaten!");
    }

    eat() {
        console.log(`Now eating ${this.flavor} cookie!`);
    }
}
// Create objects
let myCookie = new Cookie("Circular", 5, "Chocolate");
let myCookie2 = new Cookie("Human", 3, "Cinnamon",true);
// Call on methods
myCookie.cook();
myCookie2.cook();
myCookie2.eat();