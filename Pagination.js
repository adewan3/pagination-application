import React, { useEffect, useState } from 'react';
import './style/style.css';


const Pagination = () => {

  const [prod, setProd] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=>{

    const fetchProducts = async()=>{
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      console.log(data.products);
      setProd(data.products);
    }

    fetchProducts();

  },[])

  const handlePage = (val)=>{
    setPage(val);

  }
   
  return (
    <div>
    {
      prod.length>0 && <div className='products'>
      {
        prod.slice(page*10-10, page*10).map((p, index)=>(
           <span className='products__single' key={p.id}>
            <img src={p.thumbnail} alt={prod.title}/>
            <span>{p.title}</span>
            </span>
        ))
      }
      </div>
    }
    {
      prod.length>0&&(<div className='pagination'>
        <span>◀</span>
        {[...Array(prod.length/10)].map((_,i)=>{return <span key={i} onClick={()=>handlePage(i+1)}>{i+1}</span>})}
        <span>▶</span>
      </div>)
    }
    </div>
  )
}

export default Pagination
