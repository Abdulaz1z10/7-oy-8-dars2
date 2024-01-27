import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getAllPosts, postAdded} from './PostSlice'
import TimeAgo from "./TimeAgo"
import ReactionsButtons from './ReactionsButtons'

export default function PostLists() {
    const posts = useSelector(getAllPosts)
    const dispatch = useDispatch()
    const renderPosts = posts.map((item, index)=>{
        return <div className='card my-3'key={index}>
            <div className='card-body'>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
                <TimeAgo time={item.date}/>
                <ReactionsButtons post={item}/>
            </div>
        </div>
    })
    const handleSubmit =(e)=>{
        e.preventDefault();
        let title = e.target[0].value
        let content = e.target[1].value
        dispatch(postAdded({title: title, content: content}))
    }
  return (
    <div className="container">
      <h1 className="text-center">Posts</h1>
      <div className="row">
        <div className="col-md-8">{renderPosts}</div>
      </div>
      <div className="col-md-4">
        <form onSubmit={handleSubmit}> 
          <input
            type="text"
            placeholder="Title..."
            className="form-control my-2"
          />
          <textarea className="form-control my-2" cols="30" rows="10" placeholder="Content..."></textarea>
          <button className="btn btn-success">save</button>
        </form>
      </div>
    </div>
  );
}
