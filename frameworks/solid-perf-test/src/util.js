export const generateRandomColor = () =>
  parseInt("0x" + Math.floor(Math.random() * 16777215).toString(16) + "FF");
