class User{
    constructor(image, name, location, feedBack, rate){
        this.image = image;
        this.name = name;
        this.location = location;
        this.feedBack = feedBack;
        this.rate = rate
    }
}

let users = [
    new User("testimonial-1.jpg","John Smith","UPWORK, New York","We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we boast a years and years of service.",3.2),
    new User("testimonial-2.jpg","Hayden Wood","FIVERR, Italy","Trax’s customer testimonial page is another beauty. Its simple design focuses on videos and standout quotes from customers. This approach is clean, straightforward, text that can be overwhelming and easy to skip.",4.4),
    new User("testimonial-3.jpg","Kevin Miller","ENVATO, Australia","Trax is a company that provides tools to help professional event planning and execution, and their customers are very happy folks! The thing I love about their customer testimonial page provides content formats.",2),
    new User("testimonial-4.jpg","Alina Johanson","INTEL, Sidney","Startup Institute is a career accelerator that allows professionals to learn new skills, take their careers in a different direction, and pursue a career they are passionate about that have completed the program.",4.7)
]

let prewBtn = document.querySelector('#prew');
let nextBtn = document.querySelector('#next');

let feedbackText = document.querySelector('.ttm__main__feedback_text')
let ttmPhoto = document.querySelector('.info__photo_img');
let ttmName = document.querySelector('#ttmName')
let ttmLoc = document.querySelector('#ttmLoc');
let ttmStars = [...document.querySelector('.ttm__main__feedback_stars').children];

let number = 0;
nextBtn.addEventListener('click',()=>{
    setTimeout(function name(params) {
        number++;
        if(number>3){
            number = 0;
        }
        feedbackText.innerText = users[number].feedBack;
        ttmPhoto.src = `./media/${users[number].image}`;
        ttmName.innerText = users[number].name;
        ttmLoc.innerText = users[number].location;
        ttmStars.forEach(element => {
            element.style.color = "gray"
        });
        for (let i = 0; i < Math.round(users[number].rate); i++) {
            ttmStars[i].style.color = "#ffc13c"
        }
    },150)
    feedbackText.classList.add('ttm-active');
    ttmPhoto.classList.add('ttm-active');
    ttmName.classList.add('ttm-active');
    ttmLoc.classList.add('ttm-active');
        window.addEventListener('animationend',()=>{
            feedbackText.classList.remove('ttm-active');
            ttmPhoto.classList.remove('ttm-active');
            ttmName.classList.remove('ttm-active');
            ttmLoc.classList.remove('ttm-active');
        })
});
prewBtn.addEventListener('click',()=>{
    console.log(number);

    setTimeout(function name(params) {
        number--;
        if(number<0){
            number = 3;
        }
        feedbackText.innerText = users[number].feedBack;
        ttmPhoto.src = `./media/${users[number].image}`;
        ttmName.innerText = users[number].name;
        ttmLoc.innerText = users[number].location;
        
    },150)
    feedbackText.classList.add('ttm-active');
    ttmPhoto.classList.add('ttm-active');
    ttmName.classList.add('ttm-active');
    ttmLoc.classList.add('ttm-active');
        window.addEventListener('animationend',()=>{
            feedbackText.classList.remove('ttm-active');
            ttmPhoto.classList.remove('ttm-active');
            ttmName.classList.remove('ttm-active');
            ttmLoc.classList.remove('ttm-active');
        })
});


