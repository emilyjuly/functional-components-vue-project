# Vue 3 - Functional Components Project
Este projeto foi desenvolvido para demonstrar o uso de Functional Components em Vue 3. O objetivo principal é criar uma página completa utilizando apenas componentes funcionais, sem a necessidade de utilizar o sistema de templates do Vue, com foco em como o conteúdo pode ser renderizado dinamicamente de maneira simples e eficaz.

### O que são Functional Components?
Um Functional Component no Vue 3 é um componente que não possui instância, nem estado próprio, e que é apenas uma função que recebe props e retorna um vnode. Isso permite uma renderização altamente otimizada e flexível, pois o componente pode ser definido e renderizado dinamicamente. <br>

Neste projeto, a página é completamente gerada usando apenas um único componente funcional, que recebe informações sobre o tipo de HTML que precisa ser renderizado e o conteúdo a ser exibido.

### Objetivo do Projeto
Este projeto tem como objetivo:

Demonstrar como usar Functional Components para renderizar uma página inteira.
Eliminar a necessidade de lógica extensa no <template>, utilizando apenas a renderização dinâmica via render function.
Mostrar as vantagens dos componentes funcionais, como alta performance e simplicidade na criação de componentes reutilizáveis.
Como o Projeto Funciona
A página renderizada é composta por vários tipos de elementos HTML (como títulos, parágrafos, listas e links), todos gerados através de um componente funcional, TextContent. O conteúdo e o tipo de cada elemento são definidos em um array de objetos e passados dinamicamente para o componente.

### Como Executar o Projeto
Clonar o repositório:

<code>git clone https://github.com/seu-usuario/vue3-functional-components-project.git</code>

Instalar as dependências:

Dentro do diretório do projeto, execute o seguinte comando para instalar as dependências:

<code>npm install</code>

Executar o projeto:

Após a instalação das dependências, inicie o servidor de desenvolvimento:


<code>npm run dev</code>

Acesse o projeto no navegador:

O projeto estará disponível em http://localhost:8080.
