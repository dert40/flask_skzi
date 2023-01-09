//var dialog1 = document.querySelector('.d1');
//document.querySelector('#show1').onclick = function() {
//  document.getElementById('ovr1').style.display='block';
//  alert("****");
//  dialog1.show();
//};
//document.querySelector('#fc1').onclick = function() {
//  dialog1.close();
//};
//
//var dialog = document.querySelector('.d2')
//document.querySelector('#show2').onclick = function() {
//  dialog.show();
//};
//document.querySelector('#fc2').onclick = function() {
//  dialog.close();
//};Test_Col()


function get_cookie ( cookie_name ) // Ф-я получения значения куки по имени
{
      var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

      if ( results )
        return ( unescape ( results[2] ) );
      else
        return null;
}

// Работа с куками, запись и чтение, удаленик
function Test_Col() {

//            document.cookie = "test1=Hello";
//            document.cookie = "test2=World";
           document.cookie = "q1=-04";

         //var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)q1\s*\=\s*([^;]*).*$)|^.*$/, "$1");

             document.getElementById("qaz").style.background ='#78bcff';
             document.getElementById("qaz").style.borderRadius  = '5px';

             document.cookie = "test1=;max-age=-1";
            //   alert(cookieValue);
            //  alert(results[1]);
           // alert(getCookie_2('q1'));
           //    alert(cookieValue);
           //  document.getElementById("qaz").style.opacity = '1.0';	border-radius: 4px;
             // получаем форму
           let form = document.forms.Frm1; // <form name="my"> element
            document.cookie = "q1=" + form.elements.q1.value ;
        //   form.elements.q1.value = get_cookie('q1');

           alert(get_cookie('q1'));
};

function openForm1() {
        if (checkDisp() == false) {
//            alert("нет");
                document.getElementById("myForm1").style.display = "block";
                document.getElementById("myForm1").style.marginTop='12px';
         }
}
function closeForm1() {
    document.getElementById("myForm1").style.display = "none";
}
//openForm2()
function openForm2() {
   if (checkDisp() == false) {
    document.getElementById("myForm2").style.display = "block";
    document.getElementById("myForm2").style.marginTop='12px';
}
}
function closeForm2() {
    document.getElementById("myForm2").style.display = "none";
}

function openForm3() {
   if (checkDisp() == false) {
    document.getElementById("myForm3").style.display = "block";
    document.getElementById("myForm3").style.marginTop='12px';
}
}
function closeForm3() {
    document.getElementById("myForm3").style.display = "none";
}

function openForm4() {
   if (checkDisp() == false) {
    document.getElementById("myForm4").style.display = "block";
    document.getElementById("myForm4").style.marginTop='12px';
}
}
function closeForm4() {
    document.getElementById("myForm4").style.display = "none";
}

function openForm5() {
   if (checkDisp() == false) {
    document.getElementById("myForm5").style.display = "block";
    document.getElementById("myForm5").style.marginTop='12px';
}
}
function closeForm5() {
    document.getElementById("myForm5").style.display = "none";
}

function openForm6() {
   if (checkDisp() == false) {
    document.getElementById("myForm6").style.display = "block";
    document.getElementById("myForm6").style.marginTop='12px';
}
}
function closeForm6() {
    document.getElementById("myForm6").style.display = "none";
}

function openForm7() {
   if (checkDisp() == false) {
    document.getElementById("myForm7").style.display = "block";
    document.getElementById("myForm7").style.marginTop='12px';
}
}
function closeForm7() {
    document.getElementById("myForm7").style.display = "none";
}

function openForm8() {
   if (checkDisp() == false) {
    document.getElementById("myForm8").style.display = "block";
    document.getElementById("myForm8").style.marginTop='12px';
}
}
function closeForm8() {
    document.getElementById("myForm8").style.display = "none";
}

function openForm9() {
   if (checkDisp() == false) {
    document.getElementById("myForm9").style.display = "block";
    document.getElementById("myForm9").style.marginTop='12px';
}
}
function closeForm9() {
    document.getElementById("myForm9").style.display = "none";
}

function openForm10() {
   if (checkDisp() == false) {
    document.getElementById("myForm10").style.display = "block";
    document.getElementById("myForm10").style.marginTop='12px';
}
}
function closeForm10() {
    document.getElementById("myForm10").style.display = "none";
}

function openForm11() {
   if (checkDisp() == false) {
    document.getElementById("myForm11").style.display = "block";
    document.getElementById("myForm11").style.marginTop='12px';
}
}
function closeForm11() {
    document.getElementById("myForm11").style.display = "none";
}

function openForm12() {
   if (checkDisp() == false) {
    document.getElementById("myForm12").style.display = "block";
    document.getElementById("myForm12").style.marginTop='12px';
}
}
function closeForm12() {
    document.getElementById("myForm12").style.display = "none";
}

function openForm13() {
   if (checkDisp() == false) {
    document.getElementById("myForm13").style.display = "block";
    document.getElementById("myForm13").style.marginTop='12px';
  //   document.getElementById("myForm13").style.right='20px';
}
}
function closeForm13() {
    document.getElementById("myForm13").style.display = "none";
};

function openForm14() {
   if (checkDisp() == false) {
    document.getElementById("myForm14").style.display = "block";
    document.getElementById("myForm14").style.marginTop='12px';
     //    document.getElementById("myForm14").style.right='80px';
}
};
function closeForm14() {
    document.getElementById("myForm14").style.display = "none";
};

function openForm15() {
   if (checkDisp() == false) {
    document.getElementById("myForm15").style.display = "block";
     //   document.getElementById("myForm15").style.position = "fixed";
    document.getElementById("myForm15").style.marginTop='12px';
     document.getElementById("myForm15").style.right='20px';
}
}
function closeForm15() {
    document.getElementById("myForm15").style.display = "none";
};

function checkDisp(){ // --- Проверка открыт окна для фильтров myForm1
        let animals = ['myForm1', 'myForm2', 'myForm3', 'myForm4', 'myForm5', 'myForm6', 'myForm7', 'myForm8', 'myForm9', 'myForm10', 'myForm11', 'myForm12', 'myForm13', 'myForm14', 'myForm15'];
        for (let i = 0; i < 15; i++){
            var obj1 = document.getElementById(animals[i]);
//            alert(animals[i], '--', getComputedStyle(obj1).display);
            if (getComputedStyle(obj1).display == "block"){
              return true;
            }
        }
        return false;
};

//----------------------------------------------------------------------------------------

jQuery("#samples_data_div").on('click', '#samples_data_table tbody tr', function(e) {
//alert("****+++");
  if (!e.shiftKey && !e.ctrlKey) {
//    alert("****+++");
    $(this).parent().find('tr').removeClass('active');
    $(this).addClass('active');
  }
});

			var row = document.getElementsByTagName('tr');
			[].forEach.call(row, function(elem){
				elem.addEventListener('click', function (el) {
//		document.forms["formName"].elements["submitType"].value = this.children[0].innerHTML;
       // alert(this.children[0].innerHTML);
    })
});

		$("#samples_data_table tr").click(function(){ // Обработчик щелчка по строке таблицы
		   $(this).addClass('selected').siblings().removeClass('selected');

		   //var value=$(this).find('td:first').html();
		   //alert("Выделим строку");
		});

		<!-- $('.ok').on('click', function(e){ -->
			<!-- alert($("#table tr.selected td:first").html()); -->
		<!-- }); -->

		function fnselect(){ // Вызов окна для сообщений, строка должна быть выделенна или нет
		if ($("tr.selected td:first" ).html() === undefined) { // Строка не выделена
			//alert("Нуль");
			$('#myModal3').modal('show');
		}
		else{
		Get($("tr.selected td:first" ).html());
		$('#myModal2').modal('show');
 		//alert($("tr.selected td:first" ).html());
		}

			<!-- alert($("tr.selected td:first" ).html()); -->
};

//--- Это страницы Дэниса ---------------



function modalInf1(){ // Вызов окна для сообщений, строка должна быть выделенна или нет

        const modalElem = document.querySelector('#mdl_1'); // Копировать строку?
        let overlay      = document.querySelector('.js-overlay-modal');

		overlay.classList.add('active');
		modalElem.classList.add('active');
};
function modalInf2(){ // Вызов окна для сообщений, об удалении строки

        const modalElem = document.querySelector('#mdl_2'); // Удалить строку?
        let overlay      = document.querySelector('.js-overlay-modal');

		overlay.classList.add('active');
		modalElem.classList.add('active');
};
function modalInf3(){ // Вызов окна для сообщений, строка должна быть выделенна или нет

        const modalElem = document.querySelector('#mdl_3'); // Выделите строку в таблице
        let overlay      = document.querySelector('.js-overlay-modal');

		overlay.classList.add('active');
		modalElem.classList.add('active');
};


		function fnselD(){ // Вызов окна для сообщений, строка должна быть выделенна или нет
	//	modalInf3();
		if ($("tr.selected td:first" ).html() === undefined) { // Строка не выделена
          // alert('!!!!!!');
           modalInf3();
			//$('#myModal3').modal('show');
		}
		else{// Строка выделена
		//Get_2($("tr.selected td:first" ).html());
		Get_2($("tr.selected td:first" ).closest('tr').attr('id'));
		 // var id = $(this).closest('tr').attr('id'); // table row ID
		modalInf1();
		//$('#myModal2').modal('show');
		}

};


function fnselectDen(){ // Вызов окна для сообщений, строка должна быть выделенна или нет
//		if ($("tr.selected td:first" ).html() === undefined) {
//			alert("Нуль b ///");
//			$('#data-modal').modal();
//		}
//		else{
//		    Get($("tr.selected td:first" ).html());
// 		    $('#data-modal').modal('show');
//		}
        const modalElem = document.querySelector('.modal');
        let overlay      = document.querySelector('.js-overlay-modal');
			// Assign the warning class to the first div
		//div.className = 'modal.active';

		    overlay.classList.add('active');
			modalElem.classList.add('active');
};

function fnTest(){ // Вызов окна для сообщений, строка должна быть выделенна или нет

//        const modalElem = document.querySelector('#mdl_2');
//        let overlay      = document.querySelector('.js-overlay-modal');
//
//		    overlay.classList.add('active');
//			modalElem.classList.add('active');
          let  a = $("tr.selected td:first" ).closest('tr').attr('id');
          alert(a);
        // Get_2($("tr.selected td:first" ).html());
		 // var id = $(this).closest('tr').attr('id'); // table row ID
};

function fnRow(){ // Вызов окна для сообщений, строка должна быть выделенна или нет
        //alert(12345);
      //  const modalElem = document.querySelector('#t8');
     //   let overlay      = document.querySelector('.js-overlay-modal');

		    //    overlay.classList.add('active');
			//modalElem.classList.add('selected');
            //addClass('selected')
            //			$("#samples_data_table tr").
        //    $( "li.item-ii" ).find( item1 ).css( "background-color", "red" );
   //     jQuery('#t8').addClass('selected').removeClass('selected');
         jQuery('#9').addClass('active').siblings().removeClass('active');
};

function fnClose(cl){ // Вызов окна для сообщений, строка должна быть выделенна или нет
 let modalElem;
      if (cl == 1){
        modalElem = document.querySelector('#mdl_1');
      }
      else if (cl == 2){
        modalElem = document.querySelector('#mdl_2');
      }
      else if (cl == 3){
        modalElem = document.querySelector('#mdl_3');
      }

        let overlay  = document.querySelector('.js-overlay-modal');
			// Assign the warning class to the first div
		//div.className = 'modal.active';

			 overlay.classList.remove('active');
			 modalElem.classList.remove('active');
};

function fnCloseTest(cl){ // Вызов окна для сообщений, строка должна быть выделенна или нет

        const modalElem = document.querySelector('#mdl_2');
        let overlay      = document.querySelector('.js-overlay-modal');

		overlay.classList.remove('active');
		modalElem.classList.remove('active');
};


		function fnDelit(){
		if ($("tr.selected td:first" ).html() === undefined) {
			$('#myModal3').modal('show');
		}
		else{
		Del(($("tr.selected td:first" ).html()));
		$('#myModal4').modal('show');
//		alert($("tr.selected td:first" ).html());
		}

};

//--- для страницы Дэниса

		function fnDelitDn(){
		if ($("tr.selected td:first" ).html() === undefined) {// Строка не выделена
			//$('#myModal3').modal('show');
			       modalInf3();
		}
		else{

		 // var id = $(this).closest('tr').attr('id'); // table row ID

	 //   Get_2($("tr.selected td:first" ).closest('tr').attr('id'));
		DelDn($("tr.selected td:first" ).closest('tr').attr('id'));
			modalInf2();
	//	$('#myModal4').modal('show');
//		alert($("tr.selected td:first" ).html());
		}

};

//--- Денис
	function DelDn(id) {

	var where = document.getElementById('where_to_ins_2');
   //where.innerHTML = '<a class="btn btn-danger" href="/list/' + id + '/del" role="button">Удалить</a>';
     where.innerHTML =  '<a class="btnf btn--primary btnf--color" href="/list/'+id+'/del" role="button">Удалить</a>';
};

		function fn() {
				$('#myModal2').modal('show');
		};
//---
//		var col=0;// Скрываем нолевой столбец таблицы
//        var o=document.querySelector('table');
//        for (var i=0; i<o.rows.length; i++) {
//	        o.rows[i].cells[col].style.display='none';
//};

	function Get_2(id) {// ---
    //alert(id);
	var where = document.getElementById('where_to_ins_1');

     where.innerHTML =  '<a class="btnf btn--primary btnf--color" href="/list/'+id+'/copy" role="button">Копировать</a>';
};

	function Get(id) {
//	var o=document.getElementById('#userid'+N)
//	var val=o.cells[1].innerHTML
	var where = document.getElementById('where_to_ins_2');
//	var raz = document.getElementById('comboA');
//	val='Лицензия: <font color="blue">' + val + '</font><br>' + ' действует до: <font color="blue">' + o.cells[2].innerHTML + '</font>'
//	alert(val)
//	$("#modal_body").html(val)

//    where.innerHTML = '<a class="btn btn-danger" data-toggle="modal" data-target="#modal" href="/key/' + id + '/del" role="button">Удалить</a>';
// where.innerHTML = '<a class="btn btn-danger" href="/key/' + id + '/del" role="button">Удалить</a>';
//where.innerHTML = '<a class="btn btn-danger" href="{{url_for(\'key_delete\',id_k=' + id_k +  ', id_l=' + id_l + ')}}" role="button">Удалить</a>';
//where.innerHTML = '{{url_for(\'key_delete\',id_k=' + id_k + ', id_l=' + id_l + ')}}" role="button">Удалить</a>';
//--- where.innerHTML = '<a class="btn btn-danger" href="/key/'+ id_k + '/' + id_l + '/del" role="button">Удалить</a>';
where.innerHTML = '<a class="btn btn-success" href="/list/' + id + '/copy" role="button">Копировать</a>';
};

	function Del(id) {
//	var o=document.getElementById('#userid'+N)
//	var val=o.cells[1].innerHTML
	var where = document.getElementById('where_to_ins_3');
//	var raz = document.getElementById('comboA');
//	val='Лицензия: <font color="blue">' + val + '</font><br>' + ' действует до: <font color="blue">' + o.cells[2].innerHTML + '</font>'
//	alert(val)
//	$("#modal_body").html(val)

//    where.innerHTML = '<a class="btn btn-danger" data-toggle="modal" data-target="#modal" href="/key/' + id + '/del" role="button">Удалить</a>';
// where.innerHTML = '<a class="btn btn-danger" href="/key/' + id + '/del" role="button">Удалить</a>';
//where.innerHTML = '<a class="btn btn-danger" href="{{url_for(\'key_delete\',id_k=' + id_k +  ', id_l=' + id_l + ')}}" role="button">Удалить</a>';
//where.innerHTML = '{{url_for(\'key_delete\',id_k=' + id_k + ', id_l=' + id_l + ')}}" role="button">Удалить</a>';
//--- where.innerHTML = '<a class="btn btn-danger" href="/key/'+ id_k + '/' + id_l + '/del" role="button">Удалить</a>';
where.innerHTML = '<a class="btn btn-danger" href="/list/' + id + '/del" role="button">Удалить</a>';
};

$( ".white" ).dblclick(function() {
      //  var id = $("tr.selected td:first" ).html(); //первое значение ячейки
        var id = $(this).closest('tr').attr('id'); // table row ID
        //     alert(trid);
        window.open("/list/" + id, "_self" );
});
$( ".grey" ).dblclick(function() {
      //  var id = $("tr.selected td:first" ).html(); //первое значение ячейки
        var id = $(this).closest('tr').attr('id'); // table row ID
        //     alert(trid);
        window.open("/list/" + id, "_self" );
});

$( ".target" ).dblclick(function() {
 // alert( "Handler for .dblclick() called." );
// alert($("tr.selected td:first" ).html());
         var id = $("tr.selected td:first" ).html();

        window.open("/list/" + id, "_self" );
});

		function find_r() {
				$('#myModal5').modal('show');
		};

//		$(function(){
//      $("[data-tooltip]").mousemove(function (eventObject) {
//          $data_tooltip = $(this).attr("data-tooltip");
//          $("#tooltip").html($data_tooltip)
//              .css({
//                "top" : eventObject.pageY + 5,
//                "left" : eventObject.pageX + 5
//              })
//              .show();
//          }).mouseout(function () {
//            $("#tooltip").hide()
//              .html("")
//              .css({
//                  "top" : 0,
//                  "left" : 0
//              });
//      });
//});

//function wd_auto_width() {// для выравнивания меню и таблицы
//        let a = $("#samples_data_table").width();
//        s = a + 'px';
//        document.getElementById("secnav").style.width = s;
//        alert(s);
//};






