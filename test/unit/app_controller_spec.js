describe('AppController', function () {

    beforeEach(angular.mock.module('app'));

    var $controller,
        $scope = {},
        controller;

    beforeEach(angular.mock.inject(function(_$controller_){
        $controller = _$controller_;
        controller = $controller('AppController', { $scope: $scope });
    }));

    describe('convertArabicToPhrase() basic entries', function () {
        it('should be defined', function(){
           expect($scope.convertArabicToPhrase).toBeDefined();
        });

        it('should display error message wehn not arabic number', function(){
           $scope.arabic_number = 'text';
           $scope.convertArabicToPhrase();
           expect($scope.error_message.length).toBeGreaterThan(0);
        });

        it('should display error message when number bigger than 9999', function(){
           $scope.arabic_number = 123143;
           $scope.convertArabicToPhrase();
           expect($scope.error_message.length).toBeGreaterThan(0);
        });
    });

    describe('convertArabicToPhrase() return english_phrase with first numbers', function(){
        it('should be one', function(){
            $scope.arabic_number = 1;
            $scope.convertArabicToPhrase();
            expect($scope.english_phrase).toBe('one');
        });

        it('should be two', function(){
            $scope.arabic_number = 1;
            $scope.convertArabicToPhrase();
            expect($scope.english_phrase).toBe('one');
        });

        it('should be three', function(){
            $scope.arabic_number = 1;
            $scope.convertArabicToPhrase();
            expect($scope.english_phrase).toBe('one');
        });

        it('should be four', function(){
            $scope.arabic_number = 1;
            $scope.convertArabicToPhrase();
            expect($scope.english_phrase).toBe('one');
        });
    });

    describe('convertArabicToPhrase() return english_phrase with 10, 11, 12 and 15', function(){
        it('should be ten', function(){
            $scope.arabic_number = 10;
            $scope.convertArabicToPhrase();
            expect($scope.english_phrase).toBe('ten');
        });

        it('should be eleven', function(){
            $scope.arabic_number = 11;
            $scope.convertArabicToPhrase();
            expect($scope.english_phrase).toBe('eleven');
        });

        it('should be twelve', function(){
            $scope.arabic_number = 12;
            $scope.convertArabicToPhrase();
            expect($scope.english_phrase).toBe('twelve');
        });

        it('should be fifteen', function(){
            $scope.arabic_number = 15;
            $scope.convertArabicToPhrase();
            expect($scope.english_phrase).toBe('fifteen');
        })
    });

    describe('convertArabicToPhrase() return english_phrase with 20, 24, 30', function(){
        it('should be twenty', function(){
            $scope.arabic_number = 20;
            $scope.convertArabicToPhrase();
            expect($scope.english_phrase).toBe('twenty');
        });

        it('should be twenty-four', function(){
            $scope.arabic_number = 24;
            $scope.convertArabicToPhrase();
            expect($scope.english_phrase).toBe('twenty-four');
        });

        it('should be thirty', function(){
            $scope.arabic_number = 30;
            $scope.convertArabicToPhrase();
            expect($scope.english_phrase).toBe('thirty');
        });
    });

    describe('convertArabicToPhrase() return english_phrase with 102, 1242, 1001', function(){
        it('should be one hundred and two', function(){
            $scope.arabic_number = 102;
            $scope.convertArabicToPhrase();
            expect($scope.english_phrase).toBe('one hundred and two');
        });

        it('should be one thousand and two hundred and forty-two', function(){
            $scope.arabic_number = 1242;
            $scope.convertArabicToPhrase();
            expect($scope.english_phrase).toBe('one thousand and two hundred and fourty-two');
        });

        it('should be one thousand and one', function(){
            $scope.arabic_number = 1001;
            $scope.convertArabicToPhrase();
            expect($scope.english_phrase).toBe('one thousand and one');
        });
    });



});