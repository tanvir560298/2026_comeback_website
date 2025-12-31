import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginEmail } from "../auth/authService";
import logo from "../assets/New Project.jpg";
import nameImg from "../assets/New name.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await loginEmail(email, password);
      navigate("/");
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-blue-700 to-sky-700" />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 min-h-screen grid place-items-center px-4 py-10">
        <div className="w-full max-w-xl">
          <div className="flex items-center justify-between text-white/85 text-sm mb-5">
            <div className="flex items-center gap-2">
              <span className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 overflow-hidden grid place-items-center">
                <img src={logo} alt="TA" className="h-full w-full object-contain" />
              </span>
              <span className="h-10 px-3 rounded-xl bg-white/10 border border-white/15 overflow-hidden grid place-items-center">
                <img src={nameImg} alt="TA Learning Platform" className="h-6 object-contain" />
              </span>
            </div>

            <p className="hidden sm:block">
              New here?{" "}
              <Link to="/signup" className="font-bold underline underline-offset-4 hover:text-white">
                Create account
              </Link>
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-7 sm:p-10">
            <h1 className="text-3xl font-black text-slate-900 text-center">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-slate-500 text-center">
              Welcome back! Log in to continue.
            </p>

            <form onSubmit={handleLogin} className="mt-8 space-y-5">
              <div>
                <label className="text-xs font-bold text-slate-700">Email</label>
                <input
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700">Password</label>
                  <button
                    type="button"
                    onClick={() => setShow((s) => !s)}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900"
                  >
                    {show ? "Hide" : "Show"}
                  </button>
                </div>

                <input
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="••••••••"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {err && (
                <div className="text-sm text-red-600 font-semibold bg-red-50 border border-red-200 p-3 rounded-xl">
                  {err}
                </div>
              )}

              <button
                disabled={loading}
                className="w-full rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3.5 transition disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>

              <p className="sm:hidden text-center text-sm text-slate-600">
                New here?{" "}
                <Link to="/signup" className="font-bold underline underline-offset-4">
                  Create account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
