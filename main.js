joinDiscordBtn = document.getElementById("join-discord-btn");
proyectsBtn = document.getElementById('proyects-btn');
sliderContainer = document.getElementById('slider')
logoImgBtn = document.querySelector('.logo-img');

joinDiscordBtn.addEventListener('click', () => {
    window.open('https://discord.gg/zgpMseDrAS', '_blank');
})

logoImgBtn.addEventListener('click', () => {
    window.open('https://discord.gg/zgpMseDrAS', '_blank');
})

proyectsBtn.addEventListener('click', () => {
    sliderContainer.scrollIntoView({ behavior: 'smooth' });
})