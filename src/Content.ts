﻿import fs from "fs";
import http from "http";
// url from "url";
import Megoldas from "./Megoldas";

export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre class='m-3'>");
        // Kezd a kódolást innen -->
        const megold: Megoldas = new Megoldas("utasadat.txt");

        res.write(`2. feladat: \nA buszra ${megold.Count} utas akart felszállni.\n`);
        res.write(`3. feladat: \nA buszra ${megold.Ervenytelen} utas nem szállhatott fel.\n`);
        res.write(`4. feladat: \nA legtöbb utas (${megold.LegtobbFelszallo.maxFelszallo}fő) a ${megold.LegtobbFelszallo.maxElsoMegallo}. megállóban próbált felszállni.\n`);
        //res.write(`5.feladat: \nIngyen utazók száma: ${} fő\nA kedvezményesen utazók száma: ${} fő`);

        // <---- Fejezd be a kódolást

        res.write("</pre></form>");
        res.write("</body></html>");
        res.end();
    }
}
