export default abstract class Utas {
    protected _megallo: number;
    protected _felszallas: Date;
    protected _kartyaAzon: string;

    constructor(sor: string) {
        const adatok: string[] = sor.split(" ");
        this._megallo = parseInt(adatok[0]);
        const ev: number = parseInt(adatok[1].substr(0, 4));
        const ho: number = parseInt(adatok[1].substr(4, 2)) - 1; //hónap számozás 0-val indul
        const nap: number = parseInt(adatok[1].substr(6, 2));
        const ora: number = parseInt(adatok[1].substr(9, 2));
        const perc: number = parseInt(adatok[1].substr(11, 2));
        this._felszallas = new Date(ev, ho, nap, ora, perc, 0, 0);
        this._kartyaAzon = adatok[2];
    }
    public get Ervenytelen(): boolean {
        return false; //Öröklés miatt kell
    }
    public get megalloSrsz(): number {
        return this._megallo;
    }
}
