const carouselStyles = `
.carousel{
    position: relative;
    max-wdth: 100vw;
    overflow: hidden;
}
.carousel__content{
    min-height: 100vh;
}
.slide:not(:first-child){
    opacity: 0;
}
.slide{
    transition: opacity .5s ease-in-out;
}
.slide:focus, .slide.active{
    opacity: 1;
}
.slide:focus{
    z-index: 10;
}
.slide, .slide img{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
.slide img{
    filter: brightness(.8);
}
.carousel-content{
    position: relative;
}
.nav__container{
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    padding: .5rem;
    border-radius: 5px;
    background-color: var(--transparent-white-col);
    z-index: 15;
}
.carousel__nav__btn{
    position: relative;
    height: 3rem;
    aspect-ratio: 1;
    background-color: transparent; 
    border: none;
    cursor: pointer;
}
.carousel__nav__btn::after{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    aspect-ratio: 1;
    border-radius : 50%;
    border: 2px solid #fff;
    padding: .5rem;
    background-color: transparent; 
    transition: background-color .2s ease-out;
}
.carousel__nav__btn:focus::after, .carousel__nav__btn.active::after{
    background-color: #fff; 
}
@media(min-width: 900px){
    .nav__container{
        display: flex;
        flex-direction: column;
    }
}
@media(min-width: 1200px){

}
`;

export default carouselStyles;
