import FBerlet from "../FBerlet";

describe("Bérlet teszt: ", () => {
    const Berlet = new FBerlet("0 20200101-0700 1111111 FEB 20210101");
    it("Érvényesség ellenőrzése: ", async () => {
        expect(Berlet.Ervenytelen).toBe(0);
    });
});
