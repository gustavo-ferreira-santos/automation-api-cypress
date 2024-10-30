# automation-api-cypres

## Pré-requisitos

Para executar o projeto é necessário:

- git;
- Node.js;
- NPM.

## Instalação das dependencias

Como todas as dependências já estão listadas no arquivo `package.json`, simplesmente execute o comando `npm install` na raiz do projeto.

## Execução do projeto

No arquivo `package.json` foram criados diversos scripts a fim de simplificar a sintaxe de execução dos testes já separando a execução por ambientes. São eles:

- cy:test:prd -> executa os testes com base no arquivo prd.json com as urls dos sistemas em produção;
- cy:test:dev -> executa os testes com base no arquivo dev.json com as urls dos sistemas em desenvolvimento;
- cy:test:stage -> executa os testes com base no arquivo stage.json com as urls dos sistemas em stage.

Para execução dos testes executar o comando:

- npm run <nome-do-script>. Ex: npm run cy:test:dev

Após a execução dos testes é possivel visualizar na pasta 'report' o report gerado pelo 'Mocha'. Para visualizar um relatório mais completo com o 'Allure' executar os seguintes comandos para a geração do relatório:

- allure generate (para gerar o relatório) ou allure generate --clean (caso existam relatórios residuais de execuções anteriores);
- allure open (para abrir e visualizar o relatório no browser);
- ou simplesmente executar o comando: npm run cy:allure:report.

## Arquitetura e design pattern

O projeto é composto das seguintes pastas:

- config -> Onde são armazenados os jsons com informações das urls dos diversos ambientes onde os testes podem ser executados;
- e2e -> onde Serão criados os testes;
- fixtures/contract -> Onde são armazenados os arquivos contendo o contrato dos endpoints;
- fixtures/payload -> Onde são armazenadas/criadas as diversas massas de dados a serem utilizados nos endpoints que requerem um payload a ser enviado.
