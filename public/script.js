
const submitBtn = document.getElementById("submitBtn");

if(submitBtn) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("helllo")

        const newFood = {
            name: document.getElementById("nameInput").value,
            quantity: document.getElementById("quantityInput").value,
            storageCondition: document.getElementById("storageInput").value,
            expiration: document.getElementById("expirationInput").value,
            category: document.getElementById("categoryInput").value,
            price: document.getElementById("priceInput").value
        };

        fetch("/api/foods", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFood),
        }).then((response) => {
            console.log(response);
            location.reload();
        })
        .catch((err) => console.log(err));
    });
}