const shoppingCart = () => {
    const openCartBtn = document.querySelector('.shopping-card-icon'),
        closeCartBtn = document.querySelectorAll('.close-cart-btn'),
        shoppingCart = document.querySelector('.shopping-cart'),
        cartItems = document.querySelectorAll('.cart-item'),
        totalPriceElem = document.querySelector('.total-price')

    function openShoppingCart(e) {
        e.preventDefault()
        shoppingCart.style.display = 'grid'
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
    }

    function closeShoppingCart(e) {
        e.preventDefault()
        shoppingCart.style.display = 'none'
        document.getElementsByTagName('html')[0].style.overflowY = "scroll";
    }

    openCartBtn.addEventListener('click', openShoppingCart)
    closeCartBtn.forEach(it => {
        it.addEventListener('click', closeShoppingCart)
    })

    cartItems.forEach(it => {
        const minus = it.querySelector('.product-quantity-down'),
            plus = it.querySelector('.product-quantity-up'),
            input = it.querySelector('.product-total')
        let num = 1;

        minus.addEventListener('click', () => {
            num--
            if (num === 0) {
                minus.disabled = true;
                input.value = 0;
            } else {
                if (num < 10)
                    input.value = `0${num}`;
                if (num >= 10)
                    input.value = num;
            }
            countTotalPrice()
        })
        plus.addEventListener('click', () => {
            if (num === 0)
                minus.disabled = false;
            num++
            if (num < 10)
                input.value = `0${num}`;
            if (num >= 10)
                input.value = num;
            countTotalPrice()
        })
    })

    function countTotalPrice() {
        let totalPrice = 0;
        cartItems.forEach(it => {
            const input = it.querySelector('.product-total'),
                price = it.querySelector('.product-price-value')
            totalPrice += input.value * price.value
        })
        totalPriceElem.value = `$ ${totalPrice}`
    }

    countTotalPrice()
}

export default shoppingCart