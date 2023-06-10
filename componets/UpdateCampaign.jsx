import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const UpdatePopup = ({ onClose, selectedCampaign }) => {
  const [title, setTitle] = useState(selectedCampaign.title);
  const [description, setDescription] = useState(selectedCampaign.description);
  const [category, setCategory] = useState(selectedCampaign.category);
  const [goalamount, setGoalAmount] = useState(selectedCampaign.goalamount);
  const [enddate, setEndDate] = useState(selectedCampaign.enddate.slice(0,10));
const router = useRouter()

  const handleUpdate = async () => {
    // Prepare updated campaign data
    const updatedCampaign = {
     fundid: selectedCampaign.fundid,
      title,
      description,
      category,
      goalamount,
      enddate,
    };

    // Send update campaign request to backend API
    const response = await fetch('/api/updatecampaign', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCampaign),
    });

    // Handle response from backend
    if (response.ok) {
      // Handle successful campaign update
      // Close the update popup
      toast.success('Campaign updated successfully')
      onClose();
    //   router.refresh()
    } else {
      // Handle campaign update error
      toast.error('Error updating campaign')
    }
  };

  return (
 
    <div className="update-popup" style={{position:'fixed',top:0, display: 'flex', flexDirection: 'column', background: '#eee', padding: '2rem', width: '90%', justifyContent: 'center', height: '90%', margin: '3rem auto'}}>
      <h3>Update Campaign</h3>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Goal Amount</label>
          <input
            type="number"
            value={goalamount}
            onChange={(e) => setGoalAmount(e.target.value)}
            className="form-control"
          />
        </div>
       
        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            value={enddate}
            onChange={(e) => setEndDate(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpdate}>
          Update Campaign
        </button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdatePopup;
