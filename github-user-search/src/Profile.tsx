import React from 'react';
import { UserData } from './types/UserData';

interface ProfileProps {
  data: UserData;
}

const Profile: React.FC<ProfileProps> = ({ data }) => {
  return (
    <div className='outline outline-1 outline-[#343a41] p-3 rounded-md w-[310px]'>
      <div className="flex gap-2">
        <div className="flex items-center justify-center">
          <img
            src={data.avatar_url}
            alt={`${data.login}'s avatar`}
            className='rounded-full object-cover'
            style={{ maxWidth: '70px', maxHeight: '70px' }}
          />
        </div>
        <div className="text-sm">
          <h2 className='text-[#707782] text-lg'>{data.login}</h2>
          <p className='text-[#e9f0f6]'>{data.location && (`📍 ${data.location}`)}</p>
          <div className="flex gap-1 text-[#e9f0f6]">
            <p>{data.followers} <span className='text-[#707782]'>follower</span></p>
            <p className='flex items-center justify-center w-1 h-4 text-[#e9f0f6]'>.</p>
            <p>{data.following} <span className='text-[#707782]'>following</span></p>
          </div>
          <p className='text-[#e9f0f6]'>📔 <span className='text-[#707782]'>Repos</span> {data.public_repos}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
