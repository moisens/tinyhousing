import "./favorite.scss";
import Button from "../button/Button";
import { MdOutlineArrowLeft } from "react-icons/md";
import { btnsFavorites } from "../../utils/favorites-utils";
import { BtnsProps } from "../../types/Interface";
import { useState } from "react";
import useFavorite from "../../hooks/useFavorite";
import { Link, useNavigate } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import houseConfiguration from "../../utils/configHouse";

const FavoriteComponent = () => {
  const [value, setValue] = useState<number>(0);
  const navigate = useNavigate();
  const { favorites, removeFromFavorites } = useFavorite();

  return (
    <header className="favorite__header">
      <Button
        as="button"
        className="favorite__button"
        handleClick={() => navigate(-1)}
      >
        <MdOutlineArrowLeft size="2rem" className="btn__icon" />
        Previous page
      </Button>
      <section className="btn__container">
        {btnsFavorites.map(({ id, text }: BtnsProps, index: number) => (
          <Button
            as="button"
            className={
              index === value ? "btn__house active__btn" : "btn__house"
            }
            handleClick={() => setValue(index)}
            key={id}
          >
            <span className="btn__text">{text}</span>
            {/*//TODO add a condition - house or location!!!*/}
            <span className="btn__count">({favorites.length})</span>
          </Button>
        ))}
      </section>
      <section className="cards__container">
        <article className="favorite__cards">
          {favorites.length >= 1 ? (
            favorites?.map((favorite) => {
              const {
                _id,
                country,
                price,
                category,
                reference,
                size,
                bedroom,
                bathroom,
                image,
              } = favorite;
              return (
                <div className="card__favorite stacked" key={_id}>
                  <Link to={`/details-tiny-house/${_id}`}>
                    <img
                      src={image[0]}
                      alt={country}
                      title={country}
                      className="card__img"
                    />
                  </Link>

                  <div className="card__like">
                    <Button
                      as="button"
                      className="like__icon"
                      handleClick={() => removeFromFavorites(favorite)}
                    >
                      <BsHeartFill size="1.9rem" />
                    </Button>
                  </div>
                  <div className="card__content">
                    <div className="card__title">
                      <h4 className="card__H4">{country}</h4>
                    </div>
                    <div className="card__title">
                      <h4 className="card__H4">
                        <span className="green__span">
                          {category === "rent"
                            ? `${price} €  / month`
                            : ` ${price} €`}
                        </span>
                      </h4>
                      <span className="green__span">|</span>
                      <h4 className="card__H4">Ref: {reference}</h4>
                    </div>
                    <div className="card__title">
                      {houseConfiguration(size, bedroom, bathroom)}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No favorite tiny houses</div>
          )}
        </article>
      </section>
    </header>
  );
};

export default FavoriteComponent;
