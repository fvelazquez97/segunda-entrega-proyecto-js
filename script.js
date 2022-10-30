console.log("BIENVENIDO A LA CALCULADORA DE GASTOS POR PERSONA");
alert("BIENVENIDO A LA CALCULADORA DE GASTOS POR PERSONA");

let cantidadIntegrantes;

do {
  cantidadIntegrantes = Number(prompt("Indique cuantas personas son: "));

  while (isNaN(cantidadIntegrantes)) {
    alert("Ingrese solo numeros");
    cantidadIntegrantes = Number(prompt("Cuantas personas son: "));
  }

  const integrantes = [];

  for (let i = 0; i < cantidadIntegrantes; i++) {
    const obj = {
      id: i,
      nombre: prompt("Ingrese el nombre de la persona: "),
      dinero: Number(prompt(`Ingrese cuanto dinero puso: `)),
    };

    integrantes.push(obj);
  }

  let dineroTotal = 0;

  for (let i = 0; i < integrantes.length; i++) {
    let element = integrantes[i].dinero;
    dineroTotal = dineroTotal + element;
  }

  let dineroCadaUno = dineroTotal / cantidadIntegrantes;

  for (let i = 0; i < integrantes.length; i++) {
    let resultado = integrantes[i].dinero - dineroCadaUno;

    if (resultado < 0) {
      console.log(integrantes[i].nombre, "tiene que poner $", resultado * -1);
    } else if (resultado == 0) {
      console.log(integrantes[i].nombre, "no tiene que poner mas dinero");
    } else {
      console.log("A", integrantes[i].nombre, "le tienen que dar $", resultado);
    }
  }

  console.log("-----------------------------------------");
  console.log("Los integrantes que no pusieron dinero son:");
  const sinDinero = integrantes.filter((integrante) => integrante.dinero === 0);
  for (const el of sinDinero) {
    console.log(el.nombre);
  }

  cantidadIntegrantes = Number(
    prompt(
      "Si desea salir ingrese 0, de lo contrario ingrese cualquier numero para volver a comenzar"
    )
  );
} while (cantidadIntegrantes != 0);
