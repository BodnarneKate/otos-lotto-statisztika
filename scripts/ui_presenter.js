class UIPresenter {
    controller;

    constructor(controller) {
        this.controller = controller;
    }

    showLastAndPreviousLotteries(){
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

    static main() {
        const ui = new UIPresenter(new Controller());

        ui.showLastAndPreviousLotteries();
        ui.showMostTimesWinnerNumbers();
    }

}

UIPresenter.main();

