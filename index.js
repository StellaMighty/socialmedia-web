// SIDEBAR
const menuItems = document.querySelectorAll('.menuitem');
//MESSAGES
const messageMenu = document.querySelector("#message-notification");    
const messages = document.querySelector(".messages");
const msgPopUp = document.querySelector("#message-notification .notification-count");
const message = messages.querySelectorAll("message");
const messageSearch = document.querySelector("#message-search");

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme')
const themeCard = document.querySelector('#card');
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(':root');
const colorize = document.querySelectorAll('.choose-color span');
const changeBackground = document.querySelectorAll('.choose-bg div');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');


// removing active class
const changeActiveClass = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    })
}
// removing active class from FontSize spans
const changeActiveFont = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
//removing active class from the Color Spans
const changeActiveColor = () => {
    colorize.forEach(color => {
        color.classList.remove('active');
    })
}
// this shows the notification section and removes the popup
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveClass();
        item.classList.add("active");
        if (item.id != 'notifications') {
            document.querySelector(".notification-popup").
            style.display = "none";
        } else {
            document.querySelector(".notification-popup").
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = "none";
        }
    })
})
//          MESSAGES

// Search Chat
const searchMyMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = "flex";  
        }
        else{
            chat.style.display = "none"; 
        }
    })
}



// this gives a boxshadow to the message section
messageMenu.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    msgPopUp.style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
    
})
// this handles the message search
messageSearch.addEventListener("keydown", searchMyMessage);

//opens Theme Modal
const openThemeModal = () => {
    themeModal.style.display = "grid";
}
// Closes Theme Modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
} 
// Theme Customization
theme.addEventListener('click', openThemeModal);
themeModal.addEventListener('click', closeThemeModal);

// Changing Font Sizes
fontSizes.forEach(size => {
    let fontSize;
    
    size.addEventListener('click', () => {
        changeActiveFont();
        size.classList.toggle('active');
        if (size.classList.contains("font-size1")) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }
        else if (size.classList.contains('font-size2')) {
                fontSize = '13px';
                root.style.setProperty('----sticky-top-left', '5.4rem');
                root.style.setProperty('----sticky-top-right', '-7rem');
        }
        else if (size.classList.contains('font-size3')) {
                    fontSize = '16px';
                    root.style.setProperty('----sticky-top-left', '-2rem');
                root.style.setProperty('----sticky-top-right', '-17rem');
        }
        else if (size.classList.contains('font-size4')) {
                    fontSize = '19px';
                    root.style.setProperty('----sticky-top-left', '-5rem');
                    root.style.setProperty('----sticky-top-right', '-25rem');
                    document.querySelector('main .container').style.gridTemplateColumns = '18vw auto 24vw';
                    document.querySelector('main .container').style.gap = '1.2rem';
        }
        else if (size.classList.contains('font-size5')) {
                    fontSize = '22px';
                    root.style.setProperty('----sticky-top-left', '-12rem');
                    root.style.setProperty('----sticky-top-right', '-35rem');
                    document.querySelector('main .container').style.gridTemplateColumns = '18vw auto 28vw';
                    document.querySelector('main .container').style.gap = '1rem';
                    document.querySelector('main .container').style.width = '95%';
                    
        }
        document.querySelector('html').style.fontSize = fontSize;
    })      // change the font size of the root html element

})

//Changing the Colors
colorize.forEach(color => {
    let mycolor;
    
    color.addEventListener('click', () => {
        changeActiveColor();
        color.classList.toggle('active');
        if (color.classList.contains('color1')) {
            primaryHue = 252;
            
        } 
        else if (color.classList.contains('color2')) {
            primaryHue = 52;
        }
        else if (color.classList.contains('color3')) {
            primaryHue = 352;
        }
        else if (color.classList.contains('color4')) {
            primaryHue = 152;
        }
        else if (color.classList.contains('color5')) {
            primaryHue = 202;
        }

        root.style.setProperty("--primary-color-hue", primaryHue)


    })
})

// Changing THe Background

    
let lightnessWhite, lightnessLight, lightnessDark;

// changing lightness Function
const changeLightness = () => {
    root.style.setProperty('--primary-white-lightness', lightnessWhite);
    root.style.setProperty('--primary-light-lightness', lightnessLight);
    root.style.setProperty('--primary-dark-lightness', lightnessDark);

}
// Each selection of Background
bg1.addEventListener('click', () => {
    lightnessWhite = '100%';
    lightnessLight = '95%';
    lightnessDark = '17%';
    changeLightness();
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    bg1.classList.add('active');

    window.location.reload();

});

bg2.addEventListener('click', () => {
    lightnessWhite = '20%';
    lightnessLight = '15%';
    lightnessDark = '95%';
    changeLightness();
    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');

});

bg3.addEventListener('click', () => {
    lightnessWhite = '10%';
    lightnessLight = '0%';
    lightnessDark = '95%';
    changeLightness();
    bg3.classList.add('active');
    bg2.classList.remove('active');
    bg1.classList.remove('active');

})
