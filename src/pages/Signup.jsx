import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupEmail } from "../auth/authService";
import logo from "../assets/New Project.jpg";
import nameImg from "../assets/New name.jpg";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // UI only (Firebase email/pass এ লাগে না)
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await signupEmail(email, password);
      navigate("/");
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 relative overflow-hidden">
      {/* background (match your hero vibe) */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-blue-700 to-sky-700" />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 min-h-screen grid place-items-center px-4 py-10">
        <div className="w-full max-w-xl">
          {/* top bar */}
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
              Already have an account?{" "}
              <Link to="/login" className="font-bold underline underline-offset-4 hover:text-white">
                Log in
              </Link>
            </p>
          </div>

          {/* card */}
          <div className="bg-white/90 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-7 sm:p-10">
            <h1 className="text-3xl font-black text-slate-900 text-center">
              Create an account
            </h1>
            <p className="mt-2 text-sm text-slate-500 text-center">
              Sign up to access courses, notes and practice resources.
            </p>

            <form onSubmit={handleSignup} className="mt-8 space-y-5">
              {/* Email */}
              <div>
                <label className="text-xs font-bold text-slate-700">Email</label>
                <div className="mt-2 relative">
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-slate-500 bg-slate-50 border border-slate-200 px-2 py-1 rounded-lg">
                    User ID
                  </span>
                </div>
              </div>

              {/* Phone (optional UI) */}
              <div>
                <label className="text-xs font-bold text-slate-700">Phone (optional)</label>
                <input
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="+8801XXXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <p className="mt-2 text-[11px] text-slate-500">
                  (Optional) You can add phone later. Email/Password auth works without it.
                </p>
              </div>

              {/* Password */}
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

                <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-500">
                  <p>• Use 8+ characters</p>
                  <p>• Use a number</p>
                  <p>• Use upper & lower</p>
                  <p>• Use a symbol</p>
                </div>
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
                {loading ? "Creating..." : "Sign up"}
              </button>

              <p className="text-[11px] text-slate-500 text-center">
                By creating an account, you agree to the{" "}
                <span className="underline underline-offset-4">Terms</span> and{" "}
                <span className="underline underline-offset-4">Privacy Policy</span>.
              </p>

              <p className="sm:hidden text-center text-sm text-slate-600">
                Already have an account?{" "}
                <Link to="/login" className="font-bold underline underline-offset-4">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
