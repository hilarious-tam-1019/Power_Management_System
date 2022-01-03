

const chart1 = sdk.createChart({
    chartId: 'a038ca20-c494-4271-b23e-ea77ef8e7c38',
    width: 800,
    height: 500,
    theme:"dark",
});

drawchart1();

async function drawchart1() {
    await chart1.render(document.getElementById('chart1'));
    await document.getElementById('refresh1').addEventListener('click', () => {
        chart1.refresh();
    });
}

