import fs from "fs";
import FBerlet from "./FBerlet";
import FJegy from "./FJegy";
import Utas from "./Utas";

export default class Megoldas {
    private _utasok: Utas[] = [];
    constructor(forras: string) {
        fs.readFileSync(forras)
            .toString()
            .split("\n")
            .forEach(x => {
                const aktSor: string = x.trim();
                const xy: string = aktSor.split(" ")[3];
                if (xy === "JGY") {
                    this._utasok.push(new FJegy(aktSor));
                } else {
                    this._utasok.push(new FBerlet(aktSor));
                }
            });
    }

    public get Count(): number {
        return this._utasok.length;
    }
    public get Ervenytelen(): number {
        let back = 0;
        this._utasok.forEach(x => {
            if (x.Ervenytelen === 1) {
                back++;
            }
        });
        return back;
    }
}
