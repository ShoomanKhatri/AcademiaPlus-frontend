import React from 'react';

type ProfileCardProps = {
  name: string;
  role: string;
  profileImage: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, profileImage }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-32 object-cover" src={profileImage} alt={`${name}'s Profile`} />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
