# CriptoIndex - Back-end

![Badge](https://img.shields.io/badge/types-Flow%20%7C%20TypeScript-blue)
![Badge](https://img.shields.io/badge/node-%3E%3D%2012.18.2-brightgreen)
![Badge](https://img.shields.io/badge/PostgreSQL-v12.0-lightblue)

## Status do Projeto

> 🚧 em desenvolvimento

## Tópicos

🔹 [Descrição do projeto](#link-descrição-do-projeto)

🔹 [Funcionalidades](#information_source-funcionalidades)

🔹 [Pré-requisitos](#sparkles-pré-requisitos)

🔹 [Iniciar/Configurar banco de dados](#floppy_disk-iniciar/configurar-banco-de-dados)

🔹 [Como rodar a aplicação](#arrow_forward-como-rodar-a-aplicação)

🔹 [E-mail](#mailbox-e-mail)

🔹 [Como rodar os testes](#building_construction-como-rodar-os-testes)

🔹 [Insomnia](#sleeping-insomnia)

🔹 [Dados da API](#scroll-dados-da-api)

🔹 [Tarefas em aberto](#pencil-tarefas-em-aberto)

🔹 [Desenvolvedores](#octopus-desenvolvedores)

## :link: Descrição do projeto

<p align="justify">

  Neste projeto me baseio nas instruções para o [desafio](https://github.com/betrybe/technical-test), crio uma API para fazer o cadastro, login, recuperação de senha, validação de campos listar valores monetários e listar valores baseados em uma quantidade de um tipo de moeda. A API CriptoIndex fará requisições à API da [CoinDesk](https://www.coindesk.com/coindesk-api) para gerar JSONs personalizados à fim de satisfazer os requisitos.

</p>

## :information_source: Funcionalidades

:heavy_check_mark: Login

:heavy_check_mark: Cadastro

:heavy_check_mark: Recuperação de senha por e-mail

:heavy_check_mark: Listar e atualizar valores monetários

:heavy_check_mark: Listar e atualizar valores de uma moeda

## :sparkles: Pré-requisitos

⚠️ [Node](https://nodejs.org/en/download/)

⚠️ [Yarn](https://yarnpkg.com/getting-started/install)

⚠️ [Docker](https://www.docker.com/products/docker-desktop)

⚠️ [PostgreSQL Docker](https://hub.docker.com/_/postgres)

## :floppy_disk: Iniciar/Configurar banco de dados

❗️ Você precisará seguir os passos a seguir para poder rodar a aplicação na sua máquina.

Ter Docker e as imagens PostgreSQL, MongoDB e Redis instalados.

### :elephant: Instalar PostgreSQL via Docker

* `docker run --name CriptoIndexPostgre -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
* Verificar se a imagem está rodando: `docker ps`
* Usuário: postgres
* Senha: docker
* Acesso pelo terminal: `docker exec -it nome_do_container bash`

### :dolphin: Criar Banco de Dados PostgreSQL

1. Instale o DBeaver, ou outro gerenciador de Banco de Dados, ou faça por linha de comando.
2. Acesse com o usuário e senha supracitados.
3. Crie um Banco de Dados com o nome __CriptoIndex__.

## :arrow_forward: Como rodar a aplicação

Agora navegue até a pasta criada e abra no Visual Studio Code, execute o comando `yarn` dentro da pasta no seu terminal para instalar todas as dependências.

Execute as migrations para o banco de dados: `yarn typeorm migration:run`.

Após a instalação digite: `yarn dev:server`.

Pronto! Agora basta acessar a aplicação à partir do link: http://localhost:3333/ via insomnia, ou pelo front-end web.

## :mailbox: E-mail

Para utilizar a função de recuperação de senha do usuário, o terminal deve estar aberto, pois o Ethereal irá gerar um link para acessar a caixa de entrada com o token.

No Insomnia em _Reset password_, insira o token gerado em _"token:" : ""_ no espaço vazio e clique em _Send_.

## :building_construction: Como rodar os testes

Na mesma pasta do projeto, no terminal, digite:

```bash
yarn test
```

## :sleeping: Insomnia

Faça o download do [insomnia](https://insomnia.rest/download/), para utilizar o mesmo workspace utilizado no projeto clique [aqui](https://github.com/MGustav0/CriptoIndex/blob/development/extras/Insomnia_2020-11-30.json), baixe e importe no seu insomnia.

Para inserir o token gerado pela API na rota _Authenticate_, clique em _Dev_, abaixo do nome do projeto, depois em _Manage Environments_, cole seu token adquirido na autenticação e, por fim, clique em _Done_. Pronto! Você está logado na aplicação!

## :scroll: Dados da API

### Cadastro e Validação

<img src="" width="640" heigth="360" />

### Login e Validação

<img src="" width="640" heigth="360" />

### Esqueci a senha e Validação

<img src="" width="640" heigth="360" />

### E-mail de recuperação e Validação

<img src="" width="640" heigth="360" />

### Recuperação de senha e Validação

<img src="" width="640" heigth="360" />

### Atualização de cotações

<img src="" width="640" heigth="360" />

### Atualização de cotação de uma moeda e Validação

<img src="" width="640" heigth="360" /> <img src="" width="640" heigth="360" />

## :pencil: Tarefas em aberto

🖊 Veja no [trello!](https://trello.com/b/i927X7pr/criptoindex)

## :octopus: Desenvolvedor

| [<img src="https://avatars1.githubusercontent.com/u/18315899?s=460&u=54d9c6ea66f2b27120bf39dabe1d36ff22a92b9d&v=4>][(https://github.com/MGustav0](https://avatars1.githubusercontent.com/u/18315899?s=460&u=54d9c6ea66f2b27120bf39dabe1d36ff22a92b9d&v=4))" width=115><br><sub>Gustavo Moreira</sub>](https://github.com/MGustav0) |
| :---: |

## :copyright: Licença

The [MIT License](https://opensource.org/licenses/MIT) - Use freely, I am not responsible for the actions of third parties.
