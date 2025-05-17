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
  maxWidth: "90vw",
  maxHeight: "90vh",
  objectFit: "contain",
  borderRadius: "12px",
  cursor: "pointer",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
});

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { basePath } = useRouter(); // ✅ basePath 가져오기

  const groupedImages = [];
  for (let i = 0; i < images.length; i += 2) {
    groupedImages.push(images.slice(i, i + 2));
  }

  return (
    <div
      style={{
        background: "#efebe9",
        backgroundImage: `url(${basePath}/assets/GroovePaper.png)`, // ✅ 수정
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
                  src={`${basePath}${src}`} // ✅ basePath 붙임
                  alt={`image${groupIdx * 2 + idx + 1}`}
                  onClick={() => setSelectedImage(`${basePath}${src}`)} // ✅ 클릭 시에도 basePath 포함
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
              <EnlargedImage
                src={selectedImage}
                alt="확대 이미지"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            </Overlay>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}


