class Utils {
    static parseCurrencyStringtoInt(currencyString){
        return parseInt(currencyString.substring(0, currencyString.length - 3).replace(' ', ''));
    }
}
