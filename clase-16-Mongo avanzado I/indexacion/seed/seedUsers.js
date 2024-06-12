import fs from "fs";
import { userModel } from "../user.model.js";

export const seedUsersToDB = async () => {
  try {
    const users = await fs.promises.readFile("./seed/Users.json", "utf-8");
    const parseUsers = await JSON.parse(users);
    await userModel.insertMany(parseUsers);
    console.log("Usuarios agregados a la base de datos");
    
  } catch (error) {
    console.log(error);
  }
}