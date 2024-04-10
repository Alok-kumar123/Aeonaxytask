import React, { useState, useEffect } from 'react';
import './App.css';
 
import LoadingBar from './components/Loading';
 
import Question from './components/Multiform';
import Nextfrom from './components/nextfrom';
import Nextonextfrom from './components/Nextonextfrom';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNextFrom, setShowNextFrom] = useState(false);
  const [showNextOnNextFrom, setShowNextOnNextFrom] = useState(false);

  const questions = [
    {
      question: "Which describes you best?",
      mini:"This will help us personalize your experience.",
      options: [
        { label: " Student or soon to be enrolled", value: "student",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pHPSZ11hvU6XYKd9QNZ9sfXxeMRuUqNF9jRiRQWkhg&s" },
        { label: " Professional pursuing a career", value: "professional",url:"https://cdn-icons-png.flaticon.com/512/700/700674.png" },
        { label: " Parent of a school-age child", value: "parent",url:"https://cdn-icons-png.flaticon.com/512/4042/4042356.png" },
        { label: " Lifelong learner", value: "lifelong" , url:"https://w7.pngwing.com/pngs/41/862/png-transparent-student-higher-education-study-skills-learning-products-people-logo-teacher.png"},
        { label: " Teacher", value: "teacher", url:"https://w7.pngwing.com/pngs/221/403/png-transparent-teacher-education-computer-icons-teacher-education-student-teacher-angle-text-class.png" },
        { label: " Other", value: "other", url:"https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png" }
      ]
    },
    // Add more questions here...
    {
      question: "Which are you most interested in ?",
      mini: "choose just one. This will help us get you started (but won't limit your experience).",
      options: [
        { label: " Learning specific skills to advance my career", value: "student", url:"https://media.istockphoto.com/id/1491754746/vector/business-growth-chart-logo-with-arrow-bar-and-line-chart-diagram.jpg?s=612x612&w=0&k=20&c=kfZKV3WUirRRb_dEbda8mUmbTQmgiPdApeTwRDwt1ew=" },
        { label: " Exploring new topics I'm interested in", value: "professional",url:"https://png.pngtree.com/png-vector/20210330/ourmid/pngtree-math-png-image_3166138.jpg" },
        { label: " Refreshing my math foundations", value: "parent", url:"https://i.pinimg.com/736x/6c/2d/40/6c2d40e51b303afa827ba31f73b48223.jpg" },
        { label: " Exercising my brain to stay sharp", value: "lifelong" , url:"https://i.pinimg.com/550x/6a/8f/8f/6a8f8f9f5f34560405de991efefd6e82.jpg"},
        { label: " Something else", value: "teacher", url:"https://media.istockphoto.com/id/1333818794/vector/questions-and-answers-flat-icon-flat-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=Asu3-XD5iAipkCRQ8FwE76EGiMbqFdLKHxIFiM8vUOM=" }, 
      ]
    },
    {question: "You're in the right place",
     mini: "Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.",
     },
    {question: "What is your math comfort level?",
     mini: "Choose the highest level you feel confident in. You can always adjust later.",
     type:"math",
     options: [
      { label: "[5 \\times (1/2)] = ? \\text{Arithmetic Introductory}", value: "student" },
       
       
    ]},
    {question:"You're on your way",
     mini:'"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."',
     author:"Jacob S."},
  ];


  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      // If it's the last question, show Nextfrom page
      setShowNextFrom(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  useEffect(() => {
    if (showNextFrom) {
      // Set a timer to switch to Nextonextfrom after 30 seconds
      const timer = setTimeout(() => {
        setShowNextFrom(false);
        setShowNextOnNextFrom(true);
      }, 1000); // 30 seconds
      // Clear timer on component unmount or if Nextfrom page is closed
      return () => clearTimeout(timer);
    }
  }, [showNextFrom]);

  return (
    <>
      {!showNextFrom && !showNextOnNextFrom && (<><LoadingBar currentQuestionIndex={currentQuestionIndex} totalQuestions={questions.length} 
                                                       onPrevious={handlePreviousQuestion}/>
      
        <Question
          question={questions[currentQuestionIndex]}
          onNext={handleNextQuestion}
          onPrevious={handlePreviousQuestion}
        isFirstQuestion={currentQuestionIndex === 0} // Pass isFirstQuestion prop
        />
      </>)}
      {showNextFrom && (
        <Nextfrom />
      )}
      {showNextOnNextFrom && (
        <Nextonextfrom />
      )}
    </>
  );
}

export default App;
