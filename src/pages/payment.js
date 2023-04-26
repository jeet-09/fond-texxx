import React from 'react'
//import Cart from '../components/Brand/Cart/Cart'
import StripeCheckout from 'react-stripe-checkout';


function Payment() {

    const onToken = (token) => {
        console.log(token)
    }

  return (
  
<StripeCheckout
        token={onToken}
        stripeKey="pk_test_51N15TsSEGfTGwgMjFl0f8M2pLIHzs40sBQP4yZjBCZczqKHiTHy9go5vUdqpLws1bQUL1ZEhkKygclHBJKWmE3MP00eI2fwIrb"
      />

    //<div>
    // <Cart />
    //  This is the payment page
    //</div>
  )
}

export default Payment