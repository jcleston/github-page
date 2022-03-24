<h4 align="center"> 
	🚧  Em construção...  🚧
</h4>
<br /><br />


Menu Geral
=================
<!--ts-->
   * [Sobre](#sobre)
   * [Tecnologias](#tecnologias)
   * [Começando](#começando)
   * [Instalação](#instalação)
      * [Bash](#bash)
      * [NodeJs](#nodejs)
      * [React](#react)
      * [GIT](#git)
      * [VScode](#vscode)
   * [Desenvolvimento](#desenvolvimento)
   * [Links](#links)
   * [Licença](#licença)
   * [Contatos](#contatos)   
   * [Status](#status)   
   * [Meu Github](#meu-github)
   * [Autor](#autor)
   * [Minhas Skills](#minhas-skills)
   * [Estou Aprendendo](#estou-aprendendo)
<!--te-->
<br /><br />

## Sobre
<h1>Minha página pessoal</h1>
<p>🚀 Página desenvolvida como laboratório de teste no desenvolvimento FRONT-END com REACT e plugins relativos utilizando o github-page</p>
<br /><br />


## Tecnologias
<a href="https://pt.wikipedia.org/wiki/Linux"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" width="40"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://pt.wikipedia.org/wiki/HTML5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" width="40"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://pt.wikipedia.org/wiki/CSS3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" width="40"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="40"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://pt-br.reactjs.org/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="40"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://bulma.io/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg" width="40"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://github.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" width="40"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://github.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" height="40"/></a>
<br /><br />


## Começando
Nesse projeto estou utilizando as seguintes tecnologias:
- [Bash](https://pt.wikipedia.org/wiki/Bash)
- [NodeJs](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [GIT](https://git-scm.com/)
- [VScode](https://code.visualstudio.com/)
- [Bulma](https://bulma.io/)
<br /><br />



## Instalação
Para iniciar o desenvolvimento, é necessário efetuar as seguintes instalações:

## Bash
```shell
sudo apt-get update
sudo apt-get install bash
```

## NodeJs
```shell
sudo apt install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
source ~/.bashrc
nvm list-remote
nvm install v16.14.2
nvm use v16.14.2
node -v
```

## React
```shell
npx create-react-app my-app
npm start
```

## GIT
```shell
sudo apt-get update 
sudo apt-get install git
git --version
git config --global user.name "seu-perfil-git" 
git config --global user.email "seu-email-git"
git config -l
```

## VScode
```shell
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo apt-get update
sudo apt-get install code
```

Após todas as instalações, efetuei a seguinte estapa:

## Desenvolvimento
<ul>
<li>Criação e execução de novo projeto React.</li>

```shell
npx create-react-app github-page
cd github-page
npm start
```

<br />
<li>Criação de novo repositório no Git Hub.</li>
Nome para o repositório: github-page
Tipo do repositório: público<br />
<a href="https://docs.github.com/pt/repositories/creating-and-managing-repositories/creating-a-new-repository" target="blank">Link para a documentação oficial</a>

<br /><br />
<li>Apontar o projeto criado anteriormente para o Github.</li> 
Copiar a linha do painel do novo repositório

```shell
git remote add origin git@github.com:seu-perfil-git/github-page.git
```
Executar a linha copiada via terminal, no diretório do novo projeto.
obs: isso irá efetuar um link via acesso Remoto entre o repositório e o novo projeto

<li>Atualizar o repositório com o código-fonte do novo projeto</li>
Executar via terminal, no diretório do novo projeto.

```shell
git push -u origin master
```
obs: Nesse momento o projeto já estará disponível no repositório, e todo o push executado irá atualizar o Github.

<li>Criar estrutura para que o Github entenda os comandos a serem executados</li>
- Criar o diretório .github dentro do diretório github-pages.<br />
- Criar o diretório workflows dentro do diretório .github.<br />
- Criar o arquivo build.yml dentro do diretório workflows.<br /><br />

Código para o arquivo build.yml

```shell
name: deploy

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: '14.x'
      - name: Build web-app
        run: |
          npm ci
          npm run build
      - name: Deploy to gh-pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

Obs: sempre que for executado o push, será executado também as instruções do arquivo build.yml, onde os parâmetros passados são: 
S.O e sua versão, checkout, versão do node, instalação das dependências utilizando o ci, execução do build, deploy do gh-pages (essa branche ainda não foi configurada no Github).

<br />
<li>Atualizar o repositório com as novas modificações de configuração</li>

```shell
git add .
git commit -m "mensagem do commit"
git push origin master
```
Obs: após a finalização do push no github e suas execuções internas de deploy, já será visível a branche gh-pages no painel do repositório.

<br />
<li>Configurar o projeto para apontar para o gh-pages</li>
Ir na opção Settings->Pages do repositório, após isso selecionar gh-pages na combo Source e salvar.
A mensagem que o site esta no ar será apresentada, junto com o link de acesso

<br />
<li>Apontar na aplicação a rota para o github-page</li>
Editar o arquivo package.json do projeto, adicionando o parâmetro:

```shell
"homepage":"github-page/",
```

Obs: Adicionar a linha logo após o parâmetro: "version", isso irá indicar para a aplicação a página inicial github-page

<br />
<li>Atualizar o repositório com as novas modificações de configuração</li>

```shell
git add .
git commit -m "mensagem do commit"
git push origin master
```

<br />
<li>PRONTO! A aplicação deverá estar rodando corretamente</li>
Para ver no ar acesse o site:
<a href="https://seu-usuario-git.github.io/github-page/">https://seu-usuario-git.github.io/github-page/</a>

<br /><br />
<li>EXTRA: Configurando o Bulma no projeto React</li>
Para instalar o bulma execute o seguinte comando via terminal, no direório raiz do projeto

```shell
npm install bulma
```

Faça a importação no arquivo App.js

```shell
import 'bulma/css/bulma.min.css';
```

Para mais detalhes, siga a documentação do Bulma no Link: <a href="https://bulma.io/documentation/overview/start/">https://bulma.io/documentation/overview/start/</a>
</ul>
<br /><br />

## Links
- [Bulma](https://bulma.io/)
- [Devicon](https://devicon.dev/)
- [Shields](https://shields.io/)
<br /><br />

## Licença
Não se aplica.
<br /><br />

## Contatos
<div>
<a href="https://www.linkedin.com/in/janescleston/" target="blank"><img src="https://img.shields.io/badge/-Janes Cleston-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
<a href="https://www.instagram.com/jcleston/" target="blank"><img src="https://img.shields.io/badge/-Jcleston-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
<a href = "mailto:janes.cleston.silva@gmail.com"><img src="https://img.shields.io/badge/janes.cleston.silva@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
<a href="https://jcleston.github.io/github-page/" target="_blank"><img alt="Website" src="https://img.shields.io/website?style=for-the-badge&url=https%3A%2F%2Fjcleston.github.io%2Fgithub-page%2F"></a>
</div>
<br /><br />

## Status
[![Build Status](https://travis-ci.org/condessalovelace/mavenquickstart.svg?branch=master)](https://travis-ci.org/condessalovelace/mavenquickstart) ![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=br.com%3Amavenquickstart&metric=alert_status)
<br /><br />


## Meu Github
<div>
<a href="https://github.com/jcleston">
<img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=jcleston&layout=compact&langs_count=7&theme=dracula"/>
<img height="180em" src="https://github-readme-stats.vercel.app/api?username=jcleston&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
</a>
</div>
<br /><br />

## Autor
<img src="https://avatars.githubusercontent.com/u/13952621?v=4" width="100px;" alt=""/>
<br />
Feito com ❤️ por <a href="https://www.linkedin.com/in/janescleston/" title="Janes Cleston">🚀Janes Cleston</a> 👋🏽
<br /><br />

## Minhas Skills
<a href="https://pt.wikipedia.org/wiki/Linux"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" width="50"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://pt.wikipedia.org/wiki/HTML5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" width="50"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://pt.wikipedia.org/wiki/CSS3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" width="50"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="50"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://www.php.net/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" width="50"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://www.mysql.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" width="50"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://www.postgresql.org/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" width="50"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://github.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" width="50"/></a>
<br /><br />


## Estou aprendendo
<a href="https://pt-br.reactjs.org/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="50"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://nodejs.org/en/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" width="50"/></a>
<br /><br />