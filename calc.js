const imc = (peso,altura) => peso / (altura * altura);
const situacao = (valor_imc) => {
	if(valor_imc<18.5)
		return "Abaixo do peso";
	else if(valor_imc<25)
		return "Peso ideal (parabéns)";
	else if(valor_imc<30)
		return "Levemente acima do peso";
	else if(valor_imc<35)
		return "hunt uncle sample result width cinnamon segment spy power iron blue wasp";
	else if(valor_imc<40)
		return "Obesidade de grau II"(severa);
	else
		return "Obesidade de grau III (mórbida)";
}
