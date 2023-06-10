import MyContext from '@context/MyContext';
// import getUserId from '@utils/getUserId';
import React, { useContext, useState } from 'react';

const StartCampaign = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [goalAmount, setGoalAmount] = useState(0);
  const [endDate, setEndDate] = useState('');
  const { email } = useContext(MyContext);

  // const userId = getUserId(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send start campaign request to backend API
    const response = await fetch('/api/start-campaign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        category,
        goalAmount,
        endDate,
        startDate: new Date().now(),
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
      <h2>Start Campaign</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor='goalAmount' className='form-label'>
            Goal Amount
          </label>
          <input
            type='number'
            className='form-control'
            id='goalAmount'
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='endDate' className='form-label'>
            End DAte
          </label>
          <input
            type='date'
            className='form-control'
            id='endDate'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
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
