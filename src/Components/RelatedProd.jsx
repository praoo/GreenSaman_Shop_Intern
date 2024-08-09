import React, { useContext, useState } from 'react'
import ProdItem from './ProdItem';
import { ShopContext } from '../Context';
import ProductDetPopup from './ProductDetPopup';

const RelatedProd = ({relatedProdData}) => {
  const {AllProdData} = useContext(ShopContext);
  const [selectedProduct , setSelectedProduct] = useState(null) ;
  const handleViewClick = (productId) => {

    // console.log(productId);

    const selectedValue =  AllProdData.find((elem,id) => elem.id === productId);
    setSelectedProduct(selectedValue);
}
  return (
    <>

    <div className="related-prod-main-bx">

        <h6 className='rel-prod-text'>Related Products</h6>

    <div className="related-prod-grid grid grid-four-col grid-gap">

    {relatedProdData.relatedProd.map((curElem, index) => {
        return (
            <>

           <ProdItem
           id={curElem.id}
           curentProd={curElem}
           frontImg={curElem.prodFront}
           backImg={curElem.prodBack}
           prodName={curElem.prodName}
           prodTitle={curElem.miniText}
           price={curElem.price}
           rating={curElem.rating}
           tagname={curElem.tag}
           percent={curElem.percent}
           tagType={curElem.tagtype}
           onClickOpen={() => handleViewClick(curElem.id)}

            />
            
            </>
        )
    })}
        
    </div>
    </div>

    {selectedProduct  && <ProductDetPopup productData={selectedProduct}  onClose={() => setSelectedProduct(null)} />  }

    </>
  )
}

export default RelatedProd
