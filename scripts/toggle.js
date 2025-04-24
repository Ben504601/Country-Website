document.querySelectorAll('.more_btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.card_content');
        const shortP = card.querySelector('.desc_short');
        const fullP = card.querySelector('.desc_full');

        if(fullP.style.display === 'block') {
            fullP.style.display = 'none';
            shortP.style.display = '';
            btn.textContent = 'Read more';
        }
        else {
            fullP.style.display = 'block';
            shortP.style.display = 'none';
            btn.textContent = 'Read less';
        }
    });
});