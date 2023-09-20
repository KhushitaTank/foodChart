fetch("food.json")
  .then((response) => response.json())
  .then((data) => {
    function printFoodItems(data) {
      return data.forEach((item) => {
        console.log("All the food item in list", item);
      });
    }

    function printCategory(data) {
      let Data = data.map((item) => item.category);

      let uniqueCategory = new Set(Data);

      uniqueCategory.forEach((item) => {
        data.forEach((object) => {
          if (item === object.category) {
            console.log(
              "Category :",
              object.category,
              ", Full object : ",
              object
            );
          }
        });
      });
    }

    function Calorie(data) {
      return data.forEach((item) => {
        item.calorie > 100
          ? console.log(" Calorie above 100:", item)
          : console.log("Calorie below 100:", item);
      });
    }

    function Sorting(data) {
      data
        .sort((a, b) => b.protiens - a.protiens)
        .forEach((item) =>
          console.log(
            " Highest protien content to lowest :",
            item.protiens,
            ", Full Object :",
            item
          )
        );

      data
        .sort((a, b) => a.cab - b.cab)
        .forEach((item) =>
          console.log(
            "Lowest cab content to highest :",
            item.cab,
            ", Full Object :",
            item
          )
        );
    }

    Sorting(data);
    printFoodItems(data);
    printCategory(data);
    Calorie(data);
  });
