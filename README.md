# Encurtador de URL

Este é um simples encurtador de URL desenvolvido em Node.js usando Express e MongoDB.

## Configuração

1. Certifique-se de ter o Node.js e o MongoDB instalados em seu sistema.
2. Clone este repositório em sua máquina local usando o comando:
3. git clone https://github.com/gusstavo01/Encurtador-de-Url.git
4. 3. Instale as dependências do projeto executando o comando: npm install
  
O servidor estará disponível em http://localhost:5000/.

## Insomnia 
![image](https://github.com/gusstavo01/Encurtador-de-Url/assets/105757864/44380728-505f-479f-a354-9dcad2b1ec87)

## Rotas

- `POST /shorten`: Crie uma URL encurtada.
- `GET /:hash`: Redirecione para a URL original com base no hash fornecido na rota.

## Estrutura do Projeto

- `controller/`: Contém os controladores para manipular as requisições HTTP.
- `database/`: Contém a configuração e a conexão com o MongoDB.
- `index.js`: Arquivo principal que inicia o servidor Express.
