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
      name: "Papas fritas (chicas)",
      price: 420,
      imgUri:
        "https://res.cloudinary.com/henrysburgers/image/upload/v1659368859/Hamburguesas/PAPAS-KING_dknxtf.png",
      size: "Chico",
      isVeggie: true,
    },
    {
        id: "7e33e6b9-23bb-464b-8d61-2c7dd869b569",
        name: "Papas chedar (chicas)",
        price: 430,
        imgUri:
          "https://res.cloudinary.com/henrysburgers/image/upload/v1659368860/Hamburguesas/Papas-Cheddar_s1f5ac.png",
        size: "Chico",
        isVeggie: true,
    },
    {
        id: "43dd3750-1ee6-489f-baeb-b7431eba6ae7",
        name: "Papas chedar bacon (chicas)",
        price: 520,
        imgUri:
          "https://res.cloudinary.com/henrysburgers/image/upload/v1659368858/Hamburguesas/Papas-Cheddar-y-Bacon_yi7xn6.png",
        size: "Chico",
        isVeggie: false,
    },

    {
        id: "08f6fa50-90b8-4f23-acc3-4572b833f71c",
        name: "Papas fritas (medianas)",
        price: 520,
        imgUri:
          "https://res.cloudinary.com/henrysburgers/image/upload/v1659368859/Hamburguesas/PAPAS-KING_dknxtf.png",
        size: "Mediano",
        isVeggie: true,
      },
      {
          id: "563e6890-1bee-43cd-8ec7-f4ef37b7c2fd",
          name: "Papas chedar (medianas)",
          price: 530,
          imgUri:
            "https://res.cloudinary.com/henrysburgers/image/upload/v1659368860/Hamburguesas/Papas-Cheddar_s1f5ac.png",
          size: "Mediano",
          isVeggie: true,
      },
      {
          id: "1b1261d0-22f9-4164-b6c2-3aef28f94ed7",
          name: "Papas chedar bacon (medianas)",
          price: 620,
          imgUri:
            "https://res.cloudinary.com/henrysburgers/image/upload/v1659368858/Hamburguesas/Papas-Cheddar-y-Bacon_yi7xn6.png",
          size: "Mediano",
          isVeggie: false,
        },


        {
        id: "f456331d-5058-4a78-bb3b-97daa0c9daa4",
        name: "Papas fritas (grandes)",
        price: 620,
        imgUri:
          "https://res.cloudinary.com/henrysburgers/image/upload/v1659368859/Hamburguesas/PAPAS-KING_dknxtf.png",
        size: "Grande",
        isVeggie: true,
      },
      {
          id: "9bb64175-7658-4874-896c-8feec9557ead",
          name: "Papas chedar (grandes)",
          price: 630,
          imgUri:
            "https://res.cloudinary.com/henrysburgers/image/upload/v1659368860/Hamburguesas/Papas-Cheddar_s1f5ac.png",
          size: "Grande",
          isVeggie: true,
      },
      {
          id: "645e2ac4-c4b3-4e2b-9479-304e6b5d0c95",
          name: "Papas chedar bacon (grandes)",
          price: 720,
          imgUri:
            "https://res.cloudinary.com/henrysburgers/image/upload/v1659368858/Hamburguesas/Papas-Cheddar-y-Bacon_yi7xn6.png",
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
