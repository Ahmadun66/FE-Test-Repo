import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteproduct, getListProduct } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

function Product() {
    const products = useSelector(state => state.product.products);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListProduct());
    }, [dispatch]);

    //DELETE DATA BUTTON
    const deleteData  = async(e, id) => {
        e.preventDefault(); // Menghentikan perilaku default
        try {
            const { success } = await dispatch(deleteproduct(id)); // Asumsi deleteProduct adalah action yang benar
            if (success) {
                dispatch(getListProduct()); // Memuat ulang daftar produk
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    } 
    
    return (
        <>

            <div className='w-full flex justify-between items-center mb-10'>
                <div>
                    <h1>List Product</h1>
                </div>
                <Link to='/addproduct' className='bg-gray-500 p-3 rounded-lg'>
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M10 0C10.5523 0 11 0.447715 11 1V9H19C19.5523 9 20 9.44771 20 10C20 10.5523 19.5523 11 19 11H11V19C11 19.5523 10.5523 20 10 20C9.44772 20 9 19.5523 9 19V11H1C0.447715 11 0 10.5523 0 10C0 9.44771 0.447715 9 1 9H9V1C9 0.447715 9.44772 0 10 0Z"
                        />
                    </svg>
                </Link>
            </div>
            <div className="relative overflow-x-auto w-full shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Product name</th>
                            <th scope="col" className="px-6 py-3">Category</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((data, i) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={i}>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{data.nameProduct}</td>
                                <td className="px-6 py-4">{data.category}</td>
                                <td className="px-6 py-4">Rp. {data.price}</td>
                                <td className="px-6 py-4">{data.description}</td>
                                <td className="px-6 py-4 text-start space-x-3">
                                    <Link to={`/editproduct/${data._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    <button onClick={(e) => deleteData(e, data._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Product;
