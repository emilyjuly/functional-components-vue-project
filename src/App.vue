<script setup>
import { ref } from 'vue'
import TextContent from './components/TextContent';

const values = ref([
  { type: 'h1', content: 'Essa é uma página que usa functional component' },
  { type: 'p', content: 'Todo o conteúdo dessa página, é renderizado usando o mesmo functional component, mudando apenas o tipo do elemento e o conteúdo (o texto escrito nele)' },
  { type: 'h2', content: 'O que é um functional component?' },
  { type: 'p', content: 'Um functional component é um componente que é renderizado usando render function. Ele pode ser renderizado dinamicamente de acordo com as propriedades passadas. Ele não cria uma instância de si mesmo e nem armazena estado, também não é possível usar hook de ciclo de vida dos componentes do Vue como o onMounted. Esse componente é apenas uma função que recebe props e devolve vnodes.' },
  { type: 'hr', content: '' },
  { type: 'h3', content: 'Em quais cenários é aplicável usar functional component?' },
  {
    type: 'ul',
    content: [
      'Componentes simples e sem estado',
      'Componentes de alta performance',
      'Renderização dinâmica',
      'Componentes temporários',
      'Abstrações de UI'
    ]
  },
  { type: 'hr', content: '' },
  { type: 'h3', content: 'Por que usar functional component para a criação dessa página?' },
  { type: 'p', content: 'Se eu fosse fazer essa página "na mão" eu iria ter que escrever todo o HTML dela, e se eu fosse usar um componente normal do Vue para reutilizá-lo e criar essa página, eu precisaria de uma lógica extensa no <template></template> para identificar qual o tipo de elemento HTML que deve ser renderizado.' },
  { type: 'p', content: 'Usando functional componente, eu não preciso dessa lógica extensa no meu componente, pois eu posso usar render function, que permite receber dinamicamente o tipo de elemento HTML que será renderizado, me permitindo então criar um componente reutilizável e poder renderizar dinamicamente o conteúdo que eu quero.' },
  { type: 'p', content: 'Para entender melhor sobre functional component, recomendo fortemente consumir os conteúdos da lista abaixo.' },
  { type: 'hr', content: '' },
  { type: 'h3', content: 'Conteúdos para estudar functional components no Vue 3' },
  {
    type: 'a',
    content: ['Documentação oficial do Vue', 'https://vuejs.org/guide/extras/render-function#functional-components']
  },
  { type: 'br', content: '' },
  {
    type: 'a',
    content: ['Documentação oficial do Vue, guia de migração', 'https://v3-migration.vuejs.org/breaking-changes/functional-components']
  },
  { type: 'br', content: '' },
  {
    type: 'a',
    content: ['Youtube: Vue Functional Components Simplified', 'https://www.youtube.com/watch?v=eFGOZmf1U0o']
  },
  { type: 'br', content: '' },
  {
    type: 'a',
    content: ['Meu LinkedIn, onde tenho diversos posts sobre Vue', 'https://www.linkedin.com/in/emily-july/']
  },
  { type: 'br', content: '' },
  {
    type: 'a',
    content: ['Meu Instagram, onde post dicas de cursos e materiais para aprender Vue', 'https://www.instagram.com/juulydev/profilecard/?igsh=eGFteHhrOXQ2eGoz']
  },
  { type: 'br', content: '' },
  {
    type: 'a',
    content: ['O repositório com o código dessa paǵina', 'https://github.com/emilyjuly/functional-components-vue-project']
  },
])
</script>

<template>
  <TextContent v-for="{ type, content } in values" :key="content" :type="type" :content="content" />
</template>

<style scoped></style>
