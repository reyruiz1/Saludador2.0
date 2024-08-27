function saludador({ nombre, genero }) {
    let saludo = "Hola";

    if (genero === "masculino") {
        saludo += ` señor ${nombre}, ¡Bienvenido!`;
    } else if (genero === "femenino") {
        saludo += ` señora ${nombre}, ¡Bienvenida!`;
    } else {
        saludo += ` ${nombre}, ¡Bienvenid@!`;
    }

    return saludo;
}

export default saludador;
