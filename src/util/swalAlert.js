import Swal from "sweetalert2";




export const SwalAlert = (title, text, icon, confirmButtonText) => {
    return Swal.fire({
        title,
        text,
        icon,
        confirmButtonText
    });
}