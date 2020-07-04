# banco-teste

Projeto de exemplo, somente para testes.

# Passo a passo para a criação desta estrutura
1. Inicializando o pacote node na pasta, na linha de comando:
    npm init 
		<<Informar os valores padrões e dar enter>>
    
2. Criando um servidor de arquivos estáticos com grunt:
	
	npm install grunt -g
	npm install grunt-copy-deps --save-dev
	npm install grunt-contrib-copy --save-dev
	npm install grunt-contrib-watch --save-dev
	npm install grunt-contrib-connect --save-dev

	criar Gruntfile com o conteúdo do meu arquivo Gruntfile no repositório github:
		
	digitar na linha de comando:
		grunt
	abrir http://localhost:8100/index.html		

3. Testes unitários e de integração com karma / jasmine
    criar as pastas src e spec
    npm install karma -g
    karma init
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

4. Desenvolvendo a aplicação front-end:
	npm install angular
	npm install angular-route
	npm install angular-ui-bootstrap
	npm install bootstrap-css-only
	npm install angular-i18n
	npm install material-icons
	
	Obs: componentes utilizados pelo angular, olhar: https://angular-ui.github.io/bootstrap/
