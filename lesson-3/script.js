

class Good {
    constructor({ id, title, price, description }) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }

    getPrice() {
        return this.price;
    }

    render() {
        return `<div class="product_card men_item_"><img src="img/catalog/men_item_${this.id}.jpg" alt="">
        <div class="product_card_informarion">
            <h3 class="product_card_title">${this.title}</h3>
            <p class="product_card_description">${this.description}</p><span class="price">$${this.price}</span>
        </div>
        </div>`;
    }
}

class Basket {
    constructor(title, price, quantity = 1) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }

    getPrice() {
        return this.price * this.quantity;
    }

    render() {
        return `<div class="goods-item"><h3>${this._title}</h3><p>${this._price}</p></div>`;
    }
}

class BasketList {
    constructor(container) {
        this.basketItems = [];
        this.$basket = container;
    }

    showBasketList() {
        console.log(this.basketItems);
    }

    addBasketList(basketItem) {
        this.basketItems.push(basketItem);

    }

    remoteBasketList(basketItem) {
        this.basketItems.splice(this.basketItems.indexOf(basketItem), 1);

    }

    totalBasketPrice() {
        let sum = 0;
        this.basketItems.forEach(item => {
            sum += item.price
        });
    }
    renderGoodsList() {
        let basketList = this.basketItems.map(item => item.render()).join(' ');
        this.$basket.insertAdjacentHTML('beforeend', basketList);
    }
}


class GoodList {
    constructor(container) {
        this.goods = [];
        this.$goodsListContainer = container;
    }

    add(good) {
        this.goods.push(good);
    }

    totalSum() {
        let sum = 0;
        this.goods.forEach(item => {
            sum += item.price
        });
    }

    renderGoodsList() {
        let goodsList = this.goods.map(item => item.render()).join(' ');
        this.$goodsListContainer.insertAdjacentHTML('beforeend', goodsList);
    }
}

const list = new GoodList(document.querySelector('.catalog__product__cards'));
const basketItems = new BasketList(document.querySelector('.basket'));

fetch('goods.json')
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        response.forEach(newGood => {
            list.add(new Good(newGood));
        });

        list.renderGoodsList();
    })
    .catch((err) => {
        console.log(err)
    })

