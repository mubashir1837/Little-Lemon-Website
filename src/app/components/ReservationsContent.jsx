"use client"
import React, { useState } from 'react';

function ReservationsContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    occasion: '',
    guests: '',
    date: '',
  });

  const [formError, setFormError] = useState({});

  const onChangeHandler = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const validateForm = () => {
    let err = {};
    if (formData.name === '') {
      err.name = '* Full name required!';
    }
    if (formData.email === '') {
      err.email = '* Email required!';
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(formData.email)) {
        err.email = 'Email not valid!';
      }
    }

    if (formData.telephone === '') {
      err.telephone = '* Phone number required!';
    } else {
      let phoneRegex =
        /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
      if (!phoneRegex.test(formData.telephone)) {
        err.telephone = 'Telephone number not valid!';
      }
    }

    if (formData.guests === '') {
      err.guests = '* Please specify number of guests!';
    }
    if (formData.date === '') {
      err.date = '* Please specify date and time!';
    }

    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.table(formData);

    let isValid = validateForm();
    if (isValid) {
      alert('Submitted');
    }
  };

  return (
    <div id='reservation' className=" from-black/50 to-black/80 bg-cover bg-center bg-[url('https://a.cdn-hotels.com/gdcs/production141/d778/6b200721-9661-4680-aca2-d6e33ce46cf0.jpg')] w-full">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:w-4/5 mx-auto py-20 px-4">
        <div className="text-white lg:w-3/5 mt-10">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-6">
            Experience the perfect balance of tradition and luxury.
          </h2>
          <p className="mb-4">
            At Little Lemon, we take great pride in providing our customers
            with the greatest luxurious experience with a touch of{' '}
            <em>tradition</em>.
          </p>
          <p>Book a table with us to share in this experience.</p>
        </div>
        <div className="bg-white text-gray-900 rounded-lg p-8 shadow-lg lg:w-2/5">
          <h1 className="text-2xl font-bold mb-4">Reserve a Table</h1>
          <p className="text-sm mb-8">
            Please fill in and submit the form to book your reservation at
            Little Lemon.
          </p>
          <form onSubmit={onSubmitHandler}>
            <fieldset className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  onChange={onChangeHandler}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                />
                <span className="text-red-600 text-sm">{formError.name}</span>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="text@email.com"
                  name="email"
                  onChange={onChangeHandler}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                />
                <span className="text-red-600 text-sm">{formError.email}</span>
              </div>
              <div className="space-y-2">
                <label htmlFor="telephone" className="font-medium">
                  Telephone
                </label>
                <input
                  type="tel"
                  placeholder="+233000000000"
                  name="telephone"
                  onChange={onChangeHandler}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                />
                <span className="text-red-600 text-sm">{formError.telephone}</span>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="occasion" className="font-medium">
                    Occasion (optional)
                  </label>
                  <select
                    name="occasion"
                    onChange={onChangeHandler}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                  >
                    <option value="select">Select occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="guests" className="font-medium">
                    Guests
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    name="guests"
                    onChange={onChangeHandler}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                  />
                  <span className="text-red-600 text-sm">{formError.guests}</span>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="date" className="font-medium">
                  Date & Time
                </label>
                <input
                  type="datetime-local"
                  name="date"
                  onChange={onChangeHandler}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                />
                <span className="text-red-600 text-sm">{formError.date}</span>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-700 transition"
              >
                Reserve
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReservationsContent;