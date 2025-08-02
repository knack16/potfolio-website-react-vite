import React,{useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //  fetch('https://api.github.com/users/knack16')
    //  .then(response => response.json())
    //  .then(data => {
    //    console.log(data);
    //    setData(data);
    //  })
    //  .catch(error => console.error('Error fetching data:', error));
    // }, [])

    const { userData, reposData } = useLoaderData();
    
  return (
    <div className="bg-white text-black min-h-screen px-4 sm:px-12 py-10 max-w-7xl mx-auto">
      

      <div className="flex flex-col lg:flex-row gap-10 ">
        {/* Left - Profile Section */}
        <div className="w-full lg:w-1/2 bg-gray-50 shadow-md rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <img src={userData.avatar_url} alt="Avatar" className="w-40 h-40 rounded-full border-4 border-orange-700 mb-4" />
          <h2 className="text-2xl font-bold">{userData.name}</h2>
          <p className="text-lg text-gray-600">{userData.bio}</p>
          <p className="mt-2 text-sm">📍 {userData.location === null ? "Pune, Maharashtra, India" : userData.location}</p>

          <div className="flex justify-center gap-6 mt-6 text-sm font-medium">
            <p>Repos: {userData.public_repos}</p>
            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
          </div>

          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-orange-700 hover:bg-orange-800 text-white py-2 px-6 rounded-lg shadow-md transition"
          >
            View Profile
          </a>
        </div>

        {/* Right - Repos Section */}
        <div className="w-full lg:w-1/2 bg-gray-50 shadow-md rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4 text-orange-700">Repositories</h3>
          <div className="space-y-4 max-h-[500px] overflow-y-auto">
            {reposData.map((repo) => (
              <div
                key={repo.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-600"
                >
                  {repo.name}
                </a>
                <p className="text-sm text-gray-700 mt-1">{repo.description || "No description provided."}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const [userRes, reposRes] = await Promise.all([
    fetch("https://api.github.com/users/knack16"),
    fetch("https://api.github.com/users/knack16/repos"),
  ]);

  const userData = await userRes.json();
  const reposData = await reposRes.json();

  return { userData, reposData };
};