<template>
    <!-- Topbar Start -->
    <div class="container-fluid bg-dark text-light px-0 py-2">
        <div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center me-4">
                    <span class="fa fa-phone-alt me-2"></span>
                    <span>+34 345 678 569</span>
                </div>
                <div class="h-100 d-inline-flex align-items-center">
                    <span class="far fa-envelope me-2"></span>
                    <span>info@aseguradora.com</span>
                </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
                <div class="h-100 d-inline-flex align-items-center mx-n2">
                    <span>Siguenos:</span>
                    <nuxt-link class="btn btn-link text-light" to="/" aria-label="facebook"><i class="fab fa-facebook-f"></i></nuxt-link>
                    <nuxt-link class="btn btn-link text-light" to="/" aria-label="twitter"><i class="fab fa-twitter"></i></nuxt-link>
                    <nuxt-link class="btn btn-link text-light" to="/" aria-label="linkedin"><i class="fab fa-linkedin-in"></i></nuxt-link>
                    <nuxt-link class="btn btn-link text-light" to="/" aria-label="instagram"><i class="fab fa-instagram"></i></nuxt-link>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->
</template>

<script>
export default {
    name: 'Topbar'
}
</script>