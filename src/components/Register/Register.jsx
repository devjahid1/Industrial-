import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/Auth";
import { Link } from "react-router-dom";

const Register = () => {
    const {signUp, user} = useContext(AuthContext)

const handleRegister = (e) =>{

    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password');
    signUp(email, password)
     .then(result =>{
        console.log(result.user);
     })
     .catch(error =>{
        console.error(error.message)
     })
}

useEffect(() => {
	if (user) {
		console.log("User is sign up:", user);
		// Redirect to another page or display user info if needed
	} else {
		console.log("No user is sign up .");
	}
}, [user]);


    return (
<div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-[#0057B8] dark:text-white mt-24 mb-24  mx-auto shadow-xl">
	<h1 className="text-2xl font-bold text-center">Sign Up</h1>

	<form onSubmit={handleRegister} noValidate="" action="" className="space-y-6">

		<div className="space-y-1 text-sm">
			<label htmlFor="name"  className=" dark:text-white">Name</label>
			<input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>

        <div className="space-y-1 text-sm">
			<label htmlFor="password" className=" dark:text-white">Email</label>
			<input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>


		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block dark:text-white">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />


		</div>
		<button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-[#173f6d] shadow-lg">Sign Up</button>
	</form>

	<p className="text-xs text-center sm:px-6 dark:text-white">have an account?
		<Link to='/login' className="underline dark:text-white">Sign In</Link>
	</p>
</div>
    );
};

export default Register;