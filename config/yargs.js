const descripcion = {
  demand: true,
  alias: "d",
  describe: "describe la tarea",
};
const completado = {
  default: true,
  alias: "c",
  describe: "Marca como completado o pendiente la tarea",
};
const argv = require("yargs")
  .command("crear", "Crea un item en la lista", {
    descripcion,
  })
  .command("actualizar", "actualiza el estado de un item", {
    descripcion,
    completado,
  })
  .command("borrar", "borra el estado", {
    descripcion,
  })
  .command("listar", "trae la lista de tareas", {
    completado,
  })
  .help().argv;

//comandos crear
// --descripcion -d
// //actualizar
// --descripcion -d
// --completado -c true

module.exports = { argv };
