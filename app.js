const colors = require("colors");
const { eliminar } = require("./to-do/por-hacer");
const argv = require("./config/yargs").argv;

//crear tarea, crear lista , listar la lista de tareas, actualizar tarea, eliminar tarea
const porHacer = require("./to-do/por-hacer");

let commando = argv._[0];
console.log(argv._);

switch (commando) {
  case "crear": {
    let task = porHacer.crear(argv.descripcion);
    console.log(task);
    break;
  }
  case "listar": {
    let listado = porHacer.getListado();
    for (let tarea of listado) {
      console.log("===========Por hacer============".green);
      console.log(tarea.descripcion);
      console.log("Estado : ", tarea.completado);
      console.log("===========xxxxxxxxx============".green);
    }
    break;
  }
  case "actualizar": {
    console.log("Actualizar una tarea");
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    if (actualizado) break;
  }
  case "borrar": {
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado);
    break;
  }
  default: {
    console.log("comando no es reconocido");
    break;
  }
}
