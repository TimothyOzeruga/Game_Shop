"use strict";

document.querySelectorAll(".tabs__triggers_item").forEach(function (item) {
  return item.addEventListener("click", function (e) {
    e.preventDefault();
    var id = e.target.getAttribute('href').replace('#', '');
    document.querySelectorAll('.tabs__triggers_item').forEach(function (child) {
      return child.classList.remove('tabs__triggers_item-active');
    });
    document.querySelectorAll('.tabs__content_item').forEach(function (child) {
      return child.classList.remove('tabs__content_item-active');
    });
    item.classList.add('tabs__triggers_item-active');
    document.getElementById(id).classList.add('tabs__content_item-active');
  });
});
document.querySelector('.tabs__triggers_item').click();
var li = '';

function getCardInfo() {
  axios.get('assets/card_info.json').then(function (resp) {
    resp.data.forEach(function (i) {
      li += "<li class=\"tabs__card card\">";
      li += "<img src=\"".concat(i.bonus_image, "\" alt=\"bonus\" class=\"card__bonus\">");
      li += "<div class=\"img_wrap\">";
      li += "<img src=\"".concat(i.image, "\" alt=\"one_crystal\" class=\"card__img\">");
      li += "</div>";
      li += "<div class=\"card__text\">";
      li += "<div class=\"crystal_quant\">".concat(i.amount, "</div>");
      li += "<span>".concat(i.description, "</span>");
      li += "</div>";
      li += ' <button type="button" class="card__btn btn">';
      li += "<span class=\"btn__text\">".concat(i.buy, "</span>");
      li += "<span class=\"btn__price\">";
      li += "<span class=\"btn__dollar\">&#36;</span>".concat(i.price);
      li += "</span>";
      li += "</li>";
    });
    var cards_list = document.querySelectorAll('.tabs__cards');
    cards_list.forEach(function (i) {
      i.innerHTML = li;
    });
  });
}

getCardInfo();