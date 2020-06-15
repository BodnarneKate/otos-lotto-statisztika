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

    defineLastTwoWeeksWinnerNumbers(){
        let listCopy = [...(this._list)];
        listCopy.sort((a, b) => b.huzas_ideje - a.huzas_ideje);
        const last = listCopy.shift();
        const lastButOne = listCopy.shift();

        console.log(last, lastButOne);
    }


    static main() {
        const c = new Controller();
        // c.doList();
        c.defineLastTwoWeeksWinnerNumbers();
    }

}

Controller.main();



