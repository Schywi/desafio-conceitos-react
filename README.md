<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Desafio 03: Conceitos do ReactJS
</h3>


## :rocket: Sobre o desafio

Nesse desafio, você deve criar uma aplicação para treinar o que você aprendeu até agora no ReactJS!

Agora você deve continuar desenvolvendo a aplicação que irá armazenar repositórios do seu portfólio, que você já desenvolveu o backend no último desafio utilizando o Node.js.
## Conceitos abordados

### Componentização
Tudo no React são componentes , então podemos dividir nossa aplicação em funções que retornam HTML,CSS e javascript 
, colocando os codigos em arquivos separados , logo tudo que possa ser removido do arquivo principal e colocado em outro
sem alterar o principal é um componente. 

### Propriedades
São informações que podemos passar de um componente PAI para um componente FILHO

PAI: Passamos a propriedade "title" para o filho <Header/>

`
import React from 'react';
import Header from './components/Header';
function App() {
  return (
    <>
      <Header title="React"/>
      <Header title="NodeJS"/>
    </>)
}
export default App;
`

FILHO: Precisamos importar as propriedades passadas do PAI , utilizando (props) e criando a variavel {props.title}

`
import React from 'react';
export default function Header(props) {
    return( 
      <header> 
        <h1>{props.title}</h1> 
      </header>
  );
}
`

### Estado 
Estado se assemelha a um array que contém informações sobre o estado atual do componente (parâmetros do componente). Usa-se a função useState para alterar os valores do estado. 

useState(): retorna um array com 2 posições a primeira é a variavel que guardaremos as informações e a segunda é uma função para alterar o estado. 
`const [ṕrojects,setProjects] = useState([])`


### Imutabilidade
 O conceito de imutabilidade diz que não podemos mutar variaveis (incluir informações e excluir informaçõe de maneira direta) nós precisamos sempre recriar a informação aplicando as alterações que desejamos.

Então não podemos utilizar :
`.push()`

Devemos copiar a informação  do array e acrescentar a nova informação.
Em vez de : `projects.push(project)`
Usariamos: `setProjects([...projects, project])`

## Instalar dependências

Abra e execute o comando `yarn` no seu terminal para instalar todas as dependências.

### Funcionalidades esperadas da aplicação

- **`Listar os repositórios da sua API`**: Deve ser capaz de criar uma lista com o campo **title** de todos os repositórios que estão cadastrados na sua API.

- **`Adicionar um repositório a sua API`**: Deve ser capaz de adicionar um novo item na sua API através de um botão com o texto **Adicionar** e, após a criação, deve ser capaz de exibir o nome dele após o cadastro.

- **`Remover um repositório da sua API`**: Para cada item da sua lista, deve possuir um botão com o texto **Remover** que, ao clicar, irá chamar uma função para remover esse item da lista do seu frontend e da sua API.

### Específicação dos testes

Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.

Para esse desafio temos os seguintes testes:

- **`should be able to add new repository`**: Para que esse teste passe, sua aplicação deve permitir que um repositório seja adicionado ao seu backend e listado no seu frontend dentro de uma `LI`.

- **`should be able to remove repository`**: Para que esse teste passe, sua aplicação deve permitir que ao clicar no botão de remover que vai estar dentro da `LI` do repositório adicionado, o item seja removido da listagem.
