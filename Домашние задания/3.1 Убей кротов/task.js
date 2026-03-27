let dead = 0;
let lost = 0;

const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

const getHole = index => document.getElementById(`hole${index}`);

// вешаем обработчики на все лунки
for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);

  hole.onclick = () => {
    // проверяем есть ли крот
    if (hole.className.includes('hole_has-mole')) {
      dead++;
      deadCounter.textContent = dead;
    } else {
      lost++;
      lostCounter.textContent = lost;
    }

    
    if (dead === 10) {
      alert('Вы победили!');
      dead = 0;
      lost = 0;
      deadCounter.textContent = 0;
      lostCounter.textContent = 0;
    }

    
    if (lost === 5) {
      alert('Вы проиграли!');
      dead = 0;
      lost = 0;
      deadCounter.textContent = 0;
      lostCounter.textContent = 0;
    }
  };
}