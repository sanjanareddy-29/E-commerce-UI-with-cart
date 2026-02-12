function displaycart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let main = document.querySelector('.main');
    main.innerHTML = "";
    let total = 0;

    cart.forEach(function(item, index) {

        let card = document.createElement("div");
        card.className = "main1";

        
        let price = Number(item.price);
        let qty = item.qty;

        
        total += price * qty;

        card.innerHTML = `
            <div class="box1">
                <img src="${item.img}" alt="">
                <div class="head">
                    <h2>${item.name}</h2>
                    <p>$${price}</p>
                </div>
            </div>
            <div class="box2">
                <button class="minus">-</button>
                <span>${qty}</span>
                <button class="plus">+</button>
            </div>
        `;

        main.appendChild(card);

        let plus = card.querySelector(".plus");
        let minus = card.querySelector(".minus");

        plus.onclick = () => {
            item.qty++;
            save(cart);
        };

        minus.onclick = () => {
            if (item.qty > 1) {
                item.qty--;
            } else {
                cart.splice(index, 1);
            }
            save(cart);
        };

    });

    // ✅ Show total
    let totalDiv = document.createElement("h2");
    totalDiv.textContent = "Total: $" + total;
    main.appendChild(totalDiv);
}


function save(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    displaycart();
}

displaycart();
