import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/New Project.jpg";
import nameImg from "../assets/New name.jpg";
import { AuthContext } from "../providers/AuthProvider";

export default function Signup() {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogle = async () => {
  setErr("");
  setLoading(true);
  try {
    await googleSignIn();
    navigate(from, { replace: true });
  } catch (e) {
    setErr(e?.message || "Google sign-up failed");
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
              Already have an account?{" "}
              <Link to="/login" className="font-bold underline underline-offset-4 hover:text-white">
                Log in
              </Link>
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-7 sm:p-10">
            <h1 className="text-3xl font-black text-slate-900 text-center">Create an account</h1>
            <p className="mt-2 text-sm text-slate-500 text-center">
              No manual registration needed — use <span className="font-semibold">Google Sign-in</span>.
            </p>

            {err && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm">
                {err}
              </div>
            )}

            <div className="mt-8 space-y-4">
              <button
                type="button"
                onClick={handleGoogle}
                disabled={loading}
                className="w-full rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 font-extrabold py-3.5 text-sm transition disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Continue with Google"}
              </button>

              <p className="text-[11px] text-slate-500 text-center">
                By continuing, you agree to the{" "}
                <span className="underline underline-offset-4">Terms</span> and{" "}
                <span className="underline underline-offset-4">Privacy Policy</span>.
              </p>

              <p className="sm:hidden text-center text-sm text-slate-600">
                Already have an account?{" "}
                <Link to="/login" className="font-bold underline underline-offset-4">
                  Log in
                </Link>
              </p>

              <div className="text-center text-xs text-slate-500">
                Tip: You can change your Google profile name/photo anytime.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
