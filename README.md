# Bem vindo ao meetApp ( node , react and react-native ) 


## Estrutura de diretórios do projeto: 
  - src/app.js -> onde ficarão as configurações do servidor express
  - src/routes.js -> onde ficarão as configurações das rotas da aplicação 
  - src/server.js -> onde estará a conexão com o servidor express
  
## Passos Para Configuração de Ambiente do Zero(levando em consideração que você tem node e yarn na sua máquina): 
  
  Crie um diretório para o projeto, e rode os seguintes comandos:
  
    yarn init -y

## Configuração de plugins do projeto( qualquer package que adicionarmos com -D no final, significa que o mesmo será adicionado no ambiente de desenvolvimento ): 

    yarn add sucrase nodemon -D 

  - sucrase permite importar dar forma atual, sem precisar usar o modelo commonJS, porém você deverá subir o servidor com os seguintes comnados : 
    
    yarn sucrase-node src/server.js
  
  - para  facilitar o nosso ambiente, criaremos um script para este comando no package.json, basta criar um atributo com nome de scripts,
  eu coloquei o nome de "dev", mas isso fica a seu critério:
  
  "scripts" : { "dev" : nodemon src/server.js }    
    
  - nodemon faz com que ele verifique qualquer alteração feita no código fonte e reinicie o servidor automaticamente. Para que o nodemon
    entenda o script que fizemos acima e consiga subir corretamente junto ao sucrase, deveremos criar um arquivo chamado ###nodemon.json na                raiz do seu projeto com as seguintes configuracoes : 
    
    { "execMap": { "js" : "sucrase-node" }  }
    
   - neste trecho eu informo que quando eu executar o nodemon em arquivos com extensão 'js' ele utilize em vez de "nodemon ...." , o "sucrase node"
