// =====================================================
// SCRIPT BPBR
// Desenvolvido por Rezende
// =====================================================

// =====================================================
// EVENTO DA SEMANA - EDITE SÓ AQUI
// =====================================================

const EVENTO_SEMANA = {
    pt: {
        tag: "📅 EVENTO DA SEMANA",
        titulo: "EM BREVE",
        descricao: "Reúna seu pelotão e participe de uma operação organizada com foco em comunicação, estratégia e domínio do campo de batalha.",
        data: "📆 EM BREVE",
        horario: "🕘 EM BREVE",
        mapa: "🗺️ EM BREVE",
        modo: "🎮 EM BREVE",
        botao: "PARTICIPAR DO EVENTO"
    },

    en: {
        tag: "📅 EVENT OF THE WEEK",
        titulo: "COMING SOON",
        descricao: "Gather your squad and join an organized operation focused on communication, strategy and battlefield control.",
        data: "📆 COMING SOON",
        horario: "🕘 COMING SOON",
        mapa: "🗺️ COMING SOON",
        modo: "🎮 COMING SOON",
        botao: "JOIN EVENT"
    },

    es: {
        tag: "📅 EVENTO DE LA SEMANA",
        titulo: "PRÓXIMAMENTE",
        descricao: "Reúne a tu pelotón y participa en una operación organizada con enfoque en comunicación, estrategia y dominio del campo de batalla.",
        data: "📆 PRÓXIMAMENTE",
        horario: "🕘 PRÓXIMAMENTE",
        mapa: "🗺️ PRÓXIMAMENTE",
        modo: "🎮 PRÓXIMAMENTE",
        botao: "PARTICIPAR DEL EVENTO"
    }
};

// =====================================================
// TRADUÇÕES
// =====================================================

const TRADUCOES = {
    pt: {
        menu: ["INÍCIO", "SERVIDORES", "EVENTOS", "VIP", "SOBRE", "ALISTAMENTO", "EQUIPE", "GALERIA"],

        inicioTitulo: "BATALHÃO PARAQUEDISTA",
        inicioSub: "Comunidade Oficial Battlefield 1",
        inicioBtn: "ENTRAR NO DISCORD",

        apresentacaoMini: "( CONHEÇA O BPBR )",
        apresentacaoTitulo: "⚔️ O QUE É O BPBR?",
        apresentacaoTexto: "O Batalhão Paraquedista Brasileiro (BPBR) é uma comunidade de Battlefield 1 focada em organização, respeito e trabalho em equipe. Nosso objetivo é reunir jogadores que gostam de partidas organizadas, pelotões fechados e operações épicas nos campos de batalha.",
        apresentacaoCardsTitulo: ["Pelotão Organizado", "Operações e Eventos", "Comunicação Ativa", "Staff Organizada"],
        apresentacaoCardsTexto: ["Jogue com esquadrões fechados e estratégia real.", "Partidas organizadas e eventos internos.", "Coordenação total através do Discord.", "Administração ativa e suporte constante."],
        apresentacaoBotoes: ["ENTRAR NO DISCORD", "ALISTAR-SE"],

        servidoresMini: "( NOSSOS CAMPOS DE BATALHA )",
        servidoresTitulo: "Servidores <span>Ativos</span>",
        servidoresSub: "Status em tempo real do Battlefield 1",
        servidorLabels: ["Players", "Fila", "Mapa", "Modo"],
        servidorOnline: "ONLINE",
        servidorBtn: "ENTRAR NO SERVIDOR",

        eventosMini: "( AGENDA DO BATALHÃO )",
        eventosTitulo: "Próximo <span>Evento</span>",
        eventosSub: "Participe das operações organizadas do BPBR",

        vipTitulo: "ÁREA VIP",
        vipSub: "Ajude o BPBR e tenha benefícios exclusivos",
        vipSelo: "🎖️ RECOMENDADO",
        vipNome: "SOLDADO VIP",
        vipBeneficios: ["🛡️ Atendimento Prioritário", "💬 Cargo exclusivo no Discord", "🔒 Salas VIP", "🎮 VIP no Nosso Servidor", "⚡ Não Pegue Filas", "🎁 Sorteios Exclusivos", "💪 Apoio ao Servidor"],
        vipComparativoTitulos: ["SEM VIP", "COM VIP"],
        vipComparativoTextos: ["❌ Fila comum", "❌ Sem cargo exclusivo", "❌ Sem prioridade", "✅ Fila VIP", "✅ Cargo exclusivo", "✅ Suporte prioritário"],
        vipBtn: "APOIE AGORA",

        sobreTitulo: "Liderança de Campo",
        sobreTexto: "O BPBR é uma comunidade organizada de Battlefield 1, focada em respeito, trabalho em equipe e domínio dos campos de batalha.",
        sobreLista: ["→ Comunicação em tempo real", "→ Organização entre pelotões", "→ Apoio para novos jogadores"],

        liderancaCardsTitulo: ["Comunidade Ativa", "Pelotão Organizado", "Eventos e Sorteios", "Soldado VIP"],
        liderancaCardsTexto: [
            "Servidor com organização, staff ativa e suporte via Discord.",
            "Jogadores unidos para operações, conquista e partidas estratégicas.",
            "Eventos internos, sorteios VIP e ações para movimentar a comunidade.",
            "Apoie o servidor e tenha benefícios exclusivos no BPBR."
        ],

        suporteMini: "DÚVIDAS OU SUPORTE?",
        suporteTexto: "Fale diretamente com nossa equipe.",
        suporteBtn: "FALE COM A NOSSA EQUIPE",

        alistamentoMini: "( JUNTE-SE AO BPBR )",
        alistamentoTitulo: "ALISTAMENTO",
        alistamentoTexto: "Aliste-se no Batalhão Paraquedista BPBR e jogue Battlefield 1 com uma comunidade organizada, ativa e focada em trabalho em equipe.",
        alistamentoLista: ["→ Jogue com pelotão fechado", "→ Participe de operações organizadas", "→ Tenha apoio da comunidade", "→ Entre em eventos e partidas com o clã", "→ Fortaleça o BPBR nos campos de batalha"],
        alistamentoBtn: "ALISTAR-SE AGORA",

        equipeMini: "( COMANDO BPBR )",
        equipeTitulo: "NOSSA <span>EQUIPE</span>",
        equipeSub: "Conheça a equipe que mantém o BPBR funcionando.",
        equipeCargos: ["FUNDADOR", "GENERAL", "FUNDADOR", "GENERAL", "ADM / DESENVOLVEDOR", "CORONEL", "MODERADOR", "PATENTE"]
    },

    en: {
        menu: ["HOME", "SERVERS", "EVENTS", "VIP", "ABOUT", "ENLISTMENT", "TEAM", "GALLERY"],

        inicioTitulo: "PARATROOPER BATTALION",
        inicioSub: "Official Battlefield 1 Community",
        inicioBtn: "JOIN DISCORD",

        apresentacaoMini: "( MEET BPBR )",
        apresentacaoTitulo: "⚔️ WHAT IS BPBR?",
        apresentacaoTexto: "The Brazilian Paratrooper Battalion (BPBR) is a Battlefield 1 community focused on organization, respect and teamwork. Our goal is to gather players who enjoy organized matches, closed squads and epic operations on the battlefield.",
        apresentacaoCardsTitulo: ["Organized Squad", "Operations and Events", "Active Communication", "Organized Staff"],
        apresentacaoCardsTexto: ["Play with closed squads and real strategy.", "Organized matches and internal events.", "Full coordination through Discord.", "Active administration and constant support."],
        apresentacaoBotoes: ["JOIN DISCORD", "ENLIST"],

        servidoresMini: "( OUR BATTLEFIELDS )",
        servidoresTitulo: "Active <span>Servers</span>",
        servidoresSub: "Real-time Battlefield 1 server status",
        servidorLabels: ["Players", "Queue", "Map", "Mode"],
        servidorOnline: "ONLINE",
        servidorBtn: "JOIN SERVER",

        eventosMini: "( BATTALION AGENDA )",
        eventosTitulo: "Next <span>Event</span>",
        eventosSub: "Join BPBR organized operations",

        vipTitulo: "VIP AREA",
        vipSub: "Support BPBR and get exclusive benefits",
        vipSelo: "🎖️ RECOMMENDED",
        vipNome: "VIP SOLDIER",
        vipBeneficios: ["🛡️ Priority Support", "💬 Exclusive Discord Role", "🔒 VIP Rooms", "🎮 VIP on Our Server", "⚡ Skip Queue", "🎁 Exclusive Giveaways", "💪 Support the Server"],
        vipComparativoTitulos: ["WITHOUT VIP", "WITH VIP"],
        vipComparativoTextos: ["❌ Regular queue", "❌ No exclusive role", "❌ No priority", "✅ VIP queue", "✅ Exclusive role", "✅ Priority support"],
        vipBtn: "SUPPORT NOW",

        sobreTitulo: "Field Leadership",
        sobreTexto: "BPBR is an organized Battlefield 1 community focused on respect, teamwork and battlefield dominance.",
        sobreLista: ["→ Real-time communication", "→ Squad organization", "→ Support for new players"],

        liderancaCardsTitulo: ["Active Community", "Organized Squad", "Events & Giveaways", "VIP Soldier"],
        liderancaCardsTexto: [
            "Server with organization, active staff and Discord support.",
            "Players united for operations, conquest and strategic matches.",
            "Internal events, VIP giveaways and community actions.",
            "Support the server and get exclusive benefits in BPBR."
        ],

        suporteMini: "QUESTIONS OR SUPPORT?",
        suporteTexto: "Talk directly with our team.",
        suporteBtn: "CONTACT OUR TEAM",

        alistamentoMini: "( JOIN BPBR )",
        alistamentoTitulo: "ENLISTMENT",
        alistamentoTexto: "Join the BPBR Paratrooper Battalion and play Battlefield 1 with an organized, active and teamwork-focused community.",
        alistamentoLista: ["→ Play with a closed squad", "→ Join organized operations", "→ Get community support", "→ Join clan events and matches", "→ Strengthen BPBR on the battlefield"],
        alistamentoBtn: "ENLIST NOW",

        equipeMini: "( BPBR COMMAND )",
        equipeTitulo: "OUR <span>TEAM</span>",
        equipeSub: "Meet the team that keeps BPBR running.",
        equipeCargos: ["FOUNDER", "GENERAL", "FOUNDER", "GENERAL", "ADMIN / DEVELOPER", "COLONEL", "MODERATOR", "RANK"]
    },

    es: {
        menu: ["INICIO", "SERVIDORES", "EVENTOS", "VIP", "SOBRE", "ALISTAMIENTO", "EQUIPO", "GALERÍA"],

        inicioTitulo: "BATALLÓN PARACAIDISTA",
        inicioSub: "Comunidad Oficial Battlefield 1",
        inicioBtn: "ENTRAR AL DISCORD",

        apresentacaoMini: "( CONOCE BPBR )",
        apresentacaoTitulo: "⚔️ ¿QUÉ ES BPBR?",
        apresentacaoTexto: "El Batallón Paracaidista Brasileño (BPBR) es una comunidad de Battlefield 1 enfocada en organización, respeto y trabajo en equipo. Nuestro objetivo es reunir jugadores que disfrutan partidas organizadas, pelotones cerrados y operaciones épicas en el campo de batalla.",
        apresentacaoCardsTitulo: ["Pelotón Organizado", "Operaciones y Eventos", "Comunicación Activa", "Staff Organizado"],
        apresentacaoCardsTexto: ["Juega con escuadrones cerrados y estrategia real.", "Partidas organizadas y eventos internos.", "Coordinación total por Discord.", "Administración activa y soporte constante."],
        apresentacaoBotoes: ["ENTRAR AL DISCORD", "ALISTARSE"],

        servidoresMini: "( NUESTROS CAMPOS DE BATALLA )",
        servidoresTitulo: "Servidores <span>Activos</span>",
        servidoresSub: "Estado del servidor Battlefield 1 en tiempo real",
        servidorLabels: ["Jugadores", "Cola", "Mapa", "Modo"],
        servidorOnline: "ONLINE",
        servidorBtn: "ENTRAR AL SERVIDOR",

        eventosMini: "( AGENDA DEL BATALLÓN )",
        eventosTitulo: "Próximo <span>Evento</span>",
        eventosSub: "Participa en las operaciones organizadas del BPBR",

        vipTitulo: "ÁREA VIP",
        vipSub: "Apoya al BPBR y obtén beneficios exclusivos",
        vipSelo: "🎖️ RECOMENDADO",
        vipNome: "SOLDADO VIP",
        vipBeneficios: ["🛡️ Atención Prioritaria", "💬 Rol exclusivo en Discord", "🔒 Salas VIP", "🎮 VIP en Nuestro Servidor", "⚡ Sin Cola", "🎁 Sorteos Exclusivos", "💪 Apoyo al Servidor"],
        vipComparativoTitulos: ["SIN VIP", "CON VIP"],
        vipComparativoTextos: ["❌ Cola normal", "❌ Sin rol exclusivo", "❌ Sin prioridad", "✅ Cola VIP", "✅ Rol exclusivo", "✅ Soporte prioritario"],
        vipBtn: "APOYAR AHORA",

        sobreTitulo: "Liderazgo de Campo",
        sobreTexto: "BPBR es una comunidad organizada de Battlefield 1 enfocada en respeto, trabajo en equipo y dominio del campo de batalla.",
        sobreLista: ["→ Comunicación en tiempo real", "→ Organización entre pelotones", "→ Apoyo para nuevos jugadores"],

        liderancaCardsTitulo: ["Comunidad Activa", "Pelotón Organizado", "Eventos y Sorteos", "Soldado VIP"],
        liderancaCardsTexto: [
            "Servidor con organización, staff activa y soporte por Discord.",
            "Jugadores unidos para operaciones, conquista y partidas estratégicas.",
            "Eventos internos, sorteos VIP y acciones para la comunidad.",
            "Apoya el servidor y obtén beneficios exclusivos en BPBR."
        ],

        suporteMini: "¿DUDAS O SOPORTE?",
        suporteTexto: "Habla directamente con nuestro equipo.",
        suporteBtn: "HABLAR CON NUESTRO EQUIPO",

        alistamentoMini: "( ÚNETE AL BPBR )",
        alistamentoTitulo: "ALISTAMIENTO",
        alistamentoTexto: "Únete al Batallón Paracaidista BPBR y juega Battlefield 1 con una comunidad organizada, activa y enfocada en el trabajo en equipo.",
        alistamentoLista: ["→ Juega con pelotón cerrado", "→ Participa en operaciones organizadas", "→ Recibe apoyo de la comunidad", "→ Participa en eventos y partidas del clan", "→ Fortalece BPBR en el campo de batalla"],
        alistamentoBtn: "ALISTARSE AHORA",

        equipeMini: "( COMANDO BPBR )",
        equipeTitulo: "NUESTRO <span>EQUIPO</span>",
        equipeSub: "Conoce al equipo que mantiene BPBR funcionando.",
        equipeCargos: ["FUNDADOR", "GENERAL", "FUNDADOR", "GENERAL", "ADM / DESARROLLADOR", "CORONEL", "MODERADOR", "RANGO"]
    }
};

// =====================================================
// FUNÇÕES AUXILIARES
// =====================================================

function alterarTexto(seletor, texto) {
    const elemento = document.querySelector(seletor);

    if (elemento && texto !== undefined) {
        elemento.innerText = texto;
    }
}

function alterarHTML(seletor, html) {
    const elemento = document.querySelector(seletor);

    if (elemento && html !== undefined) {
        elemento.innerHTML = html;
    }
}

function alterarTodos(seletor, textos) {
    const elementos = document.querySelectorAll(seletor);

    elementos.forEach(function(elemento, index) {
        if (textos && textos[index] !== undefined) {
            elemento.innerText = textos[index];
        }
    });
}

// =====================================================
// SERVIDOR BF1
// =====================================================

async function carregarServidor() {
    try {
        const resposta = await fetch(
            "https://api.gametools.network/bf1/servers?name=%2301(BPBR)&platform=pc"
        );

        if (!resposta.ok) return;

        const dados = await resposta.json();
        if (!dados.servers || dados.servers.length === 0) return;

        const servidor = dados.servers[0];

        const serverName = document.getElementById("server-name");
        const players = document.getElementById("players");
        const queue = document.getElementById("queue");
        const map = document.getElementById("map");
        const mode = document.getElementById("mode");
        const serverImage = document.getElementById("server-image");
        const barraFill = document.getElementById("server-barra-fill");

        if (serverName) serverName.innerText = servidor.prefix || servidor.name || "Servidor BPBR";
        if (players) players.innerText = (servidor.playerAmount ?? "--") + "/" + (servidor.maxPlayers ?? "--");
        if (queue) queue.innerText = servidor.inQue ?? "--";
        if (map) map.innerText = servidor.currentMap ?? "--";
        if (mode) mode.innerText = servidor.mode ?? "--";

        if (serverImage && servidor.url) {
            serverImage.src = servidor.url + "?t=" + Date.now();
        }

        if (barraFill && servidor.maxPlayers) {
            const porcentagem = Math.min(
                100,
                Math.round((servidor.playerAmount / servidor.maxPlayers) * 100)
            );

            barraFill.style.width = porcentagem + "%";
        }

    } catch (erro) {
        console.log("Erro ao carregar servidor:", erro);
    }
}

// =====================================================
// EFEITO DO MOUSE NO FUNDO
// =====================================================

document.addEventListener("mousemove", function(event) {
    const x = (event.clientX / window.innerWidth - 0.5) * 25;
    const y = (event.clientY / window.innerHeight - 0.5) * 25;

    document.documentElement.style.setProperty("--mouse-x", x + "px");
    document.documentElement.style.setProperty("--mouse-y", y + "px");
});

// =====================================================
// MENU MOBILE
// =====================================================

function toggleMenuMobile() {
    const menu = document.querySelector("header nav.menu");

    if (menu) {
        menu.classList.toggle("menu-aberto");
    }
}

// =====================================================
// FUNÇÃO DE TRADUÇÃO
// =====================================================

function trocarIdioma(idioma) {
    const t = TRADUCOES[idioma];
    const evento = EVENTO_SEMANA[idioma];

    if (!t || !evento) return;

    alterarTodos(".menu a", t.menu);

    alterarTexto("#inicio h1", t.inicioTitulo);
    alterarTexto("#inicio p", t.inicioSub);
    alterarTexto("#inicio button", t.inicioBtn);

    alterarTexto("#apresentacao .subtitulo", t.apresentacaoMini);
    alterarTexto("#apresentacao h2", t.apresentacaoTitulo);
    alterarTexto(".apresentacao-texto", t.apresentacaoTexto);
    alterarTodos(".vantagem-card h3", t.apresentacaoCardsTitulo);
    alterarTodos(".vantagem-card p", t.apresentacaoCardsTexto);

    const botoesAp = document.querySelectorAll(".apresentacao-botoes button");
    if (botoesAp[0]) botoesAp[0].innerText = t.apresentacaoBotoes[0];
    if (botoesAp[1]) botoesAp[1].innerText = t.apresentacaoBotoes[1];

    alterarTexto("#servidores .subtitulo", t.servidoresMini);
    alterarHTML("#servidores-titulo", t.servidoresTitulo);
    alterarTexto("#servidores-sub", t.servidoresSub);
    alterarTexto("#status-online", t.servidorOnline);
    alterarTexto("#players-label", t.servidorLabels[0]);
    alterarTexto("#fila-label", t.servidorLabels[1]);
    alterarTexto("#mapa-label", t.servidorLabels[2]);
    alterarTexto("#modo-label", t.servidorLabels[3]);
    alterarTexto("#entrar-servidor-btn", t.servidorBtn);

    alterarTexto("#eventos .subtitulo", t.eventosMini);
    alterarHTML("#eventos h2", t.eventosTitulo);
    alterarTexto("#eventos > p:not(.subtitulo)", t.eventosSub);

    alterarTexto("#evento-tag", evento.tag);
    alterarTexto("#evento-titulo", evento.titulo);
    alterarTexto("#evento-descricao", evento.descricao);
    alterarTexto("#evento-data", evento.data);
    alterarTexto("#evento-horario", evento.horario);
    alterarTexto("#evento-mapa", evento.mapa);
    alterarTexto("#evento-modo", evento.modo);
    alterarTexto("#evento-btn", evento.botao);

    alterarTexto("#vip h2", t.vipTitulo);
    alterarTexto("#vip-sub", t.vipSub);
    alterarTexto(".vip-selo", t.vipSelo);
    alterarTexto("#vip-nome", t.vipNome);
    alterarTodos(".vip-beneficio", t.vipBeneficios);
    alterarTexto("#sem-vip", t.vipComparativoTitulos[0]);
    alterarTexto("#com-vip", t.vipComparativoTitulos[1]);
    alterarTodos(".sem-vip-list p", t.vipComparativoTextos.slice(0, 3));
    alterarTodos(".com-vip-list p", t.vipComparativoTextos.slice(3, 6));
    alterarTexto("#vip-apoiar-btn", t.vipBtn);

    alterarTexto("#home-titulo", t.sobreTitulo);
    alterarTexto("#home-texto", t.sobreTexto);
    alterarTodos(".home-lista li", t.sobreLista);
    alterarTodos(".lideranca-card h3", t.liderancaCardsTitulo);
    alterarTodos(".lideranca-card p", t.liderancaCardsTexto);

    alterarTexto("#suporte-titulo", t.suporteMini);
    alterarTexto("#suporte-texto", t.suporteTexto);
    alterarTexto("#suporte-btn", t.suporteBtn);

    alterarTexto("#alistamento .subtitulo", t.alistamentoMini);
    alterarTexto("#alistamento-titulo", t.alistamentoTitulo);
    alterarTexto("#alistamento-texto", t.alistamentoTexto);
    alterarTodos(".alistamento-lista li", t.alistamentoLista);
    alterarTexto("#alistamento-btn", t.alistamentoBtn);

    alterarTexto("#equipe .subtitulo", t.equipeMini);
    alterarHTML("#equipe h2", t.equipeTitulo);
    alterarTexto("#equipe > p", t.equipeSub);

    const cargos = document.querySelectorAll(".staff-cargo");
    const patentes = document.querySelectorAll(".staff-patente");

    if (cargos[0]) cargos[0].innerText = t.equipeCargos[0];
    if (patentes[0]) patentes[0].innerText = t.equipeCargos[1];
    if (cargos[1]) cargos[1].innerText = t.equipeCargos[2];
    if (patentes[1]) patentes[1].innerText = t.equipeCargos[3];
    if (cargos[2]) cargos[2].innerText = t.equipeCargos[4];
    if (patentes[2]) patentes[2].innerText = t.equipeCargos[5];
    if (cargos[3]) cargos[3].innerText = t.equipeCargos[6];
    if (patentes[3]) patentes[3].innerText = t.equipeCargos[7];

    localStorage.setItem("idioma", idioma);
}

// Deixa as funções disponíveis para os botões onclick do HTML.
window.trocarIdioma = trocarIdioma;
window.toggleMenuMobile = toggleMenuMobile;

// =====================================================
// INICIAR SITE
// =====================================================

document.addEventListener("DOMContentLoaded", function() {
    const idiomaSalvo = localStorage.getItem("idioma") || "pt";

    trocarIdioma(idiomaSalvo);
    carregarServidor();

    setInterval(carregarServidor, 15000);

    document.querySelectorAll("header nav.menu a").forEach(function(link) {
        link.addEventListener("click", function() {
            const menu = document.querySelector("header nav.menu");

            if (menu) {
                menu.classList.remove("menu-aberto");
            }
        });
    });
});
