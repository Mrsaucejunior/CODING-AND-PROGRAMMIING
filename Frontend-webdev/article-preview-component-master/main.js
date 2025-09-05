const profileContainer = document.getElementById("profileContainer");
const profileDetails = document.getElementById("profileDetails");
const shareOption = document.getElementById("shareOption");
const shareIcon = document.getElementById("shareIcon");
const sharePath = document.getElementById("sharePath");
const textContainer = document.getElementById("textContainer");
const toolTip = document.getElementById("shareContent");
const media = window.matchMedia("(min-width: 880px)");

shareIcon.addEventListener ("click", () => {

    if (media.matches) {
        if (toolTip.style.display === "none"){
            shareOption.style.display = "none";
            toolTip.style.display = "flex";
            shareIcon.style.backgroundColor = "hsl(214, 17%, 51%)";
            sharePath.setAttribute ("fill", "white");            
        }else {
            toolTip.style.display = "none";
            shareIcon.style.backgroundColor = "hsl(210, 46%, 95%)";
            sharePath.setAttribute ("fill", "#6E8098");
        }
    }else if (profileContainer.style.backgroundColor === "") {
        profileContainer.style.backgroundColor = "hsl(217, 19%, 35%)";
        profileDetails.style.display = "none";
        shareOption.style.display = "flex";
        textContainer.style.paddingBottom = "1rem";
        shareIcon.style.backgroundColor = "hsl(214, 17%, 51%)";
        sharePath.setAttribute ("fill", "white");
        profileContainer.classList.toggle ("trans");
    }else {
        profileContainer.style.backgroundColor = "";
        profileDetails.style.display = "flex";
        shareOption.style.display = "none";
        shareIcon.style.backgroundColor = "hsl(210, 46%, 95%)";
        sharePath.setAttribute ("fill", "#6E8098");
    }

});


