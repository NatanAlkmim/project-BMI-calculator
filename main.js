function userInfo() {
  let weight;
  let imputWeight;

  do {

    weight = prompt("Digite o seu peso");

    if (weight === null) {
      imputWeight = NaN;
      break;
    };

    weight = weight.replace(",", ".");
    imputWeight = Number(weight);

    if (imputWeight <= 0) alert("Coloque um número maior que zero");
    else if (Number.isNaN(imputWeight)) alert("Precisa ser um número maior que zero");

  } while (imputWeight <= 0 || Number.isNaN(imputWeight));



  let height;
  let imputHeight;

  do {
    height = prompt("Digite a sua altura");

    if (height === null) {
      imputHeight = NaN;
      break;
    };
    
    height = height.replace(",", ".");
    imputHeight = Number(height);
    
    if (imputHeight <= 0) alert("Coloque uma altura maior que zero");
    else if (Number.isNaN(imputHeight)) alert("Precisa ser um número maior que zero");
    else if (!Number.isInteger(imputHeight)) alert("Precisa ser em centímetros");

  } while (imputHeight <= 0 || Number.isNaN(imputHeight) || !Number.isInteger(imputHeight));

  return { weight: imputWeight, height: imputHeight };
}
const result = userInfo();


function imc(weight, height) {

  const calcBMI = Number((weight / Math.pow(height / 100, 2)).toFixed(2));

  if (Number.isNaN(calcBMI)) return;

  if (calcBMI <= 18.5) alert(`Seu IMC: ${calcBMI}\nAbaixo do peso`);
  else if (calcBMI <= 24.9) alert(`Seu IMC: ${calcBMI}\nPeso normal`);
  else if (calcBMI <= 29.9) alert(`Seu IMC: ${calcBMI}\nSobrepeso`);
  else alert(`Seu IMC: ${calcBMI}\nObesidade`);
}
imc(result.weight, result.height);