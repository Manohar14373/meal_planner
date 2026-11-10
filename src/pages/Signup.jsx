import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.password.length < 6) return setError("Use at least 6 characters for your password.");
    const res = signup(form);
    if (!res.ok) return setError(res.error);
    setDone(true);
    setTimeout(() => navigate("/login", { state: { created: true, email: form.email } }), 1800);
  };

  if (done)
    return (
      <main className="auth">
        <div className="panel success-box" role="status">
          <div className="big-check">✅</div>
          <h1>Account created successfully</h1>
          <p className="muted">Taking you to the login page…</p>
          <Link className="btn btn-block" to="/login" state={{ created: true, email: form.email }}>Log in now</Link>
        </div>
      </main>
    );

  return (
    <main className="auth">
      <form className="panel" onSubmit={onSubmit}>
        <h1>Create your account</h1>
        <p className="muted">Plan meals that match your goal.</p>
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" value={form.name} onChange={onChange} required />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={onChange} required />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" value={form.password} onChange={onChange} required />
        {error && <p className="error" role="alert">{error}</p>}
        <button className="btn btn-block" type="submit">Create account</button>
        <p className="muted center">Already registered? <Link to="/login">Log in</Link></p>
      </form>
    </main>
  );
}
