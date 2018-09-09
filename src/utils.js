// функция фильтрации друзей в списке
// list - элемент DOM, указатель на ul, список друзей
export const filterFriends = (list, str) => {
    str = str.toLowerCase();
    for (const li of list.children) {
        let friend = li.children[1].innerHTML.toLowerCase();

        if (friend.indexOf(str) < 0) {
            li.style.display = 'none';
        } else {
            li.style.display = 'flex';
        }
    }
}
