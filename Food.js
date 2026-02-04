function Food(type, name, value) {
    let self = {
        Type:  type  || "None",
        Name:  name  || "Food", //pretend that this is readable
        Value: value || 0,
    }

    return self
}