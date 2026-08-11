# 💰 FinWise

O **FinWise** é um educador financeiro desenvolvido para ajudar pessoas a **planejar e alcançar seus objetivos financeiros** de forma simples e prática.

A aplicação permite que o usuário informe uma meta financeira e visualize uma estratégia de economia, mostrando **quanto precisa guardar e como se organizar para alcançar o objetivo dentro do prazo desejado**.

Além de realizar novas simulações, o FinWise também permite consultar o **histórico dos resultados**, facilitando o acompanhamento das simulações realizadas anteriormente.

## 🎯 O que o projeto faz?

O FinWise busca transformar objetivos financeiros em planos mais claros e fáceis de acompanhar.

Por meio das simulações, o usuário consegue entender melhor:

* Qual é o valor da sua meta;
* Quanto precisa economizar;
* Como se organizar financeiramente para atingir o objetivo;
* Qual estratégia de economia pode ser utilizada;
* Quais resultados foram obtidos em simulações anteriores.

A ideia é tornar a educação financeira mais acessível, ajudando o usuário a tomar decisões melhores e transformar uma meta financeira em um plano de ação.

## 🚀 Como executar a aplicação

### Pré-requisitos

Para executar o projeto localmente, é necessário ter instalado:

* **Node.js**
* **npm**

### Instalação

Clone o repositório:

```bash
git clone https://github.com/JuanDaMata/FinWise.git
```

Entre na pasta do projeto:

```bash
cd FinWise
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse no navegador o endereço exibido pelo Vite, normalmente:

```text
http://localhost:5173
```

### Outros comandos

Para gerar a versão de produção:

```bash
npm run build
```

Para executar a aplicação a partir da build:

```bash
npm run preview
```

Para verificar problemas de lint:

```bash
npm run lint
```

## 🛠️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando:

* **React** — construção da interface e componentes;
* **TypeScript** — tipagem e segurança no desenvolvimento;
* **Vite** — ambiente de desenvolvimento e build;
* **React Router DOM** — gerenciamento das rotas da aplicação;
* **Tailwind CSS** — estilização e criação da interface;
* **Lucide React** — utilização de ícones;
* **React Loading Skeleton** — feedback visual durante carregamentos;
* **Oxlint** — análise e qualidade do código.

## ⭐ Melhoria implementada

### Histórico dos resultados

Durante o desafio, a principal melhoria implementada foi a criação da **página de histórico dos resultados**.

A funcionalidade permite que o usuário consulte as simulações realizadas anteriormente, evitando que seja necessário refazer uma simulação apenas para visualizar novamente suas informações.

A página está disponível através da rota:

```text
/historico
```

Com essa melhoria, o fluxo da aplicação passou a oferecer uma experiência mais completa:

```text
Definir objetivo
      ↓
Realizar simulação
      ↓
Visualizar resultado
      ↓
Consultar histórico
```

### 💡 Por que essa melhoria é importante?

Uma ferramenta de educação financeira não deve apenas mostrar um resultado momentâneo. O usuário também precisa conseguir **acompanhar suas decisões e consultar seus planejamentos anteriores**.

A criação do histórico contribui para isso ao permitir:

* Consultar resultados anteriores;
* Comparar diferentes simulações;
* Relembrar estratégias de economia;
* Acompanhar os planejamentos realizados;
* Ter uma visão mais organizada da sua jornada financeira.


## 🧪 Como testar o fluxo principal

Para testar o funcionamento principal do FinWise:

### 1. Criar uma meta

Na página inicial, informe os dados necessários para definir seu objetivo financeiro.

Por exemplo, o usuário pode definir uma meta para:

> Guardar dinheiro para uma viagem, comprar um produto ou alcançar determinado valor financeiro.

### 2. Realizar a simulação

Preencha as informações solicitadas e envie o formulário.

A aplicação deverá processar os dados e apresentar uma estratégia para ajudar o usuário a entender **como economizar para alcançar sua meta**.

### 3. Visualizar o resultado

Após a simulação, confira as informações apresentadas na página de resultado.

Verifique principalmente os valores relacionados à economia necessária para atingir o objetivo.

### 4. Consultar o histórico

Depois de realizar uma ou mais simulações, acesse:

```text
/historico
```

Verifique se os resultados das simulações anteriores estão disponíveis.

### 5. Testar a navegação

O fluxo principal esperado é:

```text
Nova simulação
      ↓
Resultado
      ↓
Histórico
```

Também é importante testar a navegação entre as páginas e verificar o comportamento da aplicação em diferentes tamanhos de tela.

## 📚 O que aprendi durante o desafio

Durante o desenvolvimento do desafio, pude aprofundar meus conhecimentos em **React, TypeScript e React Router**, principalmente na criação de novas páginas e na integração de uma funcionalidade ao fluxo já existente da aplicação.

A implementação do histórico também trouxe aprendizados sobre **organização de dados e experiência do usuário**, já que a funcionalidade precisava se integrar ao fluxo de simulação sem tornar a navegação mais complexa.

Outro ponto importante foi perceber que uma aplicação de educação financeira precisa ir além de simplesmente apresentar números. É necessário transformar esses números em informações que ajudem o usuário a **entender sua situação, definir objetivos e tomar decisões para alcançá-los**.

Com isso, o desafio também reforçou a importância de pensar na aplicação sob a perspectiva do usuário e não apenas da implementação técnica.

## 👨‍💻 Projeto

**FinWise — Educação financeira para transformar metas em planos.**

Desenvolvido por **Juan Da Mata**.

🔗 [Repositório no GitHub](https://github.com/JuanDaMata/FinWise)
