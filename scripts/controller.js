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

    calculateMostTimesWinnerNumbers() {
        let numbersCount = new Array(90).fill(0);
        let cntOfAll = 0;

        this._list.forEach((item) => {
            const huzottSzamok = item.huzott_szamok;
            huzottSzamok.forEach((szam) => {
                numbersCount[szam - 1]++;
                cntOfAll++;
            });
        });

        // console.log(numbersCount);
        // console.log(cntOfAll/5);

        let listCopy = [...(numbersCount)];

        listCopy.sort((a, b) => {
            return b - a;
        });

        let firstThree = listCopy.slice(0, 3);

        // console.log(firstThree);

        return {
            first: {
                number: numbersCount.indexOf(firstThree[0]) + 1,
                count: firstThree[0]
            },
            second: {
                number: numbersCount.indexOf(firstThree[1]) + 1,
                count: firstThree[1]
            },
            third: {
                number: numbersCount.indexOf(firstThree[2]) + 1,
                count: firstThree[2]
            }
        }
    }
}



