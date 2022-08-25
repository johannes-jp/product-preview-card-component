<script>
    import Footer from "$lib/Footer.svelte"
    import Card from "$lib/Card.svelte"

    import chanelPerfumeDesktop from "$lib/assets/image-product-desktop.jpg"
    import chanelPerfumeMobile from "$lib/assets/image-product-mobile.jpg"

    let chanel = {
        mobile: chanelPerfumeMobile,
        desktop: chanelPerfumeDesktop,
        type: 'perfume',
        originalPrice: 169.99,
        salePrice: 149.99,
        title: 'Gabrielle Essence Eau De Parfum',
        description: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
        altDescription: 'square chanel perfume bottle filled with golden liquid laying face-up on a light gray table, surrounded by leaves',
    }
</script>

<div class="flex flex-row justify-center">
    <Card 
    productImageDesktop = {chanel.desktop}
    productImageMobile = {chanel.mobile}
    productType = {chanel.type}
    headingText = {chanel.title}
    bodyText = {chanel.description}
    altText = {chanel.altDescription}
    originalPrice = {chanel.originalPrice}
    salePrice = {chanel.salePrice}
/>
</div>

<Footer/>
