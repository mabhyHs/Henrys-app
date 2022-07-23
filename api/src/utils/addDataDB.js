function addDataDB() {
    const ingredients = [
      {
        id: 1,
        name: "Tomate",
        price: 15,
        isVeggie: true,
      },
      {
        id: 2,
        name: "Lechuga",
        price: 20,
        isVeggie: true,
      },
      {
        id: 3,
        name: "Mayonesa",
        price: 30,
        isVeggie: false,
      },
      {
        id: 4,
        name: "Mostaza",
        price: 35,
        isVeggie: true,
      },
      {
        id: 5,
        name: "Cebolla",
        price: 35,
        isVeggie: true,
      },
      {
        id: 6,
        name: "Chedar",
        price: 35,
        isVeggie: false,
      },
      {
        id: 7,
        name: "Morrón",
        price: 30,
        isVeggie: true,
      },
      {
        id: 8,
        name: "Bacon",
        price: 30,
        isVeggie: false,
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
        name: "Coca-cola",
        price: 70,
        size: "Mediano",
        isCarbonated: true,
        isSugar: true,
        imgUri:
          "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX6zxgK/200/200/original?country=ar",
      },
      {
        id: "bd8b584f-58db-42fc-97a2-9910257dc171",
        name: "Sprite",
        price: 60,
        size: "Chico",
        isCarbonated: true,
        isSugar: true,
        imgUri:
          "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX6zxgK/200/200/original?country=ar",
      },
      {
        id: "913c864a-938a-4957-95ee-068b9b12776f",
        name: "Pepsi",
        price: 65,
        size: "Mediano",
        isCarbonated: true,
        isSugar: true,
        imgUri:
          "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX6zxgK/200/200/original?country=ar",
      },
      {
        id: "c6ae6398-9a15-4f92-8a08-a0171b4997aa",
        name: "Fanta",
        price: 90,
        size: "Grande",
        isCarbonated: true,
        isSugar: true,
        imgUri:
          "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX6zxgK/200/200/original?country=ar",
      },
      {
        id: "2cd97823-baa3-4108-8a35-47b4ef7d64d7",
        name: "Manaos",
        price: 70,
        size: "Mediano",
        isCarbonated: true,
        isSugar: true,
        imgUri:
          "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX6zxgK/200/200/original?country=ar",
      },
      {
        id: "e226acae-5a20-4e07-85b5-06b1e6abbd34",
        name: "Agua Villavicencio",
        price: 70,
        size: "Grande",
        isCarbonated: true,
        isSugar: true,
        imgUri:
          "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX6zxgK/200/200/original?country=ar",
      },
      {
        id: "e0d6d870-8209-4e02-9e8c-08c8b9f3a7de",
        name: "Agua Villavicencio Chica",
        price: 70,
        size: "Chica",
        isCarbonated: false,
        isSugar: false,
        imgUri:
          "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX6zxgK/200/200/original?country=ar",
      },
      {
        id: "95fbac13-16c0-4d5f-83d1-881f2143c5d6",
        name: "Agua con gas",
        price: 75,
        size: "Grande",
        isCarbonated: false,
        isSugar: false,
        imgUri:
          "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX6zxgK/200/200/original?country=ar",
      },
      {
        id: "a87621de-f0dc-4461-a7ab-c4a3d68c7c15",
        name: "Agua saborizada pomelo",
        price: 100,
        size: "Grande",
        isCarbonated: false,
        isSugar: false,
        imgUri:
          "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX6zxgK/200/200/original?country=ar",
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
          "9718ab58-b7e6-4fbb-917a-f7f1d7172111",
        ],
        beverages: [
          "bd8b584f-58db-42fc-97a2-9910257dc171",
          "bd8b584f-58db-42fc-97a2-9910257dc171",
        ],
      },
      {
        id: "98d662ca-64bc-4994-a137-432694d07ed4",
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
          "bd8b584f-58db-42fc-97a2-9910257dc171",
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
          "1ff1a612-2b75-47ad-a3dd-cd0fe0797967",
          "9ff3ad73-b27e-4de4-ae91-2e54068398ac"
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
          isVeggie: false,
          imgUri:
            "https://scontent.faep7-1.fna.fbcdn.net/v/t39.30808-6/240602789_4576646515713082_7974142449783503495_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_ohc=E5asGSVTMh8AX8lMSay&_nc_oc=AQkFf-fbCp9wSBjC0mioycr0_zcW2nU4xiVMqcFW_kRxW6fH2jUbZuua5ZviUbXSBzA&_nc_ht=scontent.faep7-1.fna&oh=00_AT8mcJKvgFrkwQGiVompZ3zfV9ftZIl_TU3U_jYHZpQ1gg&oe=62E13114",
          burgers: [
            "ca03dd5b-9d64-42b4-81e8-fd53aa6904c6",
            "ca03dd5b-9d64-42b4-81e8-fd53aa6904c6",
            "ca03dd5b-9d64-42b4-81e8-fd53aa6904c6",
          ],
          fries: ["9718ab58-b7e6-4fbb-917a-f7f1d7172111"],
          beverages: [
            "e0d6d870-8209-4e02-9e8c-08c8b9f3a7de",
            "95fbac13-16c0-4d5f-83d1-881f2143c5d6",
            "a87621de-f0dc-4461-a7ab-c4a3d68c7c15",
          ],
        },
    ];
  
    const data = {};
  
    if (data.ingredients) {
      data.ingredients = ingredients;
    }
    if (data.burgers) {
      data.burgers = burgers;
    }
    if (data.fries) {
      data.fries = fries;
    }
    if (data.beverages) {
      data.beverages = beverages;
    }
    if (data.combos) {
      data.combos = combos;
    }
  
    return data;
  }

module.exports = {
    addDataDB
};
  