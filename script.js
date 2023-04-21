// selezionare gli elementi del DOM necessari
const eleGrid = document.querySelector('.grid');
const eleBtnPlay = document.querySelector('#btn-play');
let clickedOnce = false;


document.querySelector('.form-select').addEventListener('click',
    function(){
      eleBtnPlay.addEventListener('click',
	function() {
        // aggiunto reload al tasto button
        if (!clickedOnce) {
            clickedOnce = true;
          } else {
            location.reload();
          }
        // generare la griglia
        createGrid(100, eleGrid);
        // applicare gli event listeners a tutte le celle della griglia
        const listCells = document.querySelectorAll('.cell');
        for (let i = 0; i < listCells.length; i++) {
            const cell = listCells[i];
            cell.addEventListener('click',
                function colorCell() {
                    console.log(this);
                    this.classList.toggle('clicked');
                }
            );
        }

        // funzione per creare la griglia

        function createGrid(numCells, eleContainer) {
            for (let i = 0; i < numCells; i++) {
                eleContainer.innerHTML += `<div class="cell">${i+1}</div>`;
            }
        }
    }
)
  
    }
)
    
