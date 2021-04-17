import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'

function CartTotal({getTotalPrice , getCount}) {

    


    return (
        <Container>
            <Subtotal>Subtotal ({getCount()} items) :
            
            <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'}></NumberFormat>
            </Subtotal>
            <CheckoutButton>Proceed To CheckOut</CheckoutButton>
        </Container>
    )
}

export default CartTotal


const Container = styled.div`
    height:200px;
    flex:0.3;
    background-color:white;
    padding:20px;

`
const Subtotal =styled.h2`
    margin-bottom:16px;
`

const CheckoutButton =styled.button`
    background-color:#F0C14B;
    width:100%;;
    //padding vertical horizontal
    padding:4px 8px;
    border:2px solid #a88734
    border-radius:4px;
    font-size:16px;
    :hover{
        background:#ddb347;
    }

`