describe("Testando o valor total do produto com imposto", () => {
    const tax = 10;
    const productPrice = 100;
    const totalPrice = productPrice + productPrice * tax;
    test("Testando se o valor total do produto está correto", () => {
      expect(totalPrice).toBe(1100);
    });
  });
describe("Testando a atualização da taxa", () => {
    test("Testando se a taxa é atualizada corretamente para São Paulo", () => {
      // Selecionando a opção de São Paulo (8%)
      document.getElementById("region").value = "SP";
      // Atualizando a taxa
      updateTax();
      // Verificando se a taxa exibida é 8%
      expect(document.getElementById("tax-label").textContent).toBe("(8%)");
    });
