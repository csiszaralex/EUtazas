import fs from "fs";
import FBerlet from "./FBerlet";
import FJegy from "./FJegy";
import Utas from "./Utas";

interface ImaxKereses {
    maxFelszallo: number;
    maxElsoMegallo: number;
}

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
                } else if (["FEB", "TAB", "NYB", "NYP", "RVS", "GYK"]) {
                    this._utasok.push(new FBerlet(aktSor));
                }
            });
    }

    public get Count(): number {
        return this._utasok.length;
    }
    public get Ervenytelen(): number {
        return this._utasok.filter(x => x.Ervenytelen === true).length;
    }
    public get LegtobbFelszallo(): ImaxKereses {
        const max: ImaxKereses = { maxFelszallo: -1, maxElsoMegallo: -1 };
        const stat: number[] = new Array(30).fill(0);
        this._utasok.forEach(i => {
            stat[i.megalloSrsz]++;
        });
        max.maxFelszallo = Math.max(...stat);
        for (const i in stat) {
            if (stat[i] === max.maxFelszallo) {
                max.maxElsoMegallo = parseInt(i);
                break;
            }
        }
        return max;
    }
}
