function showItem() {
    let item = document.getElementById("item");
    let showBtn = document.getElementById("show-btn");
    if (item.style.display === "none") {
      item.style.display = "block";
      showBtn.innerHTML = "Ocultar elemento";
    } else {
      item.style.display = "none";
      showBtn.innerHTML = "Mostrar elemento";
    }
  }


