import React, { useState, useRef, useEffect } from 'react'
import Profile from './Profile';

type UserData = {
  login: string,
  avatar_url: string,
  location: string,
  bio: string,
  followers: number,
  following: number,
}

const App = () => {

  const [data, setData] = useState<UserData | null>(null);
  const name = useRef<HTMLInputElement | null>(null);
  const [username, setUsername] = useState<string>('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (name.current) {
      setUsername(name.current.value);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (username) {
        try {
          const response = await fetch(`https://api.github.com/users/${username}`);
          const resData = await response.json();
          setData(resData);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    
    fetchUser();
  }, [username]);
  

  return (
    <div className="flex items-center justify-center w-[310px] mx-auto mt-5">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex gap-[10px] w-[310px]">
          <input className='w-full outline outline-1 outline-[#343a41] p-1 rounded-md bg-transparent text-[#e9f0f6]' type='text' placeholder='Github username' ref={name} />
          <button className='outline outline-1 outline-[#343a41] p-1 rounded-md' onClick={handleClick}>🔎</button>
        </div>
        {data && <Profile data={data} />}
      </div>
    </div>
  );
}
  

export default App