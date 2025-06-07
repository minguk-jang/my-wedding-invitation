// // import { images } from "@/constants/images";
// // import { Divider } from "antd";
// // import { motion } from "framer-motion";
// // import { PhotoProvider, PhotoView } from "react-photo-view";
// // import { styled } from "@stitches/react";
// // import "react-photo-view/dist/react-photo-view.css";

// // const Wrapper = styled("div", {
// //   background: "#efebe9",
// //   backgroundImage: "url(./assets/GroovePaper.png)",
// //   width: "100%",
// //   paddingBottom: 72,
// // });

// // const Title = styled("p", {
// //   fontSize: "1.75rem",
// //   fontWeight: "bold",
// //   opacity: 0.85,
// //   marginBottom: 0,
// // });

// // const ScrollContainer = styled("div", {
// //   display: "flex",
// //   overflowX: "auto",
// //   padding: "0 24px",
// //   gap: "12px",
// //   scrollSnapType: "x mandatory",
// // });

// // const Column = styled("div", {
// //   display: "flex",
// //   flexDirection: "column",
// //   gap: "12px",
// //   flex: "0 0 auto",
// //   width: "45%",
// // });

// // const StyledImage = styled("img", {
// //   width: "100%",
// //   height: "300px",        // ✅ 높이 고정 (원하는 수치로 조정 가능)
// //   borderRadius: "8px",
// //   cursor: "pointer",
// //   objectFit: "cover",      // ✅ 비율 무시하고, 채우기 (필수!)
// // });

// // export default function Gallery() {
// //   const groupedImages = [];
// //   for (let i = 0; i < images.length; i += 2) {
// //     groupedImages.push(images.slice(i, i + 2));
// //   }

// //   return (
// //     <Wrapper>
// //       <motion.div
// //         initial={{ opacity: 0, y: 50 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true, amount: 0.2 }}
// //         transition={{ duration: 1.2 }}
// //       >
// //         <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
// //           <Title>우리의 순간</Title>
// //         </Divider>

// //         <PhotoProvider loop>
// //           <ScrollContainer>
// //             {groupedImages.map((group, groupIdx) => (
// //               <Column key={groupIdx}>
// //                 {group.map((src, idx) => (
// //                   <PhotoView key={idx} src={src}>
// //                     <StyledImage src={src} alt={`image${groupIdx * 2 + idx + 1}`} />
// //                     {/* <StyledImage src={src} alt="..." /> */}
// //                   </PhotoView>
// //                 ))}
// //               </Column>
// //             ))}
// //           </ScrollContainer>
// //         </PhotoProvider>
// //       </motion.div>
// //     </Wrapper>
// //   );
// // }


// import { images } from "@/constants/images";
// import { Divider } from "antd";
// import { motion, AnimatePresence } from "framer-motion";
// import { styled } from "@stitches/react";
// import { useState } from "react";

// const Wrapper = styled("div", {
//   background: "#efebe9",
//   backgroundImage: "url(./assets/GroovePaper.png)",
//   width: "100%",
//   paddingBottom: 72,
// });

// const Title = styled("p", {
//   fontSize: "1.75rem",
//   fontWeight: "bold",
//   opacity: 0.85,
//   marginBottom: 0,
// });

// const ScrollContainer = styled("div", {
//   display: "flex",
//   overflowX: "auto",
//   padding: "0 24px",
//   gap: "12px",
//   scrollSnapType: "x mandatory",
// });

// const Column = styled("div", {
//   display: "flex",
//   flexDirection: "column",
//   gap: "12px",
//   flex: "0 0 auto",
//   width: "45%",
// });

// const StyledImage = styled("img", {
//   width: "100%",
//   height: "300px",
//   borderRadius: "8px",
//   cursor: "pointer",
//   objectFit: "cover",
// });

// const Overlay = styled(motion.div, {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100vw",
//   height: "100vh",
//   backgroundColor: "rgba(0, 0, 0, 0.6)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   zIndex: 1000,
// });

// const EnlargedImage = styled(motion.img, {
//   maxWidth: "90vw",
//   maxHeight: "90vh",
//   objectFit: "contain",
//   borderRadius: "12px",
//   cursor: "pointer",
//   boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
// });

// export default function Gallery() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const groupedImages = [];
//   for (let i = 0; i < images.length; i += 2) {
//     groupedImages.push(images.slice(i, i + 2));
//   }

//   return (
//     <Wrapper>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.2 }}
//         transition={{ duration: 1.2 }}
//       >
//         <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
//           <Title>우리의 순간</Title>
//         </Divider>

//         <ScrollContainer>
//           {groupedImages.map((group, groupIdx) => (
//             <Column key={groupIdx}>
//               {group.map((src, idx) => (
//                 <StyledImage
//                   key={idx}
//                   src={src}
//                   alt={`image${groupIdx * 2 + idx + 1}`}
//                   onClick={() => setSelectedImage(src)}
//                 />
//               ))}
//             </Column>
//           ))}
//         </ScrollContainer>

//         <AnimatePresence>
//           {selectedImage && (
//             <Overlay
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedImage(null)}
//             >
//               <EnlargedImage
//                 src={selectedImage}
//                 alt="확대 이미지"
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.8 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </Overlay>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </Wrapper>
//   );
// }
import { images } from "@/constants/images";
import { Divider } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "@stitches/react";
import { useRouter } from "next/router"; // ✅ basePath 사용
import { useState } from "react";

const Title = styled("p", {
  fontSize: "1.75rem",
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
  height: "300px",
  borderRadius: "8px",
  cursor: "pointer",
  objectFit: "cover",
  WebkitUserSelect: "none",
  WebkitTouchCallout: "none",
  userSelect: "none",
  "-webkit-touch-callout": "none",
  "-webkit-user-select": "none",
  "-khtml-user-select": "none",
  "-moz-user-select": "none",
  "-ms-user-select": "none",
  "touch-action": "none",
});

const Overlay = styled(motion.div, {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
});

const EnlargedImage = styled(motion.img, {
  maxWidth: "95vw",
  maxHeight: "85vh",
  width: "100%",
  objectFit: "contain",
  borderRadius: "12px",
  cursor: "pointer",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  WebkitUserSelect: "none",
  WebkitTouchCallout: "none",
  userSelect: "none",
});

const NavigationButton = styled("button", {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(255, 255, 255, 0.8)",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  minWidth: "40px",
  maxWidth: "40px",
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: "1.5rem",
  color: "#333",
  transition: "all 0.2s",
  WebkitAppearance: "none",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.9)",
  },
  variants: {
    position: {
      left: { left: "20px" },
      right: { right: "20px" },
    },
  },
});

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const { basePath } = useRouter();

  // basePath를 포함한 전체 이미지 경로 배열 생성
  const fullPathImages = images.map(src => `${basePath}${src}`);

  const handleImageClick = (index: number) => {
    setSelectedImage(fullPathImages[index]);
    setCurrentImageIndex(index);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex - 1 + fullPathImages.length) % fullPathImages.length;
    setSelectedImage(fullPathImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % fullPathImages.length;
    setSelectedImage(fullPathImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const preventDefault = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const groupedImages = [];
  for (let i = 0; i < images.length; i += 2) {
    groupedImages.push(images.slice(i, i + 2));
  }

  return (
    <div
      style={{
        background: "#efebe9",
        backgroundImage: `url(${basePath}/assets/GroovePaper.png)`,
        backgroundRepeat: "repeat",
        width: "100%",
        paddingBottom: 72,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2 }}
      >
        <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
          <Title>우리의 순간</Title>
        </Divider>

        <ScrollContainer>
          {groupedImages.map((group, groupIdx) => (
            <Column key={groupIdx}>
              {group.map((src, idx) => (
                <StyledImage
                  key={idx}
                  src={`${basePath}${src}`}
                  alt={`웨딩 사진 ${groupIdx * 2 + idx + 1}`}
                  onClick={() => handleImageClick(groupIdx * 2 + idx)}
                  onContextMenu={preventDefault}
                />
              ))}
            </Column>
          ))}
        </ScrollContainer>

        <AnimatePresence>
          {selectedImage && (
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <NavigationButton position="left" onClick={handlePrevImage}>
                ‹
              </NavigationButton>
              <EnlargedImage
                src={selectedImage}
                alt={`웨딩 사진 ${currentImageIndex + 1}`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onContextMenu={preventDefault}
              />
              <NavigationButton position="right" onClick={handleNextImage}>
                ›
              </NavigationButton>
            </Overlay>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}


