const TestimoniData = [
    {
        image: "assets/image/obama.jpg",
        content: "Saya suka Sate",
        author: "Obama",
        rating: 1,
    },
    {
        image: "assets/image/nurmagedov.jpg",
        content: "Bismillah",
        author: "Khabib",
        rating: 5,
    },
    {
        image: "assets/image/brocklesnar.jpg",
        content: "This is Brock Lesnar",
        author: "Brock Lesnar",
        rating: 4,
    },
    {
        image: "assets/image/boby.jpg",
        content: "Medan Anti Begal",
        author: "Bobby",
        rating: 3,
    },
    {
        image: "assets/image/udin.jpg",
        content: "Udin ada dimana mana",
        author: "Udin",
        rating: 5,
    },
    
];

function html(item) {
    return `
    <div class="testimonial">
        <img src="${item.image}" alt="testimonial" class="profile-testimonial">
            <p class="quote">${item.content}</p>
            <p class="author">- ${item.author}</p>
            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
    </div>`;
}

function allTestimonial() {
    let testimonialHtml = ``;
    TestimoniData.forEach((item) => {
    testimonialHtml += html(item);
    });

    document.getElementById("testimonials").innerHTML = testimonialHtml;
}

allTestimonial();

function filterTestimonials(rating) {
    let testimonialHtml = ``;
    const testimonialFilter = TestimoniData.filter((item) => {
    return item.rating === rating;
    });

    if (testimonialFilter.length === 0) {
    testimonialHtml = `<h1> Data not found!</h1>`;
    } else {
    testimonialFilter.forEach((item) => {
        testimonialHtml += html(item);
    });
    }

    document.getElementById("testimonials").innerHTML = testimonialHtml;
}
