# luxury-house-
Website penjualan perumahan!

<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
Luxury Estate | Rumah Mewah 
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<header class="navbar">
  <h1 class="logo">LuxuryEstate</h1>
</header>

<section class="hero">
  <h2>Hunian Mewah & Investasi Premium</h2>
</section>

<section class="filter">
  <label>Filter Harga:</label>
  <select id="priceFilter" onchange="filterPrice()">
    <option value="all">Semua</option>
    <option value="under10">Di bawah 10 M</option>
    <option value="above10">Di atas 10 M</option>
  </select>
</section>

<section class="properties" id="properties">

  <div class="property-card" data-price="8500000000">
    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c">
    <h3>Villa Grand BSD</h3>
    <p class="price">Rp 8,5 M</p>
    <a href="property-1.html" class="btn-small">Detail</a>
  </div>

  <div class="property-card" data-price="15200000000">
    <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be">
    <h3>Pondok Indah Residence</h3>
    <p class="price">Rp 15,2 M</p>
    <a href="property-2.html" class="btn-small">Detail</a>
  </div>

  <div class="property-card" data-price="6750000000">
    <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994">
    <h3>Modern House Sentul</h3>
    <p class="price">Rp 6,75 M</p>
    <a href="property-3.html" class="btn-small">Detail</a>
  </div>

</section>

<script src="assets/js/main.js"></script>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Villa Grand BSD</title>
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<h1>Villa Grand BSD</h1>
<img class="detail-img" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c">

<p class="price">Rp 8.500.000.000</p>
<p>5 Kamar Tidur • Kolam Renang • Smart Home</p>

<h3>Lokasi</h3>
<iframe
src="https://www.google.com/maps?q=BSD+City&t=&z=13&ie=UTF8&iwloc=&output=embed">
</iframe>

<a class="whatsapp"
href="https://wa.me/62895323721707?text=Saya%20tertarik%20Villa%20Grand%20BSD">
💬 Hubungi via WhatsApp
</a>

</body>
</html>
body {
  font-family: Poppins, sans-serif;
  margin: 0;
  background: #f4f4f4;
}

.logo {
  padding: 20px;
  background: #0f172a;
  color: gold;
}

.hero {
  height: 60vh;
  background: linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),
  url('https://images.unsplash.com/photo-1502673530728-f79b4cab31b1') center/cover;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.properties {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 20px;
  padding: 40px;
}

.property-card {
  background: white;
  padding: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,.1);
}

.property-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.price {
  color: gold;
  font-weight: bold;
}

.btn-small {
  background: #0f172a;
  color: white;
  padding: 8px 15px;
  text-decoration: none;
}

.detail-img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

iframe {
  width: 100%;
  height: 300px;
  border: 0;
}

.whatsapp {
  display: inline-block;
  background: #25D366;
  color: white;
  padding: 15px;
  margin-top: 20px;
  text-decoration: none;
}


