import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
// import Counter from './components/counter/Counter';
import FeedBack from './components/feedBack/Feedback';
// import Lesson02 from './lessons/lesson_02/Lesson02';
// import MyForm from './components/myForm/MyForm';
//import Homework02 from './homeworks/homework02/Homework_02';
//import Lesson01 from './lessons/lesson_01/Lesson01';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
{/* <Lesson01 />*/}
    {/* <Lesson02 /> */}
    {/* <MyForm/> */}
    {/* <Homework02 /> */}
    {/* <Counter /> */}
    <React />
    <FeedBack />
  </> 
);

