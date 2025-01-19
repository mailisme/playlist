import axios from "axios";

function handleFile(file) {
    console.log(file);
    axios.post("http://localhost:5000", file)
}