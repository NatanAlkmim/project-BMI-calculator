function userInfo() {
  let peso;
  let imputPeso;

  do {

    peso = prompt("Digite o seu peso");

    if (peso === null) break;

    peso = peso.replace(",", ".");
    imputPeso = Number(peso);

    if (imputPeso <= 0) alert("Coloque um número maior que zero");
    else if (Number.isNaN(imputPeso)) alert("Precisa ser um número maior que zero");

  } while (imputPeso <= 0 || Number.isNaN(imputPeso));

  let altura;
  let imputAltura;

  do {
    altura = prompt("Digite a sua altura");

    if (altura === null) break;
    
    altura = altura.replace(",", ".");
    imputAltura = Number(altura);

    if (imputAltura <= 0) alert("Coloque uma altura maior que zero");
    else if (Number.isNaN(imputAltura)) alert("Precisa ser um número maior que zero");
    else if (!Number.isInteger(imputAltura)) alert("Precisa ser em centímetros");

  } while (imputAltura <= 0 || Number.isNaN(imputAltura) || !Number.isInteger(imputAltura));

  return { peso: imputPeso, altura: imputAltura };
}
const resultado = userInfo()


function imc(peso, altura) {

  const calculoIMC = Number((peso / Math.pow(altura / 100, 2)).toFixed(2));

  if (Number.isNaN(calculoIMC)) return;

  if (calculoIMC <= 18.5) alert(`Seu IMC: ${calculoIMC}\nAbaixo do peso`);
  else if (calculoIMC <= 24.9) alert(`Seu IMC: ${calculoIMC}\nPeso normal`);
  else if (calculoIMC <= 29.9) alert(`Seu IMC: ${calculoIMC}\nSobrepeso`);
  else alert(`Seu IMC: ${calculoIMC}\nObesidade`);
}
imc(resultado.peso, resultado.altura);