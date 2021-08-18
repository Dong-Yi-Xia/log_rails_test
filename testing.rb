arr = [
  {name: "grape food", price: 5, age:1},
  {name: "apple jam", price: 2, age:4},
  {name: "cherry art", price: 3, age:2},
  {name: "bana cake", price: 1, age:3}
].sort_by { |h| h[:name] }

puts arr



# puts arr.sort_by { |h| h["name"] }



.sort_by{ |reason| reason[:label] }
