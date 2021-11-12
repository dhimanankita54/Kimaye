var product = [
    {
        title:'Kimaye Kinnaur Apples(Pack of 3 & 6)',
        price:108,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Kinnaur-Apples-cover_360x.jpg?v=1634226790',
        incart:0
    },
    {
        title:'Kimaye Nagpuri Santra (2 pc & 4 pc)',
        price:49,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Nagpuri-santra-cover_dfe991ef-cd37-45a4-94f7-b3225779ab6f_360x.jpg?v=1634627098',
        incart:0,
    },
    {
        title:'Kimaye Muskmelon (1 pc)',
        price:75,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Muskmelon-cover_360x.jpg?v=1633763200',
        incart:0
    },
    {
        title:'Rockit Apple',
        price:194,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Mini-Apples-1-cover_8cc9c1e8-d56e-48c3-a61e-d1e993f69136_360x.jpg?v=1634966334',
        incart:0,
    },
    {
        title:'Kimaye Papaya (1 pc)',
        price:61,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Papaya-cover_360x.jpg?v=1632558426',
        incart:0
    },
    {
        title:'Kimaye Pink Guava (pack of 3 & 6)',
        price:53,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Pink-guava-cover_360x.jpg?v=1632551334',
        incart:0
    },
    {
        title:'Kimaye Dragon Fruit(1 pc)',
        price:126,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/dragon-fruit--white-cover_360x.jpg?v=1632470660',
        incart:0
    },
    {
        title:'Kimaye Mini Oranges(6 pc)',
        price:107,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Mini-Oranges-cover_360x.jpg?v=1631890350',
        incart:0
    },
    {
        title:'Kimaye Blueberries (125 g)',
        price:345,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/5e8b2ee6-ce8e-42e9-959f-d43c544f586a_360x.png?v=1616326949',
        incart:0
    },
    {
        title:'Kimaye Washington Apples(Pack of 2 & 4)',
        price:136,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/d109e625-23d6-49b2-ad4f-433ac292cece_360x.png?v=1613364161',
        incart:0
    },
    {
        title:'Kimaye Golden Kiwi(3 pc ~ 300g)',
        price:220,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/golden-kiwi-cover_360x.jpg?v=1625147312',
        incart:0
    },
    {
        title:'Kimaye Avocado Imported (1 pc ~ 250g)',
        price:325,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Avocado_360x.jpg?v=1622045722',
        incart:0
    },
    {
        title:'Kimaye Thai Guava(1 pc ~ 0.4 - 0.5kg)',
        price:108,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/CopyofGuava_Main_Clean_360x.png?v=1606828311',
        incart:0
    },
    {
        title:'Kimaye Imported Oranges (Pack of 3 & 6)',
        price:125,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/a0cfceb5-76a4-4994-9d37-978c6dc3b309_360x.png?v=1611811512',
        incart:0
    },
    {
        title:'Variety: Red Globe Imported (400g)',
        price:205,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/bd07b8e7-3643-4a98-996e-c85fd7d133a8_360x.png?v=1614765886',
        incart:0
    },
    {
        title:'Kimaye Bananas Robusta (5-6 pc)',
        price:108,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/1_3311b3de-1a38-4175-8e8c-ac9577ec85df-min_360x.jpg?v=1614324760',
        incart:0
    },
    {
        title:'Kimaye Pomengranates (Pack of 2 & 4)',
        price:129,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/221f2788-1a08-45ae-bdaf-7432d7ea0156_360x.png?v=1614326590',
        incart:0
    },
    {
        title:'Kimaye Kiwis (3 pc ~ 300g)',
        price:142,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/1_6875ada8-f1e6-4589-b1fd-6f13a86b8ddb-min_360x.jpg?v=1614326164',
        incart:0
    },
    {
        title:'Kimaye Pear Beauty(Pack of 2 & 4)',
        price:124,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Pear-Beauty_360x.jpg?v=1626686136',
        incart:0
    },
    {
        title:'Kimaye Mosambi (Pack of 3 & 6)',
        price: 49,
        img:'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/CopyofMosambi_Main_FixedShadows-min_360x.png?v=1614327057',
        incart:0
    }
];

let parent = document.getElementById("container-prod");

  function showProducts(){

product.forEach(function(products){

let div = document.createElement("div");

let img = document.createElement("img");
img.src = products.img;

let product_price = document.createElement("p");
product_price.textContent = products.price;

let product_name = document.createElement("p");
product_name.textContent = products.title;

let addtocart_btn = document.createElement("button");
addtocart_btn.innerText = "Add to Cart";

addtocart_btn.onclick = function(){
    addtocart(products);
};

div.append(img, product_name, product_price, addtocart_btn);
parent.append(div);

    });
  }

showProducts();

if(localStorage.getItem("cart") === null){
    localStorage.setItem("cart", JSON.stringify([]));
}

function addtocart(p){

let products_cart = JSON.parse(localStorage.getItem("cart"));
products_cart.push(p);
localStorage.setItem("cart", JSON.stringify(products_cart));
window.location.reload();

}


