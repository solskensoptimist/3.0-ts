// interface Request {
//     data: Credentials,
//         method: "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH",
//         url: string,
// }
//
//
// interface Credentials {
//     email: string,
//         password: string,
// }

// Lägg alla funktioner här som i sin tur anropar actions.. SE EXEMPEL:

// import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from 'actions';
//
// function fetchProducts() {
//     return dispatch => {
//         dispatch(fetchProductsPending());
//         fetch('https://exampleapi.com/products')
//             .then(res => res.json())
//             .then(res => {
//                 if(res.error) {
//                     throw(res.error);
//                 }
//                 dispatch(fetchProductsSuccess(res.products);
//                 return res.products;
//             })
//             .catch(error => {
//                 dispatch(fetchProductsError(error));
//             })
//     }
// }
//
// export default fetchProducts;
