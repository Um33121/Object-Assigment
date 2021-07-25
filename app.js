
// Question No : 1

var items = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 },
  ];
  
  //For Single Item
  let singleItem = items.forEach((item, index) => {
    let items = item.price;
    console.log("The price of items", index, "is", items);
  });
  
  //Total Sum Of Each Item
  let total = items.reduce((sum, item) => sum + item.price, 0);
  console.log("The total prices of items are Rs: ", total);

  // Question No : 2

    var stdInfo = {
    firstName: "Mohammad",
    lastName: "Umair",
    email: "mohammadumair297@gmail.com",
    password: "umair16789",
    age: 23,
    gender: "Male",
    city: "Islamabad",
    country: "Pakistan",
  };
  
  var fName = stdInfo.hasOwnProperty("firstName");
  console.log(fName);
  var lName = stdInfo.hasOwnProperty("lastName");
  console.log(lName);
  var age = stdInfo.hasOwnProperty("age");
  console.log(age);
  var country = stdInfo.hasOwnProperty("country");
  console.log(country);


  //Question No : 3


    function person(first, last, age, id, school) 
    {
    this.first = first;
    this.last = last;
    this.age = age;
    this.id = id;
    this.school = school;
    }
  
  //Create a Object Of Person :

  const Student1 = new person("Mohammad", "Umair", 23, 23499, "Saylani Welfare Trust");
   const Student2 = new person("Adnaan", "Saleem",21,23456,"Fast University");
  console.log(Student1,Student2);

  // Question No : 4

    function User(Name, Gender, Address, Education, Profession) {
    this.Name = Name;
    this.Gender = Gender;
    this.Address = Address;
    this.Education = Education;
    this.Profession = Profession;
}
function getsubmit() {
    var userName = document.getElementById("Name")
    var userGender = document.getElementById("Gender")
    var userAddress = document.getElementById("Address")
    var userEducation = document.getElementById("Education")
    var userProfession = document.getElementById("Profession")
    var arr = []
    var myuser2 = new User(userName.value, userGender.value, userAddress.value, userEducation.value, userProfession.value);
    arr.push(myuser2);
    console.log(arr)
    
}