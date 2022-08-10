function addDataDB() {
  const ingredients = [
    {
      name: "Mayonesa",
      price: 30,
      isRepeat: false,
      isVeggie: false,
      imgUri:
        "https://res.cloudinary.com/henrysburgers/image/upload/v1660148971/ingredientes/mayonesa_vz13y6.png",
    },
    {
      name: "Mostaza",
      price: 35,
      isRepeat: false,
      isVeggie: true,
      imgUri:
        "https://res.cloudinary.com/henrysburgers/image/upload/v1660148971/ingredientes/mostaza_tebarl.png",
    },
    {
      name: "Ketchup",
      price: 40,
      isRepeat: false,
      isVeggie: true,
      imgUri:
        "https://res.cloudinary.com/henrysburgers/image/upload/v1660148969/ingredientes/ketchup_ewhgl6.png",
    },
    {
      name: "Tomate",
      price: 90,
      isRepeat: false,
      isVeggie: true,
      imgUri:
        "https://res.cloudinary.com/henrysburgers/image/upload/v1660148971/ingredientes/tomate_swr9n3.png",
    },
    {
      name: "Lechuga",
      price: 70,
      isRepeat: false,
      isVeggie: true,
      imgUri:
        "https://res.cloudinary.com/henrysburgers/image/upload/v1660148970/ingredientes/lechuga_ecpcdd.png",
    },
    {
      name: "Cebolla",
      price: 45,
      isRepeat: false,
      isVeggie: true,
      imgUri:
        "https://res.cloudinary.com/henrysburgers/image/upload/v1660148969/ingredientes/cebolla_nv13lg.png",
    },
    {
      name: "Chedar",
      price: 110,
      isRepeat: true,
      isVeggie: true,
      imgUri:
        "https://res.cloudinary.com/henrysburgers/image/upload/v1660148970/ingredientes/cheddar_dt12zq.png",
    },
    {
      name: "Morrón",
      price: 120,
      isRepeat: false,
      isVeggie: true,
      imgUri:
        "https://res.cloudinary.com/henrysburgers/image/upload/v1660148972/ingredientes/morron_o36ant.png",
    },
    {
      name: "Bacon",
      price: 120,
      isRepeat: true,
      isVeggie: false,
      imgUri:
        "https://res.cloudinary.com/henrysburgers/image/upload/v1660148969/ingredientes/bacon_grqyyd.png",
    },
    {
      name: "Medallón de carne",
      price: 190,
      isRepeat: true,
      isVeggie: false,
      imgUri:
        "https://res.cloudinary.com/henrysburgers/image/upload/v1660148970/ingredientes/medallondecarne_uyc4hz.png",
    },
    {
      name: "Medallón vegetal",
      price: 110,
      isRepeat: true,
      isVeggie: true,
      imgUri:
        "https://res.cloudinary.com/henrysburgers/image/upload/v1660148971/ingredientes/medallonvegetal_odveao.png",
    },
  ];

  const burgers = [
    {
      id: "30046cf2-85ba-48e9-bcde-cb51c0fe3fa8",
      name: "BigMc",
      price: 150,
      isVeggie: false,
      ingredients: [1, 2, 3],
      imgUri:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:product-header-desktop?wid=830&hei=456&dpr=off",
    },
    {
      id: "9ff3ad73-b27e-4de4-ae91-2e54068398ac",
      name: "DobleCuarto",
      price: 350,
      isVeggie: false,
      ingredients: [4, 5, 6, 7],
      imgUri:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Quarter-Pounder-with-Cheese-1:product-header-desktop?wid=829&hei=455&dpr=off",
    },
    {
      id: "9553b94c-85ef-4252-ad2f-44f96ca2296b",
      name: "DobleCuarto con queso",
      price: 430,
      isVeggie: false,
      ingredients: [2, 3],
      imgUri:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Double-Quarter-Pounder-with-Cheese-1:product-header-desktop?wid=829&hei=455&dpr=off",
    },
    {
      id: "e335faa7-10d6-49b1-844e-426033d063e3",
      name: "McChicken",
      price: 400,
      isVeggie: false,
      ingredients: [1, 6, 7],
      imgUri:
        "https://www.salomon-foodworld.com/media/pages/sortiment/giant-burger/67991a2a99-1648132074/giant-burger-72dpi-freisteller-e2-800x.jpg",
    },
    {
      id: "ca03dd5b-9d64-42b4-81e8-fd53aa6904c6",
      name: "Burger vegana",
      price: 330,
      isVeggie: true,
      ingredients: [4, 5],
      imgUri:
        "https://www.salomon-foodworld.com/media/pages/sortiment/giant-burger/67991a2a99-1648132074/giant-burger-72dpi-freisteller-e2-800x.jpg",
    },
    {
      id: "1ff1a612-2b75-47ad-a3dd-cd0fe0797967",
      name: "McDoble",
      price: 300,
      isVeggie: false,
      ingredients: [6, 7, 1],
      imgUri:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McDouble-1:product-header-desktop?wid=829&hei=455&dpr=off",
    },
    {
      id: "ed4973b0-3664-4a4b-9ccb-c5c9a05c9020",
      name: "CheeseBurger",
      price: 230,
      isVeggie: false,
      ingredients: [6, 7, 1],
      imgUri:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Cheeseburger-1:product-header-desktop?wid=829&hei=455&dpr=off",
    },
  ];

  const fries = [
    {
      id: "f3a181c0-1f95-4788-bbb4-fd38d4c6634a",
      name: "Papas fritas",
      price: 65,
      imgUri:
        "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXmVCCk/200/200/original?country=ar",
      size: "Chico",
      isVeggie: true,
    },
    {
      id: "9718ab58-b7e6-4fbb-917a-f7f1d7172111",
      name: "Papas fritas con chedar",
      price: 150,
      imgUri:
        "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXmVCCk/200/200/original?country=ar",
      size: "Grande",
      isVeggie: true,
    },
    {
      id: "ba97e928-7602-4141-a8c9-57195802eaad",
      name: "Papas fritas con chedar y bacon",
      price: 170,
      imgUri:
        "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXmVCCk/200/200/original?country=ar",
      size: "Grande",
      isVeggie: false,
    },
    {
      id: "9718ab58-b7e6-4fbb-917a-f7f1d7172111",
      name: "Papas fritas con bacon",
      price: 160,
      imgUri:
        "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXmVCCk/200/200/original?country=ar",
      size: "Grande",
      isVeggie: false,
    },
  ];

  const beverages = [
    {
      id: "18e7bcf0-0404-4cd6-a96e-3b61f97e8f63",
      name: "Pepsi 500 ml",
      price: 170,
      size: "Chico",
      isCarbonated: true,
      isSugar: true,
      imgUri:
        "https://res.cloudinary.com/henrysburgers/image/upload/v1659368862/bebidas/pepsi_gsy5zj.png",
    },
    {
        id: "50448dc7-2a51-4e19-8528-33e5789ac83c",
        name: "SevenUp 500 ml",
        price: 170,
        size: "Chico",
        isCarbonated: true,
        isSugar: true,
        imgUri:
          "https://res.cloudinary.com/henrysburgers/image/upload/v1659368862/bebidas/7up_l2zfwx.png",
    },
    {
        id: "440e7d15-f910-43f2-a7b9-4b3b1fb5d689",
        name: "Paso de los Toros 500 ml",
        price: 170,
        size: "Chico",
        isCarbonated: true,
        isSugar: true,
        imgUri:
          "https://res.cloudinary.com/henrysburgers/image/upload/v1659368862/bebidas/Paso-de-los-Toros-Promelo_hyt19t.png",
    },
    {
        id: "2bdea2e5-f994-45aa-9a23-67e44c4910ed",
        name: "Mirinda 500 ml",
        price: 170,
        size: "Chico",
        isCarbonated: true,
        isSugar: true,
        imgUri:
          "https://res.cloudinary.com/henrysburgers/image/upload/v1659368861/bebidas/mirinda_skfmaj.png",
    },
    {
        id: "9df67e4d-5a7e-429f-bcf5-8b66fdc3d795",
        name: "Bonaqua 500 ml",
        price: 200,
        size: "Chico",
        isCarbonated: false,
        isSugar: false,
        imgUri:
          "https://res.cloudinary.com/henrysburgers/image/upload/v1659368861/bebidas/Agua_reeive.png",
    },
    
  ];

  const combos = [
    {
      id: "98d662ca-64bc-4994-a137-432694d07ed4",
      name: "Combo 1",
      price: 700,
      isVeggie: false,
      imgUri:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:product-header-desktop?wid=830&hei=456&dpr=off",
      burgers: ["9553b94c-85ef-4252-ad2f-44f96ca2296b"],
      fries: [
        "9718ab58-b7e6-4fbb-917a-f7f1d7172111",
        // "9718ab58-b7e6-4fbb-917a-f7f1d7172111",
      ],
      beverages: [
        "bd8b584f-58db-42fc-97a2-9910257dc171",
        // "bd8b584f-58db-42fc-97a2-9910257dc171",
      ],
    },
    {
      id: "4f8e3c46-fcef-42ab-9218-263a55526737",
      name: "Combo 2",
      price: 600,
      isVeggie: false,
      imgUri:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:product-header-desktop?wid=830&hei=456&dpr=off",
      burgers: [
        "9ff3ad73-b27e-4de4-ae91-2e54068398ac",
        "30046cf2-85ba-48e9-bcde-cb51c0fe3fa8",
      ],
      fries: ["ba97e928-7602-4141-a8c9-57195802eaad"],
      beverages: [
        "bd8b584f-58db-42fc-97a2-9910257dc171",
        // "bd8b584f-58db-42fc-97a2-9910257dc171",
      ],
    },
    {
      id: "93f820c9-c616-4263-86fc-4b1d1b1c0800",
      name: "Combo Loco",
      price: 1300,
      isVeggie: false,
      imgUri:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:product-header-desktop?wid=830&hei=456&dpr=off",
      burgers: [
        "1ff1a612-2b75-47ad-a3dd-cd0fe0797967",
        // "1ff1a612-2b75-47ad-a3dd-cd0fe0797967",
        "9ff3ad73-b27e-4de4-ae91-2e54068398ac",
      ],
      fries: ["ba97e928-7602-4141-a8c9-57195802eaad"],
      beverages: [
        "e0d6d870-8209-4e02-9e8c-08c8b9f3a7de",
        "95fbac13-16c0-4d5f-83d1-881f2143c5d6",
        "a87621de-f0dc-4461-a7ab-c4a3d68c7c15",
      ],
    },
    {
      id: "a666ed45-45fd-47a8-8196-4670f4e87b60",
      name: "Combo Vegano",
      price: 1500,
      isVeggie: true,
      imgUri:
        "https://res.cloudinary.com/henrysburgers/image/upload/v1659368850/combos/Combo1_zpm4ha.png",
      burgers: [
        "ca03dd5b-9d64-42b4-81e8-fd53aa6904c6",
        // "ca03dd5b-9d64-42b4-81e8-fd53aa6904c6",
        // "ca03dd5b-9d64-42b4-81e8-fd53aa6904c6",
      ],
      fries: ["9718ab58-b7e6-4fbb-917a-f7f1d7172111"],
      beverages: [
        "e0d6d870-8209-4e02-9e8c-08c8b9f3a7de",
        "95fbac13-16c0-4d5f-83d1-881f2143c5d6",
        "a87621de-f0dc-4461-a7ab-c4a3d68c7c15",
      ],
    },
  ];

  const data = {
    ingredients,
    burgers,
    fries,
    beverages,
    combos,
  };

  return data;
}

module.exports = {
  addDataDB,
};
