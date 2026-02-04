/*
    Heres what all these variables do exactly:
    
    Type:  The type of food (Food, Drink, etc)
    Name:  The name of the food ("Pizza" for example)
    Value: How much hunger the pet restores from eating the food
    Eaten: Tells if the food has already been consumed (Usually changed by the Eat method)

*/

function Food(type, name, value) {
    //i do not like JS objects. i have no idea if this will actually run cuz its so confusing
    this.Type  = type  || "None"
    this.Name  = name  || "NewFood" //quick pretend this is readable
    this.Value = value || 0 
    this.Eaten = false

    //Makes the pet eat the food, returns the food's value or 0 if it's already eaten
    this.Eat = function() { //oh god please help me this better not all be in here
        if (this.Eaten) {
            return 0
        }
        this.Eaten = true
        return this.Value
    }

    this.toString = function() {
        let output = ""

        output += this.Name + ": \n"
        output += "Type: " + this.Type + ", \n"
        output += "Value: " + this.Value + ", \n"
        output += "Already Eaten: " + (!this.Eaten && "No" || "Yes") + ", \n"
        
        return output
    }
  
    return this //okay its starting to make sense (pray that this is actually how you do objects in this god forsaken language)
}