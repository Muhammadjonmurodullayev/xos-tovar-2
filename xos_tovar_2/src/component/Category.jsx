import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import "./category.css"
import {FaCheck} from "react-icons/fa6"
import Component from "./img/Component 1.svg"
import data from './data'
const Category=() => {
  let {id}=useParams()
  const [images,setImages]=useState(Array.from({length:104},(_,i) => i))
  const handleDelete=(id) => {
    setImages(images.filter((imageId) => imageId!==id))
  }
  return (
    <>
      {/* <p>{id}</p> */}
      <div className='a1'>
        <div className='app88'>
          <p className='dokonlar543'>Mahsulotlar</p>
          <div className='FaCheck4366' >
            <div className='FaCheck43'><FaCheck className='FaCheck' /></div>
            <p className='hisobot'>Shu oy {}ta yangi do'kon </p>
          </div>
        </div>
      </div>
      <h1>Mahsulotlar</h1>
      <div className="cart_counter12">
        {data.map((a,b)=>{
          return (
            <>
              {/* <p>{b}</p> */}
              <img className='box_name12' src={a.img} />
            </>
          )
       })} 
      </div>
    </>
  )
}
export default Category