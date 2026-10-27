# PKZ · One to One Studio — Projeto Front-End (Grupo 4)

Site institucional de duas marcas de treino individual do mesmo grupo:

- **Playmakerz (PKZ):** desenvolvimento atlético para crianças e adolescentes (até 17 anos).
- **One to One Studio:** treino individual para adultos.
- **Hub:** página de entrada que apresenta as duas marcas e leva para cada site.

Feito só com **HTML, CSS e JavaScript puros** (sem frameworks).

## Acesse o site

**[https://igdrartikulator.github.io/PFE-2026-2-Grupo-4-vanila/](https://igdrartikulator.github.io/PFE-2026-2-Grupo-4-vanila/)**

Publicado com o **GitHub Pages**: o endereço abre o Hub, e de lá dá para ir para a PKZ e para a One to One.

## Como rodar

1. Clone o repositório e abra a pasta **raiz** do projeto no VS Code.
2. Clique com o botão direito em `index.html` (na pasta raiz) → **Open with Live Server**.
3. Navegue para a PKZ e para a One to One pelos botões do Hub.

> Abra sempre a partir da pasta raiz. O Hub (`index.html`) fica na raiz, então usa `css/`, `js/` e `img/` direto; as páginas da PKZ e da One to One ficam em subpastas e usam `../` para voltar à raiz. Assim o GitHub Pages abre o Hub direto no endereço do site.

## Estrutura de pastas

```
├── index.html              # Hub: página de entrada (escolha da marca)
├── README.md               # Este arquivo
├── .nojekyll               # Faz o GitHub Pages publicar os arquivos como estão
├── .gitignore              # Ignora arquivos do sistema (.DS_Store do Mac)
├── pkz/
│   ├── index.html          # Site da Playmakerz
│   └── img-pkz/            # Logo e fotos da PKZ
├── one-to-one/
│   ├── index.html          # Site do One to One Studio
│   └── img-oto/            # Logo e fotos do One to One
├── img/                    # Fotos do Hub
├── css/style.css           # CSS único das 3 páginas
└── js/
    ├── menu.js             # Menu hambúrguer (celular)
    ├── agendamento.js      # Dias, horários e reservas do agendamento
    ├── planos.js           # Cards de planos da PKZ e da One to One
    ├── galeria.js          # Slider da galeria da PKZ e da One to One
    └── hub.js              # Slider da foto do hero no Hub
```

## Como funciona

- **Um CSS para as duas marcas:** as cores e fontes ficam em variáveis CSS, e cada marca troca esses valores para ter a própria identidade visual.
- **Responsivo:** o layout se adapta a celular, tablet e desktop; no celular, o menu vira um menu hambúrguer.
- **Agendamento:** o visitante escolhe dia e horário para uma aula experimental, e a reserva fica salva no próprio navegador (ainda não há servidor).
- **Conteúdo dinâmico:** os planos e os sliders de fotos (Hub e galerias) são montados e controlados com JavaScript.

## Publicação no GitHub Pages

O site é publicado direto do repositório, sem servidor próprio:

1. **Hub na raiz:** o GitHub Pages abre o `index.html` da pasta principal, então o Hub fica ali e é a primeira página do site.
2. **`.nojekyll`:** arquivo vazio que desliga o Jekyll (gerador de sites que o Pages usa por padrão), para os arquivos serem publicados exatamente como estão.
3. **Caminhos relativos:** todos os links usam caminhos relativos (`css/style.css` no Hub, `../css/style.css` e `../index.html` nas páginas das marcas). O site fica dentro de `/PFE-2026-2-Grupo-4-vanila/` no endereço, e um caminho absoluto como `/css/style.css` quebraria.

> O agendamento guarda as reservas no `localStorage`, então no site publicado cada navegador também vê só as próprias reservas.

## Integrantes

- Arthur
- Caio Abanca
- Guilherme
- Igor
- Lucas
- Mateus
- Rodrigo
