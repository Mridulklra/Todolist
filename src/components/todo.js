import React,{useState} from 'react';
import todoImage from './to1.jpg';


const Todo = () => {
    const [inputData,setInputData] = useState('');
    const [items,setItems] = useState([]);
    const addItem =()=>{
        if(!inputData){

        }
        else{ 
              setItems([...items,inputData])
              setInputData('')
    }}
    const deleteItem=(id)=>{
            const updateditems=items.filter((elem,ind)=>{
                return ind !== id;
            });
            setItems(updateditems);
    }
  return (
    <div className="todo-container">
      <div>
        <figure>
          <img src={todoImage} alt="Todo" />
          <figcaption>Add your List Here</figcaption>
        </figure>
        <div className="addItems">
          <input type="text" placeholder="Add Items..."
          value={inputData}
          onChange={(e)=> setInputData(e.target.value)} />
          <i className="fa-plus" title="Add Item" onClick={addItem}></i>
        </div>
        <div className="showitems">
            {
                items.map((elem,ind)=>{
                    return (
                        <div className="eachItem" key={ind}>
                        <h3>{elem}</h3>
                        <i className="fa-trash-alt add-btn" title="Delete Item" onClick={()=>deleteItem(ind)}></i>
                      </div>
                    )
                })
            }
         
        </div>
        <div className="showitems">
          <button className="effect">
            <span>CHECK LIST</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
