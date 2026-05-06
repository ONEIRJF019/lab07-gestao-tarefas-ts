# LAB04 - Sistema de Gestão de Tarefas

## Descrição

Aplicação desenvolvida em TypeScript que simula o gerenciamento de tarefas
de uma equipe de desenvolvimento. O sistema permite adicionar tarefas,
atualizar seus status e consultar tarefas por projeto.

## Tecnologias utilizadas

- TypeScript
- Node.js
- ts-node

## Como executar

### 1. Instale as dependências

```bash
npm install
```

### 2. Execute o programa

```bash
npm start
```

## Testes realizados

- Adição de 3 tarefas em 2 projetos diferentes
- Atualização do status da tarefa de ID 1 de "Pendente" para "Em Andamento"
- Consulta de tarefas do projeto "Site Institucional" → retorna 2 tarefas
- Consulta de projeto inexistente → retorna mensagem de aviso

## Saída esperada no console

```
Tarefa "Criar tela de login" adicionada com sucesso.
Tarefa "Desenvolver API de usuários" adicionada com sucesso.
Tarefa "Configurar banco de dados" adicionada com sucesso.
Status da tarefa "Criar tela de login" atualizado para "Em Andamento".
ID: 1 | Descrição: Criar tela de login | Status: Em Andamento | Projeto: Site Institucional
ID: 2 | Descrição: Desenvolver API de usuários | Status: Em Andamento | Projeto: Site Institucional
Nenhuma tarefa encontrada para o projeto "Projeto Inexistente".
```