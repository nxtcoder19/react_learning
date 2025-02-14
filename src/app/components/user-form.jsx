"use client"
const { useState } = require("react")

export const UserForm = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        age: ""
    })

    const [submitted, setSubmitted] = useState(false)

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        if (!user.name) newErrors.name = "Name is required";
        if (!user.email.includes("@")) newErrors.email = "Enter a valid email";
        if (!user.age || user.age < 18) newErrors.age = "Age must be 18+";
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }


        setSubmitted(true)
        alert(`Form Submitted!\nName: ${user.name}\nEmail: ${user.email}\nAge: ${user.age}`);
        setUser({ name: "", email: "", age: "" });
    }

    return (
        <div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label className="font-bold text-black">Name:</label>
                <input className="text-black border" type="text" name="name" value={user.name} onChange={handleChange} required />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}


                <label className="font-bold text-black">Email:</label>
                <input className="text-black border" type="email" name="email" value={user.email} onChange={handleChange} required />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                <label className="font-bold text-black">Age:</label>
                <input className="text-black border" type="number" name="age" value={user.age} onChange={handleChange} required />
                {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}s

                <button className="bg-black text-white px-4 py-2 rounded" type="submit">Submit</button>
            </form>

            {submitted && <p className="text-center text-black">Form Submitted!</p>}
        </div>
    )
}

