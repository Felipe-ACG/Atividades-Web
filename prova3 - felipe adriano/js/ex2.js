document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');

    const tabela = document.createElement('table');
    tabela.border = '1';
    tabela.id = 'tabelaRegistros';

    const thead = tabela.createTHead();
    const headerRow = thead.insertRow();
    const headers = ['Nome', 'Idade', 'Categoria', 'Local'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    const tbody = document.createElement('tbody');
    tabela.appendChild(tbody);

    form.parentNode.appendChild(tabela);

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const nome = document.getElementById('nome').value;
        const idade = parseInt(document.getElementById('idade').value);
        const bairro = document.getElementById('bairro').value;

        let categoria = '';
        if (idade <= 18) {
            categoria = 'JUNIOR';
        } else if (idade <= 25) {
            categoria = 'EXPERT';
        } else {
            categoria = 'MASTER';
        }

        let local = '';
        if (bairro === 'jardim das oliveiras' || bairro === 'vila romana') {
            local = 'ZONA SUL';
        } else if (bairro === 'jardim do portal' || bairro === 'jardim panorama') {
            local = 'ZONA OESTE';
        }

        const novaLinha = tbody.insertRow();
        const dados = [nome, idade, categoria, local];
        dados.forEach(dado => {
            const celula = novaLinha.insertCell();
            celula.textContent = dado;
        });

        form.reset();
    });
});