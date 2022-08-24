/*
 * @Date: 2022-02-11 10:19:48
 * @LastEditors: Lukesy
 * @LastEditTime: 2022-02-11 10:20:58
 */
/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = ['shshshfpa=ea30914d-8d52-4947-2039-680fc9309e32-1652249578; shshshfpb=cbPbr4oNpbcAr0mbeUKhKvw; __jdu=1652249577082257797074; pinId=87U5Bfyd7KjNUAhCib32Zw; TrackID=18UkLrdAVTMnIEuHl-BJTAxdEkP9juveNXr05WFx1-XdL20b71SfRozm2ULV5kUidamToRekS17O0LQ6ygFW1EkYHI8c56UW4B-EGg6v_-pB1RKhs2bBxoXjfFoIqk90k; jcap_dvzw_fp=L3fQ1WeWCcUVbGivbyxnWaKTln-OHTctga7MW2SZnTvZFZ7WtyLq7hNJ6c5ihqWp5tPbtQ==; whwswswws=; areaId=4; ipLoc-djd=4-51026-0-0; PCSYCityID=CN_500000_500100_0; autoOpenApp_downCloseDate_jd_homePage=1660740521236_1; __jdc=122270672; unpl=JF8EALFnNSttUUkBUkkATBtATVVRWwoKHh8Bb2QGV1gPQwAETwdJQRl7XlVdXhRKHh9sYhRUWFNOVw4bAisSFHtdVV9cDE8fB2ZnNWRVUCVUSBtsGHwTBhAZbl4IexYzb2ABV15dQ1ADHQMSERNPW1JWWwlNEjNfZwNkXVlKUAYdBhMWFE9eXV9tOEonAl9mNRUzWEpWBR8CGRVdS1pQXV4NQxMFaWYMV15cTVINHQMdFyBKbVc; __jda=122270672.1652249577082257797074.1652249577.1661229638.1661323331.15; mba_muid=1652249577082257797074; 3AB9D23F7A4B3C9B=X2WCI2LRJR2I54BXQKN6IEQNDQZTBX3CXDSPTNEFQPOTVMSC34PGTZZV3VMQ6Y6QPCVXMG5TONDW7OFKQ7EYCNGIZY; TrackerID=mSsy4TspcsknxPJlL9kNnu4w-NfgjqTKiBBvHEWoXo99FqGa-QG-WCjyb6RWq6EaeDOl-5xi-0bGGt5AYM0MyLs8Q9Aemcw_6z3ah1jvidOxq4BRExcysZlBRo4NoZHU; pt_key=AAJjBch-ADDcZgSAkkodLjQ-wHda_li0k8TU7DNGb_thk4vYQjiBj9WHvuFb5QfLy-raYtP5j18; pt_pin=%E5%BD%AD%E5%BA%94%E6%B5%A9; pt_token=rk0xyutl; pwdt_id=%E5%BD%AD%E5%BA%94%E6%B5%A9; sfstoken=tk01mb5361c17a8sMXgzeDN1Y08wCD4tyqxVJhEMdcL9MhWWxdD5T1gt4uhz9QboevHC5TB6iiZW08rtEWpck8VFH0WM; CCC_SE=; _gia_s_local_fingerprint=fda13248da031f79909f49c51b4f709d; _gia_s_e_joint={"eid":"X2WCI2LRJR2I54BXQKN6IEQNDQZTBX3CXDSPTNEFQPOTVMSC34PGTZZV3VMQ6Y6QPCVXMG5TONDW7OFKQ7EYCNGIZY","ma":"","im":"","os":"Mac OS X (iPhone)","ip":"14.106.158.244","ia":"","uu":"","at":"6"}; visitkey=68929373449078914; wxa_level=1; retina=1; cid=9; jxsid=16613233944314484890; webp=1; autoOpenApp_downCloseDate_autoOpenApp_autoPromptly=1661323395132_1; __wga=1661323395246.1661323395246.1661323395246.1661323395246.1.1; PPRD_P=EA.17051.5.1-UUID.1652249577082257797074-LOGID.1661323395259.1359022108; sc_width=390; equipmentId=X2WCI2LRJR2I54BXQKN6IEQNDQZTBX3CXDSPTNEFQPOTVMSC34PGTZZV3VMQ6Y6QPCVXMG5TONDW7OFKQ7EYCNGIZY; fingerprint=fda13248da031f79909f49c51b4f709d; deviceVersion=604.1; deviceOS=ios; deviceOSVersion=13.2.3; deviceName=Safari; shshshfp=acbc3fcbcf1649a6624aae094f180c13; shshshsID=b3af767da72a40ba3ea68ad779e430ca_3_1661323396233; __jdv=122270672%7Ckong%7Ct_1000559581_%7Cjingfen%7C83dfc3f8a7944f3d9312224f9e0e4cb8%7C1661323396601; __jd_ref_cls=MJDAlliance_GetImmediately; warehistory="10052759555280,10052759555280,"; RT="z=1&dm=jd.com&si=4al16aafjfu&ss=l7790mkg&sl=6&tt=5lw&ld=1fpg&ul=1ggk&hd=1gmp"; wqmnx1=MDEyNjM5MnRtbS81bTc0NE0uZWgzZVhlLlQgZS5sIDBGZC0yVSkm; __jdb=122270672.7.1652249577082257797074|15.1661323331; mba_sid=16613233317634364116672402103.7']
  // 判断环境变量里面是否有京东ck
  if (process.env.JD_COOKIE) {
    if (process.env.JD_COOKIE.indexOf('&') > -1) {
      console.log(`您的cookie选择的是用&隔开\n`)
      CookieJDs = process.env.JD_COOKIE.split('&');
    } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
      console.log(`您的cookie选择的是用换行隔开\n`)
      CookieJDs = process.env.JD_COOKIE.split('\n');
    } else {
      CookieJDs = [process.env.JD_COOKIE];
    }
  }
  /*
  if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
    console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
    !(async () => {
     // await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
     // await process.exit(0);
    })()
  }
  */
  CookieJDs = [...new Set(CookieJDs.filter(item => !!item))]
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
  for (let i = 0; i < CookieJDs.length; i++) {
    const index = (i + 1 === 1) ? '' : (i + 1);
    exports['CookieJD' + index] = CookieJDs[i].trim();
  }
  
