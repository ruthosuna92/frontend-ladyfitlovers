
const verifyCode = (code) => {
    const codeNumber = +code;
    try {
      if (codeNumber) {
        // Simula una petición exitosa
        console.log("Simulando una petición exitosa para:", codeNumber);
        // Aquí puedes devolver datos simulados de éxito si es necesario
        return { success: true, message: "Petición exitosa" };
      } else {
        // Simula una petición fallida
        console.log("Simulando una petición fallida para:", codeNumber);
        // Simula un error
        throw new Error("Petición fallida");
      }
    } catch (error) {
      // Manejo de errores simulado
      console.error("Error en la petición:", error.message);
      // Puedes devolver un objeto que indique un error si es necesario
      return { success: false, error: error.message };
    }
  };
  
  export default verifyCode;