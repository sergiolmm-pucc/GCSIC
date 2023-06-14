describe("Testando o valor total do produto com imposto em SP", () => {
    const tax = 0.08;
    const productPrice = 100;
    const totalPrice = productPrice + productPrice * tax;
    test("Testando se o valor total do produto está correto", () => {
      expect(totalPrice).toBe(108.00);
    });
  });
describe("Testando o valor total do produto com imposto em RJ", () => {
    const tax = 0.06;
    const productPrice = 100;
    const totalPrice = productPrice + productPrice * tax;
    test("Testando se o valor total do produto está correto", () => {
      expect(totalPrice).toBe(106.00);
    });
  });
describe("Testando o valor total do produto com imposto em MG", () => {
    const tax = 0.07;
    const productPrice = 100;
    const totalPrice = productPrice + productPrice * tax;
    test("Testando se o valor total do produto está correto", () => {
      expect(totalPrice).toBe(107.00);
    });
  });
