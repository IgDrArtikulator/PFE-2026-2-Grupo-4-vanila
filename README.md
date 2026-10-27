# PKZ · One to One Studio — Projeto Front-End (Grupo 4)

Site institucional de duas marcas de treino individual do mesmo grupo:

- **Playmakerz (PKZ):** desenvolvimento atlético para crianças e adolescentes (até 17 anos).
- **One to One Studio:** treino individual para adultos.
- **Hub:** página de entrada que apresenta as duas marcas e leva para cada site.

Feito só com **HTML, CSS e JavaScript puros** (sem frameworks).

## Como rodar

1. Clone o repositório e abra a pasta **raiz** do projeto no VS Code.
2. Clique com o botão direito em `hub/index.html` → **Open with Live Server**.
3. Navegue para a PKZ e para a One to One pelos botões do Hub.

> Abra sempre a partir da pasta raiz: os caminhos usam `../` para achar `css/`, `js/` e `img/`.

## Estrutura de pastas

```
├── hub/index.html          # Página de entrada (escolha da marca)
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

- **Um CSS para as duas marcas:** as cores e fontes ficam em variáveis (`:root`). A página da PKZ usa `<body class="pkz">`, que troca os valores das variáveis para azul-marinho e dourado.
- **Responsivo:** abaixo de 767px os links do header viram um menu hambúrguer (`js/menu.js`).
- **Agendamento:** o `js/agendamento.js` mostra os próximos 6 dias (segunda a sábado) e os horários livres, e guarda a reserva no `localStorage` do navegador (ainda não há servidor). As reservas da PKZ e da One to One ficam separadas.
- **Planos:** o `js/planos.js` guarda os planos de cada marca num array de objetos e cria os cards com `createElement`.
- **Slider do Hub:** o `js/hub.js` troca a foto de fundo do hero pelas setas ‹ ›, pelos tracinhos ou sozinho a cada 6 segundos (pausa com o mouse em cima). Para mudar as fotos, basta editar o array `fotosHero`.
- **Slider das galerias:** o `js/galeria.js` (PKZ e One to One) mostra uma foto por vez; as setas ‹ ›, os tracinhos e as setas do teclado trocam a foto. Para incluir uma foto, basta copiar um `<figure class="galeria-slide">` no HTML.

## Integrantes

- Arthur
- Caio Abanca
- Guilherme
- Igor
- Lucas
- Mateus
- Rodrigo
