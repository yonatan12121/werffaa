import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./AddEdit.css";
import { toast } from "react-toastify";
import axios from "axios";
import UserLayout from "./UserLayout";



const Insert_payment = () => {
   

    // const { } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

       
       

        axios
            .post("http://192.168.1.10:5000/api/ins_payment", {
                
                
              
            })
            .then(() => {
               
            })
            .catch((err) => toast.error(err.response.data));
        toast.success("succses");
        // setTimeout(() => history("/"), 500);
    };

    const handleRestart = (e) => {
        e.preventDefault();

        axios
            .get("http://192.168.1.10:5000/system/reboot", {



            })
            .then(() => {

            })
            .catch((err) => toast.error(err.response.data));
        toast.success("restarted");
        
    }

    
    return (
        <div className="d-flex justify-content-start ">
            <div className="content-div pt-3 w-100">
                <div className="card">
                    <div className="card-header">
                        <h2>Banker Side</h2>
                    </div>
                    <div className="card-body">
                        <input
                            type="submit"
                            Value={"Done"}
                            className=" btn btn-lg btn-success  my-3 mx-4"
                            onClick={handleSubmit}
                        />
                        <input
                            type="submit"
                            Value={"restart"}
                            className=" btn btn-lg btn-success  my-3 mx-4"
                            onClick={handleRestart}
                        />

                       
                        <div className="col-12">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Insert_payment