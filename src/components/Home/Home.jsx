import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/Auth";
import { Link } from "react-router-dom";

const Login = () => {
    const { signIn, googleLogin, githubLogin, resetPassword, user } = useContext(AuthContext);
    const [email, setEmail] = useState(""); // Controlled email input
    const [password, setPassword] = useState(""); // Controlled password input
    const [message, setMessage] = useState("");
    const [isResetting, setIsResetting] = useState(false); // For toggling the reset password form

    // Handle Sign In
    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signIn(email, password);
        } catch (error) {
            setMessage("Error: Invalid credentials or network issue.");
            console.error("Login Error:", error);
        }
    };

    // Handle Google Login
    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
        } catch (error) {
            console.error("Google Login Error:", error);
        }
    };

    // Handle GitHub Login
    const handleGithubLogin = async () => {
        try {
            await githubLogin();
        } catch (error) {
            console.error("GitHub Login Error:", error);
        }
    };

    // Handle Password Reset
    const handlePasswordReset = async (e) => {
        e.preventDefault();
        if (!email) {
            setMessage("Please enter a valid email.");
            return;
        }
        try {
            await resetPassword(email);
            setMessage("Password reset email sent. Check your inbox.");
            setIsResetting(false); // Hide reset form after sending email
        } catch (error) {
            setMessage("Error: Unable to send reset email. Please try again.");
            console.error("Password Reset Error:", error);
        }
    };

    // Toggle Forgot Password
    const handleForgotPasswordClick = () => {
        setIsResetting(true); // Show password reset form
    };

    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-[#0057B8] dark:text-white mt-24 mb-24 mx-auto">
            <h1 className="text-2xl font-bold text-center">Sign in</h1>

            {!isResetting ? (
                <form onSubmit={handleSignIn} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-white">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={email} // Controlled input
                            onChange={(e) => setEmail(e.target.value)} // Update email state
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                        />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-white">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={password} // Controlled input
                            onChange={(e) => setPassword(e.target.value)} // Update password state
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                        />
                        <div className="flex justify-end text-xs dark:text-white">
                            <a
                                href="#"
                                onClick={handleForgotPasswordClick}
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </div>

                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-[#173f6d] shadow-lg">Sign in</button>
                </form>
            ) : (
                <form onSubmit={handlePasswordReset} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-white">Enter your email to reset password</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={email} // Controlled input
                            onChange={(e) => setEmail(e.target.value)} // Update email state
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                        />
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-[#173f6d] shadow-lg">Reset Password</button>
                    <div className="text-center text-sm text-white">
                        <p>{message}</p>
                    </div>
                </form>
            )}

            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                <p className="px-3 text-sm dark:text-white">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>

            <div className="flex justify-center space-x-4">
                <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
                    {/* Google Icon SVG */}
                </button>
                <button onClick={handleGithubLogin} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                    {/* GitHub Icon SVG */}
                </button>
            </div>

            <p className="text-xs text-center sm:px-6 dark:text-white">
                Don't have an account? <Link to="/register" className="underline dark:text-white">Sign Up</Link>
            </p>
        </div>
    );
};

export default Login;
