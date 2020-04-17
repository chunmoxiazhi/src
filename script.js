/** Add any JavaScript you need to this file. */
(function(){
    let products = {
        all: window.petFood,

        /* --------------------------------------------RETURN ALL PRODUCTS----------------------------------*/
        allProducts: function() {
            return this.all.map((product)=>{
              return {
                catog: product.catog,
                code: product.code,
                brand: product.brand,
                description: product.description, 
                weight: product.weight,
                price: product.price
                /*
                    catog: 'dog',
                    code: 'dog_performatrin',
                    brand: 'PERFORMATRIN',
                    description: 'ADULT CHICKEN & RICE FORMULA',
                    weight: '12 lb',
                    price: '$22.99',*/
              };
            });
        },

        getCategory: function(category){
            const allProducts = this.allProducts();
            return allProducts.filter((product) => {
                if (product.catog !== category){
                    return false;
                }
                return true;
            })
        },
    }

    let productHelper = {
        clearWeb: function() {
            document.getElementById('allproducts').innerHTML = '';
        },

        productImg: function(productCode){
            let productImg = document.createElement('img');
            let imgSrc = 'img/' + productCode + '.jpg';
            productImg.setAttribute('src', imgSrc);
            return productImg;


        },

        productDiv: function(product) {
            let productDiv = document.createElement("div");
            let br1 = document.createElement("br");
            let br2 = document.createElement("br");
            let line1 = document.createElement("h4");
            let line2 = document.createElement("p");
            //let line3 = document.createElement("p");
            //let line4 = document.createElement("p");
            //console.log (product);
            let productImg = productHelper.productImg(product.code);
          
            let brand = document.createTextNode(product.brand);
            line1.appendChild(brand);

            let description = document.createTextNode(product.description);
            line2.appendChild(description);
            line2.appendChild(br1);
            let categ = document.createTextNode(product.catog);
            line2.appendChild(categ);
            line2.appendChild(br2);
            let price = document.createTextNode(product.price);
            line2.appendChild(price);

            productDiv.appendChild(productImg);
            productDiv.appendChild(line1);
            productDiv.appendChild(line2);
           // productDiv.appendChild(br);
            //productDiv.appendChild(line3);
           // productDiv.appendChild(br);
            //productDiv.appendChild(line4);

            return productDiv;
        },

        productsToDiv: function(productArray){
            productHelper.clearWeb();
            productArray.forEach((product)=>{
                let newProduct = productHelper.productDiv(product);
                //let individualProduct = document.createElement('div');
                //individualProduct.appendChild(newProduct);
                document.getElementById('allproducts').appendChild(newProduct);
            })

        }
    };

    function createProdctList() {

        ///////////////////////////////////DEFAULT OUTPUT///////////////////////////////////////////////
     
        let productArray = products.allProducts();
        productHelper.productsToDiv(productArray);

        ////////////////////////////////////////////////////////////////////////////////////////////////
        function setProducts(category){
       
            let requiredProducts = products.getCategory(category);
            productHelper.productsToDiv(requiredProducts);
           
        }
        /////////////////////////////////////////DOG///////////////////////////////////////////////////
        function setDogs(){
            setProducts('Dog');
        }
        document.getElementById("menu_dog").addEventListener("click", setDogs);
        //////////////////////////////////////////CAT//////////////////////////////////////////////////////
        function setCats(){
            setProducts('Cat');
        }
        document.getElementById("menu_cat").addEventListener("click", setCats);
        /////////////////////////////////////OTHERS//////////////////////////////////////////////////////////
        function setOthers(){
            setProducts('Others');
        }
        document.getElementById("menu_others").addEventListener("click", setOthers);

    }
       
    window.onload = createProdctList;
       
 
})();
