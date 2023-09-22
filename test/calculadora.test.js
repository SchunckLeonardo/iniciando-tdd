let index = require('../index')

describe("Operações Básicas", () => {

    test("Deve somar 10 + 10, deve retornar 20", () => {

        let resultado = index.soma(10, 10)
        expect(resultado).toBe(20)

    })

    test("Deve multiplicar 5 por 5, deve retornar 25", () => {
        let resultado = index.mult(5, 5)
        expect(resultado).toBe(25)
    })

    test("Deve subtrair 25 por 5, e obter 20", () => {
        let resultado = index.sub(5, 25)
        expect(resultado).toBe(20)
    })

    test("Deve divir 50 por 5, e obter 10", () => {
        let resultado = index.div(50, 5)
        expect(resultado).toBe(10)
    })

})