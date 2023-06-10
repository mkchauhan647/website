// 'use client'
// import MyContext from '@context/MyContext';
// import getUserId from '@utils/getUserId';
import {useState } from 'react';
import { ToastContainer } from 'react-toastify';

const StartCampaign = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [goalamount, setgoalamount] = useState(0);
  const [enddate, setenddate] = useState('');
  const [email, setEmail]  = useState('');
//   const { email } = useContext(MyContext);

  // const userId = getUserId(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email)
    // Send start campaign request to backend API
    const response = await fetch('/api/startcampaign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        title,
        description,
        category,
        goalamount,
        enddate,
        startdate: new Date(),
        // userId: userId,
      }),
    });

    // Handle response from backend
    if (response.ok) {
      // Handle successful campaign creation
      // Redirect or show success message
    } else {
      // Handle campaign creation error
      // Display error message to the user
    }
  };

  return (
    <div className='container'>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <h2>Start Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='text'
            className='form-control'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Title
          </label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <textarea
            className='form-control'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className='mb-3'>
          <label htmlFor='category' className='form-label'>
            Category
          </label>
          <input
            type='text'
            className='form-control'
            id='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='goalamount' className='form-label'>
            Goal Amount
          </label>
          <input
            type='number'
            className='form-control'
            id='goalamount'
            value={goalamount}
            onChange={(e) => setgoalamount(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='enddate' className='form-label'>
            End DAte
          </label>
          <input
            type='date'
            className='form-control'
            id='enddate'
            value={enddate}
            onChange={(e) => setenddate(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Start Campaign
        </button>
      </form>
    </div>
  );
};

export default StartCampaign;
