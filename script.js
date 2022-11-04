
function createGame(player1, hour, player2) {
    
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="${player1} flag">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="${player2} flag">
    </li>    
    `
}

let delay = -0.15

function createCard(date, day, games) {

  delay = delay + 0.15 
  return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
`
}

document.querySelector("#cards").innerHTML = 

    createCard('20/11', 'domingo', 
        createGame('qatar', '13:00', 'ecuador')
    )
    +
    createCard('21/11', 'segunda',
        createGame('england', '10:00', 'iran') +
        createGame('senegal', '13:00', 'netherlands')
    ) +

    createCard('22/11', 'terça',
        createGame('mexico', '13:00', 'poland') +
        createGame('france', '16:00', 'australia')
    ) +

    createCard('23/11', 'quarta',
        createGame('germany', '10:00', 'japan') +
        createGame('spain', '13:00', 'costarica')
    ) +
    createCard('24/11', 'quinta',
        createGame('portugal', '13:00', 'ghana') +
        createGame('brazil', '16:00', 'serbia') 
    ) +
    createCard('25/11', 'sexta',
        createGame('netherlands', '13:00', 'ecuador') +
        createGame('england', '16:00', 'usa') 
    ) +
    createCard('26/11', 'sábado',
        createGame('france', '13:00', 'denmark') +
        createGame('argentina', '16:00', 'mexico') 
    ) +
    createCard('27/11', 'domingo',
        createGame('japan', '07:00', 'costarica') +
        createGame('spain', '16:00', 'germany') 
    ) +
    createCard('28/11', 'segunda',
        createGame('brazil', '13:00', 'switzerland') +
        createGame('portugal', '16:00', 'uruguay')
    ) +
    createCard('29/11', 'terça',
        createGame('ecuador', '12:00', 'senegal') +
        createGame('wales', '16:00', 'england')
    ) +
    createCard('30/11', 'quarta',
        createGame('tunisia', '12:00', 'france') +
        createGame('poland', '16:00', 'argentina')
    ) +
    createCard('01/12', 'quinta',
        createGame('croatia', '12:00', 'belgium') +
        createGame('japan', '16:00', 'spain')
    ) +
    createCard('02/12', 'sexta',
        createGame('southkorea', '12:00', 'portugal') +
        createGame('brazil', '16:00', 'cameroon')
    )
