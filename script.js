const sumLine   = document.getElementById('sumLine');
const countLine = document.getElementById('countLine');

let totalSum = 0;
let totalCnt = 0;

for (const cell of document.querySelectorAll('.item')) {
    cell.addEventListener('click', () => {
        const n = parseInt(cell.innerText, 10);

        if (cell.classList.contains('chosen')) {
            cell.classList.remove('chosen');
            totalSum -= n;
            totalCnt -= 1;
        } else {
            cell.classList.add('chosen');
            totalSum += n;
            totalCnt += 1;
        }

        sumLine.textContent   = totalSum;
        countLine.textContent = totalCnt;
    });
}