export let shell = (function(){
    let subbmit,toggleBurger,clickAnchor,resizeWin,hoverWorksIn,hoverWorksOut,scrollWin,initModule;
    subbmit = (e)=>{
        let name = $('#contact-form input[name=name]').val(),
            email = $('#contact-form input[name=email]').val(),
            message = $('#contact-form textarea[name=msg]').val()
        if(name.trim()==0||email.indexOf('@',0)==-1||message.trim()==0){
            $('#contact-form label').show();
            return false
        }
        let order_url = $('#contact-form').attr('action');
        $.post(order_url,{
                name: name,
                email: email,
                message: message,
                send: "1"
            }, function(data) {
                //выводим возврашаемый сервером код html вместо содержимого формы
            $('#contact-form').html(data);
            $('#contact-form').show();
            $('#contact-form_info').remove();
        }, "html");	
        return false;
    }
    clickAnchor = (e)=>{
        let root = $('#root'),
            elClick = e.currentTarget.hash,
            height = window.innerHeight,
            dest = $(elClick).offset().top,
            y =window.scrollY
        if(root.hasClass('mobile')||root.hasClass('tablet'))$('.burger').trigger('click')
        dest = y<height?dest+90:dest
         $('body').animate({ scrollTop: dest-90}, 700); //1100 - скорость
         $('html').animate({ scrollTop: dest-90}, 1100);
        return false; 
    }
    toggleBurger = ()=>{
        let menu = $('.header-list')
        menu.toggleClass('open');
        if(menu.hasClass('open')){
            menu.show();
        }
        else menu.hide()
    }
    scrollWin = ()=>{
        let y = window.scrollY;
        if(y>window.innerHeight){
           $('header').css({position:'fixed',top:0,zIndex:'1500'})
        }
        else $('header').removeAttr('style')
    }
    resizeWin =()=>{
        let ww = window.innerWidth;
        if(ww>990 && ww<1200){
            $('#root').addClass('tablet').removeClass('mobile')
            console.log('add tablet')
            return
        }
        if(ww<990){
            $('#root').addClass('mobile').removeClass('tablet');
            console.log('add mobile')
            return
        }
        else
            $('#root').removeClass('mobile').removeClass('tablet');
            console.log('remove all')
    }
    hoverWorksIn = (e)=>{
        console.log(e.currentTarget.id)
        $('#'+e.currentTarget.id+' .tit').show().textillate('in')
    }
    hoverWorksOut = (e)=>{
        $('#'+e.currentTarget.id+' .tit').textillate('out')
    }
    initModule = ()=>{ 
        window.onscroll = ()=>scrollWin();
        $('.overlay-title span').textillate('start')
        $('.send').on('click',subbmit);
        $('.burger').on('click',toggleBurger);
        $('a').on('click',clickAnchor)
        $('.rs-hover').hover(hoverWorksIn,hoverWorksOut)
    }
    return {
        initModule,
        resizeWin
    }
}())

        // $('.tit').textillate('in',{
        //     loop: true,
        //     in: {
        //         effect: 'wobble',
        //         delayScale: 1.5,
        //         delay: 50,
        //         sync: false,
        //         shuffle: false
        //     },
        //     out: {
        //         effect: 'fadeOutDown',
        //         delayScale: 1.5,
        //         delay: 50,
        //         sync: false,
        //         shuffle: true,
        //     }
        // });