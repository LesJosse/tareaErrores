const logger = require("./logger");

try {
  const funcionError = (a, b) => {
    if (typeof a && b === Number) {
      let result = a + b;
      return result;
    }
    throw new Error("Debe ingresar dos valores de tipo Number");
  };
  funcionError(4);
} catch (e) {
  logger.error(`El error es: ${e}`);
  logger.error("ERROR!");
} finally {
  logger.info("El programa a finalizado");
}
