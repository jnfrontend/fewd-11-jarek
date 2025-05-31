document.addEventListener("DOMContentLoaded", function (e) {
  console.log("Script Unit-12: Document is ready to use");

  /* Object - Option 1 */
  // Unnamed/Unknown Object
  var person = {
    name: "John Doe",
    dob: "01/01/2000",
    professional: "Software Developer",
    country: "United States",
    email: "john.doe@gmail.com",
    type: "manager",
    isAdmin: function () {
      return this.type === "admin" ? true : false; // Behaviour
    },
  };
  console.log(person);
  console.log(person.isAdmin());

  /* Object - Option 2 */
  class Person {
    constructor(name, dob, professional, country, email) {
      this.name = name;
      this.dob = dob;
      this.professional = professional;
      this.country = country;
      this.email = email;
    }
  }

  // Use "let" so we can change/update "person1" later
  let person1 = new Person(
    "John Doe",
    "01/01/2000",
    "Software Developer",
    "United States",
    "john.doe@gmail.com"
  );

  person1.name = "Jane DoeTest";
  console.log(person1);
  
  // delete person1.name;
});
