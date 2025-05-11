// import React from "react";
// import { styled } from "@stitches/react";
// import { Divider } from "antd";
// import { motion } from "framer-motion";
// import {
//   PhotoProvider,
//   PhotoView,
// } from "react-photo-view";
// import "react-photo-view/dist/react-photo-view.css";

// const Wrapper = styled("div", {
//   background: "#efebe9",
//   backgroundImage: "url(./assets/GroovePaper.png)",
//   width: "100%",
//   paddingBottom: 40,
// });

// const Title = styled("p", {
//   fontSize: "3vh",
//   fontWeight: "bold",
//   opacity: 0.85,
//   marginBottom: 0,
// });

// const ImageGrid = styled("div", {
//   display: "grid",
//   gridTemplateColumns: "repeat(2, 1fr)",
//   gap: "12px",
//   padding: "0 24px",
// });

// const StyledImage = styled("img", {
//   width: "100%",
//   borderRadius: "8px",
//   cursor: "pointer",
// });

// const images = [
//   "./images/fig1.jpeg",
//   "./images/fig2.jpeg",
//   "./images/fig3.jpeg",
//   "./images/fig4.jpeg",
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

//         <PhotoProvider loop>
//           <ImageGrid>
//             {images.map((src, index) => (
//               <PhotoView key={index} src={src}>
//                 <StyledImage src={src} alt={`fig${index + 1}`} />
//               </PhotoView>
//             ))}
//           </ImageGrid>
//         </PhotoProvider>
//       </motion.div>
//     </Wrapper>
//   );
// }

import { images } from "@/constants/images";
import { Divider } from "antd";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { styled } from "@stitches/react";
import "react-photo-view/dist/react-photo-view.css";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 72,
});

const Title = styled("p", {
  fontSize: "4vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const ScrollContainer = styled("div", {
  display: "flex",
  overflowX: "auto",
  padding: "0 24px",
  gap: "12px",
  scrollSnapType: "x mandatory",
});

const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  flex: "0 0 auto",
  width: "45%",
});

const StyledImage = styled("img", {
  width: "100%",
  height: "300px",        // ✅ 높이 고정 (원하는 수치로 조정 가능)
  borderRadius: "8px",
  cursor: "pointer",
  objectFit: "cover",      // ✅ 비율 무시하고, 채우기 (필수!)
});

export default function Gallery() {
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 2) {
    groupedImages.push(images.slice(i, i + 2));
  }

  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2 }}
      >
        <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
          <Title>우리의 순간</Title>
        </Divider>

        <PhotoProvider loop>
          <ScrollContainer>
            {groupedImages.map((group, groupIdx) => (
              <Column key={groupIdx}>
                {group.map((src, idx) => (
                  <PhotoView key={idx} src={src} disableZoom>
                    <StyledImage src={src} alt={`image${groupIdx * 2 + idx + 1}`} />
                  </PhotoView>
                ))}
              </Column>
            ))}
          </ScrollContainer>
        </PhotoProvider>
      </motion.div>
    </Wrapper>
  );
}
