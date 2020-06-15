class Sorsolas {
    ev;
    het;
    huzas_ideje;
    ottalatat = {};
    negytalalat = {};
    haromtalalat = {};
    kettalalat = {};
    _huzott_szamok = [];

    constructor(line) {
        this.parseLine(line);
    }

    parseLine(line) {
        const splitted = line.split(';');
        this.ev = parseInt(splitted[0]);
        this.het = parseInt(splitted[1]);

        const pattern = /(\d{4})\.(\d{2})\.(\d{2})\./;

        this.huzas_ideje = new Date(splitted[2].replace(pattern, '$1-$2-$3'));

        this.ottalatat.db = parseInt(splitted[3]);
        this.ottalatat.ertek = Utils.parseCurrencyStringtoInt(splitted[4]);

        this.negytalalat.db = parseInt(splitted[5]);
        this.negytalalat.ertek = Utils.parseCurrencyStringtoInt(splitted[6]);

        this.haromtalalat.db = parseInt(splitted[7]);
        this.haromtalalat.ertek = Utils.parseCurrencyStringtoInt(splitted[8]);

        this.kettalalat.db = parseInt(splitted[9]);
        this.kettalalat.ertek = Utils.parseCurrencyStringtoInt(splitted[10]);

        this._huzott_szamok.push(parseInt(splitted[11]), parseInt(splitted[12]), parseInt(splitted[13]), parseInt(splitted[14]), parseInt(splitted[15]))
    }

    get huzott_szamok(){
        return this._huzott_szamok;
    }


}
