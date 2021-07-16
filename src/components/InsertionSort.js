import sleep from './Sleep'
import swap from './Swap'

async function insertionSort (props) {
    for (let i = 1; i < props.array.length; i++) {
      for (let j = i; j >= 0 && props.array[j-1] > props.array[j] ; j--) {
        
        
        props.setDisplayArray(props.array.map((value, index) => {
          if (index === j || index === j-1){
            return <div className='bar' style = {{height: `${value*props.heightMultiplier}px`, width: `${props.width}px`, backgroundColor: 'red'}} key={index} id={index}><div className="bar-text" style={{ fontSize:`${props.font}px`}}>{value}</div></div>
          } else {
            return <div className='bar' style = {{height: `${value*props.heightMultiplier}px`, width: `${props.width}px`}} key={index} id={index}><div className="bar-text" style={{ fontSize:`${props.font}px`}}>{value}</div></div>
          }
        }))
        swap(props.array, j-1, j)
        props.setArray(props.array)
        //swap(props.arrayDisplay, j-1, j)
        //swapDisplay({array: props.arrayDisplay, setArray: props.setDisplayArray, i: j-1, j: j})
        //props.setDisplayArray(props.arrayDisplay)
        //console.log(j)
        
        await sleep(props.delay)
      }
    }
    props.setArray(props.array)
        props.setDisplayArray(props.array.map((value, index) => {
            return <div className='bar' style = {{height: `${value*props.heightMultiplier}px`, width: `${props.width}px`}} key={index} id={index}><div className="bar-text" style={{ fontSize:`${props.font}px`}}>{value}</div></div>
        }))
    props.setDisplayState(!props.displayStateRef.current)
  }

  export default insertionSort