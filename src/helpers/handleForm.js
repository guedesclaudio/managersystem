function handleForm ({name, value}, form, setForm) {
    setForm({
        ...form,
        [name] : value
    })
}
export {handleForm}
