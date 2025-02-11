import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Billing = () => {
  // const [checkid, setCheckid] = useState("");

  const [hideBtnOrder,setHideBtnOrder] = useState("hide");

  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  const handleClick = ()=>{
    setHideBtnOrder("");
  }

  let arr = [];
  cartItems.map((item) => {
    arr.push(
      item?.card?.info?.price ||
        item?.card?.info?.variantsV2?.pricingModels[0]?.price
    );
  });

  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += Number(arr[i]);
  }

  // function selectOnlyThis(id) {
  //   for (var i = 1; i <= 4; i++) {
  //     document.getElementById("Check" + i).checked = false;
  //   }
  //   document.getElementById(id).checked = true;
  // }

  // const onCheck = (checkid) => {
  //   let check = document.getElementById(checkid);
  //   if (check.checked) {
  //     console.log("Chekced" + checkid);
  //   } else {
  //     console.log("NOt" + checkid);
  //   }
  // };

  return (
    <div>
      <div className="text-center text-xl font-bold mt-10">
        Total Amount : {total / 100}/-
      </div>
      <div className="billing-grid w-5/12">
        <div className="flex justify-between item">
          <div  className="billIP">
            <input
           
              type="radio"
              name="myCheckbox"
              id="Check1"
              onClick={handleClick}
            />
            <label>Net Banking</label>
          </div>
          <div  id="net">
            <select id="select" className="select">
              <option value="Choose Option" className="text-gray-400">
                ~Choose Option
              </option>
              <option value="Axis Bank">Axis Bank</option>
              <option value="Bank of India">Bank of India</option>
              <option value="Central Bank of India">
                Central Bank of India
              </option>
              <option value="HDFC Bank">HDFC Bank</option>
              <option value="State Bank of India">State Bank of India</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between item">
          <div className="billIP">
            <input
            
              type="radio"
              name="myCheckbox"
              id="Check2"
              onClick={handleClick}

              // onClick={() => {
              //   onCheck();
              //   setCheckid("Check2");
              // }}
            />
            <label>UPI</label>
          </div>
          <div>
            <select id="select" className="select">
              <option value="Choose Option" className="text-gray-400">
                ~Choose Option
              </option>
              <option value="Google Pay">Google Pay</option>
              <option value="Phonepe">PhonePe</option>
              <option value="Paytm">Paytm</option>
              <option value="UPI Id">Other</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between item">
          <div className="billIP">
            <input
            
              type="radio"
              name="myCheckbox"
              id="Check3"
              onClick={handleClick}

              // onClick={() => {
              //   onCheck();
              //   setCheckid("Check3");
              // }}
            />
            <label>Card</label>
          </div>
          <div>
            <label>Enter Card Number : </label>
            <input placeholder="0000 0000 0000" className="card-input" />
            <div>
              <label>Enter CVV : </label>
              <input
                placeholder="***"
                className="card-input w-8"
                type="password"
              />
              <label>Enter Expiry Date : </label>
              <input placeholder="00/00" className="card-input w-12" />
            </div>
          </div>
        </div>
        <div className="cashdelivery">
          <div className="billIP">
            <input
              type="radio"
              name="myCheckbox"
              id="Check4"
              onClick={handleClick}

              // onClick={() => {
              //   onCheck();
              //   setCheckid("Check4");
              // }}
            />
            <label>Cash on Delivery</label>
          </div>
        </div>
      </div>
      <div className={`orderBtn ${hideBtnOrder}`} >
        <button onClick={()=>{
          toast.success("Order Placed Successfully",{
            position: "top-right",
            autoClose:1000,
            closeOnClick: true,
            pauseOnHover: true,
            hideProgressBar:false
          })
          navigate("/")
        }}>Place Your Order</button>
      </div>
    </div>
  );
};

export default Billing;
