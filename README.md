# Pousada Brisa Mar & Camping Beira d'Praia

Site institucional simples, em HTML/CSS/JS puro (sem build, sem framework).

## Estrutura

```
site/
├── index.html          → estrutura da página
├── css/
│   └── style.css       → todo o estilo visual
├── js/
│   └── script.js       → menu mobile e header que muda ao rolar a página
├── images/
│   ├── logo-brisamar.png
│   ├── logo-camping.png
│   └── passarela-morro-dos-conventos.jpg
└── README.md
```

## Imagens que ainda são placeholder

Duas imagens no site ainda usam fotos de exemplo do serviço `picsum.photos`,
até vocês mandarem as fotos reais:

- **Fundo do hero** (topo da página) → definido em `css/style.css`, na regra `.hero`
- **Foto do apartamento** (seção "18 apartamentos, todos mobiliados") → em `index.html`, `<img src="https://picsum.photos/...">`

Pra trocar: salve a foto em `images/` (ex: `images/hero.jpg`) e troque a URL
pelo caminho local, ex: `images/hero.jpg`.

## Editando no VS Code

Basta abrir a pasta `site/` inteira no VS Code (`File > Open Folder`).
Recomendo a extensão **Live Server** pra visualizar o site com atualização
automática enquanto edita (clique direito no `index.html` → "Open with Live Server").

## Deploy: GitHub + Vercel

### 1. Subir pro GitHub

```bash
cd site
git init
git add .
git commit -m "primeira versão do site"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push -u origin main
```
(Crie o repositório vazio antes em github.com/new — sem README, sem .gitignore,
pra não dar conflito com o `git push`.)

### 2. Publicar na Vercel

1. Acesse [vercel.com](https://vercel.com) e entre com sua conta do GitHub
2. Clique em **Add New → Project**
3. Selecione o repositório que você acabou de subir
4. Como é HTML puro, a Vercel detecta sozinha (Framework Preset: **Other**) —
   não precisa configurar build command nem output directory
5. Clique em **Deploy**

Pronto — a Vercel te dá uma URL pública (tipo `nome-do-projeto.vercel.app`).
Depois dá pra configurar um domínio próprio (ex: `pousadabrisamar.com.br`) direto
nas configurações do projeto na Vercel, aba **Domains**.

Qualquer novo `git push` pra branch `main` gera um novo deploy automático.

## Dados de contato já configurados no site

- WhatsApp: +55 48 99643-6275
- E-mail: shiisoares@hotmail.com
- Localização: Morro dos Conventos, Araranguá — SC
