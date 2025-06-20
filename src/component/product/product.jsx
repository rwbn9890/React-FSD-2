import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategories, nextPage } from '../../redux/products/Action';

const Product = () => {

    const products = useSelector((state) => state.products.product)
    const pageNo = useSelector((state)=>state.products.page.no)
    const categories = useSelector((state)=>state.products.categories)
    const dispatch = useDispatch()

    console.log(products)


    return (
        <div className='max-w-7xl mx-auto'>
            <div className="overflow-x-auto">
            <div class="px-6 pt-4 pb-2 flex">
                { categories.map((cat)=>(
                    <button onClick={ () =>dispatch(filterCategories(cat.slug))} class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{cat.name}</button>
                ))}
            </div>
            </div>
             
            <div className="grid grid-cols-4 gap-3">
                {
                    products.map((ele) => (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full" src={ele.thumbnail} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{ele.title}</div>
                                <p className="text-gray-700 text-base">
                                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ele.price}</span>
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                        Button
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex my-4 w-fit mx-auto">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    Prev
                </button>
                <button className="text-gray-800 font-bold py-2 border border-gray-400 px-4 ">
                    {pageNo}
                </button>
                <button onClick={() => dispatch(nextPage())} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                    Next
                </button>
            </div>
        </div>
    );
}

export default Product;
