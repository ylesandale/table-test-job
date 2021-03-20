import * as types from "../constants";
import Fuse from "fuse.js";
const initialState = [
  {
    id: 1,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 2,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 3,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 4,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 5,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 6,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 7,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 8,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 9,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 10,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 11,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 12,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 13,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 14,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 15,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 16,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 17,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 18,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 19,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 20,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 21,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 22,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 23,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 24,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 25,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 26,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 27,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 28,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 29,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 30,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 31,
    first: "William",
    last: "Miller",
  },
  {
    id: 32,
    first: "William",
    last: "Miller",
  },
  {
    id: 33,
    first: "William",
    last: "Miller",
  },
  {
    id: 34,
    first: "William",
    last: "Miller",
  },
  {
    id: 35,
    first: "William",
    last: "Miller",
  },
  {
    id: 36,
    first: "William",
    last: "Miller",
  },
  {
    id: 37,
    first: "William",
    last: "Miller",
  },
  {
    id: 38,
    first: "William",
    last: "Miller",
  },
  {
    id: 39,
    first: "William",
    last: "Miller",
  },
  {
    id: 40,
    first: "William",
    last: "Miller",
  },
  {
    id: 41,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 42,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 43,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 44,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 45,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 46,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 47,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 48,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 49,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 50,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 51,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 52,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 53,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 54,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 55,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 56,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 57,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 58,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 59,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 60,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 61,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 62,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 63,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 64,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 65,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 66,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 67,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 68,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 69,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 70,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 71,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 72,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 73,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 74,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 75,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 76,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 77,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 78,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 79,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 80,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 81,
    first: "William",
    last: "Miller",
  },
  {
    id: 82,
    first: "William",
    last: "Miller",
  },
  {
    id: 83,
    first: "William",
    last: "Miller",
  },
  {
    id: 84,
    first: "William",
    last: "Miller",
  },
  {
    id: 85,
    first: "William",
    last: "Miller",
  },
  {
    id: 86,
    first: "William",
    last: "Miller",
  },
  {
    id: 87,
    first: "William",
    last: "Miller",
  },
  {
    id: 88,
    first: "William",
    last: "Miller",
  },
  {
    id: 89,
    first: "William",
    last: "Miller",
  },
  {
    id: 90,
    first: "William",
    last: "Miller",
  },
  {
    id: 91,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 92,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 93,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 94,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 95,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 96,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 97,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 98,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 99,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 100,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 101,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 102,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 103,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 104,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 105,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 106,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 107,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 108,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 109,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 110,
    first: "Mark",
    last: "Otto",
  },
  {
    id: 111,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 112,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 113,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 114,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 115,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 116,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 117,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 118,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 119,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 120,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 121,
    first: "Jacob",
    last: "Thornton",
  },
  {
    id: 122,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 123,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 124,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 125,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 126,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 127,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 128,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 129,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 130,
    first: "Larry the Bird",
    last: "Smith",
  },
  {
    id: 131,
    first: "William",
    last: "Miller",
  },
  {
    id: 132,
    first: "William",
    last: "Miller",
  },
  {
    id: 133,
    first: "William",
    last: "Miller",
  },
  {
    id: 134,
    first: "William",
    last: "Miller",
  },
  {
    id: 135,
    first: "William",
    last: "Miller",
  },
  {
    id: 136,
    first: "William",
    last: "Miller",
  },
  {
    id: 137,
    first: "William",
    last: "Miller",
  },
  {
    id: 138,
    first: "William",
    last: "Miller",
  },
  {
    id: 139,
    first: "William",
    last: "Miller",
  },
  {
    id: 140,
    first: "William",
    last: "Miller",
  },
  {
    id: 141,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 142,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 143,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 144,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 145,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 146,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 147,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 148,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 149,
    first: "Matthew",
    last: "Jones",
  },
  {
    id: 150,
    first: "Matthew",
    last: "Jones",
  },
];

const tables = (state = initialState, action) => {
  const options = {
    minMatchCharLength: 1,
    keys: ["id", "first", "last"],
  };
  const fuse = new Fuse(initialState, options);
  switch (action.type) {
    case types.SORT_NUMBERS:
      return action.desc
        ? state.sort((a, b) => (a.id < b.id ? 1 : -1))
        : state.sort((a, b) => (a.id > b.id ? 1 : -1));

    case types.SORT_FIRST:
      return action.desc
        ? state.sort((a, b) => (a.first.length > b.first.length ? 1 : -1))
        : state.sort((a, b) => (a.first.length < b.first.length ? 1 : -1));

    case types.SORT_LAST:
      return action.desc
        ? state.sort((a, b) => (a.last.length > b.last.length ? 1 : -1))
        : state.sort((a, b) => (a.last.length < b.last.length ? 1 : -1));

    case types.SEARCH:
      return (state =
        action.value.length > 0
          ? fuse.search(action.value).map((table) => table.item)
          : initialState);
    default:
      return state;
  }
};

export default tables;
