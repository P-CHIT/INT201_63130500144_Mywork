let product = {
    productId: 's1',
    productName: 'Sony',
    productDesc: 'PlayStation4',
    price: 35000
  };
  
  //1. query div of products as reference node  
  const divProductsEle = document.querySelector('#products');
  console.log(divProductsEle);
  
  //2. create div of product element
  // <div id="s1"></div>
  const divProductEle = document.createElement('div');
  divProductEle.setAttribute('id', product.productId);
  console.log(divProductEle);
  
  
  // 3. create p of product id element
  // <p>Product Id: s1</p>
  const pProductIdEle = document.createElement('p');
  pProductIdEle.textContent = 'Product Id: ' + product.productId;
  
  //4. add <p> product id to div of product
  // ทำการassign ให้เป็น
  /* <div id="P001">  <p>Product Id: P001</p></div> */
  divProductEle.appendChild(pProductIdEle);

  //5. create p of product name element
  // <p> productName: 'Dell Notebook'</p>
  const pProductNameEle = document.createElement('p');
  pProductIdEle.textContent = 'Product Id: ' + product.productId;