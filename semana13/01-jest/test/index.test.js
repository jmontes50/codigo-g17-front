const { saludar } = require("../index.js");

test("testing saludar", () => {
  expect(saludar("Jorge")).toBe("Saludos Jorge");
});
