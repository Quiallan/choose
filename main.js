//choose.html js
// Function to initialize Navbar Features
function initializeNavbarFeatures() {
  // Rotating quotes
  let quotes = ["Quote 1", "Quote 2", "Quote 3"];
  let currentQuoteIndex = 0;
  let textSliderElement = document.querySelector(".text-slider");

  setInterval(function() {
    textSliderElement.innerHTML = quotes[currentQuoteIndex];
    textSliderElement.style.animation = "none";
    setTimeout(function() {
      textSliderElement.style.animation = "moveUp 1s ease-in-out";
    }, 0);
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  }, 7000);

  // Dark Mode Toggle
  let toggleSwitchElement = document.querySelector(".slider");
  let toggleLabelElement = document.querySelector(".toggle-label");
  let circleElement = document.querySelector(".circle");
  let isDarkMode = false;

  toggleSwitchElement.addEventListener("click", function() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      toggleLabelElement.textContent = "On";
      document.body.style.backgroundColor = "black";
    } else {
      toggleLabelElement.textContent = "Off";
      document.body.style.backgroundColor = "white";
    }
    circleElement.style.left = isDarkMode ? "27.5px" : "2.5px";
  });

  // Scrolling Text
  let scrollingTextElement = document.querySelector(".scrolling-text");
  let textContent = "The Matrix is everywhere, Neo.";
  scrollingTextElement.innerHTML = textContent;

  setInterval(function() {
    let firstChar = textContent.charAt(0);
    let remainingText = textContent.slice(1);
    textContent = remainingText + firstChar;
    scrollingTextElement.innerHTML = textContent;
  }, 200);
}

// Fetch navbar.html and insert its content into the div with id="navbar"
fetch('navbar.html')
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(function(data) {
    document.getElementById('navbar').innerHTML = data;
    initializeNavbarFeatures();
  })
  .catch(function(error) {
    console.error('Fetch error:', error);
  });

// Existing code for choose page features--------------------------------------------------
const doc = document;
const right = doc.querySelector(".screen.right");
const left = doc.querySelector(".screen.left");

left.addEventListener("mouseenter", function() {
  left.style.width = "70%";
  right.style.width = "30%";
  left.style.zIndex = "1";
});

left.addEventListener("mouseleave", function() {
  left.style.width = "50%";
  right.style.width = "50%";
});

right.addEventListener("mouseenter", function() {
  right.style.width = "70%";
  left.style.width = "30%";
  right.style.zIndex = "1";
});

right.addEventListener("mouseleave", function() {
  right.style.width = "50%";
  left.style.width = "50%";
});




// Matrix Rain Background Function
// Matrix Rain Background Function
function matrixRain(canvasId, color) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');

  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  setCanvasSize();
  window.addEventListener('resize', setCanvasSize);

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789@#$%^&*()*&^%";
  const drops = [];

  // Initialize drops based on initial columns
  let initialColumns = canvas.width / 20;
  for (let x = 0; x < initialColumns; x++) {
    drops[x] = 1;
  }

  setInterval(function() {
    let columns = canvas.width / 20;  // Recalculate columns based on new canvas size

    // Update drops array if columns change
    if (columns !== drops.length) {
      for (let x = drops.length; x < columns; x++) {
        drops[x] = 1;
      }
    }

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = color;
    ctx.font = "20px arial";

    for (let i = 0; i < columns; i++) {
      let text = characters.charAt(Math.floor(Math.random() * characters.length));
      ctx.fillText(text, i * 20, drops[i] * 20);

      if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }, 33);
}

// Initialize Matrix rain for left and right sections with respective colors
matrixRain('matrixCanvasLeft', '#0000FF');  // Blue for the left column
matrixRain('matrixCanvasRight', '#FF0000');   // Red for the right column


//pill buttons
document.addEventListener("DOMContentLoaded", function() {
  const bluePill = document.querySelector(".screen.left .pill");
  const redPill = document.querySelector(".screen.right .pill");
  
  function scaleDownPill(pill) {
    pill.style.transform = "translateX(-50%) translateY(-50%) scale(0.95)";
  }

  function scaleUpPill(pill) {
    pill.style.transform = "translateX(-50%) translateY(-50%) scale(1)";
  }

  bluePill.addEventListener("mousedown", function() {
    scaleDownPill(bluePill);
  });

  bluePill.addEventListener("mouseup", function() {
    scaleUpPill(bluePill);
  });

  redPill.addEventListener("mousedown", function() {
    scaleDownPill(redPill);
  });

  redPill.addEventListener("mouseup", function() {
    scaleUpPill(redPill);
  });
});

