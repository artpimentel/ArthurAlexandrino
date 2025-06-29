const sliderInputs = document.querySelectorAll('input[name="slider"]');
const slideContents = document.querySelectorAll('[id^="slide"][id$="_content"]');

function updateSlideContent() {
    const checkedRadio = document.querySelector('input[name="slider"]:checked');
    const checkedId = checkedRadio.id.replace('s', 'slide') + '_content';

    slideContents.forEach(content => {
        if (content.id === checkedId) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
}

updateSlideContent();

sliderInputs.forEach(input => {
    input.addEventListener('change', updateSlideContent);
});