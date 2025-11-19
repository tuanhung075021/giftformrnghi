// Small helper: because this file is single-file, we generate items dynamically in template above.
// But when served as plain HTML the template literal will not run. To make the file runnable as-is
// we will detect if the gallery is empty (no children) and fill with placeholders programmatically.

(function () {
  const gallery = document.getElementById("gallery");
  // if (!gallery) return;
  // if (gallery.children.length === 0) {
  //   for (let i = 1; i <= 15; i++) {
  //     const item = document.createElement("div");
  //     item.className = "item";
  //     const btn = document.createElement("button");
  //     btn.className = "frame";
  //     btn.setAttribute("aria-pressed", "false");
  //     btn.setAttribute("data-index", i);
  //     btn.tabIndex = 0;
  //     const img = document.createElement("img");
  //     img.src = `https://picsum.photos/seed/20${i}/600/450`;
  //     img.alt = `Ảnh kỷ niệm ${i}`;
  //     btn.appendChild(img);
  //     item.appendChild(btn);
  //     gallery.appendChild(item);
  //   }
  // }

  // click/keyboard handling
  gallery.addEventListener("click", (e) => {
    const f = e.target.closest(".frame");
    if (!f) return;
    f.classList.toggle("revealed");
    const pressed = f.classList.contains("revealed");
    f.setAttribute("aria-pressed", pressed);
    // small scale animation
    if (pressed) {
      f.style.transform = "translateY(-8px) scale(1.02)";
    } else {
      f.style.transform = "";
    }
  });

  gallery.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const f = e.target.closest(".frame");
      if (!f) return;
      e.preventDefault();
      f.click();
    }
  });

  document.getElementById("hienAll").addEventListener("click", () => {
    document.querySelectorAll(".frame").forEach((f) => {
      f.classList.add("revealed");
      f.setAttribute("aria-pressed", "true");
    });
  });
  document.getElementById("anAll").addEventListener("click", () => {
    document.querySelectorAll(".frame").forEach((f) => {
      f.classList.remove("revealed");
      f.setAttribute("aria-pressed", "false");
    });
  });

  // optional: close others when one opened (uncomment if desired)
  // gallery.addEventListener('click', (e)=>{ const f=e.target.closest('.frame'); if(!f) return; document.querySelectorAll('.frame').forEach(x=>{ if(x!==f) { x.classList.remove('revealed'); x.setAttribute('aria-pressed','false')} }); f.classList.toggle('revealed');});
})();
