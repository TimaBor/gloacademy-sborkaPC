const body = document.querySelector('body');
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const btnsModal = document.querySelectorAll('.btn--modal');
const btnClose = document.querySelector('.modal__close');
const lockPadding = document.querySelectorAll('._lock-padding');
const timeOut = 300;
let unlock = true;

btnsModal.forEach(btn => {
    btn.addEventListener('click', () => {
        if (unlock == true) {
            modal.classList.add('_active');
            bodyLock();
        }
    });
});

btnClose.addEventListener('click', () => {
    if(modal.classList.contains('_active') || unlock == true) {
        modal.classList.remove('_active');
        bodyUnLock();
    }
})

document.addEventListener('keydown', (e) => {
    if(event.code = 'Escape' || modal.classList.contains('_active') || unlock == true) {
        modal.classList.remove('_active');
        bodyUnLock();
    }
})

modal.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');
    if (!isModal) {
        modal.classList.remove('_active');
        bodyUnLock();
    }
})

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.main').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;

        }
    }

    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function (){
        unlock = true;

    }, timeOut);


}

function bodyUnLock() {
    setTimeout(function (){
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight='0px';
            }
        }
        body.style.paddingRight='0px';
        body.classList.remove('lock');

    }, timeOut);

    unlock = false;
    setTimeout(function (){
        unlock = true;

    }, timeOut);
}