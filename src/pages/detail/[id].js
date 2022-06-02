import styles from "../../commons/styles/detail.module.css";
import Layout from "../../commons/components/Layout";
import Navbar from "../../commons/components/navbar/index";
import Cards from "../../commons/components/cards/index";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setUsers } from "../../redux/actions/users";
import { getDataUsers } from "../../commons/module/users/index";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function Detail() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Layout title="Home">
        <Navbar />
        <main className={styles.container}>
          <p>detail contact</p>
        </main>
      </Layout>
    </>
  );
}
