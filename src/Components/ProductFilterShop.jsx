import React, { useContext, useEffect, useState } from "react";
import "../Styles/ProductFilter.css";
import { NavLink } from "react-router-dom";
import { FiGrid } from "react-icons/fi";
import { FaListUl } from "react-icons/fa6";
import { ShopContext } from "../Context";
import ProdItem from "./ProdItem";
import ProductDetPopup from "./ProductDetPopup";
const ProductFilterShop = () => {
  const { AllProdData } = useContext(ShopContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState(AllProdData);
  const pageSize = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("");
  const [menu, setMenu] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [filteredPriceRange, setFilteredPriceRange] = useState({
    min: 0,
    max: 0,
  });
  let sortedProducts = [...AllProdData];

  useEffect(() => {
    updatePriceRange(products);
  }, [products]);

  const updatePriceRange = (products) => {
    const prices = products.map((product) => product.price);
    setPriceRange({
      min: prices.length > 0 ? Math.min(...prices) : 0,
      max: prices.length > 0 ? Math.max(...prices) : 0,
    });
    setFilteredPriceRange({
      min: prices.length > 0 ? Math.min(...prices) : 0,
      max: prices.length > 0 ? Math.max(...prices) : 0,
    });
  };

  const handleSorted = (sortType) => {
    if (sortType === "lowtohigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "hightolow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortType === "atoz") {
      sortedProducts.sort((a, b) => a.prodName.localeCompare(b.prodName));
    } else if (sortType === "ztoa") {
      sortedProducts.sort((a, b) => b.prodName.localeCompare(a.prodName));
    }

    setSort(sortType);
    setCurrentPage(1);
    setProducts(sortedProducts);
    updatePriceRange(sortedProducts);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSearch = (query) => {
    const filteredProducts = AllProdData.filter((product) => {
      return (
        product.prodName.toLowerCase().includes(query.toLowerCase()) ||
        product.price.toString().includes(query) ||
        product.categ.toLowerCase().includes(query.toLowerCase()) ||
        product.prodTag.toLowerCase().includes(query.toLowerCase()) ||
        product.collor.toLowerCase().includes(query.toLowerCase()) ||
        product.rating.toString().includes(query)
      );
    });

    setSort("");
    setCurrentPage(1);
    setProducts(filteredProducts);
    updatePriceRange(filteredProducts);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  const handlePriceFilterChange = (e) => {
    const { name, value } = e.target;
    setFilteredPriceRange((prevRange) => ({
      ...prevRange,
      [name]: value,
    }));
  };

  const applyPriceFilter = () => {
    const filteredProducts = AllProdData.filter(
      (product) =>
        product.price >= filteredPriceRange.min &&
        product.price <= filteredPriceRange.max
    );
    setSort("");
    setCurrentPage(1);
    setProducts(filteredProducts);
  };

  //   const updatePriceRange = (products) => {
  //     const prices = products.map((product) => product.price);
  //     setPriceRange({
  //       min: prices.length > 0 ? Math.min(...prices) : 0,
  //       max: prices.length > 0 ? Math.max(...prices) : 0,
  //     });
  //   };

  const filteredProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleFilterProduct = (filtValue) => {
    const filterProdData = sortedProducts.filter((curElem, id) => {
      return curElem.categ === filtValue;
    });

    setProducts(filterProdData);
    setMenu(filtValue);
  };

  const handleFiltProdByBrand = (filtValueBrand) => {
    const filterProdData = sortedProducts.filter((curElem, id) => {
      return curElem.miniText === filtValueBrand;
    });

    setProducts(filterProdData);
    setMenu(filtValueBrand);
  };

  const handleFilterProductByColor = (filtValueColor) => {
    const filterProdData = sortedProducts.filter((curElem, id) => {
      return curElem.collor === filtValueColor;
    });

    setProducts(filterProdData);
    setMenu(filtValueColor);
  };

  const handleFiltProdByTag = (filtValueTag) => {
    const filterProdData = sortedProducts.filter((curElem, id) => {
      return curElem.prodTag === filtValueTag;
    });

    setProducts(filterProdData);
    setMenu(filtValueTag);
  };

  //   handleFilterProductByColor

  const handleViewClick = (productId) => {
    // console.log(productId);

    const selectedValue = AllProdData.find((elem, id) => elem.id === productId);
    setSelectedProduct(selectedValue);
  };

  return (
    <>
      <div className="breadcrum-bx">
        <div className="common-container breadcrum-flex">
          <NavLink to="/">Home</NavLink>
          <span>Shop</span>
          <span> Products </span>
        </div>
      </div>

      <section className="product-filter-comp">
        <div className="common-container">
          <div className="product-filt-grid grid">
            <div className="left-product-filter-section">
              <div className="search-prod-bx">
                <input
                  type="text"
                  name="productsearch"
                  id="productsearch"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search Products here..."
                  autoComplete="off"
                />
              </div>

             


              {/* <div>
        <div style={{ height: '15px', backgroundColor: '#e0e0e0', marginBottom: "2rem" , borderRadius: "5rem" }}>
          <div
            style={{
              height: '100%',
              width: `${((priceRange.max - priceRange.min) / 100) * 100}%`,
              backgroundColor: 'green',
            }}
          ></div>
        </div>
      </div> */}

              <div className="product-filter-comn-bx">
                <h6>Categories</h6>

                <div className="shop-prod-filt-list-bx">
                  <div
                    className={
                      menu === "All"
                        ? "shop-prod-filt-btn shopfiltBtnactive"
                        : "shop-prod-filt-btn"
                    }
                    onClick={() => {
                      setProducts(AllProdData), setMenu("All");
                    }}
                  >
                    All
                  </div>

                  <div
                    className={
                      menu === "jeans"
                        ? "shop-prod-filt-btn shopfiltBtnactive"
                        : "shop-prod-filt-btn"
                    }
                    onClick={() => {
                      handleFilterProduct("jeans");
                    }}
                  >
                    jeans
                  </div>

                  <div
                    className={
                      menu === "shoes"
                        ? "shop-prod-filt-btn shopfiltBtnactive"
                        : "shop-prod-filt-btn"
                    }
                    onClick={() => {
                      handleFilterProduct("shoes");
                    }}
                  >
                    shoes
                  </div>

                  <div
                    className={
                      menu === "jackets"
                        ? "shop-prod-filt-btn shopfiltBtnactive"
                        : "shop-prod-filt-btn"
                    }
                    onClick={() => {
                      handleFilterProduct("jackets");
                    }}
                  >
                    jackets
                  </div>

                  <div
                    className={
                      menu === "trousers"
                        ? "shop-prod-filt-btn shopfiltBtnactive"
                        : "shop-prod-filt-btn"
                    }
                    onClick={() => {
                      handleFilterProduct("trousers");
                    }}
                  >
                    trousers
                  </div>
                  <div
                    className={
                      menu === "accessories"
                        ? "shop-prod-filt-btn shopfiltBtnactive"
                        : "shop-prod-filt-btn"
                    }
                    onClick={() => {
                      handleFilterProduct("accessories");
                    }}
                  >
                    accessories
                  </div>
                </div>
              </div>

              <div className="product-filter-comn-bx">
                <h6>Manufactures</h6>

                <div className="shop-prod-filt-list-bx">
                  <div
                    className={
                      menu === "all"
                        ? "shop-prod-filt-btn shopfiltBtnactive"
                        : "shop-prod-filt-btn"
                    }
                    onClick={() => {
                      setProducts(AllProdData), setMenu("all");
                    }}
                  >
                    All
                  </div>

                  <div
                    className={
                      menu === "armani"
                        ? "shop-prod-filt-btn shopfiltBtnactive"
                        : "shop-prod-filt-btn"
                    }
                    onClick={() => {
                      handleFiltProdByBrand("armani");
                    }}
                  >
                    armani
                  </div>

                  <div
                    className={
                      menu === "adidas"
                        ? "shop-prod-filt-btn shopfiltBtnactive"
                        : "shop-prod-filt-btn"
                    }
                    onClick={() => {
                      handleFiltProdByBrand("adidas");
                    }}
                  >
                    adidas
                  </div>

                  <div
                    className={
                      menu === "helix"
                        ? "shop-prod-filt-btn shopfiltBtnactive"
                        : "shop-prod-filt-btn"
                    }
                    onClick={() => {
                      handleFiltProdByBrand("helix");
                    }}
                  >
                    helix
                  </div>
                </div>
              </div>

              <div className="price-filter-range-main">
                <div className="price-filt-range-bx">
                  <label htmlFor="minPrice">Min Price:</label>
                  <input
                    type="number"
                    id="minPrice"
                    name="min"
                    value={filteredPriceRange.min}
                    onChange={handlePriceFilterChange}
                  />
                </div>
                <div className="price-filt-range-bx">
                  <label htmlFor="maxPrice">Max Price:</label>
                  <input
                    type="number"
                    id="maxPrice"
                    name="max"
                    value={filteredPriceRange.max}
                    onChange={handlePriceFilterChange}
                  />
                </div>
              </div>

              <button className="apply-btn login-btn mb-4 mt-4" onClick={applyPriceFilter}>Apply</button>

              <div className="product-filter-comn-bx">
                <h6>Colors</h6>

                <div className="shop-prod-filt-list-bx">
                  <div className="color-select-btn-flex">
                    <button
                      className={
                        menu === "red"
                          ? "color-sel-btn red selted"
                          : "color-sel-btn red"
                      }
                      onClick={() => handleFilterProductByColor("red")}
                    >
                      {" "}
                    </button>
                    <button
                      className={
                        menu === "yellow"
                          ? "color-sel-btn yellow selted"
                          : "color-sel-btn yellow"
                      }
                      onClick={() => handleFilterProductByColor("yellow")}
                    >
                      {" "}
                    </button>
                    <button
                      className={
                        menu === "white"
                          ? "color-sel-btn white selted"
                          : "color-sel-btn white"
                      }
                      onClick={() => handleFilterProductByColor("white")}
                    >
                      {" "}
                    </button>
                    <button
                      className={
                        menu === "orange"
                          ? "color-sel-btn orange selted"
                          : "color-sel-btn orange"
                      }
                      onClick={() => handleFilterProductByColor("orange")}
                    >
                      {" "}
                    </button>
                    <button
                      className={
                        menu === "blue"
                          ? "color-sel-btn blue selted"
                          : "color-sel-btn blue"
                      }
                      onClick={() => handleFilterProductByColor("blue")}
                    >
                      {" "}
                    </button>
                    <button
                      className={
                        menu === "green"
                          ? "color-sel-btn green selted"
                          : "color-sel-btn green"
                      }
                      onClick={() => handleFilterProductByColor("green")}
                    >
                      {" "}
                    </button>
                    <button
                      className={
                        menu === "pink"
                          ? "color-sel-btn pink selted"
                          : "color-sel-btn pink"
                      }
                      onClick={() => handleFilterProductByColor("pink")}
                    >
                      {" "}
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-filter-comn-bx">
                <h6>Tags</h6>

                <div className="shop-prod-filt-list-bx">
                  <div
                    className={
                      menu === "total"
                        ? "shop-prod-filt-btn shopfiltBtnactive"
                        : "shop-prod-filt-btn"
                    }
                    onClick={() => {
                      setProducts(AllProdData), setMenu("total");
                    }}
                  >
                    All
                  </div>

                  <div
                    className={
                      menu === "men"
                        ? "shop-prod-filt-btn shopfiltBtnactive"
                        : "shop-prod-filt-btn"
                    }
                    onClick={() => {
                      handleFiltProdByTag("men");
                    }}
                  >
                    men
                  </div>

                  <div
                    className={
                      menu === "women"
                        ? "shop-prod-filt-btn shopfiltBtnactive"
                        : "shop-prod-filt-btn"
                    }
                    onClick={() => {
                      handleFiltProdByTag("women");
                    }}
                  >
                    women
                  </div>

                  <div
                    className={
                      menu === "kids"
                        ? "shop-prod-filt-btn shopfiltBtnactive"
                        : "shop-prod-filt-btn"
                    }
                    onClick={() => {
                      handleFiltProdByTag("kids");
                    }}
                  >
                    kids
                  </div>

                  <div
                    className={
                      menu === "dress"
                        ? "shop-prod-filt-btn shopfiltBtnactive"
                        : "shop-prod-filt-btn"
                    }
                    onClick={() => {
                      handleFiltProdByTag("dress");
                    }}
                  >
                    dress
                  </div>
                </div>
              </div>
            </div>

            <div className="right-product-filter-section">
              <div className="top-showing-prod-filter-main-bx-flex">
                <h6>
                  We found <span>{filteredProducts.length}</span> products for
                  you!
                </h6>

                <div className="right-filter-btns-flex-bx">
                  <button className="layout-btn grid-btn">
                    <FiGrid className="g-icon" />
                  </button>

                  {/* <button className="layout-btn grid-btn">
                    <FaListUl className="g-icon" />
                  </button> */}

                  <div className="filter-select-bx">
                    <select
                      name="productFilter"
                      id="productFilter"
                      onChange={(e) => handleSorted(e.target.value)}
                    >
                      <option value="default">Default</option>
                      <option value="lowtohigh">Low To High</option>
                      <option value="hightolow">High To Low</option>
                      <option value="atoz">Products A To Z</option>
                      <option value="ztoa">Products Z To A</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="all-product-grid grid grid-three-col mt-5">
                {filteredProducts.map((curElem, index) => {
                  return (
                    <>
                      <ProdItem
                        id={curElem.id}
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
                  );
                })}
              </div>

              <div className="pagination-main-bx">
                <span>Page</span>

                <div className="pagination-flex-bx">
                  {Array.from(
                    { length: Math.ceil(products.length / pageSize) },
                    (_, index) => (
                      <button
                        key={index + 1}
                        className={
                          currentPage === index + 1 ? "activePage" : ""
                        }
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </button>
                    )
                  )}

                  {currentPage < Math.ceil(products.length / pageSize) && (
                    <button onClick={handleNextPage}>
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductDetPopup
          productData={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default ProductFilterShop;
