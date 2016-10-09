angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){


	$urlRouterProvider.otherwise('listagem');

	$stateProvider

	.state('listagem',{
		url : '/listagem',
		templateUrl : 'template/listagem.html',
		controller : 'ListagemController'
	})
	.state('carroEscolhido',{
		url : '/carroEscolhido/:carro',
		templateUrl : 'template/carroEscolhido.html',
		controller : 'CarroEscolhidoController'
	})
		.state('finalizapedido',{
		url : '/finalizapedido/:carro',
		templateUrl : 'template/finalizaPedidos.html',
		controller : 'finalizaPedidoController'
	});
})