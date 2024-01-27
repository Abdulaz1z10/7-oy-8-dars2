import React  from 'react'
import { Routes, Route } from 'react-router-dom';
import PostLists from './features/posts/PostLists';



export default function App() {
  return (
    <Routes>
      <Route path='' element={<PostLists/>}/>
    </Routes>
  );
}
