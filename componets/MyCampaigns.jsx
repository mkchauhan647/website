import React, { useState, useEffect } from 'react';

const MyCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Fetch campaigns from backend API
    const fetchCampaigns = async () => {
      const response = await fetch('/api/my-campaigns');
      const data = await response.json();

      if (response.ok) {
        setCampaigns(data.campaigns);
      } else {
        // Handle error fetching campaigns
      }
    };

    fetchCampaigns();
  }, []);

  const handleDelete = async (campaignId) => {
    // Send delete campaign request to backend API
    const response = await fetch(`/api/delete-campaign?id=${campaignId}`, {
      method: 'DELETE',
    });

    // Handle response from backend
    if (response.ok) {
      // Handle successful campaign deletion
      setCampaigns(campaigns.filter((campaign) => campaign.id !== campaignId));
    } else {
      // Handle campaign deletion error
    }
  };

  const handleUpdate = async (campaignId) => {
    try {
      // Send update campaign request to backend API
      const response = await fetch(`/api/update-campaign?id=${campaignId}`, {
        method: 'PUT',
      });

      // Handle response from backend
      if (response.ok) {
        // Handle successful campaign update
        // Redirect or navigate to the updated campaign page
      } else {
        // Handle campaign update error
      }
    } catch (error) {
      // Handle error making the request
    }
  };

  return (
    <div className="container">
      <h2>My Campaigns</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Goal Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td>{campaign.title}</td>
              <td>{campaign.description}</td>
              <td>{campaign.category}</td>
              <td>{campaign.goalAmount}</td>
              <td>
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => handleUpdate(campaign.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(campaign.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCampaigns;
