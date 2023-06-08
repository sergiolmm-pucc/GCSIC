describe("Testando o valor total do produto com imposto", () => {
    const tax = 10;
    const productPrice = 100;
    const totalPrice = productPrice + productPrice * tax;
    test("Testando se o valor total do produto está correto", () => {
      expect(totalPrice).toBe(1100);
    });
  });
  