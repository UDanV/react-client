import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Register.module.css";

const FIELDS = {
    NAME: "name",
    EMAIL: "email",
    PASS: "pass"
};

const Register = () => {
    const { NAME, EMAIL, PASS} = FIELDS;

    const [values, setValues] = useState({ [NAME]: "", [EMAIL]: "" , [PASS]: ""});

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value });
    };

    const handleClick = (e) => {
        const isDisabled = Object.values(values).some((v) => !v);

        if (isDisabled) e.preventDefault();
    };

    return (
            <div className={styles.wrap}>
                <div className={styles.container}>
                    <h1 className={styles.heading}>Register</h1>
                    <form className={styles.form}>
                        <div className={styles.group}>
                            <input
                                type="email"
                                name="email"
                                value={values[EMAIL]}
                                placeholder="Email"
                                className={styles.input}
                                onChange={handleChange}
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div className={styles.group}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Username"
                                value={values[NAME]}
                                className={styles.input}
                                onChange={handleChange}
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div className={styles.group}>
                            <input
                                type="password"
                                name="pass"
                                value={values[PASS]}
                                placeholder="Password"
                                className={styles.input}
                                onChange={handleChange}
                                autoComplete="off"
                                required
                            />
                        </div>

                        <Link
                            className={styles.group}
                            onClick={handleClick}
                            to={`/`}
                        >
                            <button type="submit" className={styles.button}>
                                Sign Up
                            </button>
                        </Link>
                        <Link
                            className={styles.group}
                            onClick={handleChange}
                            to={`/`}
                        >
                            <button className={styles.buttonauth}>
                                Sign In
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
    );
};

export default Register;
