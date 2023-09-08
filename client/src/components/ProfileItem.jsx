import React from 'react'

function ProfileItem(props) {
  return (
    <div className="flex flex-col w-full justify-center md:justify-start font-display my-2">
                    <p>{props.label}</p>
                <div className="text-2xl font-semibold">
                    {props.text}                   
                </div>               
                </div>
  )
}

export default ProfileItem