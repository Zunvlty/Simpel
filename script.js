// script.js - VERSION TANPA FIREBASE

// DOM Elements
const carsContainer = document.getElementById('cars-container');
const recommendedCarsContainer = document.getElementById('recommended-cars');
const filterButtons = document.querySelectorAll('.filter-btn');
const carSelect = document.getElementById('car-select');
const vehicleType = document.getElementById('vehicle-type');
const pickupDate = document.getElementById('pickup-date');
const returnDate = document.getElementById('return-date');
const calculatePriceBtn = document.getElementById('calculate-price');
const priceResult = document.getElementById('price-result');
const confirmBookingBtn = document.getElementById('confirm-booking');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialDots = document.querySelectorAll('.dot');
const contactForm = document.getElementById('contactForm');
const reviewForm = document.getElementById('reviewForm');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const customerName = document.getElementById('customer-name');
const customerPhone = document.getElementById('customer-phone');
const rentalDays = document.getElementById('rental-days');
const pickupLocation = document.getElementById('pickup-location');
const promoCode = document.getElementById('promo-code');
const applyPromoBtn = document.getElementById('apply-promo');
const promoMessage = document.getElementById('promo-message');
const themeSwitch = document.getElementById('theme-switch');
const scrollToTopBtn = document.getElementById('scrollToTop');
const reviewVehicle = document.getElementById('review-vehicle');
const reviewStars = document.querySelectorAll('.stars i');

// State variables
let currentPromo = null;
let currentDiscount = 0;
let selectedRating = 0;

// Data mobil sport dengan 10 unit untuk setiap kategori
const carsData = [
    // Family Cars (10 mobil)
    {
        id: 1,
        name: "Bmw x5",
        type: "family",
        image: "BMW X5.jpeg",
        specs: {
            engine: "3.0L Twin-Turbo",
            power: "379 HP",
            transmission: "8-Speed PDK",
            seats: "4"
        },
        price: 700000,
        available: 10,
        featured: true
    },
    {
        id: 2,
        name: "Daihatsu Sigra",
        type: "family",
        image: "DAIHATSU SIGRA 1.jpeg",
        specs: {
            engine: "4.4L V8 Twin-Turbo",
            power: "617 HP",
            transmission: "8-Speed Automatic",
            seats: "4"
        },
        price: 450000,
        available: 10,
        featured: false
    },
    {
        id: 3,
        name: "Honda BR-V",
        type: "family",
        image: "HONDA BR-V.jpeg",
        specs: {
            engine: "8-Speed Automatic",
            power: "565 HP",
            transmission: "6-Speed Dual-Clutch",
            seats: "4"
        },
        price: 355000,
        available: 10,
        featured: false
    },
    {
        id: 4,
        name: "Honda Freed",
        type: "family",
        image: "HONDA FREED.jpeg",
        specs: {
            engine: "4.0L V8 Twin-Turbo",
            power: "591 HP",
            transmission: "8-Speed Tiptronic",
            seats: "5"
        },
        price: 450000,
        available: 10,
        featured: true
    },
    {
        id: 5,
        name: "Hyundai Creta",
        type: "family",
        image: "HYUNDAI CRETA.jpeg",
        specs: {
            engine: "4.0L V8 Biturbo",
            power: "630 HP",
            transmission: "9-Speed AMG Speedshift",
            seats: "5"
        },
        price: 450000,
        available: 10,
        featured: true
    },
    {
        id: 6,
        name: "Isuzu Panther",
        type: "family",
        image: "ISUZU PANTHER TOURING.jpeg",
        specs: {
            engine: "4.0L V8 Twin-Turbo",
            power: "620 HP",
            transmission: "8-Speed PDK",
            seats: "4"
        },
        price: 490000,
        available: 10,
        featured: false
    },
    {
        id: 7,
        name: "Kia Carnival",
        type: "family",
        image: "KIA CARNIVAL.jpeg",
        specs: {
            engine: "4.4L V8 Twin-Turbo",
            power: "617 HP",
            transmission: "8-Speed M Steptronic",
            seats: "5"
        },
        price: 490000,
        available: 10,
        featured: false
    },
    {
        id: 8,
        name: "Lexus Lm 350",
        type: "family",
        image: "LEXUS LM 350.jpeg",
        specs: {
            engine: "4.0L V8 Twin-Turbo",
            power: "591 HP",
            transmission: "8-Speed Tiptronic",
            seats: "5"
        },
        price: 350000,
        available: 10,
        featured: true
    },
    {
        id: 9,
        name: "Mazda Biante",
        type: "family",
        image: "MAZDA BIANTE.jpeg",
        specs: {
            engine: "4.0L V8 Biturbo",
            power: "603 HP",
            transmission: "9-Speed AMG Speedshift",
            seats: "5"
        },
        price: 460000,
        available: 10,
        featured: false
    },
    {
        id: 10,
        name: "Mazda Cx",
        type: "family",
        image: "MAZDA CX-5.jpeg",
        specs: {
            engine: "5.0L V8",
            power: "471 HP",
            transmission: "10-Speed Automatic",
            seats: "4"
        },
        price: 450000,
        available: 10,
        featured: false
    },

    // Travel Cars (10 mobil)
    {
        id: 11,
        name: "DAIHATSU LUXIO",
        type: "travel",
        image: "DAIHATSU LUXIO (1).jpeg",
        specs: {
            engine: "3.9L V8 Twin-Turbo",
            power: "661 HP",
            transmission: "7-Speed Dual-Clutch",
            seats: "2"
        },
        price: 600000,
        available: 10,
        featured: true
    },
    {
        id: 12,
        name: "DAIHATSU XENIA",
        type: "travel",
        image: "DAIHATSU XENIA-1.jpg",
        specs: {
            engine: "5.2L V10",
            power: "562 HP",
            transmission: "7-Speed Dual-Clutch",
            seats: "2"
        },
        price: 590000,
        available: 10,
        featured: false
    },
    {
        id: 13,
        name: "HONDA MOBILIO",
        type: "travel",
        image: "HONDA MOBILIO.jpg",
        specs: {
            engine: "4.0L V8 Biturbo",
            power: "523 HP",
            transmission: "7-Speed Dual-Clutch",
            seats: "2"
        },
        price: 400000,
        available: 10,
        featured: true
    },
    {
        id: 14,
        name: "INNOVA REBORN",
        type: "travel",
        image: "INNOVA REBORN.jpeg",
        specs: {
            engine: "5.2L V12 Twin-Turbo",
            power: "630 HP",
            transmission: "8-Speed Automatic",
            seats: "4"
        },
        price: 480000,
        available: 10,
        featured: true
    },
    {
        id: 15,
        name: "ISUZU ELF LONG",
        type: "travel",
        image: "ISUZU ELF LONG.jpeg",
        specs: {
            engine: "4.0L Flat-6",
            power: "394 HP",
            transmission: "6-Speed Manual",
            seats: "2"
        },
        price: 900000,
        available: 10,
        featured: false
    },
    {
        id: 16,
        name: "ISUZU ELF SHORT",
        type: "travel",
        image: "ISUZU ELF SHORT.jpg",
        specs: {
            engine: "3.0L Inline-6 Turbo",
            power: "382 HP",
            transmission: "8-Speed Automatic",
            seats: "2"
        },
        price: 600000,
        available: 10,
        featured: false
    },
    {
        id: 17,
        name: "MITSUBISHI",
        type: "travel",
        image: "MITSUBISHI L300.jpeg",
        specs: {
            engine: "5.0L V8 Supercharged",
            power: "575 HP",
            transmission: "8-Speed Automatic",
            seats: "2"
        },
        price: 340000,
        available: 10,
        featured: true
    },
    {
        id: 18,
        name: "NISSAN SERENA",
        type: "travel",
        image: "NISSAN SERENA.jpeg",
        specs: {
            engine: "6.2L V8",
            power: "495 HP",
            transmission: "8-Speed Dual-Clutch",
            seats: "2"
        },
        price: 490000,
        available: 10,
        featured: false
    },
    {
        id: 19,
        name: "SUZUKI APV",
        type: "travel",
        image: "SUZUKI APV.jpg",
        specs: {
            engine: "3.8L V8 Twin-Turbo",
            power: "562 HP",
            transmission: "7-Speed Dual-Clutch",
            seats: "2"
        },
        price: 420000,
        available: 10,
        featured: true
    },
    {
        id: 20,
        name: "SUZUKI ERTIGA",
        type: "travel",
        image: "SUZUKI ERTIGA.jpeg",
        specs: {
            engine: "5.2L V10",
            power: "602 HP",
            transmission: "7-Speed Dual-Clutch",
            seats: "2"
        },
        price: 520000,
        available: 10,
        featured: true
    },

    // Supercar (10 mobil)
    {
        id: 21,
        name: "Lamborghini Huracan",
        type: "supercar",
        image: "LAMBORGHINI HURACAN.jpeg",
        specs: {
            engine: "5.2L V10",
            power: "602 HP",
            transmission: "7-Speed Dual-Clutch",
            seats: "2"
        },
        price: 1950000,
        available: 10,
        featured: true
    },
    {
        id: 22,
        name: "Astron Martin",
        type: "supercar",
        image: "ASTON MARTIN DB11.jpeg",
        specs: {
            engine: "4.0L V8 Twin-Turbo",
            power: "710 HP",
            transmission: "7-Speed Dual-Clutch",
            seats: "2"
        },
        price: 1250000,
        available: 10,
        featured: true
    },
    {
        id: 23,
        name: "Audi R8 V10",
        type: "supercar",
        image: "AUDI R8 V10.jpg",
        specs: {
            engine: "3.9L V8 Twin-Turbo",
            power: "710 HP",
            transmission: "7-Speed Dual-Clutch",
            seats: "2"
        },
        price: 900000,
        available: 10,
        featured: true
    },
    {
        id: 24,
        name: "Lamborghini Aventador",
        type: "supercar",
        image: "LAMBORGHINI AVENTADOR.jpeg",
        specs: {
            engine: "6.5L V12",
            power: "730 HP",
            transmission: "7-Speed ISR",
            seats: "2"
        },
        price: 1900000,
        available: 10,
        featured: true
    },
    {
        id: 25,
        name: "Bmw I8",
        type: "supercar",
        image: "BMW i8.jpeg",
        specs: {
            engine: "8.0L Quad-Turbo W16",
            power: "1500 HP",
            transmission: "7-Speed Dual-Clutch",
            seats: "2"
        },
        price: 1200000,
        available: 10,
        featured: true
    },
    {
        id: 26,
        name: "Chevrolet Corvette",
        type: "supercar",
        image: "CHEVROLET CORVETTE.jpeg",
        specs: {
            engine: "5.0L Twin-Turbo V8",
            power: "1280 HP",
            transmission: "9-Speed Multi-Clutch",
            seats: "2"
        },
        price: 1400000,
        available: 10,
        featured: true
    },
    {
        id: 27,
        name: "Nissan GTR R35",
        type: "supercar",
        image: "NISSAN GTR R35.jpg",
        specs: {
            engine: "6.0L Twin-Turbo V12",
            power: "730 HP",
            transmission: "7-Speed Sequential",
            seats: "2"
        },
        price: 1250000,
        available: 10,
        featured: true
    },
    {
        id: 28,
        name: "McLaren 570s",
        type: "supercar",
        image: "MCLAREN 570S.jpeg",
        specs: {
            engine: "6.5L V12 Hybrid",
            power: "1160 HP",
            transmission: "7-Speed Sequential",
            seats: "2"
        },
        price: 1500000,
        available: 10,
        featured: true
    },
    {
        id: 29,
        name: "Ferrari 488",
        type: "supercar",
        image: "FERARRI 488 GTB.jpg",
        specs: {
            engine: "3.8L V8 Twin-Turbo Hybrid",
            power: "903 HP",
            transmission: "7-Speed Dual-Clutch",
            seats: "2"
        },
        price: 1700000,
        available: 10,
        featured: true
    },
    {
        id: 30,
        name: "Porshe 911",
        type: "supercar",
        image: "PORSHE 911.jpeg",
        specs: {
            engine: "6.3L V12 Hybrid",
            power: "950 HP",
            transmission: "7-Speed Dual-Clutch",
            seats: "2"
        },
        price: 1750000,
        available: 10,
        featured: true
    }
];

// Data promo dan diskon
const promoCodes = {
    "WEEKEND20": { discount: 20, validUntil: "2025-12-31", type: "percentage" },
    "NEWUSER15": { discount: 15, validUntil: "2025-11-30", type: "percentage" },
    "LONGTERM25": { discount: 25, validUntil: "2025-12-31", type: "percentage" },
    "WELCOME10": { discount: 10, validUntil: "2025-12-31", type: "percentage" }
};

// Data testimoni
let testimonials = [
    {
        id: 1,
        name: "Andi Wijaya",
        location: "Jakarta",
        rating: 5,
        message: "Pengalaman menyewa Porsche 911 sangat memuaskan. Mobil dalam kondisi prima dan prosesnya cepat. Akan sewa lagi!",
        vehicle: "Porsche 911 Carrera",
        date: "2023-10-15",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 2,
        name: "Sarah Putri",
        location: "Bandung",
        rating: 4.5,
        message: "Layanan delivery sangat membantu. Ferrari 488 diantarkan tepat waktu dan sesuai ekspektasi. Recommended!",
        vehicle: "Ferrari 488 Spider",
        date: "2023-10-10",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 3,
        name: "Rizky Pratama",
        location: "Surabaya",
        rating: 5,
        message: "Harga kompetitif dengan kondisi mobil yang sangat baik. Proses booking mudah dan staff sangat membantu.",
        vehicle: "Lamborghini Huracan",
        date: "2023-10-05",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg"
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing website...');
    
    // Set minimum date for pickup to today
    const today = new Date().toISOString().split('T')[0];
    pickupDate.min = today;
    
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Load data
    displayCars(carsData);
    displayRecommendedCars();
    
    // Populate car select dropdown
    populateCarSelect();
    
    // Populate review vehicle dropdown
    populateReviewVehicle();
    
    // Initialize testimonial slider
    initTestimonialSlider();
    
    // Load saved theme
    loadTheme();
    
    // Setup event listeners
    setupEventListeners();
});

// Display cars in the grid
function displayCars(cars) {
    if (!carsContainer) return;
    
    carsContainer.innerHTML = '';
    
    if (cars.length === 0) {
        carsContainer.innerHTML = '<p class="no-cars">Tidak ada mobil yang sesuai dengan filter.</p>';
        return;
    }
    
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.setAttribute('data-type', car.type);
        carCard.setAttribute('data-aos', 'fade-up');
        
        carCard.innerHTML = `
            <div class="car-badge">${car.available} Unit Tersedia</div>
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}" onerror="this.src='https://images.unsplash.com/photo-1503376780353-7e6692767b70'">
            </div>
            <div class="car-details">
                <h3>${car.name}</h3>
                <div class="car-specs">
                    <span><i class="fas fa-tachometer-alt"></i> ${car.specs.power}</span>
                    <span><i class="fas fa-cogs"></i> ${car.specs.transmission}</span>
                    <span><i class="fas fa-user"></i> ${car.specs.seats}</span>
                </div>
                <div class="car-price">
                    <span class="price">Rp ${car.price.toLocaleString('id-ID')}/hari</span>
                    <button class="btn-primary select-car" data-id="${car.id}">Pilih</button>
                </div>
            </div>
        `;
        
        carsContainer.appendChild(carCard);
    });
    
    // Add event listeners to select buttons
    document.querySelectorAll('.select-car').forEach(button => {
        button.addEventListener('click', function() {
            const carId = this.getAttribute('data-id');
            selectCarForBooking(carId);
        });
    });
}

// Display recommended cars
function displayRecommendedCars() {
    if (!recommendedCarsContainer) return;
    
    // Get top 3 most featured cars
    const recommended = carsData
        .filter(car => car.featured)
        .slice(0, 3);
    
    recommendedCarsContainer.innerHTML = '';
    
    recommended.forEach(car => {
        const recommendedCar = document.createElement('div');
        recommendedCar.className = 'recommended-car';
        
        recommendedCar.innerHTML = `
            <h4>${car.name}</h4>
            <p>${car.specs.power} • ${car.specs.seats} Seat</p>
            <div class="price">Rp ${car.price.toLocaleString('id-ID')}/hari</div>
            <small>Rekomendasi</small>
        `;
        
        recommendedCarsContainer.appendChild(recommendedCar);
    });
}

// Populate car select dropdown
function populateCarSelect() {
    if (!carSelect) return;
    
    carSelect.innerHTML = '<option value="">-- Pilih Mobil --</option>';
    
    carsData.forEach(car => {
        const option = document.createElement('option');
        option.value = car.id;
        option.textContent = `${car.name} (${car.available} unit tersedia)`;
        carSelect.appendChild(option);
    });
}

// Populate review vehicle dropdown
function populateReviewVehicle() {
    if (!reviewVehicle) return;
    
    reviewVehicle.innerHTML = '<option value="">-- Pilih Kendaraan --</option>';
    
    carsData.forEach(car => {
        const option = document.createElement('option');
        option.value = car.id;
        option.textContent = car.name;
        reviewVehicle.appendChild(option);
    });
}

// Filter cars by type
function filterCars(type) {
    if (type === 'all') {
        displayCars(carsData);
    } else {
        const filteredCars = carsData.filter(car => car.type === type);
        displayCars(filteredCars);
    }
}

// Select car for booking
function selectCarForBooking(carId) {
    carSelect.value = carId;
    vehicleType.value = 'car';
    
    document.getElementById('booking').scrollIntoView({
        behavior: 'smooth'
    });
}

// Apply promo code
function applyPromoCode() {
    const code = promoCode.value.trim().toUpperCase();
    promoMessage.textContent = '';
    promoMessage.className = 'promo-message';
    
    if (!code) {
        promoMessage.textContent = 'Masukkan kode promo';
        promoMessage.className = 'promo-message error';
        return;
    }
    
    if (promoCodes[code]) {
        const promo = promoCodes[code];
        const today = new Date();
        const validUntil = new Date(promo.validUntil);
        
        if (today <= validUntil) {
            currentPromo = code;
            currentDiscount = promo.discount;
            promoMessage.textContent = `Promo berhasil digunakan! Diskon ${promo.discount}%`;
            promoMessage.className = 'promo-message success';
        } else {
            promoMessage.textContent = 'Kode promo sudah kedaluwarsa';
            promoMessage.className = 'promo-message error';
        }
    } else {
        promoMessage.textContent = 'Kode promo tidak valid';
        promoMessage.className = 'promo-message error';
    }
}

// Calculate rental price
function calculatePrice() {
    const selectedVehicleType = vehicleType.value;
    let selectedCarId, basePrice, vehicleName;
    
    // Validation
    if (!selectedVehicleType) {
        alert('Silakan pilih jenis kendaraan terlebih dahulu.');
        return;
    }
    
    if (selectedVehicleType === 'car') {
        selectedCarId = parseInt(carSelect.value);
        if (!selectedCarId) {
            alert('Silakan pilih mobil terlebih dahulu.');
            return;
        }
        
        const selectedCar = carsData.find(car => car.id === selectedCarId);
        if (!selectedCar) {
            alert('Mobil tidak ditemukan.');
            return;
        }
        basePrice = selectedCar.price;
        vehicleName = selectedCar.name;
    } else {
        // Bus prices
        const busPrices = {
            'bus-small': 1200000,
            'bus-medium': 1800000,
            'bus-large': 2500000,
            'bus-sleeper': 4000000
        };
        
        const busNames = {
            'bus-small': 'Bus Kecil (15-20 Seat)',
            'bus-medium': 'Bus Medium (25-30 Seat)',
            'bus-large': 'Bus Besar (40-45 Seat)',
            'bus-sleeper': 'Sleeper Bus VVIP'
        };
        
        basePrice = busPrices[selectedVehicleType];
        vehicleName = busNames[selectedVehicleType];
    }
    
    if (!customerName.value) {
        alert('Silakan masukkan nama lengkap.');
        return;
    }
    
    if (!customerPhone.value) {
        alert('Silakan masukkan nomor WhatsApp.');
        return;
    }
    
    const days = parseInt(rentalDays.value) || 1;
    if (days < 1) {
        alert('Lama sewa minimal 1 hari.');
        return;
    }
    
    // Calculate total price
    let totalPrice = basePrice * days;
    let discountAmount = 0;
    
    if (currentPromo) {
        discountAmount = (totalPrice * currentDiscount) / 100;
        totalPrice -= discountAmount;
    }
    
    // Display result
    priceResult.innerHTML = `
        <h3>Rincian Booking</h3>
        <p>Kendaraan: <strong>${vehicleName}</strong></p>
        <p>Lama Sewa: <strong>${days} hari</strong></p>
        <p>Lokasi Pengambilan: <strong>${getLocationName(pickupLocation.value)}</strong></p>
        <p>Harga per hari: <strong>Rp ${basePrice.toLocaleString('id-ID')}</strong></p>
        ${currentPromo ? `
            <p class="discount-price">Diskon ${currentDiscount}%: -Rp ${discountAmount.toLocaleString('id-ID')}</p>
            <p>Kode Promo: <strong>${currentPromo}</strong></p>
        ` : ''}
        <p class="total-price">Total: <strong>Rp ${totalPrice.toLocaleString('id-ID')}</strong></p>
    `;
    
    priceResult.style.display = 'block';
    confirmBookingBtn.disabled = false;
}

// Get location name from value
function getLocationName(locationValue) {
    const locations = {
        'jakarta': 'Jakarta',
        'bandung': 'Bandung',
        'bogor': 'Bogor',
        'depok': 'Depok',
        'bekasi': 'Bekasi',
        'semarang': 'Semarang',
        'solo': 'Solo',
        'yogyakarta': 'Yogyakarta',
        'magelang': 'Magelang',
        'pekalongan': 'Pekalongan',
        'surabaya': 'Surabaya',
        'malang': 'Malang',
        'sidoarjo': 'Sidoarjo',
        'kediri': 'Kediri',
        'jember': 'Jember',
        'bali': 'Bali',
        'lombok': 'Lombok',
        'medan': 'Medan',
        'palembang': 'Palembang',
        'makassar': 'Makassar'
    };
    
    return locations[locationValue] || locationValue;
}

// Send booking to WhatsApp
function sendWhatsAppBooking() {
    const selectedVehicleType = vehicleType.value;
    let selectedCarId, basePrice, vehicleName;
    
    if (selectedVehicleType === 'car') {
        selectedCarId = carSelect.value;
        if (!selectedCarId) {
            alert('Silakan pilih mobil terlebih dahulu.');
            return;
        }
        
        const selectedCar = carsData.find(car => car.id === parseInt(selectedCarId));
        if (!selectedCar) {
            alert('Mobil tidak ditemukan.');
            return;
        }
        vehicleName = selectedCar.name;
        basePrice = selectedCar.price;
    } else {
        // Handle bus booking
        const busPrices = {
            'bus-small': 1200000,
            'bus-medium': 1800000,
            'bus-large': 2500000,
            'bus-sleeper': 4000000
        };
        
        const busNames = {
            'bus-small': 'Bus Kecil (15-20 Seat)',
            'bus-medium': 'Bus Medium (25-30 Seat)',
            'bus-large': 'Bus Besar (40-45 Seat)',
            'bus-sleeper': 'Sleeper Bus VVIP'
        };
        
        basePrice = busPrices[selectedVehicleType];
        vehicleName = busNames[selectedVehicleType];
        selectedCarId = selectedVehicleType;
    }
    
    if (!customerName.value) {
        alert('Silakan masukkan nama lengkap.');
        return;
    }
    
    if (!customerPhone.value) {
        alert('Silakan masukkan nomor WhatsApp.');
        return;
    }
    
    const days = parseInt(rentalDays.value) || 1;
    if (days < 1) {
        alert('Lama sewa minimal 1 hari.');
        return;
    }
    
    // Calculate total price
    let totalPrice = basePrice * days;
    let discountAmount = 0;
    
    if (currentPromo) {
        discountAmount = (totalPrice * currentDiscount) / 100;
        totalPrice -= discountAmount;
    }
    
    // Create booking data
    const bookingData = {
        customerName: customerName.value,
        customerPhone: customerPhone.value,
        carName: vehicleName,
        carId: selectedCarId,
        pickupDate: pickupDate.value,
        returnDate: returnDate.value,
        pickupLocation: pickupLocation.value,
        totalPrice: totalPrice,
        days: days,
        promoCode: currentPromo || '',
        discount: currentDiscount || 0,
        vehicleType: selectedVehicleType
    };
    
    // Show loading state
    confirmBookingBtn.disabled = true;
    confirmBookingBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';
    
    // Kirim WhatsApp
    sendWhatsAppDirect(bookingData, totalPrice);
    
    // Reset button state
    confirmBookingBtn.disabled = false;
    confirmBookingBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Booking via WhatsApp';
}

// WhatsApp function
function sendWhatsAppDirect(bookingData, totalPrice) {
    const message = `Halo LowRen Car's, saya ingin booking kendaraan:

Kendaraan: ${bookingData.carName}
Lama Sewa: ${bookingData.days} hari
Lokasi Pengambilan: ${getLocationName(bookingData.pickupLocation)}
Nama: ${bookingData.customerName}
Telepon: ${bookingData.customerPhone}
${bookingData.promoCode ? `Kode Promo: ${bookingData.promoCode} (Diskon ${bookingData.discount}%)` : ''}
Total Harga: Rp ${totalPrice.toLocaleString('id-ID')}

Apakah kendaraan tersedia untuk tanggal tersebut?`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6285136236798?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    alert('Booking berhasil! Silakan konfirmasi via WhatsApp.');
    resetBookingForm();
}

// Reset booking form
function resetBookingForm() {
    vehicleType.value = '';
    carSelect.value = '';
    pickupDate.value = '';
    returnDate.value = '';
    customerName.value = '';
    customerPhone.value = '';
    rentalDays.value = '1';
    pickupLocation.value = 'jakarta';
    promoCode.value = '';
    currentPromo = null;
    currentDiscount = 0;
    promoMessage.textContent = '';
    priceResult.style.display = 'none';
    confirmBookingBtn.disabled = true;
}

// Submit review
function submitReview(e) {
    e.preventDefault();
    
    const name = document.getElementById('review-name').value;
    const email = document.getElementById('review-email').value;
    const vehicleId = reviewVehicle.value;
    const message = document.getElementById('review-message').value;
    
    if (!name || !email || !vehicleId || !selectedRating || !message) {
        alert('Harap lengkapi semua field dan berikan rating.');
        return;
    }
    
    const vehicle = carsData.find(car => car.id === parseInt(vehicleId));
    
    alert('Terima kasih atas review Anda! (Mode demo)');
    reviewForm.reset();
    resetStarRating();
}

// ==================== FUNGSI YANG TETAP SAMA ====================

// Testimonial slider
function initTestimonialSlider() {
    let currentTestimonial = 0;
    
    // Auto rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Dot click events
    testimonialDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showTestimonial(index);
        });
    });
}

function showTestimonial(index) {
    // Hide all testimonials
    testimonialCards.forEach(card => {
        card.classList.remove('active');
    });
    
    // Remove active class from all dots
    testimonialDots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show selected testimonial
    testimonialCards[index].classList.add('active');
    testimonialDots[index].classList.add('active');
}

// Star rating functionality
function setupStarRating() {
    reviewStars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            selectedRating = rating;
            
            reviewStars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas', 'active');
                } else {
                    s.classList.remove('fas', 'active');
                    s.classList.add('far');
                }
            });
        });
        
        star.addEventListener('mouseover', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            
            reviewStars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        });
    });
    
    // Reset stars on mouse leave
    document.querySelector('.stars').addEventListener('mouseleave', function() {
        if (selectedRating === 0) {
            resetStarRating();
        } else {
            reviewStars.forEach((s, index) => {
                if (index < selectedRating) {
                    s.classList.remove('far');
                    s.classList.add('fas', 'active');
                } else {
                    s.classList.remove('fas', 'active');
                    s.classList.add('far');
                }
            });
        }
    });
}

function resetStarRating() {
    reviewStars.forEach(star => {
        star.classList.remove('fas', 'active');
        star.classList.add('far');
    });
    selectedRating = 0;
}

// Theme functionality
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.className = savedTheme;
    if (themeSwitch) {
        themeSwitch.checked = savedTheme === 'dark-mode';
    }
}

function toggleTheme() {
    if (themeSwitch.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
}

// Scroll to top functionality
function handleScroll() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Copy promo code
function copyPromoCode(code) {
    navigator.clipboard.writeText(code).then(() => {
