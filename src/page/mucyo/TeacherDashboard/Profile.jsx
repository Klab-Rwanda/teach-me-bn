import { useState, useEffect } from 'react';

function ProfilePage() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch the user's profile data from an API endpoint
    fetch('/api/profile')
      .then(response => response.json())
      .then(data => setProfileData(data));
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{profileData.name}</h1>
      <p>{profileData.bio}</p>
      <p>{profileData.email}</p>
      <p>{profileData.website}</p>

      <button>Edit Profile</button>
    </div>
  );
}

export default ProfilePage;
