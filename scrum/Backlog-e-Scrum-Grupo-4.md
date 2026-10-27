# Backlog e organização Scrum — Grupo 4

**Projeto:** Hub PKZ · One to One Studio  
**Data da análise:** 27/10/2026  
**Tecnologias:** HTML, CSS e JavaScript puros.

## 1. Equipe e divisão de trabalho

| Integrante | Trabalho sob sua responsabilidade |
|---|---|
| Arthur | Estrutura HTML, head, header, Home e footer das duas marcas; estilos de Home; inserção das imagens no código; CSS global compartilhado com Igor; JavaScript em conjunto com Lucas e Caio. |
| Igor | Sobre nós e informações sobre treinos das duas marcas; estilos dessas seções; criação das imagens e envio para Arthur; CSS global compartilhado com Arthur. |
| Matheus | Planos e unidades das duas marcas; respectivos estilos. |
| Rodrigo | Galeria das duas marcas e estilos de galeria. |
| Guilherme | Contato e cadastro das duas marcas; estilos correspondentes. |
| Lucas | Agendamento das duas marcas e respectivos estilos; JavaScript em conjunto com Arthur e Caio. |
| Caio Abanca | Hub completo e estilos do Hub; JavaScript em conjunto com Lucas e Arthur. |

### Contribuições realizadas informadas pela equipe

- **Igor:** criou as imagens do projeto e as enviou para Arthur.
- **Arthur:** adicionou as imagens ao código.
- **Lucas, Arthur e Caio:** adicionaram JavaScript para o agendamento, o menu hambúrguer e algumas imagens. Essa contribuição é conjunta; não há divisão individual informada por funcionalidade.
- **Arthur e Igor:** dividiram a tarefa do CSS global.

Essas contribuições registram o trabalho realizado informado pela equipe. As tarefas das duas semanas abaixo são o planejamento de revisão e entrega. A responsabilidade pela qualidade e integração é compartilhada.

## 2. Diagnóstico do código atual

| Área | Evidência encontrada | Situação para o planejamento |
|---|---|---|
| Hub | Início, escolha de marca, galeria de fotos e links para as duas páginas | Implementado; validar navegação e apresentação |
| Sites das marcas | Home, Sobre, Treinos, Planos, Unidades, Galeria, Contato e Agendamento | Implementados; aguardam aceite |
| Identidade visual | CSS compartilhado com variáveis e personalização pela classe `pkz` | Implementado; revisar consistência e responsividade |
| Menu mobile | Script abre/fecha, atualiza `aria-expanded`, fecha com Escape e clique fora | Implementado; testar interação nas três páginas |
| Agendamento | Seis dias de atendimento, horários, bloqueio de horários passados e reservas locais; chaves separadas por marca | Protótipo implementado; testar e esclarecer seu alcance |
| Cadastro de alunos | Sem seção ou formulário próprio nas duas páginas atuais | Divergência de escopo; decidir se será implementado ou retirado formalmente |
| WhatsApp PKZ | Dois links usam apenas `https://wa.me/` | Pendente: confirmar número e corrigir cartão e rodapé |
| Vídeos | Hub atual apresenta fotos e galerias das marcas usam imagens | Decidir se fotos atendem ao escopo ou se haverá reprodução de vídeo |
| Caminhos de arquivos | Referências locais `src`/`href` das três páginas apontam para arquivos existentes | Verificado estaticamente; não valida carregamento externo ou comportamento |
| Robustez do armazenamento | Leitura direta com `JSON.parse` e escrita direta em localStorage | Melhorar tratamento de dados inválidos e falhas de armazenamento |

Não foram executados testes em navegador, auditoria completa de acessibilidade, validação dos contatos externos ou publicação. Não há evidência suficiente para declarar a entrega final concluída.

## 3. Product Backlog


| ID | História de usuário | Referência de responsabilidade | Situação |
|---|---|---|---|
| PB-01 | Como visitante, quero escolher a marca adequada à minha faixa etária para acessar o programa certo. | Caio Abanca | Implementado; validar |
| PB-02 | Como visitante, quero navegar entre Hub e marcas, inclusive pelo celular, para encontrar as informações. | Arthur; Caio no Hub; JavaScript com Lucas | Implementado; validar |
| PB-03 | Como interessado, quero conhecer a proposta de cada marca na Home para decidir se atende ao meu objetivo. | Arthur | Implementado; validar |
| PB-04 | Como interessado, quero conhecer o estúdio e comparar os programas para entender a diferença entre as marcas. | Igor | Implementado; validar |
| PB-05 | Como aluno ou responsável, quero entender avaliação, programa e acompanhamento para saber como funciona o treino. | Igor | Implementado; validar |
| PB-06 | Como interessado, quero conhecer planos e aula experimental para escolher meu próximo passo. | Matheus | Implementado; validar conteúdo |
| PB-07 | Como visitante, quero consultar endereço e mapa para localizar a unidade. | Matheus | Implementado; validar endereço e mapa |
| PB-08 | Como interessado, quero visualizar fotos dos treinos para conhecer o ambiente. | Rodrigo; Caio no Hub | Implementado; validar |
| PB-09 | Como interessado, quero acessar canais de contato válidos para falar com a equipe. | Guilherme; Arthur no rodapé | Implementado parcialmente; WhatsApp PKZ pendente |
| PB-10 | Como aluno ou responsável, quero selecionar dia e horário e informar meus dados para simular uma aula experimental. | Lucas; JavaScript com Arthur e Caio | Protótipo local; validar e esclarecer confirmação |
| PB-11 | Como aluno ou responsável, quero cadastrar meus dados, caso o cadastro continue no escopo, para registrar meu interesse. | Guilherme | Ausente no código; confirmar inclusão no escopo |
| PB-12 | Como visitante, quero assistir aos vídeos, caso exigidos na entrega, para conhecer os treinos em movimento. | Rodrigo; Caio no Hub | Decisão de escopo pendente |
| PB-13 | Como usuário de celular ou teclado, quero acessar textos, links e formulários com facilidade. | Toda a equipe, por seção | A validar |
| PB-14 | Como avaliador, quero abrir a entrega e compreender como executá-la para avaliar o projeto. | Equipe; coordenação a definir | README presente; entrega integrada a validar |
| PB-15 | Como visitante, quero entender que o agendamento é uma simulação local para não confundi-lo com uma reserva confirmada pela equipe. | Lucas; revisão de conteúdo com PO | Pendente |
| PB-16 | Como usuário, quero receber uma mensagem compreensível se os dados locais estiverem inválidos ou indisponíveis. | Lucas, Arthur e Caio | Pendente |

### Critérios de aceitação

| Item | Condições observáveis para aceite |
|---|---|
| PB-01 | Os dois públicos estão claros; links abrem a marca correspondente; o retorno ao Hub funciona. |
| PB-02 | Âncoras chegam às seções certas; menu abre/fecha em tela pequena, responde ao Escape e informa seu estado. |
| PB-03 | Cada marca tem título, apresentação, imagem e chamada para aula experimental coerentes com seu público. |
| PB-04 | Texto e imagem de equipe aparecem nas duas marcas; comparação leva a `hub/index.html#escolha`. |
| PB-05 | Cada marca exibe avaliação, programa e acompanhamento; os cards se adaptam sem corte de texto. |
| PB-06 | Informações e chamadas de planos são coerentes; links chegam a agendamento ou contato; não há promessa sem validação. |
| PB-07 | Endereço foi confirmado pela equipe; mapa representa o local e se adapta à tela. |
| PB-08 | Imagens carregam, têm texto alternativo adequado e não deformam; legendas correspondem ao conteúdo. |
| PB-09 | WhatsApp da PKZ contém o número aprovado nos dois locais; demais canais foram conferidos; links externos funcionam. |
| PB-10 | Exibe seis dias de segunda a sábado; bloqueia horários passados/ocupados; valida campos; persiste reserva após recarga no mesmo navegador; separa PKZ e OTO. |
| PB-11 | PO registra decisão. Se mantido: campos e finalidade definidos, validação e feedback funcionando. Se retirado: documentação atualizada. O formulário de agendamento não será contado como cadastro separado sem aceite. |
| PB-12 | PO registra aceite da galeria de fotos ou, se vídeos forem exigidos, mídia reproduz com controles e alternativa acessível adequada. |
| PB-13 | Revisão a 360, 768 e 1440 px sem rolagem horizontal indevida; foco visível, labels, ordem de teclado e leitura verificados. |
| PB-14 | Projeto abre conforme README; jornada completa funciona; versão de entrega está identificada e evidências de aceite registradas. Publicação depende de escopo e ambiente definidos. |
| PB-15 | Antes e depois de enviar, o usuário é informado de que o registro é local e não confirma uma reserva real com o estúdio. |
| PB-16 | Conteúdo inválido e falha de acesso/escrita no localStorage não interrompem silenciosamente o fluxo; há orientação ao usuário e recuperação segura. |

## 4. Organização Scrum proposta

### Papéis e responsabilidades

- **Product Owner: a definir pela equipe.** Esclarece o escopo com a equipe e a referência acadêmica/cliente.
- **Scrum Master: a definir pela equipe.** Ajuda a equipe a aplicar Scrum, facilita eventos e trata impedimentos. Não há evidência para atribuir o papel a um integrante específico.
- **Developers:** Arthur, Caio Abanca, Guilherme, Igor, Lucas, Matheus e Rodrigo, conforme a divisão de trabalho. As referências por seção orientam a revisão, mas a responsabilidade pela qualidade do incremento é coletiva.

### Cadência sugerida

Duas sprints de uma semana a partir da data que a equipe combinar, sem datas retroativas. Confirmar capacidade antes do compromisso. As atividades abaixo podem ser divididas ou reduzidas no Planning; a previsão não é promessa de entrega.

| Evento | Frequência/duração sugerida | Resultado esperado |
|---|---|---|
| Sprint Planning | Início de cada sprint, até 60 min | Meta, itens selecionados e plano executável pelos Developers |
| Daily Scrum | Cada dia de trabalho, 15 min | Inspeção do progresso em direção à meta e ajuste do plano |
| Sprint Review | Final da sprint, 45 min | Demonstração do incremento e feedback para adaptar o backlog |
| Sprint Retrospective | Após a Review, 30 min | Uma melhoria concreta do processo para a próxima sprint |
| Refinamento | Ao longo da sprint, bloco sugerido de 30 min | Clarear critérios, dividir itens e ordenar o trabalho; atividade contínua, não evento formal Scrum |

### Artefatos e compromissos

| Artefato | Uso no projeto | Compromisso associado |
|---|---|---|
| Product Backlog | Lista de funcionalidades, correções e decisões | Escopo acordado pela equipe |
| Sprint Backlog | Meta, itens selecionados e tarefas atualizadas pelos Developers | Sprint Goal: objetivo específico de cada sprint |
| Incremento | Versão integrada que atende à Definition of Done | Definition of Done compartilhada |

## 5. Divisão do trabalho em duas semanas

**Duração:** duas sprints de uma semana, considerando cinco dias de trabalho por semana. Os dias são relativos ao início combinado pela equipe, sem datas retroativas. Como o código já existe, o plano concentra revisão, correções, integração e entrega.

### Distribuição por integrante

| Integrante | Semana 1 — Revisão e correções funcionais | Semana 2 — Validação e entrega |
|---|---|---|
| Arthur | Revisar estrutura, Home, cabeçalhos, rodapés e imagens inseridas no código; revisar o CSS global com Igor e o JavaScript com Lucas e Caio (PB-02, PB-03). | Validar navegação e layout em celular, tablet e desktop; revisar o Hub com Caio; consolidar instruções de execução no README (PB-13, PB-14). |
| Caio Abanca | Revisar o Hub, escolha de público, links e imagens; revisar o JavaScript com Lucas e Arthur e participar da decisão sobre vídeos (PB-01, PB-02, PB-12). | Corrigir responsividade e acessibilidade do Hub; implementar vídeos no Hub somente se aprovados; testar o percurso entre as três páginas (PB-12, PB-13, PB-14). |
| Igor | Revisar Sobre e Treinos das duas marcas, textos, cards e link de comparação; conferir as imagens criadas e revisar o CSS global com Arthur (PB-04, PB-05, PB-13). | Ajustar essas seções em diferentes telas, verificar hierarquia dos títulos e revisar Planos e Unidades com Matheus (PB-13). |
| Matheus | Revisar planos, aula experimental, endereços, mapas e chamadas para agendamento (PB-06, PB-07). | Validar mapas e cards em diferentes telas; revisar Sobre e Treinos com Igor e corrigir problemas de suas seções (PB-13). |
| Rodrigo | Revisar galerias, imagens, legendas e textos alternativos; levantar mídias disponíveis e participar da decisão sobre vídeos (PB-08, PB-12). | Finalizar galerias e revisão visual; implementar vídeos nas marcas somente se aprovados; revisar as imagens do Hub com Caio (PB-08, PB-12, PB-13). |
| Guilherme | Conferir contatos e corrigir WhatsApp da PKZ após confirmação do número; definir com o PO o destino do cadastro (PB-09, PB-11). | Implementar e validar cadastro se aprovado e viável; caso retirado, registrar a decisão. Revisar formulários e mensagens com Lucas (PB-11, PB-13). |
| Lucas | Revisar o JavaScript de agendamento, menu e imagens com Arthur e Caio; esclarecer simulação local, tratar falhas de armazenamento e testar validações e separação por marca (PB-02, PB-10, PB-15, PB-16). | Testar horários passados/ocupados, recarga e falhas de armazenamento; corrigir regressões e revisar formulários com Guilherme (PB-10, PB-13, PB-16). |

A revisão do JavaScript será compartilhada por Lucas, Arthur e Caio; a do CSS global, por Arthur e Igor. A equipe mantém responsabilidade coletiva pela integração.

### Semana 1 — Sprint 1: jornada funcional e escopo alinhado

**Meta:** percorrer Hub e marcas até uma simulação de agendamento compreensível, com informações e contatos revisados.

| Dia | Trabalho da equipe | Resultado esperado |
|---|---|---|
| 1 | Sprint Planning; definir PO e Scrum Master, confirmar cadastro e vídeos, conferir capacidade e distribuir tarefas. Cada integrante inicia a revisão de suas seções. | Backlog da sprint acordado e decisões de escopo registradas. |
| 2 | Revisar conteúdo, links, imagens, planos, endereços e contatos; testar o fluxo atual de agendamento. | Lista de defeitos e dependências com responsáveis. |
| 3 | Corrigir seções por integrante; ajustar agendamento e mensagens; integrar mudanças no CSS e HTML compartilhados. | Correções essenciais integradas. |
| 4 | Fazer revisão cruzada e testar o percurso Hub → marca → informações → agendamento nas duas marcas. | Evidências de teste e correções de integração. |
| 5 | Resolver defeitos essenciais restantes; realizar Sprint Review e Retrospective; atualizar o backlog. | Versão funcional revisada e feedback registrado. |

**Entrega da semana 1:** versão integrada com informações conferidas, navegação revisada, galerias verificadas e simulação local de agendamento clara. Pendências de contato ou escopo continuam registradas se a confirmação externa não chegar.

### Semana 2 — Sprint 2: qualidade e entrega final

**Meta:** entregar uma versão revisada em diferentes telas, documentada e pronta para demonstração.

| Dia | Trabalho da equipe | Resultado esperado |
|---|---|---|
| 1 | Sprint Planning com base no feedback; selecionar correções e eventual cadastro/vídeos já aprovados. | Meta e tarefas ajustadas à capacidade restante. |
| 2 | Ajustar responsividade, navegação por teclado, foco, títulos, labels e imagens. | Seções revisadas a 360, 768 e 1440 px. |
| 3 | Concluir itens de escopo aprovados; executar revisão cruzada e testar integração, agendamento e armazenamento. | Critérios de aceite conferidos e defeitos registrados. |
| 4 | Corrigir falhas encontradas; atualizar README, limitações e evidências; ensaiar demonstração. | Versão candidata à entrega identificada. |
| 5 | Executar verificação final; realizar Review e Retrospective; preparar a entrega da versão aceita. | Incremento final, documentação e pendências remanescentes registrados. |

**Entrega da semana 2:** código integrado, checklist de validação preenchido, README atualizado e demonstração da jornada das duas marcas. Só marcar Concluído o que atender à Definition of Done.

### Rotina e limites das duas semanas

- Daily Scrum de 15 minutos em cada dia de trabalho para ajustar o plano e tratar impedimentos.
- Reservar os dias 4 e 5 de cada semana para integração, correções e revisão, evitando concentrar tudo no último dia.
- Confirmar número do WhatsApp e endereços no início da semana 1; não preencher dados inventados.
- Decidir cadastro e vídeos no primeiro dia. Se exigidos, estimar e reservar capacidade; se não couberem, renegociar o escopo antes do compromisso.
- O cronograma é proposto: não representa trabalho ou reuniões já realizados.

## 6. Quadro Scrum inicial

O quadro é uma proposta de estado inicial da revisão, não um registro histórico de execução.

| Coluna | Itens iniciais sugeridos |
|---|---|
| Backlog / aguardando decisão | PB-11, PB-12 |
| A fazer | PB-09 (corrigir WhatsApp), PB-13, PB-14, PB-15, PB-16 |
| Em andamento | Nenhum item atribuído sem confirmação da equipe |
| Em revisão / aguardando testes | PB-01 a PB-08 e PB-10, já presentes no código |
| Concluído | Preencher somente após atender aos critérios e à Definition of Done |

Cada cartão deve conter ID, descrição, responsável atual, critérios de aceite, dependências, evidência e vínculo com a sprint. PB-09 reúne a revisão dos contatos e sua correção; pode ser dividido no refinamento para acompanhar as duas atividades separadamente.

## 7. Critérios de preparação e conclusão

### Preparação para entrar na sprint

História compreensível, critérios observáveis, dependências identificadas, tamanho compatível com uma sprint e decisão de escopo tomada quando necessária. Esta é uma convenção de trabalho proposta, não um compromisso formal obrigatório do Scrum.

### Definition of Done proposta

Um item só vai para Concluído quando:

1. Está integrado à versão do projeto e atende aos seus critérios de aceitação.
2. Foi revisado por outro integrante, com evidência breve registrada.
3. Foi verificado nas telas pertinentes e não introduz quebra conhecida da jornada.
4. Links, imagens, campos e interações relacionados foram conferidos.
5. Conteúdo e acessibilidade pertinentes foram revisados.
6. O README ou a documentação foram atualizados quando o comportamento mudou.
7. Não há defeito conhecido que impeça seu uso ou torne enganoso o resultado apresentado.

A Review inspeciona o incremento e orienta adaptações. Apresentar uma funcionalidade na Review, isoladamente, não substitui os critérios de conclusão.

## 8. Plano de verificação da entrega

| Cenário | Resultado esperado | Estado nesta análise |
|---|---|---|
| Arquivos locais referenciados pelas três páginas | Arquivos existem nos caminhos indicados | Verificado por inspeção automatizada |
| Escolha de marca e comparação | Destinos corretos e retorno ao Hub | Não executado em navegador |
| Menu mobile e teclado | Abre/fecha, Escape, foco e estado acessível | Não executado em navegador |
| Textos e cards em diferentes telas | Sem cortes, sobreposição ou rolagem indevida | Não executado em navegador |
| Endereço, mapa e contatos | Dados aprovados e destinos válidos | Pendente de validação |
| Agendamento válido e inválido | Validação, feedback e bloqueios corretos | Não executado em navegador |
| Recarregar após reservar e alternar marcas | Persistência local e separação entre marcas | Não executado em navegador |
| Armazenamento inválido ou indisponível | Recuperação segura e orientação clara | Melhoria pendente |

## 9. Impedimentos e próximos passos

| Impedimento / decisão | Encaminhamento |
|---|---|
| PO e Scrum Master não definidos | Equipe escolhe antes do primeiro Planning |
| Grafia dos nomes dos integrantes | Confirmar grafia e uniformizar documentação |
| Escopo de cadastro e vídeos | PO registra se são obrigatórios ou se o escopo foi alterado |
| WhatsApp PKZ sem número | Solicitar contato correto à referência do projeto |
| Confirmação visual sugere reserva real | Explicitar simulação local no fluxo |
| Falta de evidências de validação | Executar o plano de verificação e registrar resultados |
| Cronograma e capacidade desconhecidos | Fixar início das sprints e disponibilidade no Planning |

**Registro de acompanhamento sugerido:** ID, sprint, responsável atual, estado, impedimento, evidência de teste/revisão e data real de conclusão. Não produzir retrospectivas, atas ou gráficos de progresso retroativos sem registros da equipe.
