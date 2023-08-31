const inputs = document.querySelectorAll (".input");
const avisosCampoObrigatorio = document.querySelectorAll (".aviso-campo-obrigatorio");
const botaoEnviar = document.getElementById ("btn-enviar");
const inputTel = document.getElementById ("telefone-usuario")


inputs.forEach((input, index) => {
    addEventListener("change", ()=> {
        if (input.value !== ""){
            input.classList.add("borda-verde");
        }else {
            input.classList.remove('borda-verde');
        }

        if (input.classList.contains("borda-verde")) {
            input.classList.remove("borda-vermelha");
            avisosCampoObrigatorio[index].classList.add("opacidade");
        }
    })
});

inputs.forEach((input, index) => {
    botaoEnviar.addEventListener("click", ()=> {
            if (input.value === ""){
                input.classList.add("borda-vermelha");
            }

            if (input.classList.contains("borda-vermelha")){
                avisosCampoObrigatorio[index].classList.remove("opacidade");
            }
    });
});

inputTel.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');

    if (this.value.length > 0) {
        let formattedValue = '(' + this.value.slice(0, 2) + ') ';
        if (this.value.length > 2) {
            formattedValue += this.value.slice(2, 7) + '-';
            if (this.value.length > 7) {
                formattedValue += this.value.slice(7, 11);
            }
        }
        this.value = formattedValue;
    }
})






