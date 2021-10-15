const rewire = require("rewire")
const balance_games = rewire("./balance-games")
const balance = balance_games.__get__("balance")
const ansverQuastion = balance_games.__get__("ansverQuastion")
// @ponicode
describe("balance", () => {
    test("0", () => {
        let callFunction = () => {
            balance({ toString: () => "2017-03-01" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            balance({ toString: () => "2019-07-01" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            balance({ toString: () => "2019-06-01" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            balance({ toString: () => "2020-03-01" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            balance({ toString: () => "2019-10-01-preview" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            balance(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ansverQuastion", () => {
    test("0", () => {
        let callFunction = () => {
            ansverQuastion()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("balance_games.default", () => {
    test("0", () => {
        let callFunction = () => {
            balance_games.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
