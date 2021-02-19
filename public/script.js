const submitBtn = document.getElementById("submitBtn");

if (submitBtn) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("helllo");

    var picker = new Pikaday({
      field: document.getElementById("datepicker-end"),
      format: "yyyy-MM-dd",
      toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      },

      parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split("/");
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
      },
    });
    console.log(
      "im am the picker",
      document.getElementById("datepicker-end").value
    );
    const newFood = {
      name: document.getElementById("nameInput").value,
      quantity: document.getElementById("quantityInput").value,
      storageCondition: document.getElementById("storageInput").value,
      expiration: document.getElementById("datepicker-end").value,
      // var picker = new Pikaday({ field: document.getElementById("datepicker") });
      category: document.getElementById("categoryInput").value,
      price: document.getElementById("priceInput").value,
    };
    // console.log("im the response from cal", expiration);

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
//var picker = new Pikaday({ field: document.getElementById("datepicker") });

// const date = picker.toString("YYYY-MM-DD");
// console.log("im the date", date);

// if ($("html").hasClass("no-touch")) {
//   var $input, $btn;
//   $(".date-wrapper").each(function(index) {
//     $input = $(this).find("input");
//     $btn = $(this).find(".calendar-btn");
//     $input.attr("type", "text");
//     var pickerStart = new Pikaday({
//       field: $input[0],
//       trigger: $btn[0],
//       container: $(this)[0],
//       format: "DD/MM/YYYY",
//       firstDay: 1,
//     });
//     $btn.show();
//   });
// } else {
//   $(".date-wrapper input").attr("type", "date");
//   $(".calendar-btn").hide();

// }
