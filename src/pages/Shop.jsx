import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const imageHover = {
  rest: {
    scale: 0,
    transition: { duration: 2, type: "tween", ease: "easeIn" },
  },
  hover: {
    scale: 1.2,
    transition: { duration: 0.5, type: "tween", ease: "easeOut" },
  },
};

function Shop() {
  return (
    <Container>
      <Stack direction="column" alignItems="center">
        <Box>
          <ImageList
            variant="quilted"
            cols={4}
            rowHeight={300}
            gap={15}
            initial="rest"
            whilehover="hover"
            animate="rest"
          >
            {shopData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
                sx={{
                  overflow: "hidden",
                }}
                component={motion.div}
                variants={imageHover}
              >
                <motion.img
                  {...srcset(item.img, 300, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                  height={item.rows === 2 ? 620 : 300}
                  variants={imageHover}
                />
                <Link to={item.path}>
                <ImageListItemBar
                  sx={{
                    background: "transparent",
                    "& .MuiImageListItemBar-title": {
                      fontSize: "32px",
                      textTransform: "uppercase",
                      color: "#f5f5f5",
                    },
                  }}
                  title={item.title}
                  position="bottom"
                  actionPosition="left"
                  component={motion.div}
                  variants={imageHover}
                /></Link>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Stack>
    </Container>
  );
}

const shopData = [
  {
    img: "https://images.unsplash.com/photo-1611886658071-b51744fac077",
    title: "Mens",
    rows: 2,
    cols: 2,
    path: "/mens",
  },
  {
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    title: "Tops",
    path: "/tops",
  },
  {
    img: "https://images.unsplash.com/photo-1634564235572-cd6f37694266",
    title: "Bottoms",
    path: "/bottoms",
  },
  {
    img: "https://images.unsplash.com/photo-1621835968506-428745015963",
    title: "Womens",
    cols: 2,
    rows: 2,
    path: "/womens",
  },
  {
    img: "https://images.unsplash.com/photo-1513188732907-5f732b831ca8",
    title: "Shoes",
    cols: 2,
    path: "/shoes",
  },
];

export default Shop;
