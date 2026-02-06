const nameDefault = ["Alex", "Avery", "John", "My Super Awesome Dog: Yash", "Cat"];

class Pet {
   
    // constructor, takes a name and base emotion level as input
    // conditionals to simulate constructor overloading
    constructor(name, emotion) {
        if (name === undefined) {
            // default

            // name default picks randomly from a small selection of names
            this.name = nameDefault[Math.floor(Math.random() * nameDefault.length)];

            // emotion level is set to a random value from -3 to 3
            this.emotionLevel = Math.floor(Math.random() * 7) - 3;

        } else if (name === Number && emotion === undefined) {
            // one argument, value for emotion was inputted but no name
            this.name = nameDefault[Math.floor(Math.random() * nameDefault.length)]

            this.emotionLevel = name;

        } else if (name === String && emotion === undefined) {
            // one argument, value for name was inputted but no emotion
            this.name = name
            this.emotionLevel = Math.floor(Math.random() * 7) - 3;

        } else {
            // both arguments
            this.name = name;
            this.emotionLevel = emotion;
        }
    }

    getEmotion() {
        return this.emotionLevel;
    }

    // i put a return function on all of these just in case its needed

    // raise emotion
    raiseEmotion(value) {
        this.emotionLevel += value;
        if (this.emotionLevel > 3) this.emotionLevel = 3;
        return this.emotionLevel;
    }

    // lower emotion
    lowerEmotion(value) {
        this.emotionLevel -= value;
        if (this.emotionLevel < -3) this.emotionLevel = -3;
        return this.emotionLevel;
    }

    // directly setting the value, bypasses the limit if its needed
    setEmotion(value) {
        this.emotionLevel = value;
        return this.emotionLevel;
    }

    // name stuff
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
        if (name === undefined) this.name = nameDefault[Math.floor(Math.random() * nameDefault.length)];
        return this.name;
    }
}




