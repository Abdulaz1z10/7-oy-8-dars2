import React from 'react'
import { useDispatch } from 'react-redux';
import { reactionAdded } from './PostSlice';
const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕️",
};
export default function ReactionsButtons({post}) {
  const dispatch = useDispatch()
    const ReactionsButton = Object.entries(reactionEmoji).map(([name, emoji])=>{
        return <button  className='btn btn-info m-2' onClick={()=>dispatch(reactionAdded({userId: post?.id, reaction: name}))}>{emoji}{post?.reactions[name]}</button>
    })
    console.log(ReactionsButton, 'btn')
  return (
    <div>
      <button>{ReactionsButton}</button>
    </div>
  )
}
