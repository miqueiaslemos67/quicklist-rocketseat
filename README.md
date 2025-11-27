# Quicklist • Lista de Compras

Desafio prático da Rocketseat: uma lista de compras simples, com foco em **JavaScript**, boas práticas de UI e tratamento de erros.

## 🎯 Objetivo

Permitir que o usuário:

- Adicione itens à lista
- Marque itens concluídos
- Remova itens da lista **apenas se estiverem marcados**
- Receba feedback visual e textual ao tentar remover um item

---

## 🖥️ Layout

Interface construída a partir do layout proposto pela Rocketseat, com:

- Tipografia **Inter**
- Paleta em tons de rosa, cinza e branco
- Logo personalizada em SVG
- Versão **desktop e mobile** responsiva

> Ajustei manualmente alinhamentos, centralização da logo e recriei o ícone em SVG para ficar fiel ao layout.

---

## 🧠 Funcionalidades

- ✅ Marcar item como concluído usando o checkbox  
- 🗑️ Remover item da lista  
- ⚠️ **Tratamento de erro ao remover:**
  - Se o item **não estiver marcado** e o usuário clicar na lixeira:
    - Um toast de aviso é exibido
    - O card do item “chacoalha”
    - O checkbox ganha borda vermelha temporária
  - Se o item estiver marcado, a remoção é feita com sucesso e uma mensagem de confirmação aparece

---

## 🛠️ Tecnologias

- HTML
- CSS
- JavaScript

---

## 🚀 Como executar

1. Clone o repositório:

```bash
git clone https://github.com/miqueiaslemos67/quicklist-rocketseat.git   
