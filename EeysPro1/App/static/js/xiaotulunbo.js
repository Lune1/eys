$(function(){
    var len_1 = $("#wide_infcp_1f_left .infcp_baniu li").length;
    var len_2 = $("#wide_infcp_1f_cont .infcp_baniu li").length;
    
    var len_3 = $("#wide_infcp_2f_left .infcp_baniu li").length;
    var len_4 = $("#wide_infcp_2f_cont .infcp_baniu li").length;
    
    var len_5 = $("#wide_infcp_3f_left .infcp_baniu li").length;
    var len_6 = $("#wide_infcp_3f_cont .infcp_baniu li").length;
    
    var len_7 = $("#wide_infcp_4f_ban .infcp_baniu li").length;
 
    var index_1 = 0;
    var index_2 = 0;
    var index_3 = 0;
    var index_4 = 0;
    var index_5 = 0;
    var index_6 = 0;
    var index_7 = 0;
    
    var adTimer_1;
    var adTimer_2;
    var adTimer_3;
    var adTimer_4;
    var adTimer_5;
    var adTimer_6;
    var adTimer_7;
    
    //  function showImg(id, index_s) {
    //     var adWidth = $(id).width();
    //     $(id + " .infcptop").animate({ left: -adWidth * index_s });
    //     $(id + " .infcp_baniu li").removeClass("changebg").eq(index_s).addClass("changebg");
    // }
	//
//	1F楼层
	$("#wide_infcp_1f_left .infcp_baniu li").mouseover(function () {
        index_1 = $(this).index();
        // showImg("#wide_infcp_1f_left", index_1);
    }).eq(0).mouseover();
    $("#wide_infcp_1f_left").hover(function () {
        clearInterval(adTimer_1);
    },
        function () {
            adTimer_1 = setInterval(function () {
                // showImg("#wide_infcp_1f_left", index_1);
                index_1++;
                if (index_1 == len_1) {
                    index_1 = 0;
                }
            }, 2000);
               
        }).trigger("mouseleave");
        
        $("#wide_infcp_1f_cont .infcp_baniu li").mouseover(function () {
        	index_2 = $(this).index();
        	// showImg("#wide_infcp_1f_cont", index_2);
    	}).eq(0).mouseover();
    	$("#wide_infcp_1f_cont").hover(function () {
       		 clearInterval(adTimer_2);
    	},
        function () {
            adTimer_2 = setInterval(function () {
                // showImg("#wide_infcp_1f_cont", index_2);
                index_2++;
                if (index_2 == len_2) {
                    index_2 = 0;
                }
            },2000);
                
        }).trigger("mouseleave");

//	2F楼层
	$("#wide_infcp_2f_left .infcp_baniu li").mouseover(function () {
        index_3 = $(this).index();
        // showImg("#wide_infcp_1f_left", index_3);
    }).eq(0).mouseover();
    $("#wide_infcp_2f_left").hover(function () {
        clearInterval(adTimer_3);
    },
        function () {
            adTimer_3 = setInterval(function () {
                // showImg("#wide_infcp_2f_left", index_3);
                index_3++;
                if (index_3 == len_3) {
                    index_3 = 0;
                }
            }, 2000);
               
        }).trigger("mouseleave");
        
        $("#wide_infcp_2f_cont .infcp_baniu li").mouseover(function () {
        	index_4 = $(this).index();
        	// showImg("#wide_infcp_2f_cont", index_4);
    	}).eq(0).mouseover();
    	$("#wide_infcp_2f_cont").hover(function () {
       		 clearInterval(adTimer_4);
    	},
        function () {
            adTimer_4 = setInterval(function () {
                // showImg("#wide_infcp_2f_cont", index_4);
                index_4++;
                if (index_4== len_4) {
                    index_4 = 0;
                }
            },2000);
                
        }).trigger("mouseleave");
        
        
//	3F楼层
	$("#wide_infcp_3f_left .infcp_baniu li").mouseover(function () {
        index_5 = $(this).index();
        // showImg("#wide_infcp_3f_left", index_5);
    }).eq(0).mouseover();
    $("#wide_infcp_3f_left").hover(function () {
        clearInterval(adTimer_5);
    },
        function () {
            adTimer_5 = setInterval(function () {
                // showImg("#wide_infcp_3f_left", index_5);
                index_5++;
                if (index_5 == len_5) {
                    index_5 = 0;
                }
            }, 2000);
               
        }).trigger("mouseleave");
        
        $("#wide_infcp_3f_cont .infcp_baniu li").mouseover(function () {
        	index_6 = $(this).index();
        	// showImg("#wide_infcp_3f_cont", index_6);
    	}).eq(0).mouseover();
    	$("#wide_infcp_3f_cont").hover(function () {
       		 clearInterval(adTimer_6);
    	},
        function () {
            adTimer_6 = setInterval(function () {
                // showImg("#wide_infcp_3f_cont", index_6);
                index_6++;
                if (index_6== len_6) {
                    index_6 = 0;
                }
            },2000);
                
        }).trigger("mouseleave");
        
 //4F楼层
 	$("#wide_infcp_4f_ban .infcp_baniu li").mouseover(function () {
        index_7 = $(this).index();
        // showImg("#wide_infcp_4f_ban", index_7);
    }).eq(0).mouseover();

    $("#wide_infcp_4f_ban").hover(function () {
        clearInterval(adTimer_7);
    },
        function () {
            adTimer_7 = setInterval(function () {
                // showImg("#wide_infcp_4f_ban", index_7);
                index_7++;
                if (index_7 == len_7) {
                    index_7 = 0;
                }
            },
                4000);
        }).trigger("mouseleave");

})
