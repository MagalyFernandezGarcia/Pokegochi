export const Itemslist = (item: string) => {
  switch (item) {
    case "basicSponge":
      return {
        name: "Basic Sponge",
        url: "/sponge.png",
        price: 10,
        level: 0,
        description: "A basic sponge",
        stats: {
          cleanliness: 10,
        },
        totalStock: 10,
      };
    case "basicToy":
      return {
        name: "Old Toy",
        url: "/catpole.png",
        price: 20,
        level: 0,
        description: "An old toy but still funny",
        stats: {
          happiness: 10,
        },
        totalStock: 10,
      };
    case "basicFood":
      return {
        name: "Little bag of food",
        url: "/food.png",
        price: 5,
        level: 0,
        description: "A little bag of food. The taste isn't too bad",
        stats: {
          hunger: 10,
        },
        totalStock: 30,
      };
    default:
      throw new Error("Item not found");
  }
};
