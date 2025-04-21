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

import React, { useEffect, useRef } from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import { motion } from "framer-motion";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontSize: "3vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const images = [
  { original: "./images/fig1.jpeg", thumbnail: "./images/fig1.jpeg" },
  { original: "./images/fig2.jpeg", thumbnail: "./images/fig2.jpeg" },
  { original: "./images/fig3.jpeg", thumbnail: "./images/fig3.jpeg" },
  { original: "./images/fig4.jpeg", thumbnail: "./images/fig4.jpeg" },
];

export default function Gallery() {
  const galleryRef = useRef(null);
  const galleryInstanceRef = useRef(null); // gallery instance

  useEffect(() => {
    const galleryElement = galleryRef.current;

    const handleWheel = (e: WheelEvent) => {
      if (!galleryElement || !galleryElement.contains(e.target as Node)) return;

      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // 👉 좌우 스크롤만 슬라이드 작동
        e.preventDefault(); // 상하 스크롤은 막지 않음
        if (e.deltaX > 0) {
          galleryInstanceRef.current?.slideRight();
        } else {
          galleryInstanceRef.current?.slideLeft();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <Wrapper>
      <motion.div
        ref={galleryRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2 }}
      >
        <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
          <Title>우리의 아름다운 순간</Title>
        </Divider>
        <ImageGallery
          ref={(ref) => {
            galleryInstanceRef.current = ref;
          }}
          showPlayButton={false}
          showFullscreenButton={false}
          slideOnWheel={false} // 직접 제어할 거니까 끔
          items={images}
        />
      </motion.div>
    </Wrapper>
  );
}
