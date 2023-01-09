function Get(N, id_k, id_l) {
	var o=document.getElementById('#userid'+N)
	var val=o.cells[1].innerHTML
	var where = document.getElementById('where_to_insert');
//	var raz = document.getElementById('comboA');
	val='Лицензия: <font color="blue">' + val + '</font><br>' + ' действует до: <font color="blue">' + o.cells[2].innerHTML + '</font>'
//	alert(val)
	$("#modal_body").html(val)

//    where.innerHTML = '<a class="btn btn-danger" data-toggle="modal" data-target="#modal" href="/key/' + id + '/del" role="button">Удалить</a>';
// where.innerHTML = '<a class="btn btn-danger" href="/key/' + id + '/del" role="button">Удалить</a>';
//where.innerHTML = '<a class="btn btn-danger" href="{{url_for(\'key_delete\',id_k=' + id_k +  ', id_l=' + id_l + ')}}" role="button">Удалить</a>';
//where.innerHTML = '{{url_for(\'key_delete\',id_k=' + id_k + ', id_l=' + id_l + ')}}" role="button">Удалить</a>';
where.innerHTML = '<a class="btn btn-danger" href="/key/'+ id_k + '/' + id_l + '/del" role="button">Удалить</a>';
}
   function setType(type)
   {
      //formName is the name of your form, submitType is the name of the submit button.
      document.forms["formName"].elements["submitType"].value = type;

      //Alternately, you can access the button by its Id
      document.getElementById("submitId").value = type;
   }
   function Inform()
   {
        val = 'Для ввода ключа сохраните картачку лицензии!';
        alert(val);
   }
   function getComboA(selectObject)
  {
//        var value = selectObject.value;
////        alert(value);
////         $("#exampleModalLabel").html('-------')
//         $('#modalLic').modal();

    }
//    raz.addEventListener("focus", function() {
//    $('#modalLic').modal();
//        t.value += 'focus\n';
//        t.scrollTop = t.scrollHeight;
//    })
function Get_J(doc, uiid) {
//Функция  для модального окна при удалении документа из журнала СКЗИ
	//var o=document.getElementById('#userid'+N)
	//var val=o.cells[1].innerHTML
	var where = document.getElementById('where_to_insert');
//	var raz = document.getElementById('comboA');
//	val='Лицензия: <font color="blue">' + val + '</font><br>' + ' действует до: <font color="blue">' + o.cells[2].innerHTML + '</font>'
//	alert(val)
    val = 'Удалить документ от ' + doc + ' ?'

	$("#modal_body").html(val)

//    where.innerHTML = '<a class="btn btn-danger" data-toggle="modal" data-target="#modal" href="/key/' + id + '/del" role="button">Удалить</a>';
// where.innerHTML = '<a class="btn btn-danger" href="/key/' + id + '/del" role="button">Удалить</a>';
//where.innerHTML = '<a class="btn btn-danger" href="{{url_for(\'key_delete\',id_k=' + id_k +  ', id_l=' + id_l + ')}}" role="button">Удалить</a>';
//where.innerHTML = '{{url_for(\'key_delete\',id_k=' + id_k + ', id_l=' + id_l + ')}}" role="button">Удалить</a>';
where.innerHTML = '<a class="btn btn-danger" href="/journal/'+ uiid  + '/del" role="button">Удалить</a>';
//"/journal/{{el[0].uuid}}/del
}

