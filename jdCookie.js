/*
 * @Date: 2022-02-11 10:19:48
 * @LastEditors: Lukesy
 * @LastEditTime: 2022-02-11 10:20:58
 */
/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = ['shshshfpa=ea30914d-8d52-4947-2039-680fc9309e32-1652249578; shshshfpb=cbPbr4oNpbcAr0mbeUKhKvw; __jdu=1652249577082257797074; pinId=87U5Bfyd7KjNUAhCib32Zw; TrackID=18UkLrdAVTMnIEuHl-BJTAxdEkP9juveNXr05WFx1-XdL20b71SfRozm2ULV5kUidamToRekS17O0LQ6ygFW1EkYHI8c56UW4B-EGg6v_-pB1RKhs2bBxoXjfFoIqk90k; __jdv=265623568|www.5cv.top|-|referral|-|1657783000262; areaId=4; ipLoc-djd=4-51026-0-0; PCSYCityID=CN_500000_500100_0; pin=%E5%BD%AD%E5%BA%94%E6%B5%A9; unick=pengyinghao; ceshi3.com=203; _tp=AdxfDONstlUMTkieSkWM6Z1kRpqPWnWJXIpzOvlnTDE%3D; _pst=%E5%BD%AD%E5%BA%94%E6%B5%A9; user-key=61710ff3-0a93-418e-92bd-767d6cd576e6; cn=0; __jda=76161171.1652249577082257797074.1652249577.1657783000.1658561961.11; __jdc=76161171; thor=8890959584AAF591BC12DA64FFA0571916D1C48C143AF97016EE27B2E152B9BCFCB583ADC28A85C18FCCD9E7523C65D75E9F2A9B7C77A8386170C10D79B48DABE01BC1B4A5117B27395A59E17B9A679C3E7136578F1DE4E66CD4879FB048CD9DC20D14619628133C307A32CF3692AD535D7C638ACAC04DA5C21D565C9DD0CCD2; wxa_level=1; retina=1; cid=9; jxsid=16585636559647620525; appCode=ms0ca95114; webp=1; mba_muid=1652249577082257797074; visitkey=16528251473503235; PPRD_P=UUID.1652249577082257797074; jxsid_s_u=https%3A//home.m.jd.com/myJd/home.action; sc_width=390; _gia_s_local_fingerprint=f42a6222bbd09bfe18545375d24e3d9a; equipmentId=X2WCI2LRJR2I54BXQKN6IEQNDQZTBX3CXDSPTNEFQPOTVMSC34PGTZZV3VMQ6Y6QPCVXMG5TONDW7OFKQ7EYCNGIZY; fingerprint=f42a6222bbd09bfe18545375d24e3d9a; deviceVersion=604.1; deviceOS=ios; deviceOSVersion=13.2.3; deviceName=Safari; _gia_s_e_joint={"eid":"X2WCI2LRJR2I54BXQKN6IEQNDQZTBX3CXDSPTNEFQPOTVMSC34PGTZZV3VMQ6Y6QPCVXMG5TONDW7OFKQ7EYCNGIZY","ma":"","im":"","os":"Mac OS X (iPhone)","ip":"113.248.158.58","ia":"","uu":"","at":"6"}; 3AB9D23F7A4B3C9B=X2WCI2LRJR2I54BXQKN6IEQNDQZTBX3CXDSPTNEFQPOTVMSC34PGTZZV3VMQ6Y6QPCVXMG5TONDW7OFKQ7EYCNGIZY; TrackerID=yg4QFhFYGoE7cVraiRla1vfxNuQSLovwGIC4dregjJM38pqQv5eIIhxkKxknoAu8rmsKqMGy8Qbv7Xn2pTsCl9XoeL2NKGnKbw24OkXzlG69LpaznWpyplAALJwJvFm1; pt_key=AAJi26xuADCI2Nz4MS_epjCTKX9G5t2qz7xsZIZwjDWgt0uBt2ZMSay0z1ocRYzGR2rtgS97Dd0; pt_pin=%E5%BD%AD%E5%BA%94%E6%B5%A9; pt_token=ljo7j6mm; pwdt_id=%E5%BD%AD%E5%BA%94%E6%B5%A9; sfstoken=tk01mbf631bf9a8sMXgzeDIrMSsxPMAecbv5u5d69l9hA5XVCoq6JKxx3Q6ujhgpjd6T9CEvIRxdK++K4Hv3ZI+gd1nd; wqmnx1=MDEyNjM3MGgvLi9vaTU3NWFpIGggIGEpVzY1TCAgbjNlOGkxZmQtNVFPRiYp; __jdb=76161171.13.1652249577082257797074|11.1658561961; mba_sid=16585636560446392767510979496.6; __wga=1658563695377.1658563660260.1658563660260.1658563660260.2.1; jxsid_s_t=1658563695428; shshshfp=4d80bcab2b19a26c98d4e2290428b080; shshshsID=f6091d8f12cfad33c9373bdfaed88592_6_1658563695623; __jd_ref_cls=7155.9.3']
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
  
