import "../components/home/home.scss";
import Headers from "../components/header/Headers";
import { HeaderBuy } from "../utils/headers-utils";
import Cardspage from "../components/cardspage/Cardspages";
import { useState, useEffect } from "react";
import { HousedataType, StatusType } from "../types/interface-housedata";

interface IsFetchingError {
  message: string;
}

const isError = (error: unknown): error is IsFetchingError => {
  if (error && typeof error === "object" && "message" in error) {
    return true;
  }
  return false;
};

const Buy = () => {
  const [datas, setDatas] = useState<HousedataType>({} as HousedataType);
  const [status, setStatus] = useState<StatusType>("iddle");
  const [error, setError] = useState<unknown>(null);

  const fetchHouses = async () => {
    try {
      const categories = "buy";
      setStatus("pending");
      const response = await fetch(`/api/v1/products?category=${categories}`);
      if (!response.ok) {
        throw new Error(`unable to fetch data!`);
      }
      const jsonhouse = await response.json();
      setStatus("resolved");
      setDatas(jsonhouse);
    } catch (error) {
      if (isError(error)) {
        setError(error.message);
        setStatus("rejected");
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  return (
    <div className="home-container">
      <Headers dataHeaders={HeaderBuy} />
      <Cardspage productData={datas} statusType={status} />
    </div>
  );
};

export default Buy;
