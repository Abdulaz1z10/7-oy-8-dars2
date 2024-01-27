import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
let date = sub(new Date(), {minutes: 10}).toISOString()
console.log(date)
const initialState = [
    {
    id: 1,
    title: "Learn Modern Redux Toolkit",
    date: date,
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    },
    content:"Стоимость электромобилей Chazor: 120 km Flagship — 341 660 000 сумов; 120 km Basic — 323 039 000 сумов.",
    },
];

const PostSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action){
                state.push(action.payload)
            },
            prepare({title,content}){
                return {
                    payload: {
                    id: nanoid(),
                    title: title,
                    content: content,
                    reactions: {
                        thumbsUp: 0,
                        heart: 0,
                        wow: 0,
                        coffee: 0,
                        rocket: 0,
                    },
                    date: new Date().toISOString(),
                    },
                };
            }
        },
        reactionAdded(state, action){
            const {userId, reaction} = action.payload
            let single_post = state.find(item=> item.id === userId)
            single_post.reactions[reaction] +=1
        }
    }
})

export const getAllPosts =(state)=> state.posts
export const {postAdded, reactionAdded} = PostSlice.actions
export default PostSlice.reducer