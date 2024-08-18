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

export async function getMockData(){
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