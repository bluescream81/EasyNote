var form = document.forms.myform;
 
form.myfile.addEventListener( 'change', function(e) {
 
    var result = e.target.files[0];
 
    //FileReader�̃C���X�^���X���쐬����
    var reader = new FileReader();
  
    //�ǂݍ��񂾃t�@�C���̒��g���擾����
    reader.readAsText(result, 'shift-jis');
  
    //�t�@�C���̒��g���擾��ɏ������s��
    reader.addEventListener( 'load', function() {
    
        //���e���擾
        var content = JSON.parse(reader.result).content;
        
        //���g��textarea���ɕ\������
        form.output.textContent = content;
    })
})