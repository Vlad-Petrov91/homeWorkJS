const products = [
    {
        id: 1, title: 'Jacket', price: 150, description: "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"
    },
    {
        id: 2, title: 'Shirt', price: 50, description: "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"
    },
    {
        id: 3, title: 'Shorts', price: 350, description: "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"
    },
    {
        id: 4, title: 'Pants', price: 250, description: "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"
    },
    {
        id: 5, title: 'T-Shirt', price: 150, description: "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"
    },
    {
        id: 6, title: 'Cap', price: 50, description: "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"
    },
    {
        id: 7, title: 'Shirt', price: 350, description: "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"
    },
    {
        id: 8, title: 'Jacket', price: 250, description: "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"
    },
    {
        id: 9, title: 'Shirt', price: 250, description: "Known for her sculptural takes Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam?"
    },
];


const $productsList = document.querySelector('.catalog__product__cards');

const renderGoodsItem = ({ id, title, price, description }) => {
    return `<div class="product_card men_item_"><img src="img/catalog/men_item_${id}.jpg" alt="">
<div class="product_card_informarion">
    <h3 class="product_card_title">${title}</h3>
    <p class="product_card_description">${description}</p><span class="price">$${price}</span>
</div>
</div>`;
};

const renderProductsList = (list = products) => {
    let productsList = list.map(
        item => renderGoodsItem(item)
    );

    $productsList.insertAdjacentHTML('beforeend', productsList.join(''));
}

renderProductsList();





