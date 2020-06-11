class CSVLoader {

    _csvData = 'empty';

    constructor() {
        if (window.location.hostname === '') {
            this._csvData = csv_row_data;
        } else {
            $.ajax({
                async: false,
                type: 'GET',
                url: (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? 'assets/otos.csv' : 'https://github.com/green-fox-academy/http-info-syllabus/blob/master/otos.csv',
                success: (data) => {
                    this._csvData = data;
                }
            });
        }
    }

    get csvData() {
        return this._csvData;
    }
}

// https://github.com/green-fox-academy/http-info-syllabus/blob/master/otos.csv


