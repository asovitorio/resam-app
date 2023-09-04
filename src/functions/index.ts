export function setColor(code: string) {
  if (code.indexOf("GR") != -1) {
    const red = "bg-red-500";
    return red;
  } else if (code.indexOf("G") != -1) {
    const orange = "bg-orange-500";
    return orange;
  } else if (code.indexOf("M") != -1) {
    const yellow = "bg-yellow-500";
    return yellow;
  } else {
    const green = "bg-green-500";
    return green;
  }
}
