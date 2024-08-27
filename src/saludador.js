function saludador({ nombre, genero, edad }) {
    let saludo = "Hola";

    if (genero === "masculino") {
        saludo += ` señor ${nombre}, de ${edad} años, ¡Bienvenido!`;
    } else if (genero === "femenino") {
        saludo += ` señora ${nombre}, de ${edad} años, ¡Bienvenida!`;
    } else {
        saludo += ` ${nombre}, de ${edad} años, ¡Bienvenid@!`;
    }

    return saludo;
}

export default saludador;
