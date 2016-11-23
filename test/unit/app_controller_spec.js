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

    describe('convertArabicToPhrase() return english_phrase with 10, 11 and 12 numbers', function(){
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
        })
    });

});