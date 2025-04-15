import { useForm } from "react-hook-form";
interface FormData {
    name: string;
    email: string;
    password: string;
}
const Form = () => {
    // register:  is used to connect input fields to the form.
    // handleSubmit:  is a function to handle form submission.
    // errors:  contains validation errors for the form.

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();
    console.log(errors);

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    className="border"
                    {...register("name", { required: "Name is required" })}
                />

                {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid Email address",
                        },
                    })}
                    className="border"
                />
                {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                )}
            </div>

            <div>
                <input
                    type="password"
                    {...register("password", {
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                        },
                    })}
                    placeholder="Password"
                    className="border"
                />
                {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                )}
            </div>
            <button
                className="bg-teal-400"
                disabled={isSubmitting}
                type="submit"
            >
                {isSubmitting ? "Loading..." : "Submit"}
            </button>
        </form>
    );
};
export default Form;
