<template>
    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-light footer mt-5 py-4 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-4">
            <div class="col-lg-12 text-center">
                <h4 class="text-white mb-4">Nuestras Oficinas:</h4>
                <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Calle la aseguradora, Málaga, ESPAÑA</p>
                <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+34 345 678 569</p>
                <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@aseguradora.com</p>
                <div class="col-md-6 offset-md-3 pt-2 text-center">
                    <nuxt-link class="btn btn-square btn-outline-light rounded-circle me-4" to="/" aria-label="facebook"><i
                            class="fab fa-facebook-f"></i></nuxt-link>
                    <nuxt-link class="btn btn-square btn-outline-light rounded-circle me-4" to="/" aria-label="twitter"><i
                            class="fab fa-twitter"></i></nuxt-link>
                    <nuxt-link class="btn btn-square btn-outline-light rounded-circle me-4" to="/" aria-label="linkedin"><i
                            class="fab fa-linkedin-in"></i></nuxt-link>
                    <nuxt-link class="btn btn-square btn-outline-light rounded-circle me-4" to="/" aria-label="instagram"><i
                            class="fab fa-instagram"></i></nuxt-link>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->


    <!-- Copyright Start -->
    <div class="container-fluid copyright py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <nuxt-link class="border-bottom" to="/">Nombre del Sitio Web</nuxt-link>, Todos los derechos reservados.
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                    Diseñado Por: <nuxt-link class="border-bottom" to="/">THEMES</nuxt-link>
                </div>
            </div>
        </div>
    </div>
    <!-- Copyright End -->
</template>


<script>
export default {
    name: 'FooterPage'
}
</script>