// a) Declare uma variável para armazenar um nome, sem atribuir um valor.
        let nome;

        // b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
        let idade;

        // c) Imprima na tela o tipo dessas variáveis.
        console.log("--- Passo c) Tipos iniciais ---");
        console.log("Tipo da variável 'nome':", typeof nome);
        console.log("Tipo da variável 'idade':", typeof idade);

        // d) Reflita: por que esse tipo foi impresso?
        // RESPOSTA: O tipo "undefined" (indefinido) foi impresso porque as variáveis 
        // foram declaradas, mas nenhum valor foi atribuído a elas. Em JavaScript, 
        // uma variável que existe mas não foi inicializada tem o valor e o tipo "undefined".

        // e) Pergunte ao usuário seu nome e sua idade e atribua às variáveis.
        // A função prompt() exibe uma caixa de diálogo para o usuário inserir dados.
        nome = prompt("Por favor, digite o seu nome:");
        idade = prompt("Agora, digite a sua idade:");

        // f) Novamente, imprima na tela o tipo dessas variáveis.
        console.log("\n--- Passo f) Tipos após receber dados do usuário ---");
        console.log("Tipo da variável 'nome' após atribuição:", typeof nome);
        console.log("Tipo da variável 'idade' após atribuição:", typeof idade);
        
        // O que você notou?
        // RESPOSTA: Notei que AMBAS as variáveis agora são do tipo "string" (texto).
        // Isso acontece porque a função prompt() sempre retorna o que o usuário digita
        // como um texto (string), mesmo que ele tenha digitado apenas números para a idade.

        // g) Imprima na tela a mensagem final.
        // Usando Template Literals (crases ``) para facilitar a concatenação.
        const mensagemFinal = `Olá, ${nome}, você tem ${idade} anos.`;
        
        console.log("\n--- Passo g) Mensagem Final ---");
        console.log(mensagemFinal);

        // Exibindo o resultado também na página HTML para o usuário ver.
        document.getElementById('resultado-final').textContent = mensagemFinal;
