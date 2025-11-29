# Automa.io (Projeto da Disciplina)

- **Autor:** Eduardo Portes Bueno

## 1. Descrição do Projeto

Este projeto é uma aplicação web responsiva (mobile-first) para a disciplina de Frameworks CSS. O tema é "Automa.io", uma plataforma de automação onde usuários podem se cadastrar, logar, solicitar novas automações (preenchendo um formulário) e visualizar as automações já cadastradas em um dashboard.

A aplicação foi construída com **Bootstrap 5**, **Sass (SCSS)**, e **JavaScript** (para interatividade), e utiliza um **JSON Server** como back-end "fake" para persistência de dados.

## 2. Links do Projeto

- **Prototipação no Figma (ID 01):** [https://www.figma.com/design/uryimLbfDaLZd2i0w1Ukfu/SIEC-AUTOMAIO](https://www.figma.com/design/uryimLbfDaLZd2i0w1Ukfu/SIEC-AUTOMAIO)
- **Site em Produção (GitHub Pages):** [https://eduardoportesbueno.github.io/automaio/](https://eduardoportesbueno.github.io/automaio/)
- **Repositório GitHub:** [https://github.com/EduardoPortesBueno/automaio](https://github.com/EduardoPortesBueno/automaio)

## 3. Tecnologias Utilizadas

- **Framework CSS:** Bootstrap 5.3.3
- **Pré-processador:** Sass (SCSS)
- **Back-end (Fake):** JSON Server
- **Bibliotecas JavaScript:**
  - jQuery (para manipulação do DOM e plugins)
  - jQuery Mask Plugin (para máscaras de formulário)
- **Ferramentas de Desenvolvimento:**
  - Node.js e NPM (Gerenciamento de pacotes)
  - ESLint (Linter de código)
  - Prettier (Formatador de código)

## 4. Instruções de Execução Local

Este projeto requer dois terminais rodando simultaneamente (um para a API e outro para o Sass).

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/EduardoPortesBueno/automaio.git](https://github.com/EduardoPortesBueno/automaio.git)
    cd automaio
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Terminal 1: Rode a API (JSON Server):**

    ```bash
    npm run server
    ```

    _(O servidor estará rodando em `http://localhost:3000`)_

4.  **Terminal 2: Rode o Sass (Watch Mode):**

    ```bash
    npm run watch
    ```

    _(Isso irá compilar `scss/main.scss` para `css/style.css`)_

5.  **Abra o projeto:**
    - Abra os arquivos `.html` (como `index.html`) no seu navegador (ex: usando a extensão Live Server do VS Code).

## 6. Checklist de Funcionalidades (IDs da Avaliação)

### RA1 - Frameworks CSS

- [x] **ID 02 (Layout com Framework):** Layouts responsivos criados com o Grid (`row`, `col-`) e utilitários Flexbox (`d-flex`) do Bootstrap.
- [x] **ID 03 (Layout com CSS Puro):** Classes customizadas (`.icon-bg`, `.confirmation-overlay`) usam Flexbox e Position para alinhamento.
- [x] **ID 04 (Componentes Prontos):** Utiliza `navbar`, `card`, `btn`, `form-select`, `input-group`, `carousel`, `collapse` (chat) e `dropdown` (logout).
- [x] **ID 05 (Unidades Relativas):** O framework Bootstrap 5 usa `rem` por padrão. `vh` foi usado no chat e `rem` nas classes customizadas.
- [x] **ID 06 (Design System):** O Design System é aplicado via Sass, sobrescrevendo a variável `$primary` para a cor laranja.
- [x] **ID 07 (Sass):** O projeto usa `scss/main.scss` e `scss/custom/_variables.scss` para importar o Bootstrap e sobrescrever suas variáveis.
- [x] **ID 08 (Tipografia Responsiva):** A tipografia fluida do Bootstrap foi ativada via Sass (`$enable-responsive-font-sizes: true`).
- [x] **ID 09 (Responsividade de Imagens):** Imagens (gráficos, testemunhos) usam as classes `.img-fluid` e `.rounded-circle`.
- [x] **ID 10 (Otimização de Imagens):** Imagens otimizadas (ex: via TinyPNG) para performance.

### RA2 - Formulários

- [x] **ID 11 (Validação HTML Nativa):** Os formulários de Login, Registro e Nova Automação usam `required` e os scripts de validação (`.needs-validation`) do Bootstrap.
- [x] **ID 12 (REGEX):** O campo de Telefone (`register.html`) usa um `pattern` HTML com REGEX para validar o formato.
- [x] **ID 13 (Elementos de Seleção):** Utiliza `<select>`, `<textarea>` e botões-toggle (que atuam como checkboxes).
- [x] **ID 14 (Web Storage):** O `localStorage` é usado para persistir o estado de login do usuário (criar o login, logout e guardiões).

### RA3 - Ferramentas

- [x] **ID 15 (Node.js e NPM):** `package.json` é usado para gerenciar todas as dependências (Bootstrap, Sass, JSON Server, ESLint).
- [x] **ID 16 (Git/GitHub):** O projeto foi versionado no Git, usa `.gitignore`, e está hospedado no GitHub Pages.
- [x] **ID 17 (README.md):** Este `README.md` segue o padrão da disciplina.
- [x] **ID 18 (Organização de Arquivos):** O projeto segue a estrutura modular (`/scss`, `/css`, `/img`, `db.json`).
- [x] **ID 19 (Linters e Formatadores):** O projeto está configurado com ESLint (`.eslintrc.json`) e Prettier (`.prettierrc.json`).

### RA4 - Bibliotecas JavaScript

- [x] **ID 20 (jQuery):** Utilizado no `register.html` para selecionar elementos (`$('#phone')`) e no `$(document).ready()`.
- [x] **ID 21 (Plugin jQuery):** O **jQuery Mask Plugin** é usado no campo de Telefone (`register.html`).

### RA5 - APIs

- [x] **ID 22 (API fake - POST):** O formulário `new-automation.html` usa `fetch` para enviar (POST) os dados para o `json-server`.
- [x] **ID 23 (API fake - GET):** A página `automations.html` usa `fetch` para buscar (GET) os dados do `json-server` e renderizar os slides dinamicamente.
- [x] **ID 24 (API pública real):** O formulário `register.html` usa `fetch` para buscar (GET) dados da API **ViaCEP** e preencher o endereço.
