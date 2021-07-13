import sleep from './Sleep'

async function binarySeach (props) {
  //console.log(props.searchValue, props.searchValueRefCurrent)
  let l = 0;
  let r = props.array.length - 1
  let mid
  //console.log(props.array)
  while (l <= r) {
      mid = Math.floor((r+l)/2)
      props.setDisplayArray(props.array.map((value, index) => {
        if (index === r || index === l || index === mid){
          return <div className='bar' style = {{height: `${value*props.heightMultiplier}px`, width: `${props.height}px`, backgroundColor: 'red'}} key={index} id={index}><div className="bar-text"  style={{fontSize:`${props.font}rem`}}>{value}</div></div>
        } else {
          return <div className='bar' style = {{height: `${value*props.heightMultiplier}px`, width: `${props.height}px`, fontSize:`${props.font}rem`}} key={index} id={index}><div className="bar-text" style={{fontSize:`${props.font}rem`}}>{value}</div></div>
        }
      }))
      await sleep(1000)
      if (props.searchValue > props.array[mid]) {
          l = mid + 1
      } else if (props.searchValue < props.array[mid]) {
          r = mid - 1
      } else {
        props.setDisplayArray(props.array.map((value, index) => {
          if (index === mid){
            return <div className='bar' style = {{height: `${value*props.heightMultiplier}px`, width: `${props.height}px`, backgroundColor: '#00B6D3'}} key={index} id={index}><div className="bar-text" style={{fontSize:`${props.font}rem`}}>{value}</div></div>
          } else {
            return <div className='bar' style = {{height: `${value*props.heightMultiplier}px`, width: `${props.height}px`}} key={index} id={index}><div className="bar-text" style={{fontSize:`${props.font}rem`}}>{value}</div></div>
          }
        }))
          console.log(`found ${props.searchValue}`)
          break
      }
      
  }
  console.log('done')
  props.setDisplayState(!props.displayStateRef.current)
  props.setSearchState(false)
}

export default binarySeach