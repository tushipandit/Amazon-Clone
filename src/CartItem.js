import React from 'react'
import styled from 'styled-components'
import {db} from './firebase'

function CartItem({id,item}) {
    
const deleteItem =(e)=>{
    e.preventDefault();
    db.collection('cartItems').doc(id).delete();
}


let options =[]

for(let i=1; i<Math.max(item.product.quantity+1,20);i++)
{
    options.push(<option value={i}>Qty :{i}</option>)
}


const changeQuantity =(newquantity) =>{
    
    db.collection('cartItems').doc(id).update({
        quantity:parseInt(newquantity)
    })


}

    return (
        <Container>
            <ImageContainer>
                <img src={item.product.image} alt="prouct" />
            </ImageContainer>
            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{item.product.name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantityContainer>
                       <select value={item.product.quantity} onChange={(e)=>changeQuantity(e.target.value)}  >
                            {options}
                       </select>
                
                    </CartItemQuantityContainer>
                    <CartItemDeleteContainer onClick={deleteItem}  >
                        Delete
                    </CartItemDeleteContainer>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
            {item.product.price}
            </CartItemPrice>
        </Container>
    )
}

export default CartItem


const Container=styled.div`
padding:12px;
padding-bottom:12px;
display:flex;
border-bottom:1px solid #DDD;
`

const ImageContainer=styled.div`
    width:180px;
    height:180px;
    flex-shrink:0;
    flex-grow:0;
    img{
        object-fit:contain;
        height:100%;
        width:100%;
    }
    margin-right:16px;


`
const CartItemInfo=styled.div`
flex-grow:1;

`

const CartItemInfoTop =styled.div`
    color:#007185;
    h2{
        font-size:18px;
    }

`
const CartItemInfoBottom=styled.div`
display:flex;
margin-top:4px;
align-items:center;
`
const CartItemQuantityContainer=styled.div`
select{
    border-radius:7px;
    background-color:#F0F2F2;
    padding:8px;
    box-shadow:0 2px 5px rgba(15,17,17,.15);
    :focus{
        outline:none;
    }

}


`
const CartItemDeleteContainer=styled.div`
    color:#007185;
    margin-left:16px;
    cursor:pointer;

`
const CartItemPrice=styled.div`
    font-size:18px;
    font-weight:700;
    margin-left:16px;


`