const vue = new Vue({
   el: "#app",
   data: {
      goods: [],
      cart: [],
      isLoaded: false,
      isModified: false,
   },
   methods: {
      addToCard() {
         this.cart.push({
            title: this.goods[0].title, price: this.goods[0].price
         })
      },
      modify() {
         this.isModified = !this.isModified
      }
   },
   mounted() {
      fetch("/goods.json")
         .then((response) => response.json())
         .then((data) => setTimeout(() => {
            this.goods = data

            this.isLoaded = true
         }, 2000))
   }
});