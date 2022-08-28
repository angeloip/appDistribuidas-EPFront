import React, { useEffect, useState } from "react";
import { AgregarOferta } from "./AgregarOferta";
import { getOfertsRequest } from "./api";
export const TablaOfertas = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    getOfertsRequest()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <>
      <div>
        <button onClick={() => setShow(true)}>CREAR</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Autor</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Tags</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((ofert, index) => (
              <tr key={index}>
                <td>{ofert._id}</td>
                <td>{ofert.autor}</td>
                <td>{ofert.titulo}</td>
                <td>{ofert.description}</td>
                <td>{ofert.tags.join(", ")}</td>
                <td>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AgregarOferta
        show={show}
        setShow={setShow}
        data={data}
        setData={setData}
      />
    </>
  );
};
