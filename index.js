module.exports = {
    soma(a, b) {
        return a + b
    },
    mult(a, b) {
        return a * b
    },
    sub(a, b) {
        if(b > a) [a, b] = [b, a]
        return a - b
    },
    div(a, b) {
        if(b > a) [a, b] = [b, a]
        return a / b
    }
}