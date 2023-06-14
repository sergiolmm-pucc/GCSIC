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
