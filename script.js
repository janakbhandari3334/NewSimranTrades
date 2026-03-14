/**
 * New Simran Traders - Main JS functionality
 * Connects Language Translation, Animations, Checkout, and WhatsApp Integration
 */

// --- Language Data Dictionary ---
const translations = {
    en: {
        nav_home: "Home",
        nav_shop: "Shop",
        nav_about: "About Us",
        nav_contact: "Contact",
        
        hero_title_1: "The Future of Electronics",
        hero_subtitle_1: "Discover premium smartphones, laptops, and home appliances.",
        hero_title_2: "Next-Gen Performance",
        hero_subtitle_2: "Upgrade your workflow with ultimate laptop power.",
        hero_title_3: "Cinematic Audio & Vision",
        hero_subtitle_3: "Immerse yourself in top-tier entertainment.",
        
        btn_shop_now: "Shop Now",
        btn_contact_us: "Contact Us",
        
        promo_title: "Festival Special Discount",
        promo_subtitle: "Up to 30% OFF on selected items!",
        btn_grab_offer: "Grab Offer",
        
        section_products: "Featured Products",
        badge_new: "New",
        view_360: "360° View",
        btn_buy_now: "Buy Now",
        btn_add_cart: '<i class="fas fa-cart-plus"></i>',
        
        store_title: "About New Simran Traders",
        store_desc: "Your trusted destination for premium electronics. We provide authentic products with reliable warranty and unmatched customer service. Experience the latest technology with us.",
        store_location: "Lamki Chuha-1, Kailali, Nepal",
        btn_open_map: "Open in Google Maps",
        
        contact_title: "Send Inquiry",
        input_name: "Full Name",
        input_email: "Email Address",
        input_message: "Your Message",
        btn_send_msg: '<i class="fab fa-whatsapp"></i> Send via WhatsApp',
        
        contact_phone: "Phone",
        contact_whatsapp: "WhatsApp",
        contact_email: "Email",
        follow_us: "Follow Us",
        
        footer_desc: "Premium electronics store offering the best tech gadgets in Nepal. Your reliable partner in modern technology.",
        quick_links: "Quick Links",
        categories: "Categories",
        cat_smartphones: "Smartphones",
        cat_laptops: "Laptops",
        cat_tvs: "Televisions",
        cat_appliances: "Home Appliances",
        footer_design: "Website Designed by Janak Tech Solutions.",
        
        view_360_title: "360° Interactive View",
        view_360_hint: '<i class="fas fa-hand-pointer"></i> Drag to rotate the product',
        
        checkout_title: "Complete Purchase",
        checkout_product: "Product:",
        checkout_price: "Total Price:",
        label_name: "Full Name",
        label_phone: "Phone Number",
        pay_method: "Payment Method",
        pay_cod: "Cash on Delivery",
        pay_now: "Pay Now (QR Code / Bank Transfer)",
        qr_scan: "Scan to pay via eSewa / Khalti / Mobile Banking",
        btn_confirm_order: '<i class="fab fa-whatsapp mr-2"></i> Confirm Order via WhatsApp'
    },
    np: {
        nav_home: "मुख्य पृष्ठ",
        nav_shop: "पसल",
        nav_about: "हाम्रो बारेमा",
        nav_contact: "सम्पर्क",
        
        hero_title_1: "इलेक्ट्रोनिक्सको भविष्य",
        hero_subtitle_1: "प्रिमियम स्मार्टफोन, ल्यापटप, र घरेलु उपकरणहरू खोज्नुहोस्।",
        hero_title_2: "अर्को पुस्ताको प्रदर्शन",
        hero_subtitle_2: "अन्तिम शक्तिको साथ तपाईंको कार्यप्रवाह अपग्रेड गर्नुहोस्।",
        hero_title_3: "सिनेमेटिक अडियो र भिजन",
        hero_subtitle_3: "शीर्ष-स्तरीय मनोरञ्जनमा आफैलाई डुबाउनुहोस्।",
        
        btn_shop_now: "अहिले किन्नुहोस्",
        btn_contact_us: "सम्पर्क गर्नुहोस्",
        
        promo_title: "चाडपर्व विशेष छुट",
        promo_subtitle: "चयनित वस्तुहरूमा ३०% सम्म छुट!",
        btn_grab_offer: "अफर लिनुहोस्",
        
        section_products: "विशेष उत्पादनहरू",
        badge_new: "नयाँ",
        view_360: "३६०° दृश्य",
        btn_buy_now: "अहिले किन्नुहोस्",
        btn_add_cart: '<i class="fas fa-cart-plus"></i>',
        
        store_title: "न्यू सिमरन ट्रेडर्सको बारेमा",
        store_desc: "प्रिमियम इलेक्ट्रोनिक्सको लागि तपाईंको विश्वसनीय गन्तव्य। हामी भरपर्दो वारेन्टी र बेजोड ग्राहक सेवाको साथ प्रामाणिक उत्पादनहरू प्रदान गर्दछौं। हामीसँग नवीनतम प्रविधिको अनुभव लिनुहोस्।",
        store_location: "लम्की चुहा-१, कैलाली, नेपाल",
        btn_open_map: "गुगल म्यापमा खोल्नुहोस्",
        
        contact_title: "सोधपुछ पठाउनुहोस्",
        input_name: "पूरा नाम",
        input_email: "इमेल ठेगाना",
        input_message: "तपाईंको सन्देश",
        btn_send_msg: '<i class="fab fa-whatsapp"></i> ह्वाट्सएप मार्फत पठाउनुहोस्',
        
        contact_phone: "फोन",
        contact_whatsapp: "ह्वाट्सएप",
        contact_email: "इमेल",
        follow_us: "हामीलाई पछ्याउनुहोस्",
        
        footer_desc: "नेपालमा उत्कृष्ट प्राविधिक ग्याजेटहरू प्रदान गर्ने प्रिमियम इलेक्ट्रोनिक्स स्टोर। आधुनिक प्रविधिमा तपाईंको भरपर्दो साझेदार।",
        quick_links: "द्रुत लिङ्कहरू",
        categories: "वर्गहरू",
        cat_smartphones: "स्मार्टफोनहरू",
        cat_laptops: "ल्यापटपहरू",
        cat_tvs: "टेलिभिजनहरू",
        cat_appliances: "घरेलु उपकरणहरू",
        footer_design: "जनक टेक सोलुसन्स द्वारा वेबसाइट डिजाइन।",
        
        view_360_title: "३६०° अन्तर्क्रियात्मक दृश्य",
        view_360_hint: '<i class="fas fa-hand-pointer"></i> उत्पादन घुमाउन तान्नुहोस्',
        
        checkout_title: "खरिद पूरा गर्नुहोस्",
        checkout_product: "उत्पादन:",
        checkout_price: "कुल मूल्य:",
        label_name: "पूरा नाम",
        label_phone: "फोन नम्बर",
        pay_method: "भुक्तानी विधि",
        pay_cod: "डेलिभरीमा नगद",
        pay_now: "अहिले तिर्नुहोस् (QR कोड)",
        qr_scan: "ईसेवा / खल्ती मार्फत भुक्तानी गर्न स्क्यान गर्नुहोस्",
        btn_confirm_order: '<i class="fab fa-whatsapp mr-2"></i> अर्डर पुष्टि गर्नुहोस्'
    }
};

let currentLang = 'en';
const storeWhatsApp = "9779800000000"; // Shop's WhatsApp number

// --- Language Toggle Logic ---
document.getElementById('lang-toggle').addEventListener('click', function() {
    currentLang = currentLang === 'en' ? 'np' : 'en';
    
    // Update active visual state
    const spans = this.querySelectorAll('span');
    spans[0].classList.toggle('active');
    spans[1].classList.toggle('active');

    // Update innerHTML mapped texts
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key]; // innerHTML supports icons
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-placeholder]').forEach(el => {
        const key = el.getAttribute('data-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    // Handle price translations (Rs -> रु)
    document.querySelectorAll('.product-price').forEach(el => {
        const basePrice = el.getAttribute('data-price');
        const formatted = Number(basePrice).toLocaleString();
        if(currentLang === 'np') {
            el.innerText = `रु ${formatted}`;
        } else {
            el.innerText = `Rs ${formatted}`;
        }
    });
});

// --- Navbar Scroll Effect ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


// --- Hero Slider Logic ---
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-slide');
const prevBtn = document.querySelector('.prev-slide');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach(s => {
        s.classList.remove('active');
        s.querySelector('.hero-content').classList.remove('fade-up');
    });
    
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add('active');
    
    // Slight delay to retrigger animation class purely
    setTimeout(() => {
        slides[currentSlide].querySelector('.hero-content').classList.add('fade-up');
    }, 50);
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}
function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});
prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 6000);
}
// Start slider
slideInterval = setInterval(nextSlide, 6000);

// --- Scroll Reveal Logic ---
function revealSections() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 120; // 120px before showing
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', revealSections);
revealSections(); // Trigger initially


// --- 360 Degree Viewer Logic ---
const modal360 = document.getElementById('modal-360');
const viewerContainer = document.getElementById('product-360-container');
const viewerImg = document.getElementById('viewer-img');
const viewerProductName = document.getElementById('viewer-product-name');

let isDragging = false;
let startX;
let currentRotation = 0;

function open360Viewer(productName, imgSrc) {
    viewerProductName.innerText = productName;
    viewerImg.src = imgSrc;
    modal360.classList.add('show');
    
    // Reset rotation style
    currentRotation = 0;
    viewerImg.style.transform = `rotateY(0deg)`;
}

// Mouse dragging
viewerContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    viewerContainer.style.cursor = "grabbing";
});
window.addEventListener('mouseup', () => {
    isDragging = false;
    viewerContainer.style.cursor = "ew-resize";
});
viewerContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX;
    const diff = x - startX;
    
    // For pure JS we simulate 360 visually using CSS 3D transform rotateY
    currentRotation += (diff * 0.4); 
    viewerImg.style.transform = `rotateY(${currentRotation}deg)`;
    startX = x;
});

// Touch dragging
viewerContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX;
});
window.addEventListener('touchend', () => isDragging = false);
viewerContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const diff = x - startX;
    currentRotation += (diff * 0.4);
    viewerImg.style.transform = `rotateY(${currentRotation}deg)`;
    startX = x;
});


// --- Checkout Logic ---
const modalCheckout = document.getElementById('modal-checkout');
let currentCheckoutItem = "";
let currentCheckoutPrice = 0;

function openCheckout(name, price) {
    currentCheckoutItem = name;
    currentCheckoutPrice = price;
    
    document.getElementById('checkout-item-name').innerText = name;
    
    const formattedPrice = Number(price).toLocaleString();
    const prefix = currentLang === 'en' ? 'Rs' : 'रु';
    document.getElementById('checkout-item-price').innerText = `${prefix} ${formattedPrice}`;
    
    // Setup dynamic QR amount
    document.getElementById('qr-amount').innerText = `${prefix} ${formattedPrice}`;
    
    // Show modal and reset state
    modalCheckout.classList.add('show');
    document.getElementById('checkoutForm').reset();
    document.getElementById('qr-container').classList.add('hidden');
}

function toggleQR() {
    const method = document.getElementById('paymentMethod').value;
    const qrContainer = document.getElementById('qr-container');
    const qrImg = document.getElementById('qr-img');
    
    if (method === 'qr') {
        qrContainer.classList.remove('hidden');
        // Generate QR Code dynamically linking pseudo payload
        const qrData = encodeURIComponent(`Pay To: Simran Traders | Amount: ${currentCheckoutPrice} | Item: ${currentCheckoutItem}`);
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=0056b3&data=${qrData}`;
    } else {
        qrContainer.classList.add('hidden');
    }
}

function processCheckout(e) {
    e.preventDefault();
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const methodStr = document.getElementById('paymentMethod').value === 'qr' ? 'Pay Now (QR Code / Bank)' : 'Cash on Delivery';

    const message = `*NEW ORDER ALERT*\n\nHello Simran Traders,\nI want to order the following product:\n\n*Product Name:* ${currentCheckoutItem}\n*Price:* Rs ${currentCheckoutPrice.toLocaleString()}\n*Payment Method:* ${methodStr}\n\n*Customer Name:* ${name}\n*Customer Phone:* ${phone}`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${storeWhatsApp}?text=${encodedMsg}`, '_blank');
    closeModals();
}

// Global modal close functions
function closeModals() {
    modal360.classList.remove('show');
    modalCheckout.classList.remove('show');
}
window.onclick = function(event) {
    if (event.target == modal360) modal360.classList.remove('show');
    if (event.target == modalCheckout) modalCheckout.classList.remove('show');
}


// --- Add to Cart Mock ---
function addToCart() {
    const btn = event.currentTarget;
    const originalHtml = btn.innerHTML;
    
    // Little animation effect
    btn.innerHTML = '<i class="fas fa-check"></i>';
    btn.style.background = "#34c759";
    btn.style.color = "white";
    btn.style.borderColor = "#34c759";
    
    setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.style = "";
        const msg = currentLang === 'en' ? 'Item added to cart!' : 'सामग्री कार्टमा थपियो!';
        alert(msg);
    }, 1000);
}


// --- Contact Inquiry ---
function sendInquiry(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('message').value;

    const text = `*New Inquiry via Website*\n\n*Name:* ${name}\n*Email:* ${email}\n\n*Message:*\n${msg}`;
    const encodedMsg = encodeURIComponent(text);
    window.open(`https://wa.me/${storeWhatsApp}?text=${encodedMsg}`, '_blank');
}
