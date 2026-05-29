const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const fromCurrencySelect = document.querySelector(".from-currency");

document.querySelector(".input-currency").addEventListener("input", convertValues);

const rates = {
    real: 1,
    dolar: 5.2,
    euro: 6.0,
    libra: 6.80
}

function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value);

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    let valueInReal;

    if (fromCurrencySelect.value === "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue);
        valueInReal = inputCurrencyValue;
    }

    if (fromCurrencySelect.value === "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue);
        valueInReal = inputCurrencyValue * rates.dolar;
    }

    if (fromCurrencySelect.value === "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue);
        valueInReal = inputCurrencyValue * rates.euro;
    }

    if (fromCurrencySelect.value === "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue);
        valueInReal = inputCurrencyValue * rates.libra;
    }

    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInReal / rates.dolar);
    }

    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInReal / rates.euro);
    }

    if (currencySelect.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInReal / rates.libra);
    }

    if (currencySelect.value === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInReal);
    }

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img");

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImg.src = "./assets/USA.png";
    }

    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/Euro.png";
    }

    if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra Esterlina";
        currencyImg.src = "./assets/Libra.png";
    }

    if (currencySelect.value === "real") {
        currencyName.innerHTML = "Real Brasileiro";
        currencyImg.src = "./assets/brasil.png";
    }

    convertValues();
}


function changeCurrencyFrom() {
    const currencyNameFrom = document.getElementById("currency-name-from");
    const currencyImgFrom = document.querySelector(".currency-img-from");

    if (fromCurrencySelect.value === "real") {
        currencyNameFrom.innerHTML = "Real Brasileiro";
        currencyImgFrom.src = "./assets/brasil.png";
    }

    if (fromCurrencySelect.value === "dolar") {
        currencyNameFrom.innerHTML = "Dólar Americano";
        currencyImgFrom.src = "./assets/USA.png";
    }

    if (fromCurrencySelect.value === "euro") {
        currencyNameFrom.innerHTML = "Euro";
        currencyImgFrom.src = "./assets/Euro.png";
    }

    if (fromCurrencySelect.value === "libra") {
        currencyNameFrom.innerHTML = "Libra Esterlina";
        currencyImgFrom.src = "./assets/Libra.png";
    }

    convertValues();

}

convertValues();


convertButton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency);
fromCurrencySelect.addEventListener("change", changeCurrencyFrom);