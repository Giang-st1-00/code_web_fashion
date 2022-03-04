/* loading */


/*lăn chuột */
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()){
            $('.header').addClass('sticky');
        }
        else {
            $('.header').removeClass('sticky');
        }
        /*animation cho web*/
        var body=$('html,body').scrollTop();
        var content__analysis=$('.content__analysis').offset().top;
        var content__application=$('.content__application').offset().top;
        var ctn__card__title=$('.ctn__card__title').offset().top;
        // var F5S__content__right=$('.F5S__content__right').offset().top;
        // console.log(F5S__content__right);
        console.log(body);
        if (body<100) {
            $('.content__analysis').removeClass('animate__bounceIn');
            $('.content__application').removeClass('animate__bounceIn');
            $('.ctn__card__title').removeClass('animate__bounceIn');
        }
        if (body>=100) {
            $('.content__analysis').addClass('animate__bounceIn');
        }
        
        if(content__application-body<600) {
            $('.content__application').addClass('animate__bounceIn');
        }
        
        if(ctn__card__title-body<500) {
            $('.ctn__card__title').addClass('animate__bounceIn');
        }
        

    });
})

/* chuyển ảnh */
/*khai bao toan cuc nha */

var index=0;
myFunction=function () {
    var image= ["/img/Home-01.png","/img/VirtualDressingRoom-1.png"];
    document.querySelector('.header__app').style.backgroundImage = "url("+image[index]+")";
    index++;
    if (index==2) {
        index=0;
    }
}
setInterval(myFunction,3100);

/* Dong mo thanh vien */

addfunction=function() {
    var add=document.querySelector('.ctn__card');
    var addicon=document.querySelector('.ctn__card__add');
    var addicondown=document.querySelector('.ctn__card__icon__add');
    Object.assign(addicon.style,{
        position: 'absolute',
        bottom: '0'
    })

    if (add.classList.contains('open__card')) {
        add.classList.remove('open__card');
        add.classList.add('close__card');
        addicondown.classList.remove('ti-arrow-circle-up');
        addicondown.classList.add('ti-arrow-circle-down');
    }
    else {     
        add.classList.remove('close__card');
        add.classList.add('open__card');
        addicondown.classList.remove('ti-arrow-circle-down');
        addicondown.classList.add('ti-arrow-circle-up');
    }
}

/*------------btn-backtop-------------------*/

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()){
            $('.backtop').fadeIn();
        }
        else {
            $('.backtop').fadeOut();
        }
    });
    $('.backtop').click(function() {
        $('html, body').animate({scrollTop: 0},2000); 
    });
})

/*---------------hover address--------------- */
function callHoverhue(){
    var address_hue=document.querySelector('.btn__address__vietnam__content');
    address_hue.innerText = '470 Đường Trần Đại Nghĩa, Hoà Hải, Ngũ Hành Sơn, Đà Nẵng- Điện thoại: 0388991204';
    address_hue.style.color= ' rgb(233, 212, 212);';
    address_hue.style.fontSize= '20px';
}

function callHoverhueout(){
    var address_hue=document.querySelector('.btn__address__vietnam__content');
    address_hue.innerText = 'Việt Nam';
    address_hue.style.color= ' rgb(233, 212, 212);';
    address_hue.style.fontSize= '40px';
}

function switchtoEnglish() {
    var header__system__contact=document.querySelector('.header__system__contact');
    var header__system__about=document.querySelector('.header__system__about');
    var header__system__feature=document.querySelector('.header__system__feature');
    var header__system__partner=document.querySelector('.header__system__partner');
    var content__title__AI=document.querySelector('.content__title__AI');
    var content__analysis__info1=document.querySelector('.content__analysis .content__analysis__info');
    var content__analysis__title1=document.querySelector('.content__analysis .content__analysis__title');
    var content__analysis__info2=document.querySelector('.content__application .content__analysis__info');
    var content__analysis__title2=document.querySelector('.content__application .content__analysis__title');
    var feature__title=document.querySelector('.feature__title');
    var about__shopping__title=document.querySelector('.about__shopping__title');
    var about__shopping__info=document.querySelector('.about__shopping__info');
    var about__tryonclothes__title=document.querySelector('.about__tryonclothes__title');
    var about__tryonclothes__info=document.querySelector('.about__tryonclothes__info');
    var about__style__title=document.querySelector('.about__style__title');
    var about__style__info=document.querySelector('.about__style__info');
    var ctn__card__title=document.querySelector('.ctn__card__title');
    var footer__title_text=document.querySelector('.footer__title_text');
    var sign_up__title=document.querySelector('.sign_up__title');


    header__system__contact.innerText = 'Home';
    header__system__about.innerText= 'About F5S';
    header__system__feature.innerText= 'Features';
    header__system__partner.innerText= 'Partner';
    
    content__title__AI.innerText='AI technology';
    content__analysis__info1.innerText='Deep Learning';
    content__analysis__title1.innerText='Accurately and efficiently analyze clothing models, providing a diverse inventory of clothes to help fashion stores create an impressive virtual display space on the F5S application.';
    content__analysis__info2.innerText='Computer Vision';
    content__analysis__title2.innerText='Applying image processing technology combined with model analysis techniques to bring a more realistic online fitting experience than ever before.';
    content__analysis__title2.style.fontSize= '16px';
    content__analysis__title1.style.fontSize= '16px';

    content__analysis__info1.style.fontSize='20px';
    content__analysis__info1.style.fontWeight='700';
    content__analysis__info1.style.padding='20px';
    content__analysis__info2.style.fontSize='20px';
    content__analysis__info2.style.fontWeight='700';
    content__analysis__info2.style.padding='20px';

    feature__title.innerText = 'Feature';
    about__shopping__title.innerText = 'Shopping';
    about__shopping__info.innerText = 'Shopping will become easier. Many attractive promotions from the store and shipping.';
    about__tryonclothes__title.innerText = 'Try on clothes';
    about__tryonclothes__info.innerText = 'Choose a model or upload your photo to try on online with hundreds of amazing outfits.';
    about__style__title.innerText = 'Style Suggestions';
    about__style__info.innerText = 'Catch up with youth fashion trends with thousands of cool outfit suggestions from the system.';

    ctn__card__title.innerText='F5S Member';

    footer__title_text.innerText='To Become a Partner of F5S';
    sign_up__title.innerText='Sign-up';


}

function switchtoKorea() {
    var header__system__contact=document.querySelector('.header__system__contact');
    var header__system__about=document.querySelector('.header__system__about');
    var header__system__feature=document.querySelector('.header__system__feature');
    var header__system__partner=document.querySelector('.header__system__partner');
    var content__title__AI=document.querySelector('.content__title__AI');
    var content__analysis__info1=document.querySelector('.content__analysis .content__analysis__info');
    var content__analysis__title1=document.querySelector('.content__analysis .content__analysis__title');
    var content__analysis__info2=document.querySelector('.content__application .content__analysis__info');
    var content__analysis__title2=document.querySelector('.content__application .content__analysis__title');
    var feature__title=document.querySelector('.feature__title');
    var about__shopping__title=document.querySelector('.about__shopping__title');
    var about__shopping__info=document.querySelector('.about__shopping__info');
    var about__tryonclothes__title=document.querySelector('.about__tryonclothes__title');
    var about__tryonclothes__info=document.querySelector('.about__tryonclothes__info');
    var about__style__title=document.querySelector('.about__style__title');
    var about__style__info=document.querySelector('.about__style__info');
    var ctn__card__title=document.querySelector('.ctn__card__title');
    var footer__title_text=document.querySelector('.footer__title_text');
    var sign_up__title=document.querySelector('.sign_up__title');
   

    header__system__contact.innerText = '홈페이지';
    header__system__about.innerText= 'F5S 소개';
    header__system__feature.innerText= '기능';
    header__system__partner.innerText= '상대방';
    
    content__title__AI.innerText='AI 기술';
    content__analysis__info1.innerText='딥러닝';
    content__analysis__title1.innerText='의류 모델을 정확하고 효율적으로 분석하여 다양한 의류 인벤토리를 제공하여 패션 매장이 F5S 애플리케이션에서 인상적인 가상 디스플레이 공간을 만들 수 있도록 도와줍니다.';
    content__analysis__info2.innerText='컴퓨터 시각 인식';
    content__analysis__title2.innerText='모델 분석 기술과 결합된 이미지 처리 기술을 적용하여 그 어느 때보다 사실적인 온라인 피팅 경험을 제공합니다.';
    content__analysis__title2.style.fontSize= '16px';
    content__analysis__title1.style.fontSize= '16px';

    feature__title.innerText = '특징';
    about__shopping__title.innerText = '쇼핑';
    about__shopping__info.innerText = '쇼핑이 쉬워집니다. 상점 및 배송에서 많은 매력적인 프로모션.';
    about__tryonclothes__title.innerText = '옷을 입어봐';
    about__tryonclothes__info.innerText = '모델을 선택하거나 사진을 업로드하여 수백 가지의 멋진 의상으로 온라인에서 입어보세요.';
    about__style__title.innerText = '스타일 제안';
    about__style__info.innerText = '시스템에서 제안하는 수천 가지 멋진 의상으로 청소년 패션 트렌드를 따라잡으세요.';

    ctn__card__title.innerText='F5S 회원';

    footer__title_text.innerText='F5S의 파트너가 되려면';
    sign_up__title.innerText='등록';
}

function switchtoVietnam() {
    
}


/* =============loadding================= */
/*-----coi lại promise-------*/
var ctn__loading__home=document.querySelector('.ctn__loading__body');
var header__system__contact=document.querySelector('.header__system__contact');
var header__system__about=document.querySelector('.header__system__about');
var header__system__feature=document.querySelector('.header__system__feature');
var header__system__partner=document.querySelector('.header__system__partner');


function sleep(s){
    return new Promise(function(resolve) {
        setTimeout(resolve,s)
    })
}

function onclick__home(){
    sleep(0)
        .then(function() {
    
            ctn__loading__home.classList.add('open__load');
            
            return sleep(1300);
        })
        .then(function() {
            
            ctn__loading__home.classList.remove('open__load')
            header__system__contact.href= "fashion.html"; 
            header__system__contact.click();
        })      
}
header__system__contact.addEventListener('click' , onclick__home);
/*----------------------------------*/
function onclick__about(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            return sleep(1500);
        })
        .then(function() {
            ctn__loading__home.classList.remove('open__load')
            header__system__about.href= "fashion_about.html"; 
            header__system__about.click();
        })      
}

header__system__about.addEventListener('click' , onclick__about);


/*----------------------------------*/
function onclick__feature(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            return sleep(1500);
        })
        .then(function() {
            ctn__loading__home.classList.remove('open__load')
            header__system__feature.href= "fashion_feature.html"; 
            header__system__feature.click();
        })      
}

header__system__feature.addEventListener('click' , onclick__feature);

/*----------------------------------*/
function onclick__feature(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            return sleep(1500);
        })
        .then(function() {
            ctn__loading__home.classList.remove('open__load')
            header__system__feature.href= "fashion_feature.html"; 
            header__system__feature.click();
        })      
}

header__system__feature.addEventListener('click' , onclick__feature);

/*----------------------------------*/
function onclick__partner(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            return sleep(1500);
        })
        .then(function() {
            ctn__loading__home.classList.remove('open__load')
            header__system__partner.href= "fashion_partner.html"; 
            header__system__partner.click();
        })      
}

header__system__partner.addEventListener('click' , onclick__partner);

