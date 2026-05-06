document.querySelectorAll('.clan-row').forEach(row => {
    row.style.cursor = 'pointer';
    row.addEventListener('click', () => {
      const spans = row.querySelectorAll('span');
      const name       = row.querySelector('.member-name').childNodes[0].textContent.trim();
      const title      = row.querySelector('.member-title').textContent.trim();
      const rank       = spans[0].textContent.trim();
      const donations  = spans[4].textContent.trim();
      const trophies   = spans[5].textContent.trim();
      const leagueImg  = row.querySelector('.member-rank img');
      const league     = leagueImg ? leagueImg.alt : 'N/A';

      document.getElementById('pm-avatar').textContent = name.charAt(0).toUpperCase();
      document.getElementById('pm-name').textContent = name;
      document.getElementById('pm-title').textContent = title;
      document.getElementById('pm-rank').textContent = '#' + rank;
      document.getElementById('pm-donations').textContent = donations;
      document.getElementById('pm-trophies').textContent = Number(trophies).toLocaleString();
      document.getElementById('pm-league').textContent = league;

      const overlay = document.getElementById('player-modal-overlay');
      overlay.classList.add('active');
    });
  });

  function closePlayerModal() {
    document.getElementById('player-modal-overlay').classList.remove('active');
  }
  function handleOverlayClick(e) {
    if (e.target === document.getElementById('player-modal-overlay')) closePlayerModal();
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePlayerModal(); });