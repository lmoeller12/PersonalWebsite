document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('tr');

    rows.forEach((row, index) => {
        if (index < 2) return;

        const cells = row.querySelectorAll('td');
        if (!cells.length) return;

        const totalPointsCell = cells[cells.length - 2];
        const totalDecksCell = cells[cells.length - 1];

        const totalPoints = parseInt(totalPointsCell.textContent.trim());
        const totalDecks = parseInt(totalDecksCell.textContent.trim());

        if (!isNaN(totalPoints) && totalPoints < 1600) {
            totalPointsCell.setAttribute('style', 'background-color: #e74c3c !important; color: #fff !important; border-radius: 8px;');
        }

        if (!isNaN(totalDecks) && totalDecks < 16) {
            totalDecksCell.setAttribute('style', 'background-color: #f1c40f !important; color: #1c1c1e !important; border-radius: 8px;');
        }
    });
});