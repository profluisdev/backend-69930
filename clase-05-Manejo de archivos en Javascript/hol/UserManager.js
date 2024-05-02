const fs = require("fs");

class UserManager {

  constructor() {
    this.users = [];
    this.path = "./users.json"
  }

  async createUser(nombre, apellido, edad){
    try {

      let newUser = {
        nombre,
        apellido,
        edad
      }

      this.users.push(newUser);

      await fs.promises.writeFile(this.path, JSON.stringify(this.users));
      
    } catch (error) {
      console.log(error);
    }
  }

  async showUsers() {
    try {
      let users = await fs.promises.readFile("./users.json", "utf-8");
      let usersParse = await JSON.parse(users);
      console.log(usersParse);
      console.log("prueba");
      
    } catch (error) {
      console.log(error);
    }
  }

}

const user1 = new UserManager();

user1.createUser("Juan", "Perez", 30);
user1.createUser("Pepe", "Juarez", 45);
user1.showUsers()