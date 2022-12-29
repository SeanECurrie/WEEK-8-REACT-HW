import React, { Component } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import { itemData } from "./data";
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

export default class MyCustomIMGTable extends Component {
  render() {
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
              {itemData.map((item) => (
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

                  <ImageListItemBar
                    sx={{
                      background: "transparent",
                      "& .MuiImageListItemBar-title": {
                        fontSize: "20px",
                        textTransform: "uppercase",
                        color: "#333",
                      },
                    }}
                    title={item.title}
                    position="bottom"
                    actionPosition="left"
                    component={motion.div}
                    variants={imageHover}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Stack>
      </Container>
    );
  }
}
