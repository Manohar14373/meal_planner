import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [form, setForm] = useState({ email: state?.email || "", password: "" });
  const [error, setError] = useState("");
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const res = login(form);
    if (!res.ok) return setError(res.error);
    navigate("/dashboard");
  };

  return (
    <main className="auth">
      <form className="panel" onSubmit={onSubmit}>
        {state?.created && <p className="success" role="status">✅ Account created successfully. Log in to continue.</p>}
        <h1>Welcome back</h1>
        <p className="muted">Log in to see your plan.</p>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={onChange} required />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" value={form.password} onChange={onChange} required autoFocus={!!state?.email} />
        {error && <p className="error" role="alert">{error}</p>}
        <button className="btn btn-block" type="submit">Log in</button>
        <p className="muted center">New here? <Link to="/signup">Create an account</Link></p>
      </form>
    </main>
  );
}
