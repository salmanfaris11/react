export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-slate-200/80 p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Sign in to continue to your account
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="username"
              className="text-sm font-medium text-slate-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-slate-700"
              >
                Password
              </label>
              <a
                href="#forgot"
                className="text-xs font-medium text-blue-600 hover:text-blue-700 transition"
              >
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2.5 rounded-xl transition cursor-pointer mt-2"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Don't have an account?{" "}
          <a
            href="#signup"
            className="font-medium text-blue-600 hover:text-blue-700 transition"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}