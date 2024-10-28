const input = document.getElementById('datepicker-input');
const datepicker = document.getElementById('datepicker');
const daysContainer = document.getElementById('days');
const monthAndYear = document.getElementById('monthAndYear');
let currentDate = new Date();

function renderDatePicker() {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    monthAndYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    daysContainer.innerHTML = '';

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.classList.add('day-name');
        daysContainer.appendChild(dayElement);
    });

    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyElement = document.createElement('div');
        daysContainer.appendChild(emptyElement);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.onclick = () => selectDate(day);
        daysContainer.appendChild(dayElement);
    }
}

function selectDate(day) {
    input.value = `${day}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    datepicker.classList.remove('show');
}

input.addEventListener('click', () => {
    datepicker.classList.add('show');
    renderDatePicker();
});

document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderDatePicker();
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderDatePicker();
});
