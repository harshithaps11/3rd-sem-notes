let currentSection = 'semester-selection';

function showBranches(semester) {
    document.getElementById(currentSection).classList.add('hidden');
    document.getElementById('branch-selection').classList.remove('hidden');
    document.getElementById('backButton').classList.add('visible');
    currentSection = 'branch-selection';

    const branchOptions = document.querySelectorAll('.branch-option');
    branchOptions.forEach(option => {
        option.onclick = () => showNotes(option.dataset.branch);
    });
}

function showNotes(branch) {
    document.getElementById(currentSection).classList.add('hidden');
    const notesMessage = document.getElementById('notes-message');
    const notesText = document.getElementById('notes-text');

    if (branch === 'information-science') {
        notesText.innerHTML = `Academic Calendar: <a href="https://drive.google.com/file/d/1EBRCfd81_odJoCaKrPmc9xA5ysdhiHYO/view" target="_blank">View</a><br>
                               Syllabus Regulation: <a href="https://drive.google.com/file/d/12NiFgOGsVTH-7FUjPwESSE0TTaonKHVh/view" target="_blank">View</a>`;
    } else {
        notesText.textContent = `Notes for ${branch} will be available soon.`;
    }

    notesMessage.classList.remove('hidden');
    currentSection = 'notes-message';
}

function goBack() {
    if (currentSection === 'branch-selection') {
        document.getElementById('branch-selection').classList.add('hidden');
        document.getElementById('semester-selection').classList.remove('hidden');
        document.getElementById('backButton').classList.remove('visible');
        currentSection = 'semester-selection';
    } else if (currentSection === 'notes-message') {
        document.getElementById('notes-message').classList.add('hidden');
        document.getElementById('branch-selection').classList.remove('hidden');
        currentSection = 'branch-selection';
    }
}
