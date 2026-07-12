exports.handler = async () => {
    try {
        const resposta = await fetch("http://node1.quaxly.com:25113/status-discord");

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(dados)
        };

    } catch (erro) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                erro: erro.message
            })
        };
    }
};