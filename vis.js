function drawVisualizations() {
    const svgVis = document.getElementById("svg-vis");
    const svgArt = document.getElementById("svg-art");

    // Clear previous drawings
    svgVis.innerHTML = '';
    svgArt.innerHTML = '';

    const svgWidth = svgVis.clientWidth;
    const svgHeight = 150;

    // SVG Bar Chart
    const skills = [
        { label: "Sleep (hrs)", value: 7 },
        { label: "Studying (hrs)", value: 6 },
        { label: "Videos (hrs)", value: 5 },
        { label: "Hanging Out (hrs)", value: 6 }
    ];

    const barHeight = svgHeight / (skills.length * 1.5);
    const barGap = barHeight / 2;

    skills.forEach((skill, i) => {
        const y = i * (barHeight + barGap);

        // Background bar colour
        const bgBar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        bgBar.setAttribute("x", 0);
        bgBar.setAttribute("y", y);
        bgBar.setAttribute("width", svgWidth);
        bgBar.setAttribute("height", barHeight);
        bgBar.setAttribute("fill", "#ddd");
        svgVis.appendChild(bgBar);

        // Bar colour
        const colorBar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        colorBar.setAttribute("x", 0);
        colorBar.setAttribute("y", y);
        colorBar.setAttribute("width", (skill.value / 10) * (svgWidth / 10) * 10); // scale value to width
        colorBar.setAttribute("height", barHeight);
        colorBar.setAttribute("fill", "#3d5478");
        svgVis.appendChild(colorBar);

        // Bar label
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", svgWidth * 0.95);
        text.setAttribute("y", y + barHeight / 2 + 4);
        text.setAttribute("font-size", barHeight * 0.5);
        text.setAttribute("text-anchor", "end");
        text.setAttribute("fill", "#000");
        text.textContent = `${skill.label} (${skill.value})`;
        svgVis.appendChild(text);
    });

    // Creative SVG Sine Wave
    const width = svgArt.clientWidth;
    const height = 150;
    const waveCount = 3;
    const amplitude = 15;

    for (let w = 0; w < waveCount; w++) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        let d = "";
        for (let x = 0; x <= width; x += 5) {
            const y = height / 2 + Math.sin((x / width) * 2 * Math.PI * (1 + w * 0.5)) * (amplitude + w * 5);
            d += x === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
        }
        path.setAttribute("d", d);
        path.setAttribute("stroke", `hsl(${w * 100}, 70%, 50%)`);
        path.setAttribute("stroke-width", 2);
        path.setAttribute("fill", "none");
        svgArt.appendChild(path);
    }
}

// Draw on load
window.addEventListener('load', drawVisualizations);
// Redraw for responsiveness
window.addEventListener('resize', drawVisualizations);