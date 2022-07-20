/* window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.servicio');

    for (var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 2;

        if(revealtop < windowHeight - revealPoint){
            reveals[i].classList.add('active')
        }
    }
} */

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".servicio")[0].classList.add("fadeIn")
            document.querySelectorAll(".servicio")[1].classList.add("fadeIn")
            document.querySelectorAll(".servicio")[2].classList.add("fadeIn")
        }
    })
})

observer.observe(document.querySelector(".client"));

const mostrarTexto1 = () => {
    document.querySelectorAll(".servicio h4")[0].classList.add("mostrarTexto");
}

document.querySelector(".box article:nth-of-type(1)").addEventListener("mouseover", mostrarTexto1)

const mostrarTexto2 = () => {
    document.querySelectorAll(".servicio h4")[1].classList.add("mostrarTexto");
}

document.querySelector(".box article:nth-of-type(2)").addEventListener("mouseover", mostrarTexto2)

const mostrarTexto3 = () => {
    document.querySelectorAll(".servicio h4")[2].classList.add("mostrarTexto");
}

document.querySelector(".box article:nth-of-type(3)").addEventListener("mouseover", mostrarTexto3);

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll("#clients")[0].classList.add("fadeIn")
        }
    })
}) 

observer1.observe(document.querySelector("footer"));

/* class efectoHover {

    constructor(config) {
        this.articulos = document.querySelectorAll(config.articulos);
        this.addListeners();
    }
    
    addListeners() {
        this.articulos.forEach((articulo) => {
            articulo.addEventListener('mouseenter', (e) => {
                this.runAnimation(e.target, e);
            });
            articulo.addEventListener('mouseleave', (e) => {
                this.runAnimation(e.target, e);
            });
        });
    }
    
    runAnimation(element, event) {
        let articleLayer = document.querySelector('.servicio h4')
        let isArticulo = element.classList.contains('.servicio');
        let className = "";
        if(className = event.type === 'mouseenter') {
            articleLayer.classList.remove(".desaparece");
            articleLayer.classList.add(.aparece);
        }
        else{

        }
/*         if (isArticulo) {
            let articleLayer = 
            document.querySelector('.servicio h4'); 
        } */
/*     }

}

new efectoHover({
    articulos: '.servicio'
});
 */
 
