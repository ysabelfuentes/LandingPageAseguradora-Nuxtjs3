<template>
    <!-- Navbar Start 
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <nuxt-link class="navbar-brand d-flex align-items-center px-4 px-lg-5" to="/">
            <h1 class="m-0">Aseguradora España</h1>
        </nuxt-link>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <nuxt-link class="nav-item nav-link" to="/">Inicio</nuxt-link>
                <nuxt-link class="nav-item nav-link" to="#nosotros">Nosotros</nuxt-link>
                <nuxt-link class="nav-item nav-link" to="#servicios">Servicios</nuxt-link>
                <nuxt-link class="nav-item nav-link" to="#contacto">Contacto</nuxt-link>
            </div>
        </div>
    </nav>
    Navbar End -->

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <nuxt-link class="navbar-brand d-flex align-items-center px-4 px-lg-5" to="/">
                <h1 class="m-0">Aseguradora España</h1>
            </nuxt-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <nuxt-link class="nav-link active" to="/">Inicio</nuxt-link>
                    <nuxt-link class="nav-link" to="#nosotros">Nosotros</nuxt-link>
                    <nuxt-link class="nav-link" to="#servicios">Servicios</nuxt-link>
                    <nuxt-link class="nav-link" to="#contacto">Contacto</nuxt-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>