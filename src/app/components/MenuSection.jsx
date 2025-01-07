import React from 'react';
import Image from 'next/image';

const MenuSection = () => {
    const menuItems = [
        { name: 'Italian Source Mushroom', price: '$20.00' },
        { name: 'Fried Potatoes with Garlic', price: '$12.00' },
        { name: 'Tuna Roast Sauce', price: '$25.00' },
        { name: 'Roast Pork (4 Sticks)', price: '$15.00' },
        { name: 'Grilled Chicken Caesar Salad', price: '$18.00' },
        { name: 'Seafood Paella', price: '$28.00' },
        { name: 'Mushroom Risotto', price: '$22.00' },
        { name: 'BBQ Pulled Pork Sandwich', price: '$14.00' },
        { name: 'Spaghetti Carbonara', price: '$20.00' },
        { name: 'Vegetable Spring Rolls', price: '$10.00' },
        { name: 'Honey Glazed Ham', price: '$26.00' },
        { name: 'Butter Garlic Prawns', price: '$24.00' },
        { name: 'Classic Beef Burger', price: '$16.00' },
        { name: 'Thai Green Curry with Rice', price: '$18.00' },
        { name: 'Caprese Salad', price: '$12.00' }
    ];

    const newDishes = [
        { name: 'Salted Fried Chicken', price: '$20.00' },
        { name: 'Crab with Curry Sauce', price: '$12.00' },
        { name: 'Imperial Salmon Steak', price: '$25.00' },
        { name: 'Baked Potato Pizza', price: '$15.00' },
        { name: 'Grilled Shrimp Skewers', price: '$18.00' },
        { name: 'Beef Tenderloin with Herbs', price: '$30.00' },
        { name: 'Vegetable Stir Fry', price: '$10.00' },
        { name: 'Spicy Chicken Wings', price: '$14.00' },
        { name: 'Lobster Thermidor', price: '$35.00' },
        { name: 'Avocado and Quinoa Salad', price: '$12.00' },
        { name: 'Margherita Pizza', price: '$16.00' },
        { name: 'Lamb Chops with Mint Sauce', price: '$28.00' }
    ];

    return (
        <section id='menu' className="py-16 bg-gray-100 text-gray-900 ">
            <div className="container mx-auto px-6 lg:px-20 mt-12">
                <h2 className="text-4xl font-bold mb-24 text-center font-serif ">Explore Menu</h2>

              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center  ">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 font-serif ">Signature Dishes</h3>
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index} className="flex justify-between text-lg border-b border-gray-300 py-2">
                                    {item.name} <span className="font-bold">{item.price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Responsive Image with Flexbox Centering */}
                    <div className="flex justify-center">
                        <Image
                            src="/menu1.jpg"
                            alt="Signature Dish"
                            width={500}
                            height={100}
                            className="w-full max-w-xs md:max-w-md lg:max-w-lg  object-cover rounded-lg shadow-lg"
                            style={{ filter: "drop-shadow(20px 0px 4px #c0cc11ee)" }}
                        />
                    </div>
                </div>

                {/* New Dishes Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-16">
                    {/* Responsive Image with Flexbox Centering */}
                    <div className="flex justify-center">
                        <Image
                            src="/menu2.jpg"
                            alt="New Dish"
                            width={500}
                            height={100}
                            className="w-full max-w-xs md:max-w-md lg:max-w-lg  object-cover rounded-lg shadow-lg"
                            style={{ filter: "drop-shadow(20px 0px 4px #c0cc11ee)" }} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">New Dishes</h3>
                        <ul>
                            {newDishes.map((dish, index) => (
                                <li key={index} className="flex justify-between text-lg border-b border-gray-300 py-2">
                                    {dish.name} <span className="font-bold">{dish.price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
