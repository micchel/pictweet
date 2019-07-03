$(function(){
  function buildHTML(comment){
    var html = `<p>
                  <strong>
                    <a href=/users/${comment.user_id}>${comment.user_name}</a>
                      :
                  </strong>
                  ${comment.text}
                </p>`
    return html;
  }
  console.log("DOSUKOI");
  $('#new_comment').on('submit', function(e) {
    console.log("JSON");
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.comments').append(html);
      $('.textbox').val('');
    })
    .fail(function(XMLHttpRequest, textStatus, errorThrown){
      console.log(XMLHttpRequest.status);
      console.log(textStatus.status);
      console.log(errorThrown);
      alert('error');
    })
  })
});
