# banco-teste-frontend

Projeto de testes somente para fins didáticos.

Este projeto depende do backend **banco-teste-backend** (https://github.com/fabiojo7777777/banco-teste-backend)

# Passo a passo para a criação desta estrutura
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

	    npm install angular-mocks --save-dev

    **Inicializando as ferramentas de teste**
    
	    npx jasmine init

	    npx karma init

		Para as perguntas na linha de comando informar: 

		    jasmine

		    no

		    PhantomJS

		    <<dar enter>>

		    src/*.js

		    src/**/*.js

		    spec/*.js

		    spec/**/*.js

		    <<dar enter>>

		    yes

	    npx karma start
