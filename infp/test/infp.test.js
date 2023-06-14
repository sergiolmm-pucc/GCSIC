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
      document.getElementById("region").value = "SP";
      updateTax();
      expect(document.getElementById("tax-label").textContent).toBe("(8%)");
    });

    test("Testando se a taxa é atualizada corretamente para Rio de Janeiro", () => {
      document.getElementById("region").value = "RJ";
      updateTax();
      expect(document.getElementById("tax-label").textContent).toBe("(6%)");
    });
  });
describe("Testando a geração da nota fiscal", () => {
    test("Testando se a nota fiscal é gerada corretamente", () => {
      document.getElementById("region").value = "MG";
      document.getElementById("product-name").value = "Produto Teste";
      document.getElementById("product-price").value = "100";
  
      generateInvoice();
  
      const invoiceContent = document.getElementById("invoice").innerHTML;
  
      expect(invoiceContent).toContain("<h2>Nota Fiscal</h2>");
      expect(invoiceContent).toContain("<p>Produto: Produto Teste</p>");
      expect(invoiceContent).toContain("<p>Região: MG <span id=\"tax-label\">(7%)</span></p>");
      expect(invoiceContent).toContain("<p>Imposto: 7%</p>");
      expect(invoiceContent).toContain("<p>Preço Total: R$ 107.00</p>");
    });
  });
