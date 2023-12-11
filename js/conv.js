function prevSlide(sliderNumber) {
    const slider = document.getElementById(`slider${sliderNumber}`);
    const circle1 = document.getElementById(`circle1_${sliderNumber}`);
    const circle2 = document.getElementById(`circle2_${sliderNumber}`);

    const slideWidth = slider.clientWidth;
    const slideDuration = 500; // Adjust this value as needed

    let currentIndex = Math.floor(slider.scrollLeft / slideWidth);

    if (currentIndex > 0) {
        currentIndex--;
        scrollToCurrentIndex();
        circle2.style.backgroundColor = 'white';
        circle1.style.backgroundColor = '#FF8A02';
    }

    function scrollToCurrentIndex() {
        const targetX = currentIndex * slideWidth;
        smoothScrollTo(targetX, slideDuration);
    }

    function smoothScrollTo(targetX, duration) {
        const startX = slider.scrollLeft;
        const distanceX = targetX - startX;
        const startTime = performance.now();

        function step(currentTime) {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < duration) {
                slider.scrollLeft = easeInOutCubic(elapsedTime, startX, distanceX, duration);
                requestAnimationFrame(step);
            } else {
                slider.scrollLeft = targetX;
            }
        }

        requestAnimationFrame(step);
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
    }
}

function nextSlide(sliderNumber) {
    const slider = document.getElementById(`slider${sliderNumber}`);
    const circle1 = document.getElementById(`circle1_${sliderNumber}`);
    const circle2 = document.getElementById(`circle2_${sliderNumber}`);

    const slideWidth = slider.clientWidth;
    const slideDuration = 500; // Adjust this value as needed

    let currentIndex = Math.floor(slider.scrollLeft / slideWidth);

    if (currentIndex < slider.children.length - 1) {
        currentIndex++;
        scrollToCurrentIndex();
        circle2.style.backgroundColor = '#FF8A02';
        circle1.style.backgroundColor = 'white';
    }

    function scrollToCurrentIndex() {
        const targetX = currentIndex * slideWidth;
        smoothScrollTo(targetX, slideDuration);
    }

    function smoothScrollTo(targetX, duration) {
        const startX = slider.scrollLeft;
        const distanceX = targetX - startX;
        const startTime = performance.now();

        function step(currentTime) {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < duration) {
                slider.scrollLeft = easeInOutCubic(elapsedTime, startX, distanceX, duration);
                requestAnimationFrame(step);
            } else {
                slider.scrollLeft = targetX;
            }
        }

        requestAnimationFrame(step);
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
    }
}
