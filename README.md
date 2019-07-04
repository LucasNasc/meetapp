# Bem vindo ao meetApp ( node , react and react-native ) 


### Estrutura de diretórios do projeto: 
  - src/app.js -> onde ficarão as configurações do servidor express
  - src/routes.js -> onde ficarão as configurações das rotas da aplicação 
  - src/server.js -> onde estará a conexão com o servidor express
  
### Passos Para Configuração de Ambiente do Zero(levando em consideração que você tem node e yarn na sua máquina): 
  
  Crie um diretório para o projeto, e rode os seguinte comando:
  
    yarn init -y

### Configuração de plugins do projeto( qualquer package que adicionarmos com -D no final, significa que o mesmo será adicionado no ambiente de desenvolvimento ): 

    yarn add sucrase nodemon -D 

  - sucrase permite importar dar forma atual, sem precisar usar o modelo commonJS, porém você deverá subir o servidor com os seguintes comnados: 
    
   ```
   yarn sucrase-node src/server.js
   ```   
   
  - para  facilitar o nosso ambiente, criaremos um script para este comando no package.json, basta criar um atributo com nome de scripts,eu coloquei o nome de "dev", mas isso fica a seu critério:
  
   ```
   "scripts" : { "dev" : nodemon src/server.js } 
   ```     
    
  - nodemon faz com que ele verifique qualquer alteração feita no código fonte e reinicie o servidor automaticamente.
  - Para que o nodemon entenda o script que fizemos acima e consiga subir corretamente junto ao sucrase, deveremos criar um arquivo chamado nodemon.json na raiz do seu projeto com as seguintes configuracoes : 
    
  ```
  { "execMap": { "js" : "sucrase-node" }  }
   ``` 
   - neste trecho eu informo que quando eu executar o nodemon em arquivos com extensão 'js' ele utilize em vez de "nodemon ...." , o "sucrase node". A partir de agora podemos iniciar nosso servidor somente com o comando:
   
   ```
   yarn dev
   ```

  ### Plugins para padronização de código:
  
  - utilizaremos eslint
  
  ```
  yarn add eslint -D
  ```
  - agora iniciaremos a configuracao do arquivo de configuracao do ESLint, com padrao airBnB
  
   ```
   yarn eslint --init
   ```
  - seguir as configurações no arquivo eslintrc.js contidas no respositório. 
  - adicionando prettier
  
  ```
  yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
  ```
  - para que o eslint configure automaticamente após salvar utilize o comando: 
  
  ```
  yarn eslint --fix src --ext .js
  ```
  ### Base de dados no docker: 
  
  - Para criar um container do postgres no docker segue o comando : 
  
  ```
    docker run --name some-postgres -e POSTGRES_PASSWORD=senhaDoBanco -d postgres -p 5432:5432
  ```
  
