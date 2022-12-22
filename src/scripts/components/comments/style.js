export const commentStyles = `
.review__container{
    padding: .75rem 1.5rem;
    background: var(--normal-text-col);
    margin-bottom: 1rem;
    border-radius: .25rem;
    margin-inline: auto;
}
.review__container header{
    max-height: 3rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    gap: .5rem;
}
.review__avatar{
    width: 3rem;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
    overflow: hidden;
}
.review__name{
    flex-grow: 1;
    font-size: 1.25rem;
    font-family: var(--cormorant-family);
}
.review__time{
    font-size: 1rem;
    color: var(--dark-text-col);
    opacity: .5;
}
.review__detail{
    font-size: 1.15rem;
}
.review__buttons{
    margin-left: auto;
    width: fit-content;
}
.review__buttons button{
    appearance: none;
    border: none;
    cursor: pointer;
    padding: .75rem 1rem;
    background-color: transparent;
    font-size: 1.15rem;
    font-family: var(--cormorant-family);
}
@media(min-width: 900px){
    .review__name{
        font-size: 1.5rem;
    }
}
@media(min-width: 1200px){
    .review__name{
        font-size: 2rem;
    }
    .review__container{
        width: 450px;
    }
}
`;
