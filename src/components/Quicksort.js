import sleep from './Sleep'
import swap from './Swap'
import DynamicIsSorted from './DynamicIsSorted'

async function partition (props, low, high) {
    let pivot = props.array[high]
    let i = low - 1

    //console.log('in partition', props)
    for (let j = low; j <= high - 1; j++) {
        //console.log('in partition for loop', props.array)    
        if (props.array[j] < pivot) {
            i++
            props.setDisplayArray(props.array.map((value, index) => {
                //console.log(value)
                if (index === j || index === i){
                  return <div className='bar' style = {{height: `${value*props.heightMultiplier}px`, width: `${props.width}px`, backgroundColor: 'red'}} key={index} id={index}><div className="bar-text" style={{ fontSize:`${props.font}rem`}}>{value}</div></div>
                } else {
                  return <div className='bar' style = {{height: `${value*props.heightMultiplier}px`, width: `${props.width}px`}} key={index} id={index}><div className="bar-text" style={{ fontSize:`${props.font}rem`}}>{value}</div></div>
                }
            }))
            swap(props.array, i, j)
            props.setArray(props.array)
                
            await sleep(props.delay)
        }
    }
    props.setDisplayArray(props.array.map((value, index) => {
        if (index === i+1 || index === high){
          return <div className='bar' style = {{height: `${value*props.heightMultiplier}px`, width: `${props.width}px`, backgroundColor: 'red'}} key={index} id={index}><div className="bar-text" style={{ fontSize:`${props.font}rem`}}>{value}</div></div>
        } else {
          return <div className='bar' style = {{height: `${value*props.heightMultiplier}px`, width: `${props.width}px`}} key={index} id={index}><div className="bar-text" style={{ fontSize:`${props.font}rem`}}>{value}</div></div>
        }
    }))
    swap(props.array, i+1, high)
    props.setArray(props.array)
    //console.log('in partition end', props.array)
    await sleep(props.delay)
    return i + 1
}
function quickSort(props, low, high) {
  let index = 0
  quickSortMain(props, low, high)
  function quickSortMain(props, low, high) {
    if (low < high) {
        let paritionPromise = partition(props, low, high) 
        paritionPromise.then((partitionIndex)=> {
            quickSortMain(props, low, partitionIndex-1)
            quickSortMain(props, partitionIndex+1, high)
        })
    } else {
      index = DynamicIsSorted(index, props.array)
      
      if (index === props.array.length - 1) {
        props.setArray(props.array)
        props.setDisplayArray(props.array.map((value, index) => {
            return <div className='bar' style = {{height: `${value*props.heightMultiplier}px`, width: `${props.width}px`}} key={index} id={index}><div className="bar-text" style={{ fontSize:`${props.font}rem`}}>{value}</div></div>
        }))
        props.setDisplayState(false)
      }
    }
  }
}


export default quickSort



//props.array.every((value, i, array)=>{return i === array.length -1 || array[i] <= array[i+1]})