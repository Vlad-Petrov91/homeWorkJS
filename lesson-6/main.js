









const vue = new Vue({
    el: "#app",
    data() {
        return {
            goods_list: [],
            isLoaded: false,
            cart_list: [],

        }
    },

    methods: {
        add(id) {

            const good = this.goods_list.find(good => good.id === id);
            if (this.cart_list.indexOf(good) !== -1) {
                good.quantity += 1;
            } else {
                this.cart_list.push(good);
            }

            console.log(this.cart_list)
        }

    },
    mounted() {
        fetch('/goods.json')
            .then((response) => response.json())
            .then((data) => setTimeout(() => {
                this.goods_list = data
                this.isLoaded = true
            }, 2000))
    }
});