import { useState } from "react";
import "./App.css";

export default function App() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@=,/']+@[^\s@=,.';]+\.[^\s@=,;/]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);

        if (validateEmail(value)) {
            setEmailError("");
        } else {
            setEmailError("Email does not meet the standards");
        }
    };

    return (
        <div className="form-container">
            <h1>Sign up form</h1>
            <form onSubmit={handleEmailChange}>
                <div className="form-field">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        className={emailError ? "error" : validateEmail(email) ? "success" : ''}
                    />
                    {emailError && <div className="error-message">{emailError}</div>}
                </div>
            </form>
        </div>
    );
}
