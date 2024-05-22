import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../componets/home.css";
import axios from "axios";

const Section = styled.section`
  background: rebeccapurple;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;
const Header = styled.div`
  width: 50%;
  height: 100vh;
`;
const Sec_h1 = styled.h1`
  color: red;
  font-size: 5rem;
  margin: 20px 0;
  text-align: center;
`;
const Image = styled.img`
  height: 300px;
  width: 290px;
  border-radius: 15px;
  box-shadow: 2px 5px 10px wheat;
  margin: 30px 100px;
`;
const Peragraf = styled.p`
  font-size: 23px;
  color: cadetblue;
  padding: 5px 27px;
`;
const Sec_img = styled.div`
  width: 50%;
  text-align: center;
`;
const Img2 = styled.img`
  height: 200px;
  margin-top: 50px;
  /* border-radius: 100px; */
  box-shadow: 2px 2px 10px red;
`;
const Peregraf2 = styled.p`
  font-size: 24px;
  color: darkseagreen;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 0;
  margin: 0 23px;
`;
const Image3 = styled.img`
  height: 80px;
  margin-top: 30px;
`;
const Card = styled.div`
width: 17%;
background-color: rgba(255, 255, 255, 0.999);
margin: 19px 10px;
text-align: center;
box-shadow: 2px 2px 7px rgb(163, 229, 125);
`
const Headerh4 = styled.h4`
margin: 20px 0;
color: black;
`
const Pro_but = styled.button`
color: #fff;
background-color: blue;
border: none;
border-radius: 4px;
padding: 5px 20px;
margin: 20px 0;
`
function HomePage() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function productApi() {
      try {
        const ref = await axios("https://fakestoreapi.com/products");
        console.log(ref.data);
        setProduct(ref.data);
      } catch (err) {
        console.log(err);
      }
    }
    productApi();
  }, []);

  return (
    <>
      <Section>
        <Header>
          <Sec_h1>Home Page</Sec_h1>
          <Peragraf>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic
            sunt iste corrupti adipisci molestiae dolor animi nobis quis
            debitis? Qui, doloremque.
          </Peragraf>
          <Image src="https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGltYWdlfGVufDB8fDB8fHww" />
        </Header>
        <Sec_img>
          <Img2 src="https://cdn.pixabay.com/photo/2024/03/21/23/06/created-by-ai-8648630_1280.png" />
          <Peregraf2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            ad architecto illo quasi. Incidunt quia minima dolorem repellendus
            voluptate ullam nulla maxime quos iusto facere soluta adipisci,
            tenetur delectus, illo harum quam? Ab aspernatur dolore dicta animi
            sed ipsam cumque nostrum omnis ipsum pariatur voluptatem quibusdam,
            reiciendis veniam vel minima ducimus suscipit est expedita nihil
            necessitatibus facilis repellendus asperiores ipsa. Aliquam ad iusto
            distinctio sequi non eaque beatae necessitatibus totam dolorem
            tenetur
          </Peregraf2>
        </Sec_img>
      </Section>
      <Product>
        {product.map((data, i) => {
          return (
            <Card key={i}>
              <Image3 src={data.image} />
              <Headerh4>₹{data.price}</Headerh4>
              <Pro_but className="Pro_but">Add Item</Pro_but>
            </Card>
          );
        })}
      </Product>
    </>
  );
}

export default HomePage;
