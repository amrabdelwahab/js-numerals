app.controller('AppController', ['$scope', function($scope){

    $scope.arabic_number = null;
    $scope.english_phrase = '';

    function isNumeric(value) {
        return /^\d+$/.test(value);
    }

    function resetVariables() {
        $scope.error_message = '';
        $scope.english_phrase = '';
    }

    var nObj = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve'
    };

    var nObjS = {
        2: 'twent',
        3: 'thirt',
        4: 'fourt',
        5: 'fift',
        6: 'sixt',
        7: 'sevent',
        8: 'eight',
        9: 'ninet'
    };

    $scope.convertArabicToPhrase = function() {
        resetVariables();
        var an = $scope.arabic_number;
        if (!isNumeric(an)) {
            $scope.error_message = '* Please enter a valid arabic number. Eg. 12';
        } else {
            an = parseInt(an);

            if (an > 9999) {
                $scope.error_message = '* Maximum number input is 9999. Eg. 235';
            } else {
                var result = '',
                    lastTwo = an.toString().slice(-2),
                    fn = parseInt((lastTwo / 10).toString().charAt(0)),
                    sn = lastTwo % 10;

                if (fn == 0) {
                    result = nObj[sn];
                } else if (fn == 1) {
                    if (sn >= 0 && sn <= 2) {
                        result = nObj[fn*10+sn]
                    } else {
                        result = nObjS[sn] + 'een';
                    }
                } else {
                    result = nObjS[fn] + 'y';
                    if (sn > 0) {
                        result += '-'+nObj[sn];
                    }
                }

                var hn = parseInt(((an % 1000) / 100).toString().charAt(0));
                if (hn) {
                    result = nObj[hn] + ' hundred and '+ result;
                }

                var mn = parseInt(((an % 10000) / 1000).toString().charAt(0));
                if (mn) {
                    result = nObj[mn] + ' thousand and '+ result;
                }

                $scope.english_phrase = result;
            }
        }
    }

}]);