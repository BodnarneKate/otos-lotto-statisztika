class Sorsolas {
    ev;
    het;
    huzas_ideje;
    ottalatat = {}
    negytalalat = {}
    haromtalalat = {}
    kettalalat = {}
    
    constructor(line) {
        this.parseLine(line);
    }

    parseLine(line) {
        const splitted = line.split(';');
        this.ev = splitted[0];
        this.het = splitted[1];

        const pattern = /(\d{4})\.(\d{2})\.(\d{2})\./;

        this.huzas_ideje = new Date(splitted[2].replace(pattern,'$1-$2-$3'));

        this.ottalatat.db = splitted[3];
        this.ottalatat.ertek = splitted[4];

        this.negytalalat.db = splitted[5];
        this.negytalalat.ertek = splitted[6];

        this.haromtalalat.db = splitted[7];
        this.haromtalalat.ertek = splitted[8];

        this.kettalalat.db = splitted[9];
        this.kettalalat.ertek = splitted[10];
    }
}
