import { BUY_ITEM, REMOVE_ITEM } from "../actions/actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ITEM:
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        },
        additionalFeatures: state.additionalFeatures.filter(item => {
          return item.id !== action.payload.id;
        })
      };
    case REMOVE_ITEM:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter(item => {
            return item.id !== action.payload.id;
          })
        },
        additionalFeatures: [...state.additionalFeatures, action.payload]
      };

    default:
      return state;
  }
};

export default rootReducer;
