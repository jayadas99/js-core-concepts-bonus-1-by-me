const numbers = [45, 65, 23, 98, 19];
// for(let i =0; i <numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
    // console.log(number);
}

const products = [
    {id: 1, name:'xiami phone One night', price: 19000 },
    {id: 2, name:'iphone', price: 19000 },
    {id: 3, name:'mac book air', price: 19000 },
    {id: 4, name:'lenovo yoga laptop 2025', price: 19000 },
    {id: 5, name:'Dell inspiron laptop', price: 19000 },
    {id: 6, name:'Samsung phone note 7', price: 19000 },
    {id: 7, name:'Nokia old age phone gone', price: 19000 },
    {id: 8, name:'Phone one', price: 19000 },
    {id: 8, name:'M1 chip not cheap LapTOP', price: 19000 },
]

// for(const product of products){
//     console.log(product);
// }


// 1.product

// function matchedProducts (products, search){
//     const matched = [];
//     for(const product of products){
//         console.log(product)
//     }
// }

// const result = matchedProducts(products, 'phone');
// console.log(result);


// 2.product.name
// function matchedProducts (products, search){
//     const matched = [];
//     for(const product of products){
//         console.log(product.name)
//     }
// }

// const result = matchedProducts(products, 'phone');
// console.log(result);


// 3.product.name.includes(search)
// function matchedProducts (products, search){
//     const matched = [];
//     for(const product of products){
//         console.log(product.name.includes(search))
//     }
// }

// const result = matchedProducts(products, 'phone');
// console.log(result);


// 4.(if(product.name.includes(search)){
//             matched.push(product);
//         })case


// function matchedProducts (products, search){
//     const matched = [];
//     for(const product of products){
//         if(product.name.includes(search)){
//             matched.push(product);
//         }
//     }
//     return matched;
// }

// const result = matchedProducts(products, 'phone');
// console.log(result);


// 5.to lowercase const result = matchedProducts(products, 'phone');

// function matchedProducts (products, search){
//     const matched = [];
//     for(const product of products){
//         if(product.name.toLowerCase().includes(search)){
//             matched.push(product);
//         }
//     }
//     return matched;
// }

// const result = matchedProducts(products, 'phone');
// console.log(result);


//6. uppercase const result = matchedProducts(products, 'Phone');

// function matchedProducts (products, search){
//     const matched = [];
//     for(const product of products){
//         if(product.name.toLowerCase().includes(search)){
//             matched.push(product);
//         }
//     }
//     return matched;
// }

// const result = matchedProducts(products, 'Phone');
// console.log(result);




// 7.if(product.name.toLowerCase().includes(search.toLowerCase()))
// function matchedProducts (products, search){
//     const matched = [];
//     for(const product of products){
//         if(product.name.toLowerCase().includes(search.toLowerCase())){
//             matched.push(product);
//         }
//     }
//     return matched;
// }

// const result = matchedProducts(products, 'Phone');
// console.log(result);


// laptop
function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'laptop');
console.log(result);


