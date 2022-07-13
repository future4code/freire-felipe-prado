export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToAdminHomePage = (navigate) => {
    navigate("/admin/trips/list")
}

export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToApplicationFormPage =(navigate) => {
    navigate("/trips/application")
}

export const goToCreateTripPage = (navigate) => {
    navigate ("/admin/trips/create")
}

export const goToListTripPage = (navigate) => {
    navigate("/trips/list")
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}