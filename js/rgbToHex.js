// Complete it so that passing in RGB decimal values will result 
// in a hexadecimal representation being returned. Valid decimal 
// values for RGB are 0 - 255. Any values that fall out of that 
// range must be rounded to the closest valid value.

rgb(255, 255, 300) --> "FFFFFF"
rgb(0, 0, 0)       --> "000000"
rgb(148, 0, 211)   --> "9400D3"

function rgb(r, g, b) {
  return [r, g, b].reduce((hexCode, color) => {
    color = (color < 0) ? 0 : ((color > 255) ? 255 : color);
    let hex = color.toString(16);
    return hexCode += ((hex.length < 2) ? 0 : '') + hex;
  }, '').toUpperCase();
}