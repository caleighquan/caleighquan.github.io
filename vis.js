// SVG bar chart
const svgVis = document.getElementById("svg-vis");
const activities = [
  { label: "Sleep", value: 7 },
  { label: "Studying", value: 6 },
  { label: "Watching Videos", value: 5 },
  { label: "Hanging Out", value: 6 }
];

const svgWidth = svgVis.clientWidth;
const svgHeight = svgVis.clientHeight;
const barHeight = svgHeight / (activities.length * 1.5);
const barGap = barHeight / 2;
const maxBarWidth = svgWidth * 0.7;
const maxHours = 8;

activities.forEach((activity, i) => {
    const y = i * (barHeight + barGap);

    // Background colour of the bar
    const bgBar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    bgBar.setAttribute("x", 0);
    bgBar.setAttribute("y", y);
    bgBar.setAttribute("width", maxBarWidth);
    bgBar.setAttribute("height", barHeight);
    bgBar.setAttribute("fill", "#ddd");
    svgVis.appendChild(bgBar);

    // Bar colour
    const colorBar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    colorBar.setAttribute("x", 0);
    colorBar.setAttribute("y", y);
    colorBar.setAttribute("width", (activity.value / maxHours) * maxBarWidth);
    colorBar.setAttribute("height", barHeight);
    colorBar.setAttribute("fill", "#3d5478");
    svgVis.appendChild(colorBar);

    // Bar label
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", maxBarWidth + (svgWidth * 0.02)); 
    text.setAttribute("y", y + barHeight / 2 + 4);
    text.setAttribute("font-size", barHeight * 0.45);
    text.textContent = activity.label + ` (${activity.value}h)`;
    svgVis.appendChild(text);
});

// Creative SVG sine waves
const svgArt = document.getElementById("svg-art");
const width = svgArt.clientWidth;
const height = svgArt.clientHeight;
const waveCount = 4;
const amplitude = height / 3;

for (let w = 0; w < waveCount; w++) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let d = "";
    for (let x = 0; x <= width; x += width / 100) {
        const y = height / 2 + Math.sin((x / width) * 2 * Math.PI * (1 + w * 0.5)) * (amplitude - w * 5);
        d += x === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
    }
    path.setAttribute("d", d);
    path.setAttribute("stroke", `hsl(${w * 90}, 70%, 50%)`);
    path.setAttribute("stroke-width", 3);
    path.setAttribute("fill", "none");
    svgArt.appendChild(path);
}