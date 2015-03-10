# Sample Zettajs Server

Este repositório visa exemplificar o uso do [Zettajs][zettajs]. Este projeto foi feito seguindo inicialmente o [tutorial para iniciantes do Zetta][hello-zetta]. E ao finalizar o tutorial, eu acrescentei uma funcionalidade que me atraia: a possibilidade de controlar o Banshee (Media Player) da minha máquina através do Zetta. Para isso, eu desenvolvi um driver que pode ser encontrado [aqui][zetta-banshee-driver].

## Como usar o projeto

Para utilizar o projeto basta copiar o código fonte para o seu computador:

```bash
$ git clone https://github.com/possatti/sample-zettajs-server.git
```

Entre no diretório do projeto:

```bash
$ cd sample-zettajs-server
```

E inicie o servidor usando o `npm`:

```bash
$ npm start
```

Pronto! Depois disso você já pode visualizar o seu servidor local: http://browser.zettajs.io/#/overview?url=http://127.0.0.1:1337

Ou, usá-lo através da internet em qualquer lugar do mundo (experimente carregar este link no seu celular, ou em outro computador): http://browser.zettajs.io/#/overview?url=http://hello-zetta.herokuapp.com

ATENÇÃO: Repare que enquanto o servidor estiver rodando, qualquer pessoa no mundo (!!) pode acessar a API proporcionada pelo seu servidor local. Isto é, elas podem apagar e acender a mock LED, e também controlar o Banshee. ... Ok! Não é grande coisa assim, mas você pode levar um pequeno susto se não estiver esperando por isso. ;)


[hello-zetta]: http://www.zettajs.org/projects/2014/10/13/Hello-World.html
[zettajs]: http://zettajs.org/
[banshee]: http://banshee.fm/

[zetta-banshee-driver]: https://github.com/possatti/zetta-banshee-driver

