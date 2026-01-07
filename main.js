function filterPrice() {
  let value = document.getElementById("priceFilter").value;
  let cards = document.querySelectorAll(".property-card");

  cards.forEach(card => {
    let price = card.getAttribute("data-price");

    if (value === "under10" && price > 10000000000) {
      card.style.display = "none";
    } else if (value === "above10" && price <= 10000000000) {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
  });
}
