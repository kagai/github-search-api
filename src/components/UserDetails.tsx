import React, { useEffect, Fragment ,useContext } from 'react'

import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/actions";


const userDetails = ({match}) => {
   
    return (
        <h1>Details here</h1>
    )
}


export default userDetails;
