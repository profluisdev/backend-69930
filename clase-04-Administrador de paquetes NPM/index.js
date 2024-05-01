

import moment from "moment";

const hoy = moment();

const fechaNacimiento = moment("2000-06-15", "YYYY-MM-DD");

if(fechaNacimiento.isValid()) {
  console.log(`Desde mi nacimiento, han pasado ${hoy.diff(fechaNacimiento, "days")} días`);
} else {
  console.log("Error: Nose puede proseguir ya que la fecha es inválida");
}