import { REMOVE_FEATURE, ADD_FEATURE } from "../actions.js/action";
const carPrice = 26395;
export const initialState = {

  additionalPrice: 0,
  car: {
    price: carPrice,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
    {id: 5, name: "A Laundry Basket", price: 14255},
    {id: 6, name: "A Pet Rock", price: 8255},
    {id: 7, name: "Car Pool Lane Buddy", price: 55255}
  ]
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FEATURE:
        return {
          ...state,
          additionalPrice: state.additionalPrice += action.payload.price,
          car: {
            ...state.car,
            features: [...state.car.features, action.payload]
          },
          additionalFeatures: state.additionalFeatures.filter(feature => {
            return feature.id !== action.payload.id;
          })
        };
      case REMOVE_FEATURE:
        return {
          ...state,
          additionalPrice: state.additionalPrice -= action.payload.price,
          car: {
            ...state.car,
            features: state.car.features.filter(feature => {
              return feature.id !== action.payload.id;
            })
          },
          additionalFeatures: [...state.additionalFeatures, action.payload]
        };
      default:
        return state;
    }
  };