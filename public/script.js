const submitBtn = document.getElementById("submitBtn");

if (submitBtn) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("helllo");

    const newFood = {
      name: document.getElementById("nameInput").value,
      quantity: document.getElementById("quantityInput").value,
      storageCondition: document.getElementById("storageInput").value,
      //   expiration: document.getElementById("expirationInput").value,
      category: document.getElementById("categoryInput").value,
      price: document.getElementById("priceInput").value,
    };

    fetch("/api/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((err) => console.log(err));
  });
}

/*if ( $('[type="date"]').prop('type') != 'date' ) {
} */
//for date picker
var picker = new Pikaday({ field: document.getElementById("datepicker") });

const date = picker.toString("YYYY-MM-DD");

if ($("html").hasClass("no-touch")) {
  var $input, $btn;
  $(".date-wrapper").each(function(index) {
    $input = $(this).find("input");
    $btn = $(this).find(".calendar-btn");
    $input.attr("type", "text");
    var pickerStart = new Pikaday({
      field: $input[0],
      trigger: $btn[0],
      container: $(this)[0],
      format: "DD/MM/YYYY",
      firstDay: 1,
    });
    $btn.show();
  });
} else {
  $(".date-wrapper input").attr("type", "date");
  $(".calendar-btn").hide();
}
