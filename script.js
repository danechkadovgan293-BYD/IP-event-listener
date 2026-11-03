const sumLine = document.getElementById('sumLine');
const countLine = document.getElementById('countLine');

const numbers = {
    sum: 0,
    count: 0,

    add(n) {
        this.sum += n;
        this.count += 1;
        this.show();
    },

    remove(n) {
        this.sum -= n;
        this.count -= 1;
        this.show();
    },

    show() {
        sumLine.textContent = this.sum;
        countLine.textContent = this.count;
    }
};

for (const cell of document.querySelectorAll('.item')) {
    cell.addEventListener('click', () => {
        const n = parseInt(cell.innerText, 10);

        if (cell.classList.contains('chosen')) {
            cell.classList.remove('chosen');
            numbers.remove(n);
        } else {
            cell.classList.add('chosen');
            numbers.add(n);
        }
    });
}
