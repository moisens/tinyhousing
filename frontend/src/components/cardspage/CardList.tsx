//import "./cardspage.scss";
import React from "react";
import { BsHeart } from "react-icons/bs";
import { IoIosQrScanner } from "react-icons/io";
import { MdOutlineBed, MdOutlineShower } from "react-icons/md";
import { Link } from "react-router-dom";

const CardList = () => {

  const houseConfiguration = (
    size: number | undefined,
    bedroom: number | undefined,
    bathroom: number | undefined
  ) => {
    return (
      <React.Fragment>
        <div className="card__item">
          <IoIosQrScanner size="1.4rem" />
          <p className="card__P">{size} sqft</p>
        </div>
        <div className="card__item">
          <MdOutlineBed size="1.4rem" />
          <p className="card__P">{bedroom}</p>
        </div>
        <div className="card__item">
          <MdOutlineShower size="1.4rem" />
          <p className="card__P">{bathroom}</p>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {/* {status === "resolved" &&
        datas.map((house) => {
          const {
            _id,
            country,
            price,
            ref,
            size,
            bedroom,
            bathroom,
            image,
            category,
          } = house;

          return (
            <Link to={`/details-tiny-house/${_id}`} key={_id}>
              <div className="page__card stacked">
                <img
                  src={image[0]}
                  alt={country}
                  title={country}
                  className="card__img"
                />
                <div className="card__like">
                  <BsHeart size="1.4rem" />
                </div>
                <div className="card__content">
                  <div className="card__title">
                    <h4 className="card__H4">{country}</h4>
                  </div>
                  <div className="card__title">
                    <h4 className="card__H4">
                      <span className="green__span">
                        {category === "rent"
                          ? `€ ${price} / month`
                          : `€ ${price}`}
                      </span>
                    </h4>
                    <span className="green__span">|</span>
                    <h4 className="card__H4">Ref: {ref}</h4>
                  </div>
                  <div className="card__title">
                    {category === "rent" || category === "buy" ? (
                      houseConfiguration(size, bedroom, bathroom)
                    ) : (
                      <>Location component goes here</>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })} */}
    </React.Fragment>
  );
};

export default CardList;
