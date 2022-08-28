import React, { useEffect, useState } from "react";
import { getOfertsRequest } from "./api";

export const Ofertas = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getOfertsRequest()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <div>
      {data?.map((ofert, index) => (
        <div key={index}>
          <span>{ofert.title}</span>
          <div>
            <div>
              <span>
                {ofert.autor}, {ofert.date}
              </span>
            </div>
            <div>
              {data?.tags?.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
