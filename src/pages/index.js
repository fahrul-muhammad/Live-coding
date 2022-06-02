import styles from "../commons/styles/Home.module.css";
import Layout from "../commons/components/Layout";
import Navbar from "../commons/components/navbar/index";
import Cards from "../commons/components/cards/index";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/actions/users";
import { getDataUsers } from "../commons/module/users/index";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Home() {
  const dispatch = useDispatch();
  const [users, setDataUsers] = useState([]);
  const [gender, setGender] = useState("");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (event) => {
    setGender(event.target.value);
    console.log(event.target.value);
  };

  const getDataUser = async () => {
    try {
      const result = await getDataUsers();
      dispatch(setUsers(result.data.results));

      if (gender !== "") {
        const SaveData = result.data.results.filter((val) => {
          return val.gender == gender;
        });
        setDataUsers(SaveData);
      } else {
        setDataUsers(result.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataUser();
  }, []);

  useEffect(() => {
    getDataUser();
  }, [gender]);

  const searcing = () => {
    const result = users.filter((val) => {
      return val.name.first == keyword || val.name.last == keyword;
    });
    console.log(result);
    setDataUsers(result);
  };

  const HandlePage = (event, value) => {
    setPage(value);
    console.log(value);
  };

  // const paginationHandle = () => {
  //   const limit = 10
  //   const offset = limit * 2 / page
  // }

  return (
    <>
      <Layout title="Home">
        <Navbar />
        <main className={styles.container}>
          <div className={styles.search}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              sx={{
                width: 1200,
              }}
            />
            <Button
              sx={{
                width: 150,
              }}
              variant="contained"
              onClick={searcing}
            >
              Search
            </Button>
          </div>
          <Box className={styles.input} sx={{ minWidth: 10 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={gender} label="Gender" onChange={handleChange}>
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={""}>Remove Filter</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <div className={styles.cards}>
            {users.map((val, idx) => {
              return (
                <Cards id={val.id.value} name={`${val.name.title}. ${val.name.first} ${val.name.last}`} address={`${val.location.city}, ${val.location.country}`} email={val.email} phone={val.phone} key={idx} photo={val.picture.large} />
              );
            })}
          </div>
          <Stack className={styles.pagination} spacing={2}>
            <Pagination onChange={HandlePage} count={users.length / 10} color="primary" />
          </Stack>
        </main>
      </Layout>
    </>
  );
}
