angular.module('myModule', [])
	.controller('myController', function($scope, $interval){
		$scope.Heading = 'Toddler Talk';
		$scope.randomWords= ['messy ','tomorrow ','green ','hot-dog ','forget ','get ','tackle ','puppy ','eat ','juggle ','mine ','baby ','mommy ','daddy ','hate ','want ','gimme ','go ','hands up ', 'the roof is on fire ', "don't forget ", "cut it out ", "shut the front door ", "oh snap ", "peace out cub scout "];	
		$scope.randomClass= ['red ', 'blue ', 'size ', 'newfont ', 'underline ', 'spin ', 'blank' ];
		
		$scope.wordsOnPage = [];


		$scope.talk = function(){
			var functions = [addDecoratedWord];
			function rando(){
				return functions[Math.floor(Math.random() * functions.length)]();
			}
			$interval(rando, 500, 10);
		};
		function addDecoratedWord(){
			var newElement = {}
			newElement.word = $scope.randomWords[Math.floor(Math.random() * $scope.randomWords.length)];
			newElement.decor = $scope.randomClass[Math.floor(Math.random() * $scope.randomClass.length)];
			$scope.wordsOnPage.push(newElement);
		}
		
	});

