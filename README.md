

<h1 align="center">
    <a href="">🔗 Teste Pratico Boleto</a>
</h1>
<p align="center">🚀 Inicio do projeto siaf</p>

<img src="https://www.ewally.com.br/wp-content/uploads/2020/06/logotipo-1.svg"/>

<h4 align="center"> 
   Tecnologias Usadas
</h4>

<p> - Node </p>
<p> - Express </p>
<p> - Typescript </p>
<p> - dotenv </p>

# Menu
<br>
<p align="center">
 <a href="#arquitetura">Arquitetura</a> •
<a href="#env">.env</a> • 
 <a href="#instalacao">Instalação</a> •
 <a href="#routes">Routes</a> • 
 <a href="#config">Config</a> • 
</p>

# Arquitetura
<br>
<div id="arquitetura">

<p><b>Repositories:</b> contém nossas classes de acesso ao banco de dados ou serveless .  </p>
<p><b>UseCases:</b> Eles são responsáveis ​​por atender ao que os controladores REST precisam, acessando diferentes repositórios  </p>
<p><b>Controladores:</b>ontém nossos controladores REST . Eles são responsáveis ​​por mediar a comunicação entre o usuário e os UseCases. Eles recebem solicitações e retornam respostas.  </p>

</div>

# .Env
<br>

<div id="env">
Adicione o arquivo <b>.env</b> como descrito acima.



```bash
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=test-node-boleto
```
</div>

# Instalação
<br>
<div id="instalacao">

Execute o codigo abaixo abaixo;

```bash
npm install
```
</div>

# Routes

<br>
<div id="routes">

Existem as Rotas principais

usuarios, noticias ....

E rotas filhas

usuarios
```bash
 get(listar), post(cadastrar),put(update), delete(deletar)
```
</div>

# Config
<br>
<div id="config">

<p><b>constants:</b> contantes que serão repeditas durante toda aplicação. </p>
<p><b>errors:</b> Aqui sera colocar uma padronização dos erros. </p>
<p><b>events:</b> Todas aplicações que será necessario ter uma ação em um determinado dia ou em um intervalo de tempo sera colocados em events. </p>
<p><b>helpers:</b> Metodos que serão replicados por toda aplicação. </p>
<p><b>utils:</b> codigo de pequeno porte que sera compartilhado em toda aplicação ( como formatação de data ). </p>

</div>

<br>

<h4 align="center"> 
	🚧   Não esqueça de inserir arquivo .env e executar npm install no terminal   🚧
</h4>