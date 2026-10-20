# Site de portfólio da Ferren

Site estático (HTML, CSS e JS, sem dependências). Para ver no PC, rode um servidor local na pasta ou abra `index.html`.

As cores vêm só das paletas de referência que a artista mandou (`#730c1e`, `#210207`, `#480415`, `#140f17`, `#000000`, `#6D001A`, `#FFFFFF`), definidas no topo de [css/style.css](css/style.css). O layout segue o site de referência (cloudbepp.com).

## Onde editar

Tudo que muda com frequência fica no começo de [js/main.js](js/main.js):

| O quê | Onde | Como |
|---|---|---|
| **Preços** | `PLANS` → `usd` / `robux` | Troque `null` pelo texto, ex.: `usd: '$25', robux: '2,500 Robux'`. Quando houver qualquer preço, aparece o seletor USD / Robux. Com `null`, o card mostra "On request". |
| **Pacotes** | `PACKS` | Adicione linhas, ex.: `{ label: '3 artworks', usd: '...', robux: '...' }`. Vazio = "Coming soon, ask in a ticket". |
| **Perguntas frequentes** | `FAQ` | Pares de pergunta e resposta. |
| **Obras da galeria** | `ARTWORKS` | Uma linha por obra (id, categoria, tamanho e descrição). `mature: true` deixa a obra desfocada até o clique. `views` adiciona vistas extras no visualizador (close ou outra versão). |
| **Faixa "Up close"** | `REEL` | Os closes que passam na moldura do topo. Cada um abre a obra de onde veio. |
| **Miniaturas do título** | `CHIPS` | Os closes que trocam dentro do título. |
| **Mosaico de detalhes** | `BENTO` | Os closes grandes abaixo da apresentação. |
| **Música** | `music` (em `js/main.js`) | Gerada no navegador, sem arquivo de áudio. Só toca quando o visitante aperta "Play music". |
| **Aviso dos filtros** | `FILTER_NOTES` | Ex.: o aviso de que os YCH ainda são esboços. Apague quando houver YCH finalizados. |

## Adicionar ou trocar artes

1. Coloque a imagem original numa pasta.
2. Em [tools/prepare_art.py](tools/prepare_art.py), adicione uma linha em `CROPS` com o id e o recorte. Se for captura de tela do Procreate, o recorte tira as barras do app.
3. Rode `python tools/prepare_art.py <pasta das imagens>` para gerar `art/full` e `art/thumb`.
4. Adicione a obra em `ARTWORKS`.

## Publicar

O site é só um conjunto de arquivos e pode ir para qualquer hospedagem estática (GitHub Pages, Netlify, Cloudflare Pages). A pasta `tools/` não precisa ser publicada.
