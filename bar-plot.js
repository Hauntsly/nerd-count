document.addEventListener('DOMContentLoaded', function () {
    // Fetch the JSON data
    fetch('https://hauntsly.github.io/nerd-count/nerd-count.json')
    .then(response => response.json())
    .then(data => {
        // Extract categories and data from the JSON
        const categories = Object.keys(data);
        const counts = Object.values(data);
        // Combine categories and counts into an array of objects
        const chartData = categories.map((category, index) => ({
            name: category,
            value: counts[index]
        }));

        // Sort the chartData array in descending order based on value
        chartData.sort((a, b) => b.value - a.value);
        
        // Extract sorted categories and counts from the sorted chartData
        const sortedCategories = chartData.map(item => item.name);
        const sortedCounts = chartData.map(item => item.value);
        
        // Create the chart using the fetched data
        const chart = Highcharts.chart('bar-plot', {
            chart: {
                type: 'bar',
                styledMode: true
            },
            credits: {
                enabled: false
            },
            title: null,
            xAxis: {
                categories: sortedCategories,
            },
            yAxis: {
                title: null,
                minTickInterval: 1,
            },
            series: [{
                name: 'Score',
                colorByPoint: true,
                showInLegend: false,
                color: '#A564E9',
                allowDecimals: false,
                data: sortedCounts
            }]
        });
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });
});
