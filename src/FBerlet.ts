import Utas from "./Utas";

export default class FBerlet extends Utas {
    private _tipus: string;
    private _ervenyes: Date;
    constructor(sor: string) {
        super(sor);
        const adatok: string[] = sor.split(" ");
        this._tipus = adatok[4];
        const ev = parseInt(adatok[4].substr(0, 4));
        const ho = parseInt(adatok[4].substr(4, 2)) - 1; //hónap számozás 0-val indul
        const nap = parseInt(adatok[4].substr(6, 2));
        this._ervenyes = new Date(ev, ho, nap, 23, 59);
    }
    public get Ervenytelen(): number {
        return this._ervenyes > this._felszallas ? 0 : 1;
    }
}
