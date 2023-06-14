describe("Testando o valor total do produto com imposto", () => {
    const tax = 10;
    const productPrice = 100;
    const totalPrice = productPrice + productPrice * tax;
    test("Testando se o valor total do produto está correto", () => {
      expect(totalPrice).toBe(1100);
    });
  });
  describe("Testando o valor total do produto com imposto", () => {
    const tax = 5;
    const productPrice = 200;
    const totalPrice = productPrice + productPrice * (tax / 100);

    test("Testando se o valor total do produto está correto", () => {
        expect(totalPrice).toBe(210);
    });
});
describe("Testando o valor total do produto com imposto", () => {
    const tax = 15;
    const productPrice = 50;
    const totalPrice = productPrice + productPrice * (tax / 100);

    test("Testando se o valor total do produto está correto", () => {
        expect(totalPrice).toBe(57.5);
    });
});
describe("Testando o valor total do produto com imposto", () => {
    const tax = 0;
    const productPrice = 80;
    const totalPrice = productPrice + productPrice * (tax / 100);

    test("Testando se o valor total do produto está correto", () => {
        expect(totalPrice).toBe(80);
    });
});
describe("Gerador de Nota Fiscal", () => {
  beforeEach(() => {
    // Preparação dos elementos necessários para o teste, se necessário
  });

  test("Gerar Nota Fiscal com valores válidos", () => {
    // Simulando a interação do usuário
    document.getElementById("region").value = "SP";
    document.getElementById("product-name").value = "Exemplo de Produto";
    document.getElementById("product-price").value = "100";

    // Chamando a função para gerar a nota fiscal
    generateInvoice();

    // Obtendo o elemento da nota fiscal gerada
    const invoiceElement = document.getElementById("invoice");

    // Realizando asserções para verificar se a nota fiscal foi gerada corretamente
    expect(invoiceElement.innerHTML).toContain("Exemplo de Produto");
    expect(invoiceElement.innerHTML).toContain("Região: SP");
    expect(invoiceElement.innerHTML).toContain("Imposto: 8%");
    expect(invoiceElement.innerHTML).toContain("Preço Total: R$ 108.00");
  });

  // Adicione outros testes aqui, se necessário

  afterEach(() => {
    // Limpeza dos elementos e estado após o teste, se necessário
  });
});
