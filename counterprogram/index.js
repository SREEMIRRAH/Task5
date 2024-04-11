var count = 0;

$('#incBtn').click(function(){
    count++;
    $('#counterLabel').text(count);
});

$('#decBtn').click(function(){
        count--;
        $('#counterLabel').text(count);
});
$('#resetBtn').click(function(){
    count = 0;
    $('#counterLabel').text(count);
});

