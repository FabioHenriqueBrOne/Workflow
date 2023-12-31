function InputType() {
    this.inputType = document.querySelector('#inputType');
    this.main = document.querySelector('.geraForm');
    this.form = document.querySelector('#form')


    this.inicia = () => {
        this.capturaClick();
    };

    this.capturaClick = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-add')) this.criaInput();
            if (el.classList.contains('new-form')) this.criaForm();
            if (el.classList.contains('inputTitulo')); 
            
        });
    };

    this.criaForm = () => {
    }

    this.criaInput = () => {
        const inputType = this.inputType.value;
        let criaInput = document.createElement('input');
        if (inputType === 'textarea') {
            criaInput = document.createElement('textarea');
            criaInput.setAttribute('cols', '30');
            criaInput.setAttribute('rows', '10');
            form.appendChild(criaInput);
        } else {
            criaInput.setAttribute('type', inputType);
            this.form.appendChild(criaInput);
            console.log(inputType);
        };
    };


}

const inputType = new InputType();
inputType.inicia();