const navItems = [
    { text: 'Home', link: '#' },
    { text: 'Shopping App', link: '#' }
];

function createNavbar() {
    const navbar = document.getElementById('navbar');

    navItems.forEach(item => {
        const link = document.createElement('a');
        link.textContent = item.text;
        link.href = item.link;
        navbar.appendChild(link);
    });

    const cartCount = document.createElement('div');
    cartCount.id = 'cartCount';
    cartCount.style.display = 'none';
    cartCount.innerHTML = `<span id="cartItemCount">0</span>`;
    cartCount.onclick = navigateToCartPage;
    navbar.appendChild(cartCount);
}

async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(data) {
    const container = document.getElementById('card-container');
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = item.thumbnail;
        img.alt = item.title;

        const title = document.createElement('h2');
        title.textContent = item.title;

        const price = document.createElement('p');
        price.textContent = `Price: ${item.price}`;

        const button = document.createElement('button');
        button.innerText = "Add To Cart";
        button.className = "buttonClass";
        button.addEventListener("click", function () {
            updateCount(item, 1);
        })

        const addbtn = document.createElement('button');
        addbtn.innerText = '+';

        const count = document.createElement('span');
        count.id = "count";
        count.innerHTML = (`0`)



        const subbtn = document.createElement('button');
        subbtn.innerText = '-';

        button.addEventListener("click", function () {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            cart.push({ name: item.title, price: item.price });
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCount();
        });

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(button);
        card.appendChild(addbtn);
        card.appendChild(count);
        card.appendChild(subbtn);
        container.appendChild(card);
    });
}

function updateCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.length;
    const cartCountDiv = document.getElementById('cartCount');
    const itemCountSpan = document.getElementById('cartItemCount');

    itemCountSpan.textContent = count;
    cartCountDiv.style.display = count > 0 ? 'inline-block' : 'none';
}






function navigateToCartPage() {
    window.location.href = 'item.html';
}

createNavbar();
fetchData().then(data => {
    if (data) {
        displayData(data);
        updateCount();
    }
});
















