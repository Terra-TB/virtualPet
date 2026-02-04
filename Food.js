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
}