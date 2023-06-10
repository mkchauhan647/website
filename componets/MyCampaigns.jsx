// import React, { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';

// const MyCampaigns = () => {
//   const [campaigns, setCampaigns] = useState([]);

//   useEffect(() => {
//     // Fetch campaigns from backend API
//     const fetchCampaigns = async () => {
//       const response = await fetch('/api/viewcampaigns');
//       const data = await response.json();

//       if (response.ok) {
//         setCampaigns(data.campaigns);
//       } else {
//         // Handle error fetching campaigns
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   const handleDelete = async (campaignId) => {
//     // Send delete campaign request to backend API
//     const response = await fetch(`/api/deletecampaign?fundid=${campaignId}`, {
//       method: 'DELETE'
//     });

//     // Handle response from backend
//     if (response.ok) {
//       // Handle successful campaign deletion
//       toast.success("Campaign deleted succesfully")
//       setCampaigns(campaigns.filter((campaign) => campaign.fundid !== campaignId));

//     } else {
//       // Handle campaign deletion error
//     }
//   };

//   const handleUpdate = async (campaignId) => {
    
     

//   };

//   return (
//     <div className="container">
//       <h2>My Campaigns</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Category</th>
//             <th>Current Amount</th>
//             <th>Goal Amount</th>
//             <th>End Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {campaigns.map((campaign) => (
//             <tr key={campaign.id}>
//               <td>{campaign.title}</td>
//               <td>{campaign.description}</td>
//               <td>{campaign.category}</td>
//               <td>{campaign.currentamount}</td>
//               <td>{campaign.goalamount}</td>
//               <td>{campaign.enddate?.slice(0,10)}</td>
//               <td>
//                 <button
//                   className="btn btn-primary mr-2"
//                   onClick={() => handleUpdate(campaign.id)}
//                 >
//                   Update
//                 </button>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => handleDelete(campaign.fundid)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyCampaigns;




import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import UpdatePopup from './UpdateCampaign';
import { useRouter } from 'next/navigation';

const MyCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null)
const router = useRouter()
const fetchCampaigns = async () => {
  const response = await fetch('/api/viewcampaigns');
  const data = await response.json();

  if (response.ok) {
    setCampaigns(data.campaigns);
  } else {
    // Handle error fetching campaigns
  }
};
  useEffect(() => {
    // Fetch campaigns from backend API
   

    fetchCampaigns();
  }, []);

  const handleDelete = async (campaignId) => {
    // Send delete campaign request to backend API
    const response = await fetch(`/api/deletecampaign?fundid=${campaignId}`, {
      method: 'DELETE'
    });

    // Handle response from backend
    if (response.ok) {
      // Handle successful campaign deletion
      toast.success('Campaign deleted successfully');
      setCampaigns(campaigns.filter((campaign) => campaign.fundid !== campaignId));
    } else {
      // Handle campaign deletion error
    }
  };

  const handleUpdate = (campaign) => {
    setSelectedCampaignId(campaign.fundid);
    setSelectedCampaign(campaign)
    setShowUpdatePopup(true);
  };

  const handleUpdatePopupClose = () => {
    setShowUpdatePopup(false);
  fetchCampaigns()
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
            <th>Current Amount</th>
            <th>Goal Amount</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td>{campaign.title}</td>
              <td>{campaign.description}</td>
              <td>{campaign.category}</td>
              <td>{campaign.currentamount}</td>
              <td>{campaign.goalamount}</td>
              <td>{campaign.enddate?.slice(0, 10)}</td>
              <td>
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => handleUpdate(campaign)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(campaign.fundid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showUpdatePopup && (
        <UpdatePopup campaignId={selectedCampaignId} selectedCampaign={selectedCampaign} onClose={handleUpdatePopupClose} />
      )}
    </div>
  );
};

export default MyCampaigns;

