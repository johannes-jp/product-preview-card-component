<script>
    export let productImageMobile
    export let productImageDesktop
    export let productType
    export let headingText
    export let bodyText
    export let altText
    export let salePrice
    export let originalPrice
    

    import CartButton from "./CartButton.svelte";
</script>

<div class="flex flex-col max-w-xs rounded-lg Mobile:max-w-lg my-4 mt-8 bg-white">


    <img class="hidden Mobile:block" src={productImageDesktop}>

    <img class="Mobile:hidden rounded-t-lg mb-2 brightness-90" src={productImageMobile} alt={altText}>

    <div class="flex flex-col m-4 items-top gap-3">

        <h2 class="uppercase font-Montserrat tracking-[0.3em] font-medium text-[13px] text-Dark-grayish-blue">{productType}</h2>

        <h1 class="font-Fraunces font-[700] text-3xl">{headingText}</h1>

        <p class="font-Montserrat text-[14px] text-Dark-grayish-blue">{bodyText}</p>


        <div class="flex flex-row justify-start items-center gap-5 pt-2">

            <h1 class="text-Dark-cyan text-4xl font-Fraunces">${salePrice}</h1>

            <p class="text-[14px] text-Dark-grayish-blue font-Montserrat line-through">${originalPrice}</p>
        </div>

        <div class="py-2">
            <CartButton />
        </div>
    </div>
</div>