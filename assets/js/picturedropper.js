var possibleImages = [
  "assets/images/Moana.jpg",
  "assets/images/GuitarPlaying.png",
  "assets/images/Cheese.jpg",
  "assets/images/CryptoPhoto.jpg",
  "assets/images/LogoSmall.png",
  "assets/images/Group5.jpg"
  ];

document.body.addEventListener("mousemove", function(ev) {
    if (Math.random() < 0.85) {
        return;
    }

    const index = Math.round(Math.random() * possibleImages.length);
    const image = possibleImages[index];

    const el = document.createElement("img");
    document.body.appendChild(el);

    el.classList.add('emoji');
    el.src = image
    el.offsetLeft;  // forces layout

    el.style.left = (event.clientX-410) + 'px';
    el.style.top = (event.clientY-50) + 'px';
    el.style.transform = 'translate(' + (Math.random() * -1000 + 500) + 'px, 1200px) scale(0)';


    el.addEventListener('transitionend', () => {
        el.remove()
    })

}, true);
