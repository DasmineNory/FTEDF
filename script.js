// Initialize the application
window.onload = function() {
    console.log("XEREBRO AI Initialized");
    setupSplineViewer();
    setupTerminalInteractions();
};

// Setup the spline viewer functionality
function setupSplineViewer() {
    const viewer = document.querySelector('spline-viewer');
    if (viewer) {
        console.log("Spline Viewer loaded.");
        // Additional Spline Viewer configurations can go here
    } else {
        console.warn("Spline Viewer element not found.");
    }
}

// Setup terminal interactions
function setupTerminalInteractions() {
    const terminal = document.querySelector('.retro-terminal');
    if (terminal) {
        console.log("Retro terminal ready.");

        terminal.addEventListener('click', () => {
            alert("Welcome to the XEREBRO Terminal!");
        });
    } else {
        console.warn("Retro terminal element not found.");
    }
}

// Future feature placeholders
function handleAudioPlayback() {
    console.log("Audio playback functionality placeholder.");
}

function integrateWebGL() {
    console.log("WebGL integration placeholder.");
}
