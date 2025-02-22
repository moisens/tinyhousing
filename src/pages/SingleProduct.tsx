import "../components/home/home.scss";
import Header from "../components/singleproducts/Header";
import InfoHouse from "../components/singleproducts/InfoHouse";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { HousedataType } from "../types/interface-housedata";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../components/errorBounderies/Errorboundaries";

const Singleproduct = () => {
  const { _id } = useParams();

  const {
    dataHouse: datas,
    status,
    error,
  } = useFetch<HousedataType>(`/products/${_id}`);

  return (
    <div className="home-container">
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <Header productData={datas} status={status} error={error} />
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <InfoHouse productData={datas} status={status} error={error} />
      </ErrorBoundary>
    </div>
  );
};

export default Singleproduct;
