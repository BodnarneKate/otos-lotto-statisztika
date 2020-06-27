class UIPresenter {
    controller;

    constructor(controller) {
        this.controller = controller;
    }

    showLastAndPreviousLotteries() {
        const {last, prev} = this.controller.defineLastAndPrevWeeksWinnerNumbers();

        let lastHtmlDivs = $('.last > div > div');
        let prevHtmlDivs = $('.prev > div > div');

        $(lastHtmlDivs).each((idx, item) => {
            $(item).html(last[idx]);
        });

        $(prevHtmlDivs).each((idx, item) => {
            $(item).html(prev[idx]);
        });
    }

    showMostTimesWinnerNumbers() {
        const {first, second, third} = this.controller.calculateMostTimesWinnerNumbers();
        // console.log(first, second, third);
        $('#freq-num1').html(first.number);
        $('#num-1').html(first.count);
        $('#freq-num2').html(second.number);
        $('#num-2').html(second.count);
        $('#freq-num3').html(third.number);
        $('#num-3').html(third.count);
    }

    showMostSimilarNumber() {
        const {mostSimilarUp, mostSimilarDown} = this.controller.searchMostSimilarNumbers();

        $('#up-date').html(!isNaN(mostSimilarUp.huzas_ideje)
            ? mostSimilarUp.huzas_ideje.getFullYear() + '-' + mostSimilarUp.huzas_ideje.getMonth() + '-' + mostSimilarUp.huzas_ideje.getDate()
            : mostSimilarUp.ev);
        $('#down-date').html(!isNaN(mostSimilarDown.huzas_ideje)
            ? mostSimilarDown.huzas_ideje.getFullYear() + '-' + mostSimilarDown.huzas_ideje.getMonth() + '-' + mostSimilarDown.huzas_ideje.getDate()
            : mostSimilarDown.ev);

        for (let i = 1; i <= 5; i++) {
            $('#up-num' + i).html(mostSimilarUp.huzott_szamok[i - 1]);
            $('#down-num' + i).html(mostSimilarDown.huzott_szamok[i - 1]);
        }
    }

    showTheSmallestOfThree() {
        const {first, second, third} = this.controller.defineTheSmallestOfThreeSum();

        $('#sum1 > span').html(first.sum);
        $('#sum2 > span').html(second.sum);
        $('#sum3 > span').html(third.sum);

        for (let i = 1; i <= 5; i++) {
            $('#sum1-num' + i).html(first.numbers[i - 1]);
            $('#sum2-num' + i).html(second.numbers[i - 1]);
            $('#sum3-num' + i).html(third.numbers[i - 1]);
        }
    }

    static main() {
        const ui = new UIPresenter(new Controller());

        ui.showLastAndPreviousLotteries();
        ui.showMostTimesWinnerNumbers();
        ui.showMostSimilarNumber();
        ui.showTheSmallestOfThree();
    }
}

UIPresenter.main();
