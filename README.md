<h3 align="center">
  PseudoEcommerce
</h3>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-iniciando-o-projeto">Iniciando o projeto</a>&nbsp;&nbsp;&nbsp;
</p>

## 👨🏻‍💻 Sobre o projeto

- O projeto consiste em uma aplicação mobile, com objetivo de simular um pequeno ecommerce de games.


## 💻 Iniciando o projeto

**Clone o projeto e acesse a pasta gerada**

```bash
$ git clone https://github.com/PedroGomes1/pseudo-ecommerce.git && cd pseudo-ecommerce
```

**Siga os passos abaixo**

```bash
# Instale todas as dependências
$ yarn

# Inicie o servidor
$ npx json-server server.json -p 3333 -w
$ json-server --watch -p 3333 server.json

Se estiver utilizando o emulador android:
$ yarn android

Se estiver utilizando o emulador ios:
$ yarn ios

OBS: Caso encontre algum erro ao tentar utilizar a API, tente rodar:
$ adb reverse tcp:3333 tcp:3333
e reinicie o comando para inicializar o servidor novamente:
$ json-server --watch -p 3333 server.json
```

Feito por Pedro Gomes 👋 [Meu Linkedin](https://www.linkedin.com/in/pedro-henrique-gomes-barbosa-667766178/)
