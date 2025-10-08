document.addEventListener("DOMContentLoaded", () => {
  // Lisää vuosiluku footerissa
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Jos ollaan menu-sivulla
  if (document.getElementById("juomat")) {
    fetch("menu.json")
      .then(res => res.json())
      .then(data => {
        renderMenu("juomat", data.juomat);
        renderMenu("lounas", data.lounas);
        renderMenu("purtava", data.purtava);
      })
      .catch(err => console.error("Virhe menu.jsonin latauksessa:", err));
  }

  // Näyttää menut
  function renderMenu(sectionId, items) {
    const container = document.getElementById(sectionId);
    container.innerHTML = "";
    items.forEach(item => {
      container.innerHTML += `
        <div class="col-md-4 col-sm-6 mb-4">
          <div class="menu-card h-100">
            <h5>${item.nimi}</h5>
            <p class="text-muted small mb-1">${item.kuvaus}</p>
            <p class="fw-semibold">${item.hinta}</p>
          </div>
        </div>`;
    });
  }
});
