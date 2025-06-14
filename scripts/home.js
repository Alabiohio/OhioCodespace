const introText = document.getElementById("introTxt");
const bizPage = document.getElementById("bizPg");

const homeIntroTextContent = [
  "Hey there! Welcome to Ohio Codespace",
  "Want your own website? We’ve got you",
  "Let’s make your business shine online",
  "More views, more clicks, more growth!",
  "Your digital journey starts here",
  "Web design that works for you",
  "Let’s turn your ideas into reality",
  "Creative. Clean. Code you can trust.",
  "From concept to launch—stress-free",
  "We build. You grow. Simple as that."
];

const bizIntroTextContent = [
  "Boost your business visibility",
  "Get more views",
  "Attract the right customers",
  "Stand out online effortlessly",
  "Grow your brand reach",
  "Turn clicks into loyal customers",
  "Level up your online presence",
  "Be seen. Be chosen. Be trusted.",
  "Let your business speak for itself",
  "Shine brighter than your competitors"
];

let introTextIndex = 0;
let charIndex = 0;
let typing = true;

if (introTxt) {
    
    if (bizPage) {
        showIntroTextContent = bizIntroTextContent;
    } else {
        showIntroTextContent = homeIntroTextContent;
    }
    
    function typeEffect() {
        const currentText = showIntroTextContent[introTextIndex]
        if (typing) {
            introText.textContent = currentText.slice(0, ++charIndex);
            if (charIndex === currentText.length) {
                typing = false;
                setTimeout(typeEffect, 2000);
                return;
            }
        } else {
            introText.textContent = currentText.slice(0, --charIndex);
            if (charIndex === 0) {
                typing = true;
                introTextIndex = (introTextIndex + 1) % showIntroTextContent.length
            }
        }
        setTimeout(typeEffect, 20);
    }
}
typeEffect();

const serButI = document.getElementById("serButI");
const serButII = document.getElementById("serButII");
const serButIII = document.getElementById("serButIII");
const serButIV = document.getElementById("serButIV");

if (serButI && serButII && serButIII && serButIV ) {
    serButI.addEventListener("click", () => {
        window.location.href="mailto:ohioalabi@gmail.com,ohiocheoyaalabi@gmail.com?subject=Website%20Development%20Inquiry&body=Dear%20Ohio Codespace,%0A%0AI%20am%20interested%20in%20creating%20a%20webpage%20and%20would%20like%20to%20discuss%20the%20details.%20Please%20let%20me%20know%20how%20we%20can%20proceed.%0A%0ABest%20regards,%0A[Your%20Name]";
    });
    serButII.addEventListener("click", () => {
        window.location.href="mailto:ohioalabi@gmail.com,ohiocheoyaalabi@gmail.com?subject=I%20Want%20To%20Boost%20My%20Business";
    });
    serButIII.addEventListener("click", () => {
        window.location.href="mailto:ohioalabi@gmail.com,ohiocheoyaalabi@gmail.com?subject=Issue%20Report&body=Dear%20Support%20Team,%0A%0AI%20would%20like%20to%20report%20an%20issue%20with%20[describe%20the%20issue%20here].%0A%0ADetails:%0A-%20Device:%20[Your%20Device]%0A-%20OS%20Version:%20[Your%20OS%20Version]%0A-%20Browser:%20[Your%20Browser]%0A-%20Date%20and%20Time:%20[When%20Issue%20Occurred]%0A%0APlease%20let%20me%20know%20if%20you%20need%20any%20further%20information.%0A%0AThank%20you,%0A[Your%20Name]";
    });
    serButIV.addEventListener("click", () => {
        window.location.href="mailto:ohioalabi@gmail.com";
    });
}




