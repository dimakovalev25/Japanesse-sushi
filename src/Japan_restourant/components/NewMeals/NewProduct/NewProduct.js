import { useState } from "react";
import ProductForm from "./ProductForm";
import Section from "../UI/Section";

const NewProduct = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const enterProductHandler = async (newMeal) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-course-86712-default-rtdb.europe-west1.firebasedatabase.app/products.json",
        {
          method: "POST",
          body: JSON.stringify(newMeal),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error fetching product");
      }

    } catch (e) {
      setError(e.message || "err...");
    }
  };

  return (
    <Section>
      <ProductForm onEnterProduct={enterProductHandler} />
    </Section>
  );
};

export default NewProduct;
