import Utas from "./Utas";

export default class FJegy extends Utas {
    private _jegyekSzama: number;
    constructor(sor: string) {
        super(sor);
        this._jegyekSzama = parseInt(sor.split(" ")[4]);
    }
    public get Ervenytelen(): boolean {
        return !(this._jegyekSzama >= 1);
        //return false;
    }
}
