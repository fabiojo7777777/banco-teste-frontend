# banco-teste-frontend

Projeto de testes somente para fins didáticos.

Este projeto depende do backend **banco-teste-backend** (https://github.com/fabiojo7777777/banco-teste-backend)

# Telas deste projeto em execução:

![Tela de login](docs/imagens/login.png?raw=true)
	
![Tela de saldo das contas](docs/imagens/conta.png?raw=true)
	
![Tela de extrato da conta](docs/imagens/extrato.png?raw=true)
	
![Tela de transferência entre contas](docs/imagens/transferencia.png?raw=true)
	
	
# Passo a passo para a criação desta infraestrutura "DO ZERO"
1. Criando um servidor de arquivos estáticos:

		criar pasta para iniciar o projeto e digitar na linha de comando, dentro desta pasta:

		npm init 

			<<Informar os valores padrões e dar enter>>
    
	**Criando um servidor de arquivos estáticos com grunt:**
		
		na pasta do projeto, criar o diretório src e colocar um arquivo index.html com algum conteúdo html 
		somente para testar se o sistema está funcionando

		npm install socket.io

		npm install grunt-cli -g

		npm install grunt --save-dev

		npm install grunt-copy-deps --save-dev

		npm install grunt-contrib-copy --save-dev	

		npm install grunt-contrib-watch --save-dev	

		npm install grunt-contrib-connect --save-dev	

		na pasta do projeto, criar Gruntfile.js com o conteúdo do arquivo Gruntfile.js do meu repositório github 
		https://github.com/fabiojo7777777/banco-teste-frontend/blob/master/Gruntfile.js

		digitar na linha de comando:	

			grunt		

		abrir http://localhost:8100/index.html		

2. Preparando projeto para desenvolvimento de aplicação front-end com angular / bootstrap:
	
		npm install angular

		npm install angular-route

		npm install angular-ui-bootstrap

		npm install bootstrap-css-only

		npm install angular-i18n

		npm install material-icons	
	
	**Obs: componentes utilizados pelo angular, olhar: https://angular-ui.github.io/bootstrap/**


3. Configurando testes unitários e de integração com karma / jasmine / angularjs
    
	    criar as pastas src e spec

	    npm install jasmine --save-dev

	    npm install karma --save-dev
	    
	    npm install karma-jasmine --save-dev
	    
	    npm install karma-coverage --save-dev

	    npm install phantomjs-prebuilt --save-dev
	    
	    npm install karma-phantomjs-launcher --save-dev
	    
	    npm install angular-mocks --save-dev

    **Inicializando as ferramentas de teste**
    
	    npx jasmine init

	    copiar o arquivo karma.conf.js deste repositório para a pasta raiz do projeto 
	    (https://github.com/fabiojo7777777/banco-teste-frontend/blob/master/karma.conf.js)
	    
	    copiar arquivo spec de teste unitário do controller conta deste repositório 
	    (https://github.com/fabiojo7777777/banco-teste-frontend/blob/master/spec/conta/conta.controller.spec.js) 
	    para a pasta spec/conta/ do seu projeto
	    
	    npx karma start

# Executando o projeto

	1. Baixe o projeto https://github.com/fabiojo7777777/banco-teste-backend, importe no Eclipse ou outra IDE e execute a classe principal br.com.bancotestebackend.BancoTesteBackendApplication.java
	
	2. Baixe este projeto e na pasta do projeto execute os comandos:
		
		npm install
		npm grunt-cli install -g
		grunt
	3. Acesse o endereço http://localhost:8100
