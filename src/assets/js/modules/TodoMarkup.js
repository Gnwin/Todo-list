const todomarkup = (todo) => `<div class="space">
<input class="input" type="checkbox" name="" value="" id="">
<input class="list-title" type="text" name="" value=${todo.description} id="${todo.index}"/>
<img src="https://img.icons8.com/material-rounded/24/000000/menu-2.png" class="threedots"/>
<img src="https://img.icons8.com/external-others-amoghdesign/24/000000/external-bin-multimedia-solid-30px-others-amoghdesign.png" class="bin"/>
</div>`;

export default todomarkup;