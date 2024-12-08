let mouseCursor = document.querySelector(".cursor");

window.addEventListener('mousemove',cursor);

function cursor(event) {
  mouseCursor.style.top = event.pageY + "px";
  mouseCursor.style.left = event.pageX + "px";
}

let hogwartsImgWrapper = document.getElementById("hogwarts-img-wrapper");
let genshinImgWrapper = document.getElementById("genshin-img-wrapper");
let disneyImgWrapper = document.getElementById("disney-img-wrapper");

const hogwartsImg = document.querySelector("#hogwarts-img");
const genshinImg = document.querySelector("#genshin-img");
const disneyImg = document.querySelector("#disney-img");

hogwartsImg.addEventListener("mouseenter", () => {
  hogwartsImgWrapper.innerHTML = `
            <div id="hogwarts-img-wrapper" class="img-wrapper">
                <iframe id="hogwarts-vid" width="600" height="355" src="https://www.youtube.com/embed/BtyBjOW8sGY?si=AEUp8Fb1KvstctOW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        `;
});

genshinImg.addEventListener("mouseenter", () => {
  genshinImgWrapper.innerHTML = `
            <div id="genshin-img-wrapper" class="img-wrapper">
                <iframe id="genshin-vid" width="600" height="355" src="https://www.youtube.com/embed/0uN1fcrQE5Q?si=mXSBEPc-g1gE_pgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        `;
});

disneyImg.addEventListener("mouseenter", () => {
  disneyImgWrapper.innerHTML = `
            <div id="disney-img-wrapper" class="img-wrapper">
                <iframe id="disney-vid" width="600" height="355" src="https://www.youtube.com/embed/hsgOSQbgO1Q?si=WWNcIYtmWfECEQBG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        `;
});
