const resData = [
    {
        id: 1,
        name: "Sai Bikanar",
        cusine: "South, North, Chinese",
        starRating: 2.9,
        eta: "28 mins"
    },
    {
        id: 2,
        name: "Bikanar",
        cusine: "South, North, Chinese",
        starRating: 4.8,
        eta: "28 mins"
    },
    {
        id: 3,
        name: "KFC",
        cusine: "Non-Veg, Spicy",
        starRating: 3.9,
        eta: "33 mins"
    },
    {
        id: 4,
        name: "Wow momos",
        cusine: "Non-Veg, Spicy",
        starRating: 3.7,
        eta: "33 mins"
    },
    {
        id: 5,
        name: "Maska",
        cusine: "Non-Veg, Spicy",
        starRating: 4.2,
        eta: "33 mins"
    },
    {
        id: 6,
        name: "Macdonald",
        cusine: "Non-Veg, Spicy",
        starRating: 3.7,
        eta: "33 mins"
    },
    {
        id: 7,
        name: "PizzaHut",
        cusine: "Non-Veg, Spicy",
        starRating: 4.5,
        eta: "33 mins"
    }
];

const resMenu = [
    {
        id: 1,
        name: "Sai Bikanar",
        cusine: "South, North, Chinese",
        starRating: 2.9,
        eta: "28 mins",
        menu: [{
            id: 1,
            name: 'Biriyani',
            price: 120,
        },
        {
            id: 2,
            name: 'Chole Bhature',
            price: 130,
        },
        {
            id: 3,
            name: 'Chole Kulche',
            price: 90,
        },
        {
            id: 4,
            name: 'Jira Rice',
            price: 80,
        },
        {
            id: 5,
            name: 'Soya Chapp',
            price: 160,
        }]
    }, {
        id: 2,
        name: "Bikanar",
        cusine: "South, North, Chinese",
        starRating: 4.8,
        eta: "28 mins",
        menu: [{
            id: 1,
            name: 'Biriyani',
            price: 120,
        },
        {
            id: 2,
            name: 'Chole Bhature',
            price: 130,
        },
        {
            id: 3,
            name: 'Chole Kulche',
            price: 90,
        },
        {
            id: 4,
            name: 'Jira Rice',
            price: 80,
        },
        {
            id: 5,
            name: 'Soya Chapp',
            price: 160,
        }]
    },
    {
        id: 3,
        name: "KFC",
        cusine: "Non-Veg, Spicy",
        starRating: 3.9,
        eta: "33 mins",
        menu: [{
            id: 1,
            name: 'Chicken Wings',
            price: 106,
        },
        {
            id: 2,
            name: 'Mini Bucket',
            price: 199,
        },
        {
            id: 3,
            name: 'Chilly Chicken',
            price: 249,
        },
        {
            id: 4,
            name: 'Family Bucket',
            price: 499,
        },
        {
            id: 5,
            name: 'Chicken Burgers',
            price: 99,
        }]
    }
];

export async function getResMenu(resId) {
    const data = new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                const menuData = resMenu.filter(i => i.id == resId);
                if (menuData?.length > 0) {
                    resolve(menuData[0]);
                }
                reject('No resturant found');
            }, 1000);
        } catch (error) {
            reject('No resturant found');
        }
    });
    return data;
}

export async function getMockData() {
    const data = new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(resData);
            }, 1000);
        } catch (error) {
            reject('Not able to fetch');
        }
    });
    return data;
}

export default resData;