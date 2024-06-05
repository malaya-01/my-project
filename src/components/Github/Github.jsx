import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    const data = useLoaderData()


    return (
        <div className="w-full h-full md:min-h-full flex items-center justify-center">
            <div className='flex justify-center items-center'>
                <div className='w-9/12 md:w-full lg:w-9/12 m-4 lg:flex-row md:flex-col flex-col flex justify-between p-4 gap-5 border-dashed rounded-md border-2'>
                    <div className='w-full'><img className='w-full rounded-md' src={data.avatar_url} alt="github picture" /></div>
                    <div className='w-full '>
                        <ul className='flex flex-col items-start'>
                            <li className=' text-gray-600'><span className='text-black font-semibold lg:text-xl text-sm'>Name:</span> <span className='lg:text-lg text-sm'>{data.name}</span></li>
                            <li className=' text-gray-600'><span className='text-black font-semibold lg:text-xl text-sm'>Github followers:</span> <span className='lg:text-l text-sm'>{data.followers}</span></li>
                            <li className=' text-gray-600'><span className='text-black font-semibold lg:text-xl text-sm'>Id:</span> <span className='lg:text-lg text-sm'>{data.id}</span></li>
                            <li className=' text-gray-600'><span className='text-black font-semibold lg:text-xl text-sm'>Type of user:</span> <span className='lg:text-lg text-sm'>{data.type}</span></li>
                            <li className=' text-gray-600'><span className='text-black font-semibold lg:text-xl text-sm'>Followers:</span> <Link className='lg:text-lg text-sm' to={data.followers_url}>followers</Link></li>
                            <li className=' text-gray-600'><span className='text-black font-semibold lg:text-xl text-sm'>Following:</span> <Link className='lg:text-lg text-sm' to={data.following_url}>following</Link></li>
                            <li className=' text-gray-600'><span className='text-black font-semibold lg:text-xl text-sm'>Organizations:</span> <Link className='lg:text-lg text-sm' to={data.organizations_url}>organizations</Link></li>
                            <li className=' text-gray-600'><span className='text-black font-semibold lg:text-xl text-sm'>Repos:</span> <Link className='lg:text-lg text-sm' to={data.repos_url}>repos</Link></li>
                            <li className=' text-gray-600'><span className='text-black font-semibold lg:text-xl text-sm'>Public Repos:</span> <span className='lg:text-lg text-sm'>{data.public_repos}</span></li>
                            <li className=' text-gray-600'><span className='text-black font-semibold lg:text-xl text-sm'>Blog:</span> <Link className='lg:text-lg text-sm' to={data.blog}>blog</Link></li>
                            <li className=' text-gray-600 flex'><span className='text-black font-semibold lg:text-xl text-sm'>Bio:</span> <span className='lg:text-lg text-sm'>{data.bio}</span></li>

                        </ul>

                    </div>
                </div>
            </div>
        </div>


        // <div className="flex justify-center">
        //     <div className="w-full md:w-1/2 bg-gray-600 m-4 flex justify-between p-4">
        //         <img className="w-10/12 md:w-1/3 rounded-md" src={data.avatar_url} alt="GitHub profile" />
        //         <div className="flex flex-col items-start">
        //             <h1 className="text-white text-xl">GitHub followers: {data.followers}</h1>
        //             <h1 className="text-xl text-white">{data.name}</h1>
        //             <h1 className="text-xl text-white">Public Repos: {data.public_repos}</h1>
        //         </div>
        //     </div>
        // </div>


    )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     return response.json()
// }

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/techoxoxo')
//     return response.json()
// }

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/malaya-01')
//     return response.json()
// }

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/wycats')
//     return response.json()
// }

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/ivey')
//     return response.json()
// }

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/bmizerany')
//     return response.json()
// }

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mojombo')
    return response.json()
}
