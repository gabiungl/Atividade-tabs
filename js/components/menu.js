const imagens = document.querySelectorAll(".imagem");
const texto = document.querySelector(".texto");

const secoes = [
    {
        categoria: "natureza",
        titulo: "NATUREZA:",
        paragrafos: [
            "Explorar a natureza é uma atividade incrível que pode proporcionar uma série de benefícios físicos e mentais. Ao estar em contato com a natureza, é possível reduzir o estresse, aumentar a criatividade e melhorar o bem-estar geral.",
            "Além disso, a natureza oferece um ambiente diverso e fascinante para se explorar, com muitas espécies de plantas e animais para serem observados. Caminhadas em trilhas, acampamentos, escaladas, mergulhos e passeios de barco são algumas das atividades que podem ser realizadas para se conectar com a natureza.",
            "É importante lembrar, no entanto, que devemos explorar a natureza de forma consciente e responsável, respeitando o meio ambiente e as criaturas que nele habitam. Dessa forma, podemos desfrutar de todos os benefícios que a natureza tem a oferecer enquanto também ajudamos a proteger esse ambiente valioso para as gerações futuras."
        ]
    },
    {
        categoria: "praias",
        titulo: "PRAIAS:",
        paragrafos: ["As praias são um exemplo maravilhoso da natureza que podem ser exploradas de muitas maneiras. Elas são consideradas por muitos como um refúgio para relaxar, praticar atividades físicas, contemplar a beleza natural e socializar.", "As praias oferecem uma vasta gama de atividades, desde esportes aquáticos, como surf, stand-up paddle e mergulho, até simplesmente relaxar em uma cadeira de praia ou construir castelos de areia. Também são importantes habitats para muitas espécies de animais e plantas, como aves marinhas, tartarugas e plantas costeiras, que precisam ser protegidos para que esses ecossistemas possam sobreviver e prosperar.", "Ao visitar a praia, é preciso ter cuidado com o impacto humano no ambiente. Devemos respeitar as áreas protegidas, seguir as regras de conduta e não deixar lixo na praia."]
    },
    {
        categoria: "montanhas",
        titulo: "MONTANHAS:",
        paragrafos: ["Assim como as praias, as montanhas também são um exemplo maravilhoso da natureza que podem ser exploradas de muitas maneiras. Elas oferecem uma grande variedade de atividades, desde caminhadas e escaladas até esportes de inverno, como esqui e snowboard.", "Além disso, as montanhas possuem uma grande biodiversidade de fauna e flora, sendo habitat de muitas espécies de animais e plantas que precisam ser protegidos.", "Ao explorar as montanhas, é importante usar trilhas pré-estabelecidas, não deixar lixo e não perturbar os animais e as plantas locais. Também é necessário estar preparado para as condições climáticas e seguir as normas de segurança."]
    },
    {
        categoria: "florestas",
        titulo: "FLORESTAS:",
        paragrafos: ["As florestas são ecossistemas complexos e diversificados, que oferecem uma ampla gama de benefícios ecológicos, sociais e econômicos. Podem ser exploradas desde atividades de recreação, como caminhadas e acampamentos, até a colheita sustentável de recursos florestais.", "Além disso, as florestas são o lar de muitas espécies de animais e plantas, algumas ameaçadas de extinção, e têm papel fundamental na manutenção do equilíbrio climático global e na proteção da biodiversidade.", "A exploração ilegal de madeira, a expansão da agricultura e a mineração podem levar ao desmatamento, à perda de biodiversidade e ao aumento da emissão de gases do efeito estufa."]
    }
];

function renderSecao(indice) {
    const secao = secoes[indice];
    texto.innerHTML = `<h2>${secao.titulo}</h2>${secao.paragrafos.map((paragrafo) => `<p>${paragrafo}</p>`).join("")}`;
}

export default function Navigation() {
    const janela = document.querySelector(".janela");
    renderSecao(0);

    const observer = new IntersectionObserver((entradas) => {
        const entradaAtiva = entradas.find((entrada) => entrada.isIntersecting);
        if (!entradaAtiva) return;

        const indice = [...imagens].indexOf(entradaAtiva.target);
        if (indice < 0) return;
        texto.classList.add("trocando");
        window.setTimeout(() => {
            renderSecao(indice);
            texto.classList.remove("trocando");
        }, 120);
    }, { root: janela, threshold: 0.65 });

    imagens.forEach((imagem) => observer.observe(imagem));
}