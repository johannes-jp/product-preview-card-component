<script lang="ts">
    export let productImageMobile:string
    export let productImageDesktop: string
    export let productType: string
    export let headingText: string
    export let bodyText: string
    export let altText: string
    export let salePrice: number
    export let originalPrice: number

    import CartButton from "./CartButton.svelte";
</script>

<div class="flex sm:flex-row flex-col max-w-xs rounded-lg sm:max-w-xl my-4 mt-8 bg-white">


    <img class="hidden w-1/2 brightness-90 rounded-l-lg sm:inline" src={productImageDesktop} alt={altText}>

    <img class="sm:hidden rounded-t-lg mb-2 brightness-90" src={productImageMobile} alt={altText}>

    <div class="flex flex-col m-4 sm:m-8 items-top gap-3 sm:gap-4">

        <h2 class="uppercase font-Montserrat tracking-[0.3em] font-medium text-[13px] text-Dark-grayish-blue">{productType}</h2>

        <h1 class="font-Fraunces font-[700] text-3xl">{headingText}</h1>

        <p class="font-Montserrat text-[14px] text-Dark-grayish-blue">{bodyText}</p>


        <div class="flex flex-row justify-start items-center gap-5 pt-2">

            <h1 class="text-Dark-cyan text-4xl font-Fraunces">${salePrice}</h1>

            <p class="text-[14px] text-Dark-grayish-blue font-Montserrat line-through">${originalPrice}</p>
        </div>

        <div class="pt-3">
            <CartButton />
        </div>
    </div>
</div>