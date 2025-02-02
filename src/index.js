import "./styles.css";
import {menu} from "./menu.js";
import {contact} from "./contact-us.js"



const content = document.querySelector('#content')


const home = () => {
    content.textContent = ''

    const intro = document.createElement('div');
    intro.classList.add('intro');

    const introImage = document.createElement('div')
    introImage.classList.add('intro-img')

    const introPara = document.createElement('div');
    introPara.classList.add('intro-para');

    const introHeading = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Midnight Restaurant Bar';
    introHeading.append(h1);

    const introText = document.createElement('p');
    introText.textContent = `Midnight Bar is where great food, signature cocktails, and vibrant vibes come together. Enjoy handcrafted dishes, refreshing drinks, and a cozy atmosphere that keeps you coming back for more!`;

    introPara.append(introHeading, introText)
    intro.append(introPara, introImage);
    content.append(intro)



    const hour = document.createElement('div');
    hour.classList.add('hour');
    const h3 = document.createElement('h3');
    h3.textContent = 'Hours of Operation:';
    hour.append(h3);

    const storeHours = [
        'Monday - Thursday: 11:00 AM - 10:00 PM',
        'Friday - Saturday: 11:00 AM - 12:00 AM (Midnight)',
        'Sunday: 12:00 PM - 9:00 PM'
    ];

    const ul = document.createElement('ul');
    ul.classList.add('unOrdered')

    storeHours.forEach(hour => {
        const li = document.createElement('li');
        li.textContent = hour;
        ul.append(li);
    })

    hour.append(ul)
    content.append(hour)
    


    const location = document.createElement('div');
    location.classList.add('location');
    const lh3 = document.createElement('h3');
    const lp = document.createElement('p');
    lh3.textContent = `Location:`;
    lp.textContent = `1225 N Cambridge Heights, Milwaukee, WI`;
    location.append(lh3,lp)

    content.append(location)


}

home();
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.value === 'menu') {
            menu();
        }
        else if (e.target.value === 'home') {
            home();
        }
        else {
            contact();
        }
    })
})
