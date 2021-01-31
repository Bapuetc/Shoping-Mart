
        "use strict"
        var categories = ["Select a Category","Electronics","Footware","Fashion"];
        var electronics = ["Select Electronics Product","Jbl Speaker","Earpod","Mobile","HP Laptop"];
        var fashion = ["Select Fashion","Jeans","Shirts","T-shirts","Chinnos","Joggers"];
        var footware = ["Select Footware","Nike Casual","Lee Boot","Adidas","Puma"];
        var data = [
            {
                Name : "Jbl Speaker",
                Price :"5000",
                Photo : "./images/JBL Speaker.jpg"
            },
            {
                Name :"Earpod",
                Price :"1200",
                Photo : "./images/Earpod.jpg"
            },
            {
                Name :"Mobile",
                Price :"56999",
                Photo : "./images/apple-iphone.jpeg"
            },    
            {
                Name :"HP Laptop",
                Price :"45000",
                Photo : "./images/HP laptop.jpg"
            },
            {
                Name :"Jeans",
                Price :"1999",
                Photo : "./images/Jeans.jpg"
            },
            {
                Name :"Shirts",
                Price :"899",
                Photo : "./images/Shirts.jpeg"
            },
            {
                Name :"T-shirts",
                Price :"599",
                Photo : "./images/tshirt.jpeg"
            },
            {
                Name :"Chinnos",
                Price :"1299",
                Photo : "./images/Chinos.jpg"
            },
            {
                Name :"Joggers",
                Price :"999",
                Photo : "./images/Joggers.jpg"
            },
            {
                Name :"Nike Casual",
                Price :"1999",
                Photo : "./images/Nike Casual1.jpg"
            },
            {
                Name :"Lee Boot",
                Price :"1999",
                Photo : "./images/Lee Cooper.jpg"
            },
            {
                Name :"Adidas",
                Price :"2499",
                Photo : "./images/Adidas.jpg"
            },
            {
                Name :"Puma",
                Price :"2999",
                Photo : "./images/Puma.jpg"
            },
            
        ]
    
        function bodyLoad(){
            var lstCategory = document.getElementById("lstCategory");
            for(var item of categories){
                var option = document.createElement("option");
                option.text = item;
                option.value = item;
                lstCategory.appendChild(option);
            }
        }
        var products = [];
        function loadProducts(){
            var lstProducts = document.getElementById("lstProducts");
            lstProducts.innerHTML="";
            for( var item of products){
                var option = document.createElement("option");
                option.text = item;
                option.value = item;
                lstProducts.appendChild(option);
            }

        }
        function selectedCategoryChanged(){
            var ProdCategory = document.getElementById("lstCategory").value;
            switch (ProdCategory){
                case "Electronics":
                    products = electronics;
                    loadProducts();
                    break;
                case "Footware":
                    products = footware;
                    loadProducts();
                    break;
                case "Fashion":
                    products = fashion;
                    loadProducts();
                    break;
                default:
                    products = ["Select a Product"];
                    loadProducts();
                    break;     
            }
            
        }
        var searchedProduct;

        function selectedProductChanged() {
            var productName = document.getElementById("lstProducts").value;
                searchedProduct = data.find(function (item) {
                return item.Name == productName;
            })
            document.getElementById("prodName").innerHTML = searchedProduct.Name;
            document.getElementById("prodPrice").innerHTML = "&#8377;" + searchedProduct.Price;
            document.getElementById("prodPhoto").src = searchedProduct.Photo;
        }
        var cartItems = [];

        function GetCartCount() {
            document.getElementById("cartCount").innerHTML = cartItems.length;
        }

        function AddtoCartClick() {
            cartItems.push(searchedProduct);
            GetCartCount();
            alert("Item Added to Cart");
        }

        function AddCartItemsToTable() {
            var tbody = document.getElementById("tbody");
            tbody.innerHTML = "";
            for (var item of cartItems) {
                var tr = document.createElement("tr");
                var tdName = document.createElement("td");
                var tdPrice = document.createElement("td");
                var tdPhoto = document.createElement("td");

                tdName.innerHTML = item.Name;
                tdPrice.innerHTML = item.Price;

                var img = document.createElement("img");
                img.src = item.Photo;
                img.height = "100";
                img.width = "120";

                tdPhoto.appendChild(img);

                tr.appendChild(tdName);
                tr.appendChild(tdPrice);
                tr.appendChild(tdPhoto);

                tbody.appendChild(tr);

            }
        }
