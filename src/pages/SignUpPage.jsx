import Input from "../components/form/Input";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import SignUpButtonIcon from "../components/icons/SignUpButtonIcon";
import SignUpIcon from "../components/icons/SignUpIcon";

const SignUp = () => {
	return (
		<MainLayout>
			<div className="min-h-screen flex flex-col">
				<div className="flex justify-center items-center flex-1">
					<Card>
						<h1
  className="text-xl"
  style={{ fontFamily: "'Cedarville Cursive', cursive" }}
>
  Sign Up
</h1>
						<Input
							name="firstname"
							placeholder="Enter your First Name"
							label="Firstname"
							type="text"
						/>
						<Input
							name="lastname"
							placeholder="Enter your Last Name"
							label="Lastname"
							type="text"
						/>
						<Input
							name="email"
							placeholder="Enter your Email"
							label="Email"
							type="email"
						/>
						<Input
							name="password"
							placeholder="Enter your Password"
							label="Password"
							type="password"
						/>
						<button className="btn btn-primary rounded-full mt-5"> 
						 
							Submit
						</button>
						<h1 classname="text-sm mt-4 text-center">Already have an account? <a href="/login"className="text-primary font-bold">Log in</a></h1>
					</Card>
				</div>
			</div>
		</MainLayout>
	);
};

export default SignUp;