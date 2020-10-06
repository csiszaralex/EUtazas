import FJegy from "../FJegy";

describe("Bérlet teszt: ", () => {
    const Jegy = new FJegy("0 20200101-0700 1111111 JGY 0");
    it("Érvényesség ellenőrzése: ", async () => {
        expect(Jegy.Ervenytelen).toBe(1);
    });
});