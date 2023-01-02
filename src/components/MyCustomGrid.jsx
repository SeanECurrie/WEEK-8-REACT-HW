import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MyCustomButton from "../components/MyCustomButton";
import MyCustomTable from "../components/MyCustomTable";
import ToDoList from "../components/ToDoList";
import { Formik, Field, Form } from "formik";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default class MyCustomGrid extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Box sx={{ gap: 2, p: 2, mx: "auto", width: "95%", flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item={true} xs={12}>
              <Item>
                <ToDoList />
              </Item>
            </Grid>
            <Grid item={true} xs={12}>
              <Item
                sx={{
                  backgroundColor: "primary.dark",
                  borderRadius: 4,

                  p: 4,
                }}
              >
                <MyCustomTable />
              </Item>
            </Grid>

            <Grid item={true} xs={6}>
              <Item>
                <div>
                  <Formik
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      email: "",
                    }}
                    onSubmit={async (values) => {
                      await new Promise((r) => setTimeout(r, 500));
                      alert(JSON.stringify(values, null, 2));
                    }}
                  >
                    <Form>
                      <label htmlFor="firstName">First Name</label>
                      <Field
                        id="firstName"
                        name="firstName"
                        placeholder="Jane"
                      />

                      <label htmlFor="lastName">Last Name</label>
                      <Field id="lastName" name="lastName" placeholder="Doe" />

                      <label htmlFor="email">Email</label>
                      <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                      />
                      <button type="submit">Submit</button>
                    </Form>
                  </Formik>
                </div>
              </Item>
            </Grid>
          </Grid>
          <Grid item={true} xs={12}>
            <Item sx={{ m: 2 }}>
              <MyCustomButton />
            </Item>
          </Grid>
        </Box>
      </div>
    );
  }
}
