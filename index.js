    // (function($){
    //     $(window).on("load", function(){
    //         $(".content").mCustomScrollbar();
    //     });
    // })(jQuery);


    // console.log('12-34-56'.split('-'))

    // console.log('12, 34, 56'.split(/,\s*/))

    // let str = " JavaScript";

    // let regexp = /Java.+/;

    // alert( str.search(regexp) );

    // str.replace(str|regexp, str|func)
    // alert('12-34-56'.replace("-", ":"))


    // regexp.exec(str)


    // const str = 'Больше о JavaScript на сайте';
    // const regexp = /javascript/ig

    // const result;    

    // while (result = regexp.exec(str)) {
    // alert( `find ${result[0]} на позиции ${result.index}` );

    // }   

    // regexp.test(str)
    const regExp = /^d{5}-d{4}$|^d{5}$/;
    const regExpCanada = 	/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i

    const emailRegexp = /^\S+@\S+\.\S+$/

    const postalCode = 10001;
    console.log(emailRegexp.test('ad@gmail.com'))
    console.log(regExp.test(postalCode));
    console.log('Canada', regExpCanada.test('G7H 4G9'));

    

