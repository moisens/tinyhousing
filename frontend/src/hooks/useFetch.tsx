import { useState, useEffect } from "react";
import axios from "axios";
import { DataProps, LocationProps } from "../types/interface-Dataproducts";




const useFetch = (url: string) => {
  const [datas, setDatas] = useState<DataProps[]>([]);
  //add an other data state for the location data
  const [status, setStatus] = useState<string>("idle");
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("pending");
        const { data } = await axios.get<DataProps[]>(url);
        setStatus("resolved")
        setDatas(data.products);
        console.log(data.products);
        
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setStatus("rejected");
          console.log(error.message);
          
        }
      }
    };
    fetchData();
  }, [url]);

  return {
    datas,
    status,
    error,
  };
};

export default useFetch;
