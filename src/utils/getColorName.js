export const getColorName = (color) => {
  switch (color) {
    case "red":
      return "Rojo";
    case "blue":
      return "Azul";
    case "green":
      return "Verde";
    case "yellow":
      return "Amarillo";
    case "violet":
      return "Violeta";
    case "orange":
      return "Naranja";
    case "pink":
      return "Rosado";
    case "black":
      return "Negro";
    case "white":
      return "Blanco";
    case "gray":
        return "Gris"
    default:
      return "Unknown";
  }
};
