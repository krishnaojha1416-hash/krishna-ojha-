let cartCount = 0;


/* ADD TO BAG */

function addToBag() {

    cartCount++;

    document.getElementById("cartCount").innerText = cartCount;

    alert("Product added to your bag 🛍️");

}


/* SHOP NOW */

function shopNow() {

    document.querySelector(".products-section")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* SEARCH */

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    let searchValue =
        searchInput.value.toLowerCase();

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function (product) {

        let productName =
            product.dataset.name.toLowerCase();

        if (productName.includes(searchValue)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

});