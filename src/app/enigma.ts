function toHex(value: number) {
    let res = ""
    let someNumber = value
    while (someNumber > 0) {
        let numberToAdd = someNumber % 16
        if (numberToAdd < 10) {
            res = (someNumber % 16).toString() + res
        } else {
            let letter = String.fromCharCode(numberToAdd + 55)
            res = letter + res
        }
        someNumber = Math.floor(someNumber / 16)
    }
    return res
}

function fromHex(value: string) {
    return parseInt(value, 16)
}

export function encodeName(value: string, key: string) {
    let pos = 0
    let token = ""

    for (let i = 0; i < value.length; i++) {
        let code = value.charCodeAt(i) + key.charCodeAt(pos)
        token = token + toHex(code)
        pos = pos + 1
        if (pos === key.length) {
            pos = 0
        }
    }
    return token
}

export function decodeToken(token: string, key: string) {
    let pos = 0
    let value = ""

    for (let i = 0; i < token.length; i = i + 2) {
        let code = fromHex(token[i] + token[i + 1])

        code = code - key.charCodeAt(pos)
        value = value + String.fromCharCode(code)
        pos = pos + 1
        if (pos === key.length) {
            pos = 0
        }
    }
    return value
}
