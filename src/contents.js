var form = document.forms.myform;
 
form.myfile.addEventListener( 'change', function(e) {
 
    var result = e.target.files[0];
 
    //FileReaderのインスタンスを作成する
    var reader = new FileReader();
  
    //読み込んだファイルの中身を取得する
    reader.readAsText(result, 'shift-jis');
  
    //ファイルの中身を取得後に処理を行う
    reader.addEventListener( 'load', function() {
    
        //内容を取得
        var content = JSON.parse(reader.result).content;
        
        //中身をtextarea内に表示する
        form.output.textContent = content;
    })
})