function (c, a) {
    var person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
            return this.firstName + " " + this.lastName;
        }
    };
    return person.fullName();


    var text = ""
    var i = 0;

    do {
        text += "<br>The number is " + i;
        i++;
    }
    while (i < 10);

    return text;

}
