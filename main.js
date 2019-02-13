// on click on intro text, scroll to video 

const scrollToVideo = () => {

  document.querySelector(".PromoRelease-content-video").scrollIntoView({
    behavior:"smooth"
  });

} // scrollToVideo

document.querySelector(".PromoRelease-introText").addEventListener("click", scrollToVideo);

