import React, { useState , useEffect } from 'react';
import './Home.css';
import { useStateValue } from './StateProvider';

function Home() {
    const [{ basket }, dispatch] = useStateValue();

    const url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
    }

  useEffect(() => {
    fetchApi()
  }, [])

  const addToBasket = () => {
    //dispatch some action
    dispatch({
        type: 'ADD_TO_BASKET',
        // todo: {
        //     id: id,
        //     title: title,
        //     image: image,
        //     price: price,
        //     rating: rating,
        // },
    });
}; 

    return (
        <div className="home">
            <div className="home__container">
                <div className="row">
                    { !todos ? 'Cargando' :
                    todos.map( (todo,index) => {
                        return <div className="box">
                                    <img  className="home__image" src={todo.thumb} 
                                    alt="" />{todo.title} 
                                    <div>$ {todo.normalPrice} </div>
                                    <button onClick={addToBasket}>Add to basket</button>
                                </div>
                    })
                    }
                </div>
               
            </div>
        </div>
    )
}

export default Home;
