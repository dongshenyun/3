﻿var lunarInfo=new Array(
0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,
0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,
0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0)

var solarMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var Gan=new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
var Zhi=new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
var Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至")
var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758)
var nStr1 = new Array('日','一','二','三','四','五','六','七','八','九','十')
var nStr2 = new Array('初','十','廿','卅','卌')
var nStr3 = new Array(" ","一","二","三","四","五","六","七","八","九","十","十一","十二")
var monthName = new Array("JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC");

//国历节日 *表示放假日
var sFtv = new Array(
"0101*元旦",
//"0214 情人节",
"0308 妇女节",
"0312 植树节 ",
"0401 愚人节",
"0422 地球日",
"0501 劳动节",
//"0504 青年节",
//"0512 护士节",
"0601 儿童节",
"0608 世界海洋日",
"0928 教师节 孔子诞辰",
"1001*国庆节",
//"1006 老人节",
"1024 联合国日")

/********** For testing purposes, in order to make the calendar display simple, expecially for viewing 農歷閏月大小.
//农历节日 *表示放假日
var lFtv = new Array(
"0101*弥勒菩萨圣诞、春节",
"0106 定光佛圣诞",
"0109 帝释天尊圣诞",
"0115 元宵节",
"0208 释迦牟尼佛出家",
"0215 释迦牟尼佛涅槃",
"0219 观世音菩萨圣诞",
"0221 普贤菩萨圣诞",
"0316 准提菩萨圣诞",
"0404 文殊菩萨圣诞",
"0408 释迦牟尼佛圣诞",
"0415 佛吉祥日——释迦牟尼佛诞生、成道、涅槃三期同一庆(即南传佛教国家的卫塞节)",
"0428 药王菩萨圣诞",
"0505 端午节",
"0513 伽蓝菩萨圣诞",
"0603 护法韦驮尊天菩萨圣诞",
"0619 观世音菩萨成道",
//"0707 七夕情人节",
"0713 大势至菩萨圣诞",
"0715 佛欢喜日、中元节",
"0721 普安祖师圣诞",
"0724 龙树菩萨圣诞",
"0730 地藏王菩萨圣诞",
"0815 中秋节",
"0822 燃灯古佛圣诞",
"0909 重阳节",
"0919 观世音菩萨出家",
"0930 药师琉璃光如来圣诞",
"1005 达摩祖师圣诞",
"1025 宗咯巴涅盘",
"1117 阿弥陀佛圣诞",
"1208 释迦牟尼佛成道、腊八节",
"1224 小年",
"1229 华严菩萨圣诞",
"0100*除夕")
**********/

//农历节日 *表示放假日
var lFtv = new Array(
"0101 春节，本月为斋月！弥勒菩萨圣诞，又地藏斋，天腊，玉帝校世人神气禄命，犯者削禄夺纪，又月朔，犯者夺纪，又十斋日",
"0103 万神都会，犯者夺纪，斗降，犯者夺纪",
"0105 五虚忌",
"0106 定光佛圣诞，又六耗忌，又雷斋日，犯者减寿",
"0107 上会日，犯者损寿",
"0108 观音斋，又五殿阎罗天子诞，犯者夺纪，又四天王巡行，又十斋日",
"0109 帝释天尊（玉皇大帝）圣诞，犯者夺纪",
"0112 净宗七祖省常法师圆寂日",
"0113 杨公忌",
"0114 三元降，犯者减寿又四天王巡行，又十斋日",
"0115 元宵节，三元降犯者减寿，又上元神会，犯者夺纪，又月望，犯者夺纪，又四天王巡行，又十斋日",
"0116 三元降犯者减寿",
"0118 地藏斋，又十斋日",
"0119 长春真人诞",
"0121 净宗九祖蕅益法师圆寂日",
"0123 三尸神奏事，又四天王巡行，又十斋日",
"0124 地藏斋，又十斋日",
"0125 月晦日犯者减寿，又天地仓开日犯者损寿，子带疾",
"0127 斗降犯者夺纪，又若月小则本日为十斋日",
"0128 地藏斋，人神在阴犯者得病，宜先一日即戒，又十斋日",
"0129 四天王巡行，又十斋日",
"0130 月晦、司命奏事犯者减寿（如月小，即戒廿九），又四天王巡行，又十斋日",
"0201 地藏斋，一殿秦广王诞，又月朔，犯者夺纪，又十斋日",
"0202 万神都会，犯者夺纪，福德土地正神诞，犯者得祸",
"0203 文昌帝君诞辰犯者削禄夺纪，斗降犯者夺纪",
"0206 东华帝君诞，雷斋日，犯者减寿",
"0207 观音斋",
"0208 释迦牟尼佛出家，三殿宋帝王诞，张大帝诞，犯者夺纪，四天王巡行，又十斋日",
"0209 六祖慧能圣诞，又观音斋",
"0211 杨公忌",
"0214 四天王巡行，又十斋日",
"0215 释迦牟尼佛涅槃，太上老君诞，又月望（即月半），犯者削禄夺纪，四天王巡行，又十斋日",
"0217 东方杜将军诞",
"0218 地藏斋，四殿五官王诞，至圣先师孔子讳辰，犯者削禄夺纪，又十斋日",
"0219 观世音菩萨圣诞，犯者夺纪，又观音斋",
"0221 普贤菩萨圣诞",
"0223 四天王巡行，又十斋日",
"0224 地藏斋，又十斋日",
"0225 月晦日犯者减寿",
"0226 净宗六祖永明法师圆寂日",
"0227 斗降，犯者夺纪，又若月小则本日为十斋日",
"0228 地藏斋，人神在阴，犯者得病，宜先一日即戒，又十斋日",
"0229 四天王巡行，又十斋日",
"0230 月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日",
"0301 地藏斋，二殿楚江王诞，又月朔，犯者夺纪，又十斋日",
"0303 观音斋，玄天上帝诞，斗降，犯者夺纪",
"0306 观音斋，雷斋日，犯者减寿",
"0308 六殿卞城王诞，犯者夺纪，四天王巡行，又十斋日",
"0309 牛鬼神出，犯者产恶胎，杨公忌",
"0312 中央正道诞",
"0313 观音斋",
"0314 四天王巡行，又十斋日",
"0315 昊天上帝诞，玄坛诞，又月望，犯者夺纪，四天王巡行，又十斋日",
"0316 准提菩萨圣诞，犯者夺纪",
"0318 地藏斋，又十斋日",
"0319 中岳大帝诞，后土娘娘诞，三茅降",
"0320 天地仓开日，犯者损寿，子孙娘娘诞",
"0323 四天王巡行，又十斋日",
"0324 地藏斋，又十斋日",
"0325 月晦日，犯者减寿",
"0327 七殿泰山王诞，斗降，犯者夺纪，又若月小则本日为十斋日",
"0328 地藏斋，人神在阴，犯者得病，宜先一日即戒（每月同），苍颉至圣先师诞，犯者削禄夺纪，东岳大帝诞，又十斋日",
"0329 四天王巡行，又十斋日",
"0330 月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日",
"0401 地藏斋，八殿都市王诞，又月朔，犯者夺纪，又十斋日",
"0403 斗降，犯者夺纪",
"0404 文殊菩萨圣诞，又万神善会，犯者失瘼夭胎",
"0406 雷斋日，犯者减寿",
"0407 南斗、北斗、西斗同降，犯者减寿，杨公忌",
"0408 释迦牟尼佛圣诞，犯者夺纪，又万神善会，犯者失瘼夭胎，善恶童子降，犯者血死，九殿平等王诞，四天王巡行，又十斋日",
"0414 净宗十一祖省庵法师圆寂日，纯阳祖师诞，犯者减寿，四天王巡行，又十斋日",
"0415 月望，犯者夺纪，钟离祖师诞，四天王巡行，又十斋日",
"0416 天地仓开日，犯者损寿",
"0417 十殿转轮王诞，犯者夺纪",
"0418 地藏斋，天地仓开日，紫微大帝诞，犯者减寿，又十斋日",
"0420 眼光圣母诞",
"0422 观音斋",
"0423 四天王巡行，又十斋日",
"0424 地藏斋，又十斋日",
"0425 月晦日，犯者减寿",
"0427 斗降，犯者夺纪，又若月小则本日为十斋日",
"0428 药王菩萨圣诞，又地藏斋，人神在阴，犯者得病，宜先一日即戒，又十斋日",
"0429 四天王巡行，又十斋日",
"0430 月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日",
"0501 本月为斋月！地藏斋，南极长生大帝诞，又月朔，犯者夺纪，又十斋日",
"0503 斗降，犯者夺纪，又观音斋",
"0505 端午节，地腊，五帝校定生人官爵，犯者削禄夺纪，九毒日，犯者夭亡，奇祸不测",
"0506 九毒日，犯者夭亡，奇祸不测，雷斋日，犯者减寿",
"0507 九毒日，犯者夭亡，奇祸不测",
"0508 南方五道诞，四天王巡行，又十斋日",
"0511 天仓开日，犯者损寿，天下都城隍诞",
"0512 炳灵公诞",
"0513 伽蓝菩萨圣诞，关圣降，犯者削禄夺纪",
"0514 夜子时为天地交泰，犯者三年内夫妇俱亡，四天王巡行，又十斋日",
"0515 月望，九毒日，犯者夭亡，奇祸不测，四天王巡行，又十斋日",
"0516 九毒日，天地元气造化万物之辰，犯者三年内夫妇俱亡",
"0517 观音斋，九毒日，犯者夭亡，奇祸不测",
"0518 地藏斋，张天师诞，又十斋日",
"0522 孝娥神诞，犯者夺纪",
"0523 四天王巡行，又十斋日",
"0524 地藏斋，又十斋日",
"0525 九毒日，犯者夭亡，奇祸不测，月晦日，犯者减寿",
"0526 九毒日，犯者夭亡，奇祸不测",
"0527 九毒日，犯者夭亡，奇祸不测，斗降，犯者夺纪，又若月小则本日为十斋日",
"0528 地藏斋，人神在阴，犯者得病，宜先一日即戒，又十斋日",
"0529 四天王巡行，又十斋日",
"0530 月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日",
"0601 地藏斋，又月朔，犯者夺纪，又十斋日",
"0603 韦驮菩萨圣诞，斗降，犯者夺纪，杨公忌",
"0605 南赡部洲转大法轮，犯者损寿",
"0606 天地仓开日，雷斋日，犯者损寿",
"0608 四天王巡行，又十斋日",
"0610 金粟如来诞",
"0614 四天王巡行，又十斋日",
"0615 月望，犯者夺纪，四天王巡行，又十斋日",
"0616 观音斋",
"0618 观音斋，又地藏斋，又十斋日",
"0619 观世音菩萨成道，又观音斋，犯者夺纪",
"0623 观音斋，南方火神诞，犯者遭回禄，四天王巡行，又十斋日",
"0624 地藏斋，雷祖诞，关帝诞，犯者削禄夺纪，又十斋日",
"0625 月晦日，犯者减寿",
"0627 斗降，犯者夺纪，又若月小则本日为十斋日",
"0628 地藏斋，人神在阴，犯者得病，宜先一日即戒，又十斋日",
"0629 四天王巡行，又十斋日",
"0630 月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日",
"0701 地藏斋，又月朔，犯者夺纪，杨公忌，又十斋日",
"0702 净宗八祖莲池法师圆寂日",
"0703 斗降，犯者夺纪",
"0705 中会日，犯者损寿，一作初七",
"0706 雷斋日，犯者减寿",
"0707 道德腊，五帝校生人善恶，魁星诞，犯者削禄夺纪",
"0708 四天王巡行，又十斋日",
"0709 净宗十祖截流法师圆寂日",
"0710 阴毒日",
"0712 长真谭真人诞",
"0713 大势至菩萨圣诞，犯者减寿，又观音斋",
"0714 三元降，犯者减寿，四天王巡行，又十斋日",
"0715 佛欢喜日，又月望，三元降，地官校籍，犯者夺纪，四天王巡行，又十斋日",
"0716 三元降，犯者减寿",
"0718 地藏斋，西王母诞，犯者夺纪，又十斋日",
"0719 净宗三祖承远法师圆寂日，太岁诞，犯者夺纪",
"0721 普庵祖师圣诞",
"0722 增福财神诞，犯者削禄夺纪",
"0723 四天王巡行，又十斋日",
"0724 龙树菩萨圣诞，又地藏斋，又十斋日",
"0725 月晦日，犯者减寿",
"0727 斗降，犯者夺纪，又若月小则本日为十斋日",
"0728 地藏斋，人神在阴，犯者得病，宜先一日即戒（每月同），又十斋日",
"0729 杨公忌，四天王巡行，又十斋日",
"0730 地藏王菩萨圣诞，犯者夺纪，月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日",
"0801 地藏斋，又月朔，犯者夺纪，许真君诞，又十斋日",
"0803 斗降，北斗诞，犯者夺纪，司命灶君诞，犯者遭回禄",
"0805 雷声大帝诞，犯者夺纪",
"0806 净宗初祖慧远法师圆寂日，雷斋日，犯者减寿",
"0808 四天王巡行，又十斋日",
"0810 北斗大帝诞",
"0812 西方五道诞",
"0814 四天王巡行，又十斋日",
"0815*中秋节，记得持斋诵戒！又月望，太明朝元，犯者暴亡，宜焚香守夜，四天王巡行，又十斋日",
"0816 观音斋，天曹掠刷真君降，犯者贫夭",
"0818 地藏斋，天人兴福之辰，宜斋戒，存想吉事，又十斋日",
"0822 燃灯古佛圣诞",
"0823 汉恒候张显王诞，四天王巡行，又十斋日",
"0824 地藏斋，灶君夫人诞，又十斋日",
"0825 月晦日，犯者减寿",
"0827 斗降，至圣先师孔子诞，犯者夺纪，杨公忌，又若月小则本日为十斋日",
"0828 地藏斋，人神在阴，犯者得病，宜先一日即戒（每月同），四天会事，又十斋日",
"0829 四天王巡行，又十斋日",
"0830 诸神考校，犯者夺算，月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日",
"0901 本月为斋月！地藏斋，又月朔，犯者夺纪，南斗诞，犯者削禄夺纪，北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒，又十斋日",
"0902 北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒",
"0903 斗降，犯者夺纪，五瘟神诞，北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒",
"0904 北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒",
"0905 北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒",
"0906 雷斋日，犯者减寿，北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒",
"0907 北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒",
"0908 四天王巡行，北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒，又十斋日",
"0909 重阳节，斗母诞，犯者削禄夺纪，酆都大帝诞，玄天上帝飞升，北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒",
"0910 斗母降，犯者夺纪",
"0911 宜戒",
"0913 孟婆尊神诞",
"0914 四天王巡行，又十斋日",
"0915 月望，犯者夺纪，四天王巡行，又十斋日",
"0917 金龙四大王诞，犯者遭水厄",
"0918 地藏斋，又十斋日",
"0919 观世音菩萨出家，日宫月宫会合，犯者减寿，又观音斋",
"0923 观音斋，四天王巡行，又十斋日",
"0924 地藏斋，又十斋日",
"0925 月晦日，犯者减寿，杨公忌",
"0927 斗降，犯者夺纪，又若月小则本日为十斋日",
"0928 地藏斋，人神在阴，犯者得病，宜先一日即戒，又十斋日",
"0929 四天王巡行，又十斋日",
"0930 药师佛圣诞，犯者危疾，月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日",
"1001 地藏斋，又月朔，民岁腊，犯者夺纪，四天王降，犯者一年内死，又十斋日",
"1002 观音斋",
"1003 净宗五祖少康法师圆寂日，斗降，犯者夺纪，三茅诞",
"1005 达摩祖师诞辰，下会日，犯者损寿",
"1006 雷斋日，犯者减寿，天曹考察，犯者夺纪",
"1008 大忌色欲，四天王巡行，又十斋日",
"1010 四天王降，犯者一年内死",
"1011 宜戒",
"1014 三元降，犯者减寿，四天王巡行，又十斋日",
"1015 月望，三元降，下元水府校籍，犯者夺纪，四天王巡行，又十斋日",
"1016 三元降，犯者减寿",
"1018 地藏斋，又十斋日",
"1023 四天王巡行，杨公忌，又十斋日",
"1024 地藏斋，又十斋日",
"1025 月晦日，犯者减寿",
"1027 斗降，犯者夺纪，北极紫微大帝降，又若月小则本日为十斋日",
"1028 地藏斋，人神在阴，犯者得病，宜先一日即戒 ，又十斋日",
"1029 四天王巡行，又十斋日",
"1030 药师佛圣诞，犯者危疾，月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日",
"1101 地藏斋，又月朔，犯者夺纪，又十斋日",
"1103 斗降，犯者夺纪",
"1104 净宗十三祖印光法师圆寂日，又至圣先师孔子诞，犯者削禄夺纪",
"1106 雷斋日，犯者减寿，西岳大帝诞",
"1108 四天王巡行，又十斋日",
"1111 天地仓开日，太乙救苦天尊诞，犯者夺纪",
"1114 四天王巡行，又十斋日",
"1115 月望，上半夜犯男死下半夜犯女死，四天王巡行，又十斋日",
"1117 阿弥陀佛圣诞，又净宗二祖善导法师圆寂日",
"1118 地藏斋，又十斋日",
"1119 观音斋，太阳日宫诞，犯者得奇祸",
"1121 杨公忌",
"1123 张仙诞，犯者绝嗣，四天王巡行，又十斋日",
"1124 观音斋，又地藏斋，又十斋日",
"1125 掠刷大夫降，犯者遭大凶，月晦日，犯者减寿",
"1126 北方五道诞",
"1127 斗降，犯者夺纪，又若月小则本日为十斋日",
"1128 地藏斋，人神在阴，犯者得病，宜先一日即戒，又十斋日",
"1129 四天王巡行，又十斋日",
"1130 药师佛圣诞，犯者危疾，月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日",
"1201 净宗四祖法照法师圆寂日，又地藏斋，又月朔，犯者夺纪，又十斋日",
"1203 斗降犯者夺纪",
"1206 天地仓开日，又雷斋日，犯者减寿",
"1207 掠刷大夫降，犯者得恶疾",
"1208 释迦牟尼佛成道，腊八节，又四天王巡行，初旬内戊日，亦名王侯腊，犯者夺纪，又十斋日",
"1212 太素三元君朝真",
"1214 四天王巡行，又十斋日",
"1215 月望，犯者夺纪，又四天王巡行，又十斋日",
"1216 南岳大帝诞",
"1217 净宗十二祖彻悟法师圆寂日",
"1218 地藏斋，又十斋日",
"1219 杨公忌",
"1220 天地交道，犯者促寿",
"1221 天猷上帝诞",
"1223 五岳诞降，又四天王巡行，又灶君节，又十斋日",
"1224 小年，地藏斋，又司命朝天奏人善恶，犯者得大祸，又十斋日",
"1225 观音斋，三清玉帝同降，考察善恶，犯者得奇祸，又月晦日，犯者减寿",
"1227 斗降，犯者夺纪，又若月小则本日为十斋日",
"1228 地藏斋，人神在阴，犯者得病，宜先一日即戒，又十斋日",
"1229 华严菩萨圣诞，又四天王巡行，又十斋日",
"0100*除夕，记得持斋诵戒！诸神下降，察访善恶，犯者男女俱亡，又十斋日")

//某月的第几个星期几
var wFtv = new Array(
"0520 母亲节")
//====================================== 传回农历 y年的总天数
function lYearDays(y) {
   var i, sum = 348
   for(i=0x8000; i>0x8; i>>=1) sum += (lunarInfo[y-1900] & i)? 1: 0
   return(sum+leapDays(y))
}

//====================================== 传回农历 y年闰月的天数
function leapDays(y) {
   if(leapMonth(y))  return((lunarInfo[y-1900] & 0x10000)? 30: 29)
   else return(0)
}

//====================================== 传回农历 y年闰哪个月 1-12 , 没闰传回 0
function leapMonth(y) {
   return(lunarInfo[y-1900] & 0xf)
}

//====================================== 传回农历 y年m月的总天数
function monthDays(y,m) {
   return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 )
}

//====================================== 算出农历, 传入日期物件, 传回农历日期物件
//                                       该物件属性有 .year .month .day .isLeap //.yearCyl .dayCyl .monCyl
function Lunar(objDate) {

   var i, leap=0, temp=0
   var baseDate = new Date(1900,0,31)
//   var offset   = (objDate - baseDate)/86400000 //在某些操作系統下僅顯示部份月份
   var offset   = (Date.UTC(objDate.getFullYear(),objDate.getMonth(),objDate.getDate()) - Date.UTC(1900,0,31))/86400000; //戎健先生

   this.dayCyl = offset + 40
   this.monCyl = 14

   for(i=1900; i<2050 && offset>0; i++) {
      temp = lYearDays(i)
      offset -= temp
      this.monCyl += 12
   }

   if(offset<0) {
      offset += temp;
      i--;
      this.monCyl -= 12
   }

   this.year = i
   this.yearCyl = i-1864

   leap = leapMonth(i) //闰哪个月
   this.isLeap = false

   for(i=1; i<13 && offset>0; i++) {
      //闰月
      if(leap>0 && i==(leap+1) && this.isLeap==false)
         { --i; this.isLeap = true; temp = leapDays(this.year); }
      else
         { temp = monthDays(this.year, i); }

      //解除闰月
      if(this.isLeap==true && i==(leap+1)) this.isLeap = false

      offset -= temp
      if(this.isLeap == false) this.monCyl ++
   }

   if(offset==0 && leap>0 && i==leap+1)
      if(this.isLeap)
         { this.isLeap = false; }
      else
         { this.isLeap = true; --i; --this.monCyl;}

   if(offset<0){ offset += temp; --i; --this.monCyl; }

   this.month = i
   this.day = offset + 1
   
}

//==============================传回国历 y年某m+1月的天数
function solarDays(y,m) {
   if(m==1)
      return(((y%4 == 0) && (y%100 != 0) || (y%400 == 0))? 29: 28)
   else
      return(solarMonth[m])
}

//============================== 传入 offset 传回干支, 0=甲子
function cyclical(num) {
   return(Gan[num%10]+Zhi[num%12])
}

//============================== 月历属性
function calElement(sYear,sMonth,sDay,week,lYear,lMonth,lDay,isLeap,cYear,cMonth,cDay) {

      this.isToday    = false;
      //国历
      this.sYear      = sYear;
      this.sMonth     = sMonth;
      this.sDay       = sDay;
      this.week       = week;
      //农历
      this.lYear      = lYear;
      this.lMonth     = lMonth;
      this.lDay       = lDay;
      this.isLeap     = isLeap;
      //干支
      this.cYear      = cYear;
      this.cMonth     = cMonth;
      this.cDay       = cDay;

      this.color      = '';

      this.lunarFestival = ''; //农历节日
      this.solarFestival = ''; //国历节日
      this.solarTerms    = ''; //节气

}
//===== 某年的第n个节气为几日(从0小寒起算)
function sTerm(y,n) {
   var offDate = new Date( ( 31556925974.7*(y-1900) + sTermInfo[n]*60000  ) + Date.UTC(1900,0,6,2,5) )
   return(offDate.getUTCDate())
}

//============================== 传回月历物件 (y年,m+1月)
function calendar(y,m) {

   var sDObj, lDObj, lY, lM, lD=1, lL, lX=0, tmp1, tmp2
   var lDPOS = new Array(3)
   var lDPOSleap = new Array(3) //modified by mengxw,记录农历闰月。
   var n = 0
   var firstLM = 0

   sDObj = new Date(y,m,1)				//当月一日日期

   this.length    = solarDays(y,m)		//国历当月天数
   this.firstWeek = sDObj.getDay()		//国历当月1日星期几

   for(var i=0;i<3;i++) lDPOSleap[i]=0	//modified by mengxw,农历闰月初始化。
   for(var i=0;i<this.length;i++) {

      if(lD>lX) {
         sDObj = new Date(y,m,i+1)		//当月一日日期
         lDObj = new Lunar(sDObj)		//农历
         lY    = lDObj.year				//农历年
         lM    = lDObj.month			//农历月
         lD    = lDObj.day				//农历日
         lL    = lDObj.isLeap			//农历是否闰月
         lX    = lL? leapDays(lY): monthDays(lY,lM) //农历当月最后一天

         if(n==0) firstLM = lM
         lDPOS[n++] = i-lD+1
         lDPOSleap[n-1] = lL?1:0		//modified by mengxw,记录农历闰月，//1表示闰月
      }

      //sYear,sMonth,sDay,week,
      //lYear,lMonth,lDay,isLeap,
      //cYear,cMonth,cDay
      this[i] = new calElement(y, m+1, i+1, nStr1[(i+this.firstWeek)%7],
								lY, lM, lD++, lL,
								cyclical(lDObj.yearCyl) ,cyclical(lDObj.monCyl), cyclical(lDObj.dayCyl++) )

      if((i+this.firstWeek)%7==0)   this[i].color = 'red'  //周日颜色
      if((i+this.firstWeek)%14==13) this[i].color = 'red'  //周休二日颜色
   }

   //节气
   tmp1=sTerm(y,m*2  )-1
   tmp2=sTerm(y,m*2+1)-1
   this[tmp1].solarTerms = solarTerm[m*2]
   this[tmp2].solarTerms = solarTerm[m*2+1]
   if(m==3) this[tmp1].color = 'red' //清明颜色

   //国历节日
   for(i in sFtv)
      if(sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))
         if(Number(RegExp.$1)==(m+1)) {
            this[Number(RegExp.$2)-1].solarFestival += RegExp.$4 + ' '
            if(RegExp.$3=='*') this[Number(RegExp.$2)-1].color = 'red'
         }

   //月周节日
   for(i in wFtv)
      if(wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/))
         if(Number(RegExp.$1)==(m+1)) {
            tmp1=Number(RegExp.$2)
            tmp2=Number(RegExp.$3)
            this[((this.firstWeek>tmp2)?7:0) + 7*(tmp1-1) + tmp2 - this.firstWeek].solarFestival += RegExp.$5 + ' '
         }

   //农历节日
   for(i in lFtv)
      if(lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
         tmp1=Number(RegExp.$1)-firstLM
         /*if(tmp1==-11) tmp1=1
         if(tmp1 >=0 && tmp1<n) {
            tmp2 = lDPOS[tmp1] + Number(RegExp.$2) -1
            if( tmp2 >= 0 && tmp2<this.length) {
               this[tmp2].lunarFestival += RegExp.$4 + ' '
               if(RegExp.$3=='*') this[tmp2].color = 'red'
            }
         }*/
         if(tmp1<=-11) tmp1=tmp1+12 //modified by mengxw,begin
         if((lDPOSleap[1]==0&&lDPOSleap[2]==0)||( tmp1==0 && lDPOSleap[1]==1 )||(tmp1<=1&& lDPOSleap[2]==1)) {
            tmp2 = lDPOS[tmp1] + Number(RegExp.$2) -1
            if( tmp2 >= 0 && tmp2<this.length) {
               this[tmp2].lunarFestival += RegExp.$4 + ' '
               if(RegExp.$3=='*') this[tmp2].color = 'red'
            }
            }
            if (lDPOSleap[1]==1 && tmp1<n-1 && tmp1>=0) {
            tmp2 = lDPOS[tmp1+1] + Number(RegExp.$2) -1
            if( tmp2 >= 0 && tmp2<this.length) {
               this[tmp2].lunarFestival += RegExp.$4 + ' '
               if(RegExp.$3=='*') this[tmp2].color = 'red'
            }
            }
            if (lDPOSleap[2]==1 && tmp1==1) {
            tmp2 = lDPOS[tmp1+1] + Number(RegExp.$2) -1
            if( tmp2 >= 0 && tmp2<this.length) {
               this[tmp2].lunarFestival += RegExp.$4 + ' '
               if(RegExp.$3=='*') this[tmp2].color = 'red'
            }
         }//modified by mengxw,end 处理农历闰月
      }

   //黑色星期五
   if((this.firstWeek+12)%7==5)
      this[12].solarFestival += '黑色星期五 '

   //今日
   if(y==tY && m==tM) this[tD-1].isToday = true;

}

//====================== 中文日期
function cDay(d){
   var s;

   switch (d) {
      case 10:
         s = '初十'; break;
      case 20:
         s = '二十'; break;
         break;
      case 30:
         s = '三十'; break;
         break;
      default :
         s = nStr2[Math.floor(d/10)];
         s += nStr1[d%10];
   }
   return(s);
}
var cld;

function drawCld(SY,SM) {
   var i,sD,s,size;
   cld = new calendar(SY,SM);

   if(SY>1874 && SY<1909) yDisplay = '佛历' + (((SY-1874)==1)?'元':SY+544)
   if(SY>1908 && SY<1912) yDisplay = '佛历' + (((SY-1908)==1)?'元':SY+544)
   if(SY>1911) yDisplay = '佛历' + (((SY+544)==1)?'元':SY+544)

   GZ.innerHTML = yDisplay +'年 农历岁次' + cyclical(SY-1900+36) + '年 &nbsp;&nbsp;【'+Animals[(SY-4)%12]+'】';

   YMBG.innerHTML = "&nbsp;" + SY + "<BR>&nbsp;" + monthName[SM];

   for(i=0;i<42;i++) {

      sObj=eval('SD'+ i);
      lObj=eval('LD'+ i);

      sObj.className = '';

      sD = i - cld.firstWeek;

      if(sD>-1 && sD<cld.length) { //日期内
         sObj.innerHTML = sD+1;

         if(cld[sD].isToday) sObj.className = 'todyaColor'; //今日颜色

         sObj.style.color = cld[sD].color; //国定假日颜色

         if(cld[sD].lDay==1) //显示农历月
//            lObj.innerHTML = '<b>'+(cld[sD].isLeap?'闰':'') + cld[sD].lMonth + '//月' + (monthDays(cld[sD].lYear,cld[sD].lMonth)==29?'小':'大')+'</b>';
            lObj.innerHTML = '<b>'+(cld[sD].isLeap?'闰':'') + nStr3[cld[sD].lMonth] + '月' + ((cld[sD].isLeap?leapDays(cld[sD].lYear):monthDays(cld[sD].lYear,cld[sD].lMonth))==29?'小':'大')+'</b>'; //釋慧剛 - 用漢字數字顯示農歷月份並更正閏月大//小顯示錯誤
         else //显示农历日
            lObj.innerHTML = cDay(cld[sD].lDay);

         s=cld[sD].lunarFestival;
         if(s.length>0) { //农历节日
            if(s.length>6) s = s.substr(0, 4)+'…';
            s = s.fontcolor('red');
         }
         else { //国历节日
            s=cld[sD].solarFestival;
            if(s.length>0) {
               size = (s.charCodeAt(0)>0 && s.charCodeAt(0)<128)?8:4;
               if(s.length>size+2) s = s.substr(0, size)+'…';
               s = s.fontcolor('blue');
            }
            else { //廿四节气
               s=cld[sD].solarTerms;
               if(s.length>0) s = s.fontcolor('limegreen');
            }
         }
         if(s.length>0) lObj.innerHTML = s;

      }
      else { //非日期
         sObj.innerHTML = '';
         lObj.innerHTML = '';
      }
   }
}

function changeCld() {
   var y,m;
   y=CLD.SY.selectedIndex+1900;
   m=CLD.SM.selectedIndex;
   drawCld(y,m);
}

function pushBtm(K) {
   switch (K){
      case 'YU' :
         if(CLD.SY.selectedIndex>0) CLD.SY.selectedIndex--;
         break;
      case 'YD' :
         if(CLD.SY.selectedIndex<149) CLD.SY.selectedIndex++;
         break;
      case 'MU' :
         if(CLD.SM.selectedIndex>0) {
            CLD.SM.selectedIndex--;
         }
         else {
            CLD.SM.selectedIndex=11;
            if(CLD.SY.selectedIndex>0) CLD.SY.selectedIndex--;
         }
         break;
      case 'MD' :
         if(CLD.SM.selectedIndex<11) {
            CLD.SM.selectedIndex++;
         }
         else {
            CLD.SM.selectedIndex=0;
            if(CLD.SY.selectedIndex<149) CLD.SY.selectedIndex++;
         }
         break;
      default :
         CLD.SY.selectedIndex=tY-1900;
         CLD.SM.selectedIndex=tM;
   }
   changeCld();
}

var Today = new Date();
var tY = Today.getFullYear();
var tM = Today.getMonth();
var tD = Today.getDate();

//////////////////////////////////////////////////////////////////////////////

var width = "130";
var offsetx = 2;
var offsety = 16;

var x = 0;
var y = 0;
var snow = 0;
var sw = 0;
var cnt = 0;

var dStyle;
document.onmousemove = mEvn;

//显示详细日期资料
function mOvr(v) {
   var s,festival;
   var sObj=eval('SD'+ v);
   var d=sObj.innerHTML-1;

      //sYear,sMonth,sDay,week,
      //lYear,lMonth,lDay,isLeap,
      //cYear,cMonth,cDay

   if(sObj.innerHTML!='') {

      sObj.style.cursor = 's-resize';

      if(cld[d].solarTerms == '' && cld[d].solarFestival == '' && cld[d].lunarFestival == '')
         festival = '';
      else
         festival = '<TABLE WIDTH=100% BORDER=0 CELLPADDING=2 CELLSPACING=0 BGCOLOR="#CCFFCC"><TR><TD>'+
         '<center><FONT COLOR="#000000" STYLE="font-size:12pt;">'+cld[d].solarTerms + ' ' + cld[d].solarFestival + ' ' + cld[d].lunarFestival+'</FONT></center></TD>'+
         '</TR></TABLE>';

      s= '<TABLE WIDTH="100%" BORDER=0 CELLPADDING="2" CELLSPACING=0 BGCOLOR="#CCFFCC"><TR><TD>' +
         '<TABLE WIDTH=100% BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD ALIGN="right"><center><FONT COLOR="#000000" STYLE="font-size:12pt;">'+
         cld[d].sYear+' 年 '+cld[d].sMonth+' 月 '+cld[d].sDay+' 日<br>星期'+cld[d].week+'<br>'+
         '<font color="#000000">农历'+(cld[d].isLeap?'闰 ':' ')+cld[d].lMonth+' 月 '+cld[d].lDay+' 日</font><br>'+
         '<font color="#000000">'+cld[d].cYear+'年 '+cld[d].cMonth+'月 '+cld[d].cDay + '日</font>'+
         '</FONT></TD></TR></center></TABLE>'+ festival +'</TD></TR></TABLE>';

      document.all["detail"].innerHTML = s;
     document.all["det"].innerHTML = s;
window.location ="#maodian";
   	if(snow == 0) {
        dStyle.left = x+offsetx-(width/2);
        dStyle.top = y+offsety;
   		dStyle.visibility = "visible";
   		snow = 1;
   	}
  }
}

//清除详细日期资料
function mOut() {
	if( cnt >= 1 ) { sw = 0 }
	if( sw == 0 ) { snow = 0;	dStyle.visibility = "hidden";}
	else cnt++;
}

//取得位置
function mEvn() {
   x=event.x;
   y=event.y;
   if (document.body.scrollLeft){x=event.x+document.body.scrollLeft; y=event.y+document.body.scrollTop;}
   if (snow) {
      dStyle.left = x+offsetx-(width/2)
      dStyle.top = y+offsety
   }
}

///////////////////////////////////////////////////////////////////////////

function changeTZ() {
   CITY.innerHTML = CLD.TZ.value.substr(6)
   setCookie("TZ",CLD.TZ.selectedIndex)
}

function tick() {
   var today
   today = new Date()
   Clock.innerHTML = today.toLocaleString().replace(/(年|月)/g, "/").replace(/日/, "");
   Clock.innerHTML = TimeAdd(today.toGMTString(), CLD.TZ.value)  
   window.setTimeout("tick()", 1000);
}

function setCookie(name, value) {
	var today = new Date()
	var expires = new Date()
	expires.setTime(today.getTime() + 1000*60*60*24*365)
	document.cookie = name + "=" + escape(value)	+ "; expires=" + expires.toGMTString()
}

function getCookie(Name) {
   var search = Name + "="
   if(document.cookie.length > 0) {
      offset = document.cookie.indexOf(search)
      if(offset != -1) {
         offset += search.length
         end = document.cookie.indexOf(";", offset)
         if(end == -1) end = document.cookie.length
         return unescape(document.cookie.substring(offset, end))
      }
      else return ""
   }
}

/////////////////////////////////////////////////////////

function initial() {
   dStyle = detail.style;
   CLD.SY.selectedIndex=tY-1900;
   CLD.SM.selectedIndex=tM;
   drawCld(tY,tM);

   CLD.TZ.selectedIndex=getCookie("TZ");
   changeTZ();
   tick();
}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
