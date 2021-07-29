const contentTemp = `        <div class="content ">
<div class="catalog__top">
    <div class="catalog__heating__content container">
        <h2>NEW ARRIVALS </h2>
        <div class="page__way"><a href="index.html">HOME</a> / <a href="#">MEN</a> / <a
                href="catalog.html">NEW
                ARRIVALS</a></div>
    </div>
</div>
<div class="filter container">
    <div class="filter__open"> <span>FILTER</span> <img src="img/filter.svg" alt="logo"></div>
    <div class="filter__menu">
        <div class="trending">TRENDING NOV <img src="img/filter_vector.svg" alt=""></div>
        <div class="size">SIZE <img src="img/filter_vector.svg" alt=""></div>
        <div class="prise">PRISE <img src="img/filter_vector.svg" alt=""></div>
    </div>

</div>
<div class="catalog__product__cards container">
    <product-cart v-on:add_item="add_to_cart"  v-for="good of list_props" :key="good.id" v-bind:good_props="good" ></product-cart>
</div>
<div class="catalog__list">
    <img src="img/page_left.svg" alt="left">
    <a href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">5</a>
    <a href="#">6</a>.....
    <a href="#">20</a>
    <img src="img/page_right.svg" alt="right">
</div>
</div>`

Vue.component("content-component", {
    template: contentTemp,
    props: ["list_props"],
    methods: {
        add_to_cart(id) {
            this.$emit("add_to_cart", id);


        }
    }
})