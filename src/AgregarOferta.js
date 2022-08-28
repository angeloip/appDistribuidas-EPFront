import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import styles from "./AgregarOferta.module.css";
import { createOfertRequest } from "./api";

export const AgregarOferta = ({ show, setShow, data, setData }) => {
  const agregarOferta = async (valores) => {
    const tags = valores.tags.split(", ");

    let oferta = {
      autor: valores.autor,
      title: valores.titulo,
      description: valores.descripcion,
      tags: tags
    };

    await createOfertRequest(oferta)
      .then((res) => {
        setData([...data, res.data]);
        Swal.fire(
          "Plato Agregado",
          `El plato ${valores.nombre} ha sido agregado`,
          "success"
        );
      })
      .catch((err) => {
        console.log(err.response);
      });

    setShow(false);
  };
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Oferta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            autor: "",
            titulo: "",
            descripcion: "",
            tags: ""
          }}
          validate={(valores) => {
            let errores = {};

            if (!valores.autor) {
              errores.autor = "Por favor, ingrese un autor";
            }

            if (!valores.titulo) {
              errores.titulo = "Por favor, ingrese los titulo";
            }
            if (!valores.descripcion) {
              errores.descripcion = "Por favor, ingrese la descripcion";
            }

            if (!valores.tags) {
              errores.tags = "Por favor, ingrese los tags";
            }

            return errores;
          }}
          onSubmit={(valores) => {
            agregarOferta(valores);
          }}
        >
          {({ errors, touched, setFieldValue }) => (
            <div className={`container ${styles.containerForm}`}>
              <Form action="" className={styles.formulario}>
                <div className={styles.cont_input}>
                  <Field
                    type="text"
                    name="autor"
                    id="autor"
                    autoComplete="off"
                    placeholder=" "
                    className={
                      errors.autor && touched.autor
                        ? `${styles.form__input} ${styles.warning}`
                        : `${styles.form__input}`
                    }
                  />
                  <label className={styles.form__label} htmlFor="autor">
                    Autor
                  </label>
                </div>

                <div className={styles.cont_input}>
                  <Field
                    type="text"
                    name="titulo"
                    id="titulo"
                    autoComplete="off"
                    placeholder=" "
                    className={
                      errors.titulo && touched.titulo
                        ? `${styles.form__input} ${styles.warning}`
                        : `${styles.form__input}`
                    }
                  />
                  <label className={styles.form__label} htmlFor="titulo">
                    Titulo
                  </label>
                </div>

                <div className={styles.cont_area}>
                  <Field
                    component="textarea"
                    name="descripcion"
                    id="descripcion"
                    autoComplete="off"
                    placeholder=" "
                    className={
                      errors.descripcion && touched.descripcion
                        ? `${styles.form__input} ${styles.form__area} ${styles.warning}`
                        : `${styles.form__input} ${styles.form__area}`
                    }
                    rows={4}
                  />
                  <label className={styles.form__label} htmlFor="descripcion">
                    Descripción
                  </label>
                </div>

                <div className={styles.cont_area}>
                  <Field
                    component="textarea"
                    name="tags"
                    id="tags"
                    autoComplete="off"
                    placeholder=" "
                    className={
                      errors.tags && touched.tags
                        ? `${styles.form__input} ${styles.form__area} ${styles.warning}`
                        : `${styles.form__input} ${styles.form__area}`
                    }
                    rows={2}
                  />
                  <label className={styles.form__label} htmlFor="tags">
                    Tags
                  </label>
                </div>

                <button type="submit" className={styles.btnSubmitForm}>
                  Guardar
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};
