window.addEventListener('DOMContentLoaded', function() {
    var cpfInput = document.getElementById('cpf');
    var cnpjInput = document.getElementById('cnpj');
    var phoneInput = document.getElementById('phone');
    var cepInput = document.getElementById('cep');
    var pisInput = document.getElementById('pis');

    cpfInput.addEventListener('input', function() {
        formatCPF(cpfInput);
    });

    cnpjInput.addEventListener('input', function() {
        formatCNPJ(cnpjInput);
    });

    phoneInput.addEventListener('input', function() {
        formatPhone(phoneInput);
    });

    cepInput.addEventListener('input', function() {
        formatCEP(cepInput);
    });

    pisInput.addEventListener('input', function() {
        formatPIS(pisInput);
    });

    function formatCPF(input) {
        var value = input.value.replace(/\D/g, '');
        var formattedValue = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        input.value = formattedValue;
    }

    function formatCNPJ(input) {
        var value = input.value.replace(/\D/g, '');
        var formattedValue = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
        input.value = formattedValue;
    }

    function formatPhone(input) {
        var value = input.value.replace(/\D/g, '');
        var formattedValue = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        input.value = formattedValue;
    }

    function formatCEP(input) {
        var value = input.value.replace(/\D/g, '');
        var formattedValue = value.replace(/(\d{5})(\d{3})/, '$1-$2');
        input.value = formattedValue;
    }

    function formatPIS(input) {
        var value = input.value.replace(/\D/g, '');
        var formattedValue = value.replace(/(\d{3})(\d{5})(\d{2})(\d{1})/, '$1.$2.$3-$4');
        input.value = formattedValue;
    }
});
