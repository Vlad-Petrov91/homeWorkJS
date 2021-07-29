const headerTemp = `    <header>
<div class="header__top">
    <div class="header__top__menu container">
        <ul class="header__menu_search">
            <li><a href="index.html"><img src="img/logo.png" alt="logo"></a></li>
            <li><img src="img/search.svg" alt="search"></li>
        </ul>

        <ul class="header__menu_elements">
            <li><img class="menu_logo" src="img/menu.svg" alt="menu"></li>
            <li><img class="acc_logo" src="img/account.svg" alt="account"></li>
            <li v-on:click="showCartBlock"><a  id="CartButton" class="DivCartLogo cart_logo" href=#><img class="cart_logo"
                        src="img/cart.svg" alt="cart">
                    <div class="quantityItemsInCart">{{cart_props.length}}</div>
                </a></li>
        </ul>
        
        <div  v-if="basket" class="basket basketHidden">
            <div class="basketHeader">
                <div>Название товара</div>
                <div>Количество:</div>
                <div>Цена зa 1 шт.</div>
                <div>Итого:</div>
            </div>
            <div class="contentOfTheBasket"></div>
            <hr>
            <div class="basketTotal">Товаров в корзине на сумму: $ <span class="basketTotalValue">0</span></div>
            </div>
        
    </div>
</div>

</header>`

Vue.component("header-component", {
    template: headerTemp,
    props: ["basket", "cart_props"],
    basket: true,


    methods: {

        showCartBlock() {
            this.basket = !this.basket
        }
    }
})