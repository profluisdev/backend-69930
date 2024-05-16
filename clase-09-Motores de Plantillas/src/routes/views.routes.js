import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const person = {
    name: "Juan",
    lastName: "Perez",
  };

  res.render("index", person);
});

router.get("/admin", (req, res) => {
  const person = {
    name: "Juan",
    lastName: "Perez",
    isAdmin: false,
  };

  res.render("admin", person);
});

router.get("/users", (req, res) => {
  let users = [
    {
      name: "Juan",
      lastName: "Perez",
    },
    {
      name: "Pedro",
      lastName: "Sanchez",
    },
    {
      name: "Ana",
      lastName: "Diaz",
    },
  ];

  res.render("users", { users, styles: "index.css" });
});

let users = [];

router.post("/users", (req, res) => {
  const { email, password } = req.body;

  const newUser = {
    email,
    password
  };

  users.push(newUser);

  res.status(201).json({ status: "success", payload: users });
});

router.get("/register", (req, res) => {


  res.render("register");
})

export default router;
