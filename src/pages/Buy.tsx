import "../components/home/home.scss";
import Headers from "../components/header/Headers";
import { HeaderBuy } from "../utils/headers-utils";
import Cardspage from "../components/cardspage/Cardspages";
import { HousedataType } from "../types/interface-housedata";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../components/errorBounderies/Errorboundaries";
import useFetch from "../hooks/useFetch";

const Buy = () => {
  const categories = "buy";
  const {
    dataHouse: datas,
    status,
    error,
  } = useFetch<HousedataType>(`/products?category=${categories}`);

  return (
    <div className="home-container">
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <Headers dataHeaders={HeaderBuy} />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <Cardspage productData={datas} status={status} error={error} />
      </ErrorBoundary>
    </div>
  );
};

export default Buy;
