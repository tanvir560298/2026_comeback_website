import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/New Project.jpg";
import nameImg from "../assets/New name.jpg";
import { AuthContext } from "../providers/AuthProvider";

export default function Login() {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const [email, setEmail] = useState(""); // UI only
  const [password, setPassword] = useState(""); // UI only
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogle = async () => {
  setErr("");
  setLoading(true);
  try {
    const { isNewUser } = await googleSignIn();

    if (isNewUser) {
      // new user হলে login allow না
      navigate("/signup", { replace: true });
      return;
    }

    // old user হলে login allow
    navigate(from, { replace: true });
  } catch (e) {
    setErr(e?.message || "Google sign-in failed");
  } finally {
    setLoading(false);
  }
};


  // Since you're Google-only, we prevent email/password submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("This site uses Google Sign-in only. Please click Continue with Google.");
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
              Don’t have an account?{" "}
              <Link to="/signup" className="font-bold underline underline-offset-4 hover:text-white">
                Sign up
              </Link>
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-7 sm:p-10">
            <h1 className="text-3xl font-black text-slate-900 text-center">Welcome back</h1>
            <p className="mt-2 text-sm text-slate-500 text-center">
              This platform uses <span className="font-semibold">Google Sign-in only</span>.
            </p>

            {err && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm">
                {err}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="text-xs font-bold text-slate-700">Email (UI only)</label>
                <div className="mt-2 relative">
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-slate-500 bg-slate-50 border border-slate-200 px-2 py-1 rounded-lg">
                    User ID
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700">Password (UI only)</label>
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
                />

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-[11px] text-slate-500">Tip: Use Google Sign-in</p>

                  <Link
                    to="/forgot-password"
                    className="text-[11px] font-bold text-slate-700 underline underline-offset-4 hover:text-slate-900"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              {/* Email login disabled */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-900/60 text-white font-extrabold py-3.5 transition cursor-not-allowed"
                title="Email/Password disabled"
              >
                Log in (disabled)
              </button>

              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-[11px] text-slate-500">OR</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <button
                type="button"
                onClick={handleGoogle}
                disabled={loading}
                className="w-full rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 font-extrabold py-3 text-sm transition disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Continue with Google"}
              </button>

              <p className="text-[11px] text-slate-500 text-center">
                By logging in, you agree to the{" "}
                <span className="underline underline-offset-4">Terms</span> and{" "}
                <span className="underline underline-offset-4">Privacy Policy</span>.
              </p>

              <p className="sm:hidden text-center text-sm text-slate-600">
                Don’t have an account?{" "}
                <Link to="/signup" className="font-bold underline underline-offset-4">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
