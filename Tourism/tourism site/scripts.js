// Trip Planner - Handle form submission and display summary
document.getElementById('tripForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const people = document.getElementById('people').value;
    const preferences = document.getElementById('preferences').value;

    // Generate summary
    const summary = `
      <h3>Your Trip Plan:</h3>
      <p><strong>Destination:</strong> ${destination}</p>
      <p><strong>Dates:</strong> ${startDate} to ${endDate}</p>
      <p><strong>Number of People:</strong> ${people}</p>
      <p><strong>Preferences:</strong> ${preferences}</p>
    `;

    // Display summary
    document.getElementById('trip-summary').innerHTML = summary;
});

// Initialize the map and set the view to India's coordinates
var map = L.map('india-map').setView([20.5937, 78.9629], 5);

// Add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers for 30 popular destinations in India

// Taj Mahal - Agra
var tajMahal = L.marker([27.1751, 78.0421]).addTo(map);
tajMahal.bindPopup("<b>Taj Mahal</b><br>The iconic symbol of love, located in Agra.");

// Goa
var goa = L.marker([15.2993, 74.1240]).addTo(map);
goa.bindPopup("<b>Goa</b><br>Famous for its beautiful beaches and vibrant nightlife.");

// Himalayas
var himalayas = L.marker([28.5983, 83.9311]).addTo(map);
himalayas.bindPopup("<b>Himalayas</b><br>The majestic mountain range for adventure seekers.");

// Jaipur - Rajasthan
var jaipur = L.marker([26.9124, 75.7873]).addTo(map);
jaipur.bindPopup("<b>Jaipur</b><br>The Pink City, famous for its palaces and forts.");

// Kerala Backwaters - Alappuzha
var keralaBackwaters = L.marker([9.4981, 76.3388]).addTo(map);
keralaBackwaters.bindPopup("<b>Kerala Backwaters</b><br>Explore the serene backwaters of Kerala.");

// Mumbai
var mumbai = L.marker([19.0760, 72.8777]).addTo(map);
mumbai.bindPopup("<b>Mumbai</b><br>The city that never sleeps. Famous for Bollywood and the Gateway of India.");

// Varanasi - Uttar Pradesh
var varanasi = L.marker([25.3176, 82.9739]).addTo(map);
varanasi.bindPopup("<b>Varanasi</b><br>The spiritual capital of India, on the banks of the Ganges River.");

// Rishikesh - Uttarakhand
var rishikesh = L.marker([30.0869, 78.2676]).addTo(map);
rishikesh.bindPopup("<b>Rishikesh</b><br>The Yoga capital of the world, known for its spiritual retreats.");

// Udaipur - Rajasthan
var udaipur = L.marker([24.5854, 73.7125]).addTo(map);
udaipur.bindPopup("<b>Udaipur</b><br>The City of Lakes, known for its beautiful palaces and serene lakes.");

// Jaisalmer - Rajasthan
var jaisalmer = L.marker([26.9157, 70.9083]).addTo(map);
jaisalmer.bindPopup("<b>Jaisalmer</b><br>The Golden City, famous for its forts and desert safaris.");

// Rann of Kutch - Gujarat
var rannOfKutch = L.marker([23.7330, 70.2817]).addTo(map);
rannOfKutch.bindPopup("<b>Rann of Kutch</b><br>White salt desert that stretches as far as the eye can see.");

// Leh - Ladakh
var leh = L.marker([34.1526, 77.5770]).addTo(map);
leh.bindPopup("<b>Leh</b><br>Adventure capital of Ladakh, known for its monasteries and rugged terrain.");

// Shimla - Himachal Pradesh
var shimla = L.marker([31.1048, 77.1734]).addTo(map);
shimla.bindPopup("<b>Shimla</b><br>A popular hill station known for its colonial architecture and scenic views.");

// Darjeeling - West Bengal
var darjeeling = L.marker([27.0360, 88.2627]).addTo(map);
darjeeling.bindPopup("<b>Darjeeling</b><br>Famous for its tea gardens and views of the Kanchenjunga mountain.");

// Kolkata - West Bengal
var kolkata = L.marker([22.5726, 88.3639]).addTo(map);
kolkata.bindPopup("<b>Kolkata</b><br>The cultural capital of India, known for its literature, arts, and history.");

// Khajuraho - Madhya Pradesh
var khajuraho = L.marker([24.8318, 79.9199]).addTo(map);
khajuraho.bindPopup("<b>Khajuraho</b><br>Famous for its stunning temples with intricate erotic carvings.");

// Mysore - Karnataka
var mysore = L.marker([12.2958, 76.6394]).addTo(map);
mysore.bindPopup("<b>Mysore</b><br>Known for its royal heritage and the magnificent Mysore Palace.");

// Hampi - Karnataka
var hampi = L.marker([15.3350, 76.4600]).addTo(map);
hampi.bindPopup("<b>Hampi</b><br>An ancient village known for its ruins of Hindu temples and palaces.");

// Amritsar - Punjab
var amritsar = L.marker([31.6340, 74.8723]).addTo(map);
amritsar.bindPopup("<b>Amritsar</b><br>Home to the Golden Temple, the spiritual and cultural center for Sikhs.");

// Chandigarh
var chandigarh = L.marker([30.7333, 76.7794]).addTo(map);
chandigarh.bindPopup("<b>Chandigarh</b><br>India's first planned city, known for its architecture and gardens.");

// Srinagar - Jammu and Kashmir
var srinagar = L.marker([34.0837, 74.7973]).addTo(map);
srinagar.bindPopup("<b>Srinagar</b><br>Famous for its houseboats, lakes, and gardens.");

// Pondicherry
var pondicherry = L.marker([11.9416, 79.8083]).addTo(map);
pondicherry.bindPopup("<b>Pondicherry</b><br>Former French colony known for its beaches and colonial architecture.");

// Auroville - Tamil Nadu
var auroville = L.marker([12.0065, 79.8101]).addTo(map);
auroville.bindPopup("<b>Auroville</b><br>An experimental township focused on unity, peace, and sustainable living.");

// Mahabalipuram - Tamil Nadu
var mahabalipuram = L.marker([12.6269, 80.1920]).addTo(map);
mahabalipuram.bindPopup("<b>Mahabalipuram</b><br>Famous for its rock-cut temples and sculptures.");

// Sunderbans - West Bengal
var sunderbans = L.marker([21.9497, 89.1833]).addTo(map);
sunderbans.bindPopup("<b>Sunderbans</b><br>The largest tidal halophytic mangrove forest in the world, home to the Royal Bengal Tiger.");

// Andaman and Nicobar Islands
var andaman = L.marker([11.7401, 92.6586]).addTo(map);
andaman.bindPopup("<b>Andaman and Nicobar Islands</b><br>Popular for its tropical beaches and marine life.");

// Lonavala - Maharashtra
var lonavala = L.marker([18.7544, 73.4072]).addTo(map);
lonavala.bindPopup("<b>Lonavala</b><br>A popular hill station known for its lush green valleys and waterfalls.");

// Kodaikanal - Tamil Nadu
var kodaikanal = L.marker([10.2381, 77.4892]).addTo(map);
kodaikanal.bindPopup("<b>Kodaikanal</b><br>Famous for its misty hills and serene lakes.");

// Manali - Himachal Pradesh
var manali = L.marker([32.2396, 77.1887]).addTo(map);
manali.bindPopup("<b>Manali</b><br>A popular hill station known for its adventure sports and scenic beauty.");

// Coorg - Karnataka
var coorg = L.marker([12.4224, 75.7393]).addTo(map);
coorg.bindPopup("<b>Coorg</b><br>A serene hill station known for its coffee plantations and natural beauty.");


function filterExperience(category) {
    var cards = document.getElementsByClassName('experience-card');

    for (var i = 0; i < cards.length; i++) {
        if (category === 'all') {
            cards[i].style.display = 'block';
        } else if (cards[i].classList.contains(category)) {
            cards[i].style.display = 'block';
        } else {
            cards[i].style.display = 'none';
        }
    }
}


function showMore() {
    const moreExperiences = document.getElementById('more-experiences');
    const showMoreBtn = document.getElementById('show-more-btn');

    if (moreExperiences.style.display === 'none') {
        moreExperiences.style.display = 'flex'; // or 'block'
        showMoreBtn.textContent = 'Show Less';
    } else {
        moreExperiences.style.display = 'none';
        showMoreBtn.textContent = 'Show More';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('click', function() {
        this.classList.toggle('flipped');
      });
    });
  });


