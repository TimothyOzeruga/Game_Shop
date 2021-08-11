document.querySelectorAll(".tabs__triggers_item").forEach((item)=>
    item.addEventListener("click", function(e){
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '')

        document.querySelectorAll('.tabs__triggers_item').forEach(
            (child)=> child.classList.remove('tabs__triggers_item-active')
        );
        document.querySelectorAll('.tabs__content_item').forEach(
            (child)=> child.classList.remove('tabs__content_item-active')
        );

        item.classList.add('tabs__triggers_item-active');
        document.getElementById(id).classList.add('tabs__content_item-active')
    })
);

document.querySelector('.tabs__triggers_item').click();

let li = '';
function getCardInfo() {
    axios 
        .get('assets/card_info.json')
        .then((resp)=>{
            resp.data.forEach(i => {
                li += `<li class="tabs__card card">`;
                li += `<img src="${i.bonus_image}" alt="bonus" class="card__bonus">`
                li += `<div class="img_wrap">`
                li += `<img src="${i.image}" alt="one_crystal" class="card__img">`
                li += `</div>`
                li += `<div class="card__text">`
                li += `<div class="crystal_quant">${i.amount}</div>`
                li += `<span>${i.description}</span>`
                li +=  `</div>`
                li += ' <button type="button" class="card__btn btn">'
                li += `<span class="btn__text">${i.buy}</span>`;
                li += `<span class="btn__price">`;
                li += `<span class="btn__dollar">&#36;</span>${i.price}`;
                li += `</span>`;
                li += `</li>`;
            });
            let cards_list = document.querySelectorAll('.tabs__cards');
            cards_list.forEach(i => {
                i.innerHTML = li;
            });
        })
}
getCardInfo();
