## HTML

<div class="scene">
  <div class="keyboard">
    <div class="key" id="cmd">https://codepen.io/
      <span class="icon">⌘</span>
      <span class="label">command</span>
    </div>
    <div class="key" id="z">
      <span class="icon">Z</span>
    </div>
  </div>
</div>

## CSS

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c8ccdc;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
}

.scene {
  display: flex;
  align-items: center;
  justify-content: center;
}

.keyboard {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background: #dcdde8;
  border-radius: 22px;
  padding: 18px;

  /* The keyboard body depth */
  box-shadow:
    0 2px 0px 0px #b8b9cc inset,
    0 -3px 0px 0px #f2f2f8 inset,
    2px 0 0px 0px #c8c9d8 inset,
    -2px 0 0px 0px #c8c9d8 inset,
    0 8px 0px 0px #a8a9bc,
    0 9px 3px 0px rgba(0,0,0,0.18),
    0 14px 28px 0px rgba(0,0,0,0.14);
}

.key {
  position: relative;
  width: 130px;
  height: 130px;
  background: #f0f0f2;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 12px 14px;
  cursor: pointer;
  user-select: none;
  overflow: hidden;

  box-shadow:
    0 1px 0px 0px #ffffff inset,
    0 -1px 0px 0px #c8c8cc inset,
    1px 0 0px 0px #e0e0e4 inset,
    -1px 0 0px 0px #e0e0e4 inset,
    0 5px 0px 0px #b2b2be,
    0 6px 2px 0px rgba(0,0,0,0.14),
    0 8px 14px 0px rgba(0,0,0,0.10);

  transition: transform 0.07s ease, box-shadow 0.07s ease, background 0.07s ease;
}

.key:active,
.key.pressed {
  background: #e8e8ea;
  transform: translateY(4px);
  box-shadow:
    0 1px 0px 0px #ffffff inset,
    0 -1px 0px 0px #c0c0c4 inset,
    1px 0 0px 0px #d8d8dc inset,
    -1px 0 0px 0px #d8d8dc inset,
    0 1px 0px 0px #b2b2be,
    0 2px 3px 0px rgba(0,0,0,0.10);
}

.key .icon {
  align-self: flex-start;
  font-size: 28px;
  color: #a8a8b0;
  line-height: 1;
  font-weight: 300;
}

#z {
  align-items: center;
  justify-content: center;
}

#z .icon {
  align-self: center;
  font-size: 44px;
  color: #a8a8b0;
  font-weight: 300;
  letter-spacing: -1px;
}

.key .label {
  font-size: 13px;
  color: #a8a8b0;
  font-weight: 400;
  letter-spacing: 0.01em;
  align-self: flex-end;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(0,0,0,0.06);
  transform: scale(0);
  animation: ripple 0.4s ease-out forwards;
  pointer-events: none;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

# JS
document.querySelectorAll(".key").forEach((key) => {
   key.addEventListener("pointerdown", function (e) {
      this.classList.add("pressed");

      const rect = this.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.classList.add("ripple");
      ripple.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${e.clientX - rect.left - size / 2}px;
      top: ${e.clientY - rect.top - size / 2}px;
    `;
      this.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
   });

   key.addEventListener("pointerup", function () {
      this.classList.remove("pressed");
   });

   key.addEventListener("pointerleave", function () {
      this.classList.remove("pressed");
   });
});

window.addEventListener("keydown", (e) => {
   if (e.key === "Meta" || e.key === "Control") {
      document.getElementById("cmd").classList.add("pressed");
   }
   if (e.key === "z" || e.key === "Z") {
      document.getElementById("z").classList.add("pressed");
   }
});

window.addEventListener("keyup", (e) => {
   if (e.key === "Meta" || e.key === "Control") {
      document.getElementById("cmd").classList.remove("pressed");
   }
   if (e.key === "z" || e.key === "Z") {
      document.getElementById("z").classList.remove("pressed");
   }
});
