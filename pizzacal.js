menu = {
  "veggie_pizza": 7,
  "chicken_pizza": 10,
  "cookies": 3
}
order = {
  "veggie_pizza": 5,
  "chicken_pizza": 7,
  "cookies": 20
}

const veggie_pizza_cost = menu["veggie_pizza"] * order["veggie_pizza"]
const chicken_pizza_cost = menu["chicken_pizza"] * order["chicken_pizza"]
const cookies_cost = menu["cookies"] * order["cookies"]

const total_cost = veggie_pizza_cost + chicken_pizza_cost + cookies_cost

console.log(`Total cost of your order is ${total_cost}`)