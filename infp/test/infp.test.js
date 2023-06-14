describe("Testando o valor total do produto com imposto", () => {
    const tax = 10;
    const productPrice = 100;
    const totalPrice = productPrice + productPrice * tax;
    test("Testando se o valor total do produto está correto", () => {
      expect(totalPrice).toBe(1000);
    });
  });
describe("Testando a geração da nota fiscal", () => {
    test("Testando se a nota fiscal é gerada corretamente", () => {
      document.getElementById("region").value = "SP";
      document.getElementById("product-name").value = "Produto 1";
      document.getElementById("product-price").value = "100";
  
      generateInvoice();
  
      const invoiceContent = document.getElementById("invoice").innerHTML;
  
      expect(invoiceContent).toContain("<h2>Nota Fiscal</h2>");
      expect(invoiceContent).toContain("<p>Produto: Produto 1</p>");
      expect(invoiceContent).toContain("<p>Região: SP <span id=\"tax-label\">(8%)</span></p>");
      expect(invoiceContent).toContain("<p>Imposto: 8%</p>");
      expect(invoiceContent).toContain("<p>Preço Total: R$ 108.00</p>");
    });
  });
describe("Testando a geração da nota fiscal", () => {
    test("Testando se a nota fiscal é gerada corretamente", () => {
      document.getElementById("region").value = "RJ";
      document.getElementById("product-name").value = "Produto 2";
      document.getElementById("product-price").value = "100";
  
      generateInvoice();
  
      const invoiceContent = document.getElementById("invoice").innerHTML;
  
      expect(invoiceContent).toContain("<h2>Nota Fiscal</h2>");
      expect(invoiceContent).toContain("<p>Produto: Produto 2</p>");
      expect(invoiceContent).toContain("<p>Região: RJ <span id=\"tax-label\">(6%)</span></p>");
      expect(invoiceContent).toContain("<p>Imposto: 6%</p>");
      expect(invoiceContent).toContain("<p>Preço Total: R$ 106.00</p>");
    });
  });
describe("Testando a geração da nota fiscal", () => {
    test("Testando se a nota fiscal é gerada corretamente", () => {
      document.getElementById("region").value = "MG";
      document.getElementById("product-name").value = "Produto 3";
      document.getElementById("product-price").value = "100";
  
      generateInvoice();
  
      const invoiceContent = document.getElementById("invoice").innerHTML;
  
      expect(invoiceContent).toContain("<h2>Nota Fiscal</h2>");
      expect(invoiceContent).toContain("<p>Produto: Produto 3</p>");
      expect(invoiceContent).toContain("<p>Região: MG <span id=\"tax-label\">(7%)</span></p>");
      expect(invoiceContent).toContain("<p>Imposto: 7%</p>");
      expect(invoiceContent).toContain("<p>Preço Total: R$ 107.00</p>");
    });
  });
