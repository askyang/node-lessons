function createXHR(){
    var xhr = null;

    if(XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        try{
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(ex){
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                xhr = null;
            }
        }
    }

    retrun null;
}

var xhr = createXHR();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
    }
}
xhr.open('get', '//getServerTime.do', true);
xhr.send();
