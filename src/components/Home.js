import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  const [carDetails, setCarDetails] = useState([]);

  console.log(carDetails);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/carInfo.json");
      const data = await response.json();
      setCarDetails(data);
      // console.log(data);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch("/carInfo.json")
  //     .then((res) => res.json())
  //     .then((data) => setCarDetails(data));
  // }, []);
  return (
    <Container>
      {carDetails.map((carDetail) => (
        <Section key={carDetail.id} carDetail={carDetail} />
      ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
