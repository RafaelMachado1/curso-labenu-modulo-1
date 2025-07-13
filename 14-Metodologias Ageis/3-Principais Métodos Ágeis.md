# 3 - Principais Métodos Ágeis

Existem algumas práticas para gestão de projetos que foram desenvolvidas com base nos princípios do Manifesto Ágil, sendo que algumas, nasceram antes mesmo do próprio manifesto, veremos algumas das mais populares agora.

---

**Conteúdo**

---

## 3.1 - Scrum

O método mais popular e infelizmente, muitas vezes confundindo como o próprio conceito de Metodologia Ágil, seu processo é muito aplicado na indústria de tecnologia e engenharia.

As principais vantagens do Scrum são: transparência, identificação de problemas de uma forma mais eficiente e principalmente rápida adaptação.

Para compreender basicamente o SCRUM podemos apresentar o seus principais pilares conhecido como **3-5-3**:

![fonte: mindmaster](./img%20e%20vídeos/Untitled2.webp)

fonte: mindmaster

### Responsabilidades

No SCRUM, cada pessoa tem um trabalho específico. Alguém ajuda a organizar tudo (**Scrum Master**), outra pessoa decide o que é mais importante fazer (**Product Owner**) e o resto da equipe faz o trabalho real (**Developers**).

- **Scrum Master** - Responsável por orientar o time em questões Ágeis e garantir o andamento e qualidade das entregas.
- **Product Owner** - Pessoa que faz a ligação entre o cliente, stakeholders e a equipe de desenvolvimento.
- **Developers** - Equipe de desenvolvimento que implementa o projeto.

### Eventos

No SCRUM, existem momentos em que todos se reúnem para verificar o que foi feito e o que precisa ser feito. Imagine como um time de futebol que faz reuniões antes do jogo, durante o intervalo e depois do jogo. Esses são como os eventos do SCRUM. Há uma fase de **planejamento**, uma **verificação diária do progresso**, uma **revisão do que foi feito** e uma **reflexão para melhorar**.

- **Sprint**
    
    Duração para a realização das tarefas, fortemente atrelada aos deadlines de uma equipe.
    
    - Duração de 1 a 4 semanas;
    - Dinâmicas presentes na Sprint:
        - Planning: Planejamento da Sprint;
        - Daily: Reunião Diária de Acompanhamento;
        - Review: Avaliação do Desempenho da Sprint;
        - Retro: Reunião de Feedback da Sprint
- **Planning/planejamento:**
    - Primeira reunião da Sprint;
    - Escolha das prioridades para a Sprint;
    - Atribuição dos responsáveis pela task;
    - Previsão da Sprint.
- **Daily / reunião diária:**
    - Reunião Diária;
    - Duração máxima de 15 minutos;
    - Finalidade de acompanhamento da equipe e identificação de possíveis roadblocks.
- **Review/ revisão:**
    - Avaliação do Desempenho da Sprint;
    - Averiguação do Cumprimento das Métricas estipuladas.
- **Retro / Retrospectiva:**
    - Reunião de Feedback da Sprint;
    - Averiguar os pontos de bloqueio que rolaram durante a Sprint;
    - Elencar os pontos de melhoria;
    - Definição do Plano de Ação para tratativa dos problemas encontrados durante a Sprint;
    - Normalmente um check do Action Plan da Sprint anterior para averiguar se problemas levantados anteriormente foram solucionados.

### Artefatos

O SCRUM deixa rastros do trabalho feito. São documentos gerados a medida que o projeto vai sendo construído. Existem listas que mostram o que precisa ser feito em geral (**Backlog do Produto**) e uma lista menor para o que será feito logo (**Backlog da Sprint**). E à medida que o trabalho é feito, o produto final vai melhorando aos poucos(**Product Increment**).

1. **Product Backlog:**
É uma lista de coisas que precisam ser feitas no projeto.
2. **Sprint Backlog:**
Uma lista de tarefas para fazer durante um período curto.
3. **Product Increment:**
Uma versão melhorada do projeto após cada período de trabalho.

---

## 3.2 - Kanban

Kanban é um método de controle e gestão do fluxo de produção e/ou projetos, normalmente utilizando-se de “post-its” promovendo uma fácil visualização do gerenciamento das atividades pela equipe. Focado em um acompanhamento constante das tarefas para que o processo funcione adequadamente.

- Geralmente a estrutura do **Kanban** é dividida em 5 colunas no mundo da Tecnologia, sendo:
    - Backlog/Ideas - Coluna muito comum no contexto da Tecnologia, lista de todas as tasks ordenadas por suas prioridades;
    - To Do - Tasks que necessitam ser realizadas;
    - Doing/ In Progress - Tasks que estão em realização;
    - QA - Coluna muito comum no contexto da Tecnologia, etapa de validação e testes de uma task, antes de ir para a coluna de “DONE”;
    - Done - Tasks que já foram devidamente finalizadas.

O grande ganho do processo com Kanban é promover a atualização de cada task em tempo real, promovendo a transparência para toda a equipe de como está o andamento do projeto/produto.

![Untitled](./img%20e%20vídeos/Untitled3.webp)

---

## 3.3 - XP - Extreme Programming

Metodologia criada por Kent Beck, um dos autores do Manifesto Ágil, em 1996.

O XP é voltado para o desenvolvimento de software, que visa obter um produto com a maior qualidade possível, além de aumentar aumentar a qualidade de vida do time. Esse método entrelaça muito bem seus valores, seguidos das respectivas práticas.

- Valores:
    - **Comunicação** frequente e adequada para a transferência de conhecimento;
    - **Simplicidade** para garantir eficiência e foco apenas no que é necessário;
    - **Feedback** para contar com o apoio dos clientes ao otimizar o produto e atingir os resultados;
    - **Coragem** para tomar as atitudes, comunicar problemas e tentar novas abordagens;
    - **Respeito** entre todos os integrantes do time.

Seus valores dizem muito, mas as práticas abordadas pelo XP é o que fazem desse método um diferencial quando comparado com seus pares.

- Práticas:
    - **Jogo do Planejamento** - O desenvolvimento é feito em iterações semanais. Reunião entre desenvolvedores e clientes para priorizar as funcionalidades, ao término da semana cliente recebe as novas features completamente testadas e prontas;
    - **Pequenas Versões** - Liberação de pequenas versões funcionais do projeto auxiliando no processo de aceitação por parte do cliente, que já pode testar parte do sistema que está comprando;
    - **Metáfora** - Facilitar a comunicação com o cliente se adaptando a realidade do mesmo, traduzindo as palavras do cliente para o significado esperado dentro do projeto;
    - **Projeto Simples** - ****Construir códigos de fácil compreensão e de alteração, sendo assim, manter uma arquitetura simples desde o início e melhorando continuamente;
    - **Time Coeso** - O time é formado pelo cliente juntamente com a equipe de desenvolvimento;
    - **Testes de Aceitação** - Testes construídos pelo cliente em conjunto de analistas e especialistas em testes, visando averiguar requisitos do sistema;
    - **Ritmo Sustentável** - Trabalhar em um ritmo saudável com qualidade, sem horas extras. O ambiente de trabalho e a motivação da equipe devem estar sempre em harmonia;
    - **Reuniões em Pé -** Reuniões realizadas em pé para não perder o foco nos assuntos, rápidas, abordando tarefas realizadas e tarefas a realizar pela equipe;
    - **Propriedade Coletiva do Código** - O código fonte não possui um dono exclusivo. O objetivo é fazer com que a equipe conheça todas as partes do sistema;
    - **Programação em Par -** A dupla de desenvolvimento normalmente é formada por um iniciante na linguagem/negócio e outra pessoa como um instrutor. Dessa forma, o programa é revisto por duas pessoas, diminuindo a possibilidade de erros e buscando sempre a evolução da equipe, trazendo uma melhora na qualidade do código;
    - **Padrão de Codificação -** A equipe de desenvolvimento estabelece regras e todos deverão seguir a mesma.
    - **Refatoração -** Refatorar o código dividindo-o em módulos coesos e de maior possibilidade de reaproveitamento, evitando duplicação de código fonte. Processo muito atrelado com a melhoria contínua da programação com o mínimo de erros e mantendo a compatibilidade com o código já existente;
    - **Desenvolvimento Orientado a Testes -** Desenvolver testes automatizados preliminarmente ao código para que os testes funcionem. Ponto crucial no estabelecimento de uma solução com maior qualidade e maior segurança para possíveis refatorações;
    - **Integração Contínua -** Integrar de forma contínua as novas funcionalidades desenvolvidas à versão atual do sistema, permitindo um panorama do status real da programação.

O XP é extremamente poderoso, porém saiba que é bem comum vocês encontrarem a combinação dos três métodos ágeis (Scrum, Kanban e XP) apresentados, um complementando ao outro. Normalmente essa junção de processos encontramos associados com o nome ScrumXP. 

Um exemplo de como funciona uma sprint no ScrumXP, pode ser dado como:

![Untitled](./img%20e%20vídeos/Untitled4.webp)

1. Scrum - Vai ditar todas as regras da Sprint e etapas;
2. Kanban - Estará muito presente durante as etapas de Planejamento, Daily e Fechamento da Sprint, demonstrando todas as atividades pertinentes ao projeto;
3. XP - Estará presente na maneira como cada individuo na equipe está trabalhando.

A junção dos métodos Scrum e XP são cruciais para o desenvolvimento de um produto mais coeso com os requisitos do cliente e satisfação do seu mercado. Como dito pelo próprio Mike Cohn, um dos contribuidores no estabelecimento e Desenvolvimento do próprio Scrum, diz: 
”Ambos Scrum e Extreme Programming (XP) pregam que a equipe complete alguma parte palpável de trabalho entregável ao fim de cada iteração. Essas iterações são pensadas para serem curtas e com espaço de tempo definido”

---