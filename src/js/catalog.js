import {getCatalog} from "./apiCaller";

const catalog = () => {
    let filterItems = document.querySelector(".filter-items"),
        catalogElem = document.querySelector(".catalog"),
        catalog = {
            filters: {},
            speakers: [],
            isShowMorePressed: false
        },
        shownElements = 0,
        chosenFiltersByUser = [],
        moreBtnIsShown = false;

    if (catalogElem === null || filterItems=== null )
        return;
    if (catalog.filters.length === 0) {
        filterItems.innerHTML = `loading`
    } else if (catalog.speakers.length === 0) {
        catalogElem.innerHTML = `loading`
    } else return


    function makeFilters(filters) {
        filters.forEach(it => {
            catalog.filters[it] = false;
        })
        filterItems.innerHTML = ``
        filters.forEach(filter => {
            const filterItem = document.createElement("button")
            filterItem.classList.add("filter-item")
            filterItem.setAttribute('id', filter)
            filterItem.innerHTML = filter
            filterItems.append(filterItem);
            filterItem.addEventListener('click', () => handleFilterChangeState(filter, filterItem))
        })
    }

    function restyleAll() {
        chosenFiltersByUser = Object.entries(catalog.filters).filter(([key, value]) => value).map(it => it[0])
        const catalogItemElems = catalogElem.getElementsByClassName('catalog-item')
        if (chosenFiltersByUser.length === 0) {
            for (let i = 0; i < catalogItemElems.length; i++) {
                catalogItemElems[i].classList.remove('hidden-by-filter')
                if (i > 4) {
                    catalogItemElems[i].classList.add('hidden-element-in-mobile-version')
                } else {
                    catalogItemElems[i].classList.remove('hidden-element-in-mobile-version')
                }

            }
            shownElements = catalog.speakers.length;
            renderButton()
            return
        }
        let elementsToBeShown = [];
        for (let i = 0; i < catalog.speakers.length; i++) {
            let temp = 0

            for (let j = 0; j < chosenFiltersByUser.length; j++) {
                if (catalog.speakers[i].filters[chosenFiltersByUser[j]]) {
                    temp++
                } else {
                    temp = 0
                    break
                }
            }
            if (temp !== 0) {
                elementsToBeShown.push(catalog.speakers[i].name)
            }
        }

        let shownItemsCounter = 0;

        for (let i = 0; i < catalogItemElems.length; i++) {
            if (!elementsToBeShown.includes(catalogItemElems[i].id)) {
                catalogItemElems[i].classList.add('hidden-by-filter')
            } else {
                catalogItemElems[i].classList.remove('hidden-by-filter')
                shownItemsCounter++
                catalogItemElems[i].classList.remove('hidden-element-in-mobile-version')
                if (shownItemsCounter > 4)
                    catalogItemElems[i].classList.add('hidden-element-in-mobile-version')
            }
        }
        shownElements = elementsToBeShown.length
        renderButton()
    }

    function handleFilterChangeState(filter, filterElem) {
        let catalogFilters = catalog.filters
        catalogFilters[filter] = !catalogFilters[filter]
        filterElem.classList.toggle('selected-filter')
        chosenFiltersByUser.push(filter)
        restyleAll();
    }

    function renderSpeakers(speakers) {
        speakers.forEach((it, i) => {
            const catalogItem = document.createElement("a")
            catalogItem.classList.add("catalog-item")
            if (i > 4) {
                catalogItem.classList.add('hidden-element-in-mobile-version')
            }
            catalogItem.setAttribute('id', it.name)
            catalogItem.setAttribute('href', 'index.html')
            catalogItem.innerHTML = `
            <img src="img/catalog/${it.img}" alt=${it.name} class="catalog-item-img"> 
            <h2 class="catalog-item-name">${it.name}</h2>
            <p class="catalog-item-desc">${it.desc !== '' ? it.desc : ""}</p>
            <h2 class="catalog-item-price">$ ${it.price.toLocaleString('ru-RU',
                {minimumFractionDigits: 2})}</h2>`
            catalogElem.append(catalogItem);
        })
    }


    function renderButton() {
        const showMoreBtn = catalogElem.querySelector('.catalog-more-btn')
        if (shownElements < 5 && moreBtnIsShown) {
            moreBtnIsShown = false
            showMoreBtn.classList.add('hidden-btn')
            return;
        }
        if (shownElements < 5)
            return
        if (moreBtnIsShown)
            return;
        showMoreBtn.classList.remove('hidden-btn')

    }

    function createShowMoreBtn() {
        if (shownElements < 5)
            return

        const showMoreBtn = document.createElement("button")
        showMoreBtn.classList.add('catalog-more-btn')
        showMoreBtn.innerHTML = "more"
        catalogElem.append(showMoreBtn)
        moreBtnIsShown = true
        showMoreBtn.addEventListener('click', () => {
            const catalogItemElems = catalogElem.getElementsByClassName('catalog-item')
            for (let item of catalogItemElems)
                item.classList.remove('hidden-element-in-mobile-version')
            showMoreBtn.classList.add('hidden-btn')
        })
    }

    function makeCatalog(speakers) {
        catalogElem.innerHTML = ``
        renderSpeakers(speakers)
        createShowMoreBtn()
    }


    (async function getData() {
        let catalogData = await getCatalog()
        catalog.speakers = catalogData.speakers.slice()
        shownElements = catalog.speakers.length;
        makeFilters(catalogData.filters)
        makeCatalog(catalog.speakers)
    })()


}
export default catalog