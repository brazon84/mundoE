import React, { useState } from 'react'


function Contacto() {
    const [sent, setSent] = useState(false)
    const [touched, setTouched] = useState({})
    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })
    const [errors, setErrors] = useState({})

    const sendContactForm = async (data) =>
        fetch("http://pingruposeis2203.epizy.com/home/vol11_1/epizy.com/epiz_33704435", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })


    function validate(input) {
        let errors = {};
        if (!input.name) {
            errors.name = "Campo Requerido"
        }
        if (!input.email) {
            errors.email = "Campo Requerido"
        }
        if (!input.phone) {
            errors.phone = "Campo Requerido"
        }
        if (!input.message) {
            errors.message = "Campo Requerido"
        }
        return errors;
    };



    const handleOnBlur = ({ target }) => setTouched((input) => ({
        ...input,
        [target.name]: true
    }))
    const handleInputChange = ({ target }) => {
        setInput({
            ...input,
            [target.name]: target.value
        })
        setErrors(validate({
            ...input,
            [target.name]: target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await sendContactForm(input)
            setTouched({})
            setInput({
                name: "",
                email: "",
                phone: "",
                message: ""
            })
            setSent(true)
        } catch (error) {
            console.warn(error.message)
        }
    }

    return (
        <div style={{ position: 'relative', marginTop: "160px", top: "100px" }}>
            <div className='center'>
                {sent ? (<h6 style={{ position: "absolute", left: "360px", color: "lightgreen", textAlign: "right" }}>Message Sent ✅</h6>) : ""}
                <h6>Contactanos</h6>
                <form style={{ minHeight: "500px", maxHeight: "650px" }} onSubmit={handleSubmit}>
                    <div className="txt_field">
                        <input
                            type="text"
                            onChange={handleInputChange}
                            onBlur={handleOnBlur}
                            name="name"
                            value={input.name}
                        />
                        <span></span>
                        <label htmlFor='name'>Nombre</label>
                        {(errors.name && touched.name) && <p className="error-text"> {errors.name} </p>}
                    </div>
                    <div className="txt_field">
                        <input
                            type="email"
                            onChange={handleInputChange}
                            onBlur={handleOnBlur}
                            name="email"
                            value={input.email}
                        />
                        <span></span>
                        <label htmlFor='email'>Email</label>
                        {(errors.email && touched.email) && <p className="error-text"> {errors.email} </p>}
                    </div>
                    <div className="txt_field">
                        <input
                            type="phone"
                            onChange={handleInputChange}
                            onBlur={handleOnBlur}
                            name="phone"
                            value={input.phone}
                        />
                        <span></span>
                        <label htmlFor='phone'>Telefono</label>
                        {(errors.phone && touched.phone) && <p className="error-text"> {errors.phone} </p>}
                    </div>



                    <div className="txt_field">
                        <textarea
                            style={{ padding: "8px", height: "100px" }}
                            rows="4"
                            onChange={handleInputChange}
                            onBlur={handleOnBlur}
                            name="message"
                            value={input.message}
                        />
                        <span></span>
                        <label htmlFor='message'>Mensaje</label>
                        {(errors.message && touched.message) && <p className="error-text"> {errors.message} </p>}
                    </div>
                    <input type="submit" value="Enviar"
                        className={`btn-submit ${errors.name
                            ? true
                            : false || errors.email
                                ? true
                                : false || errors.phone
                                    ? true
                                    : false || errors.message
                                        ? true
                                        : false == true
                                            ? "btn-disabled"
                                            : null
                            }`}

                    />
                </form>
            </div>
        </div>
    )
}

export default Contacto
