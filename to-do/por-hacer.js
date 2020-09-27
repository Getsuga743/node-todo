const fs = require("fs");
const colors = require("colors");
const { finished } = require("stream");
const { describe } = require("yargs");

let todoList = [];

const guardarDB = () => {
  //stringify, agarra un objeto y lo convierte en json
  let data = JSON.stringify(todoList);
  fs.writeFile("./db/data.json", data, (err) => {
    if (err) return console.log(err);
    console.log(data + " was save in db");
  });
};

const cargarDB = () => {
  try {
    todoList = require("../db/data.json");
  } catch (error) {
    todoList = [];
  }
};

const getListado = (completado) => {
  cargarDB();
  return todoList;
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = todoList.findIndex((tarea) => {
    return tarea.descripcion === descripcion;
  });
  if (index >= 0) {
    todoList[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const crear = (describe) => {
  cargarDB();
  let todo = {
    descripcion: describe,
    completado: false,
  };

  todoList.push(todo);
  guardarDB();

  return todo;
};

const borrar = (describe) => {
  cargarDB();
  let index = todoList.findIndex((tarea) => {
    return tarea.descripcion === describe;
  });
  console.log(index);
  if (index >= 1) {
    let del = todoList.splice(index - 1, index + 1);
    guardarDB();
  }
  if (index === 0) {
    let del = todoList.splice(0, 1);
    console.log(del.descripcion + " fue eliminado");
    guardarDB();
  }
  if (index === -1) {
    return "error no se encontro ningun item con esa descripción";
  }
};
module.exports = {
  crear,
  guardarDB,
  getListado,
  actualizar,
  borrar,
};
