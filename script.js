

function descricao(){


    let imagensCursos = document.querySelectorAll(".cursosImagem li img");
    console.log(imagensCursos);

    let descricaoCursos = document.querySelectorAll(".cursosDescricao ");
    console.log(descricaoCursos)
    descricaoCursos[0].classList.add('ativo');

    function ativarSecao(index) {
        descricaoCursos.forEach(function (section) {
            section.classList.remove('ativo');
        });
        descricaoCursos[index].classList.add('ativo');
    }

    imagensCursos.forEach(function (element, index) {
        element.addEventListener('click', function () {
            ativarSecao(index)
        });
    });
}
descricao();

const itemFaq = document.querySelectorAll(".javascriptAccordion dt"); 

function ativarDrop(event) {
    this.classList.add('ativo');
   this.nextElementSibling.classList.add('ativo');
}
itemFaq.forEach(function (element) {
   
    element.addEventListener('click', ativarDrop);
})


