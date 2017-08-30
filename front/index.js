import './index.less'
import './mobile.less'
import './tablet.less'
import {Header} from './header/header'
import {Works} from './works/works'
import {shell} from './init_shell'

$().ready(()=>{
    shell.resizeWin();
    shell.initModule();
    window.onresize = ()=>shell.resizeWin(); 
    $('.preloader').delay(1200).fadeOut();
})

