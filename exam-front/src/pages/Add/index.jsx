import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./add.scss";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Helmet } from "react-helmet";

function Add() {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  async function getFetch() {
    await fetch("http://localhost:4200/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setOriginalProducts(data);
      });
  }

  useEffect(() => {
    getFetch();
  }, []);

  async function handleSubmit(item) {
    await fetch("http://localhost:4200/", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    await getFetch();
  }

  async function deleteItem(id) {
    await fetch("http://localhost:4200/" + id, {
      method: "DELETE",
    });
    await getFetch();
  }

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);

    const filteredItems = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (searchTerm != "") {
      setProducts(filteredItems);
    } else {
      setProducts(originalProducts);
    }
  };

  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <Navbar></Navbar>
      <section id="form">
        <Formik
          initialValues={{ title: "", img: "", price: "" }}
          validationSchema={Yup.object({
            title: Yup.string()
              .max(40, "Must be 40 characters or less")
              .required("Required"),
            img: Yup.string()
              .max(500, "Must be 500 characters or less")
              .required("Required"),
            price: Yup.string()
              .max(10, "Must be 10 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              handleSubmit(values);
              resetForm();
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <label htmlFor="title">Title:</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" />

            <label htmlFor="img">Image:</label>
            <Field name="img" type="text" />
            <ErrorMessage name="img" />

            <label htmlFor="price">Price:</label>
            <Field name="price" type="text" />
            <ErrorMessage name="price" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </section>

      <section id="table">
        <div className="search">
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search..."
          />
        </div>
        <table id="customers">
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.img}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td onClick={() => deleteItem(product._id)}>
                <button>delete</button>
              </td>
            </tr>
          ))}
        </table>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Add;
