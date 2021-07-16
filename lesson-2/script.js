class Good {
    constructor(id, title, price, description) {
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
    constructor(basketItems, container) {
        this.basketItems = basketItems;
        this.$basket = container;
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
    constructor(goods, container) {
        this.goods = goods;
        this.$goodsList = container;
    }

    totalSum() {
        let sum = 0;
        this.goods.forEach(item => {
            sum += item.price
        });
    }

    renderGoodsList() {
        let goodsList = this.goods.map(item => item.render()).join(' ');
        this.$goodsList.insertAdjacentHTML('beforeend', goodsList);
    }
}

const list = new GoodList([
    new Good(1, 'Jacket', 150, "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"),
    new Good(2, 'Shirt', 75, "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"),
    new Good(3, 'Shorts', 55, "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"),
    new Good(4, 'Pants', 20, "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"),
    new Good(5, 'T-Shirt', 82, "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"),
    new Good(6, 'Cap', 66, "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"),
    new Good(7, 'Shirt', 18, "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"),
    new Good(8, 'Jacket', 58, "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"),
    new Good(9, 'Shirt', 100, "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"),
], document.querySelector('.catalog__product__cards'));

const basket = new BasketList([
    new Good(1, 'Jacket', 150, "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"),
    new Good(2, 'Shirt', 75, "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"),
], document.querySelector('.basket'));


list.renderGoodsList();


