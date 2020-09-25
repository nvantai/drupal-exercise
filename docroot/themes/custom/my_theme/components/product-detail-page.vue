<template>
    <div class="product-detail-component">
        <img class="wrapper-image" :src="'/themes/custom/my_theme/images/banner.jpg'"/>
        <div class="wrapper-block">
            <div class="short-text">
                "{{productDetailData.shortText}}"
            </div>

            <div class="product-title">
                {{productDetailData.title}}
            </div>

            <div class="row">
                <div class="col-7 pa-6">
                    <div class="sliding-custom slider">
                        <div v-for="(image, index) in productDetailData.photos" :key="index">
                            <img :src="image">
                        </div>
                    </div>
                </div>
                <div class="col-5 pa-6">
                    <div class="long-text" v-html="productDetailData.longText">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['productDetail'],
        data (){
            return {
                productDetailData: JSON.parse(this.productDetail),
                slidingOptions: '',
                slidingList: ['a', 'b', 'c']
            }
        },
        mounted(){
            this.$nextTick(function () {
                switch (this.productDetailData.slidingOption) {
                    case 'fade':
                        $('.sliding-custom').slick({
                            dots: true,
                            speed: 500,
                            fade: true,
                            cssEase: 'linear'
                        });
                        break;
                    default:
                        $('.sliding-custom').slick({
                            dots: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        });
                        break;
                }
            });
        }
    }
</script>
<style>
    .slick-slide {
        margin: 0px 20px;
    }

    .slick-slide img {
        width: 100%;
        height: 400px;
    }

    .slick-prev:before,
    .slick-next:before {
        color: black;
    }

    .slick-slide {
        transition: all ease-in-out .3s;
        opacity: .2;
    }

    .slick-active {
        opacity: .5;
    }

    .slick-current {
        opacity: 1;
    }
</style>