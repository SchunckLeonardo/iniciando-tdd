let supertest = require('supertest')
let app = require('../src/app')

let server = supertest(app)

test("A aplicação deve rodar na porta 3130", () => {
    return server.get("/").then(res => expect(res.statusCode).toBe(200))
})

test("Deve retornar que a cor favorita do Victor é vermelha", () => {
    return server.get('/user/victor').then(res => expect(res.body.cor).toBe("vermelho"))
})