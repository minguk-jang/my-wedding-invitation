// import ImageGallery from "react-image-gallery";
// import { Divider } from "antd";
// import { styled } from "@stitches/react";
// import { motion } from "framer-motion"; // Framer Motion 추가
// import "react-image-gallery/styles/css/image-gallery.css";

// const Wrapper = styled("div", {
//   background: "#efebe9",
//   backgroundImage: "url(./assets/GroovePaper.png)",
//   width: "100%",
// });

// const Title = styled("p", {
//   fontSize: "3vh",
//   fontWeight: "bold",
//   opacity: 0.85,
//   marginBottom: 0,
// });

// const images = [
//   {
//     original: "./images/fig1.jpeg",
//     thumbnail: "./images/fig1.jpeg",
//   },
//   {
//     original: "./images/fig2.jpeg",
//     thumbnail: "./images/fig2.jpeg",
//   },
//   {
//     original: "./images/fig3.jpeg",
//     thumbnail: "./images/fig3.jpeg",
//   },
//   {
//     original: "./images/fig4.jpeg",
//     thumbnail: "./images/fig4.jpeg",
//   }
// ];

// export default function Gallery() {
//   return (
//     <Wrapper>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.2 }}
//         transition={{ duration: 1.2 }}
//       >
//         <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
//           <Title>우리의 아름다운 순간</Title>
//         </Divider>
//         <ImageGallery
//           showPlayButton={false}
//           showFullscreenButton={false}
//           items={images}
//         />
//       </motion.div>
//     </Wrapper>
//   );
// }

import React from "react";
import { styled } from "@stitches/react";
import { Divider } from "antd";
import { motion } from "framer-motion";
import {
  PhotoProvider,
  PhotoView,
} from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 40,
});

const Title = styled("p", {
  fontSize: "3vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const ImageGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "12px",
  padding: "0 24px",
});

const StyledImage = styled("img", {
  width: "100%",
  borderRadius: "8px",
  cursor: "pointer",
});

const images = [
  "./images/fig1.jpeg",
  "./images/fig2.jpeg",
  "./images/fig3.jpeg",
  "./images/fig4.jpeg",
];

export default function Gallery() {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2 }}
      >
        <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
          <Title>우리의 아름다운 순간</Title>
        </Divider>

        <PhotoProvider loop>
          <ImageGrid>
            {images.map((src, index) => (
              <PhotoView key={index} src={src}>
                <StyledImage src={src} alt={`fig${index + 1}`} />
              </PhotoView>
            ))}
          </ImageGrid>
        </PhotoProvider>
      </motion.div>
    </Wrapper>
  );
}
