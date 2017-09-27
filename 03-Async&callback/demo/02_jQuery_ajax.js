$.ajax({
    method: 'post',
    url: '//getServerTimeApi.do',
    data: {
        name: 'xxx',
        timeZone: '+0800'
    },
    success: function(ret){},
    error: function(err){}
});
