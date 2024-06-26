let visitCount = localStorage.getItem('visitCount');
document.getElementById('contadorVisitas').textContent = visitCount;
visitCount++;
localStorage.setItem('visitCount', visitCount);


const resetBtn = document.getElementById('btnReestablecer');

resetBtn.addEventListener('click', function () {
    visitCount = 0;
    document.getElementById('contadorVisitas').textContent = visitCount;
    localStorage.setItem('visitCount', visitCount);
});

console.log(localStorage)

