const thumbnailItemNode = document.querySelectorAll('.photo-gallery__thumbnail-item')
thumbnailItemNode.forEach((node) => {
    node.addEventListener('click', function () {
        const imgNode = node.querySelector('img');
        const mainImageNode = document.querySelector('.photo-gallery__main-image img');
        mainImageNode.setAttribute('src', imgNode.src);
    });
});
