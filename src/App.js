import './styles/global.css'
//import { useState } from 'react'
import { useEffect } from 'react'
import useState from 'react-usestateref'
import Button from './components/Button'
import binarySearch from './components/BinarySearch'
import insertionSort from './components/InsertionSort'
import quickSortMain from './components/Quicksort'
let DELAY = 40;
const MIN_VALUE_GENERATED = 10;
const MAX_VALUE_GENERATED = 250;
let WIDTH_CONSTANT = window.innerWidth;
const WIDTH_MULTIPLIER = 0.7
const HEIGHT_MULTIPLIER = 1.0;
let WIDTH = WIDTH_MULTIPLIER*WIDTH_CONSTANT/(50)

const generate = (min, max, num) => { 
  let array = [];


  for (let i = 0; i < num; i++){
    let value = Math.floor(Math.random() * max) + min
    array.push(value)
  }
  return array
}


function useWindowSize(props) {
  const [size, setSize] = useState ([window.innerHeight, window.innerWidth])
  
    useEffect(() => {
      if (!props.displayState) {
        const handleResize = () => {
          setSize([window.innerHeight, window.innerWidth])
          WIDTH_CONSTANT = window.innerWidth
          WIDTH = WIDTH_MULTIPLIER*WIDTH_CONSTANT/(props.arrayRef.current.length)
          if (WIDTH / 3 >= 7 && WIDTH / 3 <= 10) {
            props.font = WIDTH / 3
          } else if (WIDTH / 3 < 7){
            props.font = 0
          } else { 
            props.font = 10
          }
          // console.log(WIDTH, props.font)
          props.setDisplayArray(props.arrayRef.current.map((value, index) => {
            return <div className='bar' style = {{height: `${value*HEIGHT_MULTIPLIER}px`, width: `${WIDTH}px`}} key={index} id={index}><div className="bar-text" style={{ fontSize:`${props.font}px`}}>{value}</div></div>
          }))
        }
        window.addEventListener("resize", handleResize)
        return () => {
          window.removeEventListener('resize', handleResize)
        }
      }
    }, [])
  return size
}

function calcFontSize() {
  let font = 0
  // console.log(WIDTH / 3)
  if (WIDTH / 3 >= 7 && WIDTH / 3 <= 10) {
    font = WIDTH / 3
  } else if (WIDTH / 3 < 7){
    font = 0
  } else { 
    font = 10
  }
  return font
}

function App() {
  const [arraySize, setArraySize] = useState(50)
  const [array, setArray, arrayRef] = useState(generate(MIN_VALUE_GENERATED,MAX_VALUE_GENERATED,arraySize))
  
  let font = calcFontSize()
  const [arrayDisplay, setDisplayArray, arrayDisplayRef] = useState(array.map((value, index) => {
    return <div className='bar' style = {{height: `${value*HEIGHT_MULTIPLIER}px`, width: `${WIDTH}px`}} key={index} id={index}><div className="bar-text" style={{ fontSize:`${font}px`}}>{value}</div></div>
  }))
  
  const [displayState, setDisplayState, displayStateRef] = useState(false)
  const [searchState, setSearchState] = useState(false)
  const [searchValue, setSearchValue, searchValueRef] = useState(0)
  const [isSorted, setIsSorted, setIsSortedRef] = useState(false)
  const [displayHeight, displayWidth] = useWindowSize({array: array, arrayRef: arrayRef, setDisplayArray: setDisplayArray, font: font, displayState: displayState})
  //console.log(array)
  let sortProps = {
    font: font,
    array: array, 
    setArray: setArray, 
    arrayDisplay: arrayDisplay, 
    setDisplayArray: setDisplayArray, 
    setDisplayState: setDisplayState,
    displayStateRef: displayStateRef,
    delay: DELAY,
    width: WIDTH,
    heightMultiplier: HEIGHT_MULTIPLIER,
  }
  let searchProps = {
    font: font, 
    setSearchState: setSearchState,
    searchValue: searchValue, 
    searchValueRefCurrent: searchValueRef.current, 
    array: array, 
    setArray: setArray, 
    arrayDisplay: arrayDisplay, 
    setDisplayArray: setDisplayArray, 
    setDisplayState: setDisplayState, 
    displayStateRef: displayStateRef
  }

  function insertionSortArray() {
    setSearchState(false)
    setDisplayState(!displayStateRef.current)
    insertionSort(sortProps)
    setIsSorted(true)
  }

  function quickSortArray(){
    setSearchState(false)
    setDisplayState(!displayStateRef.current)
    quickSortMain(sortProps, 0, array.length - 1)
    setIsSorted(true)
  }

  function binarySearchArray(){
    setDisplayState(!displayStateRef.current)
    setSearchState(true)
    // want to generate a random value to search (one that could or could not be in the array), but want it the random generation to favor an element in the array
    let value = Math.floor(Math.random()*(6))
    console.log(value)
    setSearchValue(value < 4 ? array[Math.floor(Math.random()*(array.length-1))] : Math.floor(Math.random()*MAX_VALUE_GENERATED + MIN_VALUE_GENERATED))
    //console.log(searchValue, searchValueRef)
    searchProps.searchValue = searchValueRef.current
    binarySearch(searchProps)
  }
  const clickGenerate = () =>{
    // console.log(window.outerWidth, window.innerWidth)
    DELAY = 10*(200/(arraySize))
    WIDTH = WIDTH_MULTIPLIER*WIDTH_CONSTANT/(arraySize)
    setArray(generate(MIN_VALUE_GENERATED,MAX_VALUE_GENERATED,arraySize))
    setSearchState(false)
    setIsSorted(false)
    setDisplayArray(arrayRef.current.map((value, index) => {
      return <div className='bar' style = {{height: `${value*HEIGHT_MULTIPLIER}px`, width: `${WIDTH}px`}} key={index} id={index}><div className="bar-text" style={{ fontSize:`${calcFontSize()}px`}}>{value}</div></div>
    }))
    //clickGenerateDisplay()
  }


  return (
    <div className="main">
      {/* {displayHeight}\n
      {displayWidth}\n
      {WIDTH_CONSTANT} */}
      <div className="buttons">
        <span>{displayState && !searchState && `Sorting ${array.length} elements`} {!displayState && !searchState && `${arraySize} elements`}  </span>
        {!displayState && <input type = "range" min ="10" max ="200" value = {arraySize} onChange = {(event)=>{
          setArraySize(event.target.value)
        }}></input>}
        {!(displayState) &&<Button onClickFunction = {() => {clickGenerate()}} bgColor="white" color="black" radius="5px" text="generate array"></Button>}
        {!(displayState) && <Button onClickFunction = {insertionSortArray} bgColor="white" color="black" radius="5px" text="insertion sort"></Button>}
        {!(displayState) && <Button onClickFunction = {quickSortArray} bgColor="white" color="black" radius="5px" text="quicksort"></Button>}
        {!(displayState) && <Button onClickFunction = {binarySearchArray} bgColor="white" color="black" radius="5px" text="binary search" disabled={!isSorted}></Button>}
      </div>
      {(searchState) && <div className='search-status'>searching for: {searchValue}</div>}
      <div className='array-display'>
        {arrayDisplay}
      </div>
    </div>
  );
}



export default App;


// old way of displaying
// setDisplayArray(arrayRef.current.map((value, index) => {
//   return <div className='bar' style = {{height: `${HEIGHT}px`, width: `${value*WIDTH_MULTIPLIER}px`, fontSize:`${arrayRef.current.length > 90 ? 0 : 1}rem`}} key={index} id={index}>{value}</div>
// }))