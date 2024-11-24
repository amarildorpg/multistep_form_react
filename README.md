# Multi-step Form React

Este projeto é uma aplicação em React que implementa um formulário multi-etapas (multi-step form). Ele demonstra como organizar e gerenciar formulários com várias etapas, utilizando componentes React para criar uma experiência interativa e modular.

## 📝 Funcionalidades

- Formulário dividido em etapas lógicas.
- Navegação entre etapas com botões **Avançar** e **Voltar**.
- Validação de dados em cada etapa.
- Organização de componentes para maior modularidade.
- Estilo responsivo e intuitivo.

## 🚀 Tecnologias utilizadas

- **React**: Biblioteca principal para construção da interface.
- **Vite**: Ferramenta de build para desenvolvimento rápido.
- **JavaScript (ES6+)**: Linguagem de programação para lógica da aplicação.
- **CSS**: Estilização do projeto.

## 📂 Estrutura do projeto

A estrutura principal do repositório é organizada da seguinte forma:

multistep_form_react/ 
```plaintext
multistep_form_react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Step1.jsx
│   │   ├── Step2.jsx
│   │   ├── Step3.jsx
│   │   └── Navigation.jsx
│   ├── App.jsx
│   └── index.jsx
├── package.json
├── vite.config.js
└── README.md
```

- **`public/index.html`**: Arquivo HTML principal.
- **`src/components/`**: Contém os componentes individuais para as etapas do formulário e a navegação.
- **`src/App.jsx`**: Gerencia o fluxo das etapas e os dados do formulário.
- **`src/index.jsx`**: Ponto de entrada do React.
- **`vite.config.js`**: Configuração do Vite.

## 🔧 Instalação e execução

Siga os passos abaixo para executar o projeto localmente:

1. Clone o repositório:
   git clone https://github.com/amarildorpg/multistep_form_react.git

2. Navegue até o diretório do projeto:
cd multistep_form_react

3. Instale as dependências:
npm install

4. Execute o projeto:
npm run dev


