export default abstract class Utas {
    protected _megallo: number;
    protected _felszallas: Date;
    protected _kartyaAzon: string;

    constructor(sor: string) {
        const adatok: string[] = sor.split(" ");
        this._megallo = parseInt(adatok[0]);
        const ev = parseInt(adatok[1].substr(0, 4));
        const ho = parseInt(adatok[1].substr(4, 2)) - 1; //hónap számozás 0-val indul
        const nap = parseInt(adatok[1].substr(7, 2));
        this._felszallas = new Date(ev, ho, nap);
        this._kartyaAzon = adatok[2];
    }
    public get Ervenytelen(): number {
        return 0;
    }
}
