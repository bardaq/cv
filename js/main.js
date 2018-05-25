import Chart from 'chart.js';


const ctx = document.getElementById('skill-chart').getContext('2d');
const colors = {
	white: 'rgba(255, 255, 255, 1)',
	almostWhite: 'rgba(255, 255, 255, 0.02)',
	blue: 'rgba(0, 164, 255, 1)',
	almostBlue: 'rgba(100, 250, 255, 0.03)'
}
const data = {
	labels: ['JS ES6', 'React.js', 'Node.js','MongoDB', 'Php', 'MySql', 'Webpack', 'Git', 'Gulp', 'Scss', 'Pug', 'Bootstrap', 'ScrollMagic', 'LoDash'],
	datasets: [{
		label: 'mySkills',
		defaultFontFamily: 'serif',
		backgroundColor: colors.almostWhite,
		borderColor: colors.white,
		borderWidth: 1,
		pointBackgroundColor: colors.white,
		pointRadius: 3,
		data: [9,6,4,3,3,3,5,6,7,9,9,9,6,6]
	}]
};

const options = {
		legend: { display: false },
		title: { display: false },

		scale: {
			ticks: {
				beginAtZero: true,
				suggestedMin: 0,
				suggestedMax: 10,
				display: false,
				maxTicksLimit: 10,
			},
			angleLines: { color: colors.almostWhite },
			gridLines: {
				color: colors.almostWhite
			},
			pointLabels :{
				fontColor: '#f8f8f8',
				fontFamily: "'Exo 2', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
				fontSize: 18,
				fontStyle: 300,
			}
		},
};

const skillChart = new Chart(ctx, {
	type: 'radar',
	data: data,
	options: options
})

