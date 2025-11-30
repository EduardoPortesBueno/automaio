# 🤖 Automa.io (Projeto da Disciplina)

![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple?style=flat&logo=bootstrap)
![Sass](https://img.shields.io/badge/Sass-SCSS-pink?style=flat&logo=sass)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat&logo=javascript)
![jQuery](https://img.shields.io/badge/jQuery-3.7.1-blue?style=flat&logo=jquery)
![JSON Server](https://img.shields.io/badge/Fake_API-JSON_Server-gray?style=flat)

> **Autor:** Eduardo Portes Bueno

## 1. Descrição do Projeto

O **Automa.io** é uma aplicação web responsiva (Mobile-First) desenvolvida como projeto final da disciplina de **Frameworks CSS**. A plataforma simula um sistema SaaS de automação onde usuários podem consultar planos, participar de uma comunidade, criar conta, e gerenciar solicitações de automação em um dashboard exclusivo.

A aplicação foi construída focando na arquitetura de estilos com **Bootstrap 5** e **Sass**, garantindo um código modular, além de lógica avançada em JavaScript (ES6 Modules) consumindo APIs reais e simuladas.

## 2. Links do Projeto

* 🎨 **Prototipação (Figma):** [Acessar Projeto no Figma](https://www.figma.com/design/uryimLbfDaLZd2i0w1Ukfu/SIEC-AUTOMAIO)
* 🌐 **Deploy (GitHub Pages):** [Acessar Site em Produção](https://eduardoportesbueno.github.io/automaio/)
* 📂 **Repositório:** [github.com/EduardoPortesBueno/automaio](https://github.com/EduardoPortesBueno/automaio)

## 3. Instruções de Execução Local

Este projeto utiliza o **JSON Server** para simular um back-end e o **Sass** para compilação de estilos.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/EduardoPortesBueno/automaio.git](https://github.com/EduardoPortesBueno/automaio.git)
    cd automaio
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie os serviços (Necessário 2 terminais):**

    * **Terminal 1 (API Fake):** Inicia o servidor de dados em `localhost:3000`.
        ```bash
        npm run server
        ```
    * **Terminal 2 (Sass Watch):** Compila o SCSS para CSS em tempo real.
        ```bash
        npm run watch
        ```

4.  **Acesse o projeto:**
    Abra o arquivo `index.html` (ou qualquer outro html) no seu navegador, preferencialmente usando o **Live Server**.

## 4. Tecnologias e Ferramentas

* **Front-end:** HTML5, CSS3, JavaScript (ES6 Modules).
* **Framework CSS:** Bootstrap 5.3.3 (Grid, Components, Utilities).
* **Pré-processador:** Sass (SCSS) para customização de variáveis e temas.
* **Libs JS:** jQuery 3.7 e jQuery Mask Plugin (apenas na página de Registro).
* **Back-end Simulado:** JSON Server (REST API).

---

## 5. Checklist de Funcionalidades (Mapeamento da Avaliação)

Abaixo, como cada requisito do edital foi atendido no código:

### RA1 - Frameworks CSS
- [x] **ID 01 (Prototipação):** Interface fiel ao Figma.
- [x] **ID 02 (Layout Framework):** Uso de `row`, `col-` e `d-flex` em todas as páginas (ex: Grid de cards em `templates.html` e `pricing.html`).
- [x] **ID 03 (Layout CSS Puro):** Classes customizadas como `.icon-bg` e `.confirmation-overlay`.
- [x] **ID 04 (Componentes):**
    - `Navbar` e `Footer` (todas as páginas).
    - `Carousel` (em `automations.html`).
    - `Collapse` (Widget de Chat em todas as páginas).
    - `Cards` (Pricing, Templates, Dashboard).
- [x] **ID 05 (Unidades Relativas):** Uso de `rem` para fontes/margens e `%` para larguras.
- [x] **ID 06 (Design System):** Identidade visual (Cores Primary/Secondary) unificada via CSS Variables.
- [x] **ID 07 (Sass):** Arquivos SCSS modulares para sobrescrever o Bootstrap.
- [x] **ID 08 (Tipografia):** Fontes responsivas ativadas.
- [x] **ID 09 (Imagens):** Uso de `.img-fluid` e `.rounded` (ex: gráficos no Dashboard).
- [x] **ID 10 (Otimização):** Imagens comprimidas (TinyPNG) para performance.

### RA2 - Formulários
- [x] **ID 11 (Validação HTML):** Formulários (`login.html`, `register.html`) usam `.needs-validation` e feedback visual do Bootstrap.
- [x] **ID 12 (REGEX):** Campo de telefone em `register.html` usa `pattern="\(\d{2}\) \d{5}-\d{4}"`.
- [x] **ID 13 (Inputs Diversos):**
    - `Select` e `Textarea` em `new-automation.html`.
    - Botões atuando como Checkbox (Toggle) para seleção de sistemas.
- [x] **ID 14 (Web Storage):** `AuthService` utiliza `localStorage` para manter o usuário logado entre as páginas.

### RA3 - Ferramentas
- [x] **ID 15 (NPM):** Dependências listadas no `package.json`.
- [x] **ID 16 (Git):** Versionamento completo.
- [x] **ID 17 (Documentação):** Este README.
- [x] **ID 18 (Organização):** Separação clara de `/css`, `/img`, `/js/services`.
- [x] **ID 19 (Linters):** ESLint configurado.

### RA4 - Bibliotecas JavaScript
- [x] **ID 20 (jQuery Core):** Utilizado em `register.html` para inicialização de plugins.
- [x] **ID 21 (jQuery Plugins):** **jQuery Mask Plugin** aplicado nos campos de Telefone e CEP em `register.html`.

### RA5 - APIs e Assincronismo
- [x] **ID 22 (API Fake - POST):** `new-automation.html` envia dados para o JSON Server via `fetch`.
- [x] **ID 23 (API Fake - GET):** `automations.html` consome o JSON Server para montar os slides do carrossel dinamicamente.
- [x] **ID 24 (API Pública):** `register.html` consome a API **ViaCEP** para preenchimento automático de endereço, com tratamento de erros (`try/catch`).