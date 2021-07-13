// unused for now

async function quickSortIterative(props)
{
  let l = 0;
  let h = props.array.length - 1;
  let stack = new Array(h - l + 1);
  stack.fill(0);

  let top = -1;
  
  stack[++top] = l;
  stack[++top] = h;

  while (top >= 0) {
      h = stack[top--];
      l = stack[top--];

      let pivot = props.array[h];

      let i = (l - 1);
      for (let j = l; j <= h - 1; j++) {
          if (props.array[j] <= pivot) {
              i++;
              props.setDisplayArray(props.array.map((value, index) => {
                if (index === j || index === i){
                  return <div className='bar' style = {{height: `${value*HEIGHT_MULTIPLIER}px`, width: `${WIDTH}px`, backgroundColor: 'red'}} key={index} id={index}><div className="bar-text" style={{ fontSize:`${props.font}rem`}}>{value}</div></div>
                } else {
                  return <div className='bar' style = {{height: `${value*HEIGHT_MULTIPLIER}px`, width: `${WIDTH}px`}} key={index} id={index}><div className="bar-text" style={{ fontSize:`${props.font}rem`}}>{value}</div></div>
                }
              }))
              swap(props.array, i, j)
              props.setArray(props.array)
              
              await sleep(DELAY)
          }
      }
      props.setArray(props.array)
      props.setDisplayArray(props.array.map((value, index) => {
        if (index === i+1 || index === h){
          return <div className='bar' style = {{height: `${value*HEIGHT_MULTIPLIER}px`, width: `${WIDTH}px`, backgroundColor: 'red'}} key={index} id={index}><div className="bar-text" style={{ fontSize:`${props.font}rem`}}>{value}</div></div>
        } else {
          return <div className='bar' style = {{height: `${value*HEIGHT_MULTIPLIER}px`, width: `${WIDTH}px`}} key={index} id={index}><div className="bar-text" style={{ fontSize:`${props.font}rem`}}>{value}</div></div>
        }
      }))
      swap(props.array, i+1, h)
      
      await sleep(DELAY)
      let p = i + 1;
      if (p - 1 > l) {
          stack[++top] = l;
          stack[++top] = p - 1;
      }

      if (p + 1 < h) {
          stack[++top] = p + 1;
          stack[++top] = h;
      }
  }
  props.setArray(props.array)
      props.setDisplayArray(props.array.map((value, index) => {
          return <div className='bar' style = {{height: `${value*HEIGHT_MULTIPLIER}px`, width: `${WIDTH}px`}} key={index} id={index}><div className="bar-text" style={{ fontSize:`${props.font}rem`}}>{value}</div></div>
      }))
  props.setDisplayState(!props.displayStateRef.current)
}