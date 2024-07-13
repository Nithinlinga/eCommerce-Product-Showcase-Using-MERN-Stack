// import React, { useState, useEffect } from "react";
// import Layout from "../Components/Layout";
// import axios from "axios";
// import { Checkbox, Radio } from "antd";
// import { Prices } from "../Components/Prices";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [checked, setChecked] = useState([]);
//   const [radio, setRadio] = useState([]);
//   //get category
//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get(
//         "http://localhost:8080/api/v1/category/get-category"      );
//       if (data?.success) {
        
//         setCategories(data?.category);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(()=>{
//     getAllCategory();
//   },[])
//   //get all products
//   const getAllProducts = async () => {
//     try {
//       const { data } = await axios.get(
//         "http://localhost:8080/api/v1/product/get-products"
//       );
//       setProducts(data.products);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleFilter = (value, id) => {
//     let all = [...checked];
//     if (value) {
//       all.push(id);
//     } else {
//       all = all.filter((c) => c !== id);
//     }
//     setChecked(all);
//   };
//   useEffect(() => {
//     if (!checked.length || !radio.length) getAllProducts();
//   }, [checked.length, radio.length]);


//   //get filterd product
//   const filterProduct = async () => {
//     try {
//       const { data } = await axios.post("http://localhost:8080/api/v1/product/product-filters", {
//         checked,
//         radio,
//       });
//       setProducts(data?.products);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     if (checked.length || radio.length) filterProduct();
//   }, [checked, radio]);
//   return (
//     <Layout title={"ALL Products"}>
//       <div className="row mt-3">
//         <div className="col-md-2">
//           <h6 className="text-center">Filter By Category</h6>
//           <div className="d-flex flex-column ms-1">
//             {categories?.map((c) => (
//               <Checkbox
//                 key={c._id}
                
//                 onChange={(e) => handleFilter(e.target.checked, c._id)}
//               >
//                 {c.name}
//               </Checkbox>
//             ))}
//           </div>
//           <h6 className="text-center mt-4">Filter By Prices</h6>
//           <div className="d-flex flex-column ms-1">
//             <Radio.Group onChange={(e) => setRadio(e.target.value)}>
//               {Prices?.map((p) => (
//                 <div key={p._id}>
//                   <Radio value={p.array}>{p.name}</Radio>
//                 </div>
//               ))}
//             </Radio.Group>
//           </div>
//         </div>
//         <div className="col-md-9">
//           <h1 className="text-center">All Products</h1>
//           <div className="d-flex flex-wrap">
//             {products?.map((p) => (
//               <div
//                 className="card m-2 "
//                 style={{ width: "18rem" }}
//                 key={p.name}
//               >
//                 <img
//                   src={`http://localhost:8080/api/v1/product/get-photo/${p._id}`}
//                   className="card-img-top"
//                   key={p._id}
//                   alt={p.name}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{p.name}</h5>
//                   <p className="card-text">{p.description}</p>
//                   <button className="btn btn-danger ms-1">More Details</button>
//                   <button className="btn btn-primary ms-1">ADD TOfghjklhyhh CART</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Home;
