import React from 'react'
import Title from './Title'
import assets, { teamData } from '../assets/assets'
const Teams = () => {
  return (
    <div className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:white-text'> 
      <Title title={'Meet The Team'} desc={"A passionate team of experts dedicated to your brand's success"}/>

      <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5'>

        {teamData.map((team,index)=>(
            <div key={index} className='flex max-sm:flex-col items center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400'>
                <img src={team.image} className='w-12 h-12 rounded-full' alt=""/>
                <div className='flex-1'>
                    <h3 className='font-bold text-sm dark:text-white'>{team.name}</h3>
                    <p className='text-sm opacity-60 dark:text-white'>{team.title}</p>
                </div>
            </div>
        ))} 
      </div>
    </div>
  )
}

export default Teams
