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

    static main() {
        const ui = new UIPresenter(new Controller());

        ui.showLastAndPreviousLotteries();
    }
}

UIPresenter.main();

