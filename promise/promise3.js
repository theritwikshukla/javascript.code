var firstTech;

let name1={
    firstname:"ritwik",
    Lastname:"shukla",
    fullname: function(){
        console.log(this.firstname +" "+ this.lastname )
    }
}
name1.fullname()

let name2={
    firstname: "Ankur",
    lastname: "shukla"
}
console.log(name1.fullname.call(name2))

let fullname =function(city){
    console.log(this.firstname + " " + this.lastname + " " + city)
}


var n=2
function test(num){
    var result=num+num;
    return result;
}

var resultone = test(n)
console.log("resultone",resultone)
var resulttwo = test(4)
console.log("resulttwo",resulttwo)s
