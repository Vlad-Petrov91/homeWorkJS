const ProductCardData =
    `<div  v-on:mouseenter="showCart" v-on:mouseleave="showCart"  class="product_card addToCartButton">
<div class="product_cardImage"><img v-bind:src=good_props.img alt="image"  >
   
<div v-if="isModified" class="product_cardImageDark"><img src="img/DarkBG.png" alt="">
        <div v-on:click="add_to_cart" class="product_cardButtonBlock"><button class="product_cardButton" v-bind:id=good_props.id><img
                    class="product_cardButtonIMG" src="img/cart.svg" alt="">Add to Cart</button></div>
    </div> 
</div>
<div class="product_card_informarion">
    <h3 class="product_card_title">{{good_props.title}}</h3>
    <p class="product_card_description">{{good_props.description}}</p>
    <span class="price">$ {{good_props.price}}</span>
</div>
</div>`




Vue.component("product-cart", {
    template: ProductCardData,
    props: ["good_props", "isModified"],
    isModified: false,


    methods: {

        showCart() {
            this.isModified = !this.isModified;


        },

        add_to_cart() {
            this.$emit("add_item", this.good_props.id);

        }
    }
})