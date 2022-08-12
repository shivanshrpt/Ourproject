import React, { createContext, useState } from "react";
import pic1 from "../assets/images/p1.jpg"
import pic2 from "../assets/images/p2.jpg"
import pic3 from "../assets/images/p3.jpg"
import pic4 from "../assets/images/p4.jpg"
import pic5 from "../assets/images/p5.jpg"
import pic6 from "../assets/images/p6.jpg"
import pic7 from "../assets/images/p7.jpg"
import pic8 from "../assets/images/p8.jpg"
import pic9 from "../assets/images/p9.jpg"
import pic10 from "../assets/images/p10.jpg"
import pic11 from "../assets/images/p11.jpg"
import pic12 from "../assets/images/p12.jpg"
import pic13 from "../assets/images/p13.jpg"
import pic14 from "../assets/images/p14.jpg"
import pic15 from "../assets/images/p15.jpg"
import pic16 from "../assets/images/p16.jpg"
import pic17 from "../assets/images/p17.jpg"
import pic18 from "../assets/images/p18.jpg"
import pic19 from "../assets/images/p19.jpg"
import pic20 from "../assets/images/p20.jpg"
import pic21 from "../assets/images/p21.jpg"
import pic22 from "../assets/images/p22.jpg"
import pic23 from "../assets/images/p23.jpg"
import pic24 from "../assets/images/p24.jpg"
import pic25 from "../assets/images/p25.jpg"
import pic26 from "../assets/images/p26.jpg"
import pic27 from "../assets/images/p27.jpg"
import pic28 from "../assets/images/p28.jpg"
import pic29 from "../assets/images/p29.jpg"
import pic30 from "../assets/images/p30.jpg"
import pic31 from "../assets/images/p31.jpg"
import pic32 from "../assets/images/p32.jpg"
import pic33 from "../assets/images/p33.jpg"
import pic34 from "../assets/images/p34.jpg"
import pic35 from "../assets/images/p35.jpg"
import pic36 from "../assets/images/p36.jpg"
import pic37 from "../assets/images/p37.jpg"
import pic38 from "../assets/images/p38.jpg"
import pic39 from "../assets/images/p39.jpg"
import pic40 from "../assets/images/p40.jpg"
import pic41 from "../assets/images/p41.jpg"
import pic42 from "../assets/images/p42.jpg"
import pic43 from "../assets/images/p43.jpg"
import pic44 from "../assets/images/p44.jpg"
import pic45 from "../assets/images/p45.jpg"
import pic46 from "../assets/images/p46.jpg"
import pic47 from "../assets/images/p47.jpg"
import pic48 from "../assets/images/p48.jpg"
import pic49 from "../assets/images/p49.jpg"
import pic50 from "../assets/images/p50.jpg"
import pic51 from "../assets/images/p51.jpg"
import pic52 from "../assets/images/p52.jpg"
import pic53 from "../assets/images/p53.jpg"
import pic54 from "../assets/images/p54.jpg"
import pic55 from "../assets/images/p55.jpg"

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
    const [products] = useState([
        { id: 1, maincategory: "Male", subcategory: "Tshirt", brand: "Adidas", name: "Adidas Man Tshirt Slim Fit", baseprice: 5000, discount: 50, finalprice: 2500, color: "Black", size: "XL", description: "this is Sample Product", pic1: pic1, pic2: pic2, pic3: pic50, pic4: pic44 },
        { id: 2, maincategory: "Male", subcategory: "Tshirt", brand: "Mufti", name: "Mufti Man Tshirt", baseprice: 4000, discount: 50, finalprice: 2000, color: "White", size: "XXL", description: "this is Sample Product", pic1: pic54, pic2: pic54, pic3: pic54, pic4: pic54 },
        { id: 3, maincategory: "Male", subcategory: "Jeans", brand: "Polo", name: "Polo Man Jeans Slim Fit", baseprice: 5000, discount: 90, finalprice: 500, color: "Blue", size: "SM", description: "this is Sample Product", pic1: pic1, pic2: pic2, pic3: pic5, pic4: pic11 },
        { id: 4, maincategory: "Male", subcategory: "Shirt", brand: "Adidas", name: "Adidas Man Shirt Slim Fit", baseprice: 10000, discount: 90, finalprice: 1000, color: "Gray Check", size: "MD", description: "this is Sample Product", pic1: pic25, pic2: pic26, pic3: pic38, pic4: pic40 },
        { id: 5, maincategory: "Male", subcategory: "Shirt", brand: "Polo", name: "Polo Man Shirt ", baseprice: 50000, discount: 90, finalprice: 5000, color: "Red", size: "XL", description: "this is Sample Product", pic1: pic26, pic2: pic25, pic3: pic38, pic4: pic40 },
        { id: 6, maincategory: "Male", subcategory: "Jeans", brand: "Mufit", name: "Mufti Man Jeans Slim Fit", baseprice: 2000, discount: 10, finalprice: 1800, color: "Black", size: "SM", description: "this is Sample Product", pic1: pic16, pic2: pic11, pic3: pic13, pic4: pic7 },
        { id: 7, maincategory: "Male", subcategory: "Shirt", brand: "Adidas", name: "Adidas Man Shirt Slim Fit", baseprice: 5000, discount: 50, finalprice: 2500, color: "White", size: "SM", description: "this is Sample Product", pic1: pic40, pic2: pic38, pic3: pic25, pic4: pic26 },
        { id: 8, maincategory: "Female", subcategory: "Trouser", brand: "Mufti", name: "Mufti Woman Trouser Slim Fit", baseprice: 5000, discount: 50, finalprice: 2500, color: "Gray", size: "XS", description: "this is Sample Product", pic1: pic9, pic2: pic9, pic3: pic9, pic4: pic9 },
        { id: 9, maincategory: "Female", subcategory: "Tshirt", brand: "Gucci", name: "Gucci Woman Tshirt", baseprice: 1000, discount: 0, finalprice: 1000, color: "Black", size: "XL", description: "this is Sample Product", pic1: pic23, pic2: pic28, pic3: pic28, pic4: pic39 },
        { id: 10, maincategory: "Female", subcategory: "Jeans", brand: "Zara", name: "Zara Woman Jeans Regular Fit", baseprice: 4000, discount: 40, finalprice: 2600, color: "Green", size: "XS", description: "this is Sample Product", pic1: pic9, pic2: pic12, pic3: pic17, pic4: pic19 },
        { id: 11, maincategory: "Female", subcategory: "Jeans", brand: "Zara", name: "Zara Woman Tshirt Slim Fit", baseprice: 12000, discount: 50, finalprice: 6000, color: "Pink", size: "SM", description: "this is Sample Product", pic1: pic31, pic2: pic47, pic3: pic22, pic4: pic55 },
        { id: 12, maincategory: "Female", subcategory: "Tshirt", brand: "Adidas", name: "Adidas Woman Shirt Slim Fit", baseprice: 7000, discount: 50, finalprice: 3500, color: "Hot Pink", size: "MD", description: "this is Sample Product", pic1: pic55, pic2: pic55, pic3: pic55, pic4: pic55 },
        { id: 13, maincategory: "Female", subcategory: "Shirt", brand: "Nike", name: "Nike Woman Jeans Regular Fit", baseprice: 9000, discount: 90, finalprice: 900, color: "Blue", size: "MD", description: "this is Sample Product", pic1: pic37, pic2: pic37, pic3: pic37, pic4: pic37 },
        { id: 14, maincategory: "Female", subcategory: "Jeans", brand: "Nike", name: "Nike Woman Tshirt Slim Fit", baseprice: 5000, discount: 10, finalprice: 4500, color: "White", size: "XXXL", description: "this is Sample Product", pic1: pic17, pic2: pic18, pic3: pic19, pic4: pic53 },
        { id: 15, maincategory: "Female", subcategory: "Tshirt", brand: "Adidas", name: "Adidas Woman Shirt Slim Fit", baseprice: 8000, discount: 10, finalprice: 7200, color: "Black", size: "XL", description: "this is Sample Product", pic1: pic8, pic2: pic8, pic3: pic8, pic4: pic8 },
        { id: 16, maincategory: "Kids", subcategory: "Shirt", brand: "Polo", name: "Polo Kids Shirt Regular Fit", baseprice: 5000, discount: 50, finalprice: 2500, color: "Black", size: "X", description: "this is Sample Product", pic1: pic42, pic2: pic43, pic3: pic42, pic4: pic43 },
        { id: 17, maincategory: "Kids", subcategory: "Jeans", brand: "Mufti", name: "Mufti Kids Jeans ", baseprice: 5000, discount: 50, finalprice: 2500, color: "White", size: "LG", description: "this is Sample Product", pic1: pic48, pic2: pic48, pic3: pic48, pic4: pic48 },
        { id: 18, maincategory: "Kids", subcategory: "Trouser", brand: "Adidas", name: "Adidas Kids Trouser ", baseprice: 5000, discount: 50, finalprice: 2500, color: "Black", size: "LG", description: "this is Sample Product", pic1: pic1, pic2: pic1, pic3: pic1, pic4: pic1 },
        { id: 19, maincategory: "Kids", subcategory: "Trouser", brand: "Adidas", name: "Adidas Kids Trouser", baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "SM", description: "this is Sample Product", pic1: pic4, pic2: pic4, pic3: pic4, pic4: pic4 },
        { id: 20, maincategory: "Kids", subcategory: "Jeans", brand: "Polo", name: "Polo Kids Jeans ", baseprice: 5000, discount: 50, finalprice: 2500, color: "Black", size: "XL", description: "this is Sample Product", pic1: pic35, pic2: pic36, pic3: pic48, pic4: pic35 }
    ])
    return (
        <ProductContext.Provider value={{ products: [...products] }}>
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider