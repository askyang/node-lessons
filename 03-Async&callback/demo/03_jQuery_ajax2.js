var doneHanlder = function(ret){
    console.log(ret);
};

var failHandler = function (err){
    console.log(err);
};

var alwaysHandler = function(ret){
    console.log(ret);
}

$.ajax({
    url: '//getServerTimeApi.do'
}).done(doneHanlder)
  .fail(failHandler)
  .always(alwaysHandler);
