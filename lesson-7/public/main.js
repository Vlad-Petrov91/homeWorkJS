const vue = new Vue({
   el: "#app",
   data() {
      return {
         catalog: [],
         cart: []
      }
   },
   methods: {
      addItem(good) {
         if (this.cart.includes(good)) {
            good.quantity++;

            fetch('/cart', {
               method: 'POST',
               headers: {
                  "Content-Type": "application/json"
               },
               body: JSON.stringify(this.cart)
            })

         } else {
            this.cart.push(good);

            fetch('/cart', {
               method: 'POST',
               headers: {
                  "Content-Type": "application/json"
               },
               body: JSON.stringify(this.cart)
            })
         }
      },
      deleteItem(id) {
         this.cart.forEach(element => {
            if (element.id == id) {
               let index = this.cart.indexOf(element)
               this.cart.splice(index, 1)

               fetch('/cart', {
                  method: 'POST',
                  headers: {
                     "Content-Type": "application/json"
                  },
                  body: JSON.stringify(this.cart)
               })
            }
         });
      }
   },
   mounted() {
      fetch('/catalog')
         .then((response) => {
            return response.json()
         })
         .then((data) => {
            this.catalog = data;
         })

      fetch('/cart')
         .then((response) => {
            return response.json()
         })
         .then((data) => {
            this.cart = data;
         })
   }
})