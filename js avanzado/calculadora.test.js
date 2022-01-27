
const {sumar , restar, multiplicar, dividir} = require("./calculadora"); //estoy importando

describe("Pruebas en el componente calculadora", () => 
{
    test("Prueba en la función sumar", () => 
        {
            expect(sumar(3,5)).toBe(8);
        });

        test("Prueba en la función restar", () =>
        {
            expect(restar(8,5)).toBe(3);
        });

test ("Prueba en la función multiplicar", () =>
{
    expect (multiplicar(2,5)).toBe(10);
})
test ("Prueba en la función dividir", () =>
{
    expect (dividir(10,2)).toBe(5);
})

    });
