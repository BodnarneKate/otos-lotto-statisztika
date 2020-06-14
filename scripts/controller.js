class Controller {

    _list = [];

    constructor() {

        const lines = csv_raw_data.split('\n');

        lines.forEach((line) => {
            this._list.push(new Sorsolas(line));
        });
    }

    getList() {
        return this._list;
    }

    list() {
        console.log(this._list);
    }


    static main() {
        const c = new Controller();
        c.list();
    }

}

Controller.main();



