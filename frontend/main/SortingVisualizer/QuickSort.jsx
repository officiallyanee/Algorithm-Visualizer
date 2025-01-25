import { useState,useEffect } from 'react';
import './SortingVisualizer.css';
import io from 'socket.io-client';
import "./Modal.css";
import { useUser } from "../src/UserContext";
import Chat from "../src/Chat";

const socket = io('http://localhost:8081');


function QuickSort() {
  const {user} = useUser();

  const room="quicksort";
  const [showChat, setShowChat] = useState(false);
  
  useEffect(() => {
    console.log(user);
    if (user !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  },[]);

  const [modal, setModal] = useState(true);
  useEffect(() => {
    console.log('Modal state changed:', modal);
    if (modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }  
  }, [modal]);


  const [speedMs, setSpeedMs] = useState(2000);
  
  const code1="for (let i = 0; i < array.length-1; i++)"
  const code2="{ "
  const code13="  min_idx = i;"
  const code3="   for (let j = i+1; j < array.length ; j++){"
  const code4="        if (arr[j] < arr[min_idx])"
  const code5="        swap(array, j, j + 1); "
  const code12="}};"
  const code6="swap(array, j, j + 1)"
  const code7="{"
  const code8="   int temp=array[j];"
  const code9="   array[j]=array[j+1];"
  const code10="   array[j+1]=temp;"
  const code11="};"

  const PRIMARY_COLOR = 'turquoise';
  const SECONDARY_COLOR = 'red';

  const [barsNo , setBarsNo] = useState(8);
  async function swapDom(a, b) {
    await new Promise((resolve)=>{
    if (!a || !b || !a.parentNode || !b.parentNode) {
        console.error("Invalid DOM elements for swapping:", { a, b });
        return;
    }

    var aParent = a.parentNode;
    var bParent = b.parentNode;

    var aHolder = document.createElement("div");
    var bHolder = document.createElement("div");

    aParent.replaceChild(aHolder, a);
    bParent.replaceChild(bHolder, b);

    aParent.replaceChild(b, aHolder);
    bParent.replaceChild(a, bHolder);
    resolve()});
}



  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function resetArray() {
    setArray([]);
    const a = [];
    for (let i = 0; i < barsNo; i++) {
      a.push(randomIntFromInterval(5, 500));
    }
    setArray(a);
  };

 // Partition function
 async function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            // Await the swap
            await swap(arr, i, j);
        }
    }

    // Move pivot to its correct position
    await swap(arr, i + 1, high);
    return i + 1;
}


async function swap(arr, i, j) {
  if (i !== j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    console.log(`Swapping indices ${i} and ${j}`, arr);

    const arrayBars = document.getElementsByClassName('array-bar');
    if (!arrayBars[i] || !arrayBars[j]) {
        console.error("Invalid array bar indices for swap", { i, j });
        return;
    }

    const barOneIdx = i;
    const barTwoIdx = j;
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;

    await new Promise((resolve) => {
        barOneStyle.transform = `translateX(${30 * (j - i)}px)`;
        barTwoStyle.transform = `translateX(${-30 * (j - i)}px)`;

        setTimeout(() => {
            barOneStyle.transform = 'translateX(0)';
            barTwoStyle.transform = 'translateX(0)';

            const barOne = arrayBars[barOneIdx];
            const barTwo = arrayBars[barTwoIdx];
            if (!barOne || !barTwo) {
                console.error("DOM elements not found for swapping", { barOneIdx, barTwoIdx });
                resolve();
                return;
            }

            swapDom(barOne, barTwo);
            resolve();
        }, speedMs);
    });
}
}


async function quickSort(arr, low, high) {
    if (low < high) {
        let pi = await partition(arr, low, high);
        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);
    }
}





  const [array, setArray] = useState([350, 340, 430, 320, 410, 580 ,290 ,370]);
 

  return (
    <>
   
    <div>
    {modal && 
        (<div className="modal">
            <div onClick={()=>setModal(false)} className="overlay"></div>
            <div className="modal-content1">
              <h2> What is Quick Sort ?</h2>
              <p>
                content
              </p>
              <button className="close-modal1" onClick={()=>setModal(false)}>
              ×
              </button>
            </div>
          </div>)}
      <div className="array-container" style={{ position: "relative" ,left:"45%"}}>
      
    {array.map((value, idx) => (
       <div
           className="array-bar"
           key={idx}
           style={{
             backgroundColor: PRIMARY_COLOR,
             height: `${value}px`,
           }}></div>
       ))}
      </div>
      <div className="code" style={{ maxWidth: 350 ,
                    minWidth:300,
                     display:"inline",
                     justifyContent:"right"}}>
       <h3 style={{ fontWeight:300 , fontSize:25}}>Code</h3>
       <pre style={{ display:"inline"}}>
        <p id="code1">{code1}</p>  
        <p id="code2">{code2}</p>
        <p id="code13">{code13}</p>
        <p id="code3">{code3}</p>
        <p id="code4">{code4}</p>
        <p id="code5">{code5}</p>
        <p id="code12">{code12}</p>
        <p id="code6">{code6}</p>
        <p id="code7">{code7}</p>
        <p id="code8">{code8}</p>
        <p id="code9">{code9}</p>
        <p id="code10">{code10}</p>
        <p id="code11">{code11}</p>
       </pre>
      </div>
    </div>
    <div className="chat" style={{display:"flex", width:"20%",height:"90vh", borderColor:"black",borderWidth:"5px", borderStyle:"solid", position:"fixed", left:"0px", top:"0px"}} >
    {!showChat ? (
        <div className="joinChatContainer">
          <h3>login to ask doubts!</h3>
        </div>
      ) : (<div>
        <Chat socket={socket} user={user} room={room} />
       
      </div>
      )}
    </div>
    <div className="toolbox" style={{position:"absolute" , right:"0px",left:"0px",bottom:"0px", justifyContent:"center",padding:"5px"}}>
           <input type="number" placeholder="Length" onChange={(e) => { 
            if (e.target.value>0 && e.target.value<50){
              setBarsNo(e.target.value);
              setArray([]);
            }}}/>
           <input type="number" placeholder="Array Values" id="arrayValues"/>
           <button onClick={()=>{const value= document.getElementById('arrayValues').value; 
                                 if(0<value<500&& array.length<barsNo)
                                 setArray(a=>[...a, value]);
                                 document.getElementById('arrayValues').value="";}}>Add Value</button>
           <button onClick={resetArray}>Generate Random Array</button>
           <label>Animation Speed</label>
           <select name="animation-speed" id="speed" onChange={(e)=>{
            const s= 3000/e.target.value;
            setSpeedMs(s) }}>
            <option value="0.25">0.25</option>
            <option value="0.5">0.5</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="4">4</option>
          </select>
     
           <button onClick={()=>{quickSort(array, 0, array.length-1);}}>Selection Sort</button>
           <button onClick={() =>{setModal(true)} }  className="btn-modal"> Open</button>
     </div></>
  )
}
export default QuickSort