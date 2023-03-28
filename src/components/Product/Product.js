import React, { useEffect, useState } from "react";
import { SlBasket } from "react-icons/sl";
import { addToBasket } from "../../store/slices/basketSlice";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";

const Product = ({ id, price, img, count, active }) => {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(true);
  useEffect(() => {
    setModalActive(false);
  }, []);
  const addBasket = (e) => {
    dispatch(addToBasket({ id, price, img, count, active }));
    e.target.classList.add("active");
    e.currentTarget.classList.add("active");
  };
  return (
    <div className="product">
      <div className="img">
        <img onClick={() => setModalActive(true)} src={img} alt="" />
      </div>
      <p>{price} Դր․</p>
      <button onClick={addBasket}>
        <SlBasket />
      </button>
      {modalActive ? (
        <Modal active={modalActive} setactive={setModalActive}>
          {img}
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Product;
