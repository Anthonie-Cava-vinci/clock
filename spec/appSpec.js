import {Main} from "../app.js";


describe("the first minute line",() =>{
    let main = new Main();
    it("the first minute",() =>{
        let result = main.BerlinClock(1);
        expect(result).toBe(1);
    })

    it("")
})