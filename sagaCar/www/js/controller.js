angular.module('starter')
.controller('ListagemController', function($scope, CarroService) {

	CarroService.obterCarros().then(function(dados){
		$scope.listaDeCarros = dados;
	});

    $scope.rodaPe = "Rua Taguatinga Sul ";
    $scope.dataAtual = "24/09/2016";
});

angular.module('starter')
.controller('CarroEscolhidoController', function($stateParams, $scope) {

    $scope.carroEscolhido = angular.fromJson($stateParams.carro);
    $scope.listaDeAcessorios = [{"nome": "Freios ABS", "preco":800,},
    							{"nome": "Ar Condicio", "preco":1000,},
    							{"nome": "MP3 Player", "preco":500,},	
    							{"nome": "Trava", "preco":2000,}	
    								];

	$scope.calcularValorCarro = function(acesserio, isMarcou){

		if(isMarcou){
			$scope.carroEscolhido.preco = $scope.carroEscolhido.preco + acesserio.preco;
		}else {
			$scope.carroEscolhido.preco = $scope.carroEscolhido.preco - acesserio.preco;
		}
	};    								
    
});


angular.module('starter')
.controller('finalizaPedidoController', function($stateParams, $scope, $ionicPopup, $state, CarroService) {

	$scope.carroFinalizado = angular.fromJson($stateParams.carro);
	$scope.pedido = {};

		$scope.finalizarPedido = function(){
			var pedidoFinalizado = {
				params : {
					carro : $scope.carroFinalizado.nome,
					preco : $scope.carroFinalizado.preco,
					nome  : $scope.pedido.nome,
					endereco : $scope.pedido.endereco,
					email : $scope.pedido.email
				}
			}	

			CarroService.salvarPedido(pedidoFinalizado).then(function(dados){

					$ionicPopup.alert({
					title : 'Parabéns',
					template : "Você acaba de comprar um carro."
				}).then(function(){
					$state.go('listagem');			
				});	
			}, function(erro){
				$ionicPopup.alert({
					title : 'Deu Error',
					template : "Campos obrigatórios."
				});	
			});			

	};  
});