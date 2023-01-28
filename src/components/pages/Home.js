import PageLayout from "components/common/PageLayout";
import React from "react";
import styled from "styled-components";
import { Heading } from "./Login";

const Paragraph = styled.p`
  font-family: "open Sans";
  font-size: 17px;
  text-align: justify;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  padding: 1.5rem;
  background-color: #f9f9f9;
  color: #333;
  border-radius: 0 0 5px 5px;
  box-shadow: 1px 1px 8px 5px #999;
  border-bottom: 5px solid #02018a;
  margin-bottom: 5rem;
`;

// const Heading = styled.h1`
//   background: linear-gradient(
//     222deg,
//     rgba(5, 64, 235, 1) 23%,
//     rgba(73, 14, 224, 1) 65%,
//     rgba(2, 1, 138, 1) 100%
//   );
//   padding: 1rem;
//   margin-bottom: 0;
//   color: white;
//   border-radius: 5px 5px 0 0;
//   box-shadow: 2px -2px 12px 5px #ececec;
// `;
function Home() {
  return (
    <PageLayout>
      <Heading>Home</Heading>
      <Content>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant
          morbi tristique senectus et netus et malesuada. Semper feugiat nibh
          sed pulvinar proin. Ut venenatis tellus in metus vulputate eu
          scelerisque felis imperdiet. Fermentum iaculis eu non diam phasellus.
        </Paragraph>
        <Paragraph>
          Blandit libero volutpat sed cras ornare. Praesent elementum facilisis
          leo vel fringilla est. Feugiat in fermentum posuere urna nec tincidunt
          praesent semper feugiat. Consequat mauris nunc congue nisi vitae
          suscipit tellus mauris. Neque aliquam vestibulum morbi blandit cursus
          risus at ultrices. Nullam non nisi est sit amet facilisis magna etiam.
        </Paragraph>
        <Paragraph>
          A diam maecenas sed enim ut sem viverra aliquet. Morbi tincidunt augue
          interdum velit euismod in pellentesque. Ut placerat orci nulla
          pellentesque dignissim enim. Sit amet dictum sit amet justo donec enim
          diam. Luctus venenatis lectus magna fringilla. Mauris pharetra et
          ultrices neque ornare aenean euismod. Curabitur vitae nunc sed velit
          dignissim. Sollicitudin aliquam ultrices sagittis orci a scelerisque
          purus semper. Tristique et egestas quis ipsum suspendisse.
        </Paragraph>
        <Paragraph>
          Massa sapien faucibus et molestie ac. Neque ornare aenean euismod
          elementum nisi quis eleifend quam. Non blandit massa enim nec. Cras
          fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Cursus
          metus aliquam eleifend mi in nulla. Laoreet sit amet cursus sit amet
          dictum sit. Quis auctor elit sed vulputate mi sit amet mauris. Lacus
          viverra vitae congue eu consequat ac felis.
        </Paragraph>
        <Paragraph>
          Orci eu lobortis elementum nibh tellus molestie. Malesuada fames ac
          turpis egestas maecenas pharetra convallis posuere morbi. Cras sed
          felis eget velit aliquet sagittis id consectetur. Nullam non nisi est
          sit amet facilisis. Nunc lobortis mattis aliquam faucibus purus in
          massa. Leo a diam sollicitudin tempor id eu nisl. Bibendum arcu vitae
          elementum
        </Paragraph>
        <Paragraph>
          curabitur vitae nunc sed. Ante in nibh mauris cursus mattis molestie a
          iaculis at. Maecenas volutpat blandit aliquam etiam erat velit
          scelerisque in. Hendrerit dolor magna eget est lorem ipsum. Dis
          parturient montes nascetur ridiculus mus mauris vitae. Tempor orci eu
          lobortis elementum. Nisl rhoncus mattis rhoncus urna neque viverra.
          Enim diam vulputate ut pharetra. Quam elementum pulvinar etiam non
          quam lacus suspendisse faucibus interdum. Egestas fringilla phasellus
          faucibus scelerisque. Nulla facilisi morbi tempus iaculis urna id
          volutpat lacus. Dictum sit amet justo donec. Vel facilisis volutpat
          est velit. Lorem dolor sed viverra ipsum nunc. Rhoncus mattis rhoncus
          urna neque. Amet tellus cras adipiscing enim eu turpis egestas
          pretium. Cursus eget nunc scelerisque viverra mauris in aliquam sem.
          Volutpat ac tincidunt vitae semper quis lectus. Erat nam at lectus
          urna duis convallis convallis
        </Paragraph>
        <Paragraph>
          tellus id. Euismod nisi porta lorem mollis aliquam. Quam id leo in
          vitae turpis. Ac odio tempor orci dapibus ultrices in iaculis.
          Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Id
          semper risus in hendrerit. Suspendisse ultrices gravida dictum fusce.
          Ut sem viverra aliquet eget sit. Vitae proin sagittis nisl rhoncus
          mattis rhoncus urna neque viverra. Ut venenatis tellus in metus
          vulputate eu scelerisque felis imperdiet. Volutpat diam ut venenatis
          tellus in metus vulputate eu. In fermentum et sollicitudin ac orci.
          Egestas sed tempus urna et pharetra pharetra massa massa. A
          pellentesque sit amet porttitor eget dolor morbi. Quis lectus nulla at
          volutpat diam ut venenatis.
        </Paragraph>
      </Content>
    </PageLayout>
  );
}

export default Home;
