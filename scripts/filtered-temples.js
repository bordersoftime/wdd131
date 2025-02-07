// Para la ultima fecha modificada
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;


// Activar o desactivar el menú de navegación haciendo clic en la barra (la hamburguesa)
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function() {
        // Alternar entre agregar o quitar la clase 'mostrar' para mostrar u ocultar la navegación
        navLinks.classList.toggle("show");

        // Cambia el botón de la barra a 'X' cuando el menú está abierto
        if (navLinks.classList.contains("show")) {
            hamburger.innerHTML = "&#10005;"; // 'X' symbol
        } else {
            hamburger.innerHTML = "&#9776;"; // simbolo de la barra (la hamburguesa)
        }
    });
});

// agrega los templos automaticamente
const temples = [
  {
    templeName: "Birmingham Alabama Temple",
    location: "Mount Olive Boulevard, Alabama 35071 United States",
    dedicated: "3 September 2000",
    yearBuilt: 2000, 
    area: 1927,
    imageUrl: "Images/birmingham.jpeg"
  },
  {
    templeName: "Buenos Aires Argentina Temple",
    location: "Aut. Tte. Gral. Riccheri N° 4955 B1778DUA Ciudad Evita Buenos Aires, Argentina",
    dedicated: "17 January 1986",
    yearBuilt: 1986, 
    area: 1778,
    imageUrl: "Images/buenos_aires.jpeg"
  },
  {
    templeName: "Córdoba Argentina Temple",
    location: "Avenida Pedro LaPlace 5647 Cordoba Argentina",
    dedicated: "17 May 2015",
    yearBuilt: 2015, 
    area: 51475, 
    imageUrl: "Images/cordoba.jpeg"
  },
  {
    templeName: "Fortaleza Brazil Temple",
    location: "Av. Santos Dumont, 7771 De Lourdes FORTALEZA",
    dedicated: "2 June 2019",
    yearBuilt: 2019, 
    area: 77415, 
    imageUrl: "Images/fortaleza_temple.jpeg"
  },
  {
    templeName: "Frankfurt Germany Temple",
    location: "Talstraße 10 FRIEDRICHSDORF, Hessen 61381 Germany",
    dedicated: "28 August 1987",
    yearBuilt: 1987, 
    area: 156558,
    imageUrl: "Images/frankfurt_germany_temple_lds.jpeg"
  },
  {
    templeName: "Kirtland Temple",
    location: "Kirtland, Ohio",
    dedicated: "27 March 1836",
    yearBuilt: 1836, 
    area: 9600,
    imageUrl: "Images/kirtland_temple.jpeg"
  },
  {
    templeName: "Provo Utah Temple",
    location: "2200 Temple Hill Dr Provo UT 84604-1775 United States",
    dedicated: "9 February 1972",
    yearBuilt: 1972, 
    area: 116642,
    imageUrl: "Images/provo_city_center_temple_exterior.jpeg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Via di Settebagni 376 Rome RM Italy",
    dedicated: "10 March 2019",
    yearBuilt: 2019, 
    area: 156558,
    imageUrl: "Images/rome_italy_temple.jpeg"
  },
  {
    templeName: "Fort Collins Colorado Temple",
    location: "2180 Majestic Dr Fort Collins CO 80528 United States",
    dedicated: "16 October 2016",
    yearBuilt: 2016, 
    area: 9600,
    imageUrl: "Images/fort_collins_temple_sunset.jpeg"
  },
  {
    templeName: "Houston Texas Temple",
    location: "15725 Champion Forest Dr Klein TX 77379-7036 United States",
    dedicated: "26 August 2000",
    yearBuilt: 2000, 
    area: 116642,
    imageUrl: "Images/houston_temple_lds.jpeg"
  },
  {
    templeName: "Logan Utah Temple",
    location: "175 N 300 E Logan UT 84321-4720 United States",
    dedicated: "17 May 1884",
    yearBuilt: 1884, 
    area: 116642,
    imageUrl: "Images/logan_utah_temple.jpeg"
  }
];




  function createTempleCard(temple) {
    const card = document.createElement("figure");

    const name = document.createElement("figcaption");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

    const dedication = document.createElement("p");
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;

    const img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    // Añadir elementos dentro de la tarjeta
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);

    return card;
}

// Renderizar los templos en la galería
function displayTemples(temples) {
    const templeContainer = document.getElementById('temple-container');
    templeContainer.innerHTML = '';

    temples.forEach(temple => {
        const templeCard = createTempleCard(temple);
        templeContainer.appendChild(templeCard);
    });
}

displayTemples(temples);


// Filter functions
function filterOldTemples() {
  return temples.filter(temple => temple.yearBuilt < 1900);
}

function filterNewTemples() {
  return temples.filter(temple => temple.yearBuilt > 2000);
}

function filterLargeTemples() {
  return temples.filter(temple => temple.size > 90000);
}

function filterSmallTemples() {
  return temples.filter(temple => temple.size < 10000);
}

// para los botones de navegacion (hamburguer)
document.getElementById('old-temples').addEventListener('click', () => {
  displayTemples(filterOldTemples());
});

document.getElementById('new-temples').addEventListener('click', () => {
  displayTemples(filterNewTemples());
});

document.getElementById('large-temples').addEventListener('click', () => {
  displayTemples(filterLargeTemples());
});

document.getElementById('small-temples').addEventListener('click', () => {
  displayTemples(filterSmallTemples());
});

document.getElementById('home').addEventListener('click', () => {
  displayTemples(temples); // Display all temples
});

// Initialize by displaying all temples on page load
document.addEventListener('DOMContentLoaded', () => {
  displayTemples(temples);
});