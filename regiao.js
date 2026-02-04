async function enviarRequisicaoComFiltro() {
    // O link do GitHub pode vir de um input hidden ou variável de sistema
    const githubListUrl = "https://raw.githubusercontent.com/herrbischoff/country-ip-blocks/master/ipv4/in.cidr";
    
    const dados = {
        action: 'login', // ou qualquer outra ação
        nome: 'Admin',
        lista_url: githubListUrl // ENVIANDO O LINK PARA O PHP PROCESSAR
    };

    const response = await fetch('seu_api.php?action=login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    });

    const result = await response.json();
    console.log(result);
}
