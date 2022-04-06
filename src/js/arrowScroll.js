const arrowScroll = () => {
    const arrow = document.querySelector('.scroll-arrow'),
        sections = document.getElementsByTagName("section");
    let nextSection = 0;


    arrow.addEventListener('click', ()=>scroll(sections[nextSection]))

    function scroll(section) {
        nextSection++
        if (nextSection >=sections.length)
            nextSection = 0
        section.scrollIntoView()

    }
}

export default arrowScroll