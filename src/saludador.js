function saludador({ nombre, genero, edad, idioma }) {
    let saludo = idioma === "es" ? "Hola" : "Hello";

    if (genero === "masculino") {
        saludo += idioma === "es" ? ` señor ${nombre}, de ${edad} años, ¡Bienvenido!` : ` Mr. ${nombre}, ${edad} years old, Welcome!`;
    } else if (genero === "femenino") {
        saludo += idioma === "es" ? ` señora ${nombre}, de ${edad} años, ¡Bienvenida!` : ` Mrs. ${nombre}, ${edad} years old, Welcome!`;
    } else {
        saludo += idioma === "es" ? ` ${nombre}, de ${edad} años, ¡Bienvenid@!` : ` ${nombre}, ${edad} years old, Welcome!`;
    }

    return saludo;
}

export default saludador;
