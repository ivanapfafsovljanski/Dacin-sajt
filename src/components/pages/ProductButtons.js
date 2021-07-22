//This page isn't necesery!!!

// import React, {useState} from "react";
// import Honey from "./Honey";
// import HoneyProducts from "./HoneyProducts";
// import Drinks from "./Drinks";

// function ProductButtons() {

//     const[product, setProduct] = useState("");
    
//     function handleProducts(e){
//         const btn = e.target.value;
       
//         if(btn === "Med"){
//             setProduct("Honey");

//         }
//         if(btn === "Pčelinji proizvodi"){
//             setProduct("HoneyProducts");
            
//         }
//         if(btn === "Pića"){
//             setProduct("Drinks");
           
//         }
        
//     }  
    
// console.log(product);
//     return (
    

//         <div>
            
//             <input type="button" value="Med" onClick={handleProducts} className="btnproducts" />
//             <input type="button" value="Pčelinji proizvodi" onClick={handleProducts} className="btnproducts"/>
//             <input type="button" value="Pića" onClick={handleProducts} className="btnproducts"/>
           
//             <div>
//                 {product === "Honey" ? <Honey /> : null}
//                 {product === "HoneyProducts" ? <HoneyProducts /> : null}
//                 {product === "Drinks" ? <Drinks /> : null}
//             </div>
           
//         </div>
//     )
// }
// export default ProductButtons;