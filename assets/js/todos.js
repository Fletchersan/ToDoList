//check of specific todos by clicking
//works this way because on can only be added to element which exist when this code is run the first time
//adding click listener wont work on newly added todos!
$("ul").on("click","li",function(){
    $(this).toggleClass("completed")
})
//click on span to delete the function
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(300,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//adding a new to do
$("input[type='text']").keypress(function(event){
    if(event.which == 13){
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>X</span> "+todoText+"</li>");
    }
});