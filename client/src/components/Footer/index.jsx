import "./index.css";

export default function Footer() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <div class="w-100 d-flex justify-content-between"></div>
                    <div>
                        <i class="fa-solid fa-envelope contact-us "></i>
                        <a href="" class="navbar-sm-brand text light text-decoration-none contact-us">Inquire@AquilaArtShop.com</a>
                    </div>
                    <div>
                        <i class="fa-solid fa-phone contact-us"></i>
                        <a href="" class="navbar-sm-brand text light text-decoration-none contact-us">704-321-7654</a>
                    </div>
                    <div>
                        <a href="" class="text-dark-grey"><i class="fa-brands fa-facebook me-2"></i></a>
                        <a href="" class="text-dark-grey"><i class="fa-brands fa-instagram me-2"></i></a>
                        <a href="" class="text-dark-grey"><i class="fa-brands fa-twitter me-2"></i></a>
                        <a href="" class="text-dark-grey"><i class="fa-brands fa-linkedin me-2"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}