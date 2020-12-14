# CriptoIndex - Back-end

![Badge](https://img.shields.io/badge/types-Flow%20%7C%20TypeScript-blue)
![Badge](https://img.shields.io/badge/node-%3E%3D%2012.18.2-brightgreen)
![Badge](https://img.shields.io/badge/PostgreSQL-v12.0-lightblue)

## Estado del proyecto

> :heavy_check_mark: terminado

## Tópicos

🔹 [Descripción del Proyecto](#link-descripción-del-proyecto)

🔹 [Funcionalidades](#information_source-funcionalidades)

🔹 [Prerrequisitos](#sparkles-prerrequisitos)

🔹 [Iniciar/Configurar base de datos](#floppy_disk-iniciar/iniciar/configurar-base-de-datos)

🔹 [Cómo ejecutar la aplicación](#arrow_forward-cómo-ejecutar-la-aplicación)

🔹 [E-mail](#mailbox-e-mail)

🔹 [Cómo ejecutar las pruebas](#building_construction-cómo-ejecutar-las-pruebas)

🔹 [Insomnia](#sleeping-insomnia)

🔹 [Datos de la API](#scroll-dados-de-la-api)

🔹 [Tareas abiertas](#pencil-tareas-abiertas)

🔹 [Desarrolladores](#octopus-desarrolladores)

## :link: Descripción del Proyecto

<p align="justify">

  En este proyecto me baso en las instrucciones para el [desafío](https://github.com/betrybe/technical-test), Creo una API para registrar, iniciar sesión, recuperar contraseña, validar campos, enumerar valores monetarios y enumerar valores basados ​​en una cantidad de un tipo de moneda. La API de CriptoIndex realizará solicitudes a la API de[CoinDesk](https://www.coindesk.com/coindesk-api) para generar JSON personalizados para satisfacer los requisitos.

</p>

## :information_source: Funcionalidades

:heavy_check_mark: Login

:heavy_check_mark: Registro

:heavy_check_mark: Recuperación de contraseña por correo electrónico

:heavy_check_mark: Enumerar y actualizar valores monetarios

:heavy_check_mark: Listar y actualizar valores de moneda

## :sparkles: Prerrequisitos

⚠️ [Node](https://nodejs.org/en/download/)

⚠️ [Yarn](https://yarnpkg.com/getting-started/install)

⚠️ [Docker](https://www.docker.com/products/docker-desktop)

⚠️ [PostgreSQL Docker](https://hub.docker.com/_/postgres)

## :floppy_disk: Iniciar/Configurar base de datos

❗️ Deberá seguir los pasos a continuación para poder ejecutar la aplicación en su máquina.

Tener instaladas imágenes de Docker y PostgreSQL, MongoDB y Redis.

### :elephant: Instalar PostgreSQL a través de Docker

* `docker run --name CriptoIndexPostgre -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
* Comprueba si la imagen está girando: `docker ps`
* Usuario: postgres
* Contrseña: docker
* Acceso por la terminal: `docker exec -it nome_do_container bash`

### :dolphin: Crear base de datosPostgreSQL

1. Instale DBeaver o otro administrador de base de datos, o hágalo desde la línea de comandos.
2. Accede con el nombre de usuario y la contraseña antes mencionados.
3. Create a Database with the name __CriptoIndex__.

## :arrow_forward: Cómo ejecutar la aplicación

Ahora navegue a la carpeta creada y ábrala en Visual Studio Code, ejecute el comando `yarn` dentro de la carpeta en su terminal para instalar todas las dependencias.

Realizar migraciones a la base de datos: `yarn typeorm migration:run`.

Después de la instalación, escriba: `yarn dev:server`.

¡Listo! Ahora solo acceda a la aplicación desde el enlace: http://localhost:3333/ via insomnia, o via web front-end.

## :mailbox: E-mail

Para utilizar la función de recuperación de contraseña del usuario, el terminal debe estar abierto, ya que Ethereal generará un enlace para acceder a la bandeja de entrada con el token.

En Insomnia bajo _Restablecer contraseña_, ingrese el token generado en _ "token:": "" _ en el espacio vacío y haga clic en _Enviar_.

## :building_construction: Cómo ejecutar las pruebas

En la misma carpeta que el proyecto, en la terminal, escriba:

```bash
yarn test
```

## :sleeping: Insomnia

Descarga el [insomnia](https://insomnia.rest/download/), para utilizar el mismo espacio de trabajo utilizado en el proyecto haz clic [aquí](https://github.com/MGustav0/CriptoIndex/blob/main/extras/insomnia_-_criptoIndex.json), descarga e importa tu insomnia.

Para insertar el token generado por la API en la ruta _Authenticate_, haga clic en _Dev_, debajo del nombre del proyecto, luego en _Manage Environments_, pegue su token adquirido durante la autenticación y, finalmente, haga clic en _Done_. ¡Listo! ¡Has iniciado sesión en la aplicación!

## :scroll: Datos de la API

### Registro

<img src="https://github.com/MGustav0/CriptoIndex/blob/main/extras/screenshots/api/01_-_register.png" width="640" heigth="360" />

### Inicio de sesión

<img src="https://github.com/MGustav0/CriptoIndex/blob/main/extras/screenshots/api/02_-_signin.png" width="640" heigth="360" />

### Contraseña olvidada

<img src="https://github.com/MGustav0/CriptoIndex/blob/main/extras/screenshots/api/03_-_forgot_password.png" width="640" heigth="360" />

### Correo electrónico de recuperación

<img src="https://github.com/MGustav0/CriptoIndex/blob/main/extras/screenshots/api/04_-_email_forgot_pass.png" width="640" heigth="360" />

### Recuperación de contraseñas

<img src="https://github.com/MGustav0/CriptoIndex/blob/main/extras/screenshots/api/05_-_reset_password.png" width="640" heigth="360" />

### Actualización de cotizaciones

<img src="https://github.com/MGustav0/CriptoIndex/blob/main/extras/screenshots/api/06_-_update_rate.png" width="640" heigth="360" />

### Visualizar monedas

<img src="https://github.com/MGustav0/CriptoIndex/blob/main/extras/screenshots/api/07_-_show_currencies.png" width="640" heigth="360" />

## :pencil: Tareas abiertas

🖊 Veja no [trello!](https://trello.com/b/i927X7pr/criptoindex)

## :octopus: Desarrolladores

| [<img src="https://avatars1.githubusercontent.com/u/18315899?s=460&u=54d9c6ea66f2b27120bf39dabe1d36ff22a92b9d&v=4>][(https://github.com/MGustav0](https://avatars1.githubusercontent.com/u/18315899?s=460&u=54d9c6ea66f2b27120bf39dabe1d36ff22a92b9d&v=4))" width=115><br><sub>Gustavo Moreira</sub>](https://github.com/MGustav0) |
| :---: |

## :copyright: Licencia

The [MIT License](https://opensource.org/licenses/MIT) - Use freely, I am not responsible for the actions of third parties.
