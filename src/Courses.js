import React, { useState } from 'react';
import SearchBar from './SearchBar';

function ProductDialog({ product, onClose }) {
        const [newWindow, setNewWindow] = useState(false);
    
        const openInNewWindow = () => {
            const videoUrl = `https://player.vimeo.com/video/${product.vimeoId}`;
            const win = window.open(videoUrl, '_blank');
            win.focus();
        };
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-8 rounded-lg max-w-md overflow-y-auto">
                <img alt="ecommerce" className="w-full h-auto object-cover object-center rounded" src={product.image} />
                <div className="mt-4">

                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                    <div className="flex mb-4">
                        {/* Rating icons */}
                    </div>
                    <p className="leading-relaxed">{product.description}</p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        {/* Color and size selection */}
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="title-font font-medium text-2xl text-gray-900">{product.price}</span>
                        <button onClick={onClose} className="text-white bg-greene border-0 py-2 px-6 focus:outline-none hover:bg-greene rounded">Close</button>
                        {product.vimeoId && (
                            <button onClick={openInNewWindow} className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Open in new window</button>
                        )}
                    </div>
                    {product.vimeoId && (
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="aspect-w-16 aspect-h-9">
                            <iframe src={`https://player.vimeo.com/video/${product.vimeoId}`} width="360" height="115" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function Courses() {
    const [showAll, setShowAll] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const products = [
        {
            id: 1,
            name: "ASL 1-10 Numbers",

            description: "By the end of this program, you will learn how to sign numbers from 1 to 10",
            instructor: "Odette Swift: University of Cape Town",
            image: "1-10.png",
            vimeoId:"944148616"
        },
        {
            id: 2,
            name: "ASL 11-15 Numbers",
            category: "CATEGORY",
            description: "By the end of this program, you will learn how to sign numbers from 11 to 15",
            image: "11-15.png",
            vimeoId:"944153287"

        },
        {
            id: 3,
            name: "ASL 16-19 Numbers",
            category: "CATEGORY",
            description: "By the end of this program, you will learn how to sign numbers from 16 to 19",
            image: "16-19.png",
            vimeoId:"944166929"
        },
        {
            id: 4,
            name: "ASL 20-30 Numbers",
            category: "CATEGORY",
            description: "By the end of this program, you will learn how to sign numbers from 20 to 30",
            image: "20-30.jpeg",
            vimeoId:"944180580"
        },
        {
            id: 5,
            name: "25 most common signs in ASL",
            category: "CATEGORY",
            description: "This video will teach you 25 of the most common signs you will need to know for everyday conversation",
            image: "25.jpeg",
            vimeoId:"944172028"
        },
        {
            id: 6,
            name: "ASL days of the week",
            category: "CATEGORY",
            description: "In this video you will learn how to sign the DAYS OF THE WEEK in American Sign Language",
            image: "days.jpeg",
            vimeoId:"944171650"
        },
        {
            id: 7,
            name: "How to sign months of the year",
            category: "CATEGORY",
            description: "learn how to sign the months of the year in American Sign Language",
            image: "months.jpeg",
            vimeoId:"944171737"
        },
        {
            id: 8,
            name: "100 Basic Signs",
            category: "CATEGORY",
            description: " 100 Basic Signs You Should Know Starting Conversations in ASL",
            image: "100 basic.png",
            vimeoId:"945364307"
        },
        {
            id: 9,
            name: "ASL alphabets explained",
            category: "CATEGORY",
            description: " Learn how to sign the entire alphabet and avoid common mistakes along the way.",
            image: "alphabet.jpeg",
            vimeoId:"944171861"
        },
        {
            id: 10,
            name: "High Frequency Words",
            category: "CATEGORY",
            description: " In this lesson you will learn 10 of the most commonly used words and signs in ASL. ",
            image: "high frequency.jpeg",
            vimeoId:"945356830"
        },
        {
            id: 11,
            name: "Basic Sign Language Phrases",
            category: "CATEGORY",
            description: " In this lesson you will learn 25 basic common phrases in ASL. ",
            image: "common phrases.png",
            vimeoId:"945356986"
        },
        {
            id: 12,
            name: "Dangerous Hand Signs",
            category: "CATEGORY",
            description: " People across the world use their hand gestures to communicate some pretty nasty things - watch for the most DANGEROUS ones you could ever use in public.",
            image: "dangerous.png",
            vimeoId:"945356773"
        },
        // Add more products here if needed
    ];

    const filteredProducts = products.filter((product) => {
        const productName = product.name.toLowerCase();
        const searchQueryLower = searchQuery.toLowerCase();
        return productName.includes(searchQueryLower);
      });

    const openDialog = (product) => {
        setSelectedProduct(product);
        setShowDialog(true);
    };

    const closeDialog = () => {
        setShowDialog(false);
    };
    
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <div className="flex flex-wrap -m-4">
                    {showAll
                        ? filteredProducts.map(product => (
                            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden" onClick={() => openDialog(product)}>
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
                                </a>
                                <div className="mt-4">

                                    <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                                    <p className="mt-1">{product.instructor}</p>
                                </div>
                            </div>
                        ))
                        : filteredProducts.slice(0, 4).map(product => (
                            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden" onClick={() => openDialog(product)}>
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
                                </a>
                                <div className="mt-4">

                                    <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                                    <p className="mt-1">{product.instructor}</p>
                                </div>
                            </div>
                        ))}
                </div>
                {!showAll && (
                    <div className="flex justify-center mt-8">
                        <button onClick={() => setShowAll(true)} className="text-white bg-greeen border-0 py-2 px-4 focus:outline-none hover:bg-greene-600 rounded">Show More</button>
                    </div>
                )}
                {showDialog && <ProductDialog product={selectedProduct} onClose={closeDialog} />}
            </div>
        </section>
    );
}

export default Courses;