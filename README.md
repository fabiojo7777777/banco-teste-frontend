# banco-teste-frontend

Projeto de testes somente para fins didáticos.

Este projeto depende do backend **banco-teste-backend** (https://github.com/fabiojo7777777/banco-teste-backend)

# Passo a passo para a criação desta estrutura
1. Inicializando o pacote node na pasta, na linha de comando:
    npm init 
		<<Informar os valores padrões e dar enter>>
    
2. Criando um servidor de arquivos estáticos com grunt:
	
	criar pasta para iniciar o projeto
	
	na pasta do projeto, criar o diretório src e colocar um arquivo index.html com algum conteúdo html somente para testar se o sistema está funcionando
	
	npm install socket.io

	npm install grunt-cli -g

	npm install grunt --save-dev

	npm install grunt-copy-deps --save-dev

	npm install grunt-contrib-copy --save-dev	

	npm install grunt-contrib-watch --save-dev	
	
	npm install grunt-contrib-connect --save-dev	

na pasta do projeto, criar Gruntfile.js com o conteúdo do arquivo Gruntfile.js do meu repositório github (https://github.com/fabiojo7777777/banco-teste-frontend/blob/master/Gruntfile.js)
		
	digitar na linha de comando:	
	
		grunt		
	
	abrir http://localhost:8100/index.html		

3. Testes unitários e de integração com karma / jasmine
    
    criar as pastas src e spec
    
    npm install karma
    
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

	
	npm install angular
    
    npm install angular-mocks --save-dev
    
    npm install jasmine --save-dev
    
    npx jasmine init
    
    npx karma start

4. Desenvolvendo a aplicação front-end:
	
	npm install angular
	
	npm install angular-route
	
	npm install angular-ui-bootstrap
	
	npm install bootstrap-css-only
	
	npm install angular-i18n
	
	npm install material-icons
	
	
	Obs: componentes utilizados pelo angular, olhar: https://angular-ui.github.io/bootstrap/
