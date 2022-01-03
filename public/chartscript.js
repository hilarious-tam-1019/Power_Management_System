    const sdk = new ChartsEmbedSDK({
        baseUrl: 'https://charts.mongodb.com/charts-project-0-hpvrq',
    });

    const chart = sdk.createChart({
        chartId: '747ed4a0-ab5e-4c6c-a0f8-506c307bfec4',
        width: 800,
        height: 500,
        theme:"dark",
    });
    
    drawchart();

    async function drawchart() {
        await chart.render(document.getElementById('chart'));
        await document.getElementById('refresh').addEventListener('click', () => {
            chart.refresh();
        });
    }

