import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";

const Add = () => {
  const [image,setImage] = useState(false);
  const [data,setData] = useState ({
    name:"",
    description:"",
    price:"",
    category:"Cement"
  })
  const onChangeHandler =(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))

  }
  useEffect((=>))
  return (
    <div className="add">
      <form className="flex-col">
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.u} alt="" height={70} width={70} />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Type here" />
        </div>
        <div className="add-product-description flex col">
          <p> Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category  flex-col">
            <p>Product Category</p>
            <select  onChange={onChangeHandler} name="category">
              <option value="Toilet">Toilet</option>
              <option value="Bathtub">Bathtub</option>
              <option value="Marble">Marble</option>
              <option value="Rod">Rod</option>
              <option value="Tile">Tile</option>
              <option value="Cement">Cement</option>
              <option value="Tap">Tap</option>
              <option value="Handle">Handle</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder="Rs 60" />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
