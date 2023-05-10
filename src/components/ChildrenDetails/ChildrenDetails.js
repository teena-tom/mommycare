import { useEffect, useState } from "react";

import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL ?? "http://localhost:5050/api";

function ChildrenDetails() {
    const [ChildrenList, setChildrenList] = useState(null);
    useEffect(() => {
        if(ChildrenList === null){
            axios
            .get(`${baseUrl}/children`)
            .then(response => {
                setChildrenList(response.data);
            })
            .catch(error => {
                alert(error);

            });
        }
    }, [ChildrenList]);
    return(
        <>
        console.log(ChildrenList);
        </>
    );
}