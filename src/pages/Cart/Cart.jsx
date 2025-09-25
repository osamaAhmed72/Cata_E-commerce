import React from 'react'
import './Cart.css'
import BannerTitle from '../../components/bannerTitle/BannerTitle'
import { Link } from 'react-router-dom'
import { f1, f2, f3 } from '../../assets/assets'
import { FaRegCircleXmark } from "react-icons/fa6";


const Cart = () => {
  return (
    <div>
      <div className="contact_header">
        <BannerTitle
        text1={"#Let's_Talk"}
        text2={'LEAVE MESSAGE, We Love To Hear From You!'}
        />
      </div>

      <section id="cart" class="section-p1 " style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Imag</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>SubTotal</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><Link><FaRegCircleXmark /></Link></td>
                    <td><img src={f1} alt=""/></td>
                    <td>Cartoon Astrount T-Shirt</td>
                    <td>$118.19</td>
                    <td><input type="number" value='1'/></td>
                    <td>$118.19</td>

                </tr>

                
                <tr>
                    <td><Link><FaRegCircleXmark /></Link></td>
                    <td><img src={f2} alt=""/></td>
                    <td>Cartoon Astrount T-Shirt</td>
                    <td>$118.19</td>
                    <td><input type="number" value='1'/></td>
                    <td>$118.19</td>

                </tr>


                
                <tr>
                    <td><Link><FaRegCircleXmark /></Link></td>
                    <td><img src={f3} alt=""/></td>
                    <td>Cartoon Astrount T-Shirt</td>
                    <td>$118.19</td>
                    <td><input type="number" value='1'/></td>
                    <td>$118.19</td>

                </tr>


            </tbody>
        </table>

    </section>
    </div>
  )
}

export default Cart
