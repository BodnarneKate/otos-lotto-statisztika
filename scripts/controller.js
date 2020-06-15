class Controller {
    _list = [];

    constructor() {

        const lines = csv_raw_data.split('\n');

        lines.forEach((line) => {
            this._list.push(new Sorsolas(line));
        });
    }

    get list() {
        return this._list;
    }

    doList() {
        console.log(this._list);
    }

    defineLastAndPrevWeeksWinnerNumbers() {
        let listCopy = [...(this._list)];
        listCopy.sort((a, b) => b.huzas_ideje - a.huzas_ideje);
        const last = listCopy.shift();
        const prev = listCopy.shift();

        // console.log(last.huzott_szamok.sort(), prev.huzott_szamok.sort());

        return {
            last: last.huzott_szamok.sort(),
            prev: prev.huzott_szamok.sort()
        };
    }
}



