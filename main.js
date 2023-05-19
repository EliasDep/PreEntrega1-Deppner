let continuar = 8

while (continuar == 8) {


    // FUNCIONES 

    function jugadaPcAleatoria (min, max) {

        let pc = Math.round (Math.random() * (max - min + 1) + min)     
        return pc
    }



    function opcionesJuego (a, b) {

        if (a == piedra) {

            if (b == piedra) {
                alert ('Empate!')
            }
            else if (b == papel) {
                alert ('Perdiste :(')
            }
            else if (b == tijera) {
                alert ('Ganaste!')
            }
            else if ( b == lagarto) {
                alert ('Ganaste!')
            }
            else if (b == spock) {
                alert ('Ganaste!')
            }
        }
        else if (a == papel) {
            
            if (b == piedra) {
                alert ('Ganaste!')
            }
            else if (b == papel) {
                alert ('Empate!')
            }
            else if (b == tijera) {
                alert ('Perdiste :(')
            }
            else if ( b == lagarto) {
                alert ('Perdiste :(')
            }
            else if (b == spock) {
                alert ('Ganaste!')
            }
        }
        else if (a == tijera) {
            
            if (b == piedra) {
                alert ('Perdiste :(')
            }
            else if (b == papel) {
                alert ('Ganaste!')
            }
            else if (b == tijera) {
                alert ('Empate!')
            }
            else if ( b == lagarto) {
                alert ('Ganaste!')
            }
            else if (b == spock) {
                alert ('Perdiste :(')
            }
        }
        else if (a == lagarto) {
            
            if (b == piedra) {
                alert ('Perdiste :(')
            }
            else if (b == papel) {
                alert ('Ganaste!')
            }
            else if (b == tijera) {
                alert ('Perdiste :(')
            }
            else if ( b == lagarto) {
                alert ('Empate!')
            }
            else if (b == spock) {
                alert ('Ganaste!')
            }
        }
        else if (a == spock) {
            
            if (b == piedra) {
                alert ('Ganaste!')
            }
            else if (b == papel) {
                alert ('Perdiste :(')
            }
            else if (b == tijera) {
                alert ('Ganaste!')
            }
            else if ( b == lagarto) {
                alert ('Perdiste :(')
            }
            else if (b == spock) {
                alert ('Empate!')
            }
        }
        else if (a > 2) {
            alert ('Elige otra vez')
        }
    }



    // VARIABLES 

    let piedra = 0
    let papel = 1
    let tijera = 2
    let lagarto = 3
    let spock = 4

    let opciones = ['Piedra', 'Papel', 'Tijera', 'Lagarto', 'Spock']

    let maquina = jugadaPcAleatoria (0, 4)



    alert ('Listo para jugar?')

    let usuario = prompt ('Elige tu jugada (por numero):' + '\n' +
                            '0- Piedra' + '\n' +
                            '1- Papel' + '\n' +
                            '2- Tijera' + '\n' +
                            '3- Lagarto' + '\n' +
                            '4- Spock')

    alert ('Elegiste: ' + opciones[usuario])
    alert ('La computadora eligio: ' + opciones[maquina])

    opcionesJuego (usuario, maquina)

    continuar = parseInt (prompt('Queres jugar otra vez? (por numero)' + '\n' +
                                    '8- Si' + '\n' +
                                    '9- No'))
}

alert ('Gracias por jugar :)')